const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const expresSession = require('express-session');
const path = require('path');

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
    server.use('/', express.static(path.join(__dirname, 'public'))); // 프론트주소, 서버주소 - 파비콘
    server.use(express.json());
    server.use(express.urlencoded({extended : true}));
    server.use(cookieParser(process.env.COOKIE_SECRET));
    server.use(expresSession({
        resave: false,
        saveUninitialized : false,
        secret: process.env.COOKIE_SECRET,
        cookie:{
            httpOnly: true,
            secure: false,
        },
    }));
    // 동적 페이지들
    server.get('/post/:id', (req, res)=>{
        return app.render(req, res, '/post',{tag: req.params.id});
    });
    server.get('/hashtag/:tag', (req, res)=>{
        return app.render(req, res, '/hashtag',{tag: req.params.tag}); // next의 render 기능으로 라우팅함
    });
    server.get('/user/:id', (req, res)=>{
        return app.render(req, res, '/user',{id: req.params.id}) // 두번째 인자값은 해당 페이지로 넘어감
    });
    server.get('*', (req, res)=>{ // * : 모든요청을 여기서 처리 
        return handle(req, res);
    })
    server.listen(3060, ()=>{
        console.log('next+express running on port 3060');
    })

    if (prod) {
        const lex = require('greenlock-express').create({
          version: 'draft-11',
          configDir: '/etc/letsencrypt', // 또는 ~/letsencrypt/etc
          server: 'https://acme-v02.api.letsencrypt.org/directory',
          approveDomains: (opts, certs, cb) => {
            if (certs) {
              opts.domains = ['http://13.124.190.63/.com', 'www.nodebird.com'];
            } else {
              opts.email = 'zerohch0@gmail.com';
              opts.agreeTos = true;
            }
            cb(null, { options: opts, certs });
          },
          renewWithin: 81 * 24 * 60 * 60 * 1000,
          renewBy: 80 * 24 * 60 * 60 * 1000,
        });
        https.createServer(lex.httpsOptions, lex.middleware(server)).listen(443);
        http.createServer(lex.middleware(require('redirect-https')())).listen(80);
    } else {
        server.listen(prod ? process.env.PORT : 3060, () => {
          console.log(`next+express running on port ${prod ? process.env.PORT : 3060}`);
        });
    }
});
