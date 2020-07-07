const express = require('express');
const db =require('./models');
const morgan = require('morgan');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/post');
const app = express();
db.sequelize.sync(); // 알아서 models에 있는 테이블 생성해줌

// 이 두개를 사용해야 req.body 가 정상적으로 동작함
app.use(express.json()); // json 형식의 데이터 처리
app.use(express.urlencoded( { extended: true })); // 폼으로 넘어온 데이터 처리 

// 로그남김
app.use(morgan('dev'));

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.listen(3065, () => {
    console.log('server is running on localhost:8080');
});

