const express = require('express');
const db = require('../models');
const multer = require('multer'); // FormData 는 bodyParser로 처리할 수 없음, 그래서 이 미들웨어 사용함(이미지,영상 업로드 등)
const path = require('path'); // 파일 확장자 추출
const router = express.Router();
const {isLoggedIn} = require('./middleware');

const upload = multer( {
    storage: multer.diskStorage({ // 서버쪽 디스크에 먼저 저장하는 옵션 
        destination(req, file, done){ // 파일이 저장될 위치
            done(null, 'uploads');
        },
        filename(req, file, done){ // 파일명
            const ext = path.extname(file.originalname); //파일명이 겹칠 수 있기때문에 originalname 해줌, 거기서 확장자 추출
            const basename = path.basename(file.originalname, ext); // 확장자를 제외한 이름 추출: 안녕.png , .png = ext, basename = 안녕
            done(null, basename + new Date().valueOf() + ext ); // 기존 파일명 변경(파일명이 같으면 덮어씌워짐)
        }
    }),
    limits : { fileSize : 20 * 1024 * 1024 }, // byte 단위 : kilo * mega * , 20m
})

router.post('/', isLoggedIn, upload.none(), async (req,res,next) =>{ 
    // upload.none() :이미지가 아니라 주소(text)때문에 upload.none() 사용
    // 폼데이터 파일(이미지) > req.files(s), 폼데이터 일반 값(기타 텍스트 들) > req.body 이렇게 보내줌(멀터 기능)
    try{
        // if(req.user){
        //     res.status(401).send('로그인이 필요합니다.');
        // } >> 미들웨어의 isLoggedIn으로 대체

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
        if(req.body.image){ // 이미지 주소가 여러개면 배열로 옴 [주소1, 주소2]
            if(Array.isArray(req.body.image)){
                const images = await Promise.all(req.body.image.map((image)=> {
                    return db.Image.create({ src: image });
                }))
                await newPost.addImages(images); // 시퀄라이저에서 메서드 추가
            }else{ // 이미지가 하나인 경우 주소1
                const image = await db.Image.create( { src: req.body.image }); // 이미지 주소 저장
                await newPost.addImage(image);
            }
            
        }
        // const User  = await newPost.getUser(); // 이방식도 있음
        // newPost.User = User;
        // res.json(newPost);
        const fullPost = await db.Post.findOne({ // 포스트의 아이디로 유저정보를 가져옴
            where : { id : newPost.id },
            include : [{
                model: db.User,
            },{
                model: db.Image,
            }],
        });
        res.json(fullPost);
    }catch(e){
        console.error(e);
        next(e);
    }
});

router.post('/images', upload.array('image'), (req,res) =>{
    res.json(req.files.map(v=> v.filename)); // 파일명을 다시 프론트로
});
router.get('/:id/comments', async(req, res, next)=>{  // 댓글조회
    try{
        const post = await db.Post.findOne({ where : { id: req.params.id }});
        if(!post){
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        const comments = await db.Comment.findAll({
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

router.post('/:id/comment', isLoggedIn, async(req, res, next)=>{ // 댓글작성
    try{
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

router.post('/:id/like', isLoggedIn, async(req, res, next)=>{
    try{
        const post = await db.Post.findOne({ where: { id: req.params.id }});
        if(!post){ //게시글이 있는지 항상 확인. 게시글이 없는데 실수 혹은 해커가 요청보낼 수 있음
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        await post.addLiker(req.user.id);
        res.json({ userId: req.user.id });
    }catch(e){
        console.error(e);
        next(e);
    }
})

router.delete('/:id/like', isLoggedIn, async(req, res, next)=>{
    try{
        const post = await db.Post.findOne({ where: { id: req.params.id }});
        if(!post){ //게시글이 있는지 항상 확인. 게시글이 없는데 실수 혹은 해커가 요청보낼 수 있음
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        await post.removeLiker(req.user.id);
        res.json({ userId: req.user.id });
    }catch(e){
        console.error(e);
        next(e);
    }
})

router.post('/:id/retweet', isLoggedIn, async (req, res, next)=>{
    try{
        const post = await db.Post.findOne({ 
            where: { id: req.params.id },
            include: [{
                model: db.Post,
                as: 'Retweet',
            }],
        });
        if(!post){ //게시글이 있는지 항상 확인. 게시글이 없는데 실수 혹은 해커가 요청보낼 수 있음
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        if(req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)){
            return res.status(403).send('자신의 글은 리트윗할 수 없습니다.');
        }
        const retweetTargetId = post.RetweetId || post.id;
        const exPost = await db.Post.findOne({
            where:{
                UserId: req.user.id,
                RetweetId: retweetTargetId,
            },
        });
        if(exPost){
            return res.status(403).send('이미 리트윗했습니다.');
        }
        const retweet = await db.Post.create({
            UserId: req.user.id,
            RetweetId: retweetTargetId,
            content: 'retweet', // 모델에서 allowNull : false 이기때문에 뭐라도 넣어줘야함
        })
        // 리트윗글은 항상 이전 게시글을 가지고 있어야함, 내 게시글 + 남의 게시글 까지 같이 가져오기
        const retweetWithPrevPost = await db.Post.findOne({
            where: { id: retweet.id }, // 리트윗한 본인 게시글
            include: [{
                model: db.User, // 작성자 정보
                attributes: ['id', 'nickname'],
            }, {
                model: db.Post, // 리트윗 게시글 내용 불러오기
                as: 'Retweet',
                include: [{ // 리트윗한 게시글의 작성자 정보, 이미지 등
                    model: db.User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: db.Image,
                }],
            }],
        });
        res.json(retweetWithPrevPost);
    }catch(e){

    }
})


module.exports = router;