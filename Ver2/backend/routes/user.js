const express = require('express');
const db = require('../models');
const bcrypt = require('bcrypt');
const passport = require('passport');
const router = express.Router();

router.get('/', (req, res) => { // /api/user
    // 참고로 401은 비밀번호나 아이디가 틀렸을 확률이 높고, 500은 서버쪽에서 코딩이 잘못되었을 확률이 높습니다.
    if(!req.user){
        return res.status(401).send('로그인이 필요합니다.');
    }
    // 패스워드 정보는 볼수 있기 때문에 삭제
    const user = Object.assign( {}, req.user.toJSON());
    delete user.password;
    return res.json(user);
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
router.get('/:id', async (req, res, next) => { // 남의 정보 가져오는 것 ex) /api/user/123
    try {
        const user = await db.User.findOne({
          where: { id: parseInt(req.params.id, 10) },
          include: [{
            model: db.Post,
            as: 'Posts',
            attributes: ['id'],
          }, {
            model: db.User,
            as: 'Followings',
            attributes: ['id'],
          }, {
            model: db.User,
            as: 'Followers',
            attributes: ['id'],
          }],
          attributes: ['id', 'nickname'],
        });
        const jsonUser = user.toJSON();
        jsonUser.Posts = jsonUser.Posts ? jsonUser.Posts.length : 0;
        jsonUser.Followings = jsonUser.Followings ? jsonUser.Followings.length : 0;
        jsonUser.Followers = jsonUser.Followers ? jsonUser.Followers.length : 0;
        res.json(jsonUser);
    } catch (e) {
        console.error(e);
        next(e);
    }
});
router.post('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('logout 성공');
});
router.post('/login', (req, res, next) => { // POST /api/user/login
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
        return req.login(user, async (loginErr)=> {
            // 거의없는 경우지만 로그인 에러가 났을 시
            try{
                if(loginErr){
                    return next(loginErr);
                }
                // 여기까지 성공하면 user 가 session , cookie 로 저장됨
                const fullUser = await db.User.findOne({
                    where:{ id: user.id},
                    include:[{
                        model: db.Post,
                        as:'Posts',
                        attributes:['id'],
                    },{
                        model:db.User,
                        as: 'Followings',
                        attributes:['id'],
                    },{
                        model: db.User,
                        as: 'Followers',
                        attributes:['id'],
                    }],
                    attributes: ['id', 'nickname', 'userId'], // 프론트에 password 를 제외하고 보내줄 것들

                });
                console.log(fullUser);
                
                return res.json(fullUser); // front에 사용자 정보를 json 형태로 보냄, saga에서 loginSuccess 로 이어짐
            }catch(e){
                next(e);
            }
        });
    })(req, res, next);
});
router.get('/:id/follow', (req, res) => {

});
router.post('/:id/follow', (req, res) => {

});
router.delete('/:id/follow', (req, res) => {

});

router.get('/:id/posts', async (req, res, next) => {
    try {
      const posts = await db.Post.findAll({
        where: {
          UserId: parseInt(req.params.id, 10),
          RetweetId: null,
        },
        include: [{
          model: db.User,
          attributes: ['id', 'nickname'],
        }, {
          model: db.Image,
        }, {
          model: db.User,
          through: 'Like',
          as: 'Likers',
          attributes: ['id'],
        }],
      });
      res.json(posts);
    } catch (e) {
      console.error(e);
      next(e);
    }
  });


module.exports = router;