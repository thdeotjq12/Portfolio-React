const dummyUser = {
    nickname: "Guest",
    Post: [],
    Followings: [],
    Followers: [],
    signUpData: {},
};

export const initialState = {
    isLoggedIn : false,
    user : null,
};
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'; 
export const SIGN_UP_SUCCESS = 'SING_UP_SUCCESS'; // 리덕스의 액션은 동기적으로 실행되기 떄문에 saga를 이용해 비동기를 구현함
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'; 

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 엑션 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

//동적 데이터가 들어가기 위해 함수형으로 만듬
export const signUpAction = (data) => {
    return{
        type: SIGN_UP,
        data: data,
    };
};
export const signUpSuccess = {
    type: SIGN_UP_SUCCESS,
}
export const loginAction = {
    type: LOG_IN,
};
export const logoutAction = {
    type: LOG_OUT,
};

export const signUp = data =>({
    type: SIGN_UP_REQUEST,
    data,
})
const reducer = ( state = initialState, action) => {
    switch (action.type){
        case LOG_IN_REQUEST : {
            return {
                ...state,
                isLoading : true,
            };
        }
        case LOG_IN_SUCCESS :{
            return{
                ...state,
                isLoggedIn : true,
                user : dummyUser,
                isLoading: false,
            };
        }
        case LOG_OUT_REQUEST : {
            return {
                ...state,
                isLoggedIn : false,
                user : null
            };
        }
        case SIGN_UP_REQUEST: {
            return{
                ...state,
                signUpData: action.data,
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