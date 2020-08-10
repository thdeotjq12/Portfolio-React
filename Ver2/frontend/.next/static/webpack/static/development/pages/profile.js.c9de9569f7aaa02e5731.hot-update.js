webpackHotUpdate("static\\development\\pages\\profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // 폼은 state가 빈번하게 변하므로 분리를 해주자





var Profile = function Profile() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      followerList = _useSelector.followerList,
      followingList = _useSelector.followingList,
      hasMoreFollower = _useSelector.hasMoreFollower,
      hasMoreFollowing = _useSelector.hasMoreFollowing;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts;

  var onUnfollow = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (userId) {
    return function () {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["UNFOLLOW_USER_REQUEST"],
        data: userId
      });
    };
  }, []);
  var onRemoveFollower = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (userId) {
    return function () {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["REMOVE_FOLLOWER_REQUEST"],
        data: userId
      });
    };
  }, []);
  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_FOLLOWINGS_REQUEST"],
      offset: followingList.length // (더보기 기능:3개씩) 기본값 limit = 3(처음 데이터 개수) > 3개씩 늘어남

    });
  }, [followingList.length]);
  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_FOLLOWERS_REQUEST"],
      offset: followerList.length
    });
  }, [followerList.length]);
  return __jsx("div", null, __jsx(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: {
      marginBottom: '20px'
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    header: __jsx("div", null, "\uD314\uB85C\uC789 \uBAA9\uB85D"),
    size: "small",
    loadMore: hasMoreFollowing && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      style: {
        width: '100%'
      },
      onClick: loadMoreFollowings
    }, "\uB354 \uBCF4\uAE30"),
    bordered: true,
    dataSource: followingList,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        style: {
          marginTop: '20px'
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          key: "stop",
          type: "stop",
          onClick: onUnfollow(item.id)
        })]
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        description: item.nickname
      })));
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: {
      marginBottom: '20px'
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    header: __jsx("div", null, "\uD314\uB85C\uC6CC \uBAA9\uB85D"),
    loadMore: hasMoreFollower && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      style: {
        width: '100%'
      },
      onClick: loadMoreFollowers
    }, "\uB354 \uBCF4\uAE30"),
    bordered: true,
    dataSource: followerList,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        style: {
          marginTop: '20px'
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          key: "stop",
          type: "stop",
          onClick: onRemoveFollower(item.id)
        })]
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        description: item.nickname
      })));
    }
  }), __jsx("div", null, mainPosts ? mainPosts.map(function (c) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: +c.createdAt,
      post: c
    });
  }) : null));
};

Profile.getInitialProps = function _callee(context) {
  var state;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          state = context.store.getState();
          context.store.dispatch({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_FOLLOWERS_REQUEST"],
            data: state.user.me && state.user.me.id
          });
          context.store.dispatch({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_FOLLOWINGS_REQUEST"],
            data: state.user.me && state.user.me.id
          });
          context.store.dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_USER_POSTS_REQUEST"],
            data: state.user.me && state.user.me.id
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=profile.js.c9de9569f7aaa02e5731.hot-update.js.map