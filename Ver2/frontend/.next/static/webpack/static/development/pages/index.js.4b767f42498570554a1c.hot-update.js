webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Home = function Home() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var onScroll = function onScroll() {
    //window.scrollY:현재위치, clientHeight: 스크롤바의 높이(현재화면), scrollHeight: 맨위에서 맨아래까지의 높이
    console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);

    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_MAIN_POSTS_REQUEST"],
        lastId: mainPosts[mainPosts.length - 1].id // 마지막게시글 기준으로 다음게시글 불러옴(게시글 보고있는데 새 게시글이 추가되면, 밀려서 불러오게되서 마지막 게시글을 기준으로 계산해서 불러오기) 

      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('scroll', onScroll);
    return function () {
      // 이벤트 사용하고 나서 꼭 정리해주자
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return __jsx("div", null, me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], null), mainPosts.map(function (c) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: c,
      post: c
    });
  }));
}; // context 는 _app.js 에서 pageProps = await Component.getInitialProps(ctx); 의 ctx 임, context안에는 store 있고,
// store안에 리덕스 함수들이 있음


Home.getInitialProps = function _callee(context) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // console.log(Object.keys(context));
          // 1. SSR: 이렇게 디스패치를 여기서 해줌, 2. _app.js 에 withReduxSaga 추가(next 용 리덕스 사가)
          context.store.dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_MAIN_POSTS_REQUEST"]
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4b767f42498570554a1c.hot-update.js.map