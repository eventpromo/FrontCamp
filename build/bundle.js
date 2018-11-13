!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r={API_URL:"https://newsapi.org/v2/",API_KEY:"a6f5f8d49d734098950549b1edaea121"};function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=new(function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"parseJSON",function(t){return t.json()}),u(this,"checkStatus",function(t){return t.status>=200&&t.status<300?t:n.parseJSON(t).then(function(t){throw new Error(t.statusText)})}),u(this,"request",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=new Request(t,e);return r.headers.append("authorization","bearer ".concat(n.key)),fetch(r).then(n.checkStatus).then(n.parseJSON)}),this.key=e}return function(t,e,n){e&&o(t.prototype,e),n&&o(t,n)}(t,[{key:"get",value:function(t){return this.request(t)}},{key:"post",value:function(t,e){return this.request(t,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"post",body:JSON.stringify(e)})}},{key:"del",value:function(t){return this.request(t,{method:"delete"})}},{key:"put",value:function(t,e){this.request(t,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"put",body:JSON.stringify(e)})}}]),t}())(r.API_KEY);function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(this,"searchUrl",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new URL(n.url);return e.search=new URLSearchParams(t),e}),this.url="".concat(r.API_URL).concat(e)}return function(t,e,n){e&&c(t.prototype,e),n&&c(t,n)}(t,[{key:"create",value:function(t){return i.post(this.url,t)}},{key:"read",value:function(t){return i.get(this.searchUrl(t))}},{key:"update",value:function(t,e){return i.put("".concat(this.url,"/").concat(t),e)}},{key:"del",value:function(t){return i.del("".concat(this.url,"/").concat(t))}}]),t}();function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t,e,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=new(function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,y(e).call(this,"everything"))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,a),function(t,e,n){e&&l(t.prototype,e),n&&l(t,n)}(e,[{key:"read",value:function(){return p(y(e.prototype),"read",this).call(this,{q:"sport"})}}]),e}());function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){var e="function"==typeof Map?new Map:void 0;return(m=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return w(t,arguments,g(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),O(n,t)})(t)}function w(t,e,n){return(w=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&O(o,n.prototype),o}).apply(null,arguments)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var j=function(t){function e(t){var n,r=t.articles,o=void 0===r?[]:r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=v(this,g(e).call(this))).news=o,n.className="news-list",n.news.map(function(t){var e=t.title,n=t.description,r=document.createElement("div");r.className="news-list__item news-item";var o=document.createElement("div");o.className="news-item__title",o.innerHTML=e;var u=document.createElement("div");return u.className="news-item__body",u.innerHTML=n,r.appendChild(o),r.appendChild(u),r}).forEach(function(t){n.appendChild(t)}),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(e,m(HTMLElement)),e}();customElements.define("news-list",j),document.addEventListener("DOMContentLoaded",function(){d.read().then(function(t){document.querySelector("main").appendChild(new j(t))})})}]);
//# sourceMappingURL=bundle.js.map