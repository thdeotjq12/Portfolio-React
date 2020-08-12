import produce from 'immer';
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
    userInfo: null, // 남의 정보
    isEditingNickname: false, // 이름 변경 중
    editNicknameErrorReason: '', // 이름 변경 실패 사유
    hasMoreFollower : false, // 프로필 - 팔로워 불러오다 더이상 없을 시 더보기 버튼 제거
    hasMoreFollowing : false,
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
//팔로워들 목록
export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
//팔로잉 목록
export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
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
//닉네임 수정
export const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
export const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
export const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';
//리듀서의 단점때문에 만들어야 됨 - 다른 리듀서의 정보를 수정할 수 없음
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
//
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export default ( state = initialState, action) => {
    return produce(state, (draft)=>{
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
                if(action.me){
                    return{
                        ...state,
                        me: action.data,
                    };
                }
            }
            case LOAD_USER_FAILURE: {
                return{
                    ...state,
                };
            }
            case FOLLOW_USER_REQUEST: {
                return{
                    ...state,
                };
            }
            case FOLLOW_USER_SUCCESS: {
                draft.me.Followings.unshift({ id:action.data });
                break;
                // return{
                //     ...state,
                //     me: {
                //         ...state.me,
                //         Followings:[{ id: action.data }, ...state.me.Followings],//아이디 목록에 팔로윙한 사람 추가(나)
                //     }
                // };
            }
            case FOLLOW_USER_FAILURE: {
                return{
                    ...state,
                };
            }
            case UNFOLLOW_USER_REQUEST: {
                return{
                    ...state,
                };
            }
            case UNFOLLOW_USER_SUCCESS: {
                return{
                    ...state,
                    me: {
                        ...state.me,
                        Followings: state.me.Followings.filter(v => v.id !== action.data),//아이디 목록에 팔로윙한 사람 추가(나)
                    },
                    followingList: state.followingList.filter(v => v.id !== action.data),
                };
            }
            case UNFOLLOW_USER_FAILURE: {
                return{
                    ...state,
                };
            }
            case REMOVE_POST_OF_ME:{
                return{
                    ...state,
                    me: {
                        ...state.me,
                        Posts: state.me.Posts.filter(v=>v.id !== action.data),
                    },
                }
            }
            case LOAD_FOLLOWERS_REQUEST: {
                return{
                    ...state,
                    hasMoreFollower: action.offset ? state.hasMoreFollower : true, // action.offset 은 더보기 버튼 처음 클릭 시 생김(더보기 버튼 보여줌)
                };
            }
            case LOAD_FOLLOWERS_SUCCESS: {
                return{
                    ...state,
                    followerList : state.followerList.concat(action.data), // 기존데이터에 계속 리스트를 추가시킴(더보기 기능)
                    hasMoreFollower: action.data.length ===3, // 가져온 데이터가 3개면 더보기 버튼을 계속 보여줌(1,2개면 없어짐)
                };
            }
            case LOAD_FOLLOWERS_FAILURE: {
                return{
                    ...state,
                };
            }
            case LOAD_FOLLOWINGS_REQUEST: {
                return{
                    ...state,
                    hasMoreFollowing: action.offset ? state.hasMoreFollowing : true,
                };
            }
            case LOAD_FOLLOWINGS_SUCCESS: {
                return{
                    ...state,
                    followingList : state.followingList.concat(action.data),
                    hasMoreFollowing: action.data.length ===3,
                };
            }
            case LOAD_FOLLOWINGS_FAILURE: {
                return{
                    ...state,
                };
            }
            case REMOVE_FOLLOWER_REQUEST: {
                return{
                    ...state,
                };
            }
            case REMOVE_FOLLOWER_SUCCESS: {
                return{
                    ...state,
                    me: {
                        ...state.me,
                        Followers: state.me.Followers.filter(v => v.id !== action.data),//아이디 목록에 팔로윙한 사람 추가(나)
                    },
                    followerList: state.followerList.filter(v => v.id !== action.data),
                };
            }
            case REMOVE_FOLLOWER_FAILURE: {
                return{
                    ...state,
                };
            }
            case EDIT_NICKNAME_REQUEST: {
                return{
                    ...state,
                    isEditingNickname: true,
                    editNicknameErrorReason: '',
                };
            }
            case EDIT_NICKNAME_SUCCESS: {
                return{
                    ...state,
                    isEditingNickname: false,
                    me: {
                        ...state.me,
                        nickname: action.data,
                    }
                };
            }
            case EDIT_NICKNAME_FAILURE: {
                return{
                    ...state,
                    isEditingNickname: false,
                    editNicknameErrorReason: action.error,
                };
            }
            case ADD_POST_TO_ME:{
                return {
                    ...state,
                    me: {
                        ...state.me,
                        Posts: [{ id: action.data}, ...state.me.Posts],
                    }
                }
            }
            default: {
                return{
                    ...state,
                };
            }
        }
    });
     
};

