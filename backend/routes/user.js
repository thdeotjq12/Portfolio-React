const express = require('express');
const db = require('../models');
const bcrypt = require('bcrypt');
const passport = require('passport');
const router = express.Router();

router.get('/', (req, res) => {

});
router.post('/', async (req, res) => { // POST api/user 회원가입
    try {
        const exUser = await db.User.findOne({
            where:{
                userId: req.body.userId,
            },
        });
        if(exUser){
            return res.status(403).send('이미 사용중인 아이디 입니다.'); 
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12); // salt는 10-13 사이 (높을수록 성능부하, 비밀번호 암호화)       
        const newUser = await db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password: hashedPassword,
        });
        console.log(newUser);
        return res.status(200).json(newUser);
    } catch(e){
        console.error(e);
        // 에러처리를 여기서
        return next(e); // next : front에 에러났다고 알려줌(최후의 보루)
    }
});
router.get('/:id', (req, res) => {

});
router.get('/logout', (req, res) => {

});
router.get('/login', (req, res, next) => { // POST /api/user/login
    console.log('여기얌~~!!!');
    passport.authenticate('local', (err, user, info) =>{
        // 서버에러
        if(err){
            console.error(err);
            return next(err);
        }
        // 로직상 에러
        if(info){
            return res.status(401).send(info.reason);
        }
        return req.login(user, (loginErr)=> {
            // 거의없는 경우지만 로그인 에러가 났을 시
            if(loginErr){
                return next(loginErr);
            }
            // 여기까지 성공하면 user 가 session , cookie 로 저장됨
            const filteredUser = Object.assign( {}, user.toJSON());  // 비밀번호를 바로 보내면 위험함
            delete filteredUser.password;
            return res.json(filteredUser); // front에 사용자 정보를 json 형태로 보냄
        });
    })(req, res, next);
});
router.get('/:id/follow', (req, res) => {

});
router.post('/:id/follow', (req, res) => {

});
router.delete('/:id/follow', (req, res) => {

});

module.exports = router;