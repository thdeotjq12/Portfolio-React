export const initialState = {
    mainPosts: [{
        id:1,
        User: {
            id:1,
            nickname: '제로초',
          },
          content:'첫번째 게시글',
          img:'https://www.google.com/imgres?imgurl=http%3A%2F%2Fnewsimg.hankookilbo.com%2F2019%2F04%2F29%2F201904291390027161_3.jpg&imgrefurl=https%3A%2F%2Fwww.hankookilbo.com%2FNews%2FRead%2F201904291390027161&tbnid=NpMi5nVF1QK1MM&vet=12ahUKEwjR1LT9oPfoAhUEUJQKHa2LAhMQMygBegUIARD-Ag..i&docid=k3mACyoxPXAFMM&w=680&h=448&q=%EA%B3%A0%EC%96%91%EC%9D%B4&ved=2ahUKEwjR1LT9oPfoAhUEUJQKHa2LAhMQMygBegUIARD-Ag',
          Comments:[],
    }], // 화면에 보일 포스트들
    imagePaths : [], // 미리보기 이미지 경로
    addPostErrorReason: false, // 포스트 업로드 실패 사유
    isAddingPost : false, // 포스트 업로드 중 
    postAdded: false, // 포스트 업로드 성공
    isAddingComment: false,
    addCommentErrorReason: '',
    commentAdded: false,
};

const dummyPost = {
    id: 2,
    User: {
        id:1,
        nickname: '게스트'
    },
    content: '나는 더미입니다.',
    Comments: [],
};

const dummyComment ={
    User:{
        id:1,
        nickname:'dummy',
    },
    createdAt: new Date(),
    content: '더미 댓글입니다.',
}

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
export const LOAD_COMMENT_REQUEST = 'LOAD_COMMENT_REQUEST';
export const LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';
export const LOAD_COMMENT_FAILURE = 'LOAD_COMMENT_FAILURE';
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
            const postIndex = state.mainPosts.findIndex( v=> v.id === action.data.postId);
            const post = state.mainPosts[postIndex];
            const Comments = [...post.Comments, dummyComment];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = {...post, Comments};
            return {
                ...state,
                isAddingComment: false,
                mainPosts,
                commentAdded: true,
            }
        }
        case ADD_COMMENT_FAILURE: {
            return {
                ...state,
                isAddingComment: false,
                addCommentErrorReason: action.error,
            }
        }
        case LOAD_MAIN_POSTS_REQUEST: {
            return {
                ...state,
                mainPosts: [],
            }
        }
        case LOAD_MAIN_POSTS_SUCCESS: {
            return {
                ...state,
                mainPosts: action.data,
            }
        }
        case LOAD_MAIN_POSTS_FAILURE: {
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