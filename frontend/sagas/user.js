import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';
function loginAPI(){
// (3) 서버에 요청을 보냄
}
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
function* watchLogin(){
    yield takeLatest(LOG_IN, login); // (1)LOG_IN 액션을 기다림
}
export default function* userSaga() {
    yield all([
        fork(watchLogin)
    ])
};