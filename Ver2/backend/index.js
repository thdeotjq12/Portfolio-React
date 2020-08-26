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
const postsAPIRouter = require('./routes/posts');
const hashtagAPIRouter = require('./routes/hashtag');
const hpp = require('hpp');
const helmet = require('helmet');
const https = require('https');
const http = require('http');


const prod = process.env.NODE_ENV === 'production';
const app = express();
db.sequelize.sync(); // 알아서 models에 있는 테이블 생성해줌
dotenv.config();
passportConfig(); // 로그인(세션)관련 함수

if (prod) {
    app.use(hpp());
    app.use(helmet());
    app.use(morgan('combined'));
    app.use(cors({
      origin: 'http://13.124.190.63/',
      credentials: true,
    }));
} else {
    // 서버쪽 로그남김
    app.use(morgan('dev'));
    // 서버에러관련
    app.use(cors( {
        origin : true, // 혹은 front 주소
        credentials : true, // 쿠키 교환 가능
    }));
}

// 이 두개를 사용해야 req.body 가 정상적으로 동작함
app.use(express.json()); // json 형식의 데이터 처리
app.use(express.urlencoded( { extended: true })); // 폼으로 넘어온 데이터 처리 

// 이미지 업로드(미리보기)관련 - 경로안에 있는 파일을 다른 서버에서 자유롭게 가져갈 수 있음
app.use('/', express.static('uploads')); // '/': uploads 폴더를 루트폴더로 지정(프론트에서 접근하는 주소)

// 쿠키는 서버에서 세션 을 front 로 전달해줌 (프론트에서는 세션을 쿠키로 저장해둠,웹 개발자도구-Application-Storage-Cookies 에서 확인)
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave:false, // (필수)매번 세션 강제 저장
    saveUninitialized:false, // (필수)빈 값도 저장
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true, // 자바스크립트로 http 에 접근하는 쿠키접근 방지
        secure : prod, // https 를 사용할때 true
        domain: prod && 'http://13.124.190.63/',
    },
    name : 'onL' // 취약점 보호용 세션이름 변경
}));
// express 세션 아래에 사용하기(의존관계) passport세션이 express세션을 내부적으로 사용
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('react nodebird 백엔드 정상 동작!');
});


app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/hashtag',hashtagAPIRouter);

if (prod) {
    const lex = require('greenlock-express').create({
      version: 'draft-11',
      configDir: '/etc/letsencrypt', // 또는 ~/letsencrypt/etc
      server: 'https://acme-v02.api.letsencrypt.org/directory',
      approveDomains: (opts, certs, cb) => {
        if (certs) {
          opts.domains = ['api.http://13.124.190.63/'];
        } else {
          opts.email = 'zerohch0@gmail.com';
          opts.agreeTos = true;
        }
        cb(null, { options: opts, certs });
      },
      renewWithin: 81 * 24 * 60 * 60 * 1000,
      renewBy: 80 * 24 * 60 * 60 * 1000,
    });
    https.createServer(lex.httpsOptions, lex.middleware(app)).listen(443);
    http.createServer(lex.middleware(require('redirect-https')())).listen(80);
  } else {
    app.listen(prod ? process.env.PORT : 3065, () => {
      console.log(`server is running on ${process.env.PORT}`);
    });
}


