import { all, fork, takeLatest, put, delay, call } from 'redux-saga/effects';
import { ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
         ADD_POST_REQUEST, ADD_POST_FAILURE, ADD_POST_SUCCESS,
        LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE} from '../reducers/post';
import axios from 'axios';
import { Result } from 'antd';

function addPostAPI(postData){
    return axios.post('/post', postData, {
        withCredentials: true, //로그인한 사람만 글을 쓸 수 있어서 쿠키를 같이 보내줌(로그인 인증을 했는지 여부 검토)
    });
}

function* addPost(action){
    try{
        const result = yield call(addPostAPI, action.data);
        yield put({
            type:ADD_POST_SUCCESS,
            data: result.data,
        });
    } catch(e){
        yield put({
            type:ADD_POST_FAILURE,
            error: e,
        });
    }
}
function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST, addPost);
}



function addCommentAPI(){
    return axios.get('/posts')
}
function* addComment(action){
    try{
        yield delay(2000);
        yield put({
            type:ADD_COMMENT_SUCCESS,
            data:{
                postId: action.data.postId,
            },
        });
    } catch(e){
        yield put({
            type:ADD_COMMENT_FAILURE,
            error: e,
        });
    }
}
function* watchAddComment(){
    yield takeLatest(LOAD_MAIN_POSTS_REQUEST, addComment);
}


function loadMainPostsAPI(){
    return axios.get('/posts'); // 게시글을 보는정도의 api는 크리덴셜 안넣어줘도 무방
}
function* loadMainPosts(){
    try{
        const result = yield call(loadMainPostsAPI);
        yield put({
            type:LOAD_MAIN_POSTS_SUCCESS,
            data: result.data,
        });
    } catch(e){
        yield put({
            type:LOAD_MAIN_POSTS_FAILURE,
            error: e,
        });
    }
}
function* watchloadMainPosts(){
    yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
}


export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchloadMainPosts),
    ])
};