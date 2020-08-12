webpackHotUpdate("static\\development\\pages\\post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Post = function Post(_ref) {
  var id, _useSelector, singlePost;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function Post$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = _ref.id;
          _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
            return state.post;
          }), singlePost = _useSelector.singlePost;
          _context.t0 = __jsx;
          _context.t1 = react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment;
          _context.t2 = __jsx;
          _context.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(singlePost);

        case 7:
          _context.t3 = _context.sent;

          if (!_context.t3) {
            _context.next = 10;
            break;
          }

          _context.t3 = singlePost.content;

        case 10:
          _context.t4 = _context.t3;
          _context.t5 = (0, _context.t2)("div", null, _context.t4);
          _context.t6 = __jsx;
          _context.next = 15;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(singlePost);

        case 15:
          _context.t7 = _context.sent;

          if (!_context.t7) {
            _context.next = 18;
            break;
          }

          _context.t7 = singlePost.User.nickname;

        case 18:
          _context.t8 = _context.t7;
          _context.t9 = (0, _context.t6)("div", null, _context.t8);
          _context.t10 = __jsx;
          _context.next = 23;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(singlePost);

        case 23:
          _context.t12 = _context.sent;

          if (!_context.t12) {
            _context.next = 26;
            break;
          }

          _context.t12 = singlePost.Images[0];

        case 26:
          _context.t11 = _context.t12;

          if (!_context.t11) {
            _context.next = 29;
            break;
          }

          _context.t11 = __jsx("img", {
            src: "http://localhost:3065/".concat(singlePost.Images[0].src)
          });

        case 29:
          _context.t13 = _context.t11;
          _context.t14 = (0, _context.t10)("div", null, _context.t13);
          return _context.abrupt("return", (0, _context.t0)(_context.t1, null, _context.t5, _context.t9, _context.t14));

        case 32:
        case "end":
          return _context.stop();
      }
    }
  });
};

Post.getInitialProps = function _callee(context) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          context.store.dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POST_REQUEST"],
            data: context.query.id
          });
          return _context2.abrupt("return", {
            id: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(context.query.id, 10)
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

Post.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.780e7b7b0a6598c561a9.hot-update.js.map