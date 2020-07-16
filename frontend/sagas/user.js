import { all, fork, takeLatest, takeEvery, call, put, take, delay } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
         SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, 
         LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
         LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE} from '../reducers/user';

axios.defaults.baseURL = 'http://localhost:3065/api';

// 로그인 부분 -------------------------------------
function logInAPI(loginData){
// (3) 서버에 요청을 보냄
    // loginData: userid, password
    return axios.post('/user/login', loginData , {
        withCredentials: true, // (프론트)쿠키를 주고받을 수 있음, 서버쪽은 cors 로 설정
    });
}
function* logIn(action){ 
    // 사가 패턴 3. 어떤 동작할지 결정
    try{
        const result =  yield call(logInAPI, action.data); // (2)loginAPI 로 요청을 보냄
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
function* watchLogIn(){
    // 사가 패턴 2. takeEvery, Latest 여부 결정
    //takeEvery : while 대체제, watch 에서 take 부분과 실행부분을 나눌때 사용
    //takeLatest : 같은 액션 여러번 호출되도 마지막 액션만 실행(이전 요청이 끝나지 않았으면 이전 요청 취소)
    // yield takeLatest(LOG_IN, login); // (1)LOG_IN 액션을 기다림
    yield takeEvery(LOG_IN_REQUEST, logIn);
}
// 로그인 부분 -------------------------------------
// 회원 가입 부분 -------------------------------------
function signUpAPI(signUpData){
    return axios.post('/user/', signUpData);
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
function* watchSignUp(){
    yield takeEvery(SIGN_UP_REQUEST, signUp)
}
// 회원 가입 부분 -------------------------------------
// 로그 아웃 부분 -------------------------------------
function logOutAPI(){
    // 로그아웃은 쿠키가 있으므로 데이터 받을게 없음, 대신 쿠키를 도메인이 다른 서버로 보내주려면 크리덴셜스 추가
    return axios.post('/user/logout', {}, {
        withCredentials: true,
    });
}
function* logOut(){ 
    try{
        yield call(logOutAPI); // 두번째는 첫번째의(함수) 인자값
        yield put({ 
            type:LOG_OUT_SUCCESS
        });
    }catch(e){
        console.error(e);
        yield put({
            type:LOG_OUT_FAILURE,
            error: e
        })
    }
}
function* watchLogOut(){
    yield takeEvery(LOG_OUT_REQUEST, logOut)
}
// 로그 아웃 부분 -------------------------------------
// 사용자정보 불러오기 부분 -------------------------------------
function loadUserAPI(){
    // 세션쿠키 서버로 보냄 > 유효한 쿠키면 데이터 전달함
    return axios.get('/user/', {
        withCredentials : true,
    });
}
function* loadUser(){ 
    try{
        const result = yield call(loadUserAPI); // 두번째는 첫번째의(함수) 인자값
        yield put({ 
            type:LOAD_USER_SUCCESS,
            data: result.data,
        });
    }catch(e){
        console.error(e);
        yield put({
            type:LOAD_USER_FAILURE,
            error: e
        })
    }
}
function* watchLoadUser(){
    yield takeEvery(LOAD_USER_REQUEST, loadUser)
}
// 사용자정보 불러오기 부분 -------------------------------------
 
export default function* userSaga() {
    // 사가 패턴 1. 함수 등록
    // fork, call : 함수 호출, fork는 비동기 호출
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchLoadUser),
        fork(watchSignUp),
    ])
};
