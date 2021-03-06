const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', async (req,res,next)=>{ // GET /api/posts
    try{
        let where ={};
        if(parseInt(req.query.lastId, 10)){
            where = {
                id:{
                    [db.Sequelize.Op.lt]: parseInt(req.query.lastId, 10), // Sequelize operator 찾아보기 lt: less then
                }
            }
        }
        const posts = await db.Post.findAll({
            where,
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            },{
                model: db.Image,
            },{
                model: db.User,
                through: 'Like',
                as: 'Likers',
                attributes: ['id'],
            },{
                model: db.Post,
                as: 'Retweet',
                include: [{
                    model: db.User,
                    attributes: ['id', 'nickname'],
                },{
                    model: db.Image,
                }],
            }],
            order:[['createdAt', 'DESC']], // 최신글을 맨 앞으로
            limit: parseInt(req.query.limit, 10),
        });
        
        res.json(posts);
    }catch(e){
        console.error(e);
        next(e);
    }
});
module.exports = router;