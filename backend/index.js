const express = require('express');
const db =require('./models')
const app = express();
db.sequelize.sync();// 알아서 models에 있는 테이블 생성해줌
app.get('/' , (req, res) =>{
    res.send('Hello Server');
})

app.listen(3065, () => {
    console.log('server is running on localhost:8080');
});

