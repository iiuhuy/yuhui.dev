/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/app/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _comment = __webpack_require__(/*! ./comment */ 1);\n\nvar _comment2 = _interopRequireDefault(_comment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar APP_ID = 'wPyQjUmvJiSYs1ovT7uGsNE0-gzGzoHsz';\nvar APP_KEY = 'j182JIXghHrneWAiBDaqmuhR';\nAV.init({\n  appId: APP_ID,\n  appKey: APP_KEY\n});\n\nnew _comment2.default({\n  permalink: $('#wgt-comment').data('permalink'),\n  dbComment: 'Comment'\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwL2luZGV4LmpzPzliZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4vY29tbWVudFwiO1xuXG52YXIgQVBQX0lEID0gJ3dQeVFqVW12SmlTWXMxb3ZUN3VHc05FMC1nekd6b0hzeic7XG52YXIgQVBQX0tFWSA9ICdqMTgySklYZ2hIcm5lV0FpQkRhcW11aFInO1xuQVYuaW5pdCh7XG4gIGFwcElkOiBBUFBfSUQsXG4gIGFwcEtleTogQVBQX0tFWVxufSk7XG5cbm5ldyBDb21tZW50KHtcblx0cGVybWFsaW5rOiAkKCcjd2d0LWNvbW1lbnQnKS5kYXRhKCdwZXJtYWxpbmsnKSxcblx0ZGJDb21tZW50OiAnQ29tbWVudCdcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFGQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./src/app/comment.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _comment = __webpack_require__(/*! ../css/comment.less */ 2);\n\nvar _comment2 = _interopRequireDefault(_comment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Comment = function () {\n\t_createClass(Comment, [{\n\t\tkey: 'checkSetup',\n\t\tvalue: function checkSetup() {\n\t\t\tvar config = [{\n\t\t\t\tkey: 'permalink',\n\t\t\t\tpass: false\n\t\t\t}];\n\n\t\t\tif (!this.props.permalink) {\n\t\t\t\tconsole.error('permalink required, which is the unique id for comments.');\n\t\t\t} else {\n\t\t\t\tconfig.find(function (item) {\n\t\t\t\t\treturn item.key == 'permalink';\n\t\t\t\t}).pass = true;\n\t\t\t}\n\n\t\t\treturn config.every(function (item) {\n\t\t\t\treturn item.pass == true;\n\t\t\t});\n\t\t}\n\t}]);\n\n\tfunction Comment(props) {\n\t\t_classCallCheck(this, Comment);\n\n\t\t// default props\n\t\tthis.props = Object.assign({\n\t\t\tdbComment: 'Comment'\n\t\t}, props);\n\n\t\tif (!this.checkSetup()) {\n\t\t\treturn;\n\t\t};\n\n\t\t//ç¨æ·ä¿¡æ¯\n\t\tthis.sessionAuthor = 'commentAuthor';\n\n\t\tthis.comments = {};\n\n\t\t// initialize\n\t\tthis.init(props);\n\t}\n\n\t_createClass(Comment, [{\n\t\tkey: 'formatData',\n\t\tvalue: function formatData(results) {\n\t\t\tvar formatSingle = function formatSingle(data) {\n\t\t\t\tvar id = data.id,\n\t\t\t\t    createdAt = data.createdAt;\n\n\n\t\t\t\tvar obj = _extends({\n\t\t\t\t\tid: id,\n\t\t\t\t\tcreatedAt: createdAt\n\t\t\t\t}, data.attributes);\n\n\t\t\t\treturn obj;\n\t\t\t};\n\n\t\t\t// éæ°ç»ç±»å\n\t\t\tif (!results.length) {\n\t\t\t\tif (results.id) {\n\t\t\t\t\treturn formatSingle(results);\n\t\t\t\t} else {\n\t\t\t\t\treturn [];\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// æ°ç»ç±»å\n\t\t\tvar tmp = [];\n\n\t\t\tresults.map(function (item) {\n\t\t\t\ttmp.push(formatSingle(item));\n\t\t\t});\n\n\t\t\treturn tmp;\n\t\t}\n\t}, {\n\t\tkey: 'init',\n\t\tvalue: function init(options) {\n\t\t\tvar _this = this;\n\n\t\t\tvar query = new AV.Query(this.props.dbComment);\n\n\t\t\tquery.equalTo('permalink', this.props.permalink);\n\t\t\t// query.descending('createdAt');\n\n\t\t\tquery.find().then(function (results) {\n\t\t\t\tvar list = _this.formatData(results);\n\n\t\t\t\t// cache\n\t\t\t\tlist.map(function (c) {\n\t\t\t\t\t_this.comments[c.id] = c;\n\t\t\t\t});\n\n\t\t\t\t_this.render(list);\n\t\t\t}, function (error) {\n\t\t\t\tthis.errorDeal(error);\n\t\t\t});\n\n\t\t\t// åå§åauthor\n\t\t\tvar recordAuthor = sessionStorage.getItem(this.sessionAuthor);\n\t\t\tif (recordAuthor) {\n\t\t\t\t$('.comment__contentAuthor').val(recordAuthor);\n\t\t\t}\n\n\t\t\tthis.eventHandler();\n\t\t}\n\t}, {\n\t\tkey: 'eventHandler',\n\t\tvalue: function eventHandler() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar self = this;\n\n\t\t\t$('input').on('keyup', function () {\n\t\t\t\tvar target = $(this);\n\t\t\t\tvar maxLength = +target.attr('max-length');\n\n\t\t\t\tif (this.value.length >= maxLength) {\n\t\t\t\t\ttarget.val(this.value.trim().substring(0, maxLength));\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tvar commentForm = $('#comment-form');\n\n\t\t\t// è¯è®ºæäº¤\n\t\t\tcommentForm.on('click', '#comment-box-submit', function (e) {\n\t\t\t\te.preventDefault();\n\n\t\t\t\tvar submitBtn = $(e.target);\n\n\t\t\t\tif (submitBtn.hasClass('disabled')) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tvar params = commentForm.serializeArray();\n\n\t\t\t\t_this2.lockSubmit(true);\n\n\t\t\t\tif (_this2.validate(params)) {\n\t\t\t\t\t// è®°å½å½åç¨æ·ä¿¡æ¯\n\t\t\t\t\tvar currentAuthor = $('.comment__contentAuthor').val();\n\t\t\t\t\tvar recordAuthor = sessionStorage.getItem(_this2.sessionAuthor) || '';\n\n\t\t\t\t\tif (currentAuthor != recordAuthor) {\n\t\t\t\t\t\tsessionStorage.setItem(_this2.sessionAuthor, currentAuthor);\n\t\t\t\t\t}\n\n\t\t\t\t\t// æäº¤\n\t\t\t\t\t_this2.submitParams(params, function (data) {\n\t\t\t\t\t\t_this2.saveToDB(_this2.props.dbComment, data, function (comment) {\n\t\t\t\t\t\t\t$('#comment-list').append(_this2.commentSingle(_this2.formatData(comment), 'comment__item'));\n\n\t\t\t\t\t\t\t// reset content\n\t\t\t\t\t\t\t_this2.resetPlaceholder('content');\n\n\t\t\t\t\t\t\t_this2.lockSubmit(false);\n\t\t\t\t\t\t}, function (error) {\n\t\t\t\t\t\t\t_this2.errorDeal(error);\n\t\t\t\t\t\t\t_this2.lockSubmit(false);\n\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\t_this2.displayErrorMsg('#comment-form-footer', 'æµç§°åè¯è®ºå¨ä¸èµ·ææ¯æå¥½ç ^_^');\n\t\t\t\t\t_this2.lockSubmit(false);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t// åå¤\n\t\t\t$('#comment-list').on('click', '.btn-reply', function (e) {\n\t\t\t\te.preventDefault();\n\n\t\t\t\tvar element = $(this);\n\t\t\t\tvar displayContent = element.data('content');\n\n\t\t\t\t// æ»å°åå¤æ¡\n\t\t\t\twindow.location.href = \"#comment-form\";\n\n\t\t\t\t// æå¥åå¤åå®¹\n\t\t\t\tif ($('.comment__replyComment').length) {\n\t\t\t\t\t$('.comment__replyComment').find('pre').html(displayContent);\n\t\t\t\t} else {\n\t\t\t\t\t$('<div class=\"comment--clearfix comment--mb10 comment--fontsizeMeta comment__replyComment\"/>').html('\\n\\t\\t\\t\\t\\t<span class=\"comment--grid-r comment__replyCancel\">x</span>\\n\\t\\t\\t\\t\\t<pre>' + displayContent + '</pre>\\n\\t\\t\\t\\t').insertBefore(commentForm);\n\t\t\t\t}\n\n\t\t\t\t// æ´æ°parentId\n\t\t\t\tcommentForm.find('[name=\"parentId\"]').val(element.attr('data-id'));\n\t\t\t});\n\n\t\t\t// åå¤åæ¶\n\t\t\t$('#wgt-comment').on('click', '.comment__replyCancel', function () {\n\t\t\t\tvar replyComment = $(this).parent('.comment__replyComment');\n\n\t\t\t\t// æ´æ°parentId\n\t\t\t\tcommentForm.find('[name=\"parentId\"]').val('');\n\t\t\t\treplyComment.remove();\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'validate',\n\t\tvalue: function validate(params) {\n\t\t\tvar result = false;\n\n\t\t\t// not empty\n\t\t\tresult = params.every(function (item) {\n\t\t\t\tvar element = $('[name=' + item.name + ']');\n\t\t\t\tvar maxLength = +element.attr('max-length');\n\t\t\t\tvar isRequired = element.attr('required');\n\n\t\t\t\tswitch (item.name) {\n\t\t\t\t\tcase 'author':\n\t\t\t\t\tcase 'content':\n\t\t\t\t\t\treturn isRequired && !!item.value && item.value.length < maxLength;\n\t\t\t\t\tdefault:\n\t\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\treturn result;\n\t\t}\n\t}, {\n\t\tkey: 'errorDeal',\n\t\tvalue: function errorDeal(error) {\n\t\t\tconsole.error(error);\n\n\t\t\tif (error && error.code && error.error) {\n\t\t\t\talert('\\u54A6\\uFF0C\\u8BF7\\u6C42\\u51FA\\u9519\\u4E86\\uD83D\\uDE31\\uD83D\\uDE31\\uD83D\\uDE31\\u9EBB\\u70E6\\u622A\\u56FE\\u8054\\u7CFB\\u7BA1\\u7406\\u5458\\uFF0C\\u9519\\u8BEF\\u4FE1\\u606F\\u4E3A -> code:' + error.code + ', error:' + error.error + '\\u3002');\n\t\t\t} else {\n\t\t\t\talert('\\u54A6\\uFF0C\\u8BF7\\u6C42\\u51FA\\u9519\\u4E86\\uFF0C\\u9EBB\\u70E6\\u8054\\u7CFB\\u7BA1\\u7406\\u5458\\uD83D\\uDE31\\uD83D\\uDE31\\uD83D\\uDE31');\n\t\t\t}\n\n\t\t\tthis.lockSubmit(false);\n\t\t}\n\t}, {\n\t\tkey: 'saveToDB',\n\t\tvalue: function saveToDB(db, data, onSuccess) {\n\t\t\t// å£°æç±»å\n\t\t\tvar commentObject = AV.Object.extend(db);\n\n\t\t\t// æ°å»ºå¯¹è±¡\n\t\t\tvar commentItem = new commentObject();\n\n\t\t\t// è®¾ç½®æ°æ®\n\t\t\tcommentItem.set(data);\n\n\t\t\t// åå¤ï¼æ·»å pointer\n\t\t\tif (data.parentId) {\n\t\t\t\tvar parentComment = AV.Object.createWithoutData('Comment', data.parentId);\n\t\t\t\tcommentItem.set('parentComment', parentComment);\n\t\t\t}\n\n\t\t\tcommentItem.save().then(function (data) {\n\t\t\t\tonSuccess(data);\n\t\t\t}, function (error) {\n\t\t\t\tthis.errorDeal(error);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'submitParams',\n\t\tvalue: function submitParams(params, callback) {\n\t\t\tvar data = {\n\t\t\t\tpermalink: this.props.permalink\n\t\t\t};\n\n\t\t\tparams.map(function (item) {\n\t\t\t\tdata[item.name] = item.value;\n\t\t\t});\n\n\t\t\tcallback(data);\n\n\t\t\t/*var akismetPromise = new Promise((resolve, reject) => {\n   \t$.post('/api/akismet', data, function(res){\n   \t\tif(res.status == 'success'){\n   \t\t\tresolve(res.data);\n   \t\t}else{\n   \t\t\treject(res.data);\n   \t\t}\n   \t});\n   });\n   \takismetPromise.then((res) => {\n   \tlet { referrer, isSpam, user_ip, user_agent } = res;\n   \t\tdata = Object.assign(data, {\n   \t\treferrer,\n   \t\tisSpam,\n   \t\tip: user_ip,\n   \t\tuserAgent: user_agent\n   \t});\n   })\n   .then(() => {\n   \t// å£°æç±»å\n   \tlet commentObject = AV.Object.extend(this.props.dbComment);\n   \t\n   \t// æ°å»ºå¯¹è±¡\n   \tvar commentItem = new commentObject();\n   \t\n   \t// è®¾ç½®æ°æ®\n   \tcommentItem.set(data);\n   \t\n   \tcommentItem.save().then((data) => {\n   \t\t// reset content\n   \t\tthis.resetPlaceholder('content');\n   \t\t\n   \t\t// render list\n   \t\tthis.list = [this.formatData(data)[0], ...this.list];\n   \t\tthis.render(this.list);\n   \t}, function (error) {\n   \t\tconsole.error(error);\n   \t});\n   })\n   .catch((err) => {\n   \tconsole.log(err);\n   });*/\n\t\t}\n\t}, {\n\t\tkey: 'lockSubmit',\n\t\tvalue: function lockSubmit(isToLock) {\n\t\t\tvar form = $('#comment-form');\n\t\t\tvar submitBtn = $('#comment-box-submit');\n\n\t\t\tif (isToLock) {\n\t\t\t\tform.find('input').each(function () {\n\t\t\t\t\t$(this).attr('disabled', 'disabled');\n\t\t\t\t});\n\n\t\t\t\tsubmitBtn.addClass('disabled');\n\t\t\t} else {\n\t\t\t\tform.find('input').each(function () {\n\t\t\t\t\t$(this).removeAttr('disabled');\n\t\t\t\t\tsubmitBtn.removeClass('disabled');\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'resetPlaceholder',\n\t\tvalue: function resetPlaceholder(type) {\n\t\t\tswitch (type) {\n\t\t\t\tcase 'author':\n\t\t\t\t\t$('.comment__contentAuthor').val('');\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'content':\n\t\t\t\t\t$('.comment__contentInput').val('');\n\t\t\t\t\tbreak;\n\t\t\t};\n\n\t\t\t// èªå¨ç£¨æåå¤åå®¹\n\t\t\tvar replyCancel = $('.comment__replyCancel');\n\t\t\tif (replyCancel.length) {\n\t\t\t\treplyCancel.click();\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'commentSingle',\n\t\tvalue: function commentSingle(item, className) {\n\t\t\tvar parentContent = '';\n\t\t\tvar pId = item.parentId;\n\n\t\t\tif (pId) {\n\t\t\t\tvar c = this.comments[pId];\n\t\t\t\tvar pContent = '';\n\n\t\t\t\tif (c && c.content) {\n\t\t\t\t\tpContent = c.content;\n\n\t\t\t\t\tif (pContent.length > 20) {\n\t\t\t\t\t\tpContent = pContent.substring(0, 20) + '...';\n\t\t\t\t\t}\n\n\t\t\t\t\tparentContent = '\\n\\t\\t\\t\\t\\t<blockquote class=\"comment--fontsizeMeta comment__quote\">\\n\\t\\t\\t\\t\\t\\t<p>' + pContent + '\\n\\t\\t\\t\\t\\t\\t\\t<span class=\"comment--colorAccent\">' + c.author + '</span>\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</blockquote>\\n\\t\\t\\t\\t';\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn '\\n\\t\\t\\t<div class=\"' + className + '\" id=\"comment-' + item.id + '\">\\n\\t\\t\\t\\t<article>\\n\\t\\t\\t\\t\\t<header class=\"comment__header\">\\n\\t\\t\\t\\t\\t\\t<span class=\"comment--colorAccent comment--fontsizeMeta comment__item--author\">' + item.author + ' </span>\\n\\t\\t\\t\\t\\t\\t<time class=\"comment--colorMeta comment--fontsizeMeta comment__item--time\">' + moment(item.createdAt).format('MM-DD-YYYY hh:mm:ss') + '</time>\\n\\t\\t\\t\\t\\t</header>\\n\\t\\t\\t\\t\\t<section class=\"comment--mt10\">\\n\\t\\t\\t\\t\\t\\t' + parentContent + '\\n\\t\\t\\t\\t\\t\\t<pre class=\"comment__content\">' + item.content + '</pre>\\n\\t\\t\\t\\t\\t</section>\\n\\t\\t\\t\\t\\t<footer class=\"comment--tRight\">\\n\\t\\t\\t\\t\\t\\t<a href=\"#\" class=\"comment--fontsizeMeta comment--colorAccent btn-reply\" data-id=\"' + item.id + '\" data-content=\"' + item.content.substring(0, 20) + '\">\\u56DE\\u590D</a>\\n\\t\\t\\t\\t\\t</footer>\\n\\t\\t\\t\\t</article>\\n\\t\\t\\t</div>\\n\\t\\t';\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render(data) {\n\t\t\tvar _this3 = this;\n\n\t\t\tvar tpl = '';\n\n\t\t\tif (!data.length) {\n\t\t\t\ttpl = 'å¿«æ¥æ¢å æ²åå§~';\n\t\t\t\t$('#comment-list').html(tpl);\n\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tObject.keys(data).map(function (key) {\n\t\t\t\tvar item = data[key];\n\n\t\t\t\tif (!item.author || !item.content || !item.display) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tvar comment = _this3.commentSingle(item, 'comment__item');\n\n\t\t\t\ttpl += '\\n\\t\\t\\t\\t' + comment + '\\n\\t\\t\\t';\n\t\t\t});\n\n\t\t\t$('#comment-list').html(tpl);\n\t\t}\n\t}, {\n\t\tkey: 'displayErrorMsg',\n\t\tvalue: function displayErrorMsg(containerId, msg) {\n\t\t\tvar errorTip = $('#comment-form-error');\n\n\t\t\tif (!errorTip.length) {\n\t\t\t\terrorTip = $('<p/>').attr({\n\t\t\t\t\tclass: 'comment--grid comment--fontsizeMeta comment--colorError',\n\t\t\t\t\tid: 'comment-form-error'\n\t\t\t\t}).html(msg);\n\n\t\t\t\t$(containerId).append(errorTip);\n\t\t\t} else {\n\t\t\t\terrorTip.html(msg).show();\n\t\t\t}\n\n\t\t\tsetTimeout(function () {\n\t\t\t\terrorTip.hide();\n\t\t\t}, 2000);\n\t\t}\n\t}]);\n\n\treturn Comment;\n}();\n\nexports.default = Comment;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwL2NvbW1lbnQuanM/YjgxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Nzcy9jb21tZW50Lmxlc3MnO1xuXG5jbGFzcyBDb21tZW50IHtcblx0Y2hlY2tTZXR1cCgpIHtcblx0XHRsZXQgY29uZmlnID0gW3tcblx0XHRcdGtleTogJ3Blcm1hbGluaycsXG5cdFx0XHRwYXNzOiBmYWxzZVxuXHRcdH1dO1xuXG5cdFx0aWYoIXRoaXMucHJvcHMucGVybWFsaW5rKXtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3Blcm1hbGluayByZXF1aXJlZCwgd2hpY2ggaXMgdGhlIHVuaXF1ZSBpZCBmb3IgY29tbWVudHMuJyk7XG5cdFx0fWVsc2V7XG5cdFx0XHRjb25maWcuZmluZChpdGVtID0+IGl0ZW0ua2V5ID09ICdwZXJtYWxpbmsnKS5wYXNzID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29uZmlnLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5wYXNzID09IHRydWUpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0Ly8gZGVmYXVsdCBwcm9wc1xuXHRcdHRoaXMucHJvcHMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdGRiQ29tbWVudDogJ0NvbW1lbnQnXG5cdFx0fSwgcHJvcHMpO1xuXG5cdFx0aWYoIXRoaXMuY2hlY2tTZXR1cCgpKXtcblx0XHRcdHJldHVybjtcblx0XHR9O1xuXG5cdFx0Ly/nlKjmiLfkv6Hmga9cblx0XHR0aGlzLnNlc3Npb25BdXRob3IgPSAnY29tbWVudEF1dGhvcic7XG5cblx0XHR0aGlzLmNvbW1lbnRzID0ge307XG5cblx0XHQvLyBpbml0aWFsaXplXG5cdFx0dGhpcy5pbml0KHByb3BzKTtcblx0fVxuXHRmb3JtYXREYXRhKHJlc3VsdHMpIHtcblx0XHRjb25zdCBmb3JtYXRTaW5nbGUgPSAoZGF0YSkgPT4ge1xuXHRcdFx0bGV0IHsgaWQsIGNyZWF0ZWRBdCB9ID0gZGF0YTtcblxuXHRcdFx0bGV0IG9iaiA9IHtcblx0XHRcdFx0aWQsXG5cdFx0XHRcdGNyZWF0ZWRBdCxcblx0XHRcdFx0Li4uZGF0YS5hdHRyaWJ1dGVzXG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH07XG5cblx0XHQvLyDpnZ7mlbDnu4Tnsbvlnotcblx0XHRpZighcmVzdWx0cy5sZW5ndGgpe1xuXHRcdFx0aWYocmVzdWx0cy5pZCl7XG5cdFx0XHRcdHJldHVybiBmb3JtYXRTaW5nbGUocmVzdWx0cyk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIOaVsOe7hOexu+Wei1xuXHRcdGxldCB0bXAgPSBbXTtcblxuXHRcdHJlc3VsdHMubWFwKGl0ZW0gPT4ge1xuXHRcdFx0dG1wLnB1c2goZm9ybWF0U2luZ2xlKGl0ZW0pKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiB0bXA7XG5cdH1cblx0aW5pdChvcHRpb25zKSB7XG5cdFx0dmFyIHF1ZXJ5ID0gbmV3IEFWLlF1ZXJ5KHRoaXMucHJvcHMuZGJDb21tZW50KTtcblxuXHRcdHF1ZXJ5LmVxdWFsVG8oJ3Blcm1hbGluaycsIHRoaXMucHJvcHMucGVybWFsaW5rKTtcblx0XHQvLyBxdWVyeS5kZXNjZW5kaW5nKCdjcmVhdGVkQXQnKTtcblxuXHRcdHF1ZXJ5LmZpbmQoKS50aGVuKHJlc3VsdHMgPT4ge1xuXHRcdFx0Y29uc3QgbGlzdCA9IHRoaXMuZm9ybWF0RGF0YShyZXN1bHRzKTtcblxuXHRcdFx0Ly8gY2FjaGVcblx0XHRcdGxpc3QubWFwKGMgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbW1lbnRzW2MuaWRdID0gYztcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnJlbmRlcihsaXN0KTtcblx0XHR9LCBmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdHRoaXMuZXJyb3JEZWFsKGVycm9yKTtcblx0XHR9KTtcblxuXHRcdC8vIOWIneWni+WMlmF1dGhvclxuXHRcdGNvbnN0IHJlY29yZEF1dGhvciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5zZXNzaW9uQXV0aG9yKTtcblx0XHRpZihyZWNvcmRBdXRob3Ipe1xuXHRcdFx0JCgnLmNvbW1lbnRfX2NvbnRlbnRBdXRob3InKS52YWwocmVjb3JkQXV0aG9yKTtcblx0XHR9XG5cblx0XHR0aGlzLmV2ZW50SGFuZGxlcigpO1xuXHR9XG5cdGV2ZW50SGFuZGxlcigpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblxuXHRcdCQoJ2lucHV0Jykub24oJ2tleXVwJywgZnVuY3Rpb24oKXtcblx0XHRcdGNvbnN0IHRhcmdldCA9ICQodGhpcyk7XG5cdFx0XHRjb25zdCBtYXhMZW5ndGggPSArdGFyZ2V0LmF0dHIoJ21heC1sZW5ndGgnKTtcblxuXHRcdFx0aWYodGhpcy52YWx1ZS5sZW5ndGggPj0gbWF4TGVuZ3RoKXtcblx0XHRcdFx0dGFyZ2V0LnZhbCh0aGlzLnZhbHVlLnRyaW0oKS5zdWJzdHJpbmcoMCwgbWF4TGVuZ3RoKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRjb25zdCBjb21tZW50Rm9ybSA9ICQoJyNjb21tZW50LWZvcm0nKTtcblxuXHRcdC8vIOivhOiuuuaPkOS6pFxuXHRcdGNvbW1lbnRGb3JtLm9uKCdjbGljaycsICcjY29tbWVudC1ib3gtc3VibWl0JywgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0Y29uc3Qgc3VibWl0QnRuID0gJChlLnRhcmdldCk7XG5cblx0XHRcdGlmKHN1Ym1pdEJ0bi5oYXNDbGFzcygnZGlzYWJsZWQnKSl7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyYW1zID0gY29tbWVudEZvcm0uc2VyaWFsaXplQXJyYXkoKTtcblxuXHRcdFx0dGhpcy5sb2NrU3VibWl0KHRydWUpO1xuXG5cdFx0XHRpZih0aGlzLnZhbGlkYXRlKHBhcmFtcykpe1xuXHRcdFx0XHQvLyDorrDlvZXlvZPliY3nlKjmiLfkv6Hmga9cblx0XHRcdFx0Y29uc3QgY3VycmVudEF1dGhvciA9ICQoJy5jb21tZW50X19jb250ZW50QXV0aG9yJykudmFsKCk7XG5cdFx0XHRcdGNvbnN0IHJlY29yZEF1dGhvciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5zZXNzaW9uQXV0aG9yKSB8fCAnJztcblxuXHRcdFx0XHRpZihjdXJyZW50QXV0aG9yICE9IHJlY29yZEF1dGhvcil7XG5cdFx0XHRcdFx0c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnNlc3Npb25BdXRob3IsIGN1cnJlbnRBdXRob3IpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8g5o+Q5LqkXG5cdFx0XHRcdHRoaXMuc3VibWl0UGFyYW1zKHBhcmFtcywgKGRhdGEpID0+IHtcblx0XHRcdFx0XHR0aGlzLnNhdmVUb0RCKHRoaXMucHJvcHMuZGJDb21tZW50LCBkYXRhLCAoY29tbWVudCkgPT4ge1xuXHRcdFx0XHRcdFx0JCgnI2NvbW1lbnQtbGlzdCcpLmFwcGVuZCh0aGlzLmNvbW1lbnRTaW5nbGUodGhpcy5mb3JtYXREYXRhKGNvbW1lbnQpLCAnY29tbWVudF9faXRlbScpKTtcblxuXHRcdFx0XHRcdFx0Ly8gcmVzZXQgY29udGVudFxuXHRcdFx0XHRcdFx0dGhpcy5yZXNldFBsYWNlaG9sZGVyKCdjb250ZW50Jyk7XG5cblx0XHRcdFx0XHRcdHRoaXMubG9ja1N1Ym1pdChmYWxzZSk7XG5cdFx0XHRcdFx0fSwgKGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmVycm9yRGVhbChlcnJvcik7XG5cdFx0XHRcdFx0XHR0aGlzLmxvY2tTdWJtaXQoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlFcnJvck1zZygnI2NvbW1lbnQtZm9ybS1mb290ZXInLCAn5pi156ew5ZKM6K+E6K665Zyo5LiA6LW35omN5piv5pyA5aW955qEIF5fXicpO1xuXHRcdFx0XHR0aGlzLmxvY2tTdWJtaXQoZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8g5Zue5aSNXG5cdFx0JCgnI2NvbW1lbnQtbGlzdCcpLm9uKCdjbGljaycsICcuYnRuLXJlcGx5JywgZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRjb25zdCBlbGVtZW50ID0gJCh0aGlzKTtcblx0XHRcdGNvbnN0IGRpc3BsYXlDb250ZW50ID0gZWxlbWVudC5kYXRhKCdjb250ZW50Jyk7XG5cblx0XHRcdC8vIOa7muWIsOWbnuWkjeahhlxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIiNjb21tZW50LWZvcm1cIjtcblxuXHRcdFx0Ly8g5o+S5YWl5Zue5aSN5YaF5a65XG5cdFx0XHRpZigkKCcuY29tbWVudF9fcmVwbHlDb21tZW50JykubGVuZ3RoKXtcblx0XHRcdFx0JCgnLmNvbW1lbnRfX3JlcGx5Q29tbWVudCcpLmZpbmQoJ3ByZScpLmh0bWwoZGlzcGxheUNvbnRlbnQpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdCQoJzxkaXYgY2xhc3M9XCJjb21tZW50LS1jbGVhcmZpeCBjb21tZW50LS1tYjEwIGNvbW1lbnQtLWZvbnRzaXplTWV0YSBjb21tZW50X19yZXBseUNvbW1lbnRcIi8+JykuaHRtbChgXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjb21tZW50LS1ncmlkLXIgY29tbWVudF9fcmVwbHlDYW5jZWxcIj54PC9zcGFuPlxuXHRcdFx0XHRcdDxwcmU+JHsgZGlzcGxheUNvbnRlbnQgfTwvcHJlPlxuXHRcdFx0XHRgKS5pbnNlcnRCZWZvcmUoY29tbWVudEZvcm0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyDmm7TmlrBwYXJlbnRJZFxuXHRcdFx0Y29tbWVudEZvcm0uZmluZCgnW25hbWU9XCJwYXJlbnRJZFwiXScpLnZhbChlbGVtZW50LmF0dHIoJ2RhdGEtaWQnKSk7XG5cdFx0fSk7XG5cblx0XHQvLyDlm57lpI3lj5bmtohcblx0XHQkKCcjd2d0LWNvbW1lbnQnKS5vbignY2xpY2snLCAnLmNvbW1lbnRfX3JlcGx5Q2FuY2VsJywgZnVuY3Rpb24oKXtcblx0XHRcdGNvbnN0IHJlcGx5Q29tbWVudCA9ICQodGhpcykucGFyZW50KCcuY29tbWVudF9fcmVwbHlDb21tZW50Jyk7XG5cblx0XHRcdC8vIOabtOaWsHBhcmVudElkXG5cdFx0XHRjb21tZW50Rm9ybS5maW5kKCdbbmFtZT1cInBhcmVudElkXCJdJykudmFsKCcnKTtcblx0XHRcdHJlcGx5Q29tbWVudC5yZW1vdmUoKTtcblx0XHR9KTtcblx0fVxuXHR2YWxpZGF0ZShwYXJhbXMpIHtcblx0XHRsZXQgcmVzdWx0ID0gZmFsc2U7XG5cblx0XHQvLyBub3QgZW1wdHlcblx0XHRyZXN1bHQgPSBwYXJhbXMuZXZlcnkoaXRlbSA9PiB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gJCgnW25hbWU9JyArIGl0ZW0ubmFtZSArICddJyk7XG5cdFx0XHRjb25zdCBtYXhMZW5ndGggPSArZWxlbWVudC5hdHRyKCdtYXgtbGVuZ3RoJyk7XG5cdFx0XHRjb25zdCBpc1JlcXVpcmVkID0gZWxlbWVudC5hdHRyKCdyZXF1aXJlZCcpO1xuXG5cdFx0XHRzd2l0Y2goaXRlbS5uYW1lKXtcblx0XHRcdFx0Y2FzZSAnYXV0aG9yJzpcblx0XHRcdFx0Y2FzZSAnY29udGVudCc6XG5cdFx0XHRcdFx0cmV0dXJuICgoaXNSZXF1aXJlZCAmJiAhIWl0ZW0udmFsdWUpICYmIChpdGVtLnZhbHVlLmxlbmd0aCA8IG1heExlbmd0aCkpO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRlcnJvckRlYWwoZXJyb3Ipe1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG5cdFx0aWYoZXJyb3IgJiYgZXJyb3IuY29kZSAmJiBlcnJvci5lcnJvcil7XG5cdFx0XHRhbGVydChg5ZKm77yM6K+35rGC5Ye66ZSZ5LqG8J+YsfCfmLHwn5ix6bq754Om5oiq5Zu+6IGU57O7566h55CG5ZGY77yM6ZSZ6K+v5L+h5oGv5Li6IC0+IGNvZGU6JHtlcnJvci5jb2RlfSwgZXJyb3I6JHtlcnJvci5lcnJvcn3jgIJgKTtcblx0XHR9ZWxzZXtcblx0XHRcdGFsZXJ0KGDlkqbvvIzor7fmsYLlh7rplJnkuobvvIzpurvng6bogZTns7vnrqHnkIblkZjwn5ix8J+YsfCfmLFgKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5sb2NrU3VibWl0KGZhbHNlKTtcblx0fVxuXHRzYXZlVG9EQihkYiwgZGF0YSwgb25TdWNjZXNzKSB7XG5cdFx0Ly8g5aOw5piO57G75Z6LXG5cdFx0bGV0IGNvbW1lbnRPYmplY3QgPSBBVi5PYmplY3QuZXh0ZW5kKGRiKTtcblx0XHRcblx0XHQvLyDmlrDlu7rlr7nosaFcblx0XHR2YXIgY29tbWVudEl0ZW0gPSBuZXcgY29tbWVudE9iamVjdCgpO1xuXHRcdFxuXHRcdC8vIOiuvue9ruaVsOaNrlxuXHRcdGNvbW1lbnRJdGVtLnNldChkYXRhKTtcblxuXHRcdC8vIOWbnuWkje+8jOa3u+WKoHBvaW50ZXJcblx0XHRpZihkYXRhLnBhcmVudElkKXtcblx0XHRcdHZhciBwYXJlbnRDb21tZW50ID0gQVYuT2JqZWN0LmNyZWF0ZVdpdGhvdXREYXRhKCdDb21tZW50JywgZGF0YS5wYXJlbnRJZCk7XG4gIFx0XHRcdGNvbW1lbnRJdGVtLnNldCgncGFyZW50Q29tbWVudCcsIHBhcmVudENvbW1lbnQpO1xuXHRcdH1cblx0XHRcblx0XHRjb21tZW50SXRlbS5zYXZlKCkudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0b25TdWNjZXNzKGRhdGEpO1xuXHRcdH0sIGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0dGhpcy5lcnJvckRlYWwoZXJyb3IpO1xuXHRcdH0pO1xuXHR9XG5cdHN1Ym1pdFBhcmFtcyhwYXJhbXMsIGNhbGxiYWNrKSB7XG5cdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRwZXJtYWxpbms6IHRoaXMucHJvcHMucGVybWFsaW5rXG5cdFx0fTtcblxuXHRcdHBhcmFtcy5tYXAoaXRlbSA9PiB7XG5cdFx0XHRkYXRhW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuXHRcdH0pO1xuXG5cdFx0Y2FsbGJhY2soZGF0YSk7XG5cblx0XHQvKnZhciBha2lzbWV0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdCQucG9zdCgnL2FwaS9ha2lzbWV0JywgZGF0YSwgZnVuY3Rpb24ocmVzKXtcblx0XHRcdFx0aWYocmVzLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuXHRcdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRyZWplY3QocmVzLmRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdGFraXNtZXRQcm9taXNlLnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0bGV0IHsgcmVmZXJyZXIsIGlzU3BhbSwgdXNlcl9pcCwgdXNlcl9hZ2VudCB9ID0gcmVzO1xuXG5cdFx0XHRkYXRhID0gT2JqZWN0LmFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdHJlZmVycmVyLFxuXHRcdFx0XHRpc1NwYW0sXG5cdFx0XHRcdGlwOiB1c2VyX2lwLFxuXHRcdFx0XHR1c2VyQWdlbnQ6IHVzZXJfYWdlbnRcblx0XHRcdH0pO1xuXHRcdH0pXG5cdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0Ly8g5aOw5piO57G75Z6LXG5cdFx0XHRsZXQgY29tbWVudE9iamVjdCA9IEFWLk9iamVjdC5leHRlbmQodGhpcy5wcm9wcy5kYkNvbW1lbnQpO1xuXHRcdFx0XG5cdFx0XHQvLyDmlrDlu7rlr7nosaFcblx0XHRcdHZhciBjb21tZW50SXRlbSA9IG5ldyBjb21tZW50T2JqZWN0KCk7XG5cdFx0XHRcblx0XHRcdC8vIOiuvue9ruaVsOaNrlxuXHRcdFx0Y29tbWVudEl0ZW0uc2V0KGRhdGEpO1xuXHRcdFx0XG5cdFx0XHRjb21tZW50SXRlbS5zYXZlKCkudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHQvLyByZXNldCBjb250ZW50XG5cdFx0XHRcdHRoaXMucmVzZXRQbGFjZWhvbGRlcignY29udGVudCcpO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8gcmVuZGVyIGxpc3Rcblx0XHRcdFx0dGhpcy5saXN0ID0gW3RoaXMuZm9ybWF0RGF0YShkYXRhKVswXSwgLi4udGhpcy5saXN0XTtcblx0XHRcdFx0dGhpcy5yZW5kZXIodGhpcy5saXN0KTtcblx0XHRcdH0sIGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRcdH0pO1xuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0fSk7Ki9cblx0fVxuXHRsb2NrU3VibWl0KGlzVG9Mb2NrKXtcblx0XHRjb25zdCBmb3JtID0gJCgnI2NvbW1lbnQtZm9ybScpO1xuXHRcdGNvbnN0IHN1Ym1pdEJ0biA9ICQoJyNjb21tZW50LWJveC1zdWJtaXQnKTtcblxuXHRcdGlmKGlzVG9Mb2NrKXtcblx0XHRcdGZvcm0uZmluZCgnaW5wdXQnKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdCQodGhpcykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRzdWJtaXRCdG4uYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0fWVsc2V7XG5cdFx0XHRmb3JtLmZpbmQoJ2lucHV0JykuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdHN1Ym1pdEJ0bi5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRyZXNldFBsYWNlaG9sZGVyKHR5cGUpIHtcblx0XHRzd2l0Y2godHlwZSkge1xuXHRcdFx0Y2FzZSAnYXV0aG9yJzpcblx0XHRcdFx0JCgnLmNvbW1lbnRfX2NvbnRlbnRBdXRob3InKS52YWwoJycpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NvbnRlbnQnOlxuXHRcdFx0XHQkKCcuY29tbWVudF9fY29udGVudElucHV0JykudmFsKCcnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fTtcblxuXHRcdC8vIOiHquWKqOejqOaOieWbnuWkjeWGheWuuVxuXHRcdGNvbnN0IHJlcGx5Q2FuY2VsID0gJCgnLmNvbW1lbnRfX3JlcGx5Q2FuY2VsJyk7XG5cdFx0aWYocmVwbHlDYW5jZWwubGVuZ3RoKXtcblx0XHRcdHJlcGx5Q2FuY2VsLmNsaWNrKCk7XG5cdFx0fVxuXHR9XG5cdGNvbW1lbnRTaW5nbGUoaXRlbSwgY2xhc3NOYW1lKSB7XG5cdFx0bGV0IHBhcmVudENvbnRlbnQgPSAnJztcblx0XHRjb25zdCBwSWQgPSBpdGVtLnBhcmVudElkO1xuXG5cdFx0aWYocElkKXtcblx0XHRcdGNvbnN0IGMgPSB0aGlzLmNvbW1lbnRzW3BJZF07XG5cdFx0XHRsZXQgcENvbnRlbnQgPSAnJztcblxuXHRcdFx0aWYoYyAmJiBjLmNvbnRlbnQpe1xuXHRcdFx0XHRwQ29udGVudCA9IGMuY29udGVudDtcblxuXHRcdFx0XHRpZihwQ29udGVudC5sZW5ndGggPiAyMCl7XG5cdFx0XHRcdFx0cENvbnRlbnQgPSBwQ29udGVudC5zdWJzdHJpbmcoMCwgMjApICsgJy4uLic7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwYXJlbnRDb250ZW50ID0gYFxuXHRcdFx0XHRcdDxibG9ja3F1b3RlIGNsYXNzPVwiY29tbWVudC0tZm9udHNpemVNZXRhIGNvbW1lbnRfX3F1b3RlXCI+XG5cdFx0XHRcdFx0XHQ8cD4keyBwQ29udGVudCB9XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY29tbWVudC0tY29sb3JBY2NlbnRcIj4keyBjLmF1dGhvciB9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHRcdFx0YDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIGlkPVwiY29tbWVudC0ke2l0ZW0uaWR9XCI+XG5cdFx0XHRcdDxhcnRpY2xlPlxuXHRcdFx0XHRcdDxoZWFkZXIgY2xhc3M9XCJjb21tZW50X19oZWFkZXJcIj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY29tbWVudC0tY29sb3JBY2NlbnQgY29tbWVudC0tZm9udHNpemVNZXRhIGNvbW1lbnRfX2l0ZW0tLWF1dGhvclwiPiR7aXRlbS5hdXRob3J9IDwvc3Bhbj5cblx0XHRcdFx0XHRcdDx0aW1lIGNsYXNzPVwiY29tbWVudC0tY29sb3JNZXRhIGNvbW1lbnQtLWZvbnRzaXplTWV0YSBjb21tZW50X19pdGVtLS10aW1lXCI+JHsgbW9tZW50KGl0ZW0uY3JlYXRlZEF0KS5mb3JtYXQoJ01NLURELVlZWVkgaGg6bW06c3MnKSB9PC90aW1lPlxuXHRcdFx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiY29tbWVudC0tbXQxMFwiPlxuXHRcdFx0XHRcdFx0JHtwYXJlbnRDb250ZW50fVxuXHRcdFx0XHRcdFx0PHByZSBjbGFzcz1cImNvbW1lbnRfX2NvbnRlbnRcIj4ke2l0ZW0uY29udGVudH08L3ByZT5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0PGZvb3RlciBjbGFzcz1cImNvbW1lbnQtLXRSaWdodFwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzcz1cImNvbW1lbnQtLWZvbnRzaXplTWV0YSBjb21tZW50LS1jb2xvckFjY2VudCBidG4tcmVwbHlcIiBkYXRhLWlkPVwiJHtpdGVtLmlkfVwiIGRhdGEtY29udGVudD1cIiR7aXRlbS5jb250ZW50LnN1YnN0cmluZygwLCAyMCl9XCI+5Zue5aSNPC9hPlxuXHRcdFx0XHRcdDwvZm9vdGVyPlxuXHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXHR9XG5cdHJlbmRlcihkYXRhKSB7XG5cdFx0bGV0IHRwbCA9ICcnO1xuXG5cdFx0aWYoIWRhdGEubGVuZ3RoKXtcblx0XHRcdHRwbCA9ICflv6vmnaXmiqLljaDmspnlj5HlkKd+Jztcblx0XHRcdCQoJyNjb21tZW50LWxpc3QnKS5odG1sKHRwbCk7XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRPYmplY3Qua2V5cyhkYXRhKS5tYXAoa2V5ID0+IHtcblx0XHRcdGNvbnN0IGl0ZW0gPSBkYXRhW2tleV07XG5cblx0XHRcdGlmKCFpdGVtLmF1dGhvciB8fCAhaXRlbS5jb250ZW50IHx8ICFpdGVtLmRpc3BsYXkpe1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNvbW1lbnQgPSB0aGlzLmNvbW1lbnRTaW5nbGUoaXRlbSwgJ2NvbW1lbnRfX2l0ZW0nKTtcblxuXHRcdFx0dHBsICs9IGBcblx0XHRcdFx0JHtjb21tZW50fVxuXHRcdFx0YDtcblx0XHR9KTtcblxuXHRcdCQoJyNjb21tZW50LWxpc3QnKS5odG1sKHRwbCk7XG5cdH1cblx0ZGlzcGxheUVycm9yTXNnKGNvbnRhaW5lcklkLCBtc2cpIHtcblx0XHRsZXQgZXJyb3JUaXAgPSAkKCcjY29tbWVudC1mb3JtLWVycm9yJyk7XG5cblx0XHRpZighZXJyb3JUaXAubGVuZ3RoKXtcblx0XHRcdGVycm9yVGlwID0gJCgnPHAvPicpLmF0dHIoe1xuXHRcdFx0XHRjbGFzczogJ2NvbW1lbnQtLWdyaWQgY29tbWVudC0tZm9udHNpemVNZXRhIGNvbW1lbnQtLWNvbG9yRXJyb3InLFxuXHRcdFx0XHRpZDogJ2NvbW1lbnQtZm9ybS1lcnJvcidcblx0XHRcdH0pLmh0bWwobXNnKTtcblxuXHRcdFx0JChjb250YWluZXJJZCkuYXBwZW5kKGVycm9yVGlwKTtcblx0XHR9ZWxzZXtcblx0XHRcdGVycm9yVGlwLmh0bWwobXNnKS5zaG93KCk7XG5cdFx0fVxuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRlcnJvclRpcC5oaWRlKCk7XG5cdFx0fSwgMjAwMCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FwcC9jb21tZW50LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQWlCQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./src/css/comment.less ***!
  \******************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jc3MvY29tbWVudC5sZXNzPzBkZTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvY29tbWVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** multi ./src/app/index.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wyy/Documents/code/comment/client/src/app/index.js */0);


/***/ })
/******/ ]);