export const initialState = {
    mainPosts: [], // 화면에 보일 포스트들
    imagePaths : [], // 미리보기 이미지 경로
    addPostErrorReason: false, // 포스트 업로드 실패 사유
    isAddingPost : false, // 포스트 업로드 중 
    postAdded: false, // 포스트 업로드 성공
    isAddingComment: false,
    addCommentErrorReason: '',
    commentAdded: false,
};



//메인 포스트를 로딩
export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';
//해시태그 검색했을때 결과 로딩
export const LOAD_HASHTAG_POSTS_REQUEST ='LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS ='LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE ='LOAD_HASHTAG_POSTS_FAILURE';
 //사용자가 어떤 게시글을 썼는지 로딩
export const LOAD_USER_POSTS_REQUEST ='LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS ='LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE ='LOAD_USER_POSTS_FAILURE';
//이미지 업로드
export const UPLOAD_IMAGES_REQUEST ='UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS ='UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE ='UPLOAD_IMAGES_FAILURE';
//이미지 업로드 취소(동기)
export const REMOVE_IMAGE ='REMOVE_IMAGE';

//포스트 추가
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

//포스트에 LIKE 누르는 액션
export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
//포스트에 LIKE 취소하는 액션
export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
//게시글에 댓글 남기기
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
//게시글 댓글 불러오기
export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENT_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENT_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENT_FAILURE';
//리트윗 하는 액션
export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';
//포스트 제거하는 액션
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

const ADD_DUMMY = 'ADD_DUMMY' // ????
const addPost = {
    type : ADD_POST_REQUEST,
};
const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        UserId:1,
        User:{
            nickname:'제로초',
        },
    },
};

const reducer = ( state = initialState, action) => {
    switch (action.type){
        case UPLOAD_IMAGES_REQUEST: {
            return {
                ...state,
            }
        }
        case UPLOAD_IMAGES_SUCCESS: {
            return {
                ...state,
                imagePaths:[...state.imagePaths, ...action.data], // 이미지 미리보기 할 수 있는 경로들
            }
        }
        case UPLOAD_IMAGES_FAILURE: {
            return {
                ...state,
            }
        }
        // 이미지 제거는 동기적으로 처리해도 되서 3분류안함
        case REMOVE_IMAGE:{
            return{
                ...state,
                imagePaths: state.imagePaths.filter((v,i) => i !== action.index),
            }
        }
        // 게시글 작성
        case ADD_POST_REQUEST: {
            return {
                ...state,
                isAddingPost: true,
                addPostErrorReason: '',
                postAdded: false,
            }
        }
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                isAddingPost: false,
                mainPosts: [action.data, ...state.mainPosts],
                postAdded: true,
                imagePaths: [],
            }
        }
        case ADD_POST_FAILURE: {
            return {
                ...state,
                isAddingPost: false,
                addPostErrorReason: action.error,
            }
        }
        // 댓글 달기
        case ADD_COMMENT_REQUEST: {
            return {
                ...state,
                isAddingComment: true,
                addCommentErrorReason: '',
                commentAdded: false,
            }
        }
        case ADD_COMMENT_SUCCESS: {
            // 어떤게시글에 댓글을 추가할지
            const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
            const post = state.mainPosts[postIndex];
            const Comments = [...post.Comments, action.data.comment];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = { ...post, Comments };
            return {
              ...state,
              isAddingComment: false,
              mainPosts,
              commentAdded: true,
            };
        }
        case ADD_COMMENT_FAILURE: {
            return {
                ...state,
                isAddingComment: false,
                addCommentErrorReason: action.error,
            }
        }
        case LOAD_COMMENTS_SUCCESS: {
            const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
            const post = state.mainPosts[postIndex];
            const Comments = action.data.comments;
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = { ...post, Comments };
            return {
              ...state,
              mainPosts,
            };
        }
        case LOAD_MAIN_POSTS_REQUEST: 
        case LOAD_HASHTAG_POSTS_REQUEST: 
        case LOAD_USER_POSTS_REQUEST: {    
            return {
                ...state,
                mainPosts: [],
            }
        }
        case LOAD_MAIN_POSTS_SUCCESS: 
        case LOAD_HASHTAG_POSTS_SUCCESS: 
        case LOAD_USER_POSTS_SUCCESS: {
            return {
                ...state,
                mainPosts: action.data,
            }
        }
        case LOAD_MAIN_POSTS_FAILURE: 
        case LOAD_HASHTAG_POSTS_FAILURE: 
        case LOAD_USER_POSTS_FAILURE: {
            return {
                ...state,
            }
        }
        case LIKE_POST_REQUEST: {
            return {
                ...state,
            }
        }
        case LIKE_POST_SUCCESS: {
            // 불변성때문에, 바뀔 객체만 새로 만들어줘야함
            const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId) ;
            const post = state.mainPosts[postIndex];
            const Likers = [{ id : action.data.userId }, ...post.Likers];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = {...post, Likers}; //불변성 유지 후 다시 구성하는 부분
            return {
                ...state,
                mainPosts,
            }
        }
        case LIKE_POST_FAILURE: {
            return {
                ...state,
            }
        }
        case UNLIKE_POST_REQUEST: {
            return {
                ...state,
            }
        }
        case UNLIKE_POST_SUCCESS: {
            const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId) ;
            const post = state.mainPosts[postIndex];
            const Likers = post.Likers.filter(v=> v.id !== action.data.userId); // 좋아요 목록중 내 아이디 제거 
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = {...post, Likers};
            return {
                ...state,
                mainPosts,
            }
        }
        case UNLIKE_POST_FAILURE: {
            return {
                ...state,
            }
        }
        case RETWEET_REQUEST: {
            return {
                ...state,
            }
        }
        case RETWEET_SUCCESS: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts], // 기존 게시글 앞에 받아온 게시글을 받아오기
            }
        }
        case RETWEET_FAILURE: {
            return {
                ...state,
            }
        }
        case REMOVE_POST_REQUEST: {
            return {
                ...state,
            }
        }
        case REMOVE_POST_SUCCESS: {
            return {
                ...state,
                mainPosts: state.mainPosts.filter(v=>v.id !== action.data),
            }
        }
        case REMOVE_POST_FAILURE: {
            return {
                ...state,
            }
        }
        default:{
            return{
                ...state,
            }
        }
    }
}

export default reducer;