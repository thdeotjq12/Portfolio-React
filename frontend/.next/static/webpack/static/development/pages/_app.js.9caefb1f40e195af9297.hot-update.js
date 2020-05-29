webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _sagas_middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sagas/middleware */ "./sagas/middleware.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
var _jsxFileName = "C:\\Users\\Song\\Desktop\\projectpf\\frontend\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// root , 모든 페이지의 레이아웃 역할





 // 리덕스 스테이트를 제공해줌(컴포넌트)






const Portfolio = ({
  Component,
  store
}) => {
  return (// Provider 가 최상위 컴포넌트이기 때문에 자식 컴포넌트들이 스토어에 접근할 수 있음
    // 스토어는 state, action, reducer 가 합쳐진 것
    __jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, "PortFolio"), __jsx("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.11/antd.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }), __jsx("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.11/antd.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    })), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, __jsx(Component, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    })))
  );
};

Portfolio.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
  // JSX 에 들어가는 모든것(문자열,컴포넌트,태그,숫자 등)
  store: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"])((initialState, options) => {
  const middlewares = [_sagas_middleware__WEBPACK_IMPORTED_MODULE_8__["default"]]; // 보안상 아래 부분은 실 배포용인지 개발용인지 구분

  const enhancer = false ? undefined : Object(redux__WEBPACK_IMPORTED_MODULE_7__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_7__["applyMiddleware"])(...middlewares), !options.isServer && true && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_7__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], initialState, enhancer); // 여기에 store 커스터마이징

  _sagas_middleware__WEBPACK_IMPORTED_MODULE_8__["default"].run(_sagas__WEBPACK_IMPORTED_MODULE_9__["default"]);
  return store;
})(Portfolio)); // 컴포넌트를 감싸줌(고차 컴포넌트- 기존컴포넌트 확장)

/***/ })

})
//# sourceMappingURL=_app.js.9caefb1f40e195af9297.hot-update.js.map