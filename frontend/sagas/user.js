import { all, fork, takeLatest, takeEvery, call, put, take, delay } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, signUpAction } from '../reducers/user';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3065/api';

function loginAPI(loginData){
// (3) 서버에 요청을 보냄
    // loginData: userid, password
    return axios.post('/user/login', loginData , {
        withCredentials: true, // (프론트)쿠키를 주고받을 수 있음, 서버쪽은 cors 로 설정
    });
}
function signUpAPI(signUpData){
    return axios.post('/user/', signUpData);
}
    
function* login(action){ 
    // 사가 패턴 3. 어떤 동작할지 결정
    try{
        const result =  yield call(loginAPI, action.data); // (2)loginAPI 로 요청을 보냄
        yield put({ 
            type: LOG_IN_SUCCESS,
            data: result.data,
        }); // (4)put은 dispatch와 동일, call이 성공하면 LOG_IN_SUCCESS 실행
    }catch(e){
        console.error(e);
        yield put({
            type:LOG_IN_FAILURE
        })
    }
}
function* signUp(action){ 
    try{
        yield call(signUpAPI , action.data); // 두번째는 첫번째의(함수) 인자값
        yield put({ 
            type:SIGN_UP_SUCCESS
        });
    }catch(e){
        console.error(e);
        yield put({
            type:SIGN_UP_FAILURE,
            error: e
        })
    }
}

function* watchLogin(){
    // 사가 패턴 2. takeEvery, Latest 여부 결정
    //takeEvery : while 대체제, watch 에서 take 부분과 실행부분을 나눌때 사용
    //takeLatest : 같은 액션 여러번 호출되도 마지막 액션만 실행(이전 요청이 끝나지 않았으면 이전 요청 취소)
    // yield takeLatest(LOG_IN, login); // (1)LOG_IN 액션을 기다림
    yield takeEvery(LOG_IN_REQUEST, login);
}
function* watchSignUp(){
    yield takeEvery(SIGN_UP_REQUEST, signUp)
}
 
export default function* userSaga() {
    // 사가 패턴 1. 함수 등록
    // fork, call : 함수 호출, fork는 비동기 호출
    yield all([
        fork(watchLogin),
        fork(watchSignUp),
    ])
};
