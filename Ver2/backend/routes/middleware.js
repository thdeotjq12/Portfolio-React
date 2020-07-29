// 라우터의 중복된 로직을 처리해주기 위한 파일
exports.isLoggedIn = (req, res, next) =>{
    if(req.isAuthenticated()){ // 로그인했는지 유무검사하는 함수
        next(); // 다음 미들웨어로 이동
    }else{
        res.status(401).send('로그인이 필요합니다.'); 
    }
}

exports.isNotLoggedIn = (req, res, next) =>{
    if(!req.isAuthenticated()){ // 로그인했는지 유무검사하는 함수
        next(); // 다음 미들웨어로 이동
    }else{
        res.status(401).send('로그인한 사용자는 접근할 수 없습니다.'); 
    }
}