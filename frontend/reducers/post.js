export const initialState = {
    mainPosts: [{
        User: {
            id:1,
            nickname: '제로초',
          },
          content:'첫번째 게시글',
          img:'https://www.google.com/imgres?imgurl=http%3A%2F%2Fnewsimg.hankookilbo.com%2F2019%2F04%2F29%2F201904291390027161_3.jpg&imgrefurl=https%3A%2F%2Fwww.hankookilbo.com%2FNews%2FRead%2F201904291390027161&tbnid=NpMi5nVF1QK1MM&vet=12ahUKEwjR1LT9oPfoAhUEUJQKHa2LAhMQMygBegUIARD-Ag..i&docid=k3mACyoxPXAFMM&w=680&h=448&q=%EA%B3%A0%EC%96%91%EC%9D%B4&ved=2ahUKEwjR1LT9oPfoAhUEUJQKHa2LAhMQMygBegUIARD-Ag'
    }], 
    imagePaths : [],
}
const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
    type : ADD_POST,
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
        case ADD_POST: {
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