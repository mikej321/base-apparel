/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-pattern-desktop.svg */ "./src/images/bg-pattern-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

html {
  font-size: 62.5%;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

body {
  font-size: 16px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Josefin Sans", sans-serif;
}

.container {
  position: relative;
  background: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
  display: grid;
  grid-template-areas: "logo" "img" "info";
  max-width: 37.5rem;
  gap: 2.5rem;
  padding-block: 3rem 5rem;
  justify-items: center;
}

@media screen and (min-width: 600px) {
  .container {
    max-width: 1300px;
    max-height: 610px;
    grid-template-areas: "logo img" "info img";
    grid-template-columns: 2fr, 1fr;
    padding-block: 0;
    justify-items: flex-start;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  }
}
.logo {
  grid-area: logo;
  max-width: 10rem;
  margin-left: 3rem;
  justify-self: start;
}

@media screen and (min-width: 600px) {
  .logo {
    margin-top: 5rem;
    margin-left: 15rem;
  }
}
.hero-container {
  grid-area: img;
}
.hero-container[error=""] {
  max-height: 0;
  overflow: hidden;
}

@media screen and (min-width: 600px) {
  .hero {
    height: 100%;
    max-height: 610px;
  }
}
@media screen and (min-width: 600px) {
  .left-side {
    padding-inline: 15rem 10rem;
    padding-bottom: 12rem;
  }
}
.container h1 {
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  letter-spacing: 9px;
  margin-bottom: 2rem;
}
.container h1 .firstWord {
  color: hsl(0, 36%, 70%);
  font-weight: 300;
  margin-bottom: -0.4rem;
}
.container h1 span:nth-child(2),
.container h1 span:last-child {
  color: hsl(0, 6%, 24%);
  font-weight: 600;
  margin-bottom: -0.4rem;
}

@media screen and (min-width: 600px) {
  .container h1 {
    align-items: flex-start;
    font-size: 5.5rem;
    margin-top: 6rem;
    padding-right: 15rem;
  }
}
.container p {
  color: hsl(0, 36%, 70%);
  text-align: center;
  font-size: 1.4rem;
  padding-inline: 3rem;
  line-height: 1.9rem;
  margin-bottom: 2rem;
}

@media screen and (min-width: 600px) {
  .container p {
    text-align: left;
    padding-inline: 0;
    font-size: 1.3rem;
    max-width: 35rem;
  }
}
.input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

@media screen and (min-width: 600px) {
  .input-container {
    align-items: flex-start;
  }
}
#userEmail {
  padding-left: 2rem;
  width: 100%;
  max-width: 30rem;
  height: 4rem;
  border: 1px solid hsl(0, 36%, 70%);
  border-radius: 3rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  background: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
}
#userEmail::placeholder {
  color: hsl(0, 36%, 70%);
}
#userEmail:focus {
  outline: none;
}
#userEmail[valid=""] {
  border: 1px solid hsl(0, 36%, 70%);
}
#userEmail[invalid=""] {
  border: 2px solid hsl(0, 93%, 68%);
  outline: none;
}

@media screen and (min-width: 600px) {
  #userEmail {
    max-width: 35rem;
  }
}
.error-icon {
  max-width: 1.5rem;
  max-height: 0;
  overflow: hidden;
  position: absolute;
  bottom: 1.2rem;
  right: 10rem;
}
.error-icon[error=""] {
  max-height: 1.5rem;
  overflow: auto;
}

@media screen and (min-width: 600px) {
  .error-icon {
    right: 18rem;
  }
}
.icon-container {
  position: absolute;
  bottom: 0;
  right: 3.6rem;
  display: flex;
  width: 100%;
  max-width: 5rem;
  height: 4rem;
  border-radius: 3rem;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
  cursor: pointer;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
}
.icon-container:hover {
  background: #fdc4c4;
  max-width: 7rem;
  box-shadow: 0 4px 12px 2px hsl(0, 36%, 70%);
}
.icon-container[success=""] {
  pointer-events: all;
}

@media screen and (min-width: 600px) {
  .icon-container {
    right: 9.6rem;
    max-width: 7rem;
  }
}
.arrow {
  max-width: 1.5rem;
  height: 1.5rem;
}

