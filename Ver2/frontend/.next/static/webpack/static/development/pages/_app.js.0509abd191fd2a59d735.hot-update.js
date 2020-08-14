webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 // 프로그래밍적으로 페이지 변경, 컴포넌트적으로는 Link

var onSearch = function onSearch(value) {
  next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({
    pathname: '/hashtag',
    query: {
      tag: value
    }
  }, "/hashtag/".concat(value));
};

var AppLayout = function AppLayout(_ref) {
  var children = _ref.children;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  return __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    mode: "horizontal"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "home"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", null, "\uB178\uB4DC\uBC84\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "profile"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile"
  }, __jsx("a", null, "\uD504\uB85C\uD544"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "mail"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search, {
    enterButton: true,
    style: {
      verticalAlign: "middle"
    },
    onSearch: onSearch
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 8
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    md: 6
  }, me ? __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], null) : __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    md: 6
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    md: 6
  }, "3")));
};

AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node // 랜더링 될 수 있는 컴포넌트들

};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ })

})
//# sourceMappingURL=_app.js.0509abd191fd2a59d735.hot-update.js.map