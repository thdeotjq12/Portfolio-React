const passport = require('passport');
const db = require('../models');
const local = require('./local');


module.exports = () => {
    // 1. 로그인 시 [{ id: ?, cookie:'asdas'}] 이런식으로 저장, 쿠키는 프론트 id는 서버로 보내줌, 프론트에서 서버로 쿠키를 보내면 서버에서 id 를 매칭해서 식별함
    passport.serializeUser( (user, done) =>{ 
        return done(null, user.id);
    });
    // 2. 프론트에서 받은 쿠키로 서버에서 id를 가져와 유저정보를 찾는다. (1번 요청보낼때마다 매번 실행, 실무에서는 결과물 캐싱해줌)
    passport.deserializeUser( async (id, done) =>{
        try{
            const user = await db.User.findOne({
                where: { id },
            });
            return done(null, user); // req.user 에 id가 저장되있음
        } catch (e){
            console.error(e);
            return done(e);
        }
    });
    local();
}