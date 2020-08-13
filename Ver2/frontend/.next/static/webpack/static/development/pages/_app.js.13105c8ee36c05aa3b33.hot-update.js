webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-redux-saga */ "./node_modules/next-redux-saga/dist/next-redux-saga.es.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_14__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// root , 모든 페이지의 레이아웃 역할




 // 리덕스 스테이트를 제공해줌(컴포넌트)









 // _document.js 에서 renderpage 랜더링 할 수 있게 해줌 (검색엔진에서 head 부분 노출시켜줌)

var Portfolio = function Portfolio(_ref) {
  var Component = _ref.Component,
      store = _ref.store,
      pageProps = _ref.pageProps;
  return (// Provider 가 최상위 컴포넌트이기 때문에 자식 컴포넌트들이 스토어에 접근할 수 있음
    // 스토어는 state, action, reducer 가 합쳐진 것
    __jsx(next_app__WEBPACK_IMPORTED_MODULE_14__["Container"], null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
      store: store
    }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_13__["default"], {
      title: "DSS PortFolio",
      htmlAttributes: {
        lang: 'ko'
      },
      meta: [{
        charSet: 'UTF-8'
      }, {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover'
      }, {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge'
      }, {
        name: 'description',
        content: 'DSS PortFolio'
      }, {
        name: 'og:title',
        content: 'NodeBird'
      }, {
        name: 'og:description',
        content: 'DSS PortFolio'
      }, {
        property: 'og:type',
        content: 'website'
      }],
      link: [{
        rel: 'shortcut icon',
        href: '/favicon.ico'
      }, {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.11/antd.css'
      }, {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      }, {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      }]
    }), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(Component, pageProps))))
  );
};

Portfolio.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,
  // JSX 에 들어가는 모든것(문자열,컴포넌트,태그,숫자 등)
  store: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  // isRequired : 필수값( 반드시 props가 존재, 없으면 경고 )
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

Portfolio.getInitialProps = function _callee(context) {
  var ctx, Component, pageProps, state, cookie;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(context);
          ctx = context.ctx, Component = context.Component;
          pageProps = {};
          state = ctx.store.getState(); // AppLayout 부분 SSR구조변경 
          // 리덕스 사가 호출순서 대로 코딩할 것.

          cookie = ctx.isServer ? ctx.req.headers.cookie : ''; // 클라이언트>서버 구조일땐 브라우저가 쿠키를 같이 넣어줬었는데(withCridentials:true),

          if (ctx.isServer && cookie) {
            // 서버일때(SSR)와 아닐때가 있기때문에 분기처리 해줌
            axios__WEBPACK_IMPORTED_MODULE_12___default.a.defaults.headers.Cookie = cookie; // SSR은 직접 쿠키를 넣어줘야함
          }

          if (!state.user.me) {
            // AppLayout 에서 !me 일때 디스패치 해줬던 것 - 스토어에서 me 정보를 가져오기
            ctx.store.dispatch({
              type: _reducers_user__WEBPACK_IMPORTED_MODULE_11__["LOAD_USER_REQUEST"]
            });
          }

          if (!Component.getInitialProps) {
            _context.next = 11;
            break;
          }

          _context.next = 10;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Component.getInitialProps(ctx));

        case 10:
          pageProps = _context.sent;

        case 11:
          return _context.abrupt("return", {
            pageProps: pageProps
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
};

var configureStore = function configureStore(initialState, options) {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var middlewares = [sagaMiddleware, function (store) {
    return function (next) {
      return function (action) {
        //리덕스 사가 에러 찾는법 - 커스텀 미들웨어
        // console.log(action);
        next(action);
      };
    };
  }]; // 보안상 아래 부분은 실 배포용인지 개발용인지 구분

  var enhancer = false ? undefined : Object(redux__WEBPACK_IMPORTED_MODULE_9__["compose"])(redux__WEBPACK_IMPORTED_MODULE_9__["applyMiddleware"].apply(void 0, middlewares), !options.isServer && true && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  });
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_9__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], initialState, enhancer); // 여기에 store 커스터마이징

  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_10__["default"]); //SSR 추가

  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"])(configureStore)(Object(next_redux_saga__WEBPACK_IMPORTED_MODULE_7__["default"])(Portfolio))); // 컴포넌트를 감싸줌(고차 컴포넌트- 기존컴포넌트 확장)

/***/ })

})
//# sourceMappingURL=_app.js.13105c8ee36c05aa3b33.hot-update.js.map