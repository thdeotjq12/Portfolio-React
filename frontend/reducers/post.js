export const initialState = {
    mainPosts: [{
        User: {
            id:1,
            nickname: '제로초',
          },
          content:'첫번째 게시글',
          img:'https://www.google.com/imgres?imgurl=http%3A%2F%2Fnewsimg.hankookilbo.com%2F2019%2F04%2F29%2F201904291390027161_3.jpg&imgrefurl=https%3A%2F%2Fwww.hankookilbo.com%2FNews%2FRead%2F201904291390027161&tbnid=NpMi5nVF1QK1MM&vet=12ahUKEwjR1LT9oPfoAhUEUJQKHa2LAhMQMygBegUIARD-Ag..i&docid=k3mACyoxPXAFMM&w=680&h=448&q=%EA%B3%A0%EC%96%91%EC%9D%B4&ved=2ahUKEwjR1LT9oPfoAhUEUJQKHa2LAhMQMygBegUIARD-Ag'
    }], // 화면에 보일 포스트들
    imagePaths : [], // 미리보기 이미지 경로
    addPostErrorReason: false, // 포스트 업로드 실패 사유
    isAddingPost : false,
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
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

//포스트에 LIKE 누르는 액션
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
//포스트에 LIKE 취소하는 액션
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
//게시글에 댓글 남기기
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
//게시글 댓글 불러오기
const LOAD_COMMENT_REQUEST = 'LOAD_COMMENT_REQUEST';
const LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';
const LOAD_COMMENT_FAILURE = 'LOAD_COMMENT_FAILURE';
//리트윗 하는 액션
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
//포스트 제거하는 액션
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

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
        case ADD_POST_REQUEST: {
            return {
                ...state,
            }
        }
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts]
            };
        }
        default:{
            return{
                ...state,
            }
        }
    }
}

export default reducer;