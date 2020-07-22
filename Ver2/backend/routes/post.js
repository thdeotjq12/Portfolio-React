const express = require('express');
const db = require('../models');
const router = express.Router();

router.post('/', async (req,res,next) =>{
    try{
        const hashtags = req.body.content.match(/#[^\s]+/g); // #해쉬태그 의 문자열 추출
        const newPost = await db.Post.create({
            content : req.body.content,
            UserId : req.user.id, //누가 쓴 글인지 
        });
        if(hashtags){
          const result = await Promise.all( hashtags.map(tag => db.Hashtag.findOrCreate( { // findOrCreate : 조회후 없으면 만들어줌 (해쉬태그)
                where : { name : tag.slice(1).toLowerCase()}, // toLowerCase: 영어 해쉬태그는 소문자 통일
            })));
            await newPost.addHashtags(result.map(r=> r[0]));
        }
        // const User  = await newPost.getUser(); // 이방식도 있음
        // newPost.User = User;
        // res.json(newPost);
        const fullPost = await db.Post.findOne({ // 포스트의 아이디로 유저정보를 가져옴
            where : { id : newPost.id },
            include : [{
                model: db.User,
            }],
        });
        res.json(fullPost);
    }catch(e){
        console.error(e);
        next(e);
    }
});
router.post('/images', (req,res) =>{

});

module.exports = router;