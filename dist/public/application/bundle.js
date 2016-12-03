/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/public/application";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(2);
	const ReactDOM = __webpack_require__(3);
	const home_1 = __webpack_require__(4);
	const react_router_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	const list_1 = __webpack_require__(5);
	ReactDOM.render(React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, 
	    React.createElement(react_router_1.Route, {path: "/", component: home_1.Home}, 
	        React.createElement(react_router_1.Route, {path: "/list", component: list_1.List})
	    )
	), document.getElementById('root'));


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(2);
	const react_router_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	class Home extends React.Component {
	    render() {
	        return (React.createElement("div", null, 
	            React.createElement("div", null, "This is home page"), 
	            React.createElement("ul", null, 
	                React.createElement("li", null, 
	                    React.createElement(react_router_1.Link, {to: "/"}, "Home"), 
	                    React.createElement(react_router_1.Link, {to: "/list"}, "List"))
	            ), 
	            this.props.children));
	    }
	}
	exports.Home = Home;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(2);
	class List extends React.Component {
	    render() {
	        return (React.createElement("div", null, " This is list page  "));
	    }
	}
	exports.List = List;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map