module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vL9u");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UNFOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UNFOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return UNFOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EDIT_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EDIT_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EDIT_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_POST_OF_ME; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isLoggingOut: false,
  // 로그아웃 시도중
  isLoggingIn: false,
  // 로그인 시도중
  logInErrorReason: '',
  // 로그인 실패 사유
  isSignedUp: false,
  // 회원가입 성공
  isSigningUp: false,
  // 회원가입 시도중
  singUpErrorReason: '',
  // 회원가입 실패 사유 
  me: null,
  // 내정보
  followingList: [],
  // 팔로잉 리스트
  followerList: [],
  // 팔로워 리스트
  userInfo: null,
  // 남의 정보
  isEditingNickname: false,
  // 이름 변경 중
  editNicknameErrorReason: '',
  // 이름 변경 실패 사유
  hasMoreFollower: false,
  // 프로필 - 팔로워 불러오다 더이상 없을 시 더보기 버튼 제거
  hasMoreFollowing: false
}; // 리덕스의 액션은 동기적으로 실행되기 떄문에 saga를 이용해 비동기를 구현함
//회원가입

const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SING_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'; //로그인

const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; //사용자 정보 불러오기

const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'; //로그아웃

const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; //팔로워들 목록

const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE'; //팔로잉 목록

const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE'; //다른 사람을 팔로우

const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE'; //다른 사람을 언팔로우

const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE'; //팔로우한 사람을 제거

const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE'; //닉네임 수정

const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE'; //리듀서의 단점때문에 만들어야 됨 - 다른 리듀서의 정보를 수정할 수 없음

const ADD_POST_TO_ME = 'ADD_POST_TO_ME'; //

