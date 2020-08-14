webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ImagesZoom.js":
/*!**********************************!*\
  !*** ./components/ImagesZoom.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: calc(100% - 44px);\n  background: #090909;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0;\n  fontSize: 17px;\n  color: #333;\n  lineHeight: 44px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 44;\n  background: white;\n  position: relative;\n  padding: 0;\n  textAlign: center;  \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  z-index: 5000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
var Header = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].header(_templateObject2());
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h1(_templateObject3());
var SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject4());

var ImagesZoom = function ImagesZoom(_ref) {
  var images = _ref.images,
      onClose = _ref.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentSlide = _useState[0],
      setCurrentSlide = _useState[1]; // 몇번째 이미지를 보고있는지


  return __jsx(Overlay, null, __jsx(Header, null, __jsx(H1, null, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "close",
    onClick: onClose,
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      padding: 15,
      lineHeight: '14px',
      cursor: 'pointer'
    }
  })), __jsx(SlickWrapper, null, __jsx("div", null, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, {
    initialSlide: 0 // 처음 보여줄 이미지 
    ,
    afterChange: function afterChange(slide) {
      return setCurrentSlide(slide);
    } // 슬라이드 할때마다 index 변경
    ,
    infinite: false // 무한 슬라이드 1~4 > 4~1
    ,
    arrows: true,
    slidesToShow: 1 // 한번에 1장만 보여줌
    ,
    slidesToScroll: 1 // 한번에 1장만 슬라이드

  }, images.map(function (v) {
    return __jsx("div", {
      style: {
        padding: 32,
        textAlign: 'center'
      }
    }, __jsx("img", {
      src: "http://localhost:3065/".concat(v.src),
      style: {
        margin: '0 auto',
        maxHeight: 750
      }
    }));
  })), __jsx("div", {
    style: {
      textAlign: 'center'
    }
  }, __jsx("div", {
    style: {
      width: 75,
      height: 30,
      lineHeight: '30px',
      borderRadius: 15,
      background: '#313131',
      display: 'inline-block',
      textAlign: 'center',
      color: 'white',
      fontSize: '15px'
    }
  }, currentSlide + 1, " / ", images.length)))));
};

ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  })).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

/***/ })

})
//# sourceMappingURL=index.js.726acd573e1c2be653d5.hot-update.js.map