.err-message {
  position: absolute;
  bottom: -2rem;
  left: 5.8rem;
  color: hsl(0, 93%, 68%);
  font-size: 1rem;
  max-height: 0;
  overflow: hidden;
  font-weight: 600;
}
.err-message[error=""] {
  max-height: fit-content;
  overflow: auto;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"AAkBA;;;EAGI,sBAAA;AAhBJ;;AAkBA;EACI,SAAA;EACA,UAAA;EACA,uBAAA;AAfJ;;AAiBA;EACI,gBAAA;AAdJ;;AAgBA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;AAbJ;;AAeA;EACI,eAvBQ;EAwBR,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uCA5BO;AAgBX;;AAcA;EACI,kBAAA;EACA,wEAAA;EACA,aAAA;EACA,wCAAA;EACA,kBAAA;EACA,WAAA;EACA,wBAAA;EACA,qBAAA;AAXJ;;AAaA;EACI;IACI,iBAAA;IACA,iBAAA;IACA,0CAAA;IACA,+BAAA;IACA,gBAAA;IACA,yBAAA;IACA,mDAAA;EAVN;AACF;AAWA;EACI,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AATJ;;AAWA;EACI;IACI,gBAAA;IACA,kBAAA;EARN;AACF;AASA;EACI,cAAA;AAPJ;AAQI;EACI,aAAA;EACA,gBAAA;AANR;;AAQA;EACI;IACI,YAAA;IACA,iBAAA;EALN;AACF;AAOA;EACI;IACI,2BAAA;IACA,qBAAA;EALN;AACF;AAMA;EACI,yBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;AAJJ;AAKI;EACI,uBAnGU;EAoGV,gBAAA;EACA,sBAAA;AAHR;AAII;;EAEI,sBApGW;EAqGX,gBAAA;EACA,sBAAA;AAFR;;AAIA;EACI;IACI,uBAAA;IACA,iBAAA;IACA,gBAAA;IACA,oBAAA;EADN;AACF;AAGA;EACI,uBArHc;EAsHd,kBAAA;EACA,iBAAA;EACA,oBAAA;EACA,mBAAA;EACA,mBAAA;AADJ;;AAGA;EACI;IACI,gBAAA;IACA,iBAAA;IACA,iBAAA;IACA,gBAAA;EAAN;AACF;AAEA;EACI,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AAAJ;;AAEA;EACI;IACI,uBAAA;EACN;AACF;AAAA;EACI,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,kCAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,wEAAA;AAEJ;AADI;EACI,uBA1JU;AA6JlB;AAFI;EACI,aAAA;AAIR;AAHI;EACI,kCAAA;AAKR;AAJI;EACI,kCAAA;EACA,aAAA;AAMR;;AAJA;EACI;IACI,gBAAA;EAON;AACF;AANA;EACI,iBAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;AAQJ;AAPI;EACI,kBAAA;EACA,cAAA;AASR;;AAPA;EACI;IACI,YAAA;EAUN;AACF;AATA;EACI,kBAAA;EACA,SAAA;EACA,aAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uEAAA;EACA,eAAA;EACA,oBAAA;EACA,gCAAA;AAWJ;AAVI;EACI,mBAAA;EACA,eAAA;EACA,2CAAA;AAYR;AAXI;EACI,mBAAA;AAaR;;AAXA;EACI;IACI,aAAA;IACA,eAAA;EAcN;AACF;AAZA;EACI,iBAAA;EACA,cAAA;AAcJ;;AAXA;EACI,kBAAA;EACA,aAAA;EACA,YAAA;EACA,uBA1NO;EA2NP,eAAA;EACA,aAAA;EACA,gBAAA;EACA,gBAAA;AAcJ;AAbI;EACI,uBAAA;EACA,cAAA;AAeR","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap')\n\n// Primary Colors\n$desaturated_red: hsl(0, 36%, 70%)\n$soft_red: hsl(0, 93%, 68%)\n\n// Neutral Colors\n$dark_grayish_red: hsl(0, 6%, 24%)\n\n// Gradients\n$grad_1: 135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%)\n$grad_2: 135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%)\n\n// Font Stuff\n$font_size: 16px\n$font_fam: 'Josefin Sans', sans-serif\n\n// Resets\n*,\n*::before,\n*::after\n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nimg\n    width: 100%\n    height: auto\n    object-fit: cover\n\nbody\n    font-size: $font_size\n    min-height: 100vh\n    display: flex\n    flex-direction: column\n    justify-content: center\n    align-items: center\n    font-family: $font_fam\n\n.container\n    position: relative\n    background: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))\n    display: grid\n    grid-template-areas: \"logo\" \"img\" \"info\"\n    max-width: 37.5rem\n    gap: 2.5rem\n    padding-block: 3rem 5rem\n    justify-items: center\n\n@media screen and (min-width: 600px)\n    .container\n        max-width: 1300px\n        max-height: 610px\n        grid-template-areas: \"logo img\" \"info img\"\n        grid-template-columns: 2fr, 1fr\n        padding-block: 0\n        justify-items: flex-start\n        background: url('../images/bg-pattern-desktop.svg')\n\n.logo\n    grid-area: logo\n    max-width: 10rem\n    margin-left: 3rem\n    justify-self: start\n\n@media screen and (min-width: 600px)\n    .logo\n        margin-top: 5rem\n        margin-left: 15rem\n\n.hero-container\n    grid-area: img\n    &[error='']\n        max-height: 0\n        overflow: hidden\n\n@media screen and (min-width: 600px)\n    .hero\n        height: 100%\n        max-height: 610px\n        \n\n@media screen and (min-width: 600px)\n    .left-side\n        padding-inline: 15rem 10rem        \n        padding-bottom: 12rem\n        \n.container h1\n    text-transform: uppercase\n    display: flex\n    flex-direction: column\n    align-items: center\n    margin-top: 2rem\n    letter-spacing: 9px\n    margin-bottom: 2rem\n    .firstWord\n        color: $desaturated_red\n        font-weight: 300\n        margin-bottom: -.4rem\n    span:nth-child(2),\n    span:last-child\n        color: $dark_grayish_red\n        font-weight: 600\n        margin-bottom: -.4rem\n\n@media screen and (min-width: 600px)\n    .container h1\n        align-items: flex-start\n        font-size: 5.5rem\n        margin-top: 6rem\n        padding-right: 15rem\n\n        \n.container p\n    color: $desaturated_red\n    text-align: center\n    font-size: 1.4rem\n    padding-inline: 3rem\n    line-height: 1.9rem\n    margin-bottom: 2rem\n\n@media screen and (min-width: 600px)\n    .container p\n        text-align: left\n        padding-inline: 0\n        font-size: 1.3rem\n        max-width: 35rem\n        // padding-right: 10rem\n\n.input-container\n    width: 100%\n    display: flex\n    flex-direction: column\n    align-items: center\n    position: relative\n\n@media screen and (min-width: 600px)\n    .input-container\n        align-items: flex-start\n\n#userEmail\n    padding-left: 2rem\n    width: 100%\n    max-width: 30rem\n    height: 4rem\n    border: 1px solid $desaturated_red\n    border-radius: 3rem\n    margin-top: 1rem\n    font-size: 1.2rem\n    background: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))\n    &::placeholder\n        color: $desaturated_red\n    &:focus\n        outline: none\n    &[valid='']\n        border: 1px solid $desaturated_red\n    &[invalid='']\n        border: 2px solid $soft_red\n        outline: none\n\n@media screen and (min-width: 600px)\n    #userEmail\n        max-width: 35rem\n\n.error-icon\n    max-width: 1.5rem\n    max-height: 0\n    overflow: hidden\n    position: absolute\n    bottom: 1.2rem\n    right: 10rem\n    &[error=\"\"]\n        max-height: 1.5rem\n        overflow: auto\n\n@media screen and (min-width: 600px)\n    .error-icon\n        right: 18rem\n\n.icon-container\n    position: absolute\n    bottom: 0\n    right: 3.6rem\n    display: flex\n    width: 100%\n    max-width: 5rem\n    height: 4rem\n    border-radius: 3rem\n    justify-content: center\n    align-items: center\n    background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))\n    cursor: pointer\n    pointer-events: none\n    transition: all 0.2s ease-in-out\n    &:hover\n        background: lighten($soft_red, 20%)\n        max-width: 7rem\n        box-shadow: 0 4px 12px 2px $desaturated_red\n    &[success='']\n        pointer-events: all\n\n@media screen and (min-width: 600px)\n    .icon-container\n        right: 9.6rem\n        max-width: 7rem\n\n\n.arrow\n    max-width: 1.5rem\n    height: 1.5rem\n    \n\n.err-message\n    position: absolute\n    bottom: -2rem\n    left: 5.8rem\n    color: $soft_red\n    font-size: 1rem\n    max-height: 0\n    overflow: hidden\n    font-weight: 600\n    &[error='']\n        max-height: fit-content\n        overflow: auto"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/bg-pattern-desktop.svg":
/*!*******************************************!*\
  !*** ./src/images/bg-pattern-desktop.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "964ebd4dd8014fd040d7.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.sass */ "./src/styles/style.sass");