const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
/* harmony default export */ __webpack_exports__["G"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        {
          return _objectSpread({}, state, {
            isLoggingIn: true,
            logInErrorReason: ''
          });
        }

      case LOG_IN_SUCCESS:
        {
          return _objectSpread({}, state, {
            isLoggingIn: false,
            me: action.data,
            isLoading: false
          });
        }

      case LOG_IN_FAILURE:
        {
          return _objectSpread({}, state, {
            isLoggingIn: false,
            logInErrorReason: action.reason,
            me: null
          });
        }

      case LOG_OUT_REQUEST:
        {
          return _objectSpread({}, state, {
            isLoggingOut: true // 로그아웃버튼 로딩

          });
        }

      case LOG_OUT_REQUEST:
        {
          return _objectSpread({}, state, {
            isLoggingOut: false,
            me: null
          });
        }

      case SIGN_UP_REQUEST:
        {
          return _objectSpread({}, state, {
            isSigningUp: true,
            isSignedUp: false,
            singUpErrorReason: ''
          });
        }

      case SIGN_UP_SUCCESS:
        {
          return _objectSpread({}, state, {
            signUpData: action.data,
            isSigningUp: false,
            isSignedUp: true
          });
        }

      case SIGN_UP_FAILURE:
        {
          return _objectSpread({}, state, {
            signUpData: action.data,
            isSigningUp: false,
            singUpErrorReason: action.error
          });
        }

      case LOAD_USER_REQUEST:
        {
          return _objectSpread({}, state);
        }

      case LOAD_USER_SUCCESS:
        {
          if (action.me) {
            return _objectSpread({}, state, {
              me: action.data
            });
          }
        }

      case LOAD_USER_FAILURE:
        {
          return _objectSpread({}, state);
        }

      case FOLLOW_USER_REQUEST:
        {
          return _objectSpread({}, state);
        }

      case FOLLOW_USER_SUCCESS:
        {
          draft.me.Followings.unshift({
            id: action.data
          });
          break; // return{
          //     ...state,
          //     me: {
          //         ...state.me,
          //         Followings:[{ id: action.data }, ...state.me.Followings],//아이디 목록에 팔로윙한 사람 추가(나)
          //     }
          // };
        }

      case FOLLOW_USER_FAILURE:
        {
          return _objectSpread({}, state);
        }

      case UNFOLLOW_USER_REQUEST:
        {
          return _objectSpread({}, state);
        }

      case UNFOLLOW_USER_SUCCESS:
        {
          return _objectSpread({}, state, {
            me: _objectSpread({}, state.me, {
              Followings: state.me.Followings.filter(v => v.id !== action.data) //아이디 목록에 팔로윙한 사람 추가(나)

            }),
            followingList: state.followingList.filter(v => v.id !== action.data)
          });
        }

      case UNFOLLOW_USER_FAILURE:
        {
          return _objectSpread({}, state);
        }

      case REMOVE_POST_OF_ME:
        {
          return _objectSpread({}, state, {
            me: _objectSpread({}, state.me, {
              Posts: state.me.Posts.filter(v => v.id !== action.data)
            })
          });
        }

      case LOAD_FOLLOWERS_REQUEST:
        {
          // action.offset 은 더보기 버튼 처음 클릭 시 생김(더보기 버튼 보여줌)
          draft.followerList = !action.offset ? [] : draft.followerList;
          draft.hasMoreFollower = action.offset ? draft.hasMoreFollower : true;
          break;
        }

      case LOAD_FOLLOWERS_SUCCESS:
        {
          return _objectSpread({}, state, {
            followerList: state.followerList.concat(action.data),
            // 기존데이터에 계속 리스트를 추가시킴(더보기 기능)
            hasMoreFollower: action.data.length === 3 // 가져온 데이터가 3개면 더보기 버튼을 계속 보여줌(1,2개면 없어짐)

          });
        }

      case LOAD_FOLLOWERS_FAILURE:
        {
          return _objectSpread({}, state);
        }

      case LOAD_FOLLOWINGS_REQUEST:
        {
          draft.followingList = !action.offset ? [] : draft.followingList;
          draft.hasMoreFollowing = action.offset ? draft.hasMoreFollowing : true;
          break;
        }

      case LOAD_FOLLOWINGS_SUCCESS:
        {
          return _objectSpread({}, state, {
            followingList: state.followingList.concat(action.data),
            hasMoreFollowing: action.data.length === 3
          });
        }

      case LOAD_FOLLOWINGS_FAILURE:
        {
          return _objectSpread({}, state);
        }

      case REMOVE_FOLLOWER_REQUEST:
        {
          return _objectSpread({}, state);
        }

      case REMOVE_FOLLOWER_SUCCESS:
        {
          return _objectSpread({}, state, {
            me: _objectSpread({}, state.me, {
              Followers: state.me.Followers.filter(v => v.id !== action.data) //아이디 목록에 팔로윙한 사람 추가(나)

            }),
            followerList: state.followerList.filter(v => v.id !== action.data)
          });
        }

      case REMOVE_FOLLOWER_FAILURE:
        {
          return _objectSpread({}, state);
        }

      case EDIT_NICKNAME_REQUEST:
        {
          return _objectSpread({}, state, {
            isEditingNickname: true,
            editNicknameErrorReason: ''
          });
        }

      case EDIT_NICKNAME_SUCCESS:
        {
          return _objectSpread({}, state, {
            isEditingNickname: false,
            me: _objectSpread({}, state.me, {
              nickname: action.data
            })
          });
        }

      case EDIT_NICKNAME_FAILURE:
        {
          return _objectSpread({}, state, {
            isEditingNickname: false,
            editNicknameErrorReason: action.error
          });
        }

      case ADD_POST_TO_ME:
        {
          return _objectSpread({}, state, {
            me: _objectSpread({}, state.me, {
              Posts: [{
                id: action.data
              }, ...state.me.Posts]
            })
          });
        }

      default:
        {
          return _objectSpread({}, state);
        }
    }
  });
});

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "vL9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInput", function() { return userInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LAVF");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SignupError = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
  color: red;
`; // Coustom hook 훅에 기능을 추가해서 새로 만듬 ( 중복방지 등 )
// useState(hook) 는 커스텀 훅 제외한 곳에서 사용하지 않기

const userInput = (initValue = null) => {
  const {
    0: value,
    1: setter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
}; ////////////////////////////////

const Signup = () => {
  const {
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: nick,
    1: setNick
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: passwordCheck,
    1: setPasswordCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: term,
    1: setTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: passwrodError,
    1: setpasswordError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: termError,
    1: setTermError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    isSigningUp,
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (me) {
      alert('로그인 성공');
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    }
  }, [me && me.id]);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    console.log({
      id,
      nick,
      password,
      passwordCheck,
      term
    });

    if (password !== passwordCheck) {
      return setpasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    return dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[/* SIGN_UP_REQUEST */ "B"],
      data: {
        userId: id,
        password,
        nickname: nick
      }
    });
  }, [id, nick, password, passwordCheck, term] // usecallback 안에서는 안에 쓰이는 state 전부 넣어주자
  );

  const onChangeId = e => {
    setId(e.target.value);
  };

  const onChangeNick = e => {
    setNick(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onChangePasswordChk = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setpasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);
  const onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  if (me) {
    return null;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmit,
    style: {
      padding: 10
    }
  }, __jsx("div", null, __jsx("label", {
    htmlFor: "user-id"
  }, "\uC544\uC774\uB514"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-id",
    required: true,
    value: id,
    onChange: onChangeId
  })), __jsx("div", null, __jsx("label", {
    htmlFor: "user-nick"
  }, "\uB2C9\uB124\uC784"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-nick",
    required: true,
    value: nick,
    onChange: onChangeNick
  })), __jsx("div", null, __jsx("label", {
    htmlFor: "user-pass"
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-pass",
    type: "password",
    required: true,
    value: password,
    onChange: onChangePassword
  })), __jsx("div", null, __jsx("label", {
    htmlFor: "user-pass-chk"
  }, "\uBE44\uBC00\uBC88\uD638 \uCCB4\uD06C"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-pass-chk",
    type: "password",
    required: true,
    value: passwordCheck,
    onChange: onChangePasswordChk
  }), passwrodError && __jsx(SignupError, null, " \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    name: "user-term",
    value: term,
    onChange: onChangeTerm
  }, "\uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx(SignupError, null, " \uC57D\uAD00\uC5D0 \uB3D9\uC758 \uD574\uC8FC\uC138\uC694.")), __jsx("div", null, __jsx("div", {
    style: {
      marginTop: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isSigningUp
  }, "\uAC00\uC785\uD558\uAE30"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

/******/ });