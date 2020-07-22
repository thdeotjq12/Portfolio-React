const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const expresSession = require('express-session');


// -- next 부분
const dev = process.env.NODE_ENV !== 'production'; // 개발모드
const prod = process.env.NODE_ENV === 'production';

// express 와 next 를 연결하는 방법
const app = next({dev});
const handle = app.getRequestHandler();
dotenv.config();
// -- express 부분
app.prepare().then( ()=> {
    const server = express();

    server.use(morgan('dev'));
    server.use(express.json());
    server.use(express.urlencoded({extended : true}));
    server.use(cookieParser(process.env.COOKIE_SECRET));
    server.use(expresSession({
        resave: false,
        saveUninitialized : false,
        secret: '',
        cookie:{
            httpOnly: true,
            secure: false,
        },
    }));
    server.get('/hashtag/:tag', (req,res)=>{
        return app.render(req,res, '/hashtag',{tag: req.params.tag}); // next의 render 기능으로 라우팅함
    });
    server.get('/user/:tag', (req,res)=>{
        return app.render(req,res, '/user',{id: req.params.id}) // 두번째 인자값은 해당 페이지로 넘어감
    });
    server.get('*', (req,res)=>{ // * : 모든요청을 여기서 처리 
        return handle(req,res);
    })
    server.listen(3060, ()=>{
        console.log('next+express running on port 3060');
    })
})
