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
export const SIGN_UP = 'SING_UP';
export const SIGN_UP_SUCCESS = 'SING_UP_SUCCESS'; // 리덕스의 액션은 동기적으로 실행되기 떄문에 saga를 이용해 비동기를 구현함
export const LOG_IN = 'LOG_IN'; // 엑션 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';

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
const reducer = ( state = initialState, action) => {
    switch (action.type){
        case LOG_IN : {
            return {
                ...state,
                isLoggedIn : true,
                user : dummyUser,
            };
        }
        case LOG_OUT : {
            return {
                ...state,
                isLoggedIn : false,
                user : null
            };
        }
        case SIGN_UP: {
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