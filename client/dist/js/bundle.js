!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./client/src/js/boot/index.js")}({"./client/src/js/actions/ActionTypes.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={MARKER_CLICK:"MARKER_CLICK",MARKER_CLOSE:"MARKER_CLOSE"};t.default=n},"./client/src/js/boot/index.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(1),a=n(o),u=r("./client/src/js/components/EnhancedMarkerContent.js"),s=n(u),c=r("./client/src/js/reducers/ReducerTransformer.js"),i=n(c);a.default.transform("my-transform",function(e){e.component("MarkerContent.*",s.default),e.reducer("locator",i.default)})},"./client/src/js/components/EnhancedMarkerContent.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),a=n(o),u=r("./node_modules/render-fragment/lib/index.js"),s=n(u),c=function(e){return function(e){return console.log(e),a.default.createElement(s.default,null,"Content Here")}};t.default=c},"./client/src/js/reducers/ReducerTransformer.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r("./client/src/js/actions/ActionTypes.js"),a=function(e){return e&&e.__esModule?e:{default:e}}(o),u=function(e){return function(t){return function(t,r){var o=r.type,u=r.payload;switch(o){case a.default.MARKER_CLICK:return n({},e(t,{type:o,payload:u}),{markerOpen:!0});case a.default.MARKER_CLOSE:return n({},e(t,{type:o,payload:u}),{markerOpen:!1});default:return void 0===t?e(t,{type:o,payload:u}):n({},e(t,{type:o,payload:u}),{markerOpen:t.markerOpen})}}}};t.default=u},"./node_modules/prop-types/factoryWithThrowingShims.js":function(e,t,r){"use strict";function n(){}var o=r("./node_modules/prop-types/lib/ReactPropTypesSecret.js");e.exports=function(){function e(e,t,r,n,a,u){if(u!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},"./node_modules/prop-types/index.js":function(e,t,r){e.exports=r("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/render-fragment/lib/index.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var u,s=e[Symbol.iterator]();!(n=(u=s.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=r(0),s=n(u),c=r("./node_modules/prop-types/index.js"),i=(n(c),s.default.version.split(".")),l=a(i,1),f=l[0],p=parseInt(f,10)>=16,d=function(e){var t=e.children,r=e.as,n=o(e,["children","as"]);return r?s.default.createElement(r,n,t):s.default.Children.toArray(t)};d.defaultProps={as:p?void 0:"div"};var y=s.default.Fragment?s.default.Fragment:d;t.default=y},0:function(e,t){e.exports=React},1:function(e,t){e.exports=Injector}});