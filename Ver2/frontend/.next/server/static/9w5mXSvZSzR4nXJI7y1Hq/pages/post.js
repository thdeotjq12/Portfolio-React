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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EhLH");


/***/ }),

/***/ "EhLH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("p+NB");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zIXN");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Post = ({
  id
}) => {
  const {
    singlePost
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: `${singlePost.User.nickname}님의 글`,
    description: singlePost.content,
    meta: [{
      name: 'description',
      content: singlePost.content
    }, {
      property: 'og:title',
      content: `${singlePost.User.nickname}님의 게시글`
    }, {
      property: 'og:description',
      content: `${singlePost.User.nickname}님의 게시글`
    }, {
      property: 'og:image',
      content: singlePost.Images[0] && `http://localhost:3065/${_reducers_post__WEBPACK_IMPORTED_MODULE_2__[/* default */ "L"].Images[0].src}`
    }, {
      property: 'og:url',
      content: `http://localhost:3060/post/${id}`
    }]
  }, __jsx("div", null, singlePost.content), __jsx("div", null, singlePost.User.nickname), __jsx("div", null, singlePost.Images[0] && __jsx("img", {
    src: `http://localhost:3065/${singlePost.Images[0].src}`
  }))));
};

Post.getInitialProps = async context => {
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[/* LOAD_POST_REQUEST */ "t"],
    data: context.query.id
  });
  return {
    id: parseInt(context.query.id, 10)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

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

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_MAIN_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_MAIN_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_MAIN_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_COMMENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_COMMENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_COMMENTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_POST_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  mainPosts: [],
  // 화면에 보일 포스트들
  imagePaths: [],
  // 미리보기 이미지 경로
  addPostErrorReason: false,
  // 포스트 업로드 실패 사유
  isAddingPost: false,
  // 포스트 업로드 중 
  postAdded: false,
  // 포스트 업로드 성공
  isAddingComment: false,
  addCommentErrorReason: '',
  commentAdded: false,
  singlePost: null // 개별포스트

}; //메인 포스트를 로딩

const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE'; //해시태그 검색했을때 결과 로딩

const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE'; //사용자가 어떤 게시글을 썼는지 로딩

const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE'; //이미지 업로드

const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE'; //이미지 업로드 취소(동기)

const REMOVE_IMAGE = 'REMOVE_IMAGE'; //포스트 추가

const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE'; //포스트에 LIKE 누르는 액션

const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE'; //포스트에 LIKE 취소하는 액션

const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE'; //게시글에 댓글 남기기

const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; //게시글 댓글 불러오기

const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENT_REQUEST';
const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENT_SUCCESS';
const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENT_FAILURE'; //리트윗 하는 액션

const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE'; //포스트 제거하는 액션

const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE'; //개별 포스트 불러오기

