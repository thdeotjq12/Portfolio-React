const dummyUser = {
    nickname: "Guest",
    Post: [],
    Followings: [],
    Followers: [],
    signUpData: {},
    id:1,
};

export const initialState = {
    isLoggingOut: false, // 로그아웃 시도중
    isLoggingIn: false, // 로그인 시도중
    logInErrorReason: '', // 로그인 실패 사유
    isSignedUp: false, // 회원가입 성공
    isSigningUp: false, // 회원가입 시도중
    singUpErrorReason: '', // 회원가입 실패 사유 
    me: null, // 내정보
    followingList: [], // 팔로잉 리스트
    followerList: [],  // 팔로워 리스트
    userInfo: null // 남의 정보
};
// 리덕스의 액션은 동기적으로 실행되기 떄문에 saga를 이용해 비동기를 구현함
//회원가입
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'; 
export const SIGN_UP_SUCCESS = 'SING_UP_SUCCESS'; 
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'; 
//로그인
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; 
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
//사용자 정보 불러오기
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'; 
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
//로그아웃
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
//팔로우 목록
export const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';
export const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS';
export const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE';
//다른 사람을 팔로우
export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';
//다른 사람을 언팔로우
export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';
//팔로우한 사람을 제거
export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
//리듀서의 단점때문에 만들어야 됨
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';


const reducer = ( state = initialState, action) => {
    switch (action.type){
        case LOG_IN_REQUEST : {
            return {
                ...state,
                isLoggingIn: true,
                logInErrorReason :'',               
            };
        }
        case LOG_IN_SUCCESS :{
            return{
                ...state,
                isLoggingIn: false,
                me : action.data,
                isLoading: false,
            };
        }
        case LOG_IN_FAILURE :{
            return {
                ...state,
                isLoggingIn: false,
                logInErrorReason : action.error,
                me : null,
            }
        }
        case LOG_OUT_REQUEST : {
            return {
                ...state,
                isLoggingOut : true, // 로그아웃버튼 로딩
            };
        }
        case LOG_OUT_REQUEST : {
            return {
                ...state,
                isLoggingOut: false,
                me : null
            };
        }
        case SIGN_UP_REQUEST: {
            return{
                ...state,
                isSigningUp : true,
                isSignedUp : false,
                singUpErrorReason : '',
            };
        }
        case SIGN_UP_SUCCESS: {
            return{
                ...state,
                signUpData: action.data,
                isSigningUp : false,
                isSignedUp : true,
            };
        }
        case SIGN_UP_FAILURE: {
            return{
                ...state,
                signUpData: action.data,
                isSigningUp : false,
                singUpErrorReason : action.error,
            };
        }
        case LOAD_USER_REQUEST: {
            return{
                ...state,
            };
        }
        case LOAD_USER_SUCCESS: {
            return{
                ...state,
                me: action.data,
            };
        }
        case LOAD_USER_FAILURE: {
            return{
                ...state,
            };
        }
        default: {
            return{
                ...state,
            };
        }
    } 
};

export default reducer;