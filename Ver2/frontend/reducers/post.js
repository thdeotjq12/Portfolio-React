import produce from 'immer';
export const initialState = {
    mainPosts: [], // 화면에 보일 포스트들
    imagePaths : [], // 미리보기 이미지 경로
    addPostErrorReason: false, // 포스트 업로드 실패 사유
    isAddingPost : false, // 포스트 업로드 중 
    postAdded: false, // 포스트 업로드 성공
    isAddingComment: false,
    addCommentErrorReason: '',
    commentAdded: false,
    singlePost: null, // 개별포스트
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
//개별 포스트 불러오기
export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type){
            case UPLOAD_IMAGES_REQUEST: {
                break;
            }
            case UPLOAD_IMAGES_SUCCESS: {
                // immer 적용(코드정리, 불변성 유지해줌), immer 에서 draft 상태 체크 후 바뀐부분을 state에 적용
                action.data.forEach((p)=>{
                    draft.imagePaths.push(p);
                });
                break;
                // immer 적용 전 코드
                // return {
                //     ...state,
                //     imagePaths:[...state.imagePaths, ...action.data], // 이미지 미리보기 할 수 있는 경로들
                // }
            }
            case UPLOAD_IMAGES_FAILURE: {
                break;
            }
            // 이미지 제거는 동기적으로 처리해도 되서 3분류안함
            case REMOVE_IMAGE:{
                const index = draft.imagePaths.findIndex((v,i)=> i ===action.index);
                draft.imagePaths.splice(index, 1);
                break;
            }
            // 게시글 작성
            case ADD_POST_REQUEST: {
                draft.isAddingPost = true;
                draft.addPostErrorReason = '';
                draft.postAdded = false;
                break;
            }
            case ADD_POST_SUCCESS: {
                draft.isAddingPost = false;
                draft.mainPosts.unshift(action.data);
                draft.postAdded = true;
                draft.imagePaths = [];
                break;
                // return {
                //     ...state,
                //     isAddingPost: false,
                //     mainPosts: [action.data, ...state.mainPosts],
                //     postAdded: true,
                //     imagePaths: [],
                // }
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
                const postIndex = draft.mainPosts.findIndex(v=> v.id === action.data.postId);
                draft.mainPosts[postIndex].Comments.push(action.data.comment);
                draft.isAddingComment = false;
                draft.commentAdded = true;
                break;
                // const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
                // const post = state.mainPosts[postIndex];
                // const Comments = [...post.Comments, action.data.comment];
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = { ...post, Comments };
                // return {
                //   ...state,
                //   isAddingComment: false,
                //   mainPosts,
                //   commentAdded: true,
                // };
            }
            case ADD_COMMENT_FAILURE: {
                return {
                    ...state,
                    isAddingComment: false,
                    addCommentErrorReason: action.error,
                }
            }
            case LOAD_COMMENTS_SUCCESS: {
                const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
                draft.mainPosts[postIndex].Comments = action.data.comments;
                break;
                // const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
                // const post = state.mainPosts[postIndex];
                // const Comments = action.data.comments;
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = { ...post, Comments };
                // return {
                //   ...state,
                //   mainPosts,
                // };
            }
            case LOAD_MAIN_POSTS_REQUEST: 
            case LOAD_HASHTAG_POSTS_REQUEST: 
            case LOAD_USER_POSTS_REQUEST: {    
                draft.mainPosts = action.lastId === 0 ? [] : draft.mainPosts;
                draft.hasMorePost = action.lastId ? draft.hasMorePost : true;
                break;
                // return {
                //     ...state,
                //     mainPosts: action.lastId === 0 ? [] : state.mainPosts,// 처음게시글 불러올땐 기존게시글 초기화,더 불러올땐 기존 게시글 유지(스크롤링) 
                //     hasMorePost : action.lastId ? state.hasMorePost : true, // 처음불러올땐 더보기 활성화 lastId = 0 (false), 더 불러오는 중일땐 기존상태 유지
                // }
            }
            case LOAD_MAIN_POSTS_SUCCESS: 
            case LOAD_HASHTAG_POSTS_SUCCESS: 
            case LOAD_USER_POSTS_SUCCESS: {
                return {
                    ...state,
                    mainPosts: state.mainPosts.concat(action.data),
                    hasMorePost: action.data.length === 10,
                }
            }
            case LOAD_MAIN_POSTS_FAILURE: 
            case LOAD_HASHTAG_POSTS_FAILURE: 
            case LOAD_USER_POSTS_FAILURE: {
                break;
            }
            case LIKE_POST_REQUEST: {
                break;
            }
            case LIKE_POST_SUCCESS: {
                // 불변성때문에, 바뀔 객체만 새로 만들어줘야함
                const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId) ;
                draft.mainPosts[postIndex].Likers.unshift( {id: action.data.userId});
                break;
                // const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId) ;
                // const post = state.mainPosts[postIndex];
                // const Likers = [{ id : action.data.userId }, ...post.Likers];
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = {...post, Likers}; //불변성 유지 후 다시 구성하는 부분
                // return {
                //     ...state,
                //     mainPosts,
                // }
            }
            case LIKE_POST_FAILURE: {
                break;
            }
            case UNLIKE_POST_REQUEST: {
                break;
            }
            case UNLIKE_POST_SUCCESS: {
                const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
                const likeIndex = draft.mainPosts[postIndex].Likers.findIndex(v=>v.id === action.data.userId);
                draft.mainPosts[postIndex].Likers.splice(likeIndex, 1)
                break;
                // const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId) ;
                // const post = state.mainPosts[postIndex];
                // const Likers = post.Likers.filter(v=> v.id !== action.data.userId); // 좋아요 목록중 내 아이디 제거 
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = {...post, Likers};
                // return {
                //     ...state,
                //     mainPosts,
                // }
            }
            case UNLIKE_POST_FAILURE: {
                break;
            }
            case RETWEET_REQUEST: {
                break;
            }
            case RETWEET_SUCCESS: {
                return {
                    ...state,
                    mainPosts: [action.data, ...state.mainPosts], // 기존 게시글 앞에 받아온 게시글을 받아오기
                }
            }
            case RETWEET_FAILURE: {
                break;
            }
            case REMOVE_POST_REQUEST: {
                break;
            }
            case REMOVE_POST_SUCCESS: {
                return {
                    ...state,
                    mainPosts: state.mainPosts.filter(v=>v.id !== action.data),
                }
            }
            case REMOVE_POST_FAILURE: {
                break;
            }
            case LOAD_POST_SUCCESS:{
                draft.singlePost = action.data;
                break;
            }
            default:{
                break;
            }
        }
    });
};