const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
/* harmony default export */ __webpack_exports__["L"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case UPLOAD_IMAGES_REQUEST:
        {
          break;
        }

      case UPLOAD_IMAGES_SUCCESS:
        {
          // immer 적용(코드정리, 불변성 유지해줌), immer 에서 draft 상태 체크 후 바뀐부분을 state에 적용
          action.data.forEach(p => {
            draft.imagePaths.push(p);
          });
          break; // immer 적용 전 코드
          // return {
          //     ...state,
          //     imagePaths:[...state.imagePaths, ...action.data], // 이미지 미리보기 할 수 있는 경로들
          // }
        }

      case UPLOAD_IMAGES_FAILURE:
        {
          break;
        }
      // 이미지 제거는 동기적으로 처리해도 되서 3분류안함

      case REMOVE_IMAGE:
        {
          const index = draft.imagePaths.findIndex((v, i) => i === action.index);
          draft.imagePaths.splice(index, 1);
          break;
        }
      // 게시글 작성

      case ADD_POST_REQUEST:
        {
          draft.isAddingPost = true;
          draft.addPostErrorReason = '';
          draft.postAdded = false;
          break;
        }

      case ADD_POST_SUCCESS:
        {
          draft.isAddingPost = false;
          draft.mainPosts.unshift(action.data);
          draft.postAdded = true;
          draft.imagePaths = [];
          break; // return {
          //     ...state,
          //     isAddingPost: false,
          //     mainPosts: [action.data, ...state.mainPosts],
          //     postAdded: true,
          //     imagePaths: [],
          // }
        }

      case ADD_POST_FAILURE:
        {
          return _objectSpread({}, state, {
            isAddingPost: false,
            addPostErrorReason: action.error
          });
        }
      // 댓글 달기

      case ADD_COMMENT_REQUEST:
        {
          return _objectSpread({}, state, {
            isAddingComment: true,
            addCommentErrorReason: '',
            commentAdded: false
          });
        }

      case ADD_COMMENT_SUCCESS:
        {
          // 어떤게시글에 댓글을 추가할지
          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
          draft.mainPosts[postIndex].Comments.push(action.data.comment);
          draft.isAddingComment = false;
          draft.commentAdded = true;
          break; // const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
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

      case ADD_COMMENT_FAILURE:
        {
          return _objectSpread({}, state, {
            isAddingComment: false,
            addCommentErrorReason: action.error
          });
        }

      case LOAD_COMMENTS_SUCCESS:
        {
          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
          draft.mainPosts[postIndex].Comments = action.data.comments;
          break; // const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
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
      case LOAD_USER_POSTS_REQUEST:
        {
          draft.mainPosts = !action.lastId ? [] : draft.mainPosts;
          draft.hasMorePost = action.lastId ? draft.hasMorePost : true;
          break; // return {
          //     ...state,
          //     mainPosts: action.lastId === 0 ? [] : state.mainPosts,// 처음게시글 불러올땐 기존게시글 초기화,더 불러올땐 기존 게시글 유지(스크롤링) 
          //     hasMorePost : action.lastId ? state.hasMorePost : true, // 처음불러올땐 더보기 활성화 lastId = 0 (false), 더 불러오는 중일땐 기존상태 유지
          // }
        }

      case LOAD_MAIN_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS:
        {
          return _objectSpread({}, state, {
            mainPosts: state.mainPosts.concat(action.data),
            hasMorePost: action.data.length === 10
          });
        }

      case LOAD_MAIN_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
      case LOAD_USER_POSTS_FAILURE:
        {
          break;
        }

      case LIKE_POST_REQUEST:
        {
          break;
        }

      case LIKE_POST_SUCCESS:
        {
          // 불변성때문에, 바뀔 객체만 새로 만들어줘야함
          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
          draft.mainPosts[postIndex].Likers.unshift({
            id: action.data.userId
          });
          break; // const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId) ;
          // const post = state.mainPosts[postIndex];
          // const Likers = [{ id : action.data.userId }, ...post.Likers];
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = {...post, Likers}; //불변성 유지 후 다시 구성하는 부분
          // return {
          //     ...state,
          //     mainPosts,
          // }
        }

      case LIKE_POST_FAILURE:
        {
          break;
        }

      case UNLIKE_POST_REQUEST:
        {
          break;
        }

      case UNLIKE_POST_SUCCESS:
        {
          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
          const likeIndex = draft.mainPosts[postIndex].Likers.findIndex(v => v.id === action.data.userId);
          draft.mainPosts[postIndex].Likers.splice(likeIndex, 1);
          break; // const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId) ;
          // const post = state.mainPosts[postIndex];
          // const Likers = post.Likers.filter(v=> v.id !== action.data.userId); // 좋아요 목록중 내 아이디 제거 
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = {...post, Likers};
          // return {
          //     ...state,
          //     mainPosts,
          // }
        }

      case UNLIKE_POST_FAILURE:
        {
          break;
        }

      case RETWEET_REQUEST:
        {
          break;
        }

      case RETWEET_SUCCESS:
        {
          return _objectSpread({}, state, {
            mainPosts: [action.data, ...state.mainPosts] // 기존 게시글 앞에 받아온 게시글을 받아오기

          });
        }

      case RETWEET_FAILURE:
        {
          break;
        }

      case REMOVE_POST_REQUEST:
        {
          break;
        }

      case REMOVE_POST_SUCCESS:
        {
          return _objectSpread({}, state, {
            mainPosts: state.mainPosts.filter(v => v.id !== action.data)
          });
        }

      case REMOVE_POST_FAILURE:
        {
          break;
        }

      case LOAD_POST_SUCCESS:
        {
          draft.singlePost = action.data;
          break;
        }

      default:
        {
          break;
        }
    }
  });
});

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });