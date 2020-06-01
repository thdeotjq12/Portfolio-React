import { all, fork, takeLatest, takeEvery, call, put, take } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';
function loginAPI(){
// (3) 서버에 요청을 보냄
}
// 사가 패턴 3. 어떤 동작할지 결정
function* login(){ 
    try{
        yield call(loginAPI); // (2)loginAPI 로 요청을 보냄
        yield put({ 
            type:LOG_IN_SUCCESS
        }); // (4)put은 dispatch와 동일, call이 성공하면 LOG_IN_SUCCESS 실행
    }catch(e){
        console.error(e);
        yield put({
            type:LOG_IN_FAILURE
        })
    }
}
 // 사가 패턴 2. takeEvery, Latest 여부 결정
function* watchLogin(){
    //takeEvery : while 대체제, watch 에서 take 부분과 실행부분을 나눌때 사용
    //takeLatest : 같은 액션 여러번 호출되도 마지막 액션만 실행(이전 요청이 끝나지 않았으면 이전 요청 취소)
    while(true){
        // take : 해당 액션이 dispatch 되면 제너레이터를 next하는 이펙트
        yield take(LOG_IN_REQUEST);
        // 사가 문법에서 put은 dispatch 와 동일
        yield put({
            type: LOG_IN_SUCCESS,
        });
    }
    // yield takeLatest(LOG_IN, login); // (1)LOG_IN 액션을 기다림
}
 // 사가 패턴 1. 함수 등록
export default function* userSaga() {
    // fork, call : 함수 호출, fork는 비동기 호출
    yield all([
        fork(watchLogin)
    ])
};