const iconContainer = document.querySelector('.icon-container');
const inputEmail = document.querySelector("input[type='email']");
const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.err-message');

const emailRegex = /^\w+@\w+\.(?:com|fr|co\.uk|com\.br|net)/gmi;

window.onload = removeData();

function removeData() {
    inputEmail.value = '';
}




inputEmail.addEventListener('input', () => {
    if (!emailRegex.test(inputEmail.value)) {
        if (inputEmail.hasAttribute('valid')) {
            inputEmail.removeAttribute('valid');
            errorMessage.setAttribute('error', '');
            errorIcon.setAttribute('error', '');
            inputEmail.setAttribute('invalid', '');
            inputEmail.focus();
            iconContainer.removeAttribute('success')
        } else {
            errorMessage.setAttribute('error', '');
            errorIcon.setAttribute('error', '');
            inputEmail.setAttribute('invalid', '');
            inputEmail.focus();
            iconContainer.removeAttribute('success');
        }
    } else {
        if (inputEmail.hasAttribute('invalid')) {
            inputEmail.removeAttribute('invalid');
            errorMessage.removeAttribute('error');
            errorIcon.removeAttribute('error');
            inputEmail.setAttribute('valid', '');
            iconContainer.setAttribute('success', '');
        } else {
            errorMessage.removeAttribute('error');
            errorIcon.removeAttribute('error');
            inputEmail.setAttribute('valid', '');
            iconContainer.setAttribute('success', '');
        }
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDRJQUFtRDtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHFIQUFxSCxJQUFJLGtCQUFrQjtBQUMzSSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJGQUEyRixXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxL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V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzZS1hcHBhcmVsLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzIiwid2VicGFjazovL2Jhc2UtYXBwYXJlbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmFzZS1hcHBhcmVsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXNlLWFwcGFyZWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXNlLWFwcGFyZWwvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3M/YmZhZCIsIndlYnBhY2s6Ly9iYXNlLWFwcGFyZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmFzZS1hcHBhcmVsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXNlLWFwcGFyZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmFzZS1hcHBhcmVsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Jhc2UtYXBwYXJlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Jhc2UtYXBwYXJlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Jhc2UtYXBwYXJlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXNlLWFwcGFyZWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmFzZS1hcHBhcmVsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXNlLWFwcGFyZWwvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXNlLWFwcGFyZWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXNlLWFwcGFyZWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXNlLWFwcGFyZWwvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmFzZS1hcHBhcmVsL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Jhc2UtYXBwYXJlbC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmFzZS1hcHBhcmVsLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmctcGF0dGVybi1kZXNrdG9wLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMzAwOzQwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgaHNsKDAsIDAlLCAxMDAlKSwgaHNsKDAsIDEwMCUsIDk4JSkpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxvZ29cIiBcImltZ1wiIFwiaW5mb1wiO1xuICBtYXgtd2lkdGg6IDM3LjVyZW07XG4gIGdhcDogMi41cmVtO1xuICBwYWRkaW5nLWJsb2NrOiAzcmVtIDVyZW07XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMzAwcHg7XG4gICAgbWF4LWhlaWdodDogNjEwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsb2dvIGltZ1wiIFwiaW5mbyBpbWdcIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciwgMWZyO1xuICAgIHBhZGRpbmctYmxvY2s6IDA7XG4gICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIH1cbn1cbi5sb2dvIHtcbiAgZ3JpZC1hcmVhOiBsb2dvO1xuICBtYXgtd2lkdGg6IDEwcmVtO1xuICBtYXJnaW4tbGVmdDogM3JlbTtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDE1cmVtO1xuICB9XG59XG4uaGVyby1jb250YWluZXIge1xuICBncmlkLWFyZWE6IGltZztcbn1cbi5oZXJvLWNvbnRhaW5lcltlcnJvcj1cIlwiXSB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5oZXJvIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNjEwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5sZWZ0LXNpZGUge1xuICAgIHBhZGRpbmctaW5saW5lOiAxNXJlbSAxMHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJyZW07XG4gIH1cbn1cbi5jb250YWluZXIgaDEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBsZXR0ZXItc3BhY2luZzogOXB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNvbnRhaW5lciBoMSAuZmlyc3RXb3JkIHtcbiAgY29sb3I6IGhzbCgwLCAzNiUsIDcwJSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IC0wLjRyZW07XG59XG4uY29udGFpbmVyIGgxIHNwYW46bnRoLWNoaWxkKDIpLFxuLmNvbnRhaW5lciBoMSBzcGFuOmxhc3QtY2hpbGQge1xuICBjb2xvcjogaHNsKDAsIDYlLCAyNCUpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAtMC40cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIGgxIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmb250LXNpemU6IDUuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cmVtO1xuICB9XG59XG4uY29udGFpbmVyIHAge1xuICBjb2xvcjogaHNsKDAsIDM2JSwgNzAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZy1pbmxpbmU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjlyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgcCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWlubGluZTogMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xuICB9XG59XG4uaW5wdXQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbiN1c2VyRW1haWwge1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMwcmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAzNiUsIDcwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBoc2woMCwgMCUsIDEwMCUpLCBoc2woMCwgMTAwJSwgOTglKSk7XG59XG4jdXNlckVtYWlsOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBoc2woMCwgMzYlLCA3MCUpO1xufVxuI3VzZXJFbWFpbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4jdXNlckVtYWlsW3ZhbGlkPVwiXCJdIHtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDM2JSwgNzAlKTtcbn1cbiN1c2VyRW1haWxbaW52YWxpZD1cIlwiXSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgwLCA5MyUsIDY4JSk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICN1c2VyRW1haWwge1xuICAgIG1heC13aWR0aDogMzVyZW07XG4gIH1cbn1cbi5lcnJvci1pY29uIHtcbiAgbWF4LXdpZHRoOiAxLjVyZW07XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxLjJyZW07XG4gIHJpZ2h0OiAxMHJlbTtcbn1cbi5lcnJvci1pY29uW2Vycm9yPVwiXCJdIHtcbiAgbWF4LWhlaWdodDogMS41cmVtO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmVycm9yLWljb24ge1xuICAgIHJpZ2h0OiAxOHJlbTtcbiAgfVxufVxuLmljb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAzLjZyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGhzbCgwLCA4MCUsIDg2JSksIGhzbCgwLCA3NCUsIDc0JSkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5pY29uLWNvbnRhaW5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZGM0YzQ7XG4gIG1heC13aWR0aDogN3JlbTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCAycHggaHNsKDAsIDM2JSwgNzAlKTtcbn1cbi5pY29uLWNvbnRhaW5lcltzdWNjZXNzPVwiXCJdIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmljb24tY29udGFpbmVyIHtcbiAgICByaWdodDogOS42cmVtO1xuICAgIG1heC13aWR0aDogN3JlbTtcbiAgfVxufVxuLmFycm93IHtcbiAgbWF4LXdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xufVxuXG4uZXJyLW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTJyZW07XG4gIGxlZnQ6IDUuOHJlbTtcbiAgY29sb3I6IGhzbCgwLCA5MyUsIDY4JSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5lcnItbWVzc2FnZVtlcnJvcj1cIlwiXSB7XG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICBvdmVyZmxvdzogYXV0bztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFrQkE7OztFQUdJLHNCQUFBO0FBaEJKOztBQWtCQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFmSjs7QUFpQkE7RUFDSSxnQkFBQTtBQWRKOztBQWdCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFiSjs7QUFlQTtFQUNJLGVBdkJRO0VBd0JSLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQTVCTztBQWdCWDs7QUFjQTtFQUNJLGtCQUFBO0VBQ0Esd0VBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBWEo7O0FBYUE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSwwQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLG1EQUFBO0VBVk47QUFDRjtBQVdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVRKOztBQVdBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGtCQUFBO0VBUk47QUFDRjtBQVNBO0VBQ0ksY0FBQTtBQVBKO0FBUUk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFOUjs7QUFRQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGlCQUFBO0VBTE47QUFDRjtBQU9BO0VBQ0k7SUFDSSwyQkFBQTtJQUNBLHFCQUFBO0VBTE47QUFDRjtBQU1BO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUpKO0FBS0k7RUFDSSx1QkFuR1U7RUFvR1YsZ0JBQUE7RUFDQSxzQkFBQTtBQUhSO0FBSUk7O0VBRUksc0JBcEdXO0VBcUdYLGdCQUFBO0VBQ0Esc0JBQUE7QUFGUjs7QUFJQTtFQUNJO0lBQ0ksdUJBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7RUFETjtBQUNGO0FBR0E7RUFDSSx1QkFySGM7RUFzSGQsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQUFOO0FBQ0Y7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUE7RUFDSTtJQUNJLHVCQUFBO0VBQ047QUFDRjtBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3RUFBQTtBQUVKO0FBREk7RUFDSSx1QkExSlU7QUE2SmxCO0FBRkk7RUFDSSxhQUFBO0FBSVI7QUFISTtFQUNJLGtDQUFBO0FBS1I7QUFKSTtFQUNJLGtDQUFBO0VBQ0EsYUFBQTtBQU1SOztBQUpBO0VBQ0k7SUFDSSxnQkFBQTtFQU9OO0FBQ0Y7QUFOQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQVFKO0FBUEk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFTUjs7QUFQQTtFQUNJO0lBQ0ksWUFBQTtFQVVOO0FBQ0Y7QUFUQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQVdKO0FBVkk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtBQVlSO0FBWEk7RUFDSSxtQkFBQTtBQWFSOztBQVhBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsZUFBQTtFQWNOO0FBQ0Y7QUFaQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQWNKOztBQVhBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQTFOTztFQTJOUCxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFjSjtBQWJJO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0FBZVJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMzAwOzQwMDs2MDAmZGlzcGxheT1zd2FwJylcXG5cXG4vLyBQcmltYXJ5IENvbG9yc1xcbiRkZXNhdHVyYXRlZF9yZWQ6IGhzbCgwLCAzNiUsIDcwJSlcXG4kc29mdF9yZWQ6IGhzbCgwLCA5MyUsIDY4JSlcXG5cXG4vLyBOZXV0cmFsIENvbG9yc1xcbiRkYXJrX2dyYXlpc2hfcmVkOiBoc2woMCwgNiUsIDI0JSlcXG5cXG4vLyBHcmFkaWVudHNcXG4kZ3JhZF8xOiAxMzVkZWcsIGhzbCgwLCAwJSwgMTAwJSksIGhzbCgwLCAxMDAlLCA5OCUpXFxuJGdyYWRfMjogMTM1ZGVnLCBoc2woMCwgODAlLCA4NiUpLCBoc2woMCwgNzQlLCA3NCUpXFxuXFxuLy8gRm9udCBTdHVmZlxcbiRmb250X3NpemU6IDE2cHhcXG4kZm9udF9mYW06ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmXFxuXFxuLy8gUmVzZXRzXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxcblxcbipcXG4gICAgbWFyZ2luOiAwXFxuICAgIHBhZGRpbmc6IDBcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGhcXG5cXG5odG1sXFxuICAgIGZvbnQtc2l6ZTogNjIuNSVcXG5cXG5pbWdcXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgaGVpZ2h0OiBhdXRvXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyXFxuXFxuYm9keVxcbiAgICBmb250LXNpemU6ICRmb250X3NpemVcXG4gICAgbWluLWhlaWdodDogMTAwdmhcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgZm9udC1mYW1pbHk6ICRmb250X2ZhbVxcblxcbi5jb250YWluZXJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGhzbCgwLCAwJSwgMTAwJSksIGhzbCgwLCAxMDAlLCA5OCUpKVxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJsb2dvXFxcIiBcXFwiaW1nXFxcIiBcXFwiaW5mb1xcXCJcXG4gICAgbWF4LXdpZHRoOiAzNy41cmVtXFxuICAgIGdhcDogMi41cmVtXFxuICAgIHBhZGRpbmctYmxvY2s6IDNyZW0gNXJlbVxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXJcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmNvbnRhaW5lclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMzAwcHhcXG4gICAgICAgIG1heC1oZWlnaHQ6IDYxMHB4XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibG9nbyBpbWdcXFwiIFxcXCJpbmZvIGltZ1xcXCJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyLCAxZnJcXG4gICAgICAgIHBhZGRpbmctYmxvY2s6IDBcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnRcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2JnLXBhdHRlcm4tZGVza3RvcC5zdmcnKVxcblxcbi5sb2dvXFxuICAgIGdyaWQtYXJlYTogbG9nb1xcbiAgICBtYXgtd2lkdGg6IDEwcmVtXFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtXFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnRcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmxvZ29cXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW1cXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXJlbVxcblxcbi5oZXJvLWNvbnRhaW5lclxcbiAgICBncmlkLWFyZWE6IGltZ1xcbiAgICAmW2Vycm9yPScnXVxcbiAgICAgICAgbWF4LWhlaWdodDogMFxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAuaGVyb1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlXFxuICAgICAgICBtYXgtaGVpZ2h0OiA2MTBweFxcbiAgICAgICAgXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5sZWZ0LXNpZGVcXG4gICAgICAgIHBhZGRpbmctaW5saW5lOiAxNXJlbSAxMHJlbSAgICAgICAgXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJyZW1cXG4gICAgICAgIFxcbi5jb250YWluZXIgaDFcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICBtYXJnaW4tdG9wOiAycmVtXFxuICAgIGxldHRlci1zcGFjaW5nOiA5cHhcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbVxcbiAgICAuZmlyc3RXb3JkXFxuICAgICAgICBjb2xvcjogJGRlc2F0dXJhdGVkX3JlZFxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMFxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLS40cmVtXFxuICAgIHNwYW46bnRoLWNoaWxkKDIpLFxcbiAgICBzcGFuOmxhc3QtY2hpbGRcXG4gICAgICAgIGNvbG9yOiAkZGFya19ncmF5aXNoX3JlZFxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMFxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLS40cmVtXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5jb250YWluZXIgaDFcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0XFxuICAgICAgICBmb250LXNpemU6IDUuNXJlbVxcbiAgICAgICAgbWFyZ2luLXRvcDogNnJlbVxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVyZW1cXG5cXG4gICAgICAgIFxcbi5jb250YWluZXIgcFxcbiAgICBjb2xvcjogJGRlc2F0dXJhdGVkX3JlZFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG4gICAgZm9udC1zaXplOiAxLjRyZW1cXG4gICAgcGFkZGluZy1pbmxpbmU6IDNyZW1cXG4gICAgbGluZS1oZWlnaHQ6IDEuOXJlbVxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5jb250YWluZXIgcFxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxcbiAgICAgICAgcGFkZGluZy1pbmxpbmU6IDBcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtXFxuICAgICAgICBtYXgtd2lkdGg6IDM1cmVtXFxuICAgICAgICAvLyBwYWRkaW5nLXJpZ2h0OiAxMHJlbVxcblxcbi5pbnB1dC1jb250YWluZXJcXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5pbnB1dC1jb250YWluZXJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0XFxuXFxuI3VzZXJFbWFpbFxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW1cXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgbWF4LXdpZHRoOiAzMHJlbVxcbiAgICBoZWlnaHQ6IDRyZW1cXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGRlc2F0dXJhdGVkX3JlZFxcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtXFxuICAgIG1hcmdpbi10b3A6IDFyZW1cXG4gICAgZm9udC1zaXplOiAxLjJyZW1cXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgaHNsKDAsIDAlLCAxMDAlKSwgaHNsKDAsIDEwMCUsIDk4JSkpXFxuICAgICY6OnBsYWNlaG9sZGVyXFxuICAgICAgICBjb2xvcjogJGRlc2F0dXJhdGVkX3JlZFxcbiAgICAmOmZvY3VzXFxuICAgICAgICBvdXRsaW5lOiBub25lXFxuICAgICZbdmFsaWQ9JyddXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGVzYXR1cmF0ZWRfcmVkXFxuICAgICZbaW52YWxpZD0nJ11cXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzb2Z0X3JlZFxcbiAgICAgICAgb3V0bGluZTogbm9uZVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAjdXNlckVtYWlsXFxuICAgICAgICBtYXgtd2lkdGg6IDM1cmVtXFxuXFxuLmVycm9yLWljb25cXG4gICAgbWF4LXdpZHRoOiAxLjVyZW1cXG4gICAgbWF4LWhlaWdodDogMFxcbiAgICBvdmVyZmxvdzogaGlkZGVuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgICBib3R0b206IDEuMnJlbVxcbiAgICByaWdodDogMTByZW1cXG4gICAgJltlcnJvcj1cXFwiXFxcIl1cXG4gICAgICAgIG1heC1oZWlnaHQ6IDEuNXJlbVxcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmVycm9yLWljb25cXG4gICAgICAgIHJpZ2h0OiAxOHJlbVxcblxcbi5pY29uLWNvbnRhaW5lclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcXG4gICAgYm90dG9tOiAwXFxuICAgIHJpZ2h0OiAzLjZyZW1cXG4gICAgZGlzcGxheTogZmxleFxcbiAgICB3aWR0aDogMTAwJVxcbiAgICBtYXgtd2lkdGg6IDVyZW1cXG4gICAgaGVpZ2h0OiA0cmVtXFxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW1cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBoc2woMCwgODAlLCA4NiUpLCBoc2woMCwgNzQlLCA3NCUpKVxcbiAgICBjdXJzb3I6IHBvaW50ZXJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgJjpob3ZlclxcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkc29mdF9yZWQsIDIwJSlcXG4gICAgICAgIG1heC13aWR0aDogN3JlbVxcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCAycHggJGRlc2F0dXJhdGVkX3JlZFxcbiAgICAmW3N1Y2Nlc3M9JyddXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5pY29uLWNvbnRhaW5lclxcbiAgICAgICAgcmlnaHQ6IDkuNnJlbVxcbiAgICAgICAgbWF4LXdpZHRoOiA3cmVtXFxuXFxuXFxuLmFycm93XFxuICAgIG1heC13aWR0aDogMS41cmVtXFxuICAgIGhlaWdodDogMS41cmVtXFxuICAgIFxcblxcbi5lcnItbWVzc2FnZVxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcXG4gICAgYm90dG9tOiAtMnJlbVxcbiAgICBsZWZ0OiA1LjhyZW1cXG4gICAgY29sb3I6ICRzb2Z0X3JlZFxcbiAgICBmb250LXNpemU6IDFyZW1cXG4gICAgbWF4LWhlaWdodDogMFxcbiAgICBvdmVyZmxvdzogaGlkZGVuXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDBcXG4gICAgJltlcnJvcj0nJ11cXG4gICAgICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50XFxuICAgICAgICBvdmVyZmxvdzogYXV0b1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zYXNzJztcblxuY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uLWNvbnRhaW5lcicpO1xuY29uc3QgaW5wdXRFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSdlbWFpbCddXCIpO1xuY29uc3QgZXJyb3JJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLWljb24nKTtcbmNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnItbWVzc2FnZScpO1xuXG5jb25zdCBlbWFpbFJlZ2V4ID0gL15cXHcrQFxcdytcXC4oPzpjb218ZnJ8Y29cXC51a3xjb21cXC5icnxuZXQpL2dtaTtcblxud2luZG93Lm9ubG9hZCA9IHJlbW92ZURhdGEoKTtcblxuZnVuY3Rpb24gcmVtb3ZlRGF0YSgpIHtcbiAgICBpbnB1dEVtYWlsLnZhbHVlID0gJyc7XG59XG5cblxuXG5cbmlucHV0RW1haWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoaW5wdXRFbWFpbC52YWx1ZSkpIHtcbiAgICAgICAgaWYgKGlucHV0RW1haWwuaGFzQXR0cmlidXRlKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICBpbnB1dEVtYWlsLnJlbW92ZUF0dHJpYnV0ZSgndmFsaWQnKTtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgZXJyb3JJY29uLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICBpbnB1dEVtYWlsLnNldEF0dHJpYnV0ZSgnaW52YWxpZCcsICcnKTtcbiAgICAgICAgICAgIGlucHV0RW1haWwuZm9jdXMoKTtcbiAgICAgICAgICAgIGljb25Db250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdzdWNjZXNzJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgZXJyb3JJY29uLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICBpbnB1dEVtYWlsLnNldEF0dHJpYnV0ZSgnaW52YWxpZCcsICcnKTtcbiAgICAgICAgICAgIGlucHV0RW1haWwuZm9jdXMoKTtcbiAgICAgICAgICAgIGljb25Db250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdzdWNjZXNzJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaW5wdXRFbWFpbC5oYXNBdHRyaWJ1dGUoJ2ludmFsaWQnKSkge1xuICAgICAgICAgICAgaW5wdXRFbWFpbC5yZW1vdmVBdHRyaWJ1dGUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICBlcnJvckljb24ucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpO1xuICAgICAgICAgICAgaW5wdXRFbWFpbC5zZXRBdHRyaWJ1dGUoJ3ZhbGlkJywgJycpO1xuICAgICAgICAgICAgaWNvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N1Y2Nlc3MnLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpO1xuICAgICAgICAgICAgZXJyb3JJY29uLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKTtcbiAgICAgICAgICAgIGlucHV0RW1haWwuc2V0QXR0cmlidXRlKCd2YWxpZCcsICcnKTtcbiAgICAgICAgICAgIGljb25Db250YWluZXIuc2V0QXR0cmlidXRlKCdzdWNjZXNzJywgJycpO1xuICAgICAgICB9XG4gICAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=