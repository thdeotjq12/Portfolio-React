webpackHotUpdate("static\\development\\pages\\hashtag.js",{

/***/ "./pages/hashtag.js":
/*!**************************!*\
  !*** ./pages/hashtag.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Hashtag = function Hashtag(_ref) {
  var tag = _ref.tag;
  console.log("해쉬태그 페이지 tag:", tag);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts,
      hasMorePost = _useSelector.hasMorePost;

  var onScroll = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    //window.scrollY:현재위치, clientHeight: 스크롤바의 높이(현재화면), scrollHeight: 맨위에서 맨아래까지의 높이
    // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)
    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
      if (hasMorePost) {
        // 더 불러올 게시글이 있을때 요청(스크롤 할때마다 요청하는 것을 방지)
        dispatch({
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_HASHTAG_POSTS_REQUEST"],
          lastId: mainPosts[mainPosts.length - 1].id,
          // 마지막게시글 기준으로 다음게시글 불러옴(게시글 보고있는데 새 게시글이 추가되면, 밀려서 불러오게되서 마지막 게시글을 기준으로 계산해서 불러오기) 
          data: tag
        });
      }
    }
  }, [mainPosts.length, hasMorePost]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('scroll', onScroll);
    return function () {
      // 이벤트 사용하고 나서 꼭 정리해주자
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.length]);
  return __jsx("div", null, mainPosts ? mainPosts.map(function (c) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: +c.createdAt,
      post: c
    });
  }) : null) // 강의에서는(6.3 18:49) ? 처리 안해줘도 됨, 나는 map undefined 에러, 왜 ?
  ;
};

Hashtag.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

Hashtag.getInitialProps = function _callee(context) {
  var tag;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          tag = context.query.tag;
          console.log('hashtag props on hastag.js', context.query.tag, context); // 서버에서 라우팅받은 정보가 넘어오는지 확인, _app.js에서 또 추가해줌

          context.store.dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_HASHTAG_POSTS_REQUEST"],
            data: tag
          });
          return _context.abrupt("return", {
            tag: tag
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Hashtag);

/***/ })

})
//# sourceMappingURL=hashtag.js.590566a236f7c6cfb32e.hot-update.js.map