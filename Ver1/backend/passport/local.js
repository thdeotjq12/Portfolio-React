// 5-11 로그인 전략
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'userId',
        passwordField: 'password',
    }, async (userId , password, done) => {
        try{
            const user = await db.User.findOne({ where: { userId}});
            if(!user){
                return done(null, false, { reason :' 존재하지 않는 사용자입니다!'});
            }
            const result = await bcrypt.compare(password, user.password); // db, front 비밀번호 비교
            if(result){
                return done(null, user); // 성공했을때 두번째 인자 사용, 첫번째는 서버에러(1)
            }
            return done(null, false, { reason:'비밀번호가 틀립니다.'});
        }catch(e){
            console.error(e);
            return done(e);
        }
    }))
}
