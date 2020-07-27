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
router.get('/:id/comments', async(req, res, next)=>{  // 댓글조회
    try{
        const post = await db.Post.findOne({ where : { id: req.params.id }});
        if(!post){
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        const comments = await db.Comment.findOne({
            where:{
                PostId: req.params.id,
            },
            order:[['createdAt', 'ASC']],
            include:[{
                model:db.User,
                attributes:['id', 'nickname'],
            }]
        })
        res.json(comments);
    }catch(e){
        console.error(e);
        next(e);
    }
});

router.post('/:id/comment', async(req, res, next)=>{ // 댓글작성
    try{
        if(req.user){
            res.status(401).send('로그인이 필요합니다.');
        }
        const post = await db.Post.findOne({ where : {id: req.params.id} })
        if(!post){
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        const newComment = await db.Comment.create({
            PostId: post.id,
            UserId: req.user.id,
            content: req.body.content,
        });
        await post.addComment(newComment.id); //시퀄라이저 보고 추가
        const comment = await db.Comment.findOne({
            where:{
                id: newComment.id,
            },
            include:[{
                model:db.User,
                attributes:['id', 'nickname'],
            }],
        });
        return res.json(comment);
    }catch(e){
        console.error(e);
        return next(e);
    }
});

module.exports = router;