const express = require('express');
const db =require('./models');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv'); // 해킹방지 비밀번호 저장용 파일(.env)
const passport = require('passport'); // 쿠키, 세션 엑션을 자동화해줌
const passportConfig = require('./passport');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/post');
const app = express();
db.sequelize.sync(); // 알아서 models에 있는 테이블 생성해줌

dotenv.config();
passportConfig(); // 로그인(세션)관련 함수
// 이 두개를 사용해야 req.body 가 정상적으로 동작함
app.use(express.json()); // json 형식의 데이터 처리
app.use(express.urlencoded( { extended: true })); // 폼으로 넘어온 데이터 처리 
// 서버쪽 로그남김
app.use(morgan('dev'));
// 서버에러관련
app.use(cors());
// 쿠키는 서버에서 세션 을 front 로 전달해줌 (프론트에서는 세션을 쿠키로 저장해둠,웹 개발자도구-Application-Storage-Cookies 에서 확인)
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave:false, // (필수)매번 세션 강제 저장
    saveUninitialized:false, // (필수)빈 값도 저장
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true, // 자바스크립트로 http 에 접근하는 쿠키접근 방지
        secure : false, // https 를 사용할때 true
    }
}));
// express 세션 아래에 사용하기(의존관계) passport세션이 express세션을 내부적으로 사용
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.listen(3065, () => {
    console.log('server is running on localhost:3065');
});

