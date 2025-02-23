/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Vue=e()}(this,(function(){"use strict";var t=Object.freeze({}),e=Array.isArray;function n(t){return null==t}function r(t){return null!=t}function o(t){return!0===t}function i(t){return"string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function a(t){return"function"==typeof t}function s(t){return null!==t&&"object"==typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function l(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return r(t)&&"function"==typeof t.then&&"function"==typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,p,2):String(t)}function p(t,e){return e&&e.__v_isRef?e.value:e}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function h(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}var m=h("slot,component",!0),g=h("key,ref,slot,slot-scope,is");function y(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var _=Object.prototype.hasOwnProperty;function b(t,e){return _.call(t,e)}function $(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var w=/-(\w)/g,x=$((function(t){return t.replace(w,(function(t,e){return e?e.toUpperCase():""}))})),C=$((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),k=/\B([A-Z])/g,S=$((function(t){return t.replace(k,"-$1").toLowerCase()}));var O=Function.prototype.bind?function(t,e){return t.bind(e)}:function(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n};function T(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function A(t,e){for(var n in e)t[n]=e[n];return t}function j(t){for(var e={},n=0;n<t.length;n++)t[n]&&A(e,t[n]);return e}function E(t,e,n){}var N=function(t,e,n){return!1},P=function(t){return t};function D(t,e){if(t===e)return!0;var n=s(t),r=s(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every((function(t,n){return D(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),c=Object.keys(e);return a.length===c.length&&a.every((function(n){return D(t[n],e[n])}))}catch(t){return!1}}function M(t,e){for(var n=0;n<t.length;n++)if(D(t[n],e))return n;return-1}function I(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function L(t,e){return t===e?0===t&&1/t!=1/e:t==t||e==e}var R="data-server-rendered",F=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:E,parsePlatformTagName:P,mustUseProp:N,async:!0,_lifecycleHooks:H},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function V(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var K=new RegExp("[^".concat(U.source,".$_\\d]"));var J="__proto__"in{},q="undefined"!=typeof window,W=q&&window.navigator.userAgent.toLowerCase(),Z=W&&/msie|trident/.test(W),G=W&&W.indexOf("msie 9.0")>0,X=W&&W.indexOf("edge/")>0;W&&W.indexOf("android");var Y=W&&/iphone|ipad|ipod|ios/.test(W);W&&/chrome\/\d+/.test(W),W&&/phantomjs/.test(W);var Q,tt=W&&W.match(/firefox\/(\d+)/),et={}.watch,nt=!1;if(q)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){nt=!0}}),window.addEventListener("test-passive",null,rt)}catch(t){}var ot=function(){return void 0===Q&&(Q=!q&&"undefined"!=typeof global&&(global.process&&"server"===global.process.env.VUE_ENV)),Q},it=q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"==typeof t&&/native code/.test(t.toString())}var st,ct="undefined"!=typeof Symbol&&at(Symbol)&&"undefined"!=typeof Reflect&&at(Reflect.ownKeys);st="undefined"!=typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=null;function lt(t){void 0===t&&(t=null),t||ut&&ut._scope.off(),ut=t,t&&t._scope.on()}var ft=function(){function t(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),dt=function(t){void 0===t&&(t="");var e=new ft;return e.text=t,e.isComment=!0,e};function pt(t){return new ft(void 0,void 0,void 0,String(t))}function vt(t){var e=new ft(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}"function"==typeof SuppressedError&&SuppressedError;var ht=0,mt=[],gt=function(){for(var t=0;t<mt.length;t++){var e=mt[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}mt.length=0},yt=function(){function t(){this._pending=!1,this.id=ht++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,mt.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){for(var e=this.subs.filter((function(t){return t})),n=0,r=e.length;n<r;n++){e[n].update()}},t}();yt.target=null;var _t=[];function bt(t){_t.push(t),yt.target=t}function $t(){_t.pop(),yt.target=_t[_t.length-1]}var wt=Array.prototype,xt=Object.create(wt);["push","pop","shift","unshift","splice","sort","reverse"].forEach((function(t){var e=wt[t];V(xt,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2)}return o&&a.observeArray(o),a.dep.notify(),i}))}));var Ct=Object.getOwnPropertyNames(xt),kt={},St=!0;function Ot(t){St=t}var Tt={notify:E,depend:E,addSub:E,removeSub:E},At=function(){function t(t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!1),this.value=t,this.shallow=n,this.mock=r,this.dep=r?Tt:new yt,this.vmCount=0,V(t,"__ob__",this),e(t)){if(!r)if(J)t.__proto__=xt;else for(var o=0,i=Ct.length;o<i;o++){V(t,s=Ct[o],xt[s])}n||this.observeArray(t)}else{var a=Object.keys(t);for(o=0;o<a.length;o++){var s;Et(t,s=a[o],kt,void 0,n,r)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)jt(t[e],!1,this.mock)},t}();function jt(t,n,r){return t&&b(t,"__ob__")&&t.__ob__ instanceof At?t.__ob__:!St||!r&&ot()||!e(t)&&!u(t)||!Object.isExtensible(t)||t.__v_skip||Bt(t)||t instanceof ft?void 0:new At(t,n,r)}function Et(t,n,r,o,i,a,s){void 0===s&&(s=!1);var c=new yt,u=Object.getOwnPropertyDescriptor(t,n);if(!u||!1!==u.configurable){var l=u&&u.get,f=u&&u.set;l&&!f||r!==kt&&2!==arguments.length||(r=t[n]);var d=i?r&&r.__ob__:jt(r,!1,a);return Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var n=l?l.call(t):r;return yt.target&&(c.depend(),d&&(d.dep.depend(),e(n)&&Dt(n))),Bt(n)&&!i?n.value:n},set:function(e){var n=l?l.call(t):r;if(L(n,e)){if(f)f.call(t,e);else{if(l)return;if(!i&&Bt(n)&&!Bt(e))return void(n.value=e);r=e}d=i?e&&e.__ob__:jt(e,!1,a),c.notify()}}}),c}}function Nt(t,n,r){if(!Ft(t)){var o=t.__ob__;return e(t)&&l(n)?(t.length=Math.max(t.length,n),t.splice(n,1,r),o&&!o.shallow&&o.mock&&jt(r,!1,!0),r):n in t&&!(n in Object.prototype)?(t[n]=r,r):t._isVue||o&&o.vmCount?r:o?(Et(o.value,n,r,void 0,o.shallow,o.mock),o.dep.notify(),r):(t[n]=r,r)}}function Pt(t,n){if(e(t)&&l(n))t.splice(n,1);else{var r=t.__ob__;t._isVue||r&&r.vmCount||Ft(t)||b(t,n)&&(delete t[n],r&&r.dep.notify())}}function Dt(t){for(var n=void 0,r=0,o=t.length;r<o;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),e(n)&&Dt(n)}function Mt(t){return It(t,!0),V(t,"__v_isShallow",!0),t}function It(t,e){Ft(t)||jt(t,e,ot())}function Lt(t){return Ft(t)?Lt(t.__v_raw):!(!t||!t.__ob__)}function Rt(t){return!(!t||!t.__v_isShallow)}function Ft(t){return!(!t||!t.__v_isReadonly)}var Ht="__v_isRef";function Bt(t){return!(!t||!0!==t.__v_isRef)}function Ut(t,e){if(Bt(t))return t;var n={};return V(n,Ht,!0),V(n,"__v_isShallow",e),V(n,"dep",Et(n,"value",t,null,e,ot())),n}function zt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Bt(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];Bt(r)&&!Bt(t)?r.value=t:e[n]=t}})}function Vt(t,e,n){var r=t[e];if(Bt(r))return r;var o={get value(){var r=t[e];return void 0===r?n:r},set value(n){t[e]=n}};return V(o,Ht,!0),o}var Kt="__v_rawToReadonly",Jt="__v_rawToShallowReadonly";function qt(t){return Wt(t,!1)}function Wt(t,e){if(!u(t))return t;if(Ft(t))return t;var n=e?Jt:Kt,r=t[n];if(r)return r;var o=Object.create(Object.getPrototypeOf(t));V(t,n,o),V(o,"__v_isReadonly",!0),V(o,"__v_raw",t),Bt(t)&&V(o,Ht,!0),(e||Rt(t))&&V(o,"__v_isShallow",!0);for(var i=Object.keys(t),a=0;a<i.length;a++)Zt(o,t,i[a],e);return o}function Zt(t,e,n,r){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];return r||!u(t)?t:qt(t)},set:function(){}})}var Gt=$((function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:n,capture:r,passive:e}}));function Xt(t,n){function r(){var t=r.fns;if(!e(t))return _n(t,null,arguments,n,"v-on handler");for(var o=t.slice(),i=0;i<o.length;i++)_n(o[i],null,arguments,n,"v-on handler")}return r.fns=t,r}function Yt(t,e,r,i,a,s){var c,u,l,f;for(c in t)u=t[c],l=e[c],f=Gt(c),n(u)||(n(l)?(n(u.fns)&&(u=t[c]=Xt(u,s)),o(f.once)&&(u=t[c]=a(f.name,u,f.capture)),r(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)n(t[c])&&i((f=Gt(c)).name,e[c],f.capture)}function Qt(t,e,i){var a;t instanceof ft&&(t=t.data.hook||(t.data.hook={}));var s=t[e];function c(){i.apply(this,arguments),y(a.fns,c)}n(s)?a=Xt([c]):r(s.fns)&&o(s.merged)?(a=s).fns.push(c):a=Xt([s,c]),a.merged=!0,t[e]=a}function te(t,e,n,o,i){if(r(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,o))return t[n]=e[o],i||delete e[o],!0}return!1}function ee(t){return i(t)?[pt(t)]:e(t)?re(t):void 0}function ne(t){return r(t)&&r(t.text)&&!1===t.isComment}function re(t,a){var s,c,u,l,f=[];for(s=0;s<t.length;s++)n(c=t[s])||"boolean"==typeof c||(l=f[u=f.length-1],e(c)?c.length>0&&(ne((c=re(c,"".concat(a||"","_").concat(s)))[0])&&ne(l)&&(f[u]=pt(l.text+c[0].text),c.shift()),f.push.apply(f,c)):i(c)?ne(l)?f[u]=pt(l.text+c):""!==c&&f.push(pt(c)):ne(c)&&ne(l)?f[u]=pt(l.text+c.text):(o(t._isVList)&&r(c.tag)&&n(c.key)&&r(a)&&(c.key="__vlist".concat(a,"_").concat(s,"__")),f.push(c)));return f}var oe=1,ie=2;function ae(t,n,c,u,l,f){return(e(c)||i(c))&&(l=u,u=c,c=void 0),o(f)&&(l=ie),function(t,n,o,i,c){if(r(o)&&r(o.__ob__))return dt();r(o)&&r(o.is)&&(n=o.is);if(!n)return dt();e(i)&&a(i[0])&&((o=o||{}).scopedSlots={default:i[0]},i.length=0);c===ie?i=ee(i):c===oe&&(i=function(t){for(var n=0;n<t.length;n++)if(e(t[n]))return Array.prototype.concat.apply([],t);return t}(i));var u,l;if("string"==typeof n){var f=void 0;l=t.$vnode&&t.$vnode.ns||B.getTagNamespace(n),u=B.isReservedTag(n)?new ft(B.parsePlatformTagName(n),o,i,void 0,void 0,t):o&&o.pre||!r(f=kr(t.$options,"components",n))?new ft(n,o,i,void 0,void 0,t):hr(f,o,t,i,n)}else u=hr(n,o,t,i);return e(u)?u:r(u)?(r(l)&&se(u,l),r(o)&&function(t){s(t.style)&&Wn(t.style);s(t.class)&&Wn(t.class)}(o),u):dt()}(t,n,c,u,l)}function se(t,e,i){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,i=!0),r(t.children))for(var a=0,s=t.children.length;a<s;a++){var c=t.children[a];r(c.tag)&&(n(c.ns)||o(i)&&"svg"!==c.tag)&&se(c,e,i)}}function ce(t,n){var o,i,a,c,u=null;if(e(t)||"string"==typeof t)for(u=new Array(t.length),o=0,i=t.length;o<i;o++)u[o]=n(t[o],o);else if("number"==typeof t)for(u=new Array(t),o=0;o<t;o++)u[o]=n(o+1,o);else if(s(t))if(ct&&t[Symbol.iterator]){u=[];for(var l=t[Symbol.iterator](),f=l.next();!f.done;)u.push(n(f.value,u.length)),f=l.next()}else for(a=Object.keys(t),u=new Array(a.length),o=0,i=a.length;o<i;o++)c=a[o],u[o]=n(t[c],c,o);return r(u)||(u=[]),u._isVList=!0,u}function ue(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=A(A({},r),n)),o=i(n)||(a(e)?e():e)):o=this.$slots[t]||(a(e)?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},o):o}function le(t){return kr(this.$options,"filters",t)||P}function fe(t,n){return e(t)?-1===t.indexOf(n):t!==n}function de(t,e,n,r,o){var i=B.keyCodes[e]||n;return o&&r&&!B.keyCodes[e]?fe(o,r):i?fe(i,t):r?S(r)!==e:void 0===t}function pe(t,n,r,o,i){if(r)if(s(r)){e(r)&&(r=j(r));var a=void 0,c=function(e){if("class"===e||"style"===e||g(e))a=t;else{var s=t.attrs&&t.attrs.type;a=o||B.mustUseProp(n,s,e)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=x(e),u=S(e);c in a||u in a||(a[e]=r[e],i&&((t.on||(t.on={}))["update:".concat(e)]=function(t){r[e]=t}))};for(var u in r)c(u)}else;return t}function ve(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||me(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),"__static__".concat(t),!1),r}function he(t,e,n){return me(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function me(t,n,r){if(e(t))for(var o=0;o<t.length;o++)t[o]&&"string"!=typeof t[o]&&ge(t[o],"".concat(n,"_").concat(o),r);else ge(t,n,r)}function ge(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ye(t,e){if(e)if(u(e)){var n=t.on=t.on?A({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function _e(t,n,r,o){n=n||{$stable:!r};for(var i=0;i<t.length;i++){var a=t[i];e(a)?_e(a,n,r):a&&(a.proxy&&(a.fn.proxy=!0),n[a.key]=a.fn)}return o&&(n.$key=o),n}function be(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"==typeof r&&r&&(t[e[n]]=e[n+1])}return t}function $e(t,e){return"string"==typeof t?e+t:t}function we(t){t._o=he,t._n=v,t._s=d,t._l=ce,t._t=ue,t._q=D,t._i=M,t._m=ve,t._f=le,t._k=de,t._b=pe,t._v=pt,t._e=dt,t._u=_e,t._g=ye,t._d=be,t._p=$e}function xe(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(i);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var u in n)n[u].every(Ce)&&delete n[u];return n}function Ce(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t){return t.isComment&&t.asyncFactory}function Se(e,n,r,o){var i,a=Object.keys(r).length>0,s=n?!!n.$stable:!a,c=n&&n.$key;if(n){if(n._normalized)return n._normalized;if(s&&o&&o!==t&&c===o.$key&&!a&&!o.$hasNormal)return o;for(var u in i={},n)n[u]&&"$"!==u[0]&&(i[u]=Oe(e,r,u,n[u]))}else i={};for(var l in r)l in i||(i[l]=Te(r,l));return n&&Object.isExtensible(n)&&(n._normalized=i),V(i,"$stable",s),V(i,"$key",c),V(i,"$hasNormal",a),i}function Oe(t,n,r,o){var i=function(){var n=ut;lt(t);var r=arguments.length?o.apply(null,arguments):o({}),i=(r=r&&"object"==typeof r&&!e(r)?[r]:ee(r))&&r[0];return lt(n),r&&(!i||1===r.length&&i.isComment&&!ke(i))?void 0:r};return o.proxy&&Object.defineProperty(n,r,{get:i,enumerable:!0,configurable:!0}),i}function Te(t,e){return function(){return t[e]}}function Ae(e){return{get attrs(){if(!e._attrsProxy){var n=e._attrsProxy={};V(n,"_v_attr_proxy",!0),je(n,e.$attrs,t,e,"$attrs")}return e._attrsProxy},get listeners(){e._listenersProxy||je(e._listenersProxy={},e.$listeners,t,e,"$listeners");return e._listenersProxy},get slots(){return function(t){t._slotsProxy||Ne(t._slotsProxy={},t.$scopedSlots);return t._slotsProxy}(e)},emit:O(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach((function(n){return zt(e,t,n)}))}}}function je(t,e,n,r,o){var i=!1;for(var a in e)a in t?e[a]!==n[a]&&(i=!0):(i=!0,Ee(t,a,r,o));for(var a in t)a in e||(i=!0,delete t[a]);return i}function Ee(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function Ne(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Pe(){var t=ut;return t._setupContext||(t._setupContext=Ae(t))}var De,Me,Ie=null;function Le(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),s(t)?e.extend(t):t}function Re(t){if(e(t))for(var n=0;n<t.length;n++){var o=t[n];if(r(o)&&(r(o.componentOptions)||ke(o)))return o}}function Fe(t,e){De.$on(t,e)}function He(t,e){De.$off(t,e)}function Be(t,e){var n=De;return function r(){null!==e.apply(null,arguments)&&n.$off(t,r)}}function Ue(t,e,n){De=t,Yt(e,n||{},Fe,He,Be,t),De=void 0}var ze=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Me;try{return Me=this,t()}finally{Me=e}}},t.prototype.on=function(){Me=this},t.prototype.off=function(){Me=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Ve(){return Me}var Ke=null;function Je(t){var e=Ke;return Ke=t,function(){Ke=e}}function qe(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function We(t,e){if(e){if(t._directInactive=!1,qe(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)We(t.$children[n]);Ge(t,"activated")}}function Ze(t,e){if(!(e&&(t._directInactive=!0,qe(t))||t._inactive)){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Ze(t.$children[n]);Ge(t,"deactivated")}}function Ge(t,e,n,r){void 0===r&&(r=!0),bt();var o=ut,i=Ve();r&&lt(t);var a=t.$options[e],s="".concat(e," hook");if(a)for(var c=0,u=a.length;c<u;c++)_n(a[c],t,n||null,t,s);t._hasHookEvent&&t.$emit("hook:"+e),r&&(lt(o),i&&i.on()),$t()}var Xe=[],Ye=[],Qe={},tn=!1,en=!1,nn=0;var rn=0,on=Date.now;if(q&&!Z){var an=window.performance;an&&"function"==typeof an.now&&on()>document.createEvent("Event").timeStamp&&(on=function(){return an.now()})}var sn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function cn(){var t,e;for(rn=on(),en=!0,Xe.sort(sn),nn=0;nn<Xe.length;nn++)(t=Xe[nn]).before&&t.before(),e=t.id,Qe[e]=null,t.run();var n=Ye.slice(),r=Xe.slice();nn=Xe.length=Ye.length=0,Qe={},tn=en=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,We(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Ge(r,"updated")}}(r),gt(),it&&B.devtools&&it.emit("flush")}function un(t){var e=t.id;if(null==Qe[e]&&(t!==yt.target||!t.noRecurse)){if(Qe[e]=!0,en){for(var n=Xe.length-1;n>nn&&Xe[n].id>t.id;)n--;Xe.splice(n+1,0,t)}else Xe.push(t);tn||(tn=!0,En(cn))}}var ln="watcher",fn="".concat(ln," callback"),dn="".concat(ln," getter"),pn="".concat(ln," cleanup");function vn(t,e){return mn(t,null,{flush:"post"})}var hn={};function mn(n,r,o){var i=void 0===o?t:o,s=i.immediate,c=i.deep,u=i.flush,l=void 0===u?"pre":u;i.onTrack,i.onTrigger;var f,d,p=ut,v=function(t,e,n){void 0===n&&(n=null);var r=_n(t,null,n,p,e);return c&&r&&r.__ob__&&r.__ob__.dep.depend(),r},h=!1,m=!1;if(Bt(n)?(f=function(){return n.value},h=Rt(n)):Lt(n)?(f=function(){return n.__ob__.dep.depend(),n},c=!0):e(n)?(m=!0,h=n.some((function(t){return Lt(t)||Rt(t)})),f=function(){return n.map((function(t){return Bt(t)?t.value:Lt(t)?(t.__ob__.dep.depend(),Wn(t)):a(t)?v(t,dn):void 0}))}):f=a(n)?r?function(){return v(n,dn)}:function(){if(!p||!p._isDestroyed)return d&&d(),v(n,ln,[y])}:E,r&&c){var g=f;f=function(){return Wn(g())}}var y=function(t){d=_.onStop=function(){v(t,pn)}};if(ot())return y=E,r?s&&v(r,fn,[f(),m?[]:void 0,y]):f(),E;var _=new Xn(ut,f,E,{lazy:!0});_.noRecurse=!r;var b=m?[]:hn;return _.run=function(){if(_.active)if(r){var t=_.get();(c||h||(m?t.some((function(t,e){return L(t,b[e])})):L(t,b)))&&(d&&d(),v(r,fn,[t,b===hn?void 0:b,y]),b=t)}else _.get()},"sync"===l?_.update=_.run:"post"===l?(_.post=!0,_.update=function(){return un(_)}):_.update=function(){if(p&&p===ut&&!p._isMounted){var t=p._preWatchers||(p._preWatchers=[]);t.indexOf(_)<0&&t.push(_)}else un(_)},r?s?_.run():b=_.get():"post"===l&&p?p.$once("hook:mounted",(function(){return _.get()})):_.get(),function(){_.teardown()}}function gn(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}function yn(t,e,n){bt();try{if(e)for(var r=e;r=r.$parent;){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{if(!1===o[i].call(r,t,e,n))return}catch(t){bn(t,r,"errorCaptured hook")}}bn(t,e,n)}finally{$t()}}function _n(t,e,n,r,o){var i;try{(i=n?t.apply(e,n):t.call(e))&&!i._isVue&&f(i)&&!i._handled&&(i.catch((function(t){return yn(t,r,o+" (Promise/async)")})),i._handled=!0)}catch(t){yn(t,r,o)}return i}function bn(t,e,n){if(B.errorHandler)try{return B.errorHandler.call(null,t,e,n)}catch(e){e!==t&&$n(e)}$n(t)}function $n(t,e,n){if(!q||"undefined"==typeof console)throw t;console.error(t)}var wn,xn=!1,Cn=[],kn=!1;function Sn(){kn=!1;var t=Cn.slice(0);Cn.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!=typeof Promise&&at(Promise)){var On=Promise.resolve();wn=function(){On.then(Sn),Y&&setTimeout(E)},xn=!0}else if(Z||"undefined"==typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())wn="undefined"!=typeof setImmediate&&at(setImmediate)?function(){setImmediate(Sn)}:function(){setTimeout(Sn,0)};else{var Tn=1,An=new MutationObserver(Sn),jn=document.createTextNode(String(Tn));An.observe(jn,{characterData:!0}),wn=function(){Tn=(Tn+1)%2,jn.data=String(Tn)},xn=!0}function En(t,e){var n;if(Cn.push((function(){if(t)try{t.call(e)}catch(t){yn(t,e,"nextTick")}else n&&n(e)})),kn||(kn=!0,wn()),!t&&"undefined"!=typeof Promise)return new Promise((function(t){n=t}))}function Nn(t){return function(e,n){if(void 0===n&&(n=ut),n)return function(t,e,n){var r=t.$options;r[e]=$r(r[e],n)}(n,t,e)}}var Pn=Nn("beforeMount"),Dn=Nn("mounted"),Mn=Nn("beforeUpdate"),In=Nn("updated"),Ln=Nn("beforeDestroy"),Rn=Nn("destroyed"),Fn=Nn("activated"),Hn=Nn("deactivated"),Bn=Nn("serverPrefetch"),Un=Nn("renderTracked"),zn=Nn("renderTriggered"),Vn=Nn("errorCaptured");var Kn="2.7.16";var Jn=Object.freeze({__proto__:null,version:Kn,defineComponent:function(t){return t},ref:function(t){return Ut(t,!1)},shallowRef:function(t){return Ut(t,!0)},isRef:Bt,toRef:Vt,toRefs:function(t){var n=e(t)?new Array(t.length):{};for(var r in t)n[r]=Vt(t,r);return n},unref:function(t){return Bt(t)?t.value:t},proxyRefs:function(t){if(Lt(t))return t;for(var e={},n=Object.keys(t),r=0;r<n.length;r++)zt(e,t,n[r]);return e},customRef:function(t){var e=new yt,n=t((function(){e.depend()}),(function(){e.notify()})),r=n.get,o=n.set,i={get value(){return r()},set value(t){o(t)}};return V(i,Ht,!0),i},triggerRef:function(t){t.dep&&t.dep.notify()},reactive:function(t){return It(t,!1),t},isReactive:Lt,isReadonly:Ft,isShallow:Rt,isProxy:function(t){return Lt(t)||Ft(t)},shallowReactive:Mt,markRaw:function(t){return Object.isExtensible(t)&&V(t,"__v_skip",!0),t},toRaw:function t(e){var n=e&&e.__v_raw;return n?t(n):e},readonly:qt,shallowReadonly:function(t){return Wt(t,!0)},computed:function(t,e){var n,r,o=a(t);o?(n=t,r=E):(n=t.get,r=t.set);var i=ot()?null:new Xn(ut,n,E,{lazy:!0}),s={effect:i,get value(){return i?(i.dirty&&i.evaluate(),yt.target&&i.depend(),i.value):n()},set value(t){r(t)}};return V(s,Ht,!0),V(s,"__v_isReadonly",o),s},watch:function(t,e,n){return mn(t,e,n)},watchEffect:function(t,e){return mn(t,null,e)},watchPostEffect:vn,watchSyncEffect:function(t,e){return mn(t,null,{flush:"sync"})},EffectScope:ze,effectScope:function(t){return new ze(t)},onScopeDispose:function(t){Me&&Me.cleanups.push(t)},getCurrentScope:Ve,provide:function(t,e){ut&&(gn(ut)[t]=e)},inject:function(t,e,n){void 0===n&&(n=!1);var r=ut;if(r){var o=r.$parent&&r.$parent._provided;if(o&&t in o)return o[t];if(arguments.length>1)return n&&a(e)?e.call(r):e}},h:function(t,e,n){return ae(ut,t,e,n,2,!0)},getCurrentInstance:function(){return ut&&{proxy:ut}},useSlots:function(){return Pe().slots},useAttrs:function(){return Pe().attrs},useListeners:function(){return Pe().listeners},mergeDefaults:function(t,n){var r=e(t)?t.reduce((function(t,e){return t[e]={},t}),{}):t;for(var o in n){var i=r[o];i?e(i)||a(i)?r[o]={type:i,default:n[o]}:i.default=n[o]:null===i&&(r[o]={default:n[o]})}return r},nextTick:En,set:Nt,del:Pt,useCssModule:function(e){return t},useCssVars:function(t){if(q){var e=ut;e&&vn((function(){var n=e.$el,r=t(e,e._setupProxy);if(n&&1===n.nodeType){var o=n.style;for(var i in r)o.setProperty("--".concat(i),r[i])}}))}},defineAsyncComponent:function(t){a(t)&&(t={loader:t});var e=t.loader,n=t.loadingComponent,r=t.errorComponent,o=t.delay,i=void 0===o?200:o,s=t.timeout;t.suspensible;var c=t.onError,u=null,l=0,f=function(){var t;return u||(t=u=e().catch((function(t){if(t=t instanceof Error?t:new Error(String(t)),c)return new Promise((function(e,n){c(t,(function(){return e((l++,u=null,f()))}),(function(){return n(t)}),l+1)}));throw t})).then((function(e){return t!==u&&u?u:(e&&(e.__esModule||"Module"===e[Symbol.toStringTag])&&(e=e.default),e)})))};return function(){return{component:f(),delay:i,timeout:s,error:r,loading:n}}},onBeforeMount:Pn,onMounted:Dn,onBeforeUpdate:Mn,onUpdated:In,onBeforeUnmount:Ln,onUnmounted:Rn,onActivated:Fn,onDeactivated:Hn,onServerPrefetch:Bn,onRenderTracked:Un,onRenderTriggered:zn,onErrorCaptured:function(t,e){void 0===e&&(e=ut),Vn(t,e)}}),qn=new st;function Wn(t){return Zn(t,qn),qn.clear(),t}function Zn(t,n){var r,o,i=e(t);if(!(!i&&!s(t)||t.__v_skip||Object.isFrozen(t)||t instanceof ft)){if(t.__ob__){var a=t.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(i)for(r=t.length;r--;)Zn(t[r],n);else if(Bt(t))Zn(t.value,n);else for(r=(o=Object.keys(t)).length;r--;)Zn(t[o[r]],n)}}var Gn=0,Xn=function(){function t(t,e,n,r,o){!function(t,e){void 0===e&&(e=Me),e&&e.active&&e.effects.push(t)}(this,Me&&!Me._vm?Me:t?t._scope:void 0),(this.vm=t)&&o&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Gn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="",a(e)?this.getter=e:(this.getter=function(t){if(!K.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=E)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;bt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;yn(t,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&Wn(t),$t(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():un(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||s(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');_n(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&y(this.vm._scope.effects,this),this.active){for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}(),Yn={enumerable:!0,configurable:!0,get:E,set:E};function Qn(t,e,n){Yn.get=function(){return this[e][n]},Yn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Yn)}function tr(t){var n=t.$options;if(n.props&&function(t,e){var n=t.$options.propsData||{},r=t._props=Mt({}),o=t.$options._propKeys=[],i=!t.$parent;i||Ot(!1);var a=function(i){o.push(i);var a=Sr(i,e,n,t);Et(r,i,a,void 0,!0),i in t||Qn(t,"_props",i)};for(var s in e)a(s);Ot(!0)}(t,n.props),function(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=Ae(t);lt(t),bt();var o=_n(n,null,[t._props||Mt({}),r],t,"setup");if($t(),lt(),a(o))e.render=o;else if(s(o))if(t._setupState=o,o.__sfc){var i=t._setupProxy={};for(var c in o)"__sfc"!==c&&zt(i,o,c)}else for(var c in o)z(c)||zt(t,o,c)}}(t),n.methods&&function(t,e){for(var n in t.$options.props,e)t[n]="function"!=typeof e[n]?E:O(e[n],t)}(t,n.methods),n.data)!function(t){var e=t.$options.data;e=t._data=a(e)?function(t,e){bt();try{return t.call(e,e)}catch(t){return yn(t,e,"data()"),{}}finally{$t()}}(e,t):e||{},u(e)||(e={});var n=Object.keys(e),r=t.$options.props;t.$options.methods;var o=n.length;for(;o--;){var i=n[o];r&&b(r,i)||z(i)||Qn(t,"_data",i)}var s=jt(e);s&&s.vmCount++}(t);else{var r=jt(t._data={});r&&r.vmCount++}n.computed&&function(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],s=a(i)?i:i.get;r||(n[o]=new Xn(t,s||E,E,er)),o in t||nr(t,o,i)}}(t,n.computed),n.watch&&n.watch!==et&&function(t,n){for(var r in n){var o=n[r];if(e(o))for(var i=0;i<o.length;i++)ir(t,r,o[i]);else ir(t,r,o)}}(t,n.watch)}var er={lazy:!0};function nr(t,e,n){var r=!ot();a(n)?(Yn.get=r?rr(e):or(n),Yn.set=E):(Yn.get=n.get?r&&!1!==n.cache?rr(e):or(n.get):E,Yn.set=n.set||E),Object.defineProperty(t,e,Yn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),yt.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ir(t,e,n,r){return u(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function ar(t,e){if(t){for(var n=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var s=t[i].from;if(s in e._provided)n[i]=e._provided[s];else if("default"in t[i]){var c=t[i].default;n[i]=a(c)?c.call(e):c}}}return n}}var sr=0;function cr(t){var e=t.options;if(t.super){var n=cr(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}(t);r&&A(t.extendOptions,r),(e=t.options=Cr(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function ur(n,r,i,a,s){var c,u=this,l=s.options;b(a,"_uid")?(c=Object.create(a))._original=a:(c=a,a=a._original);var f=o(l._compiled),d=!f;this.data=n,this.props=r,this.children=i,this.parent=a,this.listeners=n.on||t,this.injections=ar(l.inject,a),this.slots=function(){return u.$slots||Se(a,n.scopedSlots,u.$slots=xe(i,a)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Se(a,n.scopedSlots,this.slots())}}),f&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Se(a,n.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,n,r,o){var i=ae(c,t,n,r,o,d);return i&&!e(i)&&(i.fnScopeId=l._scopeId,i.fnContext=a),i}:this._c=function(t,e,n,r){return ae(c,t,e,n,r,d)}}function lr(t,e,n,r,o){var i=vt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function fr(t,e){for(var n in e)t[x(n)]=e[n]}function dr(t){return t.name||t.__name||t._componentTag}we(ur.prototype);var pr={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;pr.prepatch(n,n)}else{(t.componentInstance=function(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},o=t.data.inlineTemplate;r(o)&&(n.render=o.render,n.staticRenderFns=o.staticRenderFns);return new t.componentOptions.Ctor(n)}(t,Ke)).$mount(e?t.elm:void 0,e)}},prepatch:function(e,n){var r=n.componentOptions;!function(e,n,r,o,i){var a=o.data.scopedSlots,s=e.$scopedSlots,c=!!(a&&!a.$stable||s!==t&&!s.$stable||a&&e.$scopedSlots.$key!==a.$key||!a&&e.$scopedSlots.$key),u=!!(i||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=o,e.$vnode=o,e._vnode&&(e._vnode.parent=o),e.$options._renderChildren=i;var f=o.data.attrs||t;e._attrsProxy&&je(e._attrsProxy,f,l.data&&l.data.attrs||t,e,"$attrs")&&(u=!0),e.$attrs=f,r=r||t;var d=e.$options._parentListeners;if(e._listenersProxy&&je(e._listenersProxy,r,d||t,e,"$listeners"),e.$listeners=e.$options._parentListeners=r,Ue(e,r,d),n&&e.$options.props){Ot(!1);for(var p=e._props,v=e.$options._propKeys||[],h=0;h<v.length;h++){var m=v[h],g=e.$options.props;p[m]=Sr(m,g,n,e)}Ot(!0),e.$options.propsData=n}u&&(e.$slots=xe(i,o.context),e.$forceUpdate())}(n.componentInstance=e.componentInstance,r.propsData,r.listeners,n,r.children)},insert:function(t){var e,n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,Ge(r,"mounted")),t.data.keepAlive&&(n._isMounted?((e=r)._inactive=!1,Ye.push(e)):We(r,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Ze(e,!0):e.$destroy())}},vr=Object.keys(pr);function hr(i,a,c,u,l){if(!n(i)){var d=c.$options._base;if(s(i)&&(i=d.extend(i)),"function"==typeof i){var p;if(n(i.cid)&&(i=function(t,e){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var i=Ie;if(i&&r(t.owners)&&-1===t.owners.indexOf(i)&&t.owners.push(i),o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(i&&!r(t.owners)){var a=t.owners=[i],c=!0,u=null,l=null;i.$on("hook:destroyed",(function(){return y(a,i)}));var d=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},p=I((function(n){t.resolved=Le(n,e),c?a.length=0:d(!0)})),v=I((function(e){r(t.errorComp)&&(t.error=!0,d(!0))})),h=t(p,v);return s(h)&&(f(h)?n(t.resolved)&&h.then(p,v):f(h.component)&&(h.component.then(p,v),r(h.error)&&(t.errorComp=Le(h.error,e)),r(h.loading)&&(t.loadingComp=Le(h.loading,e),0===h.delay?t.loading=!0:u=setTimeout((function(){u=null,n(t.resolved)&&n(t.error)&&(t.loading=!0,d(!1))}),h.delay||200)),r(h.timeout)&&(l=setTimeout((function(){l=null,n(t.resolved)&&v(null)}),h.timeout)))),c=!1,t.loading?t.loadingComp:t.resolved}}(p=i,d),void 0===i))return function(t,e,n,r,o){var i=dt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}(p,a,c,u,l);a=a||{},cr(i),r(a.model)&&function(t,n){var o=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(n.attrs||(n.attrs={}))[o]=n.model.value;var a=n.on||(n.on={}),s=a[i],c=n.model.callback;r(s)?(e(s)?-1===s.indexOf(c):s!==c)&&(a[i]=[c].concat(s)):a[i]=c}(i.options,a);var v=function(t,e,o){var i=e.options.props;if(!n(i)){var a={},s=t.attrs,c=t.props;if(r(s)||r(c))for(var u in i){var l=S(u);te(a,c,u,l,!0)||te(a,s,u,l,!1)}return a}}(a,i);if(o(i.options.functional))return function(n,o,i,a,s){var c=n.options,u={},l=c.props;if(r(l))for(var f in l)u[f]=Sr(f,l,o||t);else r(i.attrs)&&fr(u,i.attrs),r(i.props)&&fr(u,i.props);var d=new ur(i,u,s,a,n),p=c.render.call(null,d._c,d);if(p instanceof ft)return lr(p,i,d.parent,c);if(e(p)){for(var v=ee(p)||[],h=new Array(v.length),m=0;m<v.length;m++)h[m]=lr(v[m],i,d.parent,c);return h}}(i,v,a,c,u);var h=a.on;if(a.on=a.nativeOn,o(i.options.abstract)){var m=a.slot;a={},m&&(a.slot=m)}!function(t){for(var e=t.hook||(t.hook={}),n=0;n<vr.length;n++){var r=vr[n],o=e[r],i=pr[r];o===i||o&&o._merged||(e[r]=o?mr(i,o):i)}}(a);var g=dr(i.options)||l;return new ft("vue-component-".concat(i.cid).concat(g?"-".concat(g):""),a,void 0,void 0,void 0,c,{Ctor:i,propsData:v,listeners:h,tag:l,children:u},p)}}}function mr(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}var gr=E,yr=B.optionMergeStrategies;function _r(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var r,o,i,a=ct?Reflect.ownKeys(e):Object.keys(e),s=0;s<a.length;s++)"__ob__"!==(r=a[s])&&(o=t[r],i=e[r],n&&b(t,r)?o!==i&&u(o)&&u(i)&&_r(o,i):Nt(t,r,i));return t}function br(t,e,n){return n?function(){var r=a(e)?e.call(n,n):e,o=a(t)?t.call(n,n):t;return r?_r(r,o):o}:e?t?function(){return _r(a(e)?e.call(this,this):e,a(t)?t.call(this,this):t)}:e:t}function $r(t,n){var r=n?t?t.concat(n):e(n)?n:[n]:t;return r?function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(r):r}function wr(t,e,n,r){var o=Object.create(t||null);return e?A(o,e):o}yr.data=function(t,e,n){return n?br(t,e,n):e&&"function"!=typeof e?t:br(t,e)},H.forEach((function(t){yr[t]=$r})),F.forEach((function(t){yr[t+"s"]=wr})),yr.watch=function(t,n,r,o){if(t===et&&(t=void 0),n===et&&(n=void 0),!n)return Object.create(t||null);if(!t)return n;var i={};for(var a in A(i,t),n){var s=i[a],c=n[a];s&&!e(s)&&(s=[s]),i[a]=s?s.concat(c):e(c)?c:[c]}return i},yr.props=yr.methods=yr.inject=yr.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return A(o,t),e&&A(o,e),o},yr.provide=function(t,e){return t?function(){var n=Object.create(null);return _r(n,a(t)?t.call(this):t),e&&_r(n,a(e)?e.call(this):e,!1),n}:e};var xr=function(t,e){return void 0===e?t:e};function Cr(t,n,r){if(a(n)&&(n=n.options),function(t,n){var r=t.props;if(r){var o,i,a={};if(e(r))for(o=r.length;o--;)"string"==typeof(i=r[o])&&(a[x(i)]={type:null});else if(u(r))for(var s in r)i=r[s],a[x(s)]=u(i)?i:{type:i};t.props=a}}(n),function(t,n){var r=t.inject;if(r){var o=t.inject={};if(e(r))for(var i=0;i<r.length;i++)o[r[i]]={from:r[i]};else if(u(r))for(var a in r){var s=r[a];o[a]=u(s)?A({from:a},s):{from:s}}}}(n),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];a(r)&&(e[n]={bind:r,update:r})}}(n),!n._base&&(n.extends&&(t=Cr(t,n.extends,r)),n.mixins))for(var o=0,i=n.mixins.length;o<i;o++)t=Cr(t,n.mixins[o],r);var s,c={};for(s in t)l(s);for(s in n)b(t,s)||l(s);function l(e){var o=yr[e]||xr;c[e]=o(t[e],n[e],r,e)}return c}function kr(t,e,n,r){if("string"==typeof n){var o=t[e];if(b(o,n))return o[n];var i=x(n);if(b(o,i))return o[i];var a=C(i);return b(o,a)?o[a]:o[n]||o[i]||o[a]}}function Sr(t,e,n,r){var o=e[t],i=!b(n,t),s=n[t],c=jr(Boolean,o.type);if(c>-1)if(i&&!b(o,"default"))s=!1;else if(""===s||s===S(t)){var u=jr(String,o.type);(u<0||c<u)&&(s=!0)}if(void 0===s){s=function(t,e,n){if(!b(e,"default"))return;var r=e.default;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return a(r)&&"Function"!==Tr(e.type)?r.call(t):r}(r,o,t);var l=St;Ot(!0),jt(s),Ot(l)}return s}var Or=/^\s*function (\w+)/;function Tr(t){var e=t&&t.toString().match(Or);return e?e[1]:""}function Ar(t,e){return Tr(t)===Tr(e)}function jr(t,n){if(!e(n))return Ar(n,t)?0:-1;for(var r=0,o=n.length;r<o;r++)if(Ar(n[r],t))return r;return-1}function Er(t){this._init(t)}function Nr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=dr(t)||dr(n.options),a=function(t){this._init(t)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=e++,a.options=Cr(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)Qn(t.prototype,"_props",n)}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,F.forEach((function(t){a[t]=n[t]})),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=A({},a.options),o[r]=a,a}}function Pr(t){return t&&(dr(t.Ctor.options)||t.tag)}function Dr(t,n){return e(t)?t.indexOf(n)>-1:"string"==typeof t?t.split(",").indexOf(n)>-1:(r=t,"[object RegExp]"===c.call(r)&&t.test(n));var r}function Mr(t,e){var n=t.cache,r=t.keys,o=t._vnode,i=t.$vnode;for(var a in n){var s=n[a];if(s){var c=s.name;c&&!e(c)&&Ir(n,a,r,o)}}i.componentOptions.children=void 0}function Ir(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,y(n,e)}!function(e){e.prototype._init=function(e){var n=this;n._uid=sr++,n._isVue=!0,n.__v_skip=!0,n._scope=new ze(!0),n._scope.parent=void 0,n._scope._vm=!0,e&&e._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(n,e):n.$options=Cr(cr(n.constructor),e||{},n),n._renderProxy=n,n._self=n,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(n),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Ue(t,e)}(n),function(e){e._vnode=null,e._staticTrees=null;var n=e.$options,r=e.$vnode=n._parentVnode,o=r&&r.context;e.$slots=xe(n._renderChildren,o),e.$scopedSlots=r?Se(e.$parent,r.data.scopedSlots,e.$slots):t,e._c=function(t,n,r,o){return ae(e,t,n,r,o,!1)},e.$createElement=function(t,n,r,o){return ae(e,t,n,r,o,!0)};var i=r&&r.data;Et(e,"$attrs",i&&i.attrs||t,null,!0),Et(e,"$listeners",n._parentListeners||t,null,!0)}(n),Ge(n,"beforeCreate",void 0,!1),function(t){var e=ar(t.$options.inject,t);e&&(Ot(!1),Object.keys(e).forEach((function(n){Et(t,n,e[n])})),Ot(!0))}(n),tr(n),function(t){var e=t.$options.provide;if(e){var n=a(e)?e.call(t):e;if(!s(n))return;for(var r=gn(t),o=ct?Reflect.ownKeys(n):Object.keys(n),i=0;i<o.length;i++){var c=o[i];Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(n,c))}}}(n),Ge(n,"created"),n.$options.el&&n.$mount(n.$options.el)}}(Er),function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Nt,t.prototype.$delete=Pt,t.prototype.$watch=function(t,e,n){var r=this;if(u(e))return ir(r,t,e,n);(n=n||{}).user=!0;var o=new Xn(r,t,e,n);if(n.immediate){var i='callback for immediate watcher "'.concat(o.expression,'"');bt(),_n(e,r,[o.value],r,i),$t()}return function(){o.teardown()}}}(Er),function(t){var n=/^hook:/;t.prototype.$on=function(t,r){var o=this;if(e(t))for(var i=0,a=t.length;i<a;i++)o.$on(t[i],r);else(o._events[t]||(o._events[t]=[])).push(r),n.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,n){var r=this;if(!arguments.length)return r._events=Object.create(null),r;if(e(t)){for(var o=0,i=t.length;o<i;o++)r.$off(t[o],n);return r}var a,s=r._events[t];if(!s)return r;if(!n)return r._events[t]=null,r;for(var c=s.length;c--;)if((a=s[c])===n||a.fn===n){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?T(n):n;for(var r=T(arguments,1),o='event handler for "'.concat(t,'"'),i=0,a=n.length;i<a;i++)_n(n[i],e,r,e,o)}return e}}(Er),function(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=Je(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);for(var a=n;a&&a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode;)a.$parent.$el=a.$el,a=a.$parent},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Ge(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Ge(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}(Er),function(t){we(t.prototype),t.prototype.$nextTick=function(t){return En(t,this)},t.prototype._render=function(){var t=this,n=t.$options,r=n.render,o=n._parentVnode;o&&t._isMounted&&(t.$scopedSlots=Se(t.$parent,o.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Ne(t._slotsProxy,t.$scopedSlots)),t.$vnode=o;var i,a=ut,s=Ie;try{lt(t),Ie=t,i=r.call(t._renderProxy,t.$createElement)}catch(e){yn(e,t,"render"),i=t._vnode}finally{Ie=s,lt(a)}return e(i)&&1===i.length&&(i=i[0]),i instanceof ft||(i=dt()),i.parent=o,i}}(Er);var Lr=[String,RegExp,Array],Rr={name:"keep-alive",abstract:!0,props:{include:Lr,exclude:Lr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,o=t.keyToCache;if(r){var i=r.tag,a=r.componentInstance,s=r.componentOptions;e[o]={name:Pr(s),tag:i,componentInstance:a},n.push(o),this.max&&n.length>parseInt(this.max)&&Ir(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ir(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Mr(t,(function(t){return Dr(e,t)}))})),this.$watch("exclude",(function(e){Mr(t,(function(t){return!Dr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Re(t),n=e&&e.componentOptions;if(n){var r=Pr(n),o=this.include,i=this.exclude;if(o&&(!r||!Dr(o,r))||i&&r&&Dr(i,r))return e;var a=this.cache,s=this.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;a[c]?(e.componentInstance=a[c].componentInstance,y(s,c),s.push(c)):(this.vnodeToCache=e,this.keyToCache=c),e.data.keepAlive=!0}return e||t&&t[0]}},Fr={KeepAlive:Rr};!function(t){var e={get:function(){return B}};Object.defineProperty(t,"config",e),t.util={warn:gr,extend:A,mergeOptions:Cr,defineReactive:Et},t.set=Nt,t.delete=Pt,t.nextTick=En,t.observable=function(t){return jt(t),t},t.options=Object.create(null),F.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,A(t.options.components,Fr),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=T(arguments,1);return n.unshift(this),a(t.install)?t.install.apply(t,n):a(t)&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=Cr(this.options,t),this}}(t),Nr(t),function(t){F.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&a(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}(t)}(Er),Object.defineProperty(Er.prototype,"$isServer",{get:ot}),Object.defineProperty(Er.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Er,"FunctionalRenderContext",{value:ur}),Er.version=Kn;var Hr=h("style,class"),Br=h("input,textarea,option,select,progress"),Ur=function(t,e,n){return"value"===n&&Br(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},zr=h("contenteditable,draggable,spellcheck"),Vr=h("events,caret,typing,plaintext-only"),Kr=function(t,e){return Gr(e)||"false"===e?"false":"contenteditable"===t&&Vr(e)?e:"true"},Jr=h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),qr="http://www.w3.org/1999/xlink",Wr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Zr=function(t){return Wr(t)?t.slice(6,t.length):""},Gr=function(t){return null==t||!1===t};function Xr(t){for(var e=t.data,n=t,o=t;r(o.componentInstance);)(o=o.componentInstance._vnode)&&o.data&&(e=Yr(o.data,e));for(;r(n=n.parent);)n&&n.data&&(e=Yr(e,n.data));return function(t,e){if(r(t)||r(e))return Qr(t,to(e));return""}(e.staticClass,e.class)}function Yr(t,e){return{staticClass:Qr(t.staticClass,e.staticClass),class:r(t.class)?[t.class,e.class]:e.class}}function Qr(t,e){return t?e?t+" "+e:t:e||""}function to(t){return Array.isArray(t)?function(t){for(var e,n="",o=0,i=t.length;o<i;o++)r(e=to(t[o]))&&""!==e&&(n&&(n+=" "),n+=e);return n}(t):s(t)?function(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}var eo={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},no=h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ro=h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),oo=function(t){return no(t)||ro(t)};function io(t){return ro(t)?"svg":"math"===t?"math":void 0}var ao=Object.create(null);var so=h("text,number,password,search,email,tel,url");function co(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}var uo=Object.freeze({__proto__:null,createElement:function(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(t,e){return document.createElementNS(eo[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setStyleScope:function(t,e){t.setAttribute(e,"")}}),lo={create:function(t,e){fo(e)},update:function(t,e){t.data.ref!==e.data.ref&&(fo(t,!0),fo(e))},destroy:function(t){fo(t,!0)}};function fo(t,n){var o=t.data.ref;if(r(o)){var i=t.context,s=t.componentInstance||t.elm,c=n?null:s,u=n?void 0:s;if(a(o))_n(o,i,[c],i,"template ref function");else{var l=t.data.refInFor,f="string"==typeof o||"number"==typeof o,d=Bt(o),p=i.$refs;if(f||d)if(l){var v=f?p[o]:o.value;n?e(v)&&y(v,s):e(v)?v.includes(s)||v.push(s):f?(p[o]=[s],po(i,o,p[o])):o.value=[s]}else if(f){if(n&&p[o]!==s)return;p[o]=u,po(i,o,c)}else if(d){if(n&&o.value!==s)return;o.value=c}}}}function po(t,e,n){var r=t._setupState;r&&b(r,e)&&(Bt(r[e])?r[e].value=n:r[e]=n)}var vo=new ft("",{},[]),ho=["create","activate","update","remove","destroy"];function mo(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&r(t.data)===r(e.data)&&function(t,e){if("input"!==t.tag)return!0;var n,o=r(n=t.data)&&r(n=n.attrs)&&n.type,i=r(n=e.data)&&r(n=n.attrs)&&n.type;return o===i||so(o)&&so(i)}(t,e)||o(t.isAsyncPlaceholder)&&n(e.asyncFactory.error))}function go(t,e,n){var o,i,a={};for(o=e;o<=n;++o)r(i=t[o].key)&&(a[i]=o);return a}var yo={create:_o,update:_o,destroy:function(t){_o(t,vo)}};function _o(t,e){(t.data.directives||e.data.directives)&&function(t,e){var n,r,o,i=t===vo,a=e===vo,s=$o(t.data.directives,t.context),c=$o(e.data.directives,e.context),u=[],l=[];for(n in c)r=s[n],o=c[n],r?(o.oldValue=r.value,o.oldArg=r.arg,xo(o,"update",e,t),o.def&&o.def.componentUpdated&&l.push(o)):(xo(o,"bind",e,t),o.def&&o.def.inserted&&u.push(o));if(u.length){var f=function(){for(var n=0;n<u.length;n++)xo(u[n],"inserted",e,t)};i?Qt(e,"insert",f):f()}l.length&&Qt(e,"postpatch",(function(){for(var n=0;n<l.length;n++)xo(l[n],"componentUpdated",e,t)}));if(!i)for(n in s)c[n]||xo(s[n],"unbind",t,t,a)}(t,e)}var bo=Object.create(null);function $o(t,e){var n,r,o=Object.create(null);if(!t)return o;for(n=0;n<t.length;n++){if((r=t[n]).modifiers||(r.modifiers=bo),o[wo(r)]=r,e._setupState&&e._setupState.__sfc){var i=r.def||kr(e,"_setupState","v-"+r.name);r.def="function"==typeof i?{bind:i,update:i}:i}r.def=r.def||kr(e.$options,"directives",r.name)}return o}function wo(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function xo(t,e,n,r,o){var i=t.def&&t.def[e];if(i)try{i(n.elm,t,n,r,o)}catch(r){yn(r,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var Co=[lo,yo];function ko(t,e){var i=e.componentOptions;if(!(r(i)&&!1===i.Ctor.options.inheritAttrs||n(t.data.attrs)&&n(e.data.attrs))){var a,s,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(a in(r(l.__ob__)||o(l._v_attr_proxy))&&(l=e.data.attrs=A({},l)),l)s=l[a],u[a]!==s&&So(c,a,s,e.data.pre);for(a in(Z||X)&&l.value!==u.value&&So(c,"value",l.value),u)n(l[a])&&(Wr(a)?c.removeAttributeNS(qr,Zr(a)):zr(a)||c.removeAttribute(a))}}function So(t,e,n,r){r||t.tagName.indexOf("-")>-1?Oo(t,e,n):Jr(e)?Gr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):zr(e)?t.setAttribute(e,Kr(e,n)):Wr(e)?Gr(n)?t.removeAttributeNS(qr,Zr(e)):t.setAttributeNS(qr,e,n):Oo(t,e,n)}function Oo(t,e,n){if(Gr(n))t.removeAttribute(e);else{if(Z&&!G&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var To={create:ko,update:ko};function Ao(t,e){var o=e.elm,i=e.data,a=t.data;if(!(n(i.staticClass)&&n(i.class)&&(n(a)||n(a.staticClass)&&n(a.class)))){var s=Xr(e),c=o._transitionClasses;r(c)&&(s=Qr(s,to(c))),s!==o._prevClass&&(o.setAttribute("class",s),o._prevClass=s)}}var jo,Eo,No,Po,Do,Mo,Io={create:Ao,update:Ao},Lo=/[\w).+\-_$\]]/;function Ro(t){var e,n,r,o,i,a=!1,s=!1,c=!1,u=!1,l=0,f=0,d=0,p=0;for(r=0;r<t.length;r++)if(n=e,e=t.charCodeAt(r),a)39===e&&92!==n&&(a=!1);else if(s)34===e&&92!==n&&(s=!1);else if(c)96===e&&92!==n&&(c=!1);else if(u)47===e&&92!==n&&(u=!1);else if(124!==e||124===t.charCodeAt(r+1)||124===t.charCodeAt(r-1)||l||f||d){switch(e){case 34:s=!0;break;case 39:a=!0;break;case 96:c=!0;break;case 40:d++;break;case 41:d--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===e){for(var v=r-1,h=void 0;v>=0&&" "===(h=t.charAt(v));v--);h&&Lo.test(h)||(u=!0)}}else void 0===o?(p=r+1,o=t.slice(0,r).trim()):m();function m(){(i||(i=[])).push(t.slice(p,r).trim()),p=r+1}if(void 0===o?o=t.slice(0,r).trim():0!==p&&m(),i)for(r=0;r<i.length;r++)o=Fo(o,i[r]);return o}function Fo(t,e){var n=e.indexOf("(");if(n<0)return'_f("'.concat(e,'")(').concat(t,")");var r=e.slice(0,n),o=e.slice(n+1);return'_f("'.concat(r,'")(').concat(t).concat(")"!==o?","+o:o)}function Ho(t,e){console.error("[Vue compiler]: ".concat(t))}function Bo(t,e){return t?t.map((function(t){return t[e]})).filter((function(t){return t})):[]}function Uo(t,e,n,r,o){(t.props||(t.props=[])).push(Xo({name:e,value:n,dynamic:o},r)),t.plain=!1}function zo(t,e,n,r,o){(o?t.dynamicAttrs||(t.dynamicAttrs=[]):t.attrs||(t.attrs=[])).push(Xo({name:e,value:n,dynamic:o},r)),t.plain=!1}function Vo(t,e,n,r){t.attrsMap[e]=n,t.attrsList.push(Xo({name:e,value:n},r))}function Ko(t,e,n,r,o,i,a,s){(t.directives||(t.directives=[])).push(Xo({name:e,rawName:n,value:r,arg:o,isDynamicArg:i,modifiers:a},s)),t.plain=!1}function Jo(t,e,n){return n?"_p(".concat(e,',"').concat(t,'")'):t+e}function qo(e,n,r,o,i,a,s,c){var u;(o=o||t).right?c?n="(".concat(n,")==='click'?'contextmenu':(").concat(n,")"):"click"===n&&(n="contextmenu",delete o.right):o.middle&&(c?n="(".concat(n,")==='click'?'mouseup':(").concat(n,")"):"click"===n&&(n="mouseup")),o.capture&&(delete o.capture,n=Jo("!",n,c)),o.once&&(delete o.once,n=Jo("~",n,c)),o.passive&&(delete o.passive,n=Jo("&",n,c)),o.native?(delete o.native,u=e.nativeEvents||(e.nativeEvents={})):u=e.events||(e.events={});var l=Xo({value:r.trim(),dynamic:c},s);o!==t&&(l.modifiers=o);var f=u[n];Array.isArray(f)?i?f.unshift(l):f.push(l):u[n]=f?i?[l,f]:[f,l]:l,e.plain=!1}function Wo(t,e,n){var r=Zo(t,":"+e)||Zo(t,"v-bind:"+e);if(null!=r)return Ro(r);if(!1!==n){var o=Zo(t,e);if(null!=o)return JSON.stringify(o)}}function Zo(t,e,n){var r;if(null!=(r=t.attrsMap[e]))for(var o=t.attrsList,i=0,a=o.length;i<a;i++)if(o[i].name===e){o.splice(i,1);break}return n&&delete t.attrsMap[e],r}function Go(t,e){for(var n=t.attrsList,r=0,o=n.length;r<o;r++){var i=n[r];if(e.test(i.name))return n.splice(r,1),i}}function Xo(t,e){return e&&(null!=e.start&&(t.start=e.start),null!=e.end&&(t.end=e.end)),t}function Yo(t,e,n){var r=n||{},o=r.number,i="$$v",a=i;r.trim&&(a="(typeof ".concat(i," === 'string'")+"? ".concat(i,".trim()")+": ".concat(i,")")),o&&(a="_n(".concat(a,")"));var s=Qo(e,a);t.model={value:"(".concat(e,")"),expression:JSON.stringify(e),callback:"function (".concat(i,") {").concat(s,"}")}}function Qo(t,e){var n=function(t){if(t=t.trim(),jo=t.length,t.indexOf("[")<0||t.lastIndexOf("]")<jo-1)return(Po=t.lastIndexOf("."))>-1?{exp:t.slice(0,Po),key:'"'+t.slice(Po+1)+'"'}:{exp:t,key:null};Eo=t,Po=Do=Mo=0;for(;!ei();)ni(No=ti())?oi(No):91===No&&ri(No);return{exp:t.slice(0,Do),key:t.slice(Do+1,Mo)}}(t);return null===n.key?"".concat(t,"=").concat(e):"$set(".concat(n.exp,", ").concat(n.key,", ").concat(e,")")}function ti(){return Eo.charCodeAt(++Po)}function ei(){return Po>=jo}function ni(t){return 34===t||39===t}function ri(t){var e=1;for(Do=Po;!ei();)if(ni(t=ti()))oi(t);else if(91===t&&e++,93===t&&e--,0===e){Mo=Po;break}}function oi(t){for(var e=t;!ei()&&(t=ti())!==e;);}var ii,ai="__r",si="__c";function ci(t,e,n){var r=ii;return function o(){null!==e.apply(null,arguments)&&fi(t,o,n,r)}}var ui=xn&&!(tt&&Number(tt[1])<=53);function li(t,e,n,r){if(ui){var o=rn,i=e;e=i._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=o||t.timeStamp<=0||t.target.ownerDocument!==document)return i.apply(this,arguments)}}ii.addEventListener(t,e,nt?{capture:n,passive:r}:n)}function fi(t,e,n,r){(r||ii).removeEventListener(t,e._wrapper||e,n)}function di(t,e){if(!n(t.data.on)||!n(e.data.on)){var o=e.data.on||{},i=t.data.on||{};ii=e.elm||t.elm,function(t){if(r(t[ai])){var e=Z?"change":"input";t[e]=[].concat(t[ai],t[e]||[]),delete t[ai]}r(t[si])&&(t.change=[].concat(t[si],t.change||[]),delete t[si])}(o),Yt(o,i,li,fi,ci,e.context),ii=void 0}}var pi,vi={create:di,update:di,destroy:function(t){return di(t,vo)}};function hi(t,e){if(!n(t.data.domProps)||!n(e.data.domProps)){var i,a,s=e.elm,c=t.data.domProps||{},u=e.data.domProps||{};for(i in(r(u.__ob__)||o(u._v_attr_proxy))&&(u=e.data.domProps=A({},u)),c)i in u||(s[i]="");for(i in u){if(a=u[i],"textContent"===i||"innerHTML"===i){if(e.children&&(e.children.length=0),a===c[i])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===i&&"PROGRESS"!==s.tagName){s._value=a;var l=n(a)?"":String(a);mi(s,l)&&(s.value=l)}else if("innerHTML"===i&&ro(s.tagName)&&n(s.innerHTML)){(pi=pi||document.createElement("div")).innerHTML="<svg>".concat(a,"</svg>");for(var f=pi.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;f.firstChild;)s.appendChild(f.firstChild)}else if(a!==c[i])try{s[i]=a}catch(t){}}}}function mi(t,e){return!t.composing&&("OPTION"===t.tagName||function(t,e){var n=!0;try{n=document.activeElement!==t}catch(t){}return n&&t.value!==e}(t,e)||function(t,e){var n=t.value,o=t._vModifiers;if(r(o)){if(o.number)return v(n)!==v(e);if(o.trim)return n.trim()!==e.trim()}return n!==e}(t,e))}var gi={create:hi,update:hi},yi=$((function(t){var e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach((function(t){if(t){var r=t.split(n);r.length>1&&(e[r[0].trim()]=r[1].trim())}})),e}));function _i(t){var e=bi(t.style);return t.staticStyle?A(t.staticStyle,e):e}function bi(t){return Array.isArray(t)?j(t):"string"==typeof t?yi(t):t}var $i,wi=/^--/,xi=/\s*!important$/,Ci=function(t,e,n){if(wi.test(e))t.style.setProperty(e,n);else if(xi.test(n))t.style.setProperty(S(e),n.replace(xi,""),"important");else{var r=Si(e);if(Array.isArray(n))for(var o=0,i=n.length;o<i;o++)t.style[r]=n[o];else t.style[r]=n}},ki=["Webkit","Moz","ms"],Si=$((function(t){if($i=$i||document.createElement("div").style,"filter"!==(t=x(t))&&t in $i)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<ki.length;n++){var r=ki[n]+e;if(r in $i)return r}}));function Oi(t,e){var o=e.data,i=t.data;if(!(n(o.staticStyle)&&n(o.style)&&n(i.staticStyle)&&n(i.style))){var a,s,c=e.elm,u=i.staticStyle,l=i.normalizedStyle||i.style||{},f=u||l,d=bi(e.data.style)||{};e.data.normalizedStyle=r(d.__ob__)?A({},d):d;var p=function(t,e){var n,r={};if(e)for(var o=t;o.componentInstance;)(o=o.componentInstance._vnode)&&o.data&&(n=_i(o.data))&&A(r,n);(n=_i(t.data))&&A(r,n);for(var i=t;i=i.parent;)i.data&&(n=_i(i.data))&&A(r,n);return r}(e,!0);for(s in f)n(p[s])&&Ci(c,s,"");for(s in p)a=p[s],Ci(c,s,null==a?"":a)}}var Ti={create:Oi,update:Oi},Ai=/\s+/;function ji(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ai).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ei(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ai).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function Ni(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&A(e,Pi(t.name||"v")),A(e,t),e}return"string"==typeof t?Pi(t):void 0}}var Pi=$((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),Di=q&&!G,Mi="transition",Ii="animation",Li="transition",Ri="transitionend",Fi="animation",Hi="animationend";Di&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Li="WebkitTransition",Ri="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Fi="WebkitAnimation",Hi="webkitAnimationEnd"));var Bi=q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ui(t){Bi((function(){Bi(t)}))}function zi(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),ji(t,e))}function Vi(t,e){t._transitionClasses&&y(t._transitionClasses,e),Ei(t,e)}function Ki(t,e,n){var r=qi(t,e),o=r.type,i=r.timeout,a=r.propCount;if(!o)return n();var s=o===Mi?Ri:Hi,c=0,u=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++c>=a&&u()};setTimeout((function(){c<a&&u()}),i+1),t.addEventListener(s,l)}var Ji=/\b(transform|all)(,|$)/;function qi(t,e){var n,r=window.getComputedStyle(t),o=(r[Li+"Delay"]||"").split(", "),i=(r[Li+"Duration"]||"").split(", "),a=Wi(o,i),s=(r[Fi+"Delay"]||"").split(", "),c=(r[Fi+"Duration"]||"").split(", "),u=Wi(s,c),l=0,f=0;return e===Mi?a>0&&(n=Mi,l=a,f=i.length):e===Ii?u>0&&(n=Ii,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?Mi:Ii:null)?n===Mi?i.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===Mi&&Ji.test(r[Li+"Property"])}}function Wi(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Zi(e)+Zi(t[n])})))}function Zi(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Gi(t,e){var o=t.elm;r(o._leaveCb)&&(o._leaveCb.cancelled=!0,o._leaveCb());var i=Ni(t.data.transition);if(!n(i)&&!r(o._enterCb)&&1===o.nodeType){for(var c=i.css,u=i.type,l=i.enterClass,f=i.enterToClass,d=i.enterActiveClass,p=i.appearClass,h=i.appearToClass,m=i.appearActiveClass,g=i.beforeEnter,y=i.enter,_=i.afterEnter,b=i.enterCancelled,$=i.beforeAppear,w=i.appear,x=i.afterAppear,C=i.appearCancelled,k=i.duration,S=Ke,O=Ke.$vnode;O&&O.parent;)S=O.context,O=O.parent;var T=!S._isMounted||!t.isRootInsert;if(!T||w||""===w){var A=T&&p?p:l,j=T&&m?m:d,E=T&&h?h:f,N=T&&$||g,P=T&&a(w)?w:y,D=T&&x||_,M=T&&C||b,L=v(s(k)?k.enter:k),R=!1!==c&&!G,F=Qi(P),H=o._enterCb=I((function(){R&&(Vi(o,E),Vi(o,j)),H.cancelled?(R&&Vi(o,A),M&&M(o)):D&&D(o),o._enterCb=null}));t.data.show||Qt(t,"insert",(function(){var e=o.parentNode,n=e&&e._pending&&e._pending[t.key];n&&n.tag===t.tag&&n.elm._leaveCb&&n.elm._leaveCb(),P&&P(o,H)})),N&&N(o),R&&(zi(o,A),zi(o,j),Ui((function(){Vi(o,A),H.cancelled||(zi(o,E),F||(Yi(L)?setTimeout(H,L):Ki(o,u,H)))}))),t.data.show&&(e&&e(),P&&P(o,H)),R||F||H()}}}function Xi(t,e){var o=t.elm;r(o._enterCb)&&(o._enterCb.cancelled=!0,o._enterCb());var i=Ni(t.data.transition);if(n(i)||1!==o.nodeType)return e();if(!r(o._leaveCb)){var a=i.css,c=i.type,u=i.leaveClass,l=i.leaveToClass,f=i.leaveActiveClass,d=i.beforeLeave,p=i.leave,h=i.afterLeave,m=i.leaveCancelled,g=i.delayLeave,y=i.duration,_=!1!==a&&!G,b=Qi(p),$=v(s(y)?y.leave:y),w=o._leaveCb=I((function(){o.parentNode&&o.parentNode._pending&&(o.parentNode._pending[t.key]=null),_&&(Vi(o,l),Vi(o,f)),w.cancelled?(_&&Vi(o,u),m&&m(o)):(e(),h&&h(o)),o._leaveCb=null}));g?g(x):x()}function x(){w.cancelled||(!t.data.show&&o.parentNode&&((o.parentNode._pending||(o.parentNode._pending={}))[t.key]=t),d&&d(o),_&&(zi(o,u),zi(o,f),Ui((function(){Vi(o,u),w.cancelled||(zi(o,l),b||(Yi($)?setTimeout(w,$):Ki(o,c,w)))}))),p&&p(o,w),_||b||w())}}function Yi(t){return"number"==typeof t&&!isNaN(t)}function Qi(t){if(n(t))return!1;var e=t.fns;return r(e)?Qi(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function ta(t,e){!0!==e.data.show&&Gi(e)}var ea=function(t){var a,s,c={},u=t.modules,l=t.nodeOps;for(a=0;a<ho.length;++a)for(c[ho[a]]=[],s=0;s<u.length;++s)r(u[s][ho[a]])&&c[ho[a]].push(u[s][ho[a]]);function f(t){var e=l.parentNode(t);r(e)&&l.removeChild(e,t)}function d(t,e,n,i,a,s,u){if(r(t.elm)&&r(s)&&(t=s[u]=vt(t)),t.isRootInsert=!a,!function(t,e,n,i){var a=t.data;if(r(a)){var s=r(t.componentInstance)&&a.keepAlive;if(r(a=a.hook)&&r(a=a.init)&&a(t,!1),r(t.componentInstance))return p(t,e),v(n,t.elm,i),o(s)&&function(t,e,n,o){var i,a=t;for(;a.componentInstance;)if(r(i=(a=a.componentInstance._vnode).data)&&r(i=i.transition)){for(i=0;i<c.activate.length;++i)c.activate[i](vo,a);e.push(a);break}v(n,t.elm,o)}(t,e,n,i),!0}}(t,e,n,i)){var f=t.data,d=t.children,h=t.tag;r(h)?(t.elm=t.ns?l.createElementNS(t.ns,h):l.createElement(h,t),_(t),m(t,d,e),r(f)&&y(t,e),v(n,t.elm,i)):o(t.isComment)?(t.elm=l.createComment(t.text),v(n,t.elm,i)):(t.elm=l.createTextNode(t.text),v(n,t.elm,i))}}function p(t,e){r(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,g(t)?(y(t,e),_(t)):(fo(t),e.push(t))}function v(t,e,n){r(t)&&(r(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function m(t,n,r){if(e(n))for(var o=0;o<n.length;++o)d(n[o],r,t.elm,null,!0,n,o);else i(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function g(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return r(t.tag)}function y(t,e){for(var n=0;n<c.create.length;++n)c.create[n](vo,t);r(a=t.data.hook)&&(r(a.create)&&a.create(vo,t),r(a.insert)&&e.push(t))}function _(t){var e;if(r(e=t.fnScopeId))l.setStyleScope(t.elm,e);else for(var n=t;n;)r(e=n.context)&&r(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent;r(e=Ke)&&e!==t.context&&e!==t.fnContext&&r(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function b(t,e,n,r,o,i){for(;r<=o;++r)d(n[r],i,t,e,!1,n,r)}function $(t){var e,n,o=t.data;if(r(o))for(r(e=o.hook)&&r(e=e.destroy)&&e(t),e=0;e<c.destroy.length;++e)c.destroy[e](t);if(r(e=t.children))for(n=0;n<t.children.length;++n)$(t.children[n])}function w(t,e,n){for(;e<=n;++e){var o=t[e];r(o)&&(r(o.tag)?(x(o),$(o)):f(o.elm))}}function x(t,e){if(r(e)||r(t.data)){var n,o=c.remove.length+1;for(r(e)?e.listeners+=o:e=function(t,e){function n(){0==--n.listeners&&f(t)}return n.listeners=e,n}(t.elm,o),r(n=t.componentInstance)&&r(n=n._vnode)&&r(n.data)&&x(n,e),n=0;n<c.remove.length;++n)c.remove[n](t,e);r(n=t.data.hook)&&r(n=n.remove)?n(t,e):e()}else f(t.elm)}function C(t,e,n,o){for(var i=n;i<o;i++){var a=e[i];if(r(a)&&mo(t,a))return i}}function k(t,e,i,a,s,u){if(t!==e){r(e.elm)&&r(a)&&(e=a[s]=vt(e));var f=e.elm=t.elm;if(o(t.isAsyncPlaceholder))r(e.asyncFactory.resolved)?T(t.elm,e,i):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var p,v=e.data;r(v)&&r(p=v.hook)&&r(p=p.prepatch)&&p(t,e);var h=t.children,m=e.children;if(r(v)&&g(e)){for(p=0;p<c.update.length;++p)c.update[p](t,e);r(p=v.hook)&&r(p=p.update)&&p(t,e)}n(e.text)?r(h)&&r(m)?h!==m&&function(t,e,o,i,a){for(var s,c,u,f=0,p=0,v=e.length-1,h=e[0],m=e[v],g=o.length-1,y=o[0],_=o[g],$=!a;f<=v&&p<=g;)n(h)?h=e[++f]:n(m)?m=e[--v]:mo(h,y)?(k(h,y,i,o,p),h=e[++f],y=o[++p]):mo(m,_)?(k(m,_,i,o,g),m=e[--v],_=o[--g]):mo(h,_)?(k(h,_,i,o,g),$&&l.insertBefore(t,h.elm,l.nextSibling(m.elm)),h=e[++f],_=o[--g]):mo(m,y)?(k(m,y,i,o,p),$&&l.insertBefore(t,m.elm,h.elm),m=e[--v],y=o[++p]):(n(s)&&(s=go(e,f,v)),n(c=r(y.key)?s[y.key]:C(y,e,f,v))?d(y,i,t,h.elm,!1,o,p):mo(u=e[c],y)?(k(u,y,i,o,p),e[c]=void 0,$&&l.insertBefore(t,u.elm,h.elm)):d(y,i,t,h.elm,!1,o,p),y=o[++p]);f>v?b(t,n(o[g+1])?null:o[g+1].elm,o,p,g,i):p>g&&w(e,f,v)}(f,h,m,i,u):r(m)?(r(t.text)&&l.setTextContent(f,""),b(f,null,m,0,m.length-1,i)):r(h)?w(h,0,h.length-1):r(t.text)&&l.setTextContent(f,""):t.text!==e.text&&l.setTextContent(f,e.text),r(v)&&r(p=v.hook)&&r(p=p.postpatch)&&p(t,e)}}}function S(t,e,n){if(o(n)&&r(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var O=h("attrs,class,staticClass,staticStyle,key");function T(t,e,n,i){var a,s=e.tag,c=e.data,u=e.children;if(i=i||c&&c.pre,e.elm=t,o(e.isComment)&&r(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(r(c)&&(r(a=c.hook)&&r(a=a.init)&&a(e,!0),r(a=e.componentInstance)))return p(e,n),!0;if(r(s)){if(r(u))if(t.hasChildNodes())if(r(a=c)&&r(a=a.domProps)&&r(a=a.innerHTML)){if(a!==t.innerHTML)return!1}else{for(var l=!0,f=t.firstChild,d=0;d<u.length;d++){if(!f||!T(f,u[d],n,i)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else m(e,u,n);if(r(c)){var v=!1;for(var h in c)if(!O(h)){v=!0,y(e,n);break}!v&&c.class&&Wn(c.class)}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,i,a){if(!n(e)){var s,u=!1,f=[];if(n(t))u=!0,d(e,f);else{var p=r(t.nodeType);if(!p&&mo(t,e))k(t,e,f,null,null,a);else{if(p){if(1===t.nodeType&&t.hasAttribute(R)&&(t.removeAttribute(R),i=!0),o(i)&&T(t,e,f))return S(e,f,!0),t;s=t,t=new ft(l.tagName(s).toLowerCase(),{},[],void 0,s)}var v=t.elm,h=l.parentNode(v);if(d(e,f,v._leaveCb?null:h,l.nextSibling(v)),r(e.parent))for(var m=e.parent,y=g(e);m;){for(var _=0;_<c.destroy.length;++_)c.destroy[_](m);if(m.elm=e.elm,y){for(var b=0;b<c.create.length;++b)c.create[b](vo,m);var x=m.data.hook.insert;if(x.merged)for(var C=x.fns.slice(1),O=0;O<C.length;O++)C[O]()}else fo(m);m=m.parent}r(h)?w([t],0,0):r(t.tag)&&$(t)}}return S(e,f,u),e.elm}r(t)&&$(t)}}({nodeOps:uo,modules:[To,Io,vi,gi,Ti,q?{create:ta,activate:ta,remove:function(t,e){!0!==t.data.show?Xi(t,e):e()}}:{}].concat(Co)});G&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&ua(t,"input")}));var na={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Qt(n,"postpatch",(function(){na.componentUpdated(t,e,n)})):ra(t,e,n.context),t._vOptions=[].map.call(t.options,aa)):("textarea"===n.tag||so(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",sa),t.addEventListener("compositionend",ca),t.addEventListener("change",ca),G&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){ra(t,e,n.context);var r=t._vOptions,o=t._vOptions=[].map.call(t.options,aa);if(o.some((function(t,e){return!D(t,r[e])})))(t.multiple?e.value.some((function(t){return ia(t,o)})):e.value!==e.oldValue&&ia(e.value,o))&&ua(t,"change")}}};function ra(t,e,n){oa(t,e),(Z||X)&&setTimeout((function(){oa(t,e)}),0)}function oa(t,e,n){var r=e.value,o=t.multiple;if(!o||Array.isArray(r)){for(var i,a,s=0,c=t.options.length;s<c;s++)if(a=t.options[s],o)i=M(r,aa(a))>-1,a.selected!==i&&(a.selected=i);else if(D(aa(a),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));o||(t.selectedIndex=-1)}}function ia(t,e){return e.every((function(e){return!D(e,t)}))}function aa(t){return"_value"in t?t._value:t.value}function sa(t){t.target.composing=!0}function ca(t){t.target.composing&&(t.target.composing=!1,ua(t.target,"input"))}function ua(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function la(t){return!t.componentInstance||t.data&&t.data.transition?t:la(t.componentInstance._vnode)}var fa={bind:function(t,e,n){var r=e.value,o=(n=la(n)).data&&n.data.transition,i=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&o?(n.data.show=!0,Gi(n,(function(){t.style.display=i}))):t.style.display=r?i:"none"},update:function(t,e,n){var r=e.value;!r!=!e.oldValue&&((n=la(n)).data&&n.data.transition?(n.data.show=!0,r?Gi(n,(function(){t.style.display=t.__vOriginalDisplay})):Xi(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none")},unbind:function(t,e,n,r,o){o||(t.style.display=t.__vOriginalDisplay)}},da={model:na,show:fa},pa={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function va(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?va(Re(e.children)):t}function ha(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var o=n._parentListeners;for(var r in o)e[x(r)]=o[r];return e}function ma(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}var ga=function(t){return t.tag||ke(t)},ya=function(t){return"show"===t.name},_a={name:"transition",props:pa,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(ga)).length){var r=this.mode,o=n[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return!0}(this.$vnode))return o;var a=va(o);if(!a)return o;if(this._leaving)return ma(t,o);var s="__transition-".concat(this._uid,"-");a.key=null==a.key?a.isComment?s+"comment":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=ha(this),u=this._vnode,l=va(u);if(a.data.directives&&a.data.directives.some(ya)&&(a.data.show=!0),l&&l.data&&!function(t,e){return e.key===t.key&&e.tag===t.tag}(a,l)&&!ke(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=A({},c);if("out-in"===r)return this._leaving=!0,Qt(f,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ma(t,o);if("in-out"===r){if(ke(a))return u;var d,p=function(){d()};Qt(c,"afterEnter",p),Qt(c,"enterCancelled",p),Qt(f,"delayLeave",(function(t){d=t}))}}return o}}},ba=A({tag:String,moveClass:String},pa);delete ba.mode;var $a={props:ba,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var o=Je(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,o(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,o=this.$slots.default||[],i=this.children=[],a=ha(this),s=0;s<o.length;s++){(l=o[s]).tag&&null!=l.key&&0!==String(l.key).indexOf("__vlist")&&(i.push(l),n[l.key]=l,(l.data||(l.data={})).transition=a)}if(r){var c=[],u=[];for(s=0;s<r.length;s++){var l;(l=r[s]).data.transition=a,l.data.pos=l.elm.getBoundingClientRect(),n[l.key]?c.push(l):u.push(l)}this.kept=t(e,null,c),this.removed=u}return t(e,null,i)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(wa),t.forEach(xa),t.forEach(Ca),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;zi(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ri,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ri,t),n._moveCb=null,Vi(n,e))})}})))},methods:{hasMove:function(t,e){if(!Di)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ei(n,t)})),ji(n,e),n.style.display="none",this.$el.appendChild(n);var r=qi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function wa(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function xa(t){t.data.newPos=t.elm.getBoundingClientRect()}function Ca(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,o=e.top-n.top;if(r||o){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate(".concat(r,"px,").concat(o,"px)"),i.transitionDuration="0s"}}var ka={Transition:_a,TransitionGroup:$a};Er.config.mustUseProp=Ur,Er.config.isReservedTag=oo,Er.config.isReservedAttr=Hr,Er.config.getTagNamespace=io,Er.config.isUnknownElement=function(t){if(!q)return!0;if(oo(t))return!1;if(t=t.toLowerCase(),null!=ao[t])return ao[t];var e=document.createElement(t);return t.indexOf("-")>-1?ao[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ao[t]=/HTMLUnknownElement/.test(e.toString())},A(Er.options.directives,da),A(Er.options.components,ka),Er.prototype.__patch__=q?ea:E,Er.prototype.$mount=function(t,e){return function(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=dt),Ge(t,"beforeMount"),r=function(){t._update(t._render(),n)},new Xn(t,r,E,{before:function(){t._isMounted&&!t._isDestroyed&&Ge(t,"beforeUpdate")}},!0),n=!1;var o=t._preWatchers;if(o)for(var i=0;i<o.length;i++)o[i].run();return null==t.$vnode&&(t._isMounted=!0,Ge(t,"mounted")),t}(this,t=t&&q?co(t):void 0,e)},q&&setTimeout((function(){B.devtools&&it&&it.emit("init",Er)}),0);var Sa=/\{\{((?:.|\r?\n)+?)\}\}/g,Oa=/[-.*+?^${}()|[\]\/\\]/g,Ta=$((function(t){var e=t[0].replace(Oa,"\\$&"),n=t[1].replace(Oa,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")}));var Aa={staticKeys:["staticClass"],transformNode:function(t,e){e.warn;var n=Zo(t,"class");n&&(t.staticClass=JSON.stringify(n.replace(/\s+/g," ").trim()));var r=Wo(t,"class",!1);r&&(t.classBinding=r)},genData:function(t){var e="";return t.staticClass&&(e+="staticClass:".concat(t.staticClass,",")),t.classBinding&&(e+="class:".concat(t.classBinding,",")),e}};var ja,Ea={staticKeys:["staticStyle"],transformNode:function(t,e){e.warn;var n=Zo(t,"style");n&&(t.staticStyle=JSON.stringify(yi(n)));var r=Wo(t,"style",!1);r&&(t.styleBinding=r)},genData:function(t){var e="";return t.staticStyle&&(e+="staticStyle:".concat(t.staticStyle,",")),t.styleBinding&&(e+="style:(".concat(t.styleBinding,"),")),e}},Na=function(t){return(ja=ja||document.createElement("div")).innerHTML=t,ja.textContent},Pa=h("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Da=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Ma=h("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Ia=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,La=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Ra="[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat(U.source,"]*"),Fa="((?:".concat(Ra,"\\:)?").concat(Ra,")"),Ha=new RegExp("^<".concat(Fa)),Ba=/^\s*(\/?)>/,Ua=new RegExp("^<\\/".concat(Fa,"[^>]*>")),za=/^<!DOCTYPE [^>]+>/i,Va=/^<!\--/,Ka=/^<!\[/,Ja=h("script,style,textarea",!0),qa={},Wa={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},Za=/&(?:lt|gt|quot|amp|#39);/g,Ga=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Xa=h("pre,textarea",!0),Ya=function(t,e){return t&&Xa(t)&&"\n"===e[0]};function Qa(t,e){var n=e?Ga:Za;return t.replace(n,(function(t){return Wa[t]}))}function ts(t,e){for(var n,r,o=[],i=e.expectHTML,a=e.isUnaryTag||N,s=e.canBeLeftOpenTag||N,c=0,u=function(){if(n=t,r&&Ja(r)){var u=0,d=r.toLowerCase(),p=qa[d]||(qa[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i"));w=t.replace(p,(function(t,n,r){return u=r.length,Ja(d)||"noscript"===d||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Ya(d,n)&&(n=n.slice(1)),e.chars&&e.chars(n),""}));c+=t.length-w.length,t=w,f(d,c-u,c)}else{var v=t.indexOf("<");if(0===v){if(Va.test(t)){var h=t.indexOf("--\x3e");if(h>=0)return e.shouldKeepComment&&e.comment&&e.comment(t.substring(4,h),c,c+h+3),l(h+3),"continue"}if(Ka.test(t)){var m=t.indexOf("]>");if(m>=0)return l(m+2),"continue"}var g=t.match(za);if(g)return l(g[0].length),"continue";var y=t.match(Ua);if(y){var _=c;return l(y[0].length),f(y[1],_,c),"continue"}var b=function(){var e=t.match(Ha);if(e){var n={tagName:e[1],attrs:[],start:c};l(e[0].length);for(var r=void 0,o=void 0;!(r=t.match(Ba))&&(o=t.match(La)||t.match(Ia));)o.start=c,l(o[0].length),o.end=c,n.attrs.push(o);if(r)return n.unarySlash=r[1],l(r[0].length),n.end=c,n}}();if(b)return function(t){var n=t.tagName,c=t.unarySlash;i&&("p"===r&&Ma(n)&&f(r),s(n)&&r===n&&f(n));for(var u=a(n)||!!c,l=t.attrs.length,d=new Array(l),p=0;p<l;p++){var v=t.attrs[p],h=v[3]||v[4]||v[5]||"",m="a"===n&&"href"===v[1]?e.shouldDecodeNewlinesForHref:e.shouldDecodeNewlines;d[p]={name:v[1],value:Qa(h,m)}}u||(o.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:d,start:t.start,end:t.end}),r=n);e.start&&e.start(n,d,u,t.start,t.end)}(b),Ya(b.tagName,t)&&l(1),"continue"}var $=void 0,w=void 0,x=void 0;if(v>=0){for(w=t.slice(v);!(Ua.test(w)||Ha.test(w)||Va.test(w)||Ka.test(w)||(x=w.indexOf("<",1))<0);)v+=x,w=t.slice(v);$=t.substring(0,v)}v<0&&($=t),$&&l($.length),e.chars&&$&&e.chars($,c-$.length,c)}if(t===n)return e.chars&&e.chars(t),"break"};t;){if("break"===u())break}function l(e){c+=e,t=t.substring(e)}function f(t,n,i){var a,s;if(null==n&&(n=c),null==i&&(i=c),t)for(s=t.toLowerCase(),a=o.length-1;a>=0&&o[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var u=o.length-1;u>=a;u--)e.end&&e.end(o[u].tag,n,i);o.length=a,r=a&&o[a-1].tag}else"br"===s?e.start&&e.start(t,[],!0,n,i):"p"===s&&(e.start&&e.start(t,[],!1,n,i),e.end&&e.end(t,n,i))}f()}var es,ns,rs,os,is,as,ss,cs,us=/^@|^v-on:/,ls=/^v-|^@|^:|^#/,fs=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,ds=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,ps=/^\(|\)$/g,vs=/^\[.*\]$/,hs=/:(.*)$/,ms=/^:|^\.|^v-bind:/,gs=/\.[^.\]]+(?=[^\]]*$)/g,ys=/^v-slot(:|$)|^#/,_s=/[\r\n]/,bs=/[ \f\t\r\n]+/g,$s=$(Na),ws="_empty_";function xs(t,e,n){return{type:1,tag:t,attrsList:e,attrsMap:js(e),rawAttrsMap:{},parent:n,children:[]}}function Cs(t,e){es=e.warn||Ho,as=e.isPreTag||N,ss=e.mustUseProp||N,cs=e.getTagNamespace||N,e.isReservedTag,rs=Bo(e.modules,"transformNode"),os=Bo(e.modules,"preTransformNode"),is=Bo(e.modules,"postTransformNode"),ns=e.delimiters;var n,r,o=[],i=!1!==e.preserveWhitespace,a=e.whitespace,s=!1,c=!1;function u(t){if(l(t),s||t.processed||(t=ks(t,e)),o.length||t===n||n.if&&(t.elseif||t.else)&&Os(n,{exp:t.elseif,block:t}),r&&!t.forbidden)if(t.elseif||t.else)a=t,u=function(t){for(var e=t.length;e--;){if(1===t[e].type)return t[e];t.pop()}}(r.children),u&&u.if&&Os(u,{exp:a.elseif,block:a});else{if(t.slotScope){var i=t.slotTarget||'"default"';(r.scopedSlots||(r.scopedSlots={}))[i]=t}r.children.push(t),t.parent=r}var a,u;t.children=t.children.filter((function(t){return!t.slotScope})),l(t),t.pre&&(s=!1),as(t.tag)&&(c=!1);for(var f=0;f<is.length;f++)is[f](t,e)}function l(t){if(!c)for(var e=void 0;(e=t.children[t.children.length-1])&&3===e.type&&" "===e.text;)t.children.pop()}return ts(t,{warn:es,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldDecodeNewlinesForHref:e.shouldDecodeNewlinesForHref,shouldKeepComment:e.comments,outputSourceRange:e.outputSourceRange,start:function(t,i,a,l,f){var d=r&&r.ns||cs(t);Z&&"svg"===d&&(i=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];Es.test(r.name)||(r.name=r.name.replace(Ns,""),e.push(r))}return e}(i));var p,v=xs(t,i,r);d&&(v.ns=d),"style"!==(p=v).tag&&("script"!==p.tag||p.attrsMap.type&&"text/javascript"!==p.attrsMap.type)||ot()||(v.forbidden=!0);for(var h=0;h<os.length;h++)v=os[h](v,e)||v;s||(!function(t){null!=Zo(t,"v-pre")&&(t.pre=!0)}(v),v.pre&&(s=!0)),as(v.tag)&&(c=!0),s?function(t){var e=t.attrsList,n=e.length;if(n)for(var r=t.attrs=new Array(n),o=0;o<n;o++)r[o]={name:e[o].name,value:JSON.stringify(e[o].value)},null!=e[o].start&&(r[o].start=e[o].start,r[o].end=e[o].end);else t.pre||(t.plain=!0)}(v):v.processed||(Ss(v),function(t){var e=Zo(t,"v-if");if(e)t.if=e,Os(t,{exp:e,block:t});else{null!=Zo(t,"v-else")&&(t.else=!0);var n=Zo(t,"v-else-if");n&&(t.elseif=n)}}(v),function(t){var e=Zo(t,"v-once");null!=e&&(t.once=!0)}(v)),n||(n=v),a?u(v):(r=v,o.push(v))},end:function(t,e,n){var i=o[o.length-1];o.length-=1,r=o[o.length-1],u(i)},chars:function(t,e,n){if(r&&(!Z||"textarea"!==r.tag||r.attrsMap.placeholder!==t)){var o,u=r.children;if(t=c||t.trim()?"script"===(o=r).tag||"style"===o.tag?t:$s(t):u.length?a?"condense"===a&&_s.test(t)?"":" ":i?" ":"":""){c||"condense"!==a||(t=t.replace(bs," "));var l=void 0,f=void 0;!s&&" "!==t&&(l=function(t,e){var n=e?Ta(e):Sa;if(n.test(t)){for(var r,o,i,a=[],s=[],c=n.lastIndex=0;r=n.exec(t);){(o=r.index)>c&&(s.push(i=t.slice(c,o)),a.push(JSON.stringify(i)));var u=Ro(r[1].trim());a.push("_s(".concat(u,")")),s.push({"@binding":u}),c=o+r[0].length}return c<t.length&&(s.push(i=t.slice(c)),a.push(JSON.stringify(i))),{expression:a.join("+"),tokens:s}}}(t,ns))?f={type:2,expression:l.expression,tokens:l.tokens,text:t}:" "===t&&u.length&&" "===u[u.length-1].text||(f={type:3,text:t}),f&&u.push(f)}}},comment:function(t,e,n){if(r){var o={type:3,text:t,isComment:!0};r.children.push(o)}}}),n}function ks(t,e){var n,r;(r=Wo(n=t,"key"))&&(n.key=r),t.plain=!t.key&&!t.scopedSlots&&!t.attrsList.length,function(t){var e=Wo(t,"ref");e&&(t.ref=e,t.refInFor=function(t){var e=t;for(;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}(t))}(t),function(t){var e;"template"===t.tag?(e=Zo(t,"scope"),t.slotScope=e||Zo(t,"slot-scope")):(e=Zo(t,"slot-scope"))&&(t.slotScope=e);var n=Wo(t,"slot");n&&(t.slotTarget='""'===n?'"default"':n,t.slotTargetDynamic=!(!t.attrsMap[":slot"]&&!t.attrsMap["v-bind:slot"]),"template"===t.tag||t.slotScope||zo(t,"slot",n,function(t,e){return t.rawAttrsMap[":"+e]||t.rawAttrsMap["v-bind:"+e]||t.rawAttrsMap[e]}(t,"slot")));if("template"===t.tag){if(a=Go(t,ys)){var r=Ts(a),o=r.name,i=r.dynamic;t.slotTarget=o,t.slotTargetDynamic=i,t.slotScope=a.value||ws}}else{var a;if(a=Go(t,ys)){var s=t.scopedSlots||(t.scopedSlots={}),c=Ts(a),u=c.name,l=(i=c.dynamic,s[u]=xs("template",[],t));l.slotTarget=u,l.slotTargetDynamic=i,l.children=t.children.filter((function(t){if(!t.slotScope)return t.parent=l,!0})),l.slotScope=a.value||ws,t.children=[],t.plain=!1}}}(t),function(t){"slot"===t.tag&&(t.slotName=Wo(t,"name"))}(t),function(t){var e;(e=Wo(t,"is"))&&(t.component=e);null!=Zo(t,"inline-template")&&(t.inlineTemplate=!0)}(t);for(var o=0;o<rs.length;o++)t=rs[o](t,e)||t;return function(t){var e,n,r,o,i,a,s,c,u=t.attrsList;for(e=0,n=u.length;e<n;e++)if(r=o=u[e].name,i=u[e].value,ls.test(r))if(t.hasBindings=!0,(a=As(r.replace(ls,"")))&&(r=r.replace(gs,"")),ms.test(r))r=r.replace(ms,""),i=Ro(i),(c=vs.test(r))&&(r=r.slice(1,-1)),a&&(a.prop&&!c&&"innerHtml"===(r=x(r))&&(r="innerHTML"),a.camel&&!c&&(r=x(r)),a.sync&&(s=Qo(i,"$event"),c?qo(t,'"update:"+('.concat(r,")"),s,null,!1,0,u[e],!0):(qo(t,"update:".concat(x(r)),s,null,!1,0,u[e]),S(r)!==x(r)&&qo(t,"update:".concat(S(r)),s,null,!1,0,u[e])))),a&&a.prop||!t.component&&ss(t.tag,t.attrsMap.type,r)?Uo(t,r,i,u[e],c):zo(t,r,i,u[e],c);else if(us.test(r))r=r.replace(us,""),(c=vs.test(r))&&(r=r.slice(1,-1)),qo(t,r,i,a,!1,0,u[e],c);else{var l=(r=r.replace(ls,"")).match(hs),f=l&&l[1];c=!1,f&&(r=r.slice(0,-(f.length+1)),vs.test(f)&&(f=f.slice(1,-1),c=!0)),Ko(t,r,o,i,f,c,a,u[e])}else zo(t,r,JSON.stringify(i),u[e]),!t.component&&"muted"===r&&ss(t.tag,t.attrsMap.type,r)&&Uo(t,r,"true",u[e])}(t),t}function Ss(t){var e;if(e=Zo(t,"v-for")){var n=function(t){var e=t.match(fs);if(!e)return;var n={};n.for=e[2].trim();var r=e[1].trim().replace(ps,""),o=r.match(ds);o?(n.alias=r.replace(ds,"").trim(),n.iterator1=o[1].trim(),o[2]&&(n.iterator2=o[2].trim())):n.alias=r;return n}(e);n&&A(t,n)}}function Os(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function Ts(t){var e=t.name.replace(ys,"");return e||"#"!==t.name[0]&&(e="default"),vs.test(e)?{name:e.slice(1,-1),dynamic:!0}:{name:'"'.concat(e,'"'),dynamic:!1}}function As(t){var e=t.match(gs);if(e){var n={};return e.forEach((function(t){n[t.slice(1)]=!0})),n}}function js(t){for(var e={},n=0,r=t.length;n<r;n++)e[t[n].name]=t[n].value;return e}var Es=/^xmlns:NS\d+/,Ns=/^NS\d+:/;function Ps(t){return xs(t.tag,t.attrsList.slice(),t.parent)}var Ds=[Aa,Ea,{preTransformNode:function(t,e){if("input"===t.tag){var n=t.attrsMap;if(!n["v-model"])return;var r=void 0;if((n[":type"]||n["v-bind:type"])&&(r=Wo(t,"type")),n.type||r||!n["v-bind"]||(r="(".concat(n["v-bind"],").type")),r){var o=Zo(t,"v-if",!0),i=o?"&&(".concat(o,")"):"",a=null!=Zo(t,"v-else",!0),s=Zo(t,"v-else-if",!0),c=Ps(t);Ss(c),Vo(c,"type","checkbox"),ks(c,e),c.processed=!0,c.if="(".concat(r,")==='checkbox'")+i,Os(c,{exp:c.if,block:c});var u=Ps(t);Zo(u,"v-for",!0),Vo(u,"type","radio"),ks(u,e),Os(c,{exp:"(".concat(r,")==='radio'")+i,block:u});var l=Ps(t);return Zo(l,"v-for",!0),Vo(l,":type",r),ks(l,e),Os(c,{exp:o,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}];var Ms,Is,Ls={model:function(t,e,n){var r=e.value,o=e.modifiers,i=t.tag,a=t.attrsMap.type;if(t.component)return Yo(t,r,o),!1;if("select"===i)!function(t,e,n){var r=n&&n.number,o='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;'+"return ".concat(r?"_n(val)":"val","})"),i="$event.target.multiple ? $$selectedVal : $$selectedVal[0]",a="var $$selectedVal = ".concat(o,";");a="".concat(a," ").concat(Qo(e,i)),qo(t,"change",a,null,!0)}(t,r,o);else if("input"===i&&"checkbox"===a)!function(t,e,n){var r=n&&n.number,o=Wo(t,"value")||"null",i=Wo(t,"true-value")||"true",a=Wo(t,"false-value")||"false";Uo(t,"checked","Array.isArray(".concat(e,")")+"?_i(".concat(e,",").concat(o,")>-1")+("true"===i?":(".concat(e,")"):":_q(".concat(e,",").concat(i,")"))),qo(t,"change","var $$a=".concat(e,",")+"$$el=$event.target,"+"$$c=$$el.checked?(".concat(i,"):(").concat(a,");")+"if(Array.isArray($$a)){"+"var $$v=".concat(r?"_n("+o+")":o,",")+"$$i=_i($$a,$$v);"+"if($$el.checked){$$i<0&&(".concat(Qo(e,"$$a.concat([$$v])"),")}")+"else{$$i>-1&&(".concat(Qo(e,"$$a.slice(0,$$i).concat($$a.slice($$i+1))"),")}")+"}else{".concat(Qo(e,"$$c"),"}"),null,!0)}(t,r,o);else if("input"===i&&"radio"===a)!function(t,e,n){var r=n&&n.number,o=Wo(t,"value")||"null";o=r?"_n(".concat(o,")"):o,Uo(t,"checked","_q(".concat(e,",").concat(o,")")),qo(t,"change",Qo(e,o),null,!0)}(t,r,o);else if("input"===i||"textarea"===i)!function(t,e,n){var r=t.attrsMap.type,o=n||{},i=o.lazy,a=o.number,s=o.trim,c=!i&&"range"!==r,u=i?"change":"range"===r?ai:"input",l="$event.target.value";s&&(l="$event.target.value.trim()");a&&(l="_n(".concat(l,")"));var f=Qo(e,l);c&&(f="if($event.target.composing)return;".concat(f));Uo(t,"value","(".concat(e,")")),qo(t,u,f,null,!0),(s||a)&&qo(t,"blur","$forceUpdate()")}(t,r,o);else if(!B.isReservedTag(i))return Yo(t,r,o),!1;return!0},text:function(t,e){e.value&&Uo(t,"textContent","_s(".concat(e.value,")"),e)},html:function(t,e){e.value&&Uo(t,"innerHTML","_s(".concat(e.value,")"),e)}},Rs={expectHTML:!0,modules:Ds,directives:Ls,isPreTag:function(t){return"pre"===t},isUnaryTag:Pa,mustUseProp:Ur,canBeLeftOpenTag:Da,isReservedTag:oo,getTagNamespace:io,staticKeys:function(t){return t.reduce((function(t,e){return t.concat(e.staticKeys||[])}),[]).join(",")}(Ds)},Fs=$((function(t){return h("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(t?","+t:""))}));function Hs(t,e){t&&(Ms=Fs(e.staticKeys||""),Is=e.isReservedTag||N,Bs(t),Us(t,!1))}function Bs(t){if(t.static=function(t){if(2===t.type)return!1;if(3===t.type)return!0;return!(!t.pre&&(t.hasBindings||t.if||t.for||m(t.tag)||!Is(t.tag)||function(t){for(;t.parent;){if("template"!==(t=t.parent).tag)return!1;if(t.for)return!0}return!1}(t)||!Object.keys(t).every(Ms)))}(t),1===t.type){if(!Is(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var e=0,n=t.children.length;e<n;e++){var r=t.children[e];Bs(r),r.static||(t.static=!1)}if(t.ifConditions)for(e=1,n=t.ifConditions.length;e<n;e++){var o=t.ifConditions[e].block;Bs(o),o.static||(t.static=!1)}}}function Us(t,e){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=e),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var n=0,r=t.children.length;n<r;n++)Us(t.children[n],e||!!t.for);if(t.ifConditions)for(n=1,r=t.ifConditions.length;n<r;n++)Us(t.ifConditions[n].block,e)}}var zs=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Vs=/\([^)]*?\);*$/,Ks=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Js={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},qs={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},Ws=function(t){return"if(".concat(t,")return null;")},Zs={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Ws("$event.target !== $event.currentTarget"),ctrl:Ws("!$event.ctrlKey"),shift:Ws("!$event.shiftKey"),alt:Ws("!$event.altKey"),meta:Ws("!$event.metaKey"),left:Ws("'button' in $event && $event.button !== 0"),middle:Ws("'button' in $event && $event.button !== 1"),right:Ws("'button' in $event && $event.button !== 2")};function Gs(t,e){var n=e?"nativeOn:":"on:",r="",o="";for(var i in t){var a=Xs(t[i]);t[i]&&t[i].dynamic?o+="".concat(i,",").concat(a,","):r+='"'.concat(i,'":').concat(a,",")}return r="{".concat(r.slice(0,-1),"}"),o?n+"_d(".concat(r,",[").concat(o.slice(0,-1),"])"):n+r}function Xs(t){if(!t)return"function(){}";if(Array.isArray(t))return"[".concat(t.map((function(t){return Xs(t)})).join(","),"]");var e=Ks.test(t.value),n=zs.test(t.value),r=Ks.test(t.value.replace(Vs,""));if(t.modifiers){var o="",i="",a=[],s=function(e){if(Zs[e])i+=Zs[e],Js[e]&&a.push(e);else if("exact"===e){var n=t.modifiers;i+=Ws(["ctrl","shift","alt","meta"].filter((function(t){return!n[t]})).map((function(t){return"$event.".concat(t,"Key")})).join("||"))}else a.push(e)};for(var c in t.modifiers)s(c);a.length&&(o+=function(t){return"if(!$event.type.indexOf('key')&&"+"".concat(t.map(Ys).join("&&"),")return null;")}(a)),i&&(o+=i);var u=e?"return ".concat(t.value,".apply(null, arguments)"):n?"return (".concat(t.value,").apply(null, arguments)"):r?"return ".concat(t.value):t.value;return"function($event){".concat(o).concat(u,"}")}return e||n?t.value:"function($event){".concat(r?"return ".concat(t.value):t.value,"}")}function Ys(t){var e=parseInt(t,10);if(e)return"$event.keyCode!==".concat(e);var n=Js[t],r=qs[t];return"_k($event.keyCode,"+"".concat(JSON.stringify(t),",")+"".concat(JSON.stringify(n),",")+"$event.key,"+"".concat(JSON.stringify(r))+")"}var Qs={on:function(t,e){t.wrapListeners=function(t){return"_g(".concat(t,",").concat(e.value,")")}},bind:function(t,e){t.wrapData=function(n){return"_b(".concat(n,",'").concat(t.tag,"',").concat(e.value,",").concat(e.modifiers&&e.modifiers.prop?"true":"false").concat(e.modifiers&&e.modifiers.sync?",true":"",")")}},cloak:E},tc=function(t){this.options=t,this.warn=t.warn||Ho,this.transforms=Bo(t.modules,"transformCode"),this.dataGenFns=Bo(t.modules,"genData"),this.directives=A(A({},Qs),t.directives);var e=t.isReservedTag||N;this.maybeComponent=function(t){return!!t.component||!e(t.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function ec(t,e){var n=new tc(e),r=t?"script"===t.tag?"null":nc(t,n):'_c("div")';return{render:"with(this){return ".concat(r,"}"),staticRenderFns:n.staticRenderFns}}function nc(t,e){if(t.parent&&(t.pre=t.pre||t.parent.pre),t.staticRoot&&!t.staticProcessed)return rc(t,e);if(t.once&&!t.onceProcessed)return oc(t,e);if(t.for&&!t.forProcessed)return sc(t,e);if(t.if&&!t.ifProcessed)return ic(t,e);if("template"!==t.tag||t.slotTarget||e.pre){if("slot"===t.tag)return function(t,e){var n=t.slotName||'"default"',r=fc(t,e),o="_t(".concat(n).concat(r?",function(){return ".concat(r,"}"):""),i=t.attrs||t.dynamicAttrs?vc((t.attrs||[]).concat(t.dynamicAttrs||[]).map((function(t){return{name:x(t.name),value:t.value,dynamic:t.dynamic}}))):null,a=t.attrsMap["v-bind"];!i&&!a||r||(o+=",null");i&&(o+=",".concat(i));a&&(o+="".concat(i?"":",null",",").concat(a));return o+")"}(t,e);var n=void 0;if(t.component)n=function(t,e,n){var r=e.inlineTemplate?null:fc(e,n,!0);return"_c(".concat(t,",").concat(cc(e,n)).concat(r?",".concat(r):"",")")}(t.component,t,e);else{var r=void 0,o=e.maybeComponent(t);(!t.plain||t.pre&&o)&&(r=cc(t,e));var i=void 0,a=e.options.bindings;o&&a&&!1!==a.__isScriptSetup&&(i=function(t,e){var n=x(e),r=C(n),o=function(o){return t[e]===o?e:t[n]===o?n:t[r]===o?r:void 0},i=o("setup-const")||o("setup-reactive-const");if(i)return i;var a=o("setup-let")||o("setup-ref")||o("setup-maybe-ref");if(a)return a}(a,t.tag)),i||(i="'".concat(t.tag,"'"));var s=t.inlineTemplate?null:fc(t,e,!0);n="_c(".concat(i).concat(r?",".concat(r):"").concat(s?",".concat(s):"",")")}for(var c=0;c<e.transforms.length;c++)n=e.transforms[c](t,n);return n}return fc(t,e)||"void 0"}function rc(t,e){t.staticProcessed=!0;var n=e.pre;return t.pre&&(e.pre=t.pre),e.staticRenderFns.push("with(this){return ".concat(nc(t,e),"}")),e.pre=n,"_m(".concat(e.staticRenderFns.length-1).concat(t.staticInFor?",true":"",")")}function oc(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return ic(t,e);if(t.staticInFor){for(var n="",r=t.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o(".concat(nc(t,e),",").concat(e.onceId++,",").concat(n,")"):nc(t,e)}return rc(t,e)}function ic(t,e,n,r){return t.ifProcessed=!0,ac(t.ifConditions.slice(),e,n,r)}function ac(t,e,n,r){if(!t.length)return r||"_e()";var o=t.shift();return o.exp?"(".concat(o.exp,")?").concat(i(o.block),":").concat(ac(t,e,n,r)):"".concat(i(o.block));function i(t){return n?n(t,e):t.once?oc(t,e):nc(t,e)}}function sc(t,e,n,r){var o=t.for,i=t.alias,a=t.iterator1?",".concat(t.iterator1):"",s=t.iterator2?",".concat(t.iterator2):"";return t.forProcessed=!0,"".concat(r||"_l","((").concat(o,"),")+"function(".concat(i).concat(a).concat(s,"){")+"return ".concat((n||nc)(t,e))+"})"}function cc(t,e){var n="{",r=function(t,e){var n=t.directives;if(!n)return;var r,o,i,a,s="directives:[",c=!1;for(r=0,o=n.length;r<o;r++){i=n[r],a=!0;var u=e.directives[i.name];u&&(a=!!u(t,i,e.warn)),a&&(c=!0,s+='{name:"'.concat(i.name,'",rawName:"').concat(i.rawName,'"').concat(i.value?",value:(".concat(i.value,"),expression:").concat(JSON.stringify(i.value)):"").concat(i.arg?",arg:".concat(i.isDynamicArg?i.arg:'"'.concat(i.arg,'"')):"").concat(i.modifiers?",modifiers:".concat(JSON.stringify(i.modifiers)):"","},"))}if(c)return s.slice(0,-1)+"]"}(t,e);r&&(n+=r+","),t.key&&(n+="key:".concat(t.key,",")),t.ref&&(n+="ref:".concat(t.ref,",")),t.refInFor&&(n+="refInFor:true,"),t.pre&&(n+="pre:true,"),t.component&&(n+='tag:"'.concat(t.tag,'",'));for(var o=0;o<e.dataGenFns.length;o++)n+=e.dataGenFns[o](t);if(t.attrs&&(n+="attrs:".concat(vc(t.attrs),",")),t.props&&(n+="domProps:".concat(vc(t.props),",")),t.events&&(n+="".concat(Gs(t.events,!1),",")),t.nativeEvents&&(n+="".concat(Gs(t.nativeEvents,!0),",")),t.slotTarget&&!t.slotScope&&(n+="slot:".concat(t.slotTarget,",")),t.scopedSlots&&(n+="".concat(function(t,e,n){var r=t.for||Object.keys(e).some((function(t){var n=e[t];return n.slotTargetDynamic||n.if||n.for||uc(n)})),o=!!t.if;if(!r)for(var i=t.parent;i;){if(i.slotScope&&i.slotScope!==ws||i.for){r=!0;break}i.if&&(o=!0),i=i.parent}var a=Object.keys(e).map((function(t){return lc(e[t],n)})).join(",");return"scopedSlots:_u([".concat(a,"]").concat(r?",null,true":"").concat(!r&&o?",null,false,".concat(function(t){var e=5381,n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e>>>0}(a)):"",")")}(t,t.scopedSlots,e),",")),t.model&&(n+="model:{value:".concat(t.model.value,",callback:").concat(t.model.callback,",expression:").concat(t.model.expression,"},")),t.inlineTemplate){var i=function(t,e){var n=t.children[0];if(n&&1===n.type){var r=ec(n,e.options);return"inlineTemplate:{render:function(){".concat(r.render,"},staticRenderFns:[").concat(r.staticRenderFns.map((function(t){return"function(){".concat(t,"}")})).join(","),"]}")}}(t,e);i&&(n+="".concat(i,","))}return n=n.replace(/,$/,"")+"}",t.dynamicAttrs&&(n="_b(".concat(n,',"').concat(t.tag,'",').concat(vc(t.dynamicAttrs),")")),t.wrapData&&(n=t.wrapData(n)),t.wrapListeners&&(n=t.wrapListeners(n)),n}function uc(t){return 1===t.type&&("slot"===t.tag||t.children.some(uc))}function lc(t,e){var n=t.attrsMap["slot-scope"];if(t.if&&!t.ifProcessed&&!n)return ic(t,e,lc,"null");if(t.for&&!t.forProcessed)return sc(t,e,lc);var r=t.slotScope===ws?"":String(t.slotScope),o="function(".concat(r,"){")+"return ".concat("template"===t.tag?t.if&&n?"(".concat(t.if,")?").concat(fc(t,e)||"undefined",":undefined"):fc(t,e)||"undefined":nc(t,e),"}"),i=r?"":",proxy:true";return"{key:".concat(t.slotTarget||'"default"',",fn:").concat(o).concat(i,"}")}function fc(t,e,n,r,o){var i=t.children;if(i.length){var a=i[0];if(1===i.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag){var s=n?e.maybeComponent(a)?",1":",0":"";return"".concat((r||nc)(a,e)).concat(s)}var c=n?function(t,e){for(var n=0,r=0;r<t.length;r++){var o=t[r];if(1===o.type){if(dc(o)||o.ifConditions&&o.ifConditions.some((function(t){return dc(t.block)}))){n=2;break}(e(o)||o.ifConditions&&o.ifConditions.some((function(t){return e(t.block)})))&&(n=1)}}return n}(i,e.maybeComponent):0,u=o||pc;return"[".concat(i.map((function(t){return u(t,e)})).join(","),"]").concat(c?",".concat(c):"")}}function dc(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function pc(t,e){return 1===t.type?nc(t,e):3===t.type&&t.isComment?function(t){return"_e(".concat(JSON.stringify(t.text),")")}(t):function(t){return"_v(".concat(2===t.type?t.expression:hc(JSON.stringify(t.text)),")")}(t)}function vc(t){for(var e="",n="",r=0;r<t.length;r++){var o=t[r],i=hc(o.value);o.dynamic?n+="".concat(o.name,",").concat(i,","):e+='"'.concat(o.name,'":').concat(i,",")}return e="{".concat(e.slice(0,-1),"}"),n?"_d(".concat(e,",[").concat(n.slice(0,-1),"])"):e}function hc(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function mc(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),E}}function gc(t){var e=Object.create(null);return function(n,r,o){(r=A({},r)).warn,delete r.warn;var i=r.delimiters?String(r.delimiters)+n:n;if(e[i])return e[i];var a=t(n,r),s={},c=[];return s.render=mc(a.render,c),s.staticRenderFns=a.staticRenderFns.map((function(t){return mc(t,c)})),e[i]=s}}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");var yc,_c,bc=(yc=function(t,e){var n=Cs(t.trim(),e);!1!==e.optimize&&Hs(n,e);var r=ec(n,e);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(t){function e(e,n){var r=Object.create(t),o=[],i=[];if(n)for(var a in n.modules&&(r.modules=(t.modules||[]).concat(n.modules)),n.directives&&(r.directives=A(Object.create(t.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);r.warn=function(t,e,n){(n?i:o).push(t)};var s=yc(e.trim(),r);return s.errors=o,s.tips=i,s}return{compile:e,compileToFunctions:gc(e)}}),$c=bc(Rs).compileToFunctions;function wc(t){return(_c=_c||document.createElement("div")).innerHTML=t?'<a href="\n"/>':'<div a="\n"/>',_c.innerHTML.indexOf("&#10;")>0}var xc=!!q&&wc(!1),Cc=!!q&&wc(!0),kc=$((function(t){var e=co(t);return e&&e.innerHTML})),Sc=Er.prototype.$mount;return Er.prototype.$mount=function(t,e){if((t=t&&co(t))===document.body||t===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=kc(r));else{if(!r.nodeType)return this;r=r.innerHTML}else t&&(r=function(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}(t));if(r){var o=$c(r,{outputSourceRange:!1,shouldDecodeNewlines:xc,shouldDecodeNewlinesForHref:Cc,delimiters:n.delimiters,comments:n.comments},this),i=o.render,a=o.staticRenderFns;n.render=i,n.staticRenderFns=a}}return Sc.call(this,t,e)},Er.compile=$c,A(Er,Jn),Er.effect=function(t,e){var n=new Xn(ut,t,E,{sync:!0});e&&(n.update=function(){e((function(){return n.run()}))})},Er}));
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window["ensure"] = mod;
  }
  if (typeof global !== 'undefined') {
    global["ensure"] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  const ensure = function (source) {
    return new Ensurement(source);
  };
  class Ensurement {
    constructor(source) {
      if(typeof source !== "object") {
        throw new Error("Ensurement only accepts 1 object");
      }
      const sourceKeys = Object.keys(source);
      if(sourceKeys.length !== 1) {
        throw new Error("Ensurement only accepts 1 object with 1 property");
      }
      const id = sourceKeys[0];
      this.$subjectId = id;
      this.$subject = source[id];
      this.$operation = undefined;
      this.$objectation = undefined;
      this.$can = undefined;
      this.$cant = undefined;
      this.$is = undefined;
      this.$isnt = undefined;
      this.$throws = undefined;
      this.$doesntThrow = undefined;
    }
    type(value) {
      return this.$resolveOperation("type", value);
    }
    notType(value) {
      return this.$resolveOperation("notType", value);
    }
    is(is) {
      return this.$resolveOperation("is", is);
    }
    isnt(isnt) {
      return this.$resolveOperation("isnt", isnt);
    }
    can(can) {
      return this.$resolveOperation("can", can);
    }
    cant(cant) {
      return this.$resolveOperation("cant", cant);
    }
    throws(throws) {
      return this.$resolveOperation("throws", throws);
    }
    doesntThrow(doesntThrow) {
      return this.$resolveOperation("doesntThrow", doesntThrow);
    }
    $throwError() {
      throw new Error("could not ensure «" + this.$subjectId + " " + this.$operation + " " + this.$objectation + "»");
    }
    $resolveOperation(op, objectation) {
      this.$operation = op;
      this.$objectation = objectation;
      if (op === "type") {
        if(typeof this.$subject !== objectation) {
          this.$throwError();
        }
      } else if (op === "notType") {
        if (typeof this.$subject === objectation) {
          this.$throwError();
        }
      } else if (op === "is") {
        if (this.$subject !== objectation) {
          this.$throwError();
        }
      } else if (op === "isnt") {
        if (this.$subject === objectation) {
          this.$throwError();
        }
      } else if (op === "can") {
        if (!objectation(this.$subject)) {
          this.$throwError();
        }
      } else if (op === "cant") {
        if (objectation(this.$subject)) {
          this.$throwError();
        }
      } else if (op === "throws") {
        try {
          objectation(this.$subject);
          this.$throwError();
        } catch (error) { }
      } else if (op === "doesntThrow") {
        try {
          objectation(this.$subject);
        } catch (error) {
          this.$throwError();
        }
      } else {
        throw new Error("Ensure operation not admited: " + op);
      }
      return this;
    }
  }
  return ensure;
});
(function (factory) {
    const mod = factory();
    if (typeof window !== 'undefined') {
        window['UniversalTester'] = mod;
        window['describe'] = mod.describe;
    }
    if (typeof global !== 'undefined') {
        global['UniversalTester'] = mod;
        global['describe'] = mod.describe;
    }
    if (typeof module !== 'undefined') {
        module.exports = mod;
    }
})(function () {

    const runQueue = async function (queue, errorHandler, it) {
        Iterating_tests:
        for (const test of queue) {
            try {
                await test();
            } catch (err) {
                await it.state.onError(err);
                if (errorHandler) {
                    try {
                        await errorHandler(err);
                    } catch (stopExecutionFailure) {
                        console.error("Execution halted due to:", stopExecutionFailure);
                        break Iterating_tests; // Interrumpir la ejecución de la cola
                    }
                } else {
                    console.error(err);
                }
            }
        }
    };
    const print = function (message, color = false) {
        if (typeof global !== "undefined") {
            if (color === "green") {
                console.log(`\x1b[32m${message}\x1b[0m`);
            } else if (color === "red") {
                console.log(`\x1b[31m${message}\x1b[0m`);
            } else {
                console.log(message);
            }
        } else {
            console.log(message);
        }
    };

    const describe = function (description, callback) {
        const queue = [];
        const state = {
            finished: false,
            onFailure: null,
            onError: null,
            tests: {},
            onlyActivated: false
        };
        const getStateReport = function (last = 0, nonStringified = false) {
            if (!last) {
                let report = "";
                report = JSON.stringify(state, null, 2);
                return report;
            } else {
                let report = "";
                state.passed = Object.keys(state.tests).filter(label => state.tests[label].state === "passed");
                state.failed = Object.keys(state.tests).filter(label => state.tests[label].state === "failed");
                if (nonStringified) {
                    return state;
                }
                report = JSON.stringify(state, null, 2);
                return report;
            }
        };
        const updateDOM = function () {
            Only_on_browsers:
            if (typeof window !== "undefined") {
                const matchedElements = Array.from(document.querySelectorAll("[data-test]")).filter(el => el.getAttribute("data-test") === description);
                if (matchedElements.length === 0) {
                    break Only_on_browsers;
                }
                const matchedElement = matchedElements[0];
                matchedElement.textContent = getStateReport(1);
            }
        };
        const updateUI = (is_on = "pass", force_on_nodejs = false, itModified = false, description = false) => {
            try {
                const is_starting_suite = is_on === "begin";
                const is_starting = is_on === "start";
                const is_passing = is_on === "pass";
                const is_failing = is_on === "fail";
                const is_finished = is_on === "finish";
                const is_none = !is_starting_suite && !is_starting && !is_passing && !is_failing && !is_finished;
                if(is_none) {
                    throw new Error("Situation not managed error 1");
                }
                if (is_finished) {
                    state.finished = true;
                }
                On_both_browser_and_nodejs:
                if (itModified) {
                    const mark = itModified.state === "passed" ? "✔" : "✘";
                    if (mark === "✘") {
                        print(`  [${mark}] ${description} [${itModified.took_milliseconds}ms]`, "red");
                    } else {
                        print(`  [${mark}] ${description} [${itModified.took_milliseconds}ms]`, "green");
                    }
                } else if (is_finished) {
                    const r = getStateReport(1, 1);
                    if (r.failed.length) {
                        print(`[✘] Failed ${r.failed.length} check(s) on:`, "red");
                        r.failed.map((id, index) => {
                            return {
                                index: index + 1,
                                test: id,
                                error: r.tests[id].error
                            }
                        }).forEach(info => {
                            const { error, index } = info;
                            print(`  [✘] Fail ${index} on: «${info.test}» | ${error.name}: ${error.message}`, "red");
                            console.log(error);
                        });
                        console.log();
                    } else {
                        print(`[✔] All tests were passed successfully`, "green");
                    }
                } else if (is_starting_suite) {
                    print(`[!] Starting: ${description}`, "green");
                }
            } catch (error) {
                console.error(error);
            } finally {
                updateDOM();
            }
        };
        const startTest = (label) => {
            state.tests[label] = { state: "started", started_at: new Date() };
            return updateUI("start");
        };
        const passTest = (label, output) => {
            Object.assign(state.tests[label], { state: "passed", output, took_milliseconds: (new Date()) - state.tests[label].started_at });
            return updateUI("pass", 1, state.tests[label], label);
        };
        const failTest = async (label, error) => {
            if(typeof(error) === "object" && (error instanceof describe.SilencedError)) {
                // Llamamos al onError igualmente, pero no al onFailure:
                await it.state.onError(error);
                passTest(label, { name: error.name, message: error.message });
                return false;
            }
            Object.assign(state.tests[label], { state: "failed", error, took_milliseconds: (new Date()) - state.tests[label].started_at });
            updateUI("fail", 1, state.tests[label], label);
            return true;
        };
        const it = (label, callback, type = "normal") => {
            queue.push(async () => {
                if (type === "never") return; // Nunca ejecutar "never"
                if (state.onlyActivated && type !== "only" && type !== "always") return; // Prioridad de only/always
                let timeoutId;
                const context = {
                    queue,
                    state,
                    timeout(ms) {
                        return new Promise((_, reject) => {
                            timeoutId = setTimeout(() => reject(new Error(`Timeout: ${label}`)), ms);
                        });
                    }
                };
                try {
                    startTest(label);
                    const result = await callback.call(context);
                    passTest(label, result);
                } catch (err) {
                    const trulyFailed = await failTest(label, err);
                    if(trulyFailed === true) {
                        throw err; // Re-lanzar el error para que runQueue lo capture
                    }
                } finally {
                    clearTimeout(timeoutId); // Limpiar el timeout al finalizar
                }
            });
            if (type === "only") state.onlyActivated = true;
        };

        it.always = (label, fn) => it(label, fn, "always");
        it.never = (label, fn) => it(label, fn, "never");
        it.normally = (label, fn) => it(label, fn, "normal");
        it.only = (label, fn) => it(label, fn, "only");

        it.onFailure = (callback) => {
            state.onFailure = (error) => {
                callback(error); // Configurar el manejador de fracaso de test
                return error;
            };
        };

        it.onError = (callback) => {
            state.onError = (error) => {
                callback(error); // Configurar el manejador de errores
                return error;
            };
        };

        it.describe = describe;
        it.state = state;

        const context = { it };

        callback.call(context, context.it);
        updateUI("begin", 0, 0, description);

        return runQueue(queue, state.onFailure, it).finally(() => {
            updateUI("finish");
        });
    };

    describe.SilencedError = class extends Error {};

    return { describe };
});

(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['AsyncCircuit'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['AsyncCircuit'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  class AsyncCircuit {

    static create(...args) {
      return new this(...args);
    }

    constructor() {
      this.middlewares = [];
    }

    hook(callback) {
      this.middlewares.push(callback);
      return this;
    }

    prehook(callback) {
      this.middlewares.unshift(callback);
      return this;
    }

    unhook(callback) {
      const pos = this.middlewares.indexOf(callback);
      if(pos !== -1) {
        this.middlewares.splice(pos, 1);
      }
      return this;
    }

    // Función principal para parsear el árbol
    parse(node) {
      // Si el nodo es un array (ejecutar en paralelo)
      if (Array.isArray(node)) {
        const code = node.map(cb => this.parse(cb)).join(',');
        return `Promise.all([${code}])`; // Convertimos todo en un Promise.all
      }

      // Si es un objeto con $type y $callbacks
      if (node && typeof node === 'object') {
        Inject_middlewares: {
          for(let index__middleware=0; index__middleware<this.middlewares.length; index__middleware++) {
            const middleware = this.middlewares[index__middleware];
            const result = middleware(node);
          }
        }
        const { $type, $callbacks } = node;
        const callbacks = $callbacks.map(cb => (typeof cb === 'function' ? `(${cb.toString()})()` : this.parse(cb)));
        // Dependiendo del tipo, generamos el código adecuado
        switch ($type) {
          case 'parallel':
            return `Promise.all([\n  ${callbacks.join(',')}\n  ])`; // Ejecutar en paralelo
          case 'serie':
            return `(async () => {\n  ${callbacks.map(cb => `await ${cb}`).join('; ')}\n  })()`; // Ejecutar en serie
          case 'race':
            return `Promise.race([\n  ${callbacks.join(',')}\n  ])`; // Ejecutar en carrera
          case 'sync':
            return `(() => {\n  ${callbacks.join(';\n  ')};\n  return Promise.resolve();\n  })()`; // Ejecutar síncrono
          default:
            throw new Error(`Required property «$type» to be one known but found «${$type}» on «this.parse»`);
        }
      }

      // Si el nodo es una función, la transformamos directamente
      if (typeof node === 'function') {
        return `(${node.toString()})()`; // Convertimos la función en una llamada inmediata
      }

      throw new Error(`Required argument «node» to be of known type but found «${typeof $type}» on «this.parse»`);
    }

    // Método que ejecuta el código generado por eval
    async execute(node, externalScope = {}) {
      const code = this.parse(node);
      const AsyncFunction = (async function() {}).constructor;
      const argKeys = Object.keys(externalScope).join(", ");
      const argValues = Object.values(externalScope);
      const asyncFunction = new AsyncFunction(argKeys, code);
      return await asyncFunction(...argValues); // Ejecutamos el código generado con eval
    }
  }

  return AsyncCircuit;
});

(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['URLCommand'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['URLCommand'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  const isOnlyConsecutiveNumbers = function(queryParams) {
    const queryKeysSource = Object.keys(queryParams);
    const queryKeys = queryKeysSource.map(key => "" + key);
    const output = [];
    for(let index=0; index<queryKeys.length; index++) {
      if(queryKeys.indexOf("" + index) === -1) {
        return false;
      }
      if(queryParams[index]) {
        output.push(queryParams[index]);
      } else {
        output.push(queryParams["" + index]);
      }
    }
    return output;
  };
  return {
    from: function (handlers) {
      let beforeRun = undefined;
      let afterRun = undefined;
      let onError = undefined;
      const onRun = function(callback, args) {
        try {
          let output = undefined;
          if(typeof beforeRun === "function") {
            beforeRun(...args);
          }
          output = callback(...args);
          if(typeof afterRun === "function") {
            afterRun(...args);
          }
          return output;
        } catch (error) {
          if(typeof onError === "function") {
            const output = onError(error);
            if(typeof output !== "undefined") {
              return output;
            }
          }
          throw error;
        }
      };
      const command = (url, queryParamsExtender = {}) => {
        if (!url) throw new Error("URL is required");
        if (typeof url !== "string") throw new Error("URL must be a string");
        if (typeof handlers !== "object" || handlers === null) {
          throw new Error("Handlers must be a valid object");
        }
        const [path, queryString] = url.split("?");
        const queryParams = queryString ? Object.fromEntries(new URLSearchParams(queryString).entries()) : {};
        Object.assign(queryParams, queryParamsExtender);
        const pathParts = path.split("/").filter(Boolean);
        let currentHandler = handlers;
        for (const part of pathParts) {
          if (currentHandler[part] === undefined) {
            throw new Error(`Handler for path "${path}" not found`);
          }
          currentHandler = currentHandler[part];
        }
        if (typeof currentHandler !== "function") {
          throw new Error(`Handler at path "${path}" is not a function`);
        }
        const isSpreadable = isOnlyConsecutiveNumbers(queryParams);
        if(isSpreadable && isSpreadable.length) {
          return onRun(currentHandler, isSpreadable);
        } else if(queryParams.argumentsOrder) {
          const args = [];
          const argKeys = queryParams.argumentsOrder.split(",").map(arg => arg.trim());
          for(let index=0; index<argKeys.length; index++) {
            const argKey = argKeys[index];
            const argValue = queryParams[argKey] || null;
            args.push(argValue);
          }
          return onRun(currentHandler, args);
        } else {
          return onRun(currentHandler, [queryParams]);
        }
      };
      command.run = command;
      command.beforeRun = function(callback) {
        if(typeof callback !== "function") {
          throw new Error("Required parameter «callback» to be a function on «beforeRun»");
        }
        beforeRun = callback;
      };
      command.afterRun = function(callback) {
        if(typeof callback !== "function") {
          throw new Error("Required parameter «callback» to be a function on «afterRun»");
        }
        afterRun = callback;
      };
      command.onError = function(callback) {
        if(typeof callback !== "function") {
          throw new Error("Required parameter «callback» to be a function on «onError»");
        }
        onError = callback;
      };
      return command;
    }
  };
});


(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['TriggersClass'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['TriggersClass'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  class TriggersClass {

    static globMatch(patterns, list) {
      const matches = new Set();

      const regexes = patterns.map(pattern => {
        let regexPattern = pattern
          .replace(/[-/\\^$+?.()|[\]{}]/g, "\\$&") // Escapa caracteres especiales
          .replace(/\\\*/g, ".*")                 // '*' => cualquier cosa
        return new RegExp(`^${regexPattern}$`);
      });
      for (const item of list) {
        for (const regex of regexes) {
          if (regex.test(item)) {
            matches.add(item);
            break;
          }
        }
      }

      return Array.from(matches);
    }


    all = {};

    register(triggerNamePattern, triggerIdentifier, triggerCallback, triggerConfigurations = {}) {
      const { priority = 0 } = triggerConfigurations; // Default priority is 0
      if (!this.all[triggerNamePattern]) {
        this.all[triggerNamePattern] = [];
      }
      this.all[triggerNamePattern].push({
        id: triggerIdentifier,
        callback: triggerCallback,
        priority,
      });
    }

    async emit(triggerName, parameters = {}) {
      const matchedTriggers = [];
      const allPatterns = Object.keys(this.all);

      // Encuentra patrones que coincidan con el nombre del evento
      const matchedPatterns = this.constructor.globMatch(allPatterns, [triggerName]);

      // Agrega todos los eventos coincidentes a la lista de disparos
      for (const pattern of matchedPatterns) {
        matchedTriggers.push(...this.all[pattern]);
      }

      // Ordena por prioridad descendente
      matchedTriggers.sort((a, b) => b.priority - a.priority);

      // Ejecuta los callbacks en orden
      const output = [];
      for (const trigger of matchedTriggers) {
        const result = await trigger.callback(parameters);
        output.push(result);
      }

      return output;
    }

    unregister(triggerIdentifier) {
      for (const pattern in this.all) {
        this.all[pattern] = this.all[pattern].filter(
          (trigger) => trigger.id !== triggerIdentifier
        );
        if (this.all[pattern].length === 0) {
          delete this.all[pattern]; // Limpia patrones vacíos
        }
      }
    }

  }

  TriggersClass.default = TriggersClass;

  return TriggersClass;

});
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window["Browsie"] = mod;
  }
  if (typeof global !== 'undefined') {
    // global["Browsie"] = mod;
  }
  if (typeof module !== 'undefined') {
    // module.exports = mod;
  }
})(function () {

  class BrowsieStaticAPI {

    static openedConnections = [];

    static _trace = true;

    static trace(methodName, args = []) {
      if (this._trace) {
        console.log("[TRACE][" + methodName + "]", args.length + " args: " + Array.from(args).map(arg => typeof (arg)).join(", "));
      }
    }

    static async listDatabases() {
      this.trace("Browsie.listDatabases", arguments);
      try {
        const databases = await indexedDB.databases();
        console.log('Bases de datos disponibles:', databases);
        return databases;
      } catch (error) {
        console.error('Error al obtener las bases de datos:', error);
      }
    }

    static createDatabase(dbName, schemaDefinition = null, version = 1, versionUpgrades = {}) {
      this.trace("Browsie.createDatabase", arguments);
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, version);
        request.onsuccess = () => {
          console.log(`[SUCCESS] Database "${dbName}" created/opened successfully.`);
          request.result.close();
          resolve(request.result);
        };
        request.onerror = (error) => {
          console.error(`[ERROR] Failed to create/open database "${dbName}":`, error);
          reject(error);
        };
        request.onupgradeneeded = async (event) => {
          const db = event.target.result;
          console.log(`[UPGRADE] Upgrading database "${dbName}" from version ${event.oldVersion} to ${version}.`);
          // Si hay una definición de esquema inicial, crear los almacenes e índices
          if (schemaDefinition && event.oldVersion === 0) {
            console.log("[SCHEMA] Applying initial schema definition.");
            Object.keys(schemaDefinition).forEach((storeName) => {
              if (!db.objectStoreNames.contains(storeName)) {
                const objectStore = db.createObjectStore(storeName, {
                  keyPath: "id",
                  autoIncrement: true,
                });
                if(!Array.isArray(schemaDefinition[storeName])) {
                  throw new Error(`Required property «schemaDefinition.${storeName}» to be an array on «LswDatabase.createDatabase»`);
                }
                schemaDefinition[storeName].forEach((index) => {
                  const indexName = index.replace(/^\!/, "");
                  objectStore.createIndex(indexName, indexName, { unique: index.startsWith("!") });
                });
              }
            });
          }
          // Aplicar las transformaciones de esquema para cada versión
          for (let v = event.oldVersion + 1; v <= version; v++) {
            if (versionUpgrades[v]) {
              console.log(`[VERSION ${v}] Applying upgrade function.`);
              await versionUpgrades[v](db);
            } else {
              console.log(`[VERSION ${v}] No upgrade function defined.`);
            }
          }
        };
      });
    }

    // Obtener todos los datos de un store
    static async getAllDataFromStore(dbName, storeName) {
      this.trace("Browsie.getAllDataFromStore", arguments);
      return await new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);

        request.onsuccess = (event) => {
          const db = event.target.result;
          const transaction = db.transaction(storeName, 'readonly');
          const store = transaction.objectStore(storeName);

          const getAllRequest = store.getAll();
          getAllRequest.onsuccess = () => resolve(getAllRequest.result);
          getAllRequest.onerror = () => {
            db.close();
            reject(new Error('Error al obtener los datos del store'));
          };
        };

        request.onerror = () => {
          reject(new Error('Error al abrir la base de datos'));
        };
      });
    }

    // Insertar datos en un store
    static async insertDataIntoStore(dbName, storeName, data) {
      this.trace("Browsie.insertDataIntoStore", arguments);
      return await new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);

        request.onsuccess = (event) => {
          const db = event.target.result;
          const transaction = db.transaction(storeName, 'readwrite');
          const store = transaction.objectStore(storeName);

          data.forEach(item => store.add(item));

          transaction.oncomplete = () => resolve();
          transaction.onerror = () => {
            db.close();
            reject(new Error('Error al insertar los datos en el store'));
          };
        };

        request.onerror = () => {
          reject(new Error('Error al abrir la base de datos'));
        };
      });
    }

    // Eliminar una base de datos
    static deleteDatabase(dbName) {
      this.trace("Browsie.deleteDatabase", arguments);
      return new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(dbName);

        request.onblocked = () => {
          db.close();
          reject(new Error("Error al eliminar la base de datos porque está bloqueada"));
        };
        request.onsuccess = () => resolve();
        request.onerror = () => {
          db.close();
          reject(new Error('Error al eliminar la base de datos'));
        };
      });
    }

    static async getSchema(dbName) {
      this.trace("Browsie.getSchema", arguments);
      let db = undefined;
      try {
        // Abrir la base de datos en modo solo lectura
        const request = indexedDB.open(dbName);

        db = await new Promise((resolve, reject) => {
          request.onsuccess = (event) => resolve(event.target.result);
          request.onerror = () => {
            reject(new Error('Error al abrir la base de datos'));
          };
        });

        // Construir el esquema a partir de los almacenes
        const schema = {};
        const objectStoreNames = Array.from(db.objectStoreNames); // Lista de stores

        objectStoreNames.forEach(storeName => {
          const transaction = db.transaction(storeName, 'readonly');
          const store = transaction.objectStore(storeName);

          const storeInfo = {
            keyPath: store.keyPath,
            autoIncrement: store.autoIncrement,
            indexes: []
          };

          // Recorrer los índices del store
          const indexNames = Array.from(store.indexNames); // Lista de índices
          indexNames.forEach(indexName => {
            const index = store.index(indexName);
            storeInfo.indexes.push({
              name: index.name,
              keyPath: index.keyPath,
              unique: index.unique,
              multiEntry: index.multiEntry
            });
          });

          schema[storeName] = storeInfo;
        });

        return schema;
      } catch (error) {
        console.error('Error al obtener el esquema:', error);
        throw error;
      } finally {
        if (db) {
          db.close();
        }
      }
    }

  }

  class BrowsieTriggersAPI extends BrowsieStaticAPI {

    static globMatch = TriggersClass.globMatch;

    triggers = new TriggersClass()

  }


  class BrowsieCrudAPI extends BrowsieTriggersAPI {

    static async open(...args) {
      this.trace("Browsie.open", arguments);
      const db = new this(...args);
      await db.open();
      return db;
    }

    // Constructor que abre la base de datos
    constructor(dbName, trace = false) {
      super();
      this.dbName = dbName;
      this.db = null;
      this._trace = trace;
    }

    // Abre la base de datos
    open() {
      this.constructor.trace("browsie.open", arguments);
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(this.dbName);

        request.onsuccess = () => {
          this.db = request.result;
          resolve(this.db);
        };
        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.open» operation over database «${this.dbName}»: `));
      });
    }

    close(...args) {
      this.constructor.trace("browsie.close", arguments);
      return this.db.close(...args);
    }

    // Método para seleccionar elementos de un store con un filtro
    select(store, filter) {
      this.constructor.trace("browsie.select", arguments);
      this.triggers.emit(`crud.select.one.${store}`, { store, filter });
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readonly');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.getAll();

        request.onsuccess = () => {
          const result = request.result.filter(item => {
            return Object.keys(filter).every(key => item[key] === filter[key]);
          });
          resolve(result);
        };
        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.select» operation over store «${store}»: `));
      });
    }

    // Método para insertar un solo item en un store
    insert(store, item) {
      this.constructor.trace("browsie.insert", arguments);
      this.triggers.emit(`crud.insert.one.${store}`, { store, item });
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readwrite');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.add(item);

        request.onsuccess = () => resolve(request.result);
        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.insert» operation over store «${store}»: `));
      });
    }

    // Método para actualizar un item en un store
    update(store, id, item) {
      this.constructor.trace("browsie.update", arguments);
      this.triggers.emit(`crud.update.one.${store}`, { store, id, item });
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readwrite');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.put({ ...item, id });

        request.onsuccess = () => resolve(request.result);
        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.update» operation over store «${store}»: `));
      });
    }

    // Método para eliminar un item de un store por ID
    delete(store, id) {
      this.constructor.trace("browsie.delete", arguments);
      this.triggers.emit(`crud.delete.one.${store}`, { store, id });
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readwrite');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.delete(id);

        request.onsuccess = () => resolve();
        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.delete» operation over store «${store}»: `));
      });
    }

    _expandError(errorObject, baseMessage = false) {
      this.constructor.trace("browsie._expandError", arguments);
      let error = errorObject;
      if (errorObject instanceof Error) {
        error = errorObject;
      } else if (errorObject.target && errorObject.target.error) {
        error = errorObject.target.error;
      } else {
        error = new Error(errorObject);
      }
      if (baseMessage) {
        const errorTemp = new Error(error.message ?? error);
        Object.assign(errorTemp, error);
        errorTemp.message = baseMessage + errorTemp.message;
        error = errorTemp;
      }
      return error;
    }

    // Método para seleccionar elementos de un store con un filtro
    select(store, filter) {
      this.constructor.trace("browsie.select", arguments);
      this.triggers.emit(`crud.select.one.${store}`, { store, filter });
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readonly');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.getAll();

        request.onsuccess = () => {
          const result = request.result.filter(item => {
            return Object.keys(filter).every(key => item[key] === filter[key]);
          });
          resolve(result);
        };
        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.select» operation over store «${store}»: `));
      });
    }

    selectMany(store, filterFn = i => true) {
      this.constructor.trace("browsie.selectMany", arguments);
      this.triggers.emit(`crud.select.many.${store}`, { store, filterFn });
    
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readonly');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.openCursor(); // Usa cursor para recorrer la BD sin cargar todo en memoria
    
        const results = [];
        request.onsuccess = (event) => {
          const cursor = event.target.result;
          if (cursor) {
            if (filterFn(cursor.value)) { // Aplica la función de filtro
              results.push(cursor.value);
            }
            cursor.continue(); // Avanza al siguiente registro
          } else {
            resolve(results); // Se terminó el recorrido
          }
        };
    
        request.onerror = (error) =>
          reject(this._expandError(error, `Error on «browsie.selectMany» operation over store «${store}»: `));
      });
    }    

    // Método para insertar varios items en un store
    insertMany(store, items) {
      this.constructor.trace("browsie.insertMany", arguments);
      this.triggers.emit(`crud.insert.many.${store}`, { store, items });
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readwrite');
        const objectStore = transaction.objectStore(store);
        let insertedCount = 0;

        items.forEach(item => {
          const request = objectStore.add(item);
          request.onsuccess = () => {
            insertedCount++;
            if (insertedCount === items.length) resolve();
          };
          request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.insertMany» operation over store «${store}» inserting «${items.length}» items: `));
        });
      });
    }

    // Método para actualizar varios items en un store
    updateMany(store, filter, item) {
      this.constructor.trace("browsie.updateMany", arguments);
      this.triggers.emit(`crud.update.many.${store}`, { store, filter, item });
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readwrite');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.openCursor();
        let updatedCount = 0;
        request.onsuccess = () => {
          const cursor = request.result;
          if (cursor) {
            if (Object.keys(filter).every(key => cursor.value[key] === filter[key])) {
              const updatedItem = { ...cursor.value, ...item };
              const updateRequest = cursor.update(updatedItem);
              updateRequest.onsuccess = () => {
                updatedCount++;
                if (updatedCount === cursor.value.length) resolve();
              };
            }
            cursor.continue();
          }
        };

        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.updateMany» operation over store «${store}»: `));
      });
    }

    // Método para eliminar varios items de un store según un filtro
    deleteMany(store, filter) {
      this.constructor.trace("browsie.deleteMany", arguments);
      this.triggers.emit(`crud.delete.many.${store}`, { store, filter });
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readwrite');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.openCursor();

        let deletedCount = 0;
        request.onsuccess = () => {
          const cursor = request.result;
          if (cursor) {
            if (Object.keys(filter).every(key => cursor.value[key] === filter[key])) {
              const deleteRequest = cursor.delete();
              deleteRequest.onsuccess = () => {
                deletedCount++;
                if (deletedCount === cursor.value.length) resolve();
              };
            }
            cursor.continue();
          }
        };

        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.deleteMany» operation over store «${store}»: `));
      });
    }
  }

  class Browsie extends BrowsieCrudAPI {

  }

  Browsie.default = Browsie;
  window.Browsie = Browsie;

  /* Extended API */

  class LswDatabase extends Browsie {
    
    class = this.constructor;

  }

  LswDatabase.default = LswDatabase;
  window.LswDatabase = LswDatabase;

  return LswDatabase;

});
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['Importer'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['Importer'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const Importer = class {

    static create(...args) {
      return new this(...args);
    }

    $trace(method, args) {
      if (this.options.trace) {
        const args_resumen = Array.from(args).map((it, index) => {
          return (index + 1) + "=" + typeof it;
        }).join(", ");
        console.log("[TRACE][importer][" + method + "][" + args.length + "][" + args_resumen + "]");
      }
    }

    $error(error, clue = false) {
      let errorText = "";
      errorText += "[ERROR]   " + error.name + "\n";
      errorText += "[MESSAGE] " + error.message + "\n";
      errorText += "[STACK]\n" + error.stack.trim().split("\n").map(line => {
        return "    | " + this.$reverseStackLine(line);
      }).join("\n") + "";
      if (clue) {
        errorText = errorText + "\n[CLUE]\n" + clue + "";
      }
      console.error(errorText);
    }

    $reverseStackLine(text) {
      const index = text.indexOf('@');
      if (index === -1) {
        // Si no hay @, devolvemos el texto completo y una cadena vacía
        return [text, ''];
      }
      return [text.slice(index + 1), " @ ", text.slice(0, index)].join("");
    }

    constructor(total_modules = 0, options_input = {}) {
      const options = Object.assign({}, {
        id: "#intersitial",
        id_loaded: "#intersitial_modules_loaded",
        id_all: "#intersitial_modules_all",
        id_trace: "#intersitial_modules_trace",
        id_loader: "#intersitial_loader",
        id_loader_bar: "#intersitial_loader_bar",
        trace: false,
        update_ui: false,
        update_ui_minimum_milliseconds: 1200,
      }, options_input);
      this.options = options;
      Duplicated_options: {
        this.id = options.id;
        this.id_all = options.id_all;
        this.id_loaded = options.id_loaded;
        this.id_trace = options.id_trace;
        this.id_loader = options.id_loader;
        this.id_loader_bar = options.id_loader_bar;
      }
      this.modules_total = total_modules;
      this.modules_loaded = -1;
      this.modules_loaded_ids = [];
      this.time_of_creation = new Date();
      this.is_loaded = false;
      this.setTotal();
      this.$trace("constructor", arguments);
    }

    $getMillisecondsOfLife() {
      this.$trace("$getMillisecondsOfLife", arguments);
      return this.$formatMilliseconds(new Date() - this.time_of_creation);
    }

    $formatMilliseconds(ms) {
      this.$trace("$formatMilliseconds", arguments);
      return ms.toLocaleString("es-ES");
    }

    setTimeout(timeout) {
      this.$trace("$setTimeout", arguments);
      this.options.update_ui_minimum_milliseconds = timeout;
      return this;
    }

    setTotal(total = undefined) {
      this.$trace("$setTotal", arguments);
      try {
        if (typeof total !== "undefined") {
          this.modules_total = total;
        }
        if (!this.options.update_ui) {
          return;
        }
        const htmlTotal = document.querySelector(this.id_all);
        htmlTotal.textContent = this.modules_total;
        return this;
      } catch (error) {
        console.log(error);
        console.log("[WARN][Importer] Cannot update total modules. Insert «" + this.id_all + "» to skip this warning.");
      }
    }

    $prependTrace(message) {
      this.$trace("$prependTrace", arguments);
      try {
        if (!this.options.update_ui) {
          return;
        }
        const htmlTrace = document.querySelector(this.id_trace);
        if (htmlTrace.textContent.length) {
          htmlTrace.textContent = "\n" + htmlTrace.textContent;
        }
        htmlTrace.textContent = message + htmlTrace.textContent;
      } catch (error) {
        console.log(error);
        console.log("[WARN][Importer] Cannot append trace. Insert «" + this.id_trace + "» to skip this warning.");
      }
    }

    $increaseLoadedModules(moduleType = "unknown", moduleId = "unknown") {
      this.$trace("$increaseLoadedModules", arguments);
      try {
        ++this.modules_loaded;
        const isRepeated = this.modules_loaded_ids.indexOf(moduleId) !== -1;
        if (isRepeated) {
          throw new Error("Repeated module load: " + moduleId);
        }
        this.modules_loaded_ids.push(moduleId);
        console.log(`[OK][Importer] Loaded module «${this.modules_loaded}» named «${moduleId}» as «${moduleType}» ${this.$getMillisecondsOfLife()}`);
        if (!this.options.update_ui) {
          return;
        }
        const htmlLoaded = document.querySelector(this.id_loaded);
        htmlLoaded.textContent = this.modules_loaded;
        this.$prependTrace(`Loaded «${moduleType}» from «${moduleId}»`);
        this.$updateLoaderBar();
        if ((this.modules_loaded + 1) >= this.modules_total) {
          this.$removeIntersitial();
        }
      } catch (error) {
        if (this.is_loaded) {
          console.log("[CAUTION][Importer] Module out of the count was loaded: type «" + moduleType + "» from «" + moduleId + "» [" + this.modules_loaded + " modules loaded].");
        } else {
          console.log(error);
          console.log("[WARN][Importer] Cannot update total modules. Insert «" + this.id_loaded + "» to skip this warning.");
        }
      }
    }

    $updateLoaderBar() {
      this.$trace("$updateLoaderBar", arguments);
      try {
        if (!this.options.update_ui) {
          return;
        }
        const htmlLoaderBar = document.querySelector(this.id_loader + " " + this.id_loader_bar);
        const percentageCompleted = Math.round((this.modules_loaded / this.modules_total) * 100);
        htmlLoaderBar.style.width = percentageCompleted + "%";
      } catch (error) {
        console.log(error);
        console.log("[WARN][Importer] Cannot update loaded bar. Insert «" + this.id_loader_bar + "» inside of «" + this.id_loader + "» to skip this warning.");
      }
    }

    $removeIntersitial() {
      this.$trace("$removeIntersitial", arguments);
      try {
        if (this.is_loaded) {
          return;
        }
        this.is_loaded = true;
        if (!this.options.update_ui) {
          return;
        }
        if (this.options.update_ui_minimum_milliseconds) {
          clearTimeout(this.options.update_ui_minimum_milliseconds_timeout_id);
          this.update_ui_minimum_milliseconds_timeout_id = setTimeout(() => {
            const intersitial = document.querySelector(this.id);
            if (intersitial) {
              intersitial.remove();
            } else {
              console.log("Cannot remove intersitial. Insert «" + this.id + "» to skip this warning");
            }
          }, this.options.update_ui_minimum_milliseconds);
        } else {
          const intersitial = document.querySelector(this.id);
          intersitial.remove();
        }
      } catch (error) {
        console.log(error);
        console.log("[WARN][Importer] Cannot remove intersitial. Insert «" + this.id + "» to skip this warning.");
      }
    }

    async scriptSrc(src) {
      this.$trace("scriptSrc", arguments);
      console.log(`[OK][Importer] Loading «${src}» as «script.src» ${this.$getMillisecondsOfLife()}`);
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = (e) => reject(e);
        document.head.appendChild(script);
      });
      this.$increaseLoadedModules("script.src", src);
      return;
    }

    async scriptSrcModule(src) {
      this.$trace("scriptSrcModule", arguments);
      console.log(`[OK][Importer] Loading «${src}» as «script.src.module» ${this.$getMillisecondsOfLife()}`);
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.type = "module";
        script.onload = () => resolve();
        script.onerror = (e) => reject(e);
        document.head.appendChild(script);
      });
      this.$increaseLoadedModules("script.src.module", src);
      return;
    }

    async scriptAsync(url, context = {}) {
      this.$trace("scriptAsync", arguments);
      console.log(`[OK][Importer] Loading «${url}» as «script.async» ${this.$getMillisecondsOfLife()}`);
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch script: ${url}`);
      const scriptText = await response.text();
      const AsyncFunction = (async function () { }).constructor;
      let scriptCode = scriptText;
      try {
        const asyncFunction = new AsyncFunction(...Object.keys(context), scriptText);
        scriptCode = asyncFunction.toString();
        const result = await asyncFunction(...Object.values(context));
        return result;
      } catch (error) {
        this.$error(error, `Error evaluating «script.async» from «${url}» in code «\n${this.$breakLines(scriptCode)}\n»`);
        throw error;
      } finally {
        this.$increaseLoadedModules("script.async", url);
      }
    }

    $wrapInTryCatch(code) {
      let js = "";
      js += `try {\n`;
      js += `${code}\n`;
      js += `} catch(error) {\n`;
      js += `  console.error('Error in «script.async» execution:');\n`;
      js += `  console.error(error.name);\n`;
      js += `  console.error(error.message);\n`;
      js += `  console.error(error.stack);\n`;
      js += `  throw error;\n`;
      js += `}\n`;
      js = js.replace("***THIS_IS_A_MAGIC_TOKEN_TO_NOT_USE_NEVER_EVER***", JSON.stringify(js));
      return js;
    }

    $padLeft(input, spaces = 2, charc = " ") {
      let out = "" + input;
      while (out.length < spaces) {
        out = charc + out;
      }
      return out;
    }

    $breakLines(code) {
      const lines = code.split(/(\r\n|\r|\n)/g).filter(l => {
        return l !== "\n" && l !== "";
      });
      const maxDigits = (lines.length + "").length + 1;
      let out = "";
      for (let index = 0; index < lines.length; index++) {
        const line = lines[index];
        out += this.$padLeft(index + 1, maxDigits, " ");
        out += " | ";
        out += line;
        out += "\n";
      }
      return out;
    }

    async linkStylesheet(href) {
      this.$trace("linkStylesheet", arguments);
      console.log(`[OK][Importer] Loading «${href}» as «link.stylesheet.css» ${this.$getMillisecondsOfLife()}`);
      await new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = href;
        link.onload = () => resolve();
        link.onerror = (e) => reject(e);
        document.head.appendChild(link);
      });
      this.$increaseLoadedModules("link.stylesheet.css", href);
      return;
    }

    async text(url) {
      this.$trace("text", arguments);
      console.log(`[OK][Importer] Loading «${url}» as «text» ${this.$getMillisecondsOfLife()}`);
      const response = await fetch(url);
      this.$increaseLoadedModules("text", url);
      if (!response.ok) throw new Error(`Failed to fetch text: ${url}`);
      return response.text();
    }

    async importVueComponent(url) {
      this.$trace("importVueComponent", arguments);
      try {
        const urlJs = url + ".js";
        const urlCss = url + ".css";
        const urlHtml = url + ".html";
        const template = await this.text(urlHtml);
        await this.scriptAsync(urlJs, { $template: template });
        await this.linkStylesheet(urlCss);
        this.$increaseLoadedModules("vue.component", url);
        return;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }

  }

  window.Importer = Importer;
  window.importer = new Importer();
  window.importer.options.update_ui = true;

  return Importer;

});
(function (factory) {
  const mod = factory();
  /* istanbul ignore next */
  if (typeof window !== 'undefined') {
    window['Superlogger'] = mod;
  }
  /* istanbul ignore next */
  if (typeof global !== 'undefined') {
    global['Superlogger'] = mod;
  }
  /* istanbul ignore next */
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const Superlogger = class {

    static create(id, options) {
      return new this(id, options);
    }

    static levels = {
      trace: 4,
      debug: 3,
      log: 2,
      warn: 1,
      error: 0,
    };

    static defaultOptions = {
      active: true,
      level: "trace"
    };

    static loggers = {};

    static alphabet = "abcdefghijklmnopqrstuvwxyz";

    static generateRandomString(len /* istanbul ignore next */  = 5) {
      let out = "";
      while(out.length < len) {
        out += this.alphabet[Math.floor(Math.random() * this.alphabet.length - 1)];
      }
      return out;
    }

    constructor(idInput = false, options = {}) {
      const id = idInput || this.constructor.generateRandomString(10);
      if (typeof id !== "string") {
        throw new Error("Required parameter «id» to be a string on «Superlogger.constructor»");
      }
      if (id in this.constructor.loggers) {
        throw new Error("Required parameter «id» to be a unique string on «Superlogger.constructor»");
      }
      if (typeof options !== "object") {
        throw new Error("Required parameter «options» to be an object on «Superlogger.constructor»");
      }
      this.$id = id;
      this.$options = Object.assign({}, this.constructor.defaultOptions, options);
      this.$source = undefined;
      this.$events = {};
      this.$callbacks = {
        before: undefined,
        after: undefined,
      };
      this.resetEvents();
      this.resetCallbacks();
      this.constructor.loggers[id] = this;
    }

    activate() {
      this.$options.active = true;
    }

    deactivate() {
      this.$options.active = false;
    }

    setSource(source) {
      this.source = source;
    }

    setLevel(level) {
      if (!(level in this.constructor.levels)) {
        throw new Error("Required parameter «level» to be a recognized level on «Superlogger.setLevel»");
      }
      this.$options.level = this.constructor.levels[level];
    }

    setEvent(id, callback) {
      this.$events[id] = callback;
    }

    resetEvents() {
      this.$events = {
        trace: undefined,
        debug: undefined,
        log: undefined,
        warn: undefined,
        error: undefined,
      };
    }

    setBefore(callback) {
      this.$callbacks.before = callback;
    }

    setAfter(callback) {
      this.$callbacks.after = callback;
    }

    resetCallbacks() {
      this.$callbacks = {
        after: undefined,
        before: undefined,
      };
    }

    replacerFactory() {
      const visited = new WeakMap();
      return (key, value) => {
        if (typeof value === "function") {
          return "[Function] " + value.toString();
        }
        if (typeof value === "object" && value !== null) {
          if (visited.has(value)) {
            return "[Circular]";
          }
          visited.set(value, true);
        } else /* istanbul ignore else */ {}
        return value;
      }
    }

    stringifyForDebugging(obj) {
      return JSON.stringify(obj, this.replacerFactory(), 2);
    }

    $emit(event, args) {
      if(!(event in this.$events)) {
        return "void::event not defined";
      }
      const callback = this.$events[event];
      if(typeof callback === "undefined") {
        return "void::callback not defined";
      }
      return callback(this, args);
    }

    $log(levelId, elements, methodId = false) {
      if(!(levelId in this.constructor.levels)) {
        throw new Error("Required parameter «levelId» to be an identified level on «Superlogger.$log»");
      }
      const level = this.constructor.levels[levelId];
      if (!this.$options.active) {
        return "void::currently active=false state";
      }
      if (this.$options.level < level) {
        return "void::level of tracing out of bounds";
      }
      let message = `[${this.$id}][${levelId}]`;
      if (methodId !== false) {
        message += `[${methodId}]`;
      }
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        const stringification = typeof element === "string" ? element : this.stringifyForDebugging(element);
        message += " " + stringification;
      }
      Event_triggering: {
        if(typeof this.$callbacks.before !== "undefined") {
          this.$callbacks.before(message, this, levelId, elements, methodId);
        }
        console.log(message);
        if(typeof this.$callbacks.after !== "undefined") {
          this.$callbacks.after(message, this, levelId, elements, methodId);
        }
        this.$emit(levelId, {elements, methodId});
      }
    }

    trace(methodId, ...data) {
      return this.$log("trace", data, methodId);
    }

    debug(...data) {
      return this.$log("debug", data);
    }

    log(...data) {
      return this.$log("log", data);
    }

    warn(...data) {
      return this.$log("warn", data);
    }

    error(...data) {
      return this.$log("error", data);
    }

  };

  return Superlogger;
});
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['ControlledFunction'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['ControlledFunction'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const ReturnControl = class {
    constructor(value) {
      this.value = value;
    }
  };

  const MutateControl = class {
    constructor(mutator = {}) {
      this.mutator = mutator;
    }
  };

  const ReturnController = class {
    static create(...args) {
      return new this(...args);
    }

    constructor() {
      this.results = new Map();
      this.functions = new Map();
      this.middlewares = [];
      this.properties = new Map();
    }

    prehook(middleware) {
      this.middlewares.unshift(middleware);
      return this;
    }

    hook(middleware) {
      this.middlewares.push(middleware);
      return this;
    }

    unhook(middleware) {
      this.middlewares = this.middlewares.filter(m => m !== middleware);
      return this;
    }

    prop(properties = {}) {
      Object.assign(this.properties, properties);
      return this;
    }

    hasProp(id) {
      return this.properties.has(id);
    }

    getProp(id, defaultValue = undefined) {
      if (!this.properties.has(id)) {
        return defaultValue;
      }
      return this.properties.get(id);
    }

    setProp(id, value) {
      this.properties.set(id, value);
      return this;
    }

    load(functions) {
      this.functions = new Map(Object.entries(functions));
      return this;
    }

    solved(name) {
      return this.results.get(name);
    }

    pipe(outputName, functionNames, parameters = []) {
      for (let fnName of functionNames) {
        const fnCallback = this.functions.get(fnName);
        if (fnCallback) {
          const result = fnCallback(...parameters);
          if (this.processResult(result, outputName)) {
            return this.solved(outputName);
          }
        }
        for (const middleware of this.middlewares) {
          const result = middleware(this);
          if (this.processResult(result, outputName)) {
            return this.solved(outputName);
          }
        }
      }
      return null;
    }

    processResult(result, outputName) {
      if (result instanceof ReturnControl) {
        this.results.set(outputName, result.value);
        return true;
      } else if (result instanceof MutateControl) {
        const mutator = result.mutator;
        if (typeof mutator === "function") {
          const mutatorResult = mutator(this);
          if (typeof mutatorResult === "object") {
            Object.assign(this.properties, mutatorResult);
          } else if (mutatorResult !== undefined) {
            throw new Error(
              `MutateControl's function mutator must return an object or undefined, found: ${typeof mutatorResult}`
            );
          }
        } else if (typeof mutator === "object") {
          Object.assign(this, mutator);
        } else {
          throw new Error(
            `MutateControl's mutator must be a function or object, found: ${typeof mutator}`
          );
        }
      }
      return false;
    }

    reset() {
      this.results.clear();
      this.properties.clear();
      return this;
    }
  };

  const ControlledFunction = {
    MutateControl,
    ReturnControl,
    ReturnController,
  };

  ControlledFunction.default = ControlledFunction;

  return ControlledFunction;
});

/**
 * From: https://github.com/allnulled/universal-store
 * Also: https://www.npmjs.com/package/@allnulled/universal-store
 */
(function (factory) {

  const mod = factory();

  if (typeof window !== "undefined") {
    window.UniversalStore = mod;
  }
  if (typeof global !== "undefined") {
    global.UniversalStore = mod;
  }
  if (typeof module !== "undefined") {
    module.exports = mod;
  }

})(function () {
const Store = class {

  static create(...args) {
    return new this(...args);
  }

  constructor(initialState = {}, path_to_store = "original_store.json") {
    this.$store = initialState;
    this.$storePath = path_to_store;
    this.events = {};
  }

  _triggerParentEvents(event, path, value) {
    const originalPath = path.join(".");
    if (this.events[originalPath]) {
      this.events[originalPath].forEach((callback) => {
        return callback(event, path, value);
      });
    }
    while (path.length > 0) {
      path.pop();
      const parentPath = path.join(".");
      if (this.events[parentPath]) {
        this.events[parentPath].forEach((callback) => {
          const value = this.get(path);
          return callback(event, path, value);
        });
      }
    }
  }

  get(path = []) {
    return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), this.$store);
  }

  set(path, value) {
    if (!Array.isArray(path) || path.length === 0) {
      throw new Error("La ruta debe ser un array de strings no vacío.");
    }
    const lastKey = path.pop();
    const target = path.reduce((acc, key) => {
      if (!acc[key]) acc[key] = {};
      return acc[key];
    }, this.$store);
    target[lastKey] = value;
    path.push(lastKey);
    this._triggerParentEvents("set", path, value);
  }

  watch(path, callback) {
    const key = path.join(".");
    if (!this.events[key]) {
      this.events[key] = [];
    }
    this.events[key].push(callback);
  }

  unwatch(path, callback) {
    const key = path.join(".");
    if (this.events[key]) {
      this.events[key] = this.events[key].filter((cb) => {
        return cb !== callback;
      });
      if (this.events[key].length === 0) {
        delete this.events[key];
      }
    }
  }

  delete(path) {
    if (!Array.isArray(path) || path.length === 0) {
      throw new Error("La ruta debe ser un array de strings no vacío.");
    }
    const lastKey = path.pop();
    const target = this.get(path);
    if (target && target.hasOwnProperty(lastKey)) {
      delete target[lastKey];
      this._triggerParentEvents("delete", path);
    }
  }

  push(path, value) {
    const array = this.get(path);
    if (Array.isArray(array)) {
      array.push(value);
      this._triggerParentEvents("push", path, array);
    }
  }

  pop(path) {
    const array = this.get(path);
    if (Array.isArray(array)) {
      const value = array.pop();
      this._triggerParentEvents("pop", path, array);
      return value;
    }
  }

  unshift(path, value) {
    const array = this.get(path);
    if (Array.isArray(array)) {
      array.unshift(value);
      this._triggerParentEvents("unshift", path, array);
    }
  }

  shift(path) {
    const array = this.get(path);
    if (Array.isArray(array)) {
      const value = array.shift();
      this._triggerParentEvents("shift", path, array);
      return value;
    }
  }

  add(path, key, value) {
    const object = this.get(path);
    if (object && typeof object === 'object' && !Array.isArray(object)) {
      object[key] = value;
      this._triggerParentEvents("add", path, object);
    }
  }

  remove(path, key) {
    const object = this.get(path);
    if (object && typeof object === 'object' && !Array.isArray(object)) {
      delete object[key];
      this._triggerParentEvents("remove", path, object);
    }
  }

  splice(path, start, deleteCount, ...items) {
    const array = this.get(path);
    if (Array.isArray(array)) {
      const result = array.splice(start, deleteCount, ...items);
      this._triggerParentEvents("splice", path, array);
      return result;
    }
  }

  extend(path, newProps) {
    const object = this.get(path);
    if (object && typeof object === 'object' && !Array.isArray(object)) {
      Object.assign(object, newProps);
      this._triggerParentEvents("extend", path, object);
    }
  }

  multiextend(...extensions) {
    for(let index=0; index<extensions.length; index++) {
      const {
        selector,
        value: targetValue,
        mode,
        modifier
      } = extensions[index];
      this.modify(selector, currentValue => {
        let lastValue = currentValue;
        Set_value: {
          if(mode === "assign") {
            lastValue = Object.assign(currentValue, targetValue);
          } else if(mode === "default") {
            lastValue = Object.assign({}, targetValue, currentValue);
          } else if(mode === "set") {
            lastValue = targetValue;
          } else if(mode === "concat") {
            lastValue = currentValue.concat(targetValue);
          }
        }
        Run_modifier: {
          if(modifier) {
            const result = modifier(lastValue);
            if(typeof result !== "undefined") {
              return result;
            }
          }
          return lastValue;
        }
      });
    }
  }

  modify(path, modifier) {
    const currentValue = this.get(path);
    const newValue = modifier(currentValue);
    const isNotSame = newValue !== currentValue;
    const isNotUndefined = typeof newValue !== "undefined";
    if (isNotUndefined && isNotSame) {
      this.set(path, newValue);
    }
  }

  hydrate(file) {
    const ufs = UFS_manager.create(this.$storePath);
    this.$store = JSON.parse(ufs.read_file(file));
  }

  dehydrate(file) {
    const ufs = UFS_manager.create(this.$storePath);
    ufs.write_file(file, JSON.stringify(this.$store));
  }

};

Store.default = Store;

return Store;
});

/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */
(function(root) {
  "use strict";

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  peg$SyntaxError.buildMessage = function(expected, found) {
    var DESCRIBE_EXPECTATION_FNS = {
          literal: function(expectation) {
            return "\"" + literalEscape(expectation.text) + "\"";
          },

          "class": function(expectation) {
            var escapedParts = "",
                i;

            for (i = 0; i < expectation.parts.length; i++) {
              escapedParts += expectation.parts[i] instanceof Array
                ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
                : classEscape(expectation.parts[i]);
            }

            return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
          },

          any: function(expectation) {
            return "any character";
          },

          end: function(expectation) {
            return "end of input";
          },

          other: function(expectation) {
            return expectation.description;
          }
        };

    function hex(ch) {
      return ch.charCodeAt(0).toString(16).toUpperCase();
    }

    function literalEscape(s) {
      return s
        .replace(/\\/g, '\\\\')
        .replace(/"/g,  '\\"')
        .replace(/\0/g, '\\0')
        .replace(/\t/g, '\\t')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
        .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
    }

    function classEscape(s) {
      return s
        .replace(/\\/g, '\\\\')
        .replace(/\]/g, '\\]')
        .replace(/\^/g, '\\^')
        .replace(/-/g,  '\\-')
        .replace(/\0/g, '\\0')
        .replace(/\t/g, '\\t')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
        .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
    }

    function describeExpectation(expectation) {
      return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
    }

    function describeExpected(expected) {
      var descriptions = new Array(expected.length),
          i, j;

      for (i = 0; i < expected.length; i++) {
        descriptions[i] = describeExpectation(expected[i]);
      }

      descriptions.sort();

      if (descriptions.length > 0) {
        for (i = 1, j = 1; i < descriptions.length; i++) {
          if (descriptions[i - 1] !== descriptions[i]) {
            descriptions[j] = descriptions[i];
            j++;
          }
        }
        descriptions.length = j;
      }

      switch (descriptions.length) {
        case 1:
          return descriptions[0];

        case 2:
          return descriptions[0] + " or " + descriptions[1];

        default:
          return descriptions.slice(0, -1).join(", ")
            + ", or "
            + descriptions[descriptions.length - 1];
      }
    }

    function describeFound(found) {
      return found ? "\"" + literalEscape(found) + "\"" : "end of input";
    }

    return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
  };

  function peg$parse(input, options) {
    options = options !== void 0 ? options : {};

    var peg$FAILED = {},

        peg$startRuleFunctions = { Inicio: peg$parseInicio },
        peg$startRuleFunction  = peg$parseInicio,

        peg$c0 = function(primero, otras) {
              return [primero].concat(otras || []);
            },
        peg$c1 = ",",
        peg$c2 = peg$literalExpectation(",", false),
        peg$c3 = function(tiempo) {
              return tiempo;
            },
        peg$c4 = "-",
        peg$c5 = peg$literalExpectation("-", false),
        peg$c6 = function(inicio, fin) {
              return { tipo: "Rango", inicio, fin };
            },
        peg$c7 = "+",
        peg$c8 = peg$literalExpectation("+", false),
        peg$c9 = " ",
        peg$c10 = peg$literalExpectation(" ", false),
        peg$c11 = function(fecha, hora) {
              delete fecha.tipo;
              delete hora.tipo;
              return { tipo: "FechaHora", ...fecha, ...hora };
            },
        peg$c12 = "/",
        peg$c13 = peg$literalExpectation("/", false),
        peg$c14 = function(anio, mes, dia) {
              return { tipo: "SoloFecha", anio, mes, dia };
            },
        peg$c15 = ":",
        peg$c16 = peg$literalExpectation(":", false),
        peg$c17 = ".",
        peg$c18 = peg$literalExpectation(".", false),
        peg$c19 = function(hora, minuto, segundo, milisegundo) {
              return { tipo: "Hora", hora, minuto, segundo, milisegundo };
            },
        peg$c20 = function(hora, minuto, segundo) {
              return { tipo: "Hora", hora, minuto, segundo };
            },
        peg$c21 = function(hora, minuto) {
              return { tipo: "Hora", hora, minuto };
            },
        peg$c22 = function(partes) {
              return { tipo: "Duracion", ...recomponer_objeto(partes) };
            },
        peg$c23 = function(valor, unidad) {
              return { valor, unidad };
            },
        peg$c24 = "y",
        peg$c25 = peg$literalExpectation("y", false),
        peg$c26 = function() { return "anios"; },
        peg$c27 = "mon",
        peg$c28 = peg$literalExpectation("mon", false),
        peg$c29 = function() { return "meses"; },
        peg$c30 = "d",
        peg$c31 = peg$literalExpectation("d", false),
        peg$c32 = function() { return "dias"; },
        peg$c33 = "h",
        peg$c34 = peg$literalExpectation("h", false),
        peg$c35 = function() { return "horas"; },
        peg$c36 = "min",
        peg$c37 = peg$literalExpectation("min", false),
        peg$c38 = function() { return "minutos"; },
        peg$c39 = "s",
        peg$c40 = peg$literalExpectation("s", false),
        peg$c41 = function() { return "segundos"; },
        peg$c42 = "ms",
        peg$c43 = peg$literalExpectation("ms", false),
        peg$c44 = function() { return "milisegundos"; },
        peg$c45 = /^[0-9]/,
        peg$c46 = peg$classExpectation([["0", "9"]], false, false),
        peg$c47 = function() { return parseInt(text(), 10); },
        peg$c48 = /^[0-1]/,
        peg$c49 = peg$classExpectation([["0", "1"]], false, false),
        peg$c50 = /^[0-3]/,
        peg$c51 = peg$classExpectation([["0", "3"]], false, false),
        peg$c52 = /^[0-2]/,
        peg$c53 = peg$classExpectation([["0", "2"]], false, false),
        peg$c54 = /^[0-5]/,
        peg$c55 = peg$classExpectation([["0", "5"]], false, false),
        peg$c56 = "\t",
        peg$c57 = peg$literalExpectation("\t", false),

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1 }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description, location) {
      location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

      throw peg$buildStructuredError(
        [peg$otherExpectation(description)],
        input.substring(peg$savedPos, peg$currPos),
        location
      );
    }

    function error(message, location) {
      location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

      throw peg$buildSimpleError(message, location);
    }

    function peg$literalExpectation(text, ignoreCase) {
      return { type: "literal", text: text, ignoreCase: ignoreCase };
    }

    function peg$classExpectation(parts, inverted, ignoreCase) {
      return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
    }

    function peg$anyExpectation() {
      return { type: "any" };
    }

    function peg$endExpectation() {
      return { type: "end" };
    }

    function peg$otherExpectation(description) {
      return { type: "other", description: description };
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos], p;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column
        };

        while (p < pos) {
          if (input.charCodeAt(p) === 10) {
            details.line++;
            details.column = 1;
          } else {
            details.column++;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildSimpleError(message, location) {
      return new peg$SyntaxError(message, null, null, location);
    }

    function peg$buildStructuredError(expected, found, location) {
      return new peg$SyntaxError(
        peg$SyntaxError.buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parseInicio() {
      var s0;

      s0 = peg$parseLista();

      return s0;
    }

    function peg$parseLista() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseUnidadDeTiempo();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseOtraUnidadDeTiempo();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseOtraUnidadDeTiempo();
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseOtraUnidadDeTiempo() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_();
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c1;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c2); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_();
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseUnidadDeTiempo();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c3(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseUnidadDeTiempo() {
      var s0;

      s0 = peg$parseDuracion();
      if (s0 === peg$FAILED) {
        s0 = peg$parseRango();
        if (s0 === peg$FAILED) {
          s0 = peg$parseMomento();
        }
      }

      return s0;
    }

    function peg$parseRango() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseMomento();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 45) {
          s2 = peg$c4;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseMomento();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c6(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseMomento() {
      var s0;

      s0 = peg$parseFechaHora();
      if (s0 === peg$FAILED) {
        s0 = peg$parseSoloFecha();
        if (s0 === peg$FAILED) {
          s0 = peg$parseHora();
        }
      }

      return s0;
    }

    function peg$parseFechaHora() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseSoloFecha();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 43) {
          s2 = peg$c7;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c8); }
        }
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 32) {
            s2 = peg$c9;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseHora();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c11(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSoloFecha() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseAnio();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 47) {
          s2 = peg$c12;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c13); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseMes();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
              s4 = peg$c12;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c13); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseDia();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c14(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseHora() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseHoraExacta();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 58) {
          s2 = peg$c15;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c16); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseMinuto();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 58) {
              s4 = peg$c15;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c16); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseSegundo();
              if (s5 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                  s6 = peg$c17;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c18); }
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseMilisegundo();
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c19(s1, s3, s5, s7);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseHoraExacta();
        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s2 = peg$c15;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c16); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseMinuto();
            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 58) {
                s4 = peg$c15;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c16); }
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parseSegundo();
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c20(s1, s3, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseHoraExacta();
          if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 58) {
              s2 = peg$c15;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c16); }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$parseMinuto();
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c21(s1, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }

      return s0;
    }

    function peg$parseDuracion() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseParteDuracion();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseParteDuracion();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c22(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseParteDuracion() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseNumero();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseUnidad();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c23(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseUnidad() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 121) {
        s1 = peg$c24;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c26();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 3) === peg$c27) {
          s1 = peg$c27;
          peg$currPos += 3;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c28); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c29();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 100) {
            s1 = peg$c30;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c31); }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c32();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 104) {
              s1 = peg$c33;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c34); }
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c35();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 3) === peg$c36) {
                s1 = peg$c36;
                peg$currPos += 3;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c37); }
              }
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c38();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 115) {
                  s1 = peg$c39;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c40); }
                }
                if (s1 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c41();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  if (input.substr(peg$currPos, 2) === peg$c42) {
                    s1 = peg$c42;
                    peg$currPos += 2;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c43); }
                  }
                  if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c44();
                  }
                  s0 = s1;
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseAnio() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      if (peg$c45.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c46); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s2 !== peg$FAILED) {
          if (peg$c45.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c46); }
          }
          if (s3 !== peg$FAILED) {
            if (peg$c45.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c46); }
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c47();
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseMes() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (peg$c48.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c47();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseDia() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (peg$c50.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c51); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c47();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseHoraExacta() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (peg$c52.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c53); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c47();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseMinuto() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (peg$c54.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c55); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c47();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSegundo() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (peg$c54.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c55); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c47();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseMilisegundo() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (peg$c45.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c46); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          if (peg$c45.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c46); }
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c47();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseNumero() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c45.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c46); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c45.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c46); }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c47();
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 32) {
        s0 = peg$c9;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 9) {
          s0 = peg$c56;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c57); }
        }
      }

      return s0;
    }


      const recomponer_objeto = function(partes) {
        let objeto = {};
        for(let i=0; i<partes.length; i++) {
          const parte = partes[i];
          objeto[parte.unidad] = parte.valor;
        }
        return objeto;
      };


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail(peg$endExpectation());
      }

      throw peg$buildStructuredError(
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  root.Timeformat_parser = {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})(typeof window === 'undefined' ? global : window);

(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['LswTimer'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['LswTimer'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const Timeformat_utils = {};

  Timeformat_utils.formatHour = function (horaInput, minutoInput) {
    const hora = ("" + horaInput).padStart(2, '0');
    const minuto = ("" + minutoInput).padStart(2, '0');
    return `${hora}:${minuto}`;
  };

  Timeformat_utils.formatHourFromMomento = function (momentoBrute, setMeridian = false) {
    const momento = Timeformat_utils.toPlainObject(momentoBrute);
    const hora = ("" + (momento.hora ?? 0)).padStart(2, '0');
    const minuto = ("" + (momento.minuto ?? 0)).padStart(2, '0');
    return `${hora}:${minuto}${setMeridian ? hora >= 12 ? 'pm' : 'am' : ''}`;
  };

  Timeformat_utils.addDuracionToMomento = function (momentoBrute, duracion) {
    const momentoFinal = {};
    const duracionParsed = Timeformat_parser.parse(duracion)[0];
    const props = ["anio", "mes", "dia", "hora", "minuto", "segundo"];
    const propsInDuracion = ["anios", "meses", "dias", "horas", "minutos", "segundos"];
    for (let index = 0; index < props.length; index++) {
      const prop = props[index];
      const propInDuracion = propsInDuracion[index];
      const base = momentoBrute[prop] ?? 0;
      const aggregated = duracionParsed[propInDuracion] ?? 0;
      momentoFinal[prop] = base + aggregated;
    }
    return momentoFinal;
  };

  Timeformat_utils.toPlainObject = function (obj) {
    const seen = new WeakSet();
    return JSON.parse(JSON.stringify(obj, (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) return undefined; // Ignora referencias circulares
        seen.add(value);
      }
      return value;
    }));
  };

  Timeformat_utils.isDurationOrThrow = function (text) {
    const errorMessage = "It must be a duration only, like 0y 0mon 0d 0h 0min 0s 0ms";
    try {
      const ast = Timeformat_parser.parse(text);
      const mainExpression = ast[0];
      if (mainExpression.tipo === "Duracion") {
        throw new Error(errorMessage);
      }
    } catch (error) {
      throw new Error(errorMessage);
    }
    return true;
  };

  Timeformat_utils.isDateOrThrow = function (text) {
    const errorMessage = "It must be a date only, like 2025/01/01";
    try {
      const ast = Timeformat_parser.parse(text);
      const mainExpression = ast[0];
      if (mainExpression.tipo !== "SoloFecha") {
        throw new Error(errorMessage);
      }
    } catch (error) {
      throw new Error(errorMessage);
    }
    return true;
  };

  Timeformat_utils.isHourOrThrow = function (text) {
    const errorMessage = "It must be an hour only, like 00:00 or 23:00";
    try {
      const ast = Timeformat_parser.parse(text);
      const mainExpression = ast[0];
      if (mainExpression.tipo === "Hora") {
        throw new Error(errorMessage);
      }
    } catch (error) {
      throw new Error(errorMessage);
    }
    return true;
  };

  return {
    parser: Timeformat_parser,
    utils: Timeformat_utils
  };

});

(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['LswCycler'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['LswCycler'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const noop = () => { };

  class LswCyclerSet {
    constructor(value) {
      this.value = value;
    }
  }

  class LswCyclerReturn {
    constructor(value) {
      this.value = value;
    }
  }

  class LswCyclerReturner {
    constructor(value) {
      if(typeof value !== "function") {
        throw new Error("Required argument «value» to be a function on «LswCyclerReturner.constructor»");
      }
      this.value = value;
    }
  }

  class LswCycler {

    static Return = LswCyclerReturn;
    static Returner = LswCyclerReturner;
    static Set = LswCyclerSet;

    static returner(value) {
      return new this.Returner(value);
    }

    static return(value) {
      return new this.Return(value);
    }

    static set(value) {
      return new this.Set(value);
    }

    constructor(obj) {
      this.obj = obj;
    }

    static from(obj) {
      return new LswCycler(obj);
    }

    async run(steps, parameters) {
      let original = [];
      let output = original;
      Iterate_cycle:
      for (let j = 0; j < steps.length; j++) {
        let step = steps[j];
        let fn = this.obj[step];
        if (typeof fn !== "function") {
          throw new Error("Required step «" + step + "» to be a function on round " + j + " on «LswCycler.run»");
        }
        const result = await fn.call(this.obj, parameters);
        Apply_intercycle_signals: {
          if (result instanceof this.constructor.Set) {
            output = await result.value;
          } else if (result instanceof this.constructor.Return) {
            return result.value;
          } else if (result instanceof this.constructor.Returner) {
            return result.value(output, original);
          }
        }
        Append_result_if_not_changed_output: {
          original.push(result);
        }
      }
      return output;
    }

  }

  return LswCycler;

});
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['LswCompromiser'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['LswCompromiser'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  Promise_extensions: {
    globalThis.Promise = class TrackablePromise extends Promise {
      constructor(executor) {
        super((resolve, reject) => {
          executor(
            (value) => {
              this.state = "fulfilled";
              resolve(value);
            },
            (reason) => {
              this.state = "rejected";
              reject(reason);
            }
          )
        });
        this.state = "pending";
      }
    };

    globalThis.Promise.prototype.chain = function (nextPromise) {
      return this.then(() => nextPromise);
    };
  }

  class PromiseMap {

    constructor(keys) {
      this.promises = new Map();

      keys.forEach(key => {
        this.set(key);
      });
    }

    static create(keys) {
      return new this(keys);
    }

    has(key) {
      return this.promises.has(key);
    }

    get(key) {
      if (!this.has(key)) {
        throw new Error(`Required argument «key» to be an existing key (not «${key}») on «PromiseMap.get»`);
      }
      return this.promises.get(key);
    }

    set(key) {
      if (this.has(key)) {
        throw new Error(`Required argument «key» to not be an existing key (not «${key}») on «PromiseMap.set»`);
      }
      let resolve, reject;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      this.promises.set(key, { promise, resolve, reject });
    }

    unset(key) {
      if (!this.has(key)) {
        throw new Error(`Required argument «key» to be an existing key (not «${key}») on «PromiseMap.unset»`);
      }
      this.promises.delete(key);
    }

    on(key) {
      if (!this.has(key)) {
        throw new Error(`Required argument «key» to be an existing key (not «${key}») on «PromiseMap.on»`);
      }
      return this.promises.get(key).promise;
    }

    bind(key, key2) {
      this.on(key).then(output => this.get(key2).resolve(output));
    }

    propagate(key) {
      return {
        to: (key2) => {
          this.bind(key, key2);
          return this.propagate(key2);
        }
      }
    }

  }

  globalThis.PromiseMap = PromiseMap;

  return PromiseMap;

});
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['LswUtils'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['LswUtils'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const LswUtils = {};

  LswUtils.hello = () => console.log("Hello!");

  ///////////////////////////////////////////////////////
  // API de Excel: usa SheetJS
  Object.assign(LswUtils, {
    readFileAsArrayBuffer(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = event => resolve(event.target.result);
        reader.onerror = error => reject(error);
        reader.readAsArrayBuffer(file);
      });
    },
    readFileAsText(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = event => resolve(event.target.result);
        reader.onerror = error => reject(error);
        reader.readAsText(file);
      });
    },
    readFileAsBinaryString(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = event => resolve(event.target.result);
        reader.onerror = error => reject(error);
        reader.readAsBinaryString(file);
      });
    },
    selectFile() {
      return new Promise(resolve => {
        const inputHtml = document.createElement("input");
        inputHtml.setAttribute("type", "file");
        inputHtml.setAttribute("accept", ".ods,.xlsx,.xls,.csv");
        inputHtml.style.display = "none";
        document.body.appendChild(inputHtml);
        inputHtml.addEventListener("change", event => {
          try {
            const file = event.target.files[0];
            if (file) {
              return resolve(file);
            } else {
              return resolve(undefined);
            }
          } catch (error) {
            console.log("This should not happen :(", error);
          } finally {
            inputHtml.remove();
          }
        });
        inputHtml.click();
      });
    },
    sheetToArray(sheet) {
      // Obtener el rango de celdas activo de la hoja
      const range = sheet['!ref']; // Ejemplo: 'A1:C3'
      // Extraer las coordenadas de la celda inicial y final del rango
      const [startCell, endCell] = range.split(':');
      const startCol = startCell.match(/[A-Z]+/)[0]; // Columna de la primera celda (por ejemplo, 'A')
      const startRow = parseInt(startCell.match(/\d+/)[0], 10); // Fila de la primera celda (por ejemplo, 1)
      const endCol = endCell.match(/[A-Z]+/)[0]; // Columna de la última celda (por ejemplo, 'C')
      const endRow = parseInt(endCell.match(/\d+/)[0], 10); // Fila de la última celda (por ejemplo, 3)
      const data = [];
      // Iterar sobre las filas y columnas dentro del rango
      for (let row = startRow; row <= endRow; row++) {
        const rowData = [];
        for (let col = startCol.charCodeAt(0); col <= endCol.charCodeAt(0); col++) {
          const cellAddress = String.fromCharCode(col) + row;
          const cell = sheet[cellAddress]; // Obtener la celda
          rowData.push(cell ? cell.v : null); // Si la celda existe, tomar su valor. Si no, agregar `null`
        }
        data.push(rowData); // Agregar la fila al array de datos
      }
      return data;
    }
  });

  ///////////////////////////////////////////////////////
  // API de Conductometria: usa API de Excel (so: SheetJS)
  Object.assign(LswUtils, {
    isDatePassed(date, time, currentDate = new Date()) {
      const [day, month, year] = date.split("/").map(Number);
      const [hour, minute, second] = time.split(":").map(Number);
      const targetDate = new Date(year, month-1, day, hour, minute, second);
      return currentDate > targetDate;
    },
    sheetToRegistros(sheet, asObjectIsOkay = false) {
      const raw = this.sheetToArray(sheet);
      const byDate = {};
      let lastDate = undefined;
      const currentDate = new Date();
      Compact_by_date_using_last_date: {
        for (let index = 0; index < raw.length; index++) {
          const cells = raw[index];
          const [time, content] = cells;
          const isDate = time.match(/[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]/g);
          if (isDate) {
            if (!(time in byDate)) {
              byDate[time] = {};
            }
            lastDate = time;
          } else {
            if (typeof content === "string") {
              if (!(time in byDate[lastDate])) {
                byDate[lastDate][time] = [];
              }
              Add_properties_to_hour: {
              }
              const items = content.split(".").filter(l => l !== "");
              for (let indexItem = 0; indexItem < items.length; indexItem++) {
                const item = items[indexItem];
                const [name, details] = item.split(":").filter(l => l !== "");
                let event = {};
                Add_properties_to_event: {
                  Object.assign(event, { name });
                  Object.assign(event, details ? { details: details.trim() } : {});
                }
                byDate[lastDate][time].push(event);
              }
            }
          }
        }
      }
      if (asObjectIsOkay) {
        return byDate;
      }
      const output = [];
      Format_to_pure_array_to_avoid_confusions: {
        const daysSorted = Object.keys(byDate).sort();
        for (let index_day = 0; index_day < daysSorted.length; index_day++) {
          const day_id = daysSorted[index_day];
          const day_data = byDate[day_id];
          const day_output = {
            day: day_id,
            hours: []
          };
          const hoursSorted = Object.keys(day_data).sort();
          for (let index_hour = 0; index_hour < hoursSorted.length; index_hour++) {
            const hour_id = hoursSorted[index_hour];
            const hour_data = day_data[hour_id];
            const hour_is_passed = this.isDatePassed(day_id, hour_id, currentDate);
            const hour_is_current = hour_is_passed && (() => {
              const [hours, minutes, seconds] = hour_id.split(":").map(Number);
              const hour_next_id = [hours + 1, minutes, seconds].map(t => ("" + t).padStart(2, "0")).join(":");
              console.log(hour_next_id);
              return !this.isDatePassed(day_id, hour_next_id, currentDate);
            })();
            const hour_output = {
              hour: hour_id,
              events: [],
              passed: hour_is_passed,
              current: hour_is_current,
            };
            for (let index_item = 0; index_item < hour_data.length; index_item++) {
              const item = hour_data[index_item];
              hour_output.events.push(item);
            }
            day_output.hours.push(hour_output);
          }
          output.push(day_output);
        }
      }
      return output;
    },
    async loadConductometriaByExcelFile() {
      try {
        const file = await this.selectFile();
        const data = await this.readFileAsBinaryString(file);
        const workbook = XLSX.read(data, { type: "binary", cellDates: false });
        const sheet = workbook.Sheets["Tracking"];
        const registros = this.sheetToRegistros(sheet);
        return { registros };
      } catch (error) {
        console.log(error);
      }
    },
  });

  // API de LSW:
  LswUtils.toPlainObject = function(obj) {
    const seen = new WeakSet();
    return JSON.parse(JSON.stringify(obj, (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) return undefined; // Ignora referencias circulares
        seen.add(value);
      }
      return value;
    }));
  };

  LswUtils.pluralizar = function(singular, plural, contexto, cantidad) {
    return contexto.replace("%s", cantidad === 1 ? singular : plural).replace("%i", cantidad);
  };

  LswUtils.getRandomString = function(len = 10) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let out = "";
    while(out.length < len) {
      out += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return out;
  };

  LswUtils.hello = function() {
    console.log("hello");
  };

  return LswUtils;
});
/*
  @artifact:     Independent artifact
  @feature:      node and browser
  @url:          https://github.com/allnulled/universal-file-system.git
  @name:         @allnulled/universal-file-system
  @version:      1.0.0
  @description:  Can manage a filesystem-like API on any: nodejs, browser (localStorage and IndexedDB)
*/
(function (factory) {
  const name = "UFS_manager";
  const modulo = factory();
  if (typeof window !== 'undefined') {
    window[name] = modulo;
  }
  if (typeof module !== 'undefined') {
    module.exports = modulo;
  }
  if (typeof global !== 'undefined') {
    global[name] = modulo;
  }
  return modulo;
})(function () {
  const FilesystemError = class extends Error {
    constructor(...args) {
      super(...args);
      this.name = "FilesystemError";
    }
  }
  const UFS_manager_for_node = class {
    constructor() {
      // @OK
    }
    init() {
      return this;
    }
    trace(method, args = []) {
      console.log("[ufs][node-driver][" + method + "]", Array.from(args).map(arg => typeof(arg) + ": " + arg).join(", "));
    }
    resolve_path(...args) {
      this.trace("resolve_path", arguments);
      return require("path").resolve(...args);
    }
    get_current_directory() {
      this.trace("get_current_directory", arguments);
      return process.cwd();
    }
    change_directory(node) {
      this.trace("change_directory", arguments);
      return process.chdir(node);
    }
    rename(node, node2) {
      this.trace("rename", arguments);
      return require("fs").renameSync(node, node2);
    }
    read_directory(node) {
      this.trace("read_directory", arguments);
      return require("fs").readdirSync(node).reduce((out, item) => {
        const subnode_fullpath = require("path").resolve(node, item);
        out[item] = require("fs").lstatSync(subnode_fullpath).isFile() ? "..." : {};
        return out;
      }, {});
    }
    read_file(node) {
      this.trace("read_file", arguments);
      return require("fs").readFileSync(node).toString();
    }
    make_directory(node) {
      this.trace("make_directory", arguments);
      return require("fs").mkdirSync(node);
    }
    write_file(node, contents) {
      this.trace("write_file", arguments);
      return require("fs").writeFileSync(node, contents);
    }
    exists(node) {
      this.trace("exists", arguments);
      return require("fs").existsSync(node);
    }
    is_file(node) {
      this.trace("is_file", arguments);
      return require("fs").lstatSync(node).isFile();
    }
    is_directory(node) {
      this.trace("is_directory", arguments);
      return require("fs").lstatSync(node).isDirectory();
    }
    delete_file(node) {
      this.trace("delete_file", arguments);
      return require("fs").unlinkSync(node);
    }
    delete_directory(node) {
      this.trace("delete_directory", arguments);
      return require("fs").rmdirSync(node, { recursive: true });
    }
  }
  
  const UFS_manager_for_localstorage = class extends UFS_manager_for_node {
    constructor(storage_id = "ufs_main_storage") {
      super();
      this.storage_id = storage_id;
      this.current_directory = this.environment === "node" ? process.cwd : "/";
    }
    trace(method, args = []) {
      console.log("[ufs][ls-driver][" + method + "]", Array.from(args).map(arg => typeof(arg) + ": " + arg).join(", "));
    }
    get_persisted_data() {
      this.trace("get_persisted_data", arguments);
      if (!(this.storage_id in localStorage)) {
        localStorage[this.storage_id] = '{"files":{}}';
      }
      const data = JSON.parse(localStorage[this.storage_id]);
      return data;
    }
    set_persisted_data(data) {
      this.trace("set_persisted_data", arguments);
      localStorage[this.storage_id] = JSON.stringify(data);
    }
    remove_slash_end(txt) {
      // this.trace("remove_slash_end", arguments);
      const txt2 = txt.replace(/\/$/g, "");
      if (txt2.length === 0) {
        return "/";
      }
      return txt2;
    }
    remove_repeated_slahes(txt) {
      // this.trace("remove_repeated_slahes", arguments);
      return txt.replace(/\/(\/)+/g, "/");
    }
    resolve_path(...args) {
      this.trace("resolve_path", arguments);
      Validate_args: {
        if (args.length === 0) {
          throw new Error("Method «resolve_path» requires 1 or more parameters");
        }
        for (let index_parameter = 0; index_parameter < args.length; index_parameter++) {
          const arg = args[index_parameter];
          if (typeof arg !== "string") {
            throw new Error("Method «resolve_path» requires only strings as parameters (on index «" + index_parameter + "»)");
          }
        }
      }
      let path_parts = [];
      Format_path: {
        const replace_last_slash_for_nothing = arg => this.remove_slash_end(arg);
        path_parts = args.map(replace_last_slash_for_nothing);
        if (!path_parts[0].startsWith("/")) {
          path_parts.unshift(this.current_directory.replace(/\/$/g, ""));
        }
      }
      let path_text = "";
      Join_path: {
        const replace_fist_slash_for_nothing = arg => arg.replace(/^\//g, "");
        for (let index_part = 0; index_part < path_parts.length; index_part++) {
          const path_part = path_parts[index_part];
          if (path_part.startsWith("/")) {
            path_text = path_part;
          } else {
            if (path_text !== "/") {
              path_text += "/";
            }
            path_text += path_part.replace(replace_fist_slash_for_nothing);
          }
        }
      }
      Fix_slash_repetitions: {
        path_text = this.remove_repeated_slahes(path_text);
      }
      Resolve_double_dots: {
        const parts = path_text.split("/");
        const stack = [];
        Iterating_parts:
        for (const part of parts) {
          if (part === "" || part === ".") {
            continue Iterating_parts;
          } else if (part === "..") {
            if (stack.length > 0) {
              stack.pop();
            }
          } else {
            stack.push(part);
          }
        }
        path_text = "/" + stack.join("/");
      }
      return path_text;
    }
    get_current_directory() {
      this.trace("get_current_directory", arguments);
      return this.resolve_path(this.current_directory);
    }
    change_directory(node) {
      this.trace("change_directory", arguments);
      const is_directory = this.exists(node);
      if (!is_directory) {
        throw new FilesystemError("Cannot «change_directory» because destination does not exist at: «" + this.resolve_path(node) + "»");
      }
      this.current_directory = this.resolve_path(node);
      return this.current_directory;
    }
    operate_on_node(node, callback, should_persist = true) {
      this.trace("operate_on_node", arguments);
      const data = this.get_persisted_data();
      const node_solved = this.resolve_path(node);
      const node_parts = node_solved.split("/").filter(p => p !== "");
      const root = data.files;
      const current_index = ["data"];
      let pivot = root;
      let output = undefined;
      if (node_parts.length === 0) {
        output = callback(data, "files", current_index);
      } else {
        for (let index_part = 0; index_part < node_parts.length; index_part++) {
          const node_part = node_parts[index_part];
          if (index_part === (node_parts.length - 1)) {
            output = callback(pivot, node_part, current_index);
          } else {
            pivot = pivot[node_part];
          }
          current_index.push(node_part);
        }
      }
      if (should_persist) {
        this.set_persisted_data(data);
      }
      return output;
    }
    read_directory(node) {
      this.trace("read_directory", arguments);
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if (!(last_property in pivot)) {
          throw new FilesystemError("Cannot «read_directory» because node does not exist at: «" + this.resolve_path(node) + "»");
        }
        if (typeof pivot[last_property] !== "object") {
          throw new FilesystemError("Cannot «read_directory» because node is a file at: «" + this.resolve_path(node) + "»");
        }
        return pivot[last_property];
      });
    }
    read_file(node) {
      this.trace("read_file", arguments);
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if (!(last_property in pivot)) {
          throw new FilesystemError("Cannot «read_file» because node does not exist at: «" + this.resolve_path(node) + "»");
        }
        if (typeof pivot[last_property] !== "string") {
          throw new FilesystemError("Cannot «read_file» because node is a directory at: «" + this.resolve_path(node) + "»");
        }
        return pivot[last_property];
      });
    }
    make_directory(node) {
      this.trace("make_directory", arguments);
      this.operate_on_node(node, (pivot, last_property, index) => {
        if (last_property in pivot) {
          throw new FilesystemError("Cannot «make_directory» because node already exists at: «" + this.resolve_path(node) + "»");
        }
        pivot[last_property] = {};
      });
    }
    write_file(node, contents) {
      this.trace("write_file", arguments);
      this.operate_on_node(node, (pivot, last_property, index) => {
        if (last_property in pivot) {
          if (typeof pivot[last_property] !== "string") {
            throw new FilesystemError("Cannot «write_file» because node is a directory at: «" + this.resolve_path(node) + "»");
          }
        }
        pivot[last_property] = contents;
      });
    }
    exists(node) {
      this.trace("exists", arguments);
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if (!(last_property in pivot)) {
          return false;
        }
        return true;
      }, false);
    }
    is_file(node) {
      this.trace("is_file", arguments);
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if (!(last_property in pivot)) {
          return false;
        }
        if (typeof pivot[last_property] !== "string") {
          return false;
        }
        return true;
      }, false);
    }
    is_directory(node) {
      this.trace("is_directory", arguments);
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if (!(last_property in pivot)) {
          return false;
        }
        if (typeof pivot[last_property] !== "object") {
          return false;
        }
        return true;
      }, false);
    }
    delete_file(node) {
      this.trace("delete_file", arguments);
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if (typeof pivot[last_property] === "undefined") {
          throw new FilesystemError("Cannot «delete_file» because node does not exist at: «" + this.resolve_path(node) + "»");
        }
        if (typeof pivot[last_property] !== "string") {
          throw new FilesystemError("Cannot «delete_file» because node is a directory at: «" + this.resolve_path(node) + "»");
        }
        delete pivot[last_property];
        return true;
      }, true);
    }
    delete_directory(node) {
      this.trace("delete_directory", arguments);
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if (typeof pivot[last_property] === "undefined") {
          console.log(pivot);
          console.log(last_property);
          throw new FilesystemError("Cannot «delete_directory» because does not exists at: «" + this.resolve_path(node) + "»");
        }
        if (typeof pivot[last_property] !== "object") {
          throw new FilesystemError("Cannot «delete_directory» because node is a file at: «" + this.resolve_path(node) + "»");
        }
        delete pivot[last_property];
        return true;
      }, true);
    }
    rename(node, node2) {
      this.trace("rename", arguments);
      const last_name = this.resolve_path(node2).split("/").filter(p => p !== "").pop();
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if (typeof pivot[last_property] === "undefined") {
          throw new FilesystemError("Cannot «rename» because does not exists at: «" + this.resolve_path(node) + "»");
        }
        pivot[last_name] = pivot[last_property];
        pivot[last_property] = undefined;
        delete pivot[last_property];
        return true;
      }, true);
    }

  }

  const UFS_manager_for_idb = class extends UFS_manager_for_localstorage {

    constructor(db_name = "ufs_db") {
      super();
      this.db_name = db_name;
      this.db = null;
      this.current_directory = "/";
    }

    trace(method, args = []) {
      console.log("[ufs][idb-driver][" + method + "]", Array.from(args).map(arg => typeof(arg) + ": " + arg).join(", "));
    }

    init() {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(this.db_name, 1);
        request.onupgradeneeded = (event) => {
          let db = event.target.result;
          if (!db.objectStoreNames.contains("ufs")) {
            let store = db.createObjectStore("ufs", { keyPath: "id" });
            store.createIndex("parentId", "parentId", { unique: false });
          }
        };
        request.onsuccess = (event) => {
          this.db = event.target.result;
          resolve();
        };
        request.onerror = (event) => reject(event.target.error);
      });
    }

    read_directory(parentIdInput = "/") {
      this.trace("read_directory", arguments);
      const parentId = this.resolve_path(parentIdInput);
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction("ufs", "readonly");
        const store = transaction.objectStore("ufs");
        const index = store.index("parentId");
        const request = index.getAll(parentId);
        request.onsuccess = () => {
          let result = {};
          for (let item of request.result) {
            result[item.name] = item.type === "file" ? "..." : {};
          }
          resolve(result);
        };
        request.onerror = () => reject(request.error);
      });
    }

    read_file(nodeInput) {
      this.trace("read_file", arguments);
      const node = this.resolve_path(nodeInput);
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction("ufs", "readonly");
        const store = transaction.objectStore("ufs");
        const request = store.get(node);
        request.onsuccess = () => {
          resolve(request.result ? request.result.content : null);
        };
        request.onerror = () => reject(request.error);
      });
    }

    write_file(nodeInput, contents) {
      this.trace("write_file", arguments);
      const node = this.resolve_path(nodeInput);
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction("ufs", "readwrite");
        const store = transaction.objectStore("ufs");
        store.put({ id: node, name: node.split("/").pop(), parentId: node.split("/").slice(0, -1).join("/") || "/", type: "file", content: contents });
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
      });
    }

    make_directory(nodeInput) {
      this.trace("make_directory", arguments);
      const node = this.resolve_path(nodeInput);
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction("ufs", "readwrite");
        const store = transaction.objectStore("ufs");
        store.put({ id: node, name: node.split("/").pop(), parentId: node.split("/").slice(0, -1).join("/") || "/", type: "directory" });
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
      });
    }

    exists(nodeInput) {
      this.trace("exists", arguments);
      const node = this.resolve_path(nodeInput);
      return new Promise((resolve) => {
        const transaction = this.db.transaction("ufs", "readonly");
        const store = transaction.objectStore("ufs");
        const request = store.get(node);
        request.onsuccess = () => resolve(!!request.result);
        request.onerror = () => resolve(false);
      });
    }

    is_file(nodeInput) {
      this.trace("is_file", arguments);
      const node = this.resolve_path(nodeInput);
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction("ufs", "readonly");
        const store = transaction.objectStore("ufs");
        const request = store.get(node);
        request.onsuccess = () => resolve(request.result ? request.result.type === "file" : false);
        request.onerror = () => reject(request.error);
      });
    }

    is_directory(nodeInput) {
      this.trace("is_directory", arguments);
      const node = this.resolve_path(nodeInput);
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction("ufs", "readonly");
        const store = transaction.objectStore("ufs");
        const request = store.get(node);
        request.onsuccess = () => resolve(request.result ? request.result.type === "directory" : false);
        request.onerror = () => reject(request.error);
      });
    }

    delete_file(nodeInput) {
      this.trace("delete_file", arguments);
      const node = this.resolve_path(nodeInput);
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction("ufs", "readwrite");
        const store = transaction.objectStore("ufs");
        const request = store.delete(node);
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
      });
    }

    delete_directory(nodeInput) {
      this.trace("delete_directory", arguments);
      const node = this.resolve_path(nodeInput);
      const memos = [node];
      return new Promise((resolve, reject) => {
        this.read_directory(node).then(async (contents) => {
          const transaction = this.db.transaction("ufs", "readwrite");
          const store = transaction.objectStore("ufs");
          Iterating_files:
          for (let item in contents) {
            const otherPath = this.resolve_path(`${node}/${item}`);
            if(memos.indexOf(otherPath) !== -1) {
              continue Iterating_files;
            }
            memos.push(otherPath);
            await this.delete_directory(otherPath);
          }
          store.delete(node);
          transaction.oncomplete = () => resolve();
          transaction.onerror = () => reject(transaction.error);
        });
      });
    }

    rename(nodeInput, newName) {
      this.trace("rename", arguments);
      const node = this.resolve_path(nodeInput);
      const newNode = node.split("/").slice(0, -1).concat(newName).join("/") || "/";
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction("ufs", "readwrite");
        const store = transaction.objectStore("ufs");
        const request = store.get(node);
        request.onsuccess = () => {
          if (!request.result) {
            reject(new Error("Node not found"));
            return;
          }
          const data = request.result;
          data.id = newNode;
          data.name = newName;
          store.delete(node);
          store.put(data);
          transaction.oncomplete = () => resolve();
          transaction.onerror = () => reject(transaction.error);
        };
        request.onerror = () => reject(request.error);
      });
    }    

  };

  const api = {
    node_driver: UFS_manager_for_node,
    localstorage_driver: UFS_manager_for_localstorage,
    idb_driver: UFS_manager_for_idb,
    create(...args) {
      const clazz = typeof global !== "undefined" ? UFS_manager_for_node : UFS_manager_for_localstorage;
      return new clazz(...args);
    },
    driver(id) {
      const driverId = id.toLowerCase() + "_driver";
      if(!(driverId in api)) {
        throw new Error(`Cannot find driver «${driverId}» on «UFS_manager.driver»`);
      }
      return {
        create(...args) {
          const clazz = api[driverId];
          return new clazz(...args);
        }
      }
    }
  };

  return api;
});
/*!
 * Socket.IO v4.8.1
 * (c) 2014-2024 Guillermo Rauch
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.io = factory());
})(this, (function () { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
  }
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function (t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), _setPrototypeOf(Wrapper, t);
    }, _wrapNativeSuper(t);
  }

  var PACKET_TYPES = Object.create(null); // no Map = no polyfill
  PACKET_TYPES["open"] = "0";
  PACKET_TYPES["close"] = "1";
  PACKET_TYPES["ping"] = "2";
  PACKET_TYPES["pong"] = "3";
  PACKET_TYPES["message"] = "4";
  PACKET_TYPES["upgrade"] = "5";
  PACKET_TYPES["noop"] = "6";
  var PACKET_TYPES_REVERSE = Object.create(null);
  Object.keys(PACKET_TYPES).forEach(function (key) {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
  });
  var ERROR_PACKET = {
    type: "error",
    data: "parser error"
  };

  var withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
  var withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
  // ArrayBuffer.isView method is not defined in IE10
  var isView$1 = function isView(obj) {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
  };
  var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
    var type = _ref.type,
      data = _ref.data;
    if (withNativeBlob$1 && data instanceof Blob) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(data, callback);
      }
    } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(new Blob([data]), callback);
      }
    }
    // plain string
    return callback(PACKET_TYPES[type] + (data || ""));
  };
  var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
    var fileReader = new FileReader();
    fileReader.onload = function () {
      var content = fileReader.result.split(",")[1];
      callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
  };
  function toArray(data) {
    if (data instanceof Uint8Array) {
      return data;
    } else if (data instanceof ArrayBuffer) {
      return new Uint8Array(data);
    } else {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
  }
  var TEXT_ENCODER;
  function encodePacketToBinary(packet, callback) {
    if (withNativeBlob$1 && packet.data instanceof Blob) {
      return packet.data.arrayBuffer().then(toArray).then(callback);
    } else if (withNativeArrayBuffer$2 && (packet.data instanceof ArrayBuffer || isView$1(packet.data))) {
      return callback(toArray(packet.data));
    }
    encodePacket(packet, false, function (encoded) {
      if (!TEXT_ENCODER) {
        TEXT_ENCODER = new TextEncoder();
      }
      callback(TEXT_ENCODER.encode(encoded));
    });
  }

  // imported from https://github.com/socketio/base64-arraybuffer
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  // Use a lookup table to find the index.
  var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup$1[chars.charCodeAt(i)] = i;
  }
  var decode$1 = function decode(base64) {
    var bufferLength = base64.length * 0.75,
      len = base64.length,
      i,
      p = 0,
      encoded1,
      encoded2,
      encoded3,
      encoded4;
    if (base64[base64.length - 1] === '=') {
      bufferLength--;
      if (base64[base64.length - 2] === '=') {
        bufferLength--;
      }
    }
    var arraybuffer = new ArrayBuffer(bufferLength),
      bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
      encoded1 = lookup$1[base64.charCodeAt(i)];
      encoded2 = lookup$1[base64.charCodeAt(i + 1)];
      encoded3 = lookup$1[base64.charCodeAt(i + 2)];
      encoded4 = lookup$1[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
  };

  var withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
  var decodePacket = function decodePacket(encodedPacket, binaryType) {
    if (typeof encodedPacket !== "string") {
      return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
      };
    }
    var type = encodedPacket.charAt(0);
    if (type === "b") {
      return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
      };
    }
    var packetType = PACKET_TYPES_REVERSE[type];
    if (!packetType) {
      return ERROR_PACKET;
    }
    return encodedPacket.length > 1 ? {
      type: PACKET_TYPES_REVERSE[type],
      data: encodedPacket.substring(1)
    } : {
      type: PACKET_TYPES_REVERSE[type]
    };
  };
  var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
    if (withNativeArrayBuffer$1) {
      var decoded = decode$1(data);
      return mapBinary(decoded, binaryType);
    } else {
      return {
        base64: true,
        data: data
      }; // fallback for old browsers
    }
  };
  var mapBinary = function mapBinary(data, binaryType) {
    switch (binaryType) {
      case "blob":
        if (data instanceof Blob) {
          // from WebSocket + binaryType "blob"
          return data;
        } else {
          // from HTTP long-polling or WebTransport
          return new Blob([data]);
        }
      case "arraybuffer":
      default:
        if (data instanceof ArrayBuffer) {
          // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
          return data;
        } else {
          // from WebTransport (Uint8Array)
          return data.buffer;
        }
    }
  };

  var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
  var encodePayload = function encodePayload(packets, callback) {
    // some packets may be added to the array while encoding, so the initial length must be saved
    var length = packets.length;
    var encodedPackets = new Array(length);
    var count = 0;
    packets.forEach(function (packet, i) {
      // force base64 encoding for binary packets
      encodePacket(packet, false, function (encodedPacket) {
        encodedPackets[i] = encodedPacket;
        if (++count === length) {
          callback(encodedPackets.join(SEPARATOR));
        }
      });
    });
  };
  var decodePayload = function decodePayload(encodedPayload, binaryType) {
    var encodedPackets = encodedPayload.split(SEPARATOR);
    var packets = [];
    for (var i = 0; i < encodedPackets.length; i++) {
      var decodedPacket = decodePacket(encodedPackets[i], binaryType);
      packets.push(decodedPacket);
      if (decodedPacket.type === "error") {
        break;
      }
    }
    return packets;
  };
  function createPacketEncoderStream() {
    return new TransformStream({
      transform: function transform(packet, controller) {
        encodePacketToBinary(packet, function (encodedPacket) {
          var payloadLength = encodedPacket.length;
          var header;
          // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
          if (payloadLength < 126) {
            header = new Uint8Array(1);
            new DataView(header.buffer).setUint8(0, payloadLength);
          } else if (payloadLength < 65536) {
            header = new Uint8Array(3);
            var view = new DataView(header.buffer);
            view.setUint8(0, 126);
            view.setUint16(1, payloadLength);
          } else {
            header = new Uint8Array(9);
            var _view = new DataView(header.buffer);
            _view.setUint8(0, 127);
            _view.setBigUint64(1, BigInt(payloadLength));
          }
          // first bit indicates whether the payload is plain text (0) or binary (1)
          if (packet.data && typeof packet.data !== "string") {
            header[0] |= 0x80;
          }
          controller.enqueue(header);
          controller.enqueue(encodedPacket);
        });
      }
    });
  }
  var TEXT_DECODER;
  function totalLength(chunks) {
    return chunks.reduce(function (acc, chunk) {
      return acc + chunk.length;
    }, 0);
  }
  function concatChunks(chunks, size) {
    if (chunks[0].length === size) {
      return chunks.shift();
    }
    var buffer = new Uint8Array(size);
    var j = 0;
    for (var i = 0; i < size; i++) {
      buffer[i] = chunks[0][j++];
      if (j === chunks[0].length) {
        chunks.shift();
        j = 0;
      }
    }
    if (chunks.length && j < chunks[0].length) {
      chunks[0] = chunks[0].slice(j);
    }
    return buffer;
  }
  function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) {
      TEXT_DECODER = new TextDecoder();
    }
    var chunks = [];
    var state = 0 /* State.READ_HEADER */;
    var expectedLength = -1;
    var isBinary = false;
    return new TransformStream({
      transform: function transform(chunk, controller) {
        chunks.push(chunk);
        while (true) {
          if (state === 0 /* State.READ_HEADER */) {
            if (totalLength(chunks) < 1) {
              break;
            }
            var header = concatChunks(chunks, 1);
            isBinary = (header[0] & 0x80) === 0x80;
            expectedLength = header[0] & 0x7f;
            if (expectedLength < 126) {
              state = 3 /* State.READ_PAYLOAD */;
            } else if (expectedLength === 126) {
              state = 1 /* State.READ_EXTENDED_LENGTH_16 */;
            } else {
              state = 2 /* State.READ_EXTENDED_LENGTH_64 */;
            }
          } else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */) {
            if (totalLength(chunks) < 2) {
              break;
            }
            var headerArray = concatChunks(chunks, 2);
            expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
            state = 3 /* State.READ_PAYLOAD */;
          } else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */) {
            if (totalLength(chunks) < 8) {
              break;
            }
            var _headerArray = concatChunks(chunks, 8);
            var view = new DataView(_headerArray.buffer, _headerArray.byteOffset, _headerArray.length);
            var n = view.getUint32(0);
            if (n > Math.pow(2, 53 - 32) - 1) {
              // the maximum safe integer in JavaScript is 2^53 - 1
              controller.enqueue(ERROR_PACKET);
              break;
            }
            expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
            state = 3 /* State.READ_PAYLOAD */;
          } else {
            if (totalLength(chunks) < expectedLength) {
              break;
            }
            var data = concatChunks(chunks, expectedLength);
            controller.enqueue(decodePacket(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
            state = 0 /* State.READ_HEADER */;
          }
          if (expectedLength === 0 || expectedLength > maxPayload) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
        }
      }
    });
  }
  var protocol$1 = 4;

  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */

  function Emitter(obj) {
    if (obj) return mixin(obj);
  }

  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */

  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }

  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.once = function (event, fn) {
    function on() {
      this.off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};

    // all
    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    }

    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;

    // remove all handlers
    if (1 == arguments.length) {
      delete this._callbacks['$' + event];
      return this;
    }

    // remove specific handler
    var cb;
    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }

    // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.
    if (callbacks.length === 0) {
      delete this._callbacks['$' + event];
    }
    return this;
  };

  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */

  Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1),
      callbacks = this._callbacks['$' + event];
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }
    return this;
  };

  // alias used for reserved events (protected method)
  Emitter.prototype.emitReserved = Emitter.prototype.emit;

  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */

  Emitter.prototype.listeners = function (event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
  };

  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */

  Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
  };

  var nextTick = function () {
    var isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
      return function (cb) {
        return Promise.resolve().then(cb);
      };
    } else {
      return function (cb, setTimeoutFn) {
        return setTimeoutFn(cb, 0);
      };
    }
  }();
  var globalThisShim = function () {
    if (typeof self !== "undefined") {
      return self;
    } else if (typeof window !== "undefined") {
      return window;
    } else {
      return Function("return this")();
    }
  }();
  var defaultBinaryType = "arraybuffer";
  function createCookieJar() {}

  function pick(obj) {
    for (var _len = arguments.length, attr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      attr[_key - 1] = arguments[_key];
    }
    return attr.reduce(function (acc, k) {
      if (obj.hasOwnProperty(k)) {
        acc[k] = obj[k];
      }
      return acc;
    }, {});
  }
  // Keep a reference to the real timeout functions so they can be used when overridden
  var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
  var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
  function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
      obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
      obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
    } else {
      obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
      obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
    }
  }
  // base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
  var BASE64_OVERHEAD = 1.33;
  // we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
  function byteLength(obj) {
    if (typeof obj === "string") {
      return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
  }
  function utf8Length(str) {
    var c = 0,
      length = 0;
    for (var i = 0, l = str.length; i < l; i++) {
      c = str.charCodeAt(i);
      if (c < 0x80) {
        length += 1;
      } else if (c < 0x800) {
        length += 2;
      } else if (c < 0xd800 || c >= 0xe000) {
        length += 3;
      } else {
        i++;
        length += 4;
      }
    }
    return length;
  }
  /**
   * Generates a random 8-characters string.
   */
  function randomString() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
  }

  // imported from https://github.com/galkn/querystring
  /**
   * Compiles a querystring
   * Returns string representation of the object
   *
   * @param {Object}
   * @api private
   */
  function encode(obj) {
    var str = '';
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (str.length) str += '&';
        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
      }
    }
    return str;
  }
  /**
   * Parses a simple querystring into an object
   *
   * @param {String} qs
   * @api private
   */
  function decode(qs) {
    var qry = {};
    var pairs = qs.split('&');
    for (var i = 0, l = pairs.length; i < l; i++) {
      var pair = pairs[i].split('=');
      qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
  }

  var TransportError = /*#__PURE__*/function (_Error) {
    function TransportError(reason, description, context) {
      var _this;
      _this = _Error.call(this, reason) || this;
      _this.description = description;
      _this.context = context;
      _this.type = "TransportError";
      return _this;
    }
    _inheritsLoose(TransportError, _Error);
    return TransportError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  var Transport = /*#__PURE__*/function (_Emitter) {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    function Transport(opts) {
      var _this2;
      _this2 = _Emitter.call(this) || this;
      _this2.writable = false;
      installTimerFunctions(_this2, opts);
      _this2.opts = opts;
      _this2.query = opts.query;
      _this2.socket = opts.socket;
      _this2.supportsBinary = !opts.forceBase64;
      return _this2;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    _inheritsLoose(Transport, _Emitter);
    var _proto = Transport.prototype;
    _proto.onError = function onError(reason, description, context) {
      _Emitter.prototype.emitReserved.call(this, "error", new TransportError(reason, description, context));
      return this;
    }
    /**
     * Opens the transport.
     */;
    _proto.open = function open() {
      this.readyState = "opening";
      this.doOpen();
      return this;
    }
    /**
     * Closes the transport.
     */;
    _proto.close = function close() {
      if (this.readyState === "opening" || this.readyState === "open") {
        this.doClose();
        this.onClose();
      }
      return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */;
    _proto.send = function send(packets) {
      if (this.readyState === "open") {
        this.write(packets);
      }
    }
    /**
     * Called upon open
     *
     * @protected
     */;
    _proto.onOpen = function onOpen() {
      this.readyState = "open";
      this.writable = true;
      _Emitter.prototype.emitReserved.call(this, "open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */;
    _proto.onData = function onData(data) {
      var packet = decodePacket(data, this.socket.binaryType);
      this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */;
    _proto.onPacket = function onPacket(packet) {
      _Emitter.prototype.emitReserved.call(this, "packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */;
    _proto.onClose = function onClose(details) {
      this.readyState = "closed";
      _Emitter.prototype.emitReserved.call(this, "close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */;
    _proto.pause = function pause(onPause) {};
    _proto.createUri = function createUri(schema) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
    };
    _proto._hostname = function _hostname() {
      var hostname = this.opts.hostname;
      return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    };
    _proto._port = function _port() {
      if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
        return ":" + this.opts.port;
      } else {
        return "";
      }
    };
    _proto._query = function _query(query) {
      var encodedQuery = encode(query);
      return encodedQuery.length ? "?" + encodedQuery : "";
    };
    return Transport;
  }(Emitter);

  var Polling = /*#__PURE__*/function (_Transport) {
    function Polling() {
      var _this;
      _this = _Transport.apply(this, arguments) || this;
      _this._polling = false;
      return _this;
    }
    _inheritsLoose(Polling, _Transport);
    var _proto = Polling.prototype;
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    _proto.doOpen = function doOpen() {
      this._poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */;
    _proto.pause = function pause(onPause) {
      var _this2 = this;
      this.readyState = "pausing";
      var pause = function pause() {
        _this2.readyState = "paused";
        onPause();
      };
      if (this._polling || !this.writable) {
        var total = 0;
        if (this._polling) {
          total++;
          this.once("pollComplete", function () {
            --total || pause();
          });
        }
        if (!this.writable) {
          total++;
          this.once("drain", function () {
            --total || pause();
          });
        }
      } else {
        pause();
      }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */;
    _proto._poll = function _poll() {
      this._polling = true;
      this.doPoll();
      this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */;
    _proto.onData = function onData(data) {
      var _this3 = this;
      var callback = function callback(packet) {
        // if its the first message we consider the transport open
        if ("opening" === _this3.readyState && packet.type === "open") {
          _this3.onOpen();
        }
        // if its a close packet, we close the ongoing requests
        if ("close" === packet.type) {
          _this3.onClose({
            description: "transport closed by the server"
          });
          return false;
        }
        // otherwise bypass onData and handle the message
        _this3.onPacket(packet);
      };
      // decode payload
      decodePayload(data, this.socket.binaryType).forEach(callback);
      // if an event did not trigger closing
      if ("closed" !== this.readyState) {
        // if we got data we're not polling
        this._polling = false;
        this.emitReserved("pollComplete");
        if ("open" === this.readyState) {
          this._poll();
        }
      }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */;
    _proto.doClose = function doClose() {
      var _this4 = this;
      var close = function close() {
        _this4.write([{
          type: "close"
        }]);
      };
      if ("open" === this.readyState) {
        close();
      } else {
        // in case we're trying to close while
        // handshaking is in progress (GH-164)
        this.once("open", close);
      }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */;
    _proto.write = function write(packets) {
      var _this5 = this;
      this.writable = false;
      encodePayload(packets, function (data) {
        _this5.doWrite(data, function () {
          _this5.writable = true;
          _this5.emitReserved("drain");
        });
      });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */;
    _proto.uri = function uri() {
      var schema = this.opts.secure ? "https" : "http";
      var query = this.query || {};
      // cache busting is forced
      if (false !== this.opts.timestampRequests) {
        query[this.opts.timestampParam] = randomString();
      }
      if (!this.supportsBinary && !query.sid) {
        query.b64 = 1;
      }
      return this.createUri(schema, query);
    };
    return _createClass(Polling, [{
      key: "name",
      get: function get() {
        return "polling";
      }
    }]);
  }(Transport);

  // imported from https://github.com/component/has-cors
  var value = false;
  try {
    value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
  } catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
  }
  var hasCORS = value;

  function empty() {}
  var BaseXHR = /*#__PURE__*/function (_Polling) {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    function BaseXHR(opts) {
      var _this;
      _this = _Polling.call(this, opts) || this;
      if (typeof location !== "undefined") {
        var isSSL = "https:" === location.protocol;
        var port = location.port;
        // some user agents have empty `location.port`
        if (!port) {
          port = isSSL ? "443" : "80";
        }
        _this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      }
      return _this;
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    _inheritsLoose(BaseXHR, _Polling);
    var _proto = BaseXHR.prototype;
    _proto.doWrite = function doWrite(data, fn) {
      var _this2 = this;
      var req = this.request({
        method: "POST",
        data: data
      });
      req.on("success", fn);
      req.on("error", function (xhrStatus, context) {
        _this2.onError("xhr post error", xhrStatus, context);
      });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */;
    _proto.doPoll = function doPoll() {
      var _this3 = this;
      var req = this.request();
      req.on("data", this.onData.bind(this));
      req.on("error", function (xhrStatus, context) {
        _this3.onError("xhr poll error", xhrStatus, context);
      });
      this.pollXhr = req;
    };
    return BaseXHR;
  }(Polling);
  var Request = /*#__PURE__*/function (_Emitter) {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    function Request(createRequest, uri, opts) {
      var _this4;
      _this4 = _Emitter.call(this) || this;
      _this4.createRequest = createRequest;
      installTimerFunctions(_this4, opts);
      _this4._opts = opts;
      _this4._method = opts.method || "GET";
      _this4._uri = uri;
      _this4._data = undefined !== opts.data ? opts.data : null;
      _this4._create();
      return _this4;
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    _inheritsLoose(Request, _Emitter);
    var _proto2 = Request.prototype;
    _proto2._create = function _create() {
      var _this5 = this;
      var _a;
      var opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      opts.xdomain = !!this._opts.xd;
      var xhr = this._xhr = this.createRequest(opts);
      try {
        xhr.open(this._method, this._uri, true);
        try {
          if (this._opts.extraHeaders) {
            // @ts-ignore
            xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
            for (var i in this._opts.extraHeaders) {
              if (this._opts.extraHeaders.hasOwnProperty(i)) {
                xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
              }
            }
          }
        } catch (e) {}
        if ("POST" === this._method) {
          try {
            xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (e) {}
        }
        try {
          xhr.setRequestHeader("Accept", "*/*");
        } catch (e) {}
        (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
        // ie6 check
        if ("withCredentials" in xhr) {
          xhr.withCredentials = this._opts.withCredentials;
        }
        if (this._opts.requestTimeout) {
          xhr.timeout = this._opts.requestTimeout;
        }
        xhr.onreadystatechange = function () {
          var _a;
          if (xhr.readyState === 3) {
            (_a = _this5._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(
            // @ts-ignore
            xhr.getResponseHeader("set-cookie"));
          }
          if (4 !== xhr.readyState) return;
          if (200 === xhr.status || 1223 === xhr.status) {
            _this5._onLoad();
          } else {
            // make sure the `error` event handler that's user-set
            // does not throw in the same tick and gets caught here
            _this5.setTimeoutFn(function () {
              _this5._onError(typeof xhr.status === "number" ? xhr.status : 0);
            }, 0);
          }
        };
        xhr.send(this._data);
      } catch (e) {
        // Need to defer since .create() is called directly from the constructor
        // and thus the 'error' event can only be only bound *after* this exception
        // occurs.  Therefore, also, we cannot throw here at all.
        this.setTimeoutFn(function () {
          _this5._onError(e);
        }, 0);
        return;
      }
      if (typeof document !== "undefined") {
        this._index = Request.requestsCount++;
        Request.requests[this._index] = this;
      }
    }
    /**
     * Called upon error.
     *
     * @private
     */;
    _proto2._onError = function _onError(err) {
      this.emitReserved("error", err, this._xhr);
      this._cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */;
    _proto2._cleanup = function _cleanup(fromError) {
      if ("undefined" === typeof this._xhr || null === this._xhr) {
        return;
      }
      this._xhr.onreadystatechange = empty;
      if (fromError) {
        try {
          this._xhr.abort();
        } catch (e) {}
      }
      if (typeof document !== "undefined") {
        delete Request.requests[this._index];
      }
      this._xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */;
    _proto2._onLoad = function _onLoad() {
      var data = this._xhr.responseText;
      if (data !== null) {
        this.emitReserved("data", data);
        this.emitReserved("success");
        this._cleanup();
      }
    }
    /**
     * Aborts the request.
     *
     * @package
     */;
    _proto2.abort = function abort() {
      this._cleanup();
    };
    return Request;
  }(Emitter);
  Request.requestsCount = 0;
  Request.requests = {};
  /**
   * Aborts pending requests when unloading the window. This is needed to prevent
   * memory leaks (e.g. when using IE) and to ensure that no spurious error is
   * emitted.
   */
  if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
      // @ts-ignore
      attachEvent("onunload", unloadHandler);
    } else if (typeof addEventListener === "function") {
      var terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
      addEventListener(terminationEvent, unloadHandler, false);
    }
  }
  function unloadHandler() {
    for (var i in Request.requests) {
      if (Request.requests.hasOwnProperty(i)) {
        Request.requests[i].abort();
      }
    }
  }
  var hasXHR2 = function () {
    var xhr = newRequest({
      xdomain: false
    });
    return xhr && xhr.responseType !== null;
  }();
  /**
   * HTTP long-polling based on the built-in `XMLHttpRequest` object.
   *
   * Usage: browser
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   */
  var XHR = /*#__PURE__*/function (_BaseXHR) {
    function XHR(opts) {
      var _this6;
      _this6 = _BaseXHR.call(this, opts) || this;
      var forceBase64 = opts && opts.forceBase64;
      _this6.supportsBinary = hasXHR2 && !forceBase64;
      return _this6;
    }
    _inheritsLoose(XHR, _BaseXHR);
    var _proto3 = XHR.prototype;
    _proto3.request = function request() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _extends(opts, {
        xd: this.xd
      }, this.opts);
      return new Request(newRequest, this.uri(), opts);
    };
    return XHR;
  }(BaseXHR);
  function newRequest(opts) {
    var xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
      if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
        return new XMLHttpRequest();
      }
    } catch (e) {}
    if (!xdomain) {
      try {
        return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }

  // detect ReactNative environment
  var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
  var BaseWS = /*#__PURE__*/function (_Transport) {
    function BaseWS() {
      return _Transport.apply(this, arguments) || this;
    }
    _inheritsLoose(BaseWS, _Transport);
    var _proto = BaseWS.prototype;
    _proto.doOpen = function doOpen() {
      var uri = this.uri();
      var protocols = this.opts.protocols;
      // React Native only supports the 'headers' option, and will print a warning if anything else is passed
      var opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      if (this.opts.extraHeaders) {
        opts.headers = this.opts.extraHeaders;
      }
      try {
        this.ws = this.createSocket(uri, protocols, opts);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this.ws.binaryType = this.socket.binaryType;
      this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */;
    _proto.addEventListeners = function addEventListeners() {
      var _this = this;
      this.ws.onopen = function () {
        if (_this.opts.autoUnref) {
          _this.ws._socket.unref();
        }
        _this.onOpen();
      };
      this.ws.onclose = function (closeEvent) {
        return _this.onClose({
          description: "websocket connection closed",
          context: closeEvent
        });
      };
      this.ws.onmessage = function (ev) {
        return _this.onData(ev.data);
      };
      this.ws.onerror = function (e) {
        return _this.onError("websocket error", e);
      };
    };
    _proto.write = function write(packets) {
      var _this2 = this;
      this.writable = false;
      // encodePacket efficient as it uses WS framing
      // no need for encodePayload
      var _loop = function _loop() {
        var packet = packets[i];
        var lastPacket = i === packets.length - 1;
        encodePacket(packet, _this2.supportsBinary, function (data) {
          // Sometimes the websocket has already been closed but the browser didn't
          // have a chance of informing us about it yet, in that case send will
          // throw an error
          try {
            _this2.doWrite(packet, data);
          } catch (e) {}
          if (lastPacket) {
            // fake drain
            // defer to next tick to allow Socket to clear writeBuffer
            nextTick(function () {
              _this2.writable = true;
              _this2.emitReserved("drain");
            }, _this2.setTimeoutFn);
          }
        });
      };
      for (var i = 0; i < packets.length; i++) {
        _loop();
      }
    };
    _proto.doClose = function doClose() {
      if (typeof this.ws !== "undefined") {
        this.ws.onerror = function () {};
        this.ws.close();
        this.ws = null;
      }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */;
    _proto.uri = function uri() {
      var schema = this.opts.secure ? "wss" : "ws";
      var query = this.query || {};
      // append timestamp to URI
      if (this.opts.timestampRequests) {
        query[this.opts.timestampParam] = randomString();
      }
      // communicate binary support capabilities
      if (!this.supportsBinary) {
        query.b64 = 1;
      }
      return this.createUri(schema, query);
    };
    return _createClass(BaseWS, [{
      key: "name",
      get: function get() {
        return "websocket";
      }
    }]);
  }(Transport);
  var WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
  /**
   * WebSocket transport based on the built-in `WebSocket` object.
   *
   * Usage: browser, Node.js (since v21), Deno, Bun
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
   * @see https://caniuse.com/mdn-api_websocket
   * @see https://nodejs.org/api/globals.html#websocket
   */
  var WS = /*#__PURE__*/function (_BaseWS) {
    function WS() {
      return _BaseWS.apply(this, arguments) || this;
    }
    _inheritsLoose(WS, _BaseWS);
    var _proto2 = WS.prototype;
    _proto2.createSocket = function createSocket(uri, protocols, opts) {
      return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
    };
    _proto2.doWrite = function doWrite(_packet, data) {
      this.ws.send(data);
    };
    return WS;
  }(BaseWS);

  /**
   * WebTransport transport based on the built-in `WebTransport` object.
   *
   * Usage: browser, Node.js (with the `@fails-components/webtransport` package)
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
   * @see https://caniuse.com/webtransport
   */
  var WT = /*#__PURE__*/function (_Transport) {
    function WT() {
      return _Transport.apply(this, arguments) || this;
    }
    _inheritsLoose(WT, _Transport);
    var _proto = WT.prototype;
    _proto.doOpen = function doOpen() {
      var _this = this;
      try {
        // @ts-ignore
        this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this._transport.closed.then(function () {
        _this.onClose();
      })["catch"](function (err) {
        _this.onError("webtransport error", err);
      });
      // note: we could have used async/await, but that would require some additional polyfills
      this._transport.ready.then(function () {
        _this._transport.createBidirectionalStream().then(function (stream) {
          var decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, _this.socket.binaryType);
          var reader = stream.readable.pipeThrough(decoderStream).getReader();
          var encoderStream = createPacketEncoderStream();
          encoderStream.readable.pipeTo(stream.writable);
          _this._writer = encoderStream.writable.getWriter();
          var read = function read() {
            reader.read().then(function (_ref) {
              var done = _ref.done,
                value = _ref.value;
              if (done) {
                return;
              }
              _this.onPacket(value);
              read();
            })["catch"](function (err) {});
          };
          read();
          var packet = {
            type: "open"
          };
          if (_this.query.sid) {
            packet.data = "{\"sid\":\"".concat(_this.query.sid, "\"}");
          }
          _this._writer.write(packet).then(function () {
            return _this.onOpen();
          });
        });
      });
    };
    _proto.write = function write(packets) {
      var _this2 = this;
      this.writable = false;
      var _loop = function _loop() {
        var packet = packets[i];
        var lastPacket = i === packets.length - 1;
        _this2._writer.write(packet).then(function () {
          if (lastPacket) {
            nextTick(function () {
              _this2.writable = true;
              _this2.emitReserved("drain");
            }, _this2.setTimeoutFn);
          }
        });
      };
      for (var i = 0; i < packets.length; i++) {
        _loop();
      }
    };
    _proto.doClose = function doClose() {
      var _a;
      (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
    };
    return _createClass(WT, [{
      key: "name",
      get: function get() {
        return "webtransport";
      }
    }]);
  }(Transport);

  var transports = {
    websocket: WS,
    webtransport: WT,
    polling: XHR
  };

  // imported from https://github.com/galkn/parseuri
  /**
   * Parses a URI
   *
   * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
   *
   * See:
   * - https://developer.mozilla.org/en-US/docs/Web/API/URL
   * - https://caniuse.com/url
   * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
   *
   * History of the parse() method:
   * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
   * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
   * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api private
   */
  var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
  function parse(str) {
    if (str.length > 8000) {
      throw "URI too long";
    }
    var src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');
    if (b != -1 && e != -1) {
      str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    var m = re.exec(str || ''),
      uri = {},
      i = 14;
    while (i--) {
      uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
      uri.source = src;
      uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
      uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
      uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
  }
  function pathNames(obj, path) {
    var regx = /\/{2,9}/g,
      names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) {
      names.splice(0, 1);
    }
    if (path.slice(-1) == '/') {
      names.splice(names.length - 1, 1);
    }
    return names;
  }
  function queryKey(uri, query) {
    var data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
      if ($1) {
        data[$1] = $2;
      }
    });
    return data;
  }

  var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
  var OFFLINE_EVENT_LISTENERS = [];
  if (withEventListeners) {
    // within a ServiceWorker, any event handler for the 'offline' event must be added on the initial evaluation of the
    // script, so we create one single event listener here which will forward the event to the socket instances
    addEventListener("offline", function () {
      OFFLINE_EVENT_LISTENERS.forEach(function (listener) {
        return listener();
      });
    }, false);
  }
  /**
   * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
   * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
   *
   * This class comes without upgrade mechanism, which means that it will keep the first low-level transport that
   * successfully establishes the connection.
   *
   * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
   *
   * @example
   * import { SocketWithoutUpgrade, WebSocket } from "engine.io-client";
   *
   * const socket = new SocketWithoutUpgrade({
   *   transports: [WebSocket]
   * });
   *
   * socket.on("open", () => {
   *   socket.send("hello");
   * });
   *
   * @see SocketWithUpgrade
   * @see Socket
   */
  var SocketWithoutUpgrade = /*#__PURE__*/function (_Emitter) {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    function SocketWithoutUpgrade(uri, opts) {
      var _this;
      _this = _Emitter.call(this) || this;
      _this.binaryType = defaultBinaryType;
      _this.writeBuffer = [];
      _this._prevBufferLen = 0;
      _this._pingInterval = -1;
      _this._pingTimeout = -1;
      _this._maxPayload = -1;
      /**
       * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
       * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
       */
      _this._pingTimeoutTime = Infinity;
      if (uri && "object" === _typeof(uri)) {
        opts = uri;
        uri = null;
      }
      if (uri) {
        var parsedUri = parse(uri);
        opts.hostname = parsedUri.host;
        opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
        opts.port = parsedUri.port;
        if (parsedUri.query) opts.query = parsedUri.query;
      } else if (opts.host) {
        opts.hostname = parse(opts.host).host;
      }
      installTimerFunctions(_this, opts);
      _this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
      if (opts.hostname && !opts.port) {
        // if no port is specified manually, use the protocol default
        opts.port = _this.secure ? "443" : "80";
      }
      _this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
      _this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this.secure ? "443" : "80");
      _this.transports = [];
      _this._transportsByName = {};
      opts.transports.forEach(function (t) {
        var transportName = t.prototype.name;
        _this.transports.push(transportName);
        _this._transportsByName[transportName] = t;
      });
      _this.opts = _extends({
        path: "/engine.io",
        agent: false,
        withCredentials: false,
        upgrade: true,
        timestampParam: "t",
        rememberUpgrade: false,
        addTrailingSlash: true,
        rejectUnauthorized: true,
        perMessageDeflate: {
          threshold: 1024
        },
        transportOptions: {},
        closeOnBeforeunload: false
      }, opts);
      _this.opts.path = _this.opts.path.replace(/\/$/, "") + (_this.opts.addTrailingSlash ? "/" : "");
      if (typeof _this.opts.query === "string") {
        _this.opts.query = decode(_this.opts.query);
      }
      if (withEventListeners) {
        if (_this.opts.closeOnBeforeunload) {
          // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
          // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
          // closed/reloaded)
          _this._beforeunloadEventListener = function () {
            if (_this.transport) {
              // silently close the transport
              _this.transport.removeAllListeners();
              _this.transport.close();
            }
          };
          addEventListener("beforeunload", _this._beforeunloadEventListener, false);
        }
        if (_this.hostname !== "localhost") {
          _this._offlineEventListener = function () {
            _this._onClose("transport close", {
              description: "network connection lost"
            });
          };
          OFFLINE_EVENT_LISTENERS.push(_this._offlineEventListener);
        }
      }
      if (_this.opts.withCredentials) {
        _this._cookieJar = createCookieJar();
      }
      _this._open();
      return _this;
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    _inheritsLoose(SocketWithoutUpgrade, _Emitter);
    var _proto = SocketWithoutUpgrade.prototype;
    _proto.createTransport = function createTransport(name) {
      var query = _extends({}, this.opts.query);
      // append engine.io protocol identifier
      query.EIO = protocol$1;
      // transport name
      query.transport = name;
      // session id if we already have one
      if (this.id) query.sid = this.id;
      var opts = _extends({}, this.opts, {
        query: query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      }, this.opts.transportOptions[name]);
      return new this._transportsByName[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */;
    _proto._open = function _open() {
      var _this2 = this;
      if (this.transports.length === 0) {
        // Emit error on next tick so it can be listened to
        this.setTimeoutFn(function () {
          _this2.emitReserved("error", "No transports available");
        }, 0);
        return;
      }
      var transportName = this.opts.rememberUpgrade && SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
      this.readyState = "opening";
      var transport = this.createTransport(transportName);
      transport.open();
      this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */;
    _proto.setTransport = function setTransport(transport) {
      var _this3 = this;
      if (this.transport) {
        this.transport.removeAllListeners();
      }
      // set up transport
      this.transport = transport;
      // set up transport listeners
      transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", function (reason) {
        return _this3._onClose("transport close", reason);
      });
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */;
    _proto.onOpen = function onOpen() {
      this.readyState = "open";
      SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
      this.emitReserved("open");
      this.flush();
    }
    /**
     * Handles a packet.
     *
     * @private
     */;
    _proto._onPacket = function _onPacket(packet) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        this.emitReserved("packet", packet);
        // Socket is live - any packet counts
        this.emitReserved("heartbeat");
        switch (packet.type) {
          case "open":
            this.onHandshake(JSON.parse(packet.data));
            break;
          case "ping":
            this._sendPacket("pong");
            this.emitReserved("ping");
            this.emitReserved("pong");
            this._resetPingTimeout();
            break;
          case "error":
            var err = new Error("server error");
            // @ts-ignore
            err.code = packet.data;
            this._onError(err);
            break;
          case "message":
            this.emitReserved("data", packet.data);
            this.emitReserved("message", packet.data);
            break;
        }
      }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */;
    _proto.onHandshake = function onHandshake(data) {
      this.emitReserved("handshake", data);
      this.id = data.sid;
      this.transport.query.sid = data.sid;
      this._pingInterval = data.pingInterval;
      this._pingTimeout = data.pingTimeout;
      this._maxPayload = data.maxPayload;
      this.onOpen();
      // In case open handler closes socket
      if ("closed" === this.readyState) return;
      this._resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */;
    _proto._resetPingTimeout = function _resetPingTimeout() {
      var _this4 = this;
      this.clearTimeoutFn(this._pingTimeoutTimer);
      var delay = this._pingInterval + this._pingTimeout;
      this._pingTimeoutTime = Date.now() + delay;
      this._pingTimeoutTimer = this.setTimeoutFn(function () {
        _this4._onClose("ping timeout");
      }, delay);
      if (this.opts.autoUnref) {
        this._pingTimeoutTimer.unref();
      }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */;
    _proto._onDrain = function _onDrain() {
      this.writeBuffer.splice(0, this._prevBufferLen);
      // setting prevBufferLen = 0 is very important
      // for example, when upgrading, upgrade packet is sent over,
      // and a nonzero prevBufferLen could cause problems on `drain`
      this._prevBufferLen = 0;
      if (0 === this.writeBuffer.length) {
        this.emitReserved("drain");
      } else {
        this.flush();
      }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */;
    _proto.flush = function flush() {
      if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        var packets = this._getWritablePackets();
        this.transport.send(packets);
        // keep track of current length of writeBuffer
        // splice writeBuffer and callbackBuffer on `drain`
        this._prevBufferLen = packets.length;
        this.emitReserved("flush");
      }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */;
    _proto._getWritablePackets = function _getWritablePackets() {
      var shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
      if (!shouldCheckPayloadSize) {
        return this.writeBuffer;
      }
      var payloadSize = 1; // first packet type
      for (var i = 0; i < this.writeBuffer.length; i++) {
        var data = this.writeBuffer[i].data;
        if (data) {
          payloadSize += byteLength(data);
        }
        if (i > 0 && payloadSize > this._maxPayload) {
          return this.writeBuffer.slice(0, i);
        }
        payloadSize += 2; // separator + packet type
      }
      return this.writeBuffer;
    }
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */
    /* private */;
    _proto._hasPingExpired = function _hasPingExpired() {
      var _this5 = this;
      if (!this._pingTimeoutTime) return true;
      var hasExpired = Date.now() > this._pingTimeoutTime;
      if (hasExpired) {
        this._pingTimeoutTime = 0;
        nextTick(function () {
          _this5._onClose("ping timeout");
        }, this.setTimeoutFn);
      }
      return hasExpired;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */;
    _proto.write = function write(msg, options, fn) {
      this._sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */;
    _proto.send = function send(msg, options, fn) {
      this._sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */;
    _proto._sendPacket = function _sendPacket(type, data, options, fn) {
      if ("function" === typeof data) {
        fn = data;
        data = undefined;
      }
      if ("function" === typeof options) {
        fn = options;
        options = null;
      }
      if ("closing" === this.readyState || "closed" === this.readyState) {
        return;
      }
      options = options || {};
      options.compress = false !== options.compress;
      var packet = {
        type: type,
        data: data,
        options: options
      };
      this.emitReserved("packetCreate", packet);
      this.writeBuffer.push(packet);
      if (fn) this.once("flush", fn);
      this.flush();
    }
    /**
     * Closes the connection.
     */;
    _proto.close = function close() {
      var _this6 = this;
      var close = function close() {
        _this6._onClose("forced close");
        _this6.transport.close();
      };
      var cleanupAndClose = function cleanupAndClose() {
        _this6.off("upgrade", cleanupAndClose);
        _this6.off("upgradeError", cleanupAndClose);
        close();
      };
      var waitForUpgrade = function waitForUpgrade() {
        // wait for upgrade to finish since we can't send packets while pausing a transport
        _this6.once("upgrade", cleanupAndClose);
        _this6.once("upgradeError", cleanupAndClose);
      };
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";
        if (this.writeBuffer.length) {
          this.once("drain", function () {
            if (_this6.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          });
        } else if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }
      return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */;
    _proto._onError = function _onError(err) {
      SocketWithoutUpgrade.priorWebsocketSuccess = false;
      if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
        this.transports.shift();
        return this._open();
      }
      this.emitReserved("error", err);
      this._onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */;
    _proto._onClose = function _onClose(reason, description) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        // clear timers
        this.clearTimeoutFn(this._pingTimeoutTimer);
        // stop event from firing again for transport
        this.transport.removeAllListeners("close");
        // ensure transport won't stay open
        this.transport.close();
        // ignore further transport communication
        this.transport.removeAllListeners();
        if (withEventListeners) {
          if (this._beforeunloadEventListener) {
            removeEventListener("beforeunload", this._beforeunloadEventListener, false);
          }
          if (this._offlineEventListener) {
            var i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
            if (i !== -1) {
              OFFLINE_EVENT_LISTENERS.splice(i, 1);
            }
          }
        }
        // set ready state
        this.readyState = "closed";
        // clear session id
        this.id = null;
        // emit close event
        this.emitReserved("close", reason, description);
        // clean buffers after, so users can still
        // grab the buffers on `close` event
        this.writeBuffer = [];
        this._prevBufferLen = 0;
      }
    };
    return SocketWithoutUpgrade;
  }(Emitter);
  SocketWithoutUpgrade.protocol = protocol$1;
  /**
   * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
   * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
   *
   * This class comes with an upgrade mechanism, which means that once the connection is established with the first
   * low-level transport, it will try to upgrade to a better transport.
   *
   * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
   *
   * @example
   * import { SocketWithUpgrade, WebSocket } from "engine.io-client";
   *
   * const socket = new SocketWithUpgrade({
   *   transports: [WebSocket]
   * });
   *
   * socket.on("open", () => {
   *   socket.send("hello");
   * });
   *
   * @see SocketWithoutUpgrade
   * @see Socket
   */
  var SocketWithUpgrade = /*#__PURE__*/function (_SocketWithoutUpgrade) {
    function SocketWithUpgrade() {
      var _this7;
      _this7 = _SocketWithoutUpgrade.apply(this, arguments) || this;
      _this7._upgrades = [];
      return _this7;
    }
    _inheritsLoose(SocketWithUpgrade, _SocketWithoutUpgrade);
    var _proto2 = SocketWithUpgrade.prototype;
    _proto2.onOpen = function onOpen() {
      _SocketWithoutUpgrade.prototype.onOpen.call(this);
      if ("open" === this.readyState && this.opts.upgrade) {
        for (var i = 0; i < this._upgrades.length; i++) {
          this._probe(this._upgrades[i]);
        }
      }
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */;
    _proto2._probe = function _probe(name) {
      var _this8 = this;
      var transport = this.createTransport(name);
      var failed = false;
      SocketWithoutUpgrade.priorWebsocketSuccess = false;
      var onTransportOpen = function onTransportOpen() {
        if (failed) return;
        transport.send([{
          type: "ping",
          data: "probe"
        }]);
        transport.once("packet", function (msg) {
          if (failed) return;
          if ("pong" === msg.type && "probe" === msg.data) {
            _this8.upgrading = true;
            _this8.emitReserved("upgrading", transport);
            if (!transport) return;
            SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
            _this8.transport.pause(function () {
              if (failed) return;
              if ("closed" === _this8.readyState) return;
              cleanup();
              _this8.setTransport(transport);
              transport.send([{
                type: "upgrade"
              }]);
              _this8.emitReserved("upgrade", transport);
              transport = null;
              _this8.upgrading = false;
              _this8.flush();
            });
          } else {
            var err = new Error("probe error");
            // @ts-ignore
            err.transport = transport.name;
            _this8.emitReserved("upgradeError", err);
          }
        });
      };
      function freezeTransport() {
        if (failed) return;
        // Any callback called by transport should be ignored since now
        failed = true;
        cleanup();
        transport.close();
        transport = null;
      }
      // Handle any error that happens while probing
      var onerror = function onerror(err) {
        var error = new Error("probe error: " + err);
        // @ts-ignore
        error.transport = transport.name;
        freezeTransport();
        _this8.emitReserved("upgradeError", error);
      };
      function onTransportClose() {
        onerror("transport closed");
      }
      // When the socket is closed while we're probing
      function onclose() {
        onerror("socket closed");
      }
      // When the socket is upgraded while we're probing
      function onupgrade(to) {
        if (transport && to.name !== transport.name) {
          freezeTransport();
        }
      }
      // Remove all listeners on the transport and on self
      var cleanup = function cleanup() {
        transport.removeListener("open", onTransportOpen);
        transport.removeListener("error", onerror);
        transport.removeListener("close", onTransportClose);
        _this8.off("close", onclose);
        _this8.off("upgrading", onupgrade);
      };
      transport.once("open", onTransportOpen);
      transport.once("error", onerror);
      transport.once("close", onTransportClose);
      this.once("close", onclose);
      this.once("upgrading", onupgrade);
      if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
        // favor WebTransport
        this.setTimeoutFn(function () {
          if (!failed) {
            transport.open();
          }
        }, 200);
      } else {
        transport.open();
      }
    };
    _proto2.onHandshake = function onHandshake(data) {
      this._upgrades = this._filterUpgrades(data.upgrades);
      _SocketWithoutUpgrade.prototype.onHandshake.call(this, data);
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */;
    _proto2._filterUpgrades = function _filterUpgrades(upgrades) {
      var filteredUpgrades = [];
      for (var i = 0; i < upgrades.length; i++) {
        if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
      }
      return filteredUpgrades;
    };
    return SocketWithUpgrade;
  }(SocketWithoutUpgrade);
  /**
   * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
   * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
   *
   * This class comes with an upgrade mechanism, which means that once the connection is established with the first
   * low-level transport, it will try to upgrade to a better transport.
   *
   * @example
   * import { Socket } from "engine.io-client";
   *
   * const socket = new Socket();
   *
   * socket.on("open", () => {
   *   socket.send("hello");
   * });
   *
   * @see SocketWithoutUpgrade
   * @see SocketWithUpgrade
   */
  var Socket$1 = /*#__PURE__*/function (_SocketWithUpgrade) {
    function Socket(uri) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var o = _typeof(uri) === "object" ? uri : opts;
      if (!o.transports || o.transports && typeof o.transports[0] === "string") {
        o.transports = (o.transports || ["polling", "websocket", "webtransport"]).map(function (transportName) {
          return transports[transportName];
        }).filter(function (t) {
          return !!t;
        });
      }
      return _SocketWithUpgrade.call(this, uri, o) || this;
    }
    _inheritsLoose(Socket, _SocketWithUpgrade);
    return Socket;
  }(SocketWithUpgrade);

  Socket$1.protocol;

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var browser = {exports: {}};

  var ms;
  var hasRequiredMs;
  function requireMs() {
    if (hasRequiredMs) return ms;
    hasRequiredMs = 1;
    var s = 1000;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;

    /**
     * Parse or format the given `val`.
     *
     * Options:
     *
     *  - `long` verbose formatting [false]
     *
     * @param {String|Number} val
     * @param {Object} [options]
     * @throws {Error} throw an error if val is not a non-empty string or a number
     * @return {String|Number}
     * @api public
     */

    ms = function ms(val, options) {
      options = options || {};
      var type = _typeof(val);
      if (type === 'string' && val.length > 0) {
        return parse(val);
      } else if (type === 'number' && isFinite(val)) {
        return options["long"] ? fmtLong(val) : fmtShort(val);
      }
      throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
    };

    /**
     * Parse the given `str` and return milliseconds.
     *
     * @param {String} str
     * @return {Number}
     * @api private
     */

    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || 'ms').toLowerCase();
      switch (type) {
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
          return n * y;
        case 'weeks':
        case 'week':
        case 'w':
          return n * w;
        case 'days':
        case 'day':
        case 'd':
          return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
          return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
          return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
          return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
          return n;
        default:
          return undefined;
      }
    }

    /**
     * Short format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */

    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + 's';
      }
      return ms + 'ms';
    }

    /**
     * Long format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */

    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
      }
      return ms + ' ms';
    }

    /**
     * Pluralization helper.
     */

    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
    }
    return ms;
  }

  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   */

  function setup(env) {
    createDebug.debug = createDebug;
    createDebug["default"] = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = requireMs();
    createDebug.destroy = destroy;
    Object.keys(env).forEach(function (key) {
      createDebug[key] = env[key];
    });

    /**
    * The currently active debug mode names, and names to skip.
    */

    createDebug.names = [];
    createDebug.skips = [];

    /**
    * Map of special "%n" handling functions, for the debug "format" argument.
    *
    * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
    */
    createDebug.formatters = {};

    /**
    * Selects a color for a debug namespace
    * @param {String} namespace The namespace string for the debug instance to be colored
    * @return {Number|String} An ANSI color code for the given namespace
    * @api private
    */
    function selectColor(namespace) {
      var hash = 0;
      for (var i = 0; i < namespace.length; i++) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
      }
      return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;

    /**
    * Create a debugger with the given `namespace`.
    *
    * @param {String} namespace
    * @return {Function}
    * @api public
    */
    function createDebug(namespace) {
      var prevTime;
      var enableOverride = null;
      var namespacesCache;
      var enabledCache;
      function debug() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        // Disabled?
        if (!debug.enabled) {
          return;
        }
        var self = debug;

        // Set `diff` timestamp
        var curr = Number(new Date());
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        args[0] = createDebug.coerce(args[0]);
        if (typeof args[0] !== 'string') {
          // Anything else let's inspect with %O
          args.unshift('%O');
        }

        // Apply any `formatters` transformations
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
          // If we encounter an escaped % then don't increase the array index
          if (match === '%%') {
            return '%';
          }
          index++;
          var formatter = createDebug.formatters[format];
          if (typeof formatter === 'function') {
            var val = args[index];
            match = formatter.call(self, val);

            // Now we need to remove `args[index]` since it's inlined in the `format`
            args.splice(index, 1);
            index--;
          }
          return match;
        });

        // Apply env-specific formatting (colors, etc.)
        createDebug.formatArgs.call(self, args);
        var logFn = self.log || createDebug.log;
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.useColors = createDebug.useColors();
      debug.color = createDebug.selectColor(namespace);
      debug.extend = extend;
      debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

      Object.defineProperty(debug, 'enabled', {
        enumerable: true,
        configurable: false,
        get: function get() {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug.namespaces) {
            namespacesCache = createDebug.namespaces;
            enabledCache = createDebug.enabled(namespace);
          }
          return enabledCache;
        },
        set: function set(v) {
          enableOverride = v;
        }
      });

      // Env-specific initialization logic for debug instances
      if (typeof createDebug.init === 'function') {
        createDebug.init(debug);
      }
      return debug;
    }
    function extend(namespace, delimiter) {
      var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
      newDebug.log = this.log;
      return newDebug;
    }

    /**
    * Enables a debug mode by namespaces. This can include modes
    * separated by a colon and wildcards.
    *
    * @param {String} namespaces
    * @api public
    */
    function enable(namespaces) {
      createDebug.save(namespaces);
      createDebug.namespaces = namespaces;
      createDebug.names = [];
      createDebug.skips = [];
      var i;
      var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
      var len = split.length;
      for (i = 0; i < len; i++) {
        if (!split[i]) {
          // ignore empty strings
          continue;
        }
        namespaces = split[i].replace(/\*/g, '.*?');
        if (namespaces[0] === '-') {
          createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
        } else {
          createDebug.names.push(new RegExp('^' + namespaces + '$'));
        }
      }
    }

    /**
    * Disable debug output.
    *
    * @return {String} namespaces
    * @api public
    */
    function disable() {
      var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
        return '-' + namespace;
      }))).join(',');
      createDebug.enable('');
      return namespaces;
    }

    /**
    * Returns true if the given mode name is enabled, false otherwise.
    *
    * @param {String} name
    * @return {Boolean}
    * @api public
    */
    function enabled(name) {
      if (name[name.length - 1] === '*') {
        return true;
      }
      var i;
      var len;
      for (i = 0, len = createDebug.skips.length; i < len; i++) {
        if (createDebug.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = createDebug.names.length; i < len; i++) {
        if (createDebug.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }

    /**
    * Convert regexp to namespace
    *
    * @param {RegExp} regxep
    * @return {String} namespace
    * @api private
    */
    function toNamespace(regexp) {
      return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
    }

    /**
    * Coerce `val`.
    *
    * @param {Mixed} val
    * @return {Mixed}
    * @api private
    */
    function coerce(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }

    /**
    * XXX DO NOT USE. This is a temporary stub function.
    * XXX It WILL be removed in the next major release.
    */
    function destroy() {
      console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
  }
  var common = setup;

  /* eslint-env browser */
  browser.exports;
  (function (module, exports) {
    /**
     * This is the web browser implementation of `debug()`.
     */

    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = function () {
      var warned = false;
      return function () {
        if (!warned) {
          warned = true;
          console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
      };
    }();

    /**
     * Colors.
     */

    exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

    /**
     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
     * and the Firebug extension (any Firefox version) are known
     * to support "%c" CSS customizations.
     *
     * TODO: add a `localStorage` variable to explicitly enable/disable colors
     */

    // eslint-disable-next-line complexity
    function useColors() {
      // NB: In an Electron preload script, document will be defined but not fully
      // initialized. Since we know we're in Chrome, we'll just detect this case
      // explicitly
      if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
        return true;
      }

      // Internet Explorer and Edge do not support colors.
      if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }

      // Is webkit? http://stackoverflow.com/a/16459606/376773
      // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
      return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
      // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
      // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
      // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }

    /**
     * Colorize log arguments if enabled.
     *
     * @api public
     */

    function formatArgs(args) {
      args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      var c = 'color: ' + this.color;
      args.splice(1, 0, c, 'color: inherit');

      // The final "%c" is somewhat tricky, because there could be other
      // arguments passed either before or after the %c, so we need to
      // figure out the correct index to insert the CSS into
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function (match) {
        if (match === '%%') {
          return;
        }
        index++;
        if (match === '%c') {
          // We only are interested in the *last* %c
          // (the user may have provided their own)
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }

    /**
     * Invokes `console.debug()` when available.
     * No-op when `console.debug` is not a "function".
     * If `console.debug` is not available, falls back
     * to `console.log`.
     *
     * @api public
     */
    exports.log = console.debug || console.log || function () {};

    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem('debug', namespaces);
        } else {
          exports.storage.removeItem('debug');
        }
      } catch (error) {
        // Swallow
        // XXX (@Qix-) should we be logging these?
      }
    }

    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */
    function load() {
      var r;
      try {
        r = exports.storage.getItem('debug');
      } catch (error) {
        // Swallow
        // XXX (@Qix-) should we be logging these?
      }

      // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
      if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
      }
      return r;
    }

    /**
     * Localstorage attempts to return the localstorage.
     *
     * This is necessary because safari throws
     * when a user disables cookies/localstorage
     * and you attempt to access it.
     *
     * @return {LocalStorage}
     * @api private
     */

    function localstorage() {
      try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
      } catch (error) {
        // Swallow
        // XXX (@Qix-) should we be logging these?
      }
    }
    module.exports = common(exports);
    var formatters = module.exports.formatters;

    /**
     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
     */

    formatters.j = function (v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
      }
    };
  })(browser, browser.exports);
  var browserExports = browser.exports;
  var debugModule = /*@__PURE__*/getDefaultExportFromCjs(browserExports);

  var debug$3 = debugModule("socket.io-client:url"); // debug()
  /**
   * URL parser.
   *
   * @param uri - url
   * @param path - the request path of the connection
   * @param loc - An object meant to mimic window.location.
   *        Defaults to window.location.
   * @public
   */
  function url(uri) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var loc = arguments.length > 2 ? arguments[2] : undefined;
    var obj = uri;
    // default to window.location
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
      if ("/" === uri.charAt(0)) {
        if ("/" === uri.charAt(1)) {
          uri = loc.protocol + uri;
        } else {
          uri = loc.host + uri;
        }
      }
      if (!/^(https?|wss?):\/\//.test(uri)) {
        debug$3("protocol-less url %s", uri);
        if ("undefined" !== typeof loc) {
          uri = loc.protocol + "//" + uri;
        } else {
          uri = "https://" + uri;
        }
      }
      // parse
      debug$3("parse %s", uri);
      obj = parse(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
      if (/^(http|ws)$/.test(obj.protocol)) {
        obj.port = "80";
      } else if (/^(http|ws)s$/.test(obj.protocol)) {
        obj.port = "443";
      }
    }
    obj.path = obj.path || "/";
    var ipv6 = obj.host.indexOf(":") !== -1;
    var host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
  }

  var withNativeArrayBuffer = typeof ArrayBuffer === "function";
  var isView = function isView(obj) {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
  };
  var toString = Object.prototype.toString;
  var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
  var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
  /**
   * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
   *
   * @private
   */
  function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
  }
  function hasBinary(obj, toJSON) {
    if (!obj || _typeof(obj) !== "object") {
      return false;
    }
    if (Array.isArray(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (hasBinary(obj[i])) {
          return true;
        }
      }
      return false;
    }
    if (isBinary(obj)) {
      return true;
    }
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
      return hasBinary(obj.toJSON(), true);
    }
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
        return true;
      }
    }
    return false;
  }

  /**
   * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
   *
   * @param {Object} packet - socket.io event packet
   * @return {Object} with deconstructed packet and list of buffers
   * @public
   */
  function deconstructPacket(packet) {
    var buffers = [];
    var packetData = packet.data;
    var pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return {
      packet: pack,
      buffers: buffers
    };
  }
  function _deconstructPacket(data, buffers) {
    if (!data) return data;
    if (isBinary(data)) {
      var placeholder = {
        _placeholder: true,
        num: buffers.length
      };
      buffers.push(data);
      return placeholder;
    } else if (Array.isArray(data)) {
      var newData = new Array(data.length);
      for (var i = 0; i < data.length; i++) {
        newData[i] = _deconstructPacket(data[i], buffers);
      }
      return newData;
    } else if (_typeof(data) === "object" && !(data instanceof Date)) {
      var _newData = {};
      for (var key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          _newData[key] = _deconstructPacket(data[key], buffers);
        }
      }
      return _newData;
    }
    return data;
  }
  /**
   * Reconstructs a binary packet from its placeholder packet and buffers
   *
   * @param {Object} packet - event packet with placeholders
   * @param {Array} buffers - binary buffers to put in placeholder positions
   * @return {Object} reconstructed packet
   * @public
   */
  function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
  }
  function _reconstructPacket(data, buffers) {
    if (!data) return data;
    if (data && data._placeholder === true) {
      var isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
      if (isIndexValid) {
        return buffers[data.num]; // appropriate buffer (should be natural order anyway)
      } else {
        throw new Error("illegal attachments");
      }
    } else if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        data[i] = _reconstructPacket(data[i], buffers);
      }
    } else if (_typeof(data) === "object") {
      for (var key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          data[key] = _reconstructPacket(data[key], buffers);
        }
      }
    }
    return data;
  }

  /**
   * These strings must not be used as event names, as they have a special meaning.
   */
  var RESERVED_EVENTS$1 = ["connect",
  // used on the client side
  "connect_error",
  // used on the client side
  "disconnect",
  // used on both sides
  "disconnecting",
  // used on the server side
  "newListener",
  // used by the Node.js EventEmitter
  "removeListener" // used by the Node.js EventEmitter
  ];
  /**
   * Protocol version.
   *
   * @public
   */
  var protocol = 5;
  var PacketType;
  (function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
  })(PacketType || (PacketType = {}));
  /**
   * A socket.io Encoder instance
   */
  var Encoder = /*#__PURE__*/function () {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    function Encoder(replacer) {
      this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    var _proto = Encoder.prototype;
    _proto.encode = function encode(obj) {
      if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
        if (hasBinary(obj)) {
          return this.encodeAsBinary({
            type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
            nsp: obj.nsp,
            data: obj.data,
            id: obj.id
          });
        }
      }
      return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */;
    _proto.encodeAsString = function encodeAsString(obj) {
      // first is type
      var str = "" + obj.type;
      // attachments if we have them
      if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
        str += obj.attachments + "-";
      }
      // if we have a namespace other than `/`
      // we append it followed by a comma `,`
      if (obj.nsp && "/" !== obj.nsp) {
        str += obj.nsp + ",";
      }
      // immediately followed by the id
      if (null != obj.id) {
        str += obj.id;
      }
      // json data
      if (null != obj.data) {
        str += JSON.stringify(obj.data, this.replacer);
      }
      return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */;
    _proto.encodeAsBinary = function encodeAsBinary(obj) {
      var deconstruction = deconstructPacket(obj);
      var pack = this.encodeAsString(deconstruction.packet);
      var buffers = deconstruction.buffers;
      buffers.unshift(pack); // add packet info to beginning of data list
      return buffers; // write all the buffers
    };
    return Encoder;
  }();
  /**
   * A socket.io Decoder instance
   *
   * @return {Object} decoder
   */
  var Decoder = /*#__PURE__*/function (_Emitter) {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    function Decoder(reviver) {
      var _this;
      _this = _Emitter.call(this) || this;
      _this.reviver = reviver;
      return _this;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    _inheritsLoose(Decoder, _Emitter);
    var _proto2 = Decoder.prototype;
    _proto2.add = function add(obj) {
      var packet;
      if (typeof obj === "string") {
        if (this.reconstructor) {
          throw new Error("got plaintext data when reconstructing a packet");
        }
        packet = this.decodeString(obj);
        var isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
        if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
          packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
          // binary packet's json
          this.reconstructor = new BinaryReconstructor(packet);
          // no attachments, labeled binary but no binary data to follow
          if (packet.attachments === 0) {
            _Emitter.prototype.emitReserved.call(this, "decoded", packet);
          }
        } else {
          // non-binary full packet
          _Emitter.prototype.emitReserved.call(this, "decoded", packet);
        }
      } else if (isBinary(obj) || obj.base64) {
        // raw binary data
        if (!this.reconstructor) {
          throw new Error("got binary data when not reconstructing a packet");
        } else {
          packet = this.reconstructor.takeBinaryData(obj);
          if (packet) {
            // received final buffer
            this.reconstructor = null;
            _Emitter.prototype.emitReserved.call(this, "decoded", packet);
          }
        }
      } else {
        throw new Error("Unknown type: " + obj);
      }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */;
    _proto2.decodeString = function decodeString(str) {
      var i = 0;
      // look up type
      var p = {
        type: Number(str.charAt(0))
      };
      if (PacketType[p.type] === undefined) {
        throw new Error("unknown packet type " + p.type);
      }
      // look up attachments if type binary
      if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
        var start = i + 1;
        while (str.charAt(++i) !== "-" && i != str.length) {}
        var buf = str.substring(start, i);
        if (buf != Number(buf) || str.charAt(i) !== "-") {
          throw new Error("Illegal attachments");
        }
        p.attachments = Number(buf);
      }
      // look up namespace (if any)
      if ("/" === str.charAt(i + 1)) {
        var _start = i + 1;
        while (++i) {
          var c = str.charAt(i);
          if ("," === c) break;
          if (i === str.length) break;
        }
        p.nsp = str.substring(_start, i);
      } else {
        p.nsp = "/";
      }
      // look up id
      var next = str.charAt(i + 1);
      if ("" !== next && Number(next) == next) {
        var _start2 = i + 1;
        while (++i) {
          var _c = str.charAt(i);
          if (null == _c || Number(_c) != _c) {
            --i;
            break;
          }
          if (i === str.length) break;
        }
        p.id = Number(str.substring(_start2, i + 1));
      }
      // look up json data
      if (str.charAt(++i)) {
        var payload = this.tryParse(str.substr(i));
        if (Decoder.isPayloadValid(p.type, payload)) {
          p.data = payload;
        } else {
          throw new Error("invalid payload");
        }
      }
      return p;
    };
    _proto2.tryParse = function tryParse(str) {
      try {
        return JSON.parse(str, this.reviver);
      } catch (e) {
        return false;
      }
    };
    Decoder.isPayloadValid = function isPayloadValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return isObject(payload);
        case PacketType.DISCONNECT:
          return payload === undefined;
        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || isObject(payload);
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS$1.indexOf(payload[0]) === -1);
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          return Array.isArray(payload);
      }
    }
    /**
     * Deallocates a parser's resources
     */;
    _proto2.destroy = function destroy() {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
        this.reconstructor = null;
      }
    };
    return Decoder;
  }(Emitter);
  /**
   * A manager of a binary event's 'buffer sequence'. Should
   * be constructed whenever a packet of type BINARY_EVENT is
   * decoded.
   *
   * @param {Object} packet
   * @return {BinaryReconstructor} initialized reconstructor
   */
  var BinaryReconstructor = /*#__PURE__*/function () {
    function BinaryReconstructor(packet) {
      this.packet = packet;
      this.buffers = [];
      this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    var _proto3 = BinaryReconstructor.prototype;
    _proto3.takeBinaryData = function takeBinaryData(binData) {
      this.buffers.push(binData);
      if (this.buffers.length === this.reconPack.attachments) {
        // done with buffer list
        var packet = reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return packet;
      }
      return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */;
    _proto3.finishedReconstruction = function finishedReconstruction() {
      this.reconPack = null;
      this.buffers = [];
    };
    return BinaryReconstructor;
  }();
  function isNamespaceValid(nsp) {
    return typeof nsp === "string";
  }
  // see https://caniuse.com/mdn-javascript_builtins_number_isinteger
  var isInteger = Number.isInteger || function (value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
  };
  function isAckIdValid(id) {
    return id === undefined || isInteger(id);
  }
  // see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
  function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function isDataValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return payload === undefined || isObject(payload);
      case PacketType.DISCONNECT:
        return payload === undefined;
      case PacketType.EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS$1.indexOf(payload[0]) === -1);
      case PacketType.ACK:
        return Array.isArray(payload);
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject(payload);
      default:
        return false;
    }
  }
  function isPacketValid(packet) {
    return isNamespaceValid(packet.nsp) && isAckIdValid(packet.id) && isDataValid(packet.type, packet.data);
  }

  var parser = /*#__PURE__*/Object.freeze({
    __proto__: null,
    protocol: protocol,
    get PacketType () { return PacketType; },
    Encoder: Encoder,
    Decoder: Decoder,
    isPacketValid: isPacketValid
  });

  function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
      obj.off(ev, fn);
    };
  }

  var debug$2 = debugModule("socket.io-client:socket"); // debug()
  /**
   * Internal events.
   * These events can't be emitted by the user.
   */
  var RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
  });
  /**
   * A Socket is the fundamental class for interacting with the server.
   *
   * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log("connected");
   * });
   *
   * // send an event to the server
   * socket.emit("foo", "bar");
   *
   * socket.on("foobar", () => {
   *   // an event was received from the server
   * });
   *
   * // upon disconnection
   * socket.on("disconnect", (reason) => {
   *   console.log(`disconnected due to ${reason}`);
   * });
   */
  var Socket = /*#__PURE__*/function (_Emitter) {
    /**
     * `Socket` constructor.
     */
    function Socket(io, nsp, opts) {
      var _this;
      _this = _Emitter.call(this) || this;
      /**
       * Whether the socket is currently connected to the server.
       *
       * @example
       * const socket = io();
       *
       * socket.on("connect", () => {
       *   console.log(socket.connected); // true
       * });
       *
       * socket.on("disconnect", () => {
       *   console.log(socket.connected); // false
       * });
       */
      _this.connected = false;
      /**
       * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
       * be transmitted by the server.
       */
      _this.recovered = false;
      /**
       * Buffer for packets received before the CONNECT packet
       */
      _this.receiveBuffer = [];
      /**
       * Buffer for packets that will be sent once the socket is connected
       */
      _this.sendBuffer = [];
      /**
       * The queue of packets to be sent with retry in case of failure.
       *
       * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
       * @private
       */
      _this._queue = [];
      /**
       * A sequence to generate the ID of the {@link QueuedPacket}.
       * @private
       */
      _this._queueSeq = 0;
      _this.ids = 0;
      /**
       * A map containing acknowledgement handlers.
       *
       * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
       *
       * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
       * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
       * - `const value = await socket.emitWithAck("test")`
       *
       * From those that don't:
       *
       * - `socket.emit("test", (value) => { ... });`
       *
       * In the first case, the handlers will be called with an error when:
       *
       * - the timeout is reached
       * - the socket gets disconnected
       *
       * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
       * an acknowledgement from the server.
       *
       * @private
       */
      _this.acks = {};
      _this.flags = {};
      _this.io = io;
      _this.nsp = nsp;
      if (opts && opts.auth) {
        _this.auth = opts.auth;
      }
      _this._opts = _extends({}, opts);
      if (_this.io._autoConnect) _this.open();
      return _this;
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    _inheritsLoose(Socket, _Emitter);
    var _proto = Socket.prototype;
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    _proto.subEvents = function subEvents() {
      if (this.subs) return;
      var io = this.io;
      this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */;
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    _proto.connect = function connect() {
      if (this.connected) return this;
      this.subEvents();
      if (!this.io["_reconnecting"]) this.io.open(); // ensure open
      if ("open" === this.io._readyState) this.onopen();
      return this;
    }
    /**
     * Alias for {@link connect()}.
     */;
    _proto.open = function open() {
      return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */;
    _proto.send = function send() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      args.unshift("message");
      this.emit.apply(this, args);
      return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */;
    _proto.emit = function emit(ev) {
      var _a, _b, _c;
      if (RESERVED_EVENTS.hasOwnProperty(ev)) {
        throw new Error('"' + ev.toString() + '" is a reserved event name');
      }
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      args.unshift(ev);
      if (this._opts.retries && !this.flags.fromQueue && !this.flags["volatile"]) {
        this._addToQueue(args);
        return this;
      }
      var packet = {
        type: PacketType.EVENT,
        data: args
      };
      packet.options = {};
      packet.options.compress = this.flags.compress !== false;
      // event ack callback
      if ("function" === typeof args[args.length - 1]) {
        var id = this.ids++;
        debug$2("emitting packet with ack id %d", id);
        var ack = args.pop();
        this._registerAckCallback(id, ack);
        packet.id = id;
      }
      var isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
      var isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
      var discardPacket = this.flags["volatile"] && !isTransportWritable;
      if (discardPacket) {
        debug$2("discard packet as the transport is not currently writable");
      } else if (isConnected) {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      } else {
        this.sendBuffer.push(packet);
      }
      this.flags = {};
      return this;
    }
    /**
     * @private
     */;
    _proto._registerAckCallback = function _registerAckCallback(id, ack) {
      var _this2 = this;
      var _a;
      var timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
      if (timeout === undefined) {
        this.acks[id] = ack;
        return;
      }
      // @ts-ignore
      var timer = this.io.setTimeoutFn(function () {
        delete _this2.acks[id];
        for (var i = 0; i < _this2.sendBuffer.length; i++) {
          if (_this2.sendBuffer[i].id === id) {
            debug$2("removing packet with ack id %d from the buffer", id);
            _this2.sendBuffer.splice(i, 1);
          }
        }
        debug$2("event with ack id %d has timed out after %d ms", id, timeout);
        ack.call(_this2, new Error("operation has timed out"));
      }, timeout);
      var fn = function fn() {
        // @ts-ignore
        _this2.io.clearTimeoutFn(timer);
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        ack.apply(_this2, args);
      };
      fn.withError = true;
      this.acks[id] = fn;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */;
    _proto.emitWithAck = function emitWithAck(ev) {
      var _this3 = this;
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      return new Promise(function (resolve, reject) {
        var fn = function fn(arg1, arg2) {
          return arg1 ? reject(arg1) : resolve(arg2);
        };
        fn.withError = true;
        args.push(fn);
        _this3.emit.apply(_this3, [ev].concat(args));
      });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */;
    _proto._addToQueue = function _addToQueue(args) {
      var _this4 = this;
      var ack;
      if (typeof args[args.length - 1] === "function") {
        ack = args.pop();
      }
      var packet = {
        id: this._queueSeq++,
        tryCount: 0,
        pending: false,
        args: args,
        flags: _extends({
          fromQueue: true
        }, this.flags)
      };
      args.push(function (err) {
        if (packet !== _this4._queue[0]) {
          // the packet has already been acknowledged
          return;
        }
        var hasError = err !== null;
        if (hasError) {
          if (packet.tryCount > _this4._opts.retries) {
            debug$2("packet [%d] is discarded after %d tries", packet.id, packet.tryCount);
            _this4._queue.shift();
            if (ack) {
              ack(err);
            }
          }
        } else {
          debug$2("packet [%d] was successfully sent", packet.id);
          _this4._queue.shift();
          if (ack) {
            for (var _len5 = arguments.length, responseArgs = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              responseArgs[_key5 - 1] = arguments[_key5];
            }
            ack.apply(void 0, [null].concat(responseArgs));
          }
        }
        packet.pending = false;
        return _this4._drainQueue();
      });
      this._queue.push(packet);
      this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */;
    _proto._drainQueue = function _drainQueue() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      debug$2("draining queue");
      if (!this.connected || this._queue.length === 0) {
        return;
      }
      var packet = this._queue[0];
      if (packet.pending && !force) {
        debug$2("packet [%d] has already been sent and is waiting for an ack", packet.id);
        return;
      }
      packet.pending = true;
      packet.tryCount++;
      debug$2("sending packet [%d] (try n°%d)", packet.id, packet.tryCount);
      this.flags = packet.flags;
      this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */;
    _proto.packet = function packet(_packet) {
      _packet.nsp = this.nsp;
      this.io._packet(_packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */;
    _proto.onopen = function onopen() {
      var _this5 = this;
      debug$2("transport is open - connecting");
      if (typeof this.auth == "function") {
        this.auth(function (data) {
          _this5._sendConnectPacket(data);
        });
      } else {
        this._sendConnectPacket(this.auth);
      }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */;
    _proto._sendConnectPacket = function _sendConnectPacket(data) {
      this.packet({
        type: PacketType.CONNECT,
        data: this._pid ? _extends({
          pid: this._pid,
          offset: this._lastOffset
        }, data) : data
      });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */;
    _proto.onerror = function onerror(err) {
      if (!this.connected) {
        this.emitReserved("connect_error", err);
      }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */;
    _proto.onclose = function onclose(reason, description) {
      debug$2("close (%s)", reason);
      this.connected = false;
      delete this.id;
      this.emitReserved("disconnect", reason, description);
      this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */;
    _proto._clearAcks = function _clearAcks() {
      var _this6 = this;
      Object.keys(this.acks).forEach(function (id) {
        var isBuffered = _this6.sendBuffer.some(function (packet) {
          return String(packet.id) === id;
        });
        if (!isBuffered) {
          // note: handlers that do not accept an error as first argument are ignored here
          var ack = _this6.acks[id];
          delete _this6.acks[id];
          if (ack.withError) {
            ack.call(_this6, new Error("socket has been disconnected"));
          }
        }
      });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */;
    _proto.onpacket = function onpacket(packet) {
      var sameNamespace = packet.nsp === this.nsp;
      if (!sameNamespace) return;
      switch (packet.type) {
        case PacketType.CONNECT:
          if (packet.data && packet.data.sid) {
            this.onconnect(packet.data.sid, packet.data.pid);
          } else {
            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          }
          break;
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          this.onevent(packet);
          break;
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          this.onack(packet);
          break;
        case PacketType.DISCONNECT:
          this.ondisconnect();
          break;
        case PacketType.CONNECT_ERROR:
          this.destroy();
          var err = new Error(packet.data.message);
          // @ts-ignore
          err.data = packet.data.data;
          this.emitReserved("connect_error", err);
          break;
      }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */;
    _proto.onevent = function onevent(packet) {
      var args = packet.data || [];
      debug$2("emitting event %j", args);
      if (null != packet.id) {
        debug$2("attaching ack callback to event");
        args.push(this.ack(packet.id));
      }
      if (this.connected) {
        this.emitEvent(args);
      } else {
        this.receiveBuffer.push(Object.freeze(args));
      }
    };
    _proto.emitEvent = function emitEvent(args) {
      if (this._anyListeners && this._anyListeners.length) {
        var listeners = this._anyListeners.slice();
        var _iterator = _createForOfIteratorHelper(listeners),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var listener = _step.value;
            listener.apply(this, args);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      _Emitter.prototype.emit.apply(this, args);
      if (this._pid && args.length && typeof args[args.length - 1] === "string") {
        this._lastOffset = args[args.length - 1];
      }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */;
    _proto.ack = function ack(id) {
      var self = this;
      var sent = false;
      return function () {
        // prevent double callbacks
        if (sent) return;
        sent = true;
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }
        debug$2("sending ack %j", args);
        self.packet({
          type: PacketType.ACK,
          id: id,
          data: args
        });
      };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */;
    _proto.onack = function onack(packet) {
      var ack = this.acks[packet.id];
      if (typeof ack !== "function") {
        debug$2("bad ack %s", packet.id);
        return;
      }
      delete this.acks[packet.id];
      debug$2("calling ack %s with %j", packet.id, packet.data);
      // @ts-ignore FIXME ack is incorrectly inferred as 'never'
      if (ack.withError) {
        packet.data.unshift(null);
      }
      // @ts-ignore
      ack.apply(this, packet.data);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */;
    _proto.onconnect = function onconnect(id, pid) {
      debug$2("socket connected with id %s", id);
      this.id = id;
      this.recovered = pid && this._pid === pid;
      this._pid = pid; // defined only if connection state recovery is enabled
      this.connected = true;
      this.emitBuffered();
      this.emitReserved("connect");
      this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */;
    _proto.emitBuffered = function emitBuffered() {
      var _this7 = this;
      this.receiveBuffer.forEach(function (args) {
        return _this7.emitEvent(args);
      });
      this.receiveBuffer = [];
      this.sendBuffer.forEach(function (packet) {
        _this7.notifyOutgoingListeners(packet);
        _this7.packet(packet);
      });
      this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */;
    _proto.ondisconnect = function ondisconnect() {
      debug$2("server disconnect (%s)", this.nsp);
      this.destroy();
      this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */;
    _proto.destroy = function destroy() {
      if (this.subs) {
        // clean subscriptions to avoid reconnections
        this.subs.forEach(function (subDestroy) {
          return subDestroy();
        });
        this.subs = undefined;
      }
      this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */;
    _proto.disconnect = function disconnect() {
      if (this.connected) {
        debug$2("performing disconnect (%s)", this.nsp);
        this.packet({
          type: PacketType.DISCONNECT
        });
      }
      // remove socket from pool
      this.destroy();
      if (this.connected) {
        // fire events
        this.onclose("io client disconnect");
      }
      return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */;
    _proto.close = function close() {
      return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */;
    _proto.compress = function compress(_compress) {
      this.flags.compress = _compress;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */;
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    _proto.timeout = function timeout(_timeout) {
      this.flags.timeout = _timeout;
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */;
    _proto.onAny = function onAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.push(listener);
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */;
    _proto.prependAny = function prependAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.unshift(listener);
      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */;
    _proto.offAny = function offAny(listener) {
      if (!this._anyListeners) {
        return this;
      }
      if (listener) {
        var listeners = this._anyListeners;
        for (var i = 0; i < listeners.length; i++) {
          if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        }
      } else {
        this._anyListeners = [];
      }
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */;
    _proto.listenersAny = function listenersAny() {
      return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */;
    _proto.onAnyOutgoing = function onAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.push(listener);
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */;
    _proto.prependAnyOutgoing = function prependAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.unshift(listener);
      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */;
    _proto.offAnyOutgoing = function offAnyOutgoing(listener) {
      if (!this._anyOutgoingListeners) {
        return this;
      }
      if (listener) {
        var listeners = this._anyOutgoingListeners;
        for (var i = 0; i < listeners.length; i++) {
          if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        }
      } else {
        this._anyOutgoingListeners = [];
      }
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */;
    _proto.listenersAnyOutgoing = function listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */;
    _proto.notifyOutgoingListeners = function notifyOutgoingListeners(packet) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        var listeners = this._anyOutgoingListeners.slice();
        var _iterator2 = _createForOfIteratorHelper(listeners),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var listener = _step2.value;
            listener.apply(this, packet.data);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    };
    return _createClass(Socket, [{
      key: "disconnected",
      get: function get() {
        return !this.connected;
      }
    }, {
      key: "active",
      get: function get() {
        return !!this.subs;
      }
    }, {
      key: "volatile",
      get: function get() {
        this.flags["volatile"] = true;
        return this;
      }
    }]);
  }(Emitter);

  /**
   * Initialize backoff timer with `opts`.
   *
   * - `min` initial timeout in milliseconds [100]
   * - `max` max timeout [10000]
   * - `jitter` [0]
   * - `factor` [2]
   *
   * @param {Object} opts
   * @api public
   */
  function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
  }
  /**
   * Return the backoff duration.
   *
   * @return {Number}
   * @api public
   */
  Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var rand = Math.random();
      var deviation = Math.floor(rand * this.jitter * ms);
      ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
  };
  /**
   * Reset the number of attempts.
   *
   * @api public
   */
  Backoff.prototype.reset = function () {
    this.attempts = 0;
  };
  /**
   * Set the minimum duration
   *
   * @api public
   */
  Backoff.prototype.setMin = function (min) {
    this.ms = min;
  };
  /**
   * Set the maximum duration
   *
   * @api public
   */
  Backoff.prototype.setMax = function (max) {
    this.max = max;
  };
  /**
   * Set the jitter
   *
   * @api public
   */
  Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
  };

  var debug$1 = debugModule("socket.io-client:manager"); // debug()
  var Manager = /*#__PURE__*/function (_Emitter) {
    function Manager(uri, opts) {
      var _this;
      var _a;
      _this = _Emitter.call(this) || this;
      _this.nsps = {};
      _this.subs = [];
      if (uri && "object" === _typeof(uri)) {
        opts = uri;
        uri = undefined;
      }
      opts = opts || {};
      opts.path = opts.path || "/socket.io";
      _this.opts = opts;
      installTimerFunctions(_this, opts);
      _this.reconnection(opts.reconnection !== false);
      _this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
      _this.reconnectionDelay(opts.reconnectionDelay || 1000);
      _this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
      _this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
      _this.backoff = new Backoff({
        min: _this.reconnectionDelay(),
        max: _this.reconnectionDelayMax(),
        jitter: _this.randomizationFactor()
      });
      _this.timeout(null == opts.timeout ? 20000 : opts.timeout);
      _this._readyState = "closed";
      _this.uri = uri;
      var _parser = opts.parser || parser;
      _this.encoder = new _parser.Encoder();
      _this.decoder = new _parser.Decoder();
      _this._autoConnect = opts.autoConnect !== false;
      if (_this._autoConnect) _this.open();
      return _this;
    }
    _inheritsLoose(Manager, _Emitter);
    var _proto = Manager.prototype;
    _proto.reconnection = function reconnection(v) {
      if (!arguments.length) return this._reconnection;
      this._reconnection = !!v;
      if (!v) {
        this.skipReconnect = true;
      }
      return this;
    };
    _proto.reconnectionAttempts = function reconnectionAttempts(v) {
      if (v === undefined) return this._reconnectionAttempts;
      this._reconnectionAttempts = v;
      return this;
    };
    _proto.reconnectionDelay = function reconnectionDelay(v) {
      var _a;
      if (v === undefined) return this._reconnectionDelay;
      this._reconnectionDelay = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
      return this;
    };
    _proto.randomizationFactor = function randomizationFactor(v) {
      var _a;
      if (v === undefined) return this._randomizationFactor;
      this._randomizationFactor = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
      return this;
    };
    _proto.reconnectionDelayMax = function reconnectionDelayMax(v) {
      var _a;
      if (v === undefined) return this._reconnectionDelayMax;
      this._reconnectionDelayMax = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
      return this;
    };
    _proto.timeout = function timeout(v) {
      if (!arguments.length) return this._timeout;
      this._timeout = v;
      return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */;
    _proto.maybeReconnectOnOpen = function maybeReconnectOnOpen() {
      // Only try to reconnect if it's the first time we're connecting
      if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
        // keeps reconnection from firing twice for the same reconnection loop
        this.reconnect();
      }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */;
    _proto.open = function open(fn) {
      var _this2 = this;
      debug$1("readyState %s", this._readyState);
      if (~this._readyState.indexOf("open")) return this;
      debug$1("opening %s", this.uri);
      this.engine = new Socket$1(this.uri, this.opts);
      var socket = this.engine;
      var self = this;
      this._readyState = "opening";
      this.skipReconnect = false;
      // emit `open`
      var openSubDestroy = on(socket, "open", function () {
        self.onopen();
        fn && fn();
      });
      var onError = function onError(err) {
        debug$1("error");
        _this2.cleanup();
        _this2._readyState = "closed";
        _this2.emitReserved("error", err);
        if (fn) {
          fn(err);
        } else {
          // Only do this if there is no fn to handle the error
          _this2.maybeReconnectOnOpen();
        }
      };
      // emit `error`
      var errorSub = on(socket, "error", onError);
      if (false !== this._timeout) {
        var timeout = this._timeout;
        debug$1("connect attempt will timeout after %d", timeout);
        // set timer
        var timer = this.setTimeoutFn(function () {
          debug$1("connect attempt timed out after %d", timeout);
          openSubDestroy();
          onError(new Error("timeout"));
          socket.close();
        }, timeout);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(function () {
          _this2.clearTimeoutFn(timer);
        });
      }
      this.subs.push(openSubDestroy);
      this.subs.push(errorSub);
      return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */;
    _proto.connect = function connect(fn) {
      return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */;
    _proto.onopen = function onopen() {
      debug$1("open");
      // clear old subs
      this.cleanup();
      // mark as open
      this._readyState = "open";
      this.emitReserved("open");
      // add new subs
      var socket = this.engine;
      this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)),
      // @ts-ignore
      on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */;
    _proto.onping = function onping() {
      this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */;
    _proto.ondata = function ondata(data) {
      try {
        this.decoder.add(data);
      } catch (e) {
        this.onclose("parse error", e);
      }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */;
    _proto.ondecoded = function ondecoded(packet) {
      var _this3 = this;
      // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
      nextTick(function () {
        _this3.emitReserved("packet", packet);
      }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */;
    _proto.onerror = function onerror(err) {
      debug$1("error", err);
      this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */;
    _proto.socket = function socket(nsp, opts) {
      var socket = this.nsps[nsp];
      if (!socket) {
        socket = new Socket(this, nsp, opts);
        this.nsps[nsp] = socket;
      } else if (this._autoConnect && !socket.active) {
        socket.connect();
      }
      return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */;
    _proto._destroy = function _destroy(socket) {
      var nsps = Object.keys(this.nsps);
      for (var _i = 0, _nsps = nsps; _i < _nsps.length; _i++) {
        var nsp = _nsps[_i];
        var _socket = this.nsps[nsp];
        if (_socket.active) {
          debug$1("socket %s is still active, skipping close", nsp);
          return;
        }
      }
      this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */;
    _proto._packet = function _packet(packet) {
      debug$1("writing packet %j", packet);
      var encodedPackets = this.encoder.encode(packet);
      for (var i = 0; i < encodedPackets.length; i++) {
        this.engine.write(encodedPackets[i], packet.options);
      }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */;
    _proto.cleanup = function cleanup() {
      debug$1("cleanup");
      this.subs.forEach(function (subDestroy) {
        return subDestroy();
      });
      this.subs.length = 0;
      this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */;
    _proto._close = function _close() {
      debug$1("disconnect");
      this.skipReconnect = true;
      this._reconnecting = false;
      this.onclose("forced close");
    }
    /**
     * Alias for close()
     *
     * @private
     */;
    _proto.disconnect = function disconnect() {
      return this._close();
    }
    /**
     * Called when:
     *
     * - the low-level engine is closed
     * - the parser encountered a badly formatted packet
     * - all sockets are disconnected
     *
     * @private
     */;
    _proto.onclose = function onclose(reason, description) {
      var _a;
      debug$1("closed due to %s", reason);
      this.cleanup();
      (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
      this.backoff.reset();
      this._readyState = "closed";
      this.emitReserved("close", reason, description);
      if (this._reconnection && !this.skipReconnect) {
        this.reconnect();
      }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */;
    _proto.reconnect = function reconnect() {
      var _this4 = this;
      if (this._reconnecting || this.skipReconnect) return this;
      var self = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) {
        debug$1("reconnect failed");
        this.backoff.reset();
        this.emitReserved("reconnect_failed");
        this._reconnecting = false;
      } else {
        var delay = this.backoff.duration();
        debug$1("will wait %dms before reconnect attempt", delay);
        this._reconnecting = true;
        var timer = this.setTimeoutFn(function () {
          if (self.skipReconnect) return;
          debug$1("attempting reconnect");
          _this4.emitReserved("reconnect_attempt", self.backoff.attempts);
          // check again for the case socket closed in above events
          if (self.skipReconnect) return;
          self.open(function (err) {
            if (err) {
              debug$1("reconnect attempt error");
              self._reconnecting = false;
              self.reconnect();
              _this4.emitReserved("reconnect_error", err);
            } else {
              debug$1("reconnect success");
              self.onreconnect();
            }
          });
        }, delay);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(function () {
          _this4.clearTimeoutFn(timer);
        });
      }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */;
    _proto.onreconnect = function onreconnect() {
      var attempt = this.backoff.attempts;
      this._reconnecting = false;
      this.backoff.reset();
      this.emitReserved("reconnect", attempt);
    };
    return Manager;
  }(Emitter);

  var debug = debugModule("socket.io-client"); // debug()
  /**
   * Managers cache.
   */
  var cache = {};
  function lookup(uri, opts) {
    if (_typeof(uri) === "object") {
      opts = uri;
      uri = undefined;
    }
    opts = opts || {};
    var parsed = url(uri, opts.path || "/socket.io");
    var source = parsed.source;
    var id = parsed.id;
    var path = parsed.path;
    var sameNamespace = cache[id] && path in cache[id]["nsps"];
    var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    var io;
    if (newConnection) {
      debug("ignoring socket cache for %s", source);
      io = new Manager(source, opts);
    } else {
      if (!cache[id]) {
        debug("new io instance for %s", source);
        cache[id] = new Manager(source, opts);
      }
      io = cache[id];
    }
    if (parsed.query && !opts.query) {
      opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
  }
  // so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
  // namespace (e.g. `io.connect(...)`), for backward compatibility
  _extends(lookup, {
    Manager: Manager,
    Socket: Socket,
    io: lookup,
    connect: lookup
  });

  return lookup;

}));


(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['ConsoleHooker'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['ConsoleHooker'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  class ConsoleHooker {
    constructor(outputElementId) {
      this.originalConsole = { ...console }; // Guardar los métodos originales
      this.outputElementId = outputElementId;
      this.hookConsole();
      this.messageCounter = 0;
    }

    hookConsole() {
      Object.keys(console).forEach(method => {
        if (typeof console[method] === 'function') {
          console[method] = (...args) => {
            this.writeToHtml(method, args);
            this.originalConsole[method](...args); // Llamar al método original
          };
        }
      });
    }

    formatError(error) {
      let errorMessage = "";
      errorMessage += "Error: " + error.name + ": " + error.message;
      if (error.location) {
        errorMessage += JSON.stringify({
          found: error.found,
          expected: error.expected,
          location: error.location
        }, null, 2);
      }
      return errorMessage;
    }

    consoleReducer() {
      return (arg) => {
        if (typeof arg === 'object') {
          if (arg instanceof Error) {
            return this.formatError(arg);
          } else {
            const seen = new WeakSet();
            return JSON.stringify(arg, function (key, value) {
              if (typeof value === "object") {
                if (seen.has(value)) {
                  return "[Circular]";
                }
                if (value !== null) {
                  seen.add(value);
                }
              }
              return value;
            }, 2);
          }
        } else {
          return arg;
        }
      };
    }

    writeToHtml(method, args) {
      // Do not log from this method or it becomes recursive:
      const message = document.createElement('div');
      message.className = `console-${method}`;
      message.textContent = `[${this.messageCounter++}] ${args.map(this.consoleReducer()).join(' ')}`;
      const outputElement = document.getElementById(this.outputElementId);
      if (!outputElement) {
        // console.log("no console hooker output element found");
        return;
      }
      const subnodes = outputElement.children;
      const subnodesLength = outputElement.children.length;
      const hasMoreThan100 = outputElement.children.length > 100;
      if (hasMoreThan100) {
        for (let index = subnodes.length - 1; index > 50; index--) {
          const subnode = subnodes[index];
          subnode.remove();
        }
      }
      const parent = outputElement;
      parent.insertBefore(message, parent.firstChild);
    }

    restoreConsole() {
      Object.keys(this.originalConsole).forEach(method => {
        console[method] = this.originalConsole[method];
      });
    }
  }

  ConsoleHooker.default = ConsoleHooker;

  return ConsoleHooker;

});
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['LswDatabaseAdapter'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['LswDatabaseAdapter'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  class LswDatabaseAdapter extends Browsie {

  }

  return LswDatabaseAdapter;
});
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['LswFormControls'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['LswFormControls'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  class LswFormControlsClass {

    static class = this;

    constructor() {
      this.mixins = new Map();
    }

    registerMixin(name, mixin) {
      if(this.mixins.has(name)) {
        throw new Error(`Cannot register mixin because it is already registered «${name}» on «LswFormControls.registerMixin»`);
      }
      this.mixins.set(name, mixin);
    }

    unregisterMixin(name) {
      if(this.mixins.has(name)) {
        throw new Error(`Cannot unregister mixin because it is not registered «${name}» on «LswFormControls.unregisterMixin»`);
      }
      this.mixins.delete(name);
    }

  }

  const LswFormControls = new LswFormControlsClass();

  LswFormControls.registerMixin("BasicControl", {
    props: {
      initialValue: {
        type: [String,Object,Array,Boolean,Number,undefined],
        default: () => undefined
      },
      onValidate: {
        type: Function,
        default: () => true
      },
      onChange: {
        type: Function,
        default: () => undefined
      },
      onDelayedChange: {
        type: Function,
        default: () => undefined
      },
      delayedTimeout: {
        type: Number,
        default: () => 3000
      },
      label: {
        type: String,
        default: () => ""
      },
      formId: {
        type: String,
        default: () => "default"
      },
      name: {
        type: String,
        default: () => undefined
      },
      cssStyles: {
        type: Object,
        default: () => ({})
      },
      cssClasses: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        _delayedChangeTimeoutId: undefined,
        error: false,
        value: this.initialValue,
      }
    },
    methods: {
      setValue(newValue) {
        this.value = newValue;
      },
      getValue() {
        return this.value;
      },
      getError() {
        return this.error;
      },
      setError(error) {
        this.error = error;
      },
      clearError() {
        this.error = false;
      },
      async validate() {
        if(typeof this.onValidate !== "function") {
          throw new Error("Required «onValidate» to be a function on «BasicControl.validate»");
        }
        try {
          const value = this.getValue();
          const result = await this.onValidate(value, this);
          if(typeof result === "undefined") {
            this.clearError();
          } else if(result instanceof Error) {
            this.setError(result);
          } else {
            // @OK
            this.clearError();
          }
          return result;
        } catch (error) {
          this.setError(error);
          return error;
        }
      }
    },
    watch: {
      value(newValue) {
        if(this.onChange === "function") {
          this.onChange(newValue, this);
        }
        if(this.onDelayedChange === "function") {
          clearTimeout(this._delayedChangeTimeoutId);
          this._delayedChangeTimeoutId = setTimeout(() => {
            this.onDelayedChange(newValue, this);
          }, this.delayedTimeout);
        }
      }
    },
    mounted() {
      this.$el.$lswFormControlComponent = this;
    }
  })
  
  return LswFormControls;

});
Vue.directive("descriptor", {
  bind(el, binding) {
      const resolveClasses = key => {
          let resolved = window.stylingDescriptor[key];
          if (!resolved) return key;
          if(typeof resolved === "string") {
            resolved = resolved.split(" ");
          }
          return resolved.map(subKey => resolveClasses(subKey)).flat();
      };
      const descriptorKeys = (binding.value || el.getAttribute("descriptor")).split(" ");
      const descriptorClasses = descriptorKeys.map(key => resolveClasses(key)).flat();
      descriptorClasses.forEach(cls => {
        if(cls.indexOf(".") === -1) {
          el.classList.add(cls);
        }
      });
  }
});

const styleTag = document.createElement("style");
styleTag.textContent = `
  .title_of_form {
    border: 1px solid #113;
    box-shadow: 0 0 4px black;
    border-radius: 0pt;
    color: black;
    width: 100%;
    padding: 8px;
    font-size: 12px;
    background-color: #AAF;
  }
  .block_of_form {
    padding: 4px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
  }
  .bordered_1 {
    border: 1px solid #CCC;
  }
  .with_separator_on_bottom_1 {
    border-bottom: 1px solid #CCC;
  }
`;
document.body.appendChild(styleTag);

window.stylingDescriptor = {
  "agenda.task_form.title": "title_of_form",
  "agenda.task_form.block": "block_of_form",
  "agenda.task_form.aggregations.block": "block_of_form with_separator_on_bottom_1"
}
Vue.directive("focus", {
  inserted: function(el) {
    el.focus();
  }
});
/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {
		define(factory);
	}
	else if (typeof module != "undefined" && typeof module.exports != "undefined") {
		module.exports = factory();
	}
	else {
		/* jshint sub:true */
		window["Sortable"] = factory();
	}
})(function sortableFactory() {
	"use strict";

	if (typeof window === "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,
		lastDownEl,

		scrollEl,
		scrollParentEl,
		scrollCustomFn,

		oldIndex,
		newIndex,

		activeGroup,
		putSortable,

		autoScrolls = [],
		scrolling = false,

		awaitingDragStarted = false,
		ignoreNextClick = false,
		sortables = [],

		pointerElemChangedInterval,
		lastPointerElemX,
		lastPointerElemY,

		tapEvt,
		touchEvt,

		moved,


		lastTarget,
		lastDirection,
		pastFirstInvertThresh = false,
		isCircumstantialInvert = false,
		lastMode, // 'swap' or 'insert'

		targetMoveDistance,

		// For positioning ghost absolutely
		ghostRelativeParent,
		ghostRelativeParentInitialScroll = [], // (left, top)


		forRepaintDummy,
		realDragElRect, // dragEl rect after current animation

		/** @const */
		R_SPACE = /\s+/g,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,
		setTimeout = win.setTimeout,

		$ = win.jQuery || win.Zepto,
		Polymer = win.Polymer,

		captureMode = {
			capture: false,
			passive: false
		},

		IE11OrLess = !!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie|iemobile)/i),
		Edge = !!navigator.userAgent.match(/Edge/i),
		FireFox = !!navigator.userAgent.match(/firefox/i),
		Safari = !!(navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && !navigator.userAgent.match(/android/i)),
		IOS = !!(navigator.userAgent.match(/iP(ad|od|hone)/i)),

		PositionGhostAbsolutely = IOS,

		CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',

		// This will not pass for IE9, because IE9 DnD only works on anchors
		supportDraggable = ('draggable' in document.createElement('div')),

		supportCssPointerEvents = (function() {
			// false when <= IE11
			if (IE11OrLess) {
				return false;
			}
			var el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,
		_alignedSilent = false,

		abs = Math.abs,
		min = Math.min,
		max = Math.max,

		savedInputChecked = [],

		_detectDirection = function(el, options) {
			var elCSS = _css(el),
				elWidth = parseInt(elCSS.width)
					- parseInt(elCSS.paddingLeft)
					- parseInt(elCSS.paddingRight)
					- parseInt(elCSS.borderLeftWidth)
					- parseInt(elCSS.borderRightWidth),
				child1 = _getChild(el, 0, options),
				child2 = _getChild(el, 1, options),
				firstChildCSS = child1 && _css(child1),
				secondChildCSS = child2 && _css(child2),
				firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + _getRect(child1).width,
				secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + _getRect(child2).width;

			if (elCSS.display === 'flex') {
				return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse'
				? 'vertical' : 'horizontal';
			}

			if (elCSS.display === 'grid') {
				return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
			}

			if (child1 && firstChildCSS.float !== 'none') {
				var touchingSideChild2 = firstChildCSS.float === 'left' ? 'left' : 'right';

				return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ?
					'vertical' : 'horizontal';
			}

			return (child1 &&
				(
					firstChildCSS.display === 'block' ||
					firstChildCSS.display === 'flex' ||
					firstChildCSS.display === 'table' ||
					firstChildCSS.display === 'grid' ||
					firstChildWidth >= elWidth &&
					elCSS[CSSFloatProperty] === 'none' ||
					child2 &&
					elCSS[CSSFloatProperty] === 'none' &&
					firstChildWidth + secondChildWidth > elWidth
				) ?
				'vertical' : 'horizontal'
			);
		},

		/**
		 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
		 * @param  {Number} x      X position
		 * @param  {Number} y      Y position
		 * @return {HTMLElement}   Element of the first found nearest Sortable
		 */
		_detectNearestEmptySortable = function(x, y) {
			for (var i = 0; i < sortables.length; i++) {
				if (_lastChild(sortables[i])) continue;

				var rect = _getRect(sortables[i]),
					threshold = sortables[i][expando].options.emptyInsertThreshold,
					insideHorizontally = x >= (rect.left - threshold) && x <= (rect.right + threshold),
					insideVertically = y >= (rect.top - threshold) && y <= (rect.bottom + threshold);

				if (insideHorizontally && insideVertically) {
					return sortables[i];
				}
			}
		},

		_isClientInRowColumn = function(x, y, el, axis, options) {
			var targetRect = _getRect(el),
				targetS1Opp = axis === 'vertical' ? targetRect.left : targetRect.top,
				targetS2Opp = axis === 'vertical' ? targetRect.right : targetRect.bottom,
				mouseOnOppAxis = axis === 'vertical' ? x : y;

			return targetS1Opp < mouseOnOppAxis && mouseOnOppAxis < targetS2Opp;
		},

		_isElInRowColumn = function(el1, el2, axis) {
			var el1Rect = el1 === dragEl && realDragElRect || _getRect(el1),
				el2Rect = el2 === dragEl && realDragElRect || _getRect(el2),
				el1S1Opp = axis === 'vertical' ? el1Rect.left : el1Rect.top,
				el1S2Opp = axis === 'vertical' ? el1Rect.right : el1Rect.bottom,
				el1OppLength = axis === 'vertical' ? el1Rect.width : el1Rect.height,
				el2S1Opp = axis === 'vertical' ? el2Rect.left : el2Rect.top,
				el2S2Opp = axis === 'vertical' ? el2Rect.right : el2Rect.bottom,
				el2OppLength = axis === 'vertical' ? el2Rect.width : el2Rect.height;

			return (
				el1S1Opp === el2S1Opp ||
				el1S2Opp === el2S2Opp ||
				(el1S1Opp + el1OppLength / 2) === (el2S1Opp + el2OppLength / 2)
			);
		},

		_getParentAutoScrollElement = function(el, includeSelf) {
			// skip to window
			if (!el || !el.getBoundingClientRect) return _getWindowScrollingElement();

			var elem = el;
			var gotSelf = false;
			do {
				// we don't need to get elem css if it isn't even overflowing in the first place (performance)
				if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
					var elemCSS = _css(elem);
					if (
						elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') ||
						elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')
					) {
						if (!elem || !elem.getBoundingClientRect || elem === document.body) return _getWindowScrollingElement();

						if (gotSelf || includeSelf) return elem;
						gotSelf = true;
					}
				}
			/* jshint boss:true */
			} while (elem = elem.parentNode);

			return _getWindowScrollingElement();
		},

		_getWindowScrollingElement = function() {
			if (IE11OrLess) {
				return document.documentElement;
			} else {
				return document.scrollingElement;
			}
		},

		_scrollBy = function(el, x, y) {
			el.scrollLeft += x;
			el.scrollTop += y;
		},

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl, /**Boolean*/isFallback) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (options.scroll) {
				var _this = rootEl ? rootEl[expando] : window,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winScroller = _getWindowScrollingElement(),

					scrollThisInstance = false;

				// Detect scrollEl
				if (scrollParentEl !== rootEl) {
					_clearAutoScrolls();

					scrollEl = options.scroll;
					scrollCustomFn = options.scrollFn;

					if (scrollEl === true) {
						scrollEl = _getParentAutoScrollElement(rootEl, true);
						scrollParentEl = scrollEl;
					}
				}


				var layersOut = 0;
				var currentParent = scrollEl;
				do {
					var	el = currentParent,
						rect = _getRect(el),

						top = rect.top,
						bottom = rect.bottom,
						left = rect.left,
						right = rect.right,

						width = rect.width,
						height = rect.height,

						scrollWidth,
						scrollHeight,

						css,

						vx,
						vy,

						canScrollX,
						canScrollY,

						scrollPosX,
						scrollPosY;


					scrollWidth = el.scrollWidth;
					scrollHeight = el.scrollHeight;

					css = _css(el);

					scrollPosX = el.scrollLeft;
					scrollPosY = el.scrollTop;

					if (el === winScroller) {
						canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll' || css.overflowX === 'visible');
						canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll' || css.overflowY === 'visible');
					} else {
						canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll');
						canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll');
					}

					vx = canScrollX && (abs(right - x) <= sens && (scrollPosX + width) < scrollWidth) - (abs(left - x) <= sens && !!scrollPosX);

					vy = canScrollY && (abs(bottom - y) <= sens && (scrollPosY + height) < scrollHeight) - (abs(top - y) <= sens && !!scrollPosY);


					if (!autoScrolls[layersOut]) {
						for (var i = 0; i <= layersOut; i++) {
							if (!autoScrolls[i]) {
								autoScrolls[i] = {};
							}
						}
					}

					if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
						autoScrolls[layersOut].el = el;
						autoScrolls[layersOut].vx = vx;
						autoScrolls[layersOut].vy = vy;

						clearInterval(autoScrolls[layersOut].pid);

						if (el && (vx != 0 || vy != 0)) {
							scrollThisInstance = true;
							/* jshint loopfunc:true */
							autoScrolls[layersOut].pid = setInterval((function () {
								// emulate drag over during autoscroll (fallback), emulating native DnD behaviour
								if (isFallback && this.layer === 0) {
									Sortable.active._emulateDragOver(true);
									Sortable.active._onTouchMove(touchEvt, true);
								}
								var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
								var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

								if ('function' === typeof(scrollCustomFn)) {
									if (scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt, touchEvt, autoScrolls[this.layer].el) !== 'continue') {
										return;
									}
								}

								_scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
							}).bind({layer: layersOut}), 24);
						}
					}
					layersOut++;
				} while (options.bubbleScroll && currentParent !== winScroller && (currentParent = _getParentAutoScrollElement(currentParent, false)));
				scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
			}
		}, 30),

		_clearAutoScrolls = function () {
			autoScrolls.forEach(function(autoScroll) {
				clearInterval(autoScroll.pid);
			});
			autoScrolls = [];
		},

		_prepareGroup = function (options) {
			function toFn(value, pull) {
				return function(to, from, dragEl, evt) {
					var sameGroup = to.options.group.name &&
									from.options.group.name &&
									to.options.group.name === from.options.group.name;

					if (value == null && (pull || sameGroup)) {
						// Default pull value
						// Default pull and put value if same group
						return true;
					} else if (value == null || value === false) {
						return false;
					} else if (pull && value === 'clone') {
						return value;
					} else if (typeof value === 'function') {
						return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
					} else {
						var otherGroup = (pull ? to : from).options.group.name;

						return (value === true ||
						(typeof value === 'string' && value === otherGroup) ||
						(value.join && value.indexOf(otherGroup) > -1));
					}
				};
			}

			var group = {};
			var originalGroup = options.group;

			if (!originalGroup || typeof originalGroup != 'object') {
				originalGroup = {name: originalGroup};
			}

			group.name = originalGroup.name;
			group.checkPull = toFn(originalGroup.pull, true);
			group.checkPut = toFn(originalGroup.put);
			group.revertClone = originalGroup.revertClone;

			options.group = group;
		},

		_checkAlignment = function(evt) {
			if (!dragEl || !dragEl.parentNode) return;
			dragEl.parentNode[expando] && dragEl.parentNode[expando]._computeIsAligned(evt);
		},

		_isTrueParentSortable = function(el, target) {
			var trueParent = target;
			while (!trueParent[expando]) {
				trueParent = trueParent.parentNode;
			}

			return el === trueParent;
		},

		_artificalBubble = function(sortable, originalEvt, method) {
			// Artificial IE bubbling
			var nextParent = sortable.parentNode;
			while (nextParent && !nextParent[expando]) {
				nextParent = nextParent.parentNode;
			}

			if (nextParent) {
				nextParent[expando][method](_extend(originalEvt, {
					artificialBubble: true
				}));
			}
		},

		_hideGhostForTarget = function() {
			if (!supportCssPointerEvents && ghostEl) {
				_css(ghostEl, 'display', 'none');
			}
		},

		_unhideGhostForTarget = function() {
			if (!supportCssPointerEvents && ghostEl) {
				_css(ghostEl, 'display', '');
			}
		};


	// #1184 fix - Prevent click event on fallback if dragged but item not changed position
	document.addEventListener('click', function(evt) {
		if (ignoreNextClick) {
			evt.preventDefault();
			evt.stopPropagation && evt.stopPropagation();
			evt.stopImmediatePropagation && evt.stopImmediatePropagation();
			ignoreNextClick = false;
			return false;
		}
	}, true);

	var nearestEmptyInsertDetectEvent = function(evt) {
		evt = evt.touches ? evt.touches[0] : evt;
		if (dragEl) {
			var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

			if (nearest) {
				nearest[expando]._onDragOver({
					clientX: evt.clientX,
					clientY: evt.clientY,
					target: nearest,
					rootEl: nearest
				});
			}
		}
	};
	// We do not want this to be triggered if completed (bubbling canceled), so only define it here
	_on(document, 'dragover', nearestEmptyInsertDetectEvent);
	_on(document, 'mousemove', nearestEmptyInsertDetectEvent);
	_on(document, 'touchmove', nearestEmptyInsertDetectEvent);

	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;

		// Default options
		var defaults = {
			group: null,
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			bubbleScroll: true,
			draggable: /[uo]l/i.test(el.nodeName) ? '>li' : '>*',
			swapThreshold: 1, // percentage; 0 <= x <= 1
			invertSwap: false, // invert always
			invertedSwapThreshold: null, // will be set to same as swapThreshold if default
			removeCloneOnHide: true,
			direction: function() {
				return _detectDirection(el, this.options);
			},
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			ignore: 'a, img',
			filter: null,
			preventOnFilter: true,
			animation: 0,
			easing: null,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			touchStartThreshold: parseInt(window.devicePixelRatio, 10) || 1,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: {x: 0, y: 0},
			supportPointer: Sortable.supportPointer !== false && (
				('PointerEvent' in window) ||
				window.navigator && ('msPointerEnabled' in window.navigator) // microsoft
			),
			emptyInsertThreshold: 5
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		if (this.nativeDraggable) {
			// Touch start threshold cannot be greater than the native dragstart threshold
			this.options.touchStartThreshold = 1;
		}

		// Bind events
		if (options.supportPointer) {
			_on(el, 'pointerdown', this._onTapStart);
		} else {
			_on(el, 'mousedown', this._onTapStart);
			_on(el, 'touchstart', this._onTapStart);
		}

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		sortables.push(this.el);

		// Restore sorting
		options.store && options.store.get && this.sort(options.store.get(this) || []);
	}

	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		_computeIsAligned: function(evt) {
			var target;

			if (ghostEl && !supportCssPointerEvents) {
				_hideGhostForTarget();
				target = document.elementFromPoint(evt.clientX, evt.clientY);
				_unhideGhostForTarget();
			} else {
				target = evt.target;
			}

			target = _closest(target, this.options.draggable, this.el, false);
			if (_alignedSilent) return;
			if (!dragEl || dragEl.parentNode !== this.el) return;

			var children = this.el.children;
			for (var i = 0; i < children.length; i++) {
				// Don't change for target in case it is changed to aligned before onDragOver is fired
				if (_closest(children[i], this.options.draggable, this.el, false) && children[i] !== target) {
					children[i].sortableMouseAligned = _isClientInRowColumn(evt.clientX, evt.clientY, children[i], this._getDirection(evt, null), this.options);
				}
			}
			// Used for nulling last target when not in element, nothing to do with checking if aligned
			if (!_closest(target, this.options.draggable, this.el, true)) {
				lastTarget = null;
			}

			_alignedSilent = true;
			setTimeout(function() {
				_alignedSilent = false;
			}, 30);

		},

		_getDirection: function(evt, target) {
			return (typeof this.options.direction === 'function') ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
		},

		_onTapStart: function (/** Event|TouchEvent */evt) {
			if (!evt.cancelable) return;
			var _this = this,
				el = this.el,
				options = this.options,
				preventOnFilter = options.preventOnFilter,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = evt.target.shadowRoot && ((evt.path && evt.path[0]) || (evt.composedPath && evt.composedPath()[0])) || target,
				filter = options.filter,
				startIndex;

			_saveInputCheckedState(el);


			// IE: Calls events in capture mode if event element is nested. This ensures only correct element's _onTapStart goes through.
			// This process is also done in _onDragOver
			if (IE11OrLess && !evt.artificialBubble && !_isTrueParentSortable(el, target)) {
				return;
			}

			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
				return; // only left button and enabled
			}

			// cancel dnd if original target is content editable
			if (originalTarget.isContentEditable) {
				return;
			}

			target = _closest(target, options.draggable, el, false);

			if (!target) {
				if (IE11OrLess) {
					_artificalBubble(el, evt, '_onTapStart');
				}
				return;
			}

			if (lastDownEl === target) {
				// Ignoring duplicate `down`
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, el, startIndex);
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el, false);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, el, startIndex);
						return true;
					}
				});

				if (filter) {
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return; // cancel dnd
				}
			}

			if (options.handle && !_closest(originalTarget, options.handle, el, false)) {
				return;
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},


		_handleAutoScroll: function(evt, fallback) {
			if (!dragEl || !this.options.scroll) return;
			var x = evt.clientX,
				y = evt.clientY,

				elem = document.elementFromPoint(x, y),
				_this = this;

			// IE does not seem to have native autoscroll,
			// Edge's autoscroll seems too conditional,
			// MACOS Safari does not have autoscroll,
			// Firefox and Chrome are good
			if (fallback || Edge || IE11OrLess || Safari) {
				_autoScroll(evt, _this.options, elem, fallback);

				// Listener for pointer element change
				var ogElemScroller = _getParentAutoScrollElement(elem, true);
				if (
					scrolling &&
					(
						!pointerElemChangedInterval ||
						x !== lastPointerElemX ||
						y !== lastPointerElemY
					)
				) {

					pointerElemChangedInterval && clearInterval(pointerElemChangedInterval);
					// Detect for pointer elem change, emulating native DnD behaviour
					pointerElemChangedInterval = setInterval(function() {
						if (!dragEl) return;
						// could also check if scroll direction on newElem changes due to parent autoscrolling
						var newElem = _getParentAutoScrollElement(document.elementFromPoint(x, y), true);
						if (newElem !== ogElemScroller) {
							ogElemScroller = newElem;
							_clearAutoScrolls();
							_autoScroll(evt, _this.options, ogElemScroller, fallback);
						}
					}, 10);
					lastPointerElemX = x;
					lastPointerElemY = y;
				}

			} else {
				// if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
				if (!_this.options.bubbleScroll || _getParentAutoScrollElement(elem, true) === _getWindowScrollingElement()) {
					_clearAutoScrolls();
					return;
				}
				_autoScroll(evt, _this.options, _getParentAutoScrollElement(elem, false), false);
			}
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				oldIndex = startIndex;

				tapEvt = {
					target: dragEl,
					clientX: (touch || evt).clientX,
					clientY: (touch || evt).clientY
				};

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'all';
				// undo animation if needed
				dragEl.style.transition = '';
				dragEl.style.transform = '';

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDragEvents();

					if (!FireFox && _this.nativeDraggable) {
						dragEl.draggable = true;
					}

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(evt, touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, rootEl, oldIndex);

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				if (options.supportPointer) {
					_on(ownerDocument, 'pointerup', _this._onDrop);
				} else {
					_on(ownerDocument, 'mouseup', _this._onDrop);
					_on(ownerDocument, 'touchend', _this._onDrop);
					_on(ownerDocument, 'touchcancel', _this._onDrop);
				}

				// Make dragEl draggable (must be before delay for FireFox)
				if (FireFox && this.nativeDraggable) {
					this.options.touchStartThreshold = 4;
					dragEl.draggable = true;
				}

				// Delay is impossible for native DnD in Edge or IE
				if (options.delay && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
					_on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
					options.supportPointer && _on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}
			}
		},

		_delayedDragTouchMoveHandler: function (/** TouchEvent|PointerEvent **/e) {
			var touch = e.touches ? e.touches[0] : e;
			if (max(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY))
					>= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))
			) {
				this._disableDelayedDrag();
			}
		},

		_disableDelayedDrag: function () {
			dragEl && _disableDraggable(dragEl);
			clearTimeout(this._dragStartTimer);

			this._disableDelayedDragEvents();
		},

		_disableDelayedDragEvents: function () {
			var ownerDocument = this.el.ownerDocument;
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
			_off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
			_off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
		},

		_triggerDragStart: function (/** Event */evt, /** Touch */touch) {
			touch = touch || (evt.pointerType == 'touch' ? evt : null);

			if (!this.nativeDraggable || touch) {
				if (this.options.supportPointer) {
					_on(document, 'pointermove', this._onTouchMove);
				} else if (touch) {
					_on(document, 'touchmove', this._onTouchMove);
				} else {
					_on(document, 'mousemove', this._onTouchMove);
				}
			} else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {
					// Timeout neccessary for IE9
					_nextTick(function () {
						document.selection.empty();
					});
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function (fallback, evt) {
			awaitingDragStarted = false;
			if (rootEl && dragEl) {
				if (this.nativeDraggable) {
					_on(document, 'dragover', this._handleAutoScroll);
					_on(document, 'dragover', _checkAlignment);
				}
				var options = this.options;

				// Apply effect
				!fallback && _toggleClass(dragEl, options.dragClass, false);
				_toggleClass(dragEl, options.ghostClass, true);

				// In case dragging an animated element
				_css(dragEl, 'transform', '');

				Sortable.active = this;

				fallback && this._appendGhost();

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, rootEl, oldIndex, undefined, evt);
			} else {
				this._nulling();
			}
		},

		_emulateDragOver: function (forAutoScroll) {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY && !forAutoScroll) {
					return;
				}
				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				_hideGhostForTarget();

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
				var parent = target;

				while (target && target.shadowRoot) {
					target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
					parent = target;
				}

				if (parent) {
					do {
						if (parent[expando]) {
							var inserted;

							inserted = parent[expando]._onDragOver({
								clientX: touchEvt.clientX,
								clientY: touchEvt.clientY,
								target: target,
								rootEl: parent
							});

							if (inserted && !this.options.dragoverBubble) {
								break;
							}
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}
				dragEl.parentNode[expando]._computeIsAligned(touchEvt);

				_unhideGhostForTarget();
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt, forAutoScroll) {
			if (tapEvt) {
				var	options = this.options,
					fallbackTolerance = options.fallbackTolerance,
					fallbackOffset = options.fallbackOffset,
					touch = evt.touches ? evt.touches[0] : evt,
					matrix = ghostEl && _matrix(ghostEl),
					scaleX = ghostEl && matrix && matrix.a,
					scaleY = ghostEl && matrix && matrix.d,
					relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && _getRelativeScrollOffset(ghostRelativeParent),
					dx = ((touch.clientX - tapEvt.clientX)
							+ fallbackOffset.x) / (scaleX || 1)
							+ (relativeScrollOffset ? (relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0]) : 0) / (scaleX || 1),
					dy = ((touch.clientY - tapEvt.clientY)
							+ fallbackOffset.y) / (scaleY || 1)
							+ (relativeScrollOffset ? (relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1]) : 0) / (scaleY || 1),
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active && !awaitingDragStarted) {
					if (fallbackTolerance &&
						min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
					) {
						return;
					}
					this._onDragStart(evt, true);
				}

				!forAutoScroll && this._handleAutoScroll(touch, true);

				moved = true;
				touchEvt = touch;

				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.cancelable && evt.preventDefault();
			}
		},

		_appendGhost: function () {
			// Bug if using scale(): https://stackoverflow.com/questions/2637058
			// Not being adjusted for
			if (!ghostEl) {
				var container = this.options.fallbackOnBody ? document.body : rootEl,
					rect = _getRect(dragEl, true, container, !PositionGhostAbsolutely),
					css = _css(dragEl),
					options = this.options;

				// Position absolutely
				if (PositionGhostAbsolutely) {
					// Get relatively positioned parent
					ghostRelativeParent = container;

					while (
						_css(ghostRelativeParent, 'position') === 'static' &&
						_css(ghostRelativeParent, 'transform') === 'none' &&
						ghostRelativeParent !== document
					) {
						ghostRelativeParent = ghostRelativeParent.parentNode;
					}

					if (ghostRelativeParent !== document) {
						var ghostRelativeParentRect = _getRect(ghostRelativeParent, true);

						rect.top -= ghostRelativeParentRect.top;
						rect.left -= ghostRelativeParentRect.left;
					}

					if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
						if (ghostRelativeParent === document) ghostRelativeParent = _getWindowScrollingElement();

						rect.top += ghostRelativeParent.scrollTop;
						rect.left += ghostRelativeParent.scrollLeft;
					} else {
						ghostRelativeParent = _getWindowScrollingElement();
					}
					ghostRelativeParentInitialScroll = _getRelativeScrollOffset(ghostRelativeParent);
				}


				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'box-sizing', 'border-box');
				_css(ghostEl, 'margin', 0);
				_css(ghostEl, 'top', rect.top);
				_css(ghostEl, 'left', rect.left);
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', (PositionGhostAbsolutely ? 'absolute' : 'fixed'));
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				container.appendChild(ghostEl);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/fallback) {
			var _this = this;
			var dataTransfer = evt.dataTransfer;
			var options = _this.options;

			// Setup clone
			cloneEl = _clone(dragEl);

			cloneEl.draggable = false;
			cloneEl.style['will-change'] = '';

			this._hideClone();

			_toggleClass(cloneEl, _this.options.chosenClass, false);


			// #1143: IFrame support workaround
			_this._cloneId = _nextTick(function () {
				if (!_this.options.removeCloneOnHide) {
					rootEl.insertBefore(cloneEl, dragEl);
				}
				_dispatchEvent(_this, rootEl, 'clone', dragEl);
			});


			!fallback && _toggleClass(dragEl, options.dragClass, true);

			// Set proper drop events
			if (fallback) {
				ignoreNextClick = true;
				_this._loopId = setInterval(_this._emulateDragOver, 50);
			} else {
				// Undo what was set in _prepareDragStart before drag started
				_off(document, 'mouseup', _this._onDrop);
				_off(document, 'touchend', _this._onDrop);
				_off(document, 'touchcancel', _this._onDrop);

				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(_this, dataTransfer, dragEl);
				}

				_on(document, 'drop', _this);

				// #1276 fix:
				_css(dragEl, 'transform', 'translateZ(0)');
			}

			awaitingDragStarted = true;

			_this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
			_on(document, 'selectstart', _this);
			if (Safari) {
				_css(document.body, 'user-select', 'none');
			}
		},


		// Returns true - if no further action is needed (either inserted or another condition)
		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target = evt.target,
				dragRect,
				targetRect,
				revert,
				options = this.options,
				group = options.group,
				activeSortable = Sortable.active,
				isOwner = (activeGroup === group),
				canSort = options.sort,
				_this = this;

			if (_silent) return;

			// IE event order fix
			if (IE11OrLess && !evt.rootEl && !evt.artificialBubble && !_isTrueParentSortable(el, target)) {
				return;
			}

			// Return invocation when dragEl is inserted (or completed)
			function completed(insertion) {
				if (insertion) {
					if (isOwner) {
						activeSortable._hideClone();
					} else {
						activeSortable._showClone(_this);
					}

					if (activeSortable) {
						// Set ghost class to new sortable's ghost class
						_toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
						_toggleClass(dragEl, options.ghostClass, true);
					}

					if (putSortable !== _this && _this !== Sortable.active) {
						putSortable = _this;
					} else if (_this === Sortable.active) {
						putSortable = null;
					}

					// Animation
					dragRect && _this._animate(dragRect, dragEl);
					target && targetRect && _this._animate(targetRect, target);
				}


				// Null lastTarget if it is not inside a previously swapped element
				if ((target === dragEl && !dragEl.animated) || (target === el && !target.animated)) {
					lastTarget = null;
				}
				// no bubbling and not fallback
				if (!options.dragoverBubble && !evt.rootEl && target !== document) {
					_this._handleAutoScroll(evt);
					dragEl.parentNode[expando]._computeIsAligned(evt);
				}

				!options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();

				return true;
			}

			// Call when dragEl has been inserted
			function changed() {
				_dispatchEvent(_this, rootEl, 'change', target, el, rootEl, oldIndex, _index(dragEl, options.draggable), evt);
			}


			if (evt.preventDefault !== void 0) {
				evt.cancelable && evt.preventDefault();
			}


			moved = true;

			target = _closest(target, options.draggable, el, true);

			// target is dragEl or target is animated
			if (!!_closest(evt.target, null, dragEl, true) || target.animated) {
				return completed(false);
			}

			if (target !== dragEl) {
				ignoreNextClick = false;
			}

			if (activeSortable && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: (
						putSortable === this ||
						(
							(this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) &&
							group.checkPut(this, activeSortable, dragEl, evt)
						)
					)
				)
			) {
				var axis = this._getDirection(evt, target);

				dragRect = _getRect(dragEl);

				if (revert) {
					this._hideClone();
					parentEl = rootEl; // actualization

					if (nextEl) {
						rootEl.insertBefore(dragEl, nextEl);
					} else {
						rootEl.appendChild(dragEl);
					}

					return completed(true);
				}

				var elLastChild = _lastChild(el);

				if (!elLastChild || _ghostIsLast(evt, axis, el) && !elLastChild.animated) {
					// assign target only if condition is true
					if (elLastChild && el === evt.target) {
						target = elLastChild;
					}

					if (target) {
						targetRect = _getRect(target);
					}

					if (isOwner) {
						activeSortable._hideClone();
					} else {
						activeSortable._showClone(this);
					}

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
						el.appendChild(dragEl);
						parentEl = el; // actualization
						realDragElRect = null;

						changed();
						return completed(true);
					}
				}
				else if (target && target !== dragEl && target.parentNode === el) {
					var direction = 0,
						targetBeforeFirstSwap,
						aligned = target.sortableMouseAligned,
						differentLevel = dragEl.parentNode !== el,
						side1 = axis === 'vertical' ? 'top' : 'left',
						scrolledPastTop = _isScrolledPast(target, 'top') || _isScrolledPast(dragEl, 'top'),
						scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;


					if (lastTarget !== target) {
						lastMode = null;
						targetBeforeFirstSwap = _getRect(target)[side1];
						pastFirstInvertThresh = false;
					}

					// Reference: https://www.lucidchart.com/documents/view/10fa0e93-e362-4126-aca2-b709ee56bd8b/0
					if (
						_isElInRowColumn(dragEl, target, axis) && aligned ||
						differentLevel ||
						scrolledPastTop ||
						options.invertSwap ||
						lastMode === 'insert' ||
						// Needed, in the case that we are inside target and inserted because not aligned... aligned will stay false while inside
						// and lastMode will change to 'insert', but we must swap
						lastMode === 'swap'
					) {
						// New target that we will be inside
						if (lastMode !== 'swap') {
							isCircumstantialInvert = options.invertSwap || differentLevel;
						}

						direction = _getSwapDirection(evt, target, axis,
							options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold,
							isCircumstantialInvert,
							lastTarget === target);
						lastMode = 'swap';
					} else {
						// Insert at position
						direction = _getInsertDirection(target);
						lastMode = 'insert';
					}
					if (direction === 0) return completed(false);

					realDragElRect = null;
					lastTarget = target;

					lastDirection = direction;

					targetRect = _getRect(target);

					var nextSibling = target.nextElementSibling,
						after = false;

					after = direction === 1;

					var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

					if (moveVector !== false) {
						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}

						_silent = true;
						setTimeout(_unsilent, 30);

						if (isOwner) {
							activeSortable._hideClone();
						} else {
							activeSortable._showClone(this);
						}

						if (after && !nextSibling) {
							el.appendChild(dragEl);
						} else {
							target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
						}

						// Undo chrome's scroll adjustment
						if (scrolledPastTop) {
							_scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
						}

						parentEl = dragEl.parentNode; // actualization

						// must be done before animation
						if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
							targetMoveDistance = abs(targetBeforeFirstSwap - _getRect(target)[side1]);
						}
						changed();

						return completed(true);
					}
				}

				if (el.contains(dragEl)) {
					return completed(false);
				}
			}

			if (IE11OrLess && !evt.rootEl) {
				_artificalBubble(el, evt, '_onDragOver');
			}

			return false;
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = _getRect(target);

				if (target === dragEl) {
					realDragElRect = currentRect;
				}

				if (prevRect.nodeType === 1) {
					prevRect = _getRect(prevRect);
				}

				// Check if actually moving position
				if ((prevRect.left + prevRect.width / 2) !== (currentRect.left + currentRect.width / 2)
					|| (prevRect.top + prevRect.height / 2) !== (currentRect.top + currentRect.height / 2)
				) {
					var matrix = _matrix(this.el),
						scaleX = matrix && matrix.a,
						scaleY = matrix && matrix.d;

					_css(target, 'transition', 'none');
					_css(target, 'transform', 'translate3d('
						+ (prevRect.left - currentRect.left) / (scaleX ? scaleX : 1) + 'px,'
						+ (prevRect.top - currentRect.top) / (scaleY ? scaleY : 1) + 'px,0)'
					);

					forRepaintDummy = target.offsetWidth; // repaint
					_css(target, 'transition', 'transform ' + ms + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
					_css(target, 'transform', 'translate3d(0,0,0)');
				}

				(typeof target.animated === 'number') && clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(document, 'pointermove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'pointerup', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
			_off(document, 'selectstart', this);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;
			awaitingDragStarted = false;
			scrolling = false;
			isCircumstantialInvert = false;
			pastFirstInvertThresh = false;

			clearInterval(this._loopId);

			clearInterval(pointerElemChangedInterval);
			_clearAutoScrolls();
			_cancelThrottle();

			clearTimeout(this._dragStartTimer);

			_cancelNextTick(this._cloneId);
			_cancelNextTick(this._dragStartId);

			// Unbind events
			_off(document, 'mousemove', this._onTouchMove);


			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
				_off(document, 'dragover', this._handleAutoScroll);
				_off(document, 'dragover', _checkAlignment);
			}

			if (Safari) {
				_css(document.body, 'user-select', '');
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.cancelable && evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

				if (rootEl === parentEl || (putSortable && putSortable.lastPutMode !== 'clone')) {
					// Remove clone
					cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
				}

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					// Drag stop event
					_dispatchEvent(this, rootEl, 'unchoose', dragEl, parentEl, rootEl, oldIndex, null, evt);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {
							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
							_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
						}

						putSortable && putSortable.save();
					}
					else {
						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
								_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}
						_dispatchEvent(this, rootEl, 'end', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

						// Save sorting
						this.save();
					}
				}

			}
			this._nulling();
		},

		_nulling: function() {
			rootEl =
			dragEl =
			parentEl =
			ghostEl =
			nextEl =
			cloneEl =
			lastDownEl =

			scrollEl =
			scrollParentEl =
			autoScrolls.length =

			pointerElemChangedInterval =
			lastPointerElemX =
			lastPointerElemY =

			tapEvt =
			touchEvt =

			moved =
			newIndex =
			oldIndex =

			lastTarget =
			lastDirection =

			forRepaintDummy =
			realDragElRect =

			putSortable =
			activeGroup =
			Sortable.active = null;

			savedInputChecked.forEach(function (el) {
				el.checked = true;
			});

			savedInputChecked.length = 0;
		},

		handleEvent: function (/**Event*/evt) {
			switch (evt.type) {
				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;

				case 'dragenter':
				case 'dragover':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'selectstart':
					evt.preventDefault();
					break;
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el, false)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl, false)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el, false);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);
			_off(el, 'pointerdown', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}
			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			this._onDrop();

			sortables.splice(sortables.indexOf(this.el), 1);

			this.el = el = null;
		},

		_hideClone: function() {
			if (!cloneEl.cloneHidden) {
				_css(cloneEl, 'display', 'none');
				cloneEl.cloneHidden = true;
				if (cloneEl.parentNode && this.options.removeCloneOnHide) {
					cloneEl.parentNode.removeChild(cloneEl);
				}
			}
		},

		_showClone: function(putSortable) {
			if (putSortable.lastPutMode !== 'clone') {
				this._hideClone();
				return;
			}

			if (cloneEl.cloneHidden) {
				// show clone at dragEl or original position
				if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
					rootEl.insertBefore(cloneEl, dragEl);
				} else if (nextEl) {
					rootEl.insertBefore(cloneEl, nextEl);
				} else {
					rootEl.appendChild(cloneEl);
				}

				if (this.options.group.revertClone) {
					this._animate(dragEl, cloneEl);
				}
				_css(cloneEl, 'display', '');
				cloneEl.cloneHidden = false;
			}
		}
	};

	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx, includeCTX) {
		if (el) {
			ctx = ctx || document;

			do {
				if (
					selector != null &&
					(
						selector[0] === '>' && el.parentNode === ctx && _matches(el, selector.substring(1)) ||
						_matches(el, selector)
					) ||
					includeCTX && el === ctx
				) {
					return el;
				}

				if (el === ctx) break;
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}


	function _getParentOrHost(el) {
		return (el.host && el !== document && el.host.nodeType)
			? el.host
			: el.parentNode;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.cancelable && evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, captureMode);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, captureMode);
	}


	function _toggleClass(el, name, state) {
		if (el && name) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style) && prop.indexOf('webkit') === -1) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}

	function _matrix(el) {
		var appliedTransforms = '';
		do {
			var transform = _css(el, 'transform');

			if (transform && transform !== 'none') {
				appliedTransforms = transform + ' ' + appliedTransforms;
			}
			/* jshint boss:true */
		} while (el = el.parentNode);

		if (window.DOMMatrix) {
			return new DOMMatrix(appliedTransforms);
		} else if (window.WebKitCSSMatrix) {
			return new WebKitCSSMatrix(appliedTransforms);
		} else if (window.CSSMatrix) {
			return new CSSMatrix(appliedTransforms);
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, toEl, fromEl, startIndex, newIndex, originalEvt) {
		sortable = (sortable || rootEl[expando]);
		var evt,
			options = sortable.options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
		// Support for new CustomEvent feature
		if (window.CustomEvent && !IE11OrLess && !Edge) {
			evt = new CustomEvent(name, {
				bubbles: true,
				cancelable: true
			});
		} else {
			evt = document.createEvent('Event');
			evt.initEvent(name, true, true);
		}

		evt.to = toEl || rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		evt.originalEvent = originalEvt;
		evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

		if (rootEl) {
			rootEl.dispatchEvent(evt);
		}

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;
		// Support for new CustomEvent feature
		if (window.CustomEvent && !IE11OrLess && !Edge) {
			evt = new CustomEvent('move', {
				bubbles: true,
				cancelable: true
			});
		} else {
			evt = document.createEvent('Event');
			evt.initEvent('move', true, true);
		}

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || _getRect(toEl);
		evt.willInsertAfter = willInsertAfter;

		evt.originalEvent = originalEvt;

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}

	function _disableDraggable(el) {
		el.draggable = false;
	}

	function _unsilent() {
		_silent = false;
	}

	/**
	 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
	 * and non-draggable elements
	 * @param  {HTMLElement} el       The parent element
	 * @param  {Number} childNum      The index of the child
	 * @param  {Object} options       Parent Sortable's options
	 * @return {HTMLElement}          The child at index childNum, or null if not found
	 */
	function _getChild(el, childNum, options) {
		var currentChild = 0,
			i = 0,
			children = el.children;

		while (i < children.length) {
			if (
				children[i].style.display !== 'none' &&
				children[i] !== ghostEl &&
				children[i] !== dragEl &&
				_closest(children[i], options.draggable, el, false)
			) {
				if (currentChild === childNum) {
					return children[i];
				}
				currentChild++;
			}

			i++;
		}
		return null;
	}

	/**
	 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
	 * @param  {HTMLElement} el       Parent element
	 * @return {HTMLElement}          The last child, ignoring ghostEl
	 */
	function _lastChild(el) {
		var last = el.lastElementChild;

		while (last && (last === ghostEl || last.style.display === 'none')) {
			last = last.previousElementSibling;
		}

		return last || null;
	}

	function _ghostIsLast(evt, axis, el) {
		var elRect = _getRect(_lastChild(el)),
			mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
			mouseOnOppAxis = axis === 'vertical' ? evt.clientX : evt.clientY,
			targetS2 = axis === 'vertical' ? elRect.bottom : elRect.right,
			targetS1Opp = axis === 'vertical' ? elRect.left : elRect.top,
			targetS2Opp = axis === 'vertical' ? elRect.right : elRect.bottom,
			spacer = 10;

		return (
			axis === 'vertical' ?
				(mouseOnOppAxis > targetS2Opp + spacer || mouseOnOppAxis <= targetS2Opp && mouseOnAxis > targetS2 && mouseOnOppAxis >= targetS1Opp) :
				(mouseOnAxis > targetS2 && mouseOnOppAxis > targetS1Opp || mouseOnAxis <= targetS2 && mouseOnOppAxis > targetS2Opp + spacer)
		);
	}

	function _getSwapDirection(evt, target, axis, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
		var targetRect = _getRect(target),
			mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
			targetLength = axis === 'vertical' ? targetRect.height : targetRect.width,
			targetS1 = axis === 'vertical' ? targetRect.top : targetRect.left,
			targetS2 = axis === 'vertical' ? targetRect.bottom : targetRect.right,
			dragRect = _getRect(dragEl),
			invert = false;


		if (!invertSwap) {
			// Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
			if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) { // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
				// check if past first invert threshold on side opposite of lastDirection
				if (!pastFirstInvertThresh &&
					(lastDirection === 1 ?
						(
							mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2
						) :
						(
							mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2
						)
					)
				)
				{
					// past first invert threshold, do not restrict inverted threshold to dragEl shadow
					pastFirstInvertThresh = true;
				}

				if (!pastFirstInvertThresh) {
					var dragS1 = axis === 'vertical' ? dragRect.top : dragRect.left,
						dragS2 = axis === 'vertical' ? dragRect.bottom : dragRect.right;
					// dragEl shadow (target move distance shadow)
					if (
						lastDirection === 1 ?
						(
							mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
						) :
						(
							mouseOnAxis > targetS2 - targetMoveDistance
						)
					)
					{
						return lastDirection * -1;
					}
				} else {
					invert = true;
				}
			} else {
				// Regular
				if (
					mouseOnAxis > targetS1 + (targetLength * (1 - swapThreshold) / 2) &&
					mouseOnAxis < targetS2 - (targetLength * (1 - swapThreshold) / 2)
				) {
					return _getInsertDirection(target);
				}
			}
		}

		invert = invert || invertSwap;

		if (invert) {
			// Invert of regular
			if (
				mouseOnAxis < targetS1 + (targetLength * invertedSwapThreshold / 2) ||
				mouseOnAxis > targetS2 - (targetLength * invertedSwapThreshold / 2)
			)
			{
				return ((mouseOnAxis > targetS1 + targetLength / 2) ? 1 : -1);
			}
		}

		return 0;
	}

	/**
	 * Gets the direction dragEl must be swapped relative to target in order to make it
	 * seem that dragEl has been "inserted" into that element's position
	 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
	 * @return {Number}                   Direction dragEl must be swapped
	 */
	function _getInsertDirection(target) {
		var dragElIndex = _index(dragEl),
			targetIndex = _index(target);

		if (dragElIndex < targetIndex) {
			return 1;
		} else {
			return -1;
		}
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && el !== cloneEl) {
				index++;
			}
		}

		return index;
	}

	function _matches(/**HTMLElement*/el, /**String*/selector) {
		if (el) {
			try {
				if (el.matches) {
					return el.matches(selector);
				} else if (el.msMatchesSelector) {
					return el.msMatchesSelector(selector);
				} else if (el.webkitMatchesSelector) {
					return el.webkitMatchesSelector(selector);
				}
			} catch(_) {
				return false;
			}
		}

		return false;
	}

	var _throttleTimeout;
	function _throttle(callback, ms) {
		return function () {
			if (!_throttleTimeout) {
				var args = arguments,
					_this = this;

				_throttleTimeout = setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					_throttleTimeout = void 0;
				}, ms);
			}
		};
	}

	function _cancelThrottle() {
		clearTimeout(_throttleTimeout);
		_throttleTimeout = void 0;
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		if (Polymer && Polymer.dom) {
			return Polymer.dom(el).cloneNode(true);
		}
		else if ($) {
			return $(el).clone(true)[0];
		}
		else {
			return el.cloneNode(true);
		}
	}

	function _saveInputCheckedState(root) {
		savedInputChecked.length = 0;

		var inputs = root.getElementsByTagName('input');
		var idx = inputs.length;

		while (idx--) {
			var el = inputs[idx];
			el.checked && savedInputChecked.push(el);
		}
	}

	function _nextTick(fn) {
		return setTimeout(fn, 0);
	}

	function _cancelNextTick(id) {
		return clearTimeout(id);
	}


	/**
	 * Returns the "bounding client rect" of given element
	 * @param  {HTMLElement} el                The element whose boundingClientRect is wanted
	 * @param  {[HTMLElement]} container       the parent the element will be placed in
	 * @param  {[Boolean]} adjustForTransform  Whether the rect should compensate for parent's transform
	 * @return {Object}                        The boundingClientRect of el
	 */
	function _getRect(el, adjustForTransform, container, adjustForFixed) {
		if (!el.getBoundingClientRect && el !== win) return;

		var elRect,
			top,
			left,
			bottom,
			right,
			height,
			width;

		if (el !== win && el !== _getWindowScrollingElement()) {
			elRect = el.getBoundingClientRect();
			top = elRect.top;
			left = elRect.left;
			bottom = elRect.bottom;
			right = elRect.right;
			height = elRect.height;
			width = elRect.width;
		} else {
			top = 0;
			left = 0;
			bottom = window.innerHeight;
			right = window.innerWidth;
			height = window.innerHeight;
			width = window.innerWidth;
		}

		if (adjustForFixed && el !== win) {
			// Adjust for translate()
			container = container || el.parentNode;

			// solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
			// Not needed on <= IE11
			if (!IE11OrLess) {
				do {
					if (container && container.getBoundingClientRect && _css(container, 'transform') !== 'none') {
						var containerRect = container.getBoundingClientRect();

						// Set relative to edges of padding box of container
						top -= containerRect.top + parseInt(_css(container, 'border-top-width'));
						left -= containerRect.left + parseInt(_css(container, 'border-left-width'));
						bottom = top + elRect.height;
						right = left + elRect.width;

						break;
					}
					/* jshint boss:true */
				} while (container = container.parentNode);
			}
		}

		if (adjustForTransform && el !== win) {
			// Adjust for scale()
			var matrix = _matrix(container || el),
				scaleX = matrix && matrix.a,
				scaleY = matrix && matrix.d;

			if (matrix) {
				top /= scaleY;
				left /= scaleX;

				width /= scaleX;
				height /= scaleY;

				bottom = top + height;
				right = left + width;
			}
		}

		return {
			top: top,
			left: left,
			bottom: bottom,
			right: right,
			width: width,
			height: height
		};
	}


	/**
	 * Checks if a side of an element is scrolled past a side of it's parents
	 * @param  {HTMLElement}  el       The element who's side being scrolled out of view is in question
	 * @param  {String}       side     Side of the element in question ('top', 'left', 'right', 'bottom')
	 * @return {HTMLElement}           The parent scroll element that the el's side is scrolled past, or null if there is no such element
	 */
	function _isScrolledPast(el, side) {
		var parent = _getParentAutoScrollElement(el, true),
			elSide = _getRect(el)[side];

		/* jshint boss:true */
		while (parent) {
			var parentSide = _getRect(parent)[side],
				visible;

			if (side === 'top' || side === 'left') {
				visible = elSide >= parentSide;
			} else {
				visible = elSide <= parentSide;
			}

			if (!visible) return parent;

			if (parent === _getWindowScrollingElement()) break;

			parent = _getParentAutoScrollElement(parent, false);
		}

		return false;
	}

	/**
	 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
	 * The value is returned in real pixels.
	 * @param  {HTMLElement} el
	 * @return {Array}             Offsets in the format of [left, top]
	 */
	function _getRelativeScrollOffset(el) {
		var offsetLeft = 0,
			offsetTop = 0,
			winScroller = _getWindowScrollingElement();

		if (el) {
			do {
				var matrix = _matrix(el),
					scaleX = matrix.a,
					scaleY = matrix.d;

				offsetLeft += el.scrollLeft * scaleX;
				offsetTop += el.scrollTop * scaleY;
			} while (el !== winScroller && (el = el.parentNode));
		}

		return [offsetLeft, offsetTop];
	}

	// Fixed #973:
	_on(document, 'touchmove', function(evt) {
		if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
			evt.preventDefault();
		}
	});


	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el, false);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index,
		nextTick: _nextTick,
		cancelNextTick: _cancelNextTick,
		detectDirection: _detectDirection,
		getChild: _getChild
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.8.4';
	return Sortable;
});

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("sortablejs"));
	else if(typeof define === 'function' && define.amd)
		define(["sortablejs"], factory);
	else if(typeof exports === 'object')
		exports["vuedraggable"] = factory(require("sortablejs"));
	else
		root["vuedraggable"] = factory(root["Sortable"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_a352__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1af6":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("63b6");

$export($export.S, 'Array', { isArray: __webpack_require__("9003") });


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "20fd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "32a6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("241e");
var $keys = __webpack_require__("c3a1");

__webpack_require__("ce7e")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3702":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("481b");
var ITERATOR = __webpack_require__("5168")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "40c3":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6b4c");
var TAG = __webpack_require__("5168")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "469f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("7d7b");


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4aa6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dc62");

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4ee1":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("5168")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "5176":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("51b6");

/***/ }),

/***/ "51b6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a3c3");
module.exports = __webpack_require__("584a").Object.assign;


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "549b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("d864");
var $export = __webpack_require__("63b6");
var toObject = __webpack_require__("241e");
var call = __webpack_require__("b0dc");
var isArrayIter = __webpack_require__("3702");
var toLength = __webpack_require__("b447");
var createProperty = __webpack_require__("20fd");
var getIterFn = __webpack_require__("7cd6");

$export($export.S + $export.F * !__webpack_require__("4ee1")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "54a1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("95d5");


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5d73":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("469f");

/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "774e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d2d5");

/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7cd6":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "7d7b":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var get = __webpack_require__("7cd6");
module.exports = __webpack_require__("584a").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8aae":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("32a6");
module.exports = __webpack_require__("584a").Object.keys;


/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "9306":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
var toObject = __webpack_require__("241e");
var IObject = __webpack_require__("335c");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("294c")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "9427":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("a159") });


/***/ }),

/***/ "95d5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a352":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a352__;

/***/ }),

/***/ "a3c3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("63b6");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("9306") });


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "a4bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8aae");

/***/ }),

/***/ "a745":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f410");

/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b0dc":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("e4ae");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c649":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return insertNodeAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return console; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeNode; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_source_vuedraggable_node_modules_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4aa6");
/* harmony import */ var F_source_vuedraggable_node_modules_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_source_vuedraggable_node_modules_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__);



function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }

  return global.console;
}

var console = getConsole();

function cached(fn) {
  var cache = F_source_vuedraggable_node_modules_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default()(null);

  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var regex = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(regex, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
});

function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}

function insertNodeAt(fatherNode, node, position) {
  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("54a1");

/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce7e":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var fails = __webpack_require__("294c");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d2d5":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("549b");
module.exports = __webpack_require__("584a").Array.from;


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dc62":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("9427");
var $Object = __webpack_require__("584a").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "f410":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1af6");
module.exports = __webpack_require__("584a").Array.isArray;


/***/ }),

/***/ "f559":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__("5ca1");
var toLength = __webpack_require__("9def");
var context = __webpack_require__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("5176");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("f559");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("a4bb");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("a745");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("5d73");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("774e");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("c8bb");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

// EXTERNAL MODULE: ./src/util/helper.js
var helper = __webpack_require__("c649");

// CONCATENATED MODULE: ./src/vuedraggable.js










function buildAttribute(object, propName, value) {
  if (value === undefined) {
    return object;
  }

  object = object || {};
  object[propName] = value;
  return object;
}

function computeVmIndex(vnodes, element) {
  return vnodes.map(function (elt) {
    return elt.elm;
  }).indexOf(element);
}

function _computeIndexes(slots, children, isTransition, footerOffset) {
  if (!slots) {
    return [];
  }

  var elmFromNodes = slots.map(function (elt) {
    return elt.elm;
  });
  var footerIndex = children.length - footerOffset;

  var rawIndexes = _toConsumableArray(children).map(function (elt, idx) {
    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
  });

  return isTransition ? rawIndexes.filter(function (ind) {
    return ind !== -1;
  }) : rawIndexes;
}

function emit(evtName, evtData) {
  var _this = this;

  this.$nextTick(function () {
    return _this.$emit(evtName.toLowerCase(), evtData);
  });
}

function delegateAndEmit(evtName) {
  var _this2 = this;

  return function (evtData) {
    if (_this2.realList !== null) {
      _this2["onDrag" + evtName](evtData);
    }

    emit.call(_this2, evtName, evtData);
  };
}

function vuedraggable_isTransition(slots) {
  if (!slots || slots.length !== 1) {
    return false;
  }

  var _slots = _slicedToArray(slots, 1),
      componentOptions = _slots[0].componentOptions;

  if (!componentOptions) {
    return false;
  }

  return ["transition-group", "TransitionGroup"].includes(componentOptions.tag);
}

function computeChildrenAndOffsets(children, _ref) {
  var header = _ref.header,
      footer = _ref.footer;
  var headerOffset = 0;
  var footerOffset = 0;

  if (header) {
    headerOffset = header.length;
    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
  }

  if (footer) {
    footerOffset = footer.length;
    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
  }

  return {
    children: children,
    headerOffset: headerOffset,
    footerOffset: footerOffset
  };
}

function getComponentAttributes($attrs, componentData) {
  var attributes = null;

  var update = function update(name, value) {
    attributes = buildAttribute(attributes, name, value);
  };

  var attrs = keys_default()($attrs).filter(function (key) {
    return key === "id" || key.startsWith("data-");
  }).reduce(function (res, key) {
    res[key] = $attrs[key];
    return res;
  }, {});

  update("attrs", attrs);

  if (!componentData) {
    return attributes;
  }

  var on = componentData.on,
      props = componentData.props,
      componentDataAttrs = componentData.attrs;
  update("on", on);
  update("props", props);

  assign_default()(attributes.attrs, componentDataAttrs);

  return attributes;
}

var eventsListened = ["Start", "Add", "Remove", "Update", "End"];
var eventsToEmit = ["Choose", "Sort", "Filter", "Clone"];
var readonlyProperties = ["Move"].concat(eventsListened, eventsToEmit).map(function (evt) {
  return "on" + evt;
});
var draggingElement = null;
var vuedraggable_props = {
  options: Object,
  list: {
    type: Array,
    required: false,
    default: null
  },
  value: {
    type: Array,
    required: false,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: function _default(original) {
      return original;
    }
  },
  element: {
    type: String,
    default: "div"
  },
  tag: {
    type: String,
    default: null
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
var draggableComponent = {
  name: "draggable",
  inheritAttrs: false,
  props: vuedraggable_props,
  data: function data() {
    return {
      transitionMode: false,
      noneFunctionalComponentMode: false,
      init: false
    };
  },
  render: function render(h) {
    var slots = this.$slots.default;
    this.transitionMode = vuedraggable_isTransition(slots);

    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots),
        children = _computeChildrenAndOf.children,
        headerOffset = _computeChildrenAndOf.headerOffset,
        footerOffset = _computeChildrenAndOf.footerOffset;

    this.headerOffset = headerOffset;
    this.footerOffset = footerOffset;
    var attributes = getComponentAttributes(this.$attrs, this.componentData);
    return h(this.getTag(), attributes, children);
  },
  created: function created() {
    if (this.list !== null && this.value !== null) {
      helper["b" /* console */].error("Value and list props are mutually exclusive! Please set one or another.");
    }

    if (this.element !== "div") {
      helper["b" /* console */].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
    }

    if (this.options !== undefined) {
      helper["b" /* console */].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase();

    if (this.noneFunctionalComponentMode && this.transitionMode) {
      throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
    }

    var optionsAdded = {};
    eventsListened.forEach(function (elt) {
      optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
    });
    eventsToEmit.forEach(function (elt) {
      optionsAdded["on" + elt] = emit.bind(_this3, elt);
    });

    var attributes = keys_default()(this.$attrs).reduce(function (res, key) {
      res[Object(helper["a" /* camelize */])(key)] = _this3.$attrs[key];
      return res;
    }, {});

    var options = assign_default()({}, this.options, attributes, optionsAdded, {
      onMove: function onMove(evt, originalEvent) {
        return _this3.onDragMove(evt, originalEvent);
      }
    });

    !("draggable" in options) && (options.draggable = ">*");
    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
    this.computeIndexes();
  },
  beforeDestroy: function beforeDestroy() {
    if (this._sortable !== undefined) this._sortable.destroy();
  },
  computed: {
    rootContainer: function rootContainer() {
      return this.transitionMode ? this.$el.children[0] : this.$el;
    },
    realList: function realList() {
      return this.list ? this.list : this.value;
    }
  },
  watch: {
    options: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    $attrs: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    realList: function realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getTag: function getTag() {
      return this.tag || this.element;
    },
    updateOptions: function updateOptions(newOptionValue) {
      for (var property in newOptionValue) {
        var value = Object(helper["a" /* camelize */])(property);

        if (readonlyProperties.indexOf(value) === -1) {
          this._sortable.option(value, newOptionValue[property]);
        }
      }
    },
    getChildrenNodes: function getChildrenNodes() {
      if (!this.init) {
        this.noneFunctionalComponentMode = this.noneFunctionalComponentMode && this.$children.length === 1;
        this.init = true;
      }

      if (this.noneFunctionalComponentMode) {
        return this.$children[0].$slots.default;
      }

      var rawNodes = this.$slots.default;
      return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
    },
    computeIndexes: function computeIndexes() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
      });
    },
    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
      var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);

      if (index === -1) {
        //Edge case during move callback: related element might be
        //an element different from collection
        return null;
      }

      var element = this.realList[index];
      return {
        index: index,
        element: element
      };
    },
    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref2) {
      var __vue__ = _ref2.__vue__;

      if (!__vue__ || !__vue__.$options || __vue__.$options._componentTag !== "transition-group") {
        return __vue__;
      }

      return __vue__.$parent;
    },
    emitChanges: function emitChanges(evt) {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.$emit("change", evt);
      });
    },
    alterList: function alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }

      var newList = _toConsumableArray(this.value);

      onList(newList);
      this.$emit("input", newList);
    },
    spliceList: function spliceList() {
      var _arguments = arguments;

      var spliceList = function spliceList(list) {
        return list.splice.apply(list, _toConsumableArray(_arguments));
      };

      this.alterList(spliceList);
    },
    updatePosition: function updatePosition(oldIndex, newIndex) {
      var updatePosition = function updatePosition(list) {
        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
      };

      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref3) {
      var to = _ref3.to,
          related = _ref3.related;
      var component = this.getUnderlyingPotencialDraggableComponent(to);

      if (!component) {
        return {
          component: component
        };
      }

      var list = component.realList;
      var context = {
        list: list,
        component: component
      };

      if (to !== related && list && component.getUnderlyingVm) {
        var destination = component.getUnderlyingVm(related);

        if (destination) {
          return assign_default()(destination, context);
        }
      }

      return context;
    },
    getVmIndex: function getVmIndex(domIndex) {
      var indexes = this.visibleIndexes;
      var numberIndexes = indexes.length;
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
    },
    getComponent: function getComponent() {
      return this.$slots.default[0].componentInstance;
    },
    resetTransitionData: function resetTransitionData(index) {
      if (!this.noTransitionOnDrag || !this.transitionMode) {
        return;
      }

      var nodes = this.getChildrenNodes();
      nodes[index].data = null;
      var transitionContainer = this.getComponent();
      transitionContainer.children = [];
      transitionContainer.kept = undefined;
    },
    onDragStart: function onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd: function onDragAdd(evt) {
      var element = evt.item._underlying_vm_;

      if (element === undefined) {
        return;
      }

      Object(helper["d" /* removeNode */])(evt.item);
      var newIndex = this.getVmIndex(evt.newIndex);
      this.spliceList(newIndex, 0, element);
      this.computeIndexes();
      var added = {
        element: element,
        newIndex: newIndex
      };
      this.emitChanges({
        added: added
      });
    },
    onDragRemove: function onDragRemove(evt) {
      Object(helper["c" /* insertNodeAt */])(this.rootContainer, evt.item, evt.oldIndex);

      if (evt.pullMode === "clone") {
        Object(helper["d" /* removeNode */])(evt.clone);
        return;
      }

      var oldIndex = this.context.index;
      this.spliceList(oldIndex, 1);
      var removed = {
        element: this.context.element,
        oldIndex: oldIndex
      };
      this.resetTransitionData(oldIndex);
      this.emitChanges({
        removed: removed
      });
    },
    onDragUpdate: function onDragUpdate(evt) {
      Object(helper["d" /* removeNode */])(evt.item);
      Object(helper["c" /* insertNodeAt */])(evt.from, evt.item, evt.oldIndex);
      var oldIndex = this.context.index;
      var newIndex = this.getVmIndex(evt.newIndex);
      this.updatePosition(oldIndex, newIndex);
      var moved = {
        element: this.context.element,
        oldIndex: oldIndex,
        newIndex: newIndex
      };
      this.emitChanges({
        moved: moved
      });
    },
    updateProperty: function updateProperty(evt, propertyName) {
      evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
    },
    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }

      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
        return el.style["display"] !== "none";
      });

      var currentDOMIndex = domChildren.indexOf(evt.related);
      var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove: function onDragMove(evt, originalEvent) {
      var onMove = this.move;

      if (!onMove || !this.realList) {
        return true;
      }

      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
      var draggedContext = this.context;
      var futureIndex = this.computeFutureIndex(relatedContext, evt);

      assign_default()(draggedContext, {
        futureIndex: futureIndex
      });

      var sendEvt = assign_default()({}, evt, {
        relatedContext: relatedContext,
        draggedContext: draggedContext
      });

      return onMove(sendEvt, originalEvent);
    },
    onDragEnd: function onDragEnd() {
      this.computeIndexes();
      draggingElement = null;
    }
  }
};

if (typeof window !== "undefined" && "Vue" in window) {
  window.Vue.component("draggable", draggableComponent);
}

/* harmony default export */ var vuedraggable = (draggableComponent);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vuedraggable);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vuedraggable.umd.js.map
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['LswFilesystem'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['LswFilesystem'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  
  class LswFilesystem extends UFS_manager.idb_driver {

  }

  return LswFilesystem;

});
const serverUrl = 'http://127.0.0.1';
const serverPort = 3000;
const socket = io(`${serverUrl}:${serverPort}`);
socket.on('refrescar', () => {
  console.log('Recibida la señal de refrescar desde el servidor');
  location.reload();
});
(function(factory) {
  const mod = factory();
  if(typeof window !== 'undefined') {
    window["Lsw_framework_components"] = mod;
  }
  if(typeof global !== 'undefined') {
    global["Lsw_framework_components"] = mod;
  }
  if(typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function() {
Vue.component("LswCalendario", {
  template: `<div class="Component LswCalendario">
  <div style="max-width: 260px;">
    <div class="like_table" style="border-left: 1px solid white; border-bottom: 1px solid white; border-top: 1px solid white;">
      <div class="like_row">
        <div class="like_cell">
          <button class="boton_de_mover_mes"
            v-on:click="ir_a_mes_anterior"> ◀ </button>
        </div>
        <div class="like_cell" style="width:100%;" :style="!soloFecha ? 'vertical-align: top;' : ''">
          <div class="chivato_de_fecha">{{ obtener_fecha_formateada(fecha_seleccionada) }}</div>
          <div class="chivato_de_fecha" v-if="!soloFecha">a las {{ espaciar_izquierda(hora_seleccionada, 2) }}:{{ espaciar_izquierda(minuto_seleccionado, 2)
            }}:{{
            espaciar_izquierda(segundo_seleccionado, 2) }}.{{ espaciar_izquierda(milisegundo_seleccionado, 3) }}
          </div>
        </div>
        <div class="like_cell">
          <button class="boton_de_mover_mes"
            v-on:click="ir_a_mes_siguiente"> ▶ </button>
        </div>
      </div>
    </div>
    <table class="tabla_de_calendario">
      <tbody>
        <tr class="fila_de_dias_de_semana">
          <td>Lu</td>
          <td>Ma</td>
          <td>Mi</td>
          <td>Ju</td>
          <td>Vi</td>
          <td>Sá</td>
          <td>Do</td>
        </tr>
      </tbody>
      <tbody class="dias_de_calendario">
        <tr v-for="semana, semana_index in celdas_del_mes_actual"
          v-bind:key="'semana-' + semana_index">
          <td v-for="dia, dia_index in semana"
            v-bind:key="'dia-' + dia_index">
            <span v-if="dia">
              <button class="boton_de_calendario boton_de_dia_de_calendario"
                :class="{active: dia.getDate() === fecha_seleccionada.getDate()}"
                v-on:click="() => seleccionar_dia(dia)">{{ dia.getDate() }}</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="tabla_para_horas"
      v-if="!soloFecha">
      <tr>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="agregar_hora"> ▲ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="agregar_minuto"> ▲ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="agregar_segundo"> ▲ </button>
        </td>
      </tr>
      <tr>
        <td>
          <input style="display: table-cell;"
            class="entrada_de_calendario"
            type="text"
            v-model="hora_seleccionada" />
        </td>
        <td>
          <input style="display: table-cell;"
            class="entrada_de_calendario"
            type="text"
            v-model="minuto_seleccionado" />
        </td>
        <td>
          <input style="display: table-cell;"
            class="entrada_de_calendario"
            type="text"
            v-model="segundo_seleccionado" />
        </td>
      </tr>
      <tr>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="quitar_hora"> ▼ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="quitar_minuto"> ▼ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="quitar_segundo"> ▼ </button>
        </td>
      </tr>
    </table>
  </div>
</div>`,
  props: {
    soloFecha: {
      type: Boolean,
      default: false
    },
    alCambiarValor: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    try {
      return {
        fecha_seleccionada: undefined,
        celdas_del_mes_actual: undefined,
        hora_seleccionada: "0",
        minuto_seleccionado: "0",
        segundo_seleccionado: "0",
        milisegundo_seleccionado: "0"
      };
    } catch (error) {
      console.log(error);
      throw error;
    }

  },
  methods: {
    getValue() {
      return this.fecha_seleccionada;
    },
    ir_a_mes_anterior() {
      try {
        const nueva_fecha = new Date(this.fecha_seleccionada);
        nueva_fecha.setMonth(nueva_fecha.getMonth() - 1);
        this.fecha_seleccionada = nueva_fecha;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    ir_a_mes_siguiente() {
      try {
        const nueva_fecha = new Date(this.fecha_seleccionada);
        nueva_fecha.setMonth(nueva_fecha.getMonth() + 1);
        this.fecha_seleccionada = nueva_fecha;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    agregar_hora() {
      try {
        let hora = parseInt(this.hora_seleccionada);
        hora += 1;
        this.hora_seleccionada = hora;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    agregar_minuto() {
      try {
        let minuto = parseInt(this.minuto_seleccionado);
        minuto += 1;
        this.minuto_seleccionado = minuto;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    agregar_segundo() {
      try {
        let segundo = parseInt(this.segundo_seleccionado);
        segundo += 1;
        this.segundo_seleccionado = segundo;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    quitar_hora() {
      try {
        let hora = parseInt(this.hora_seleccionada);
        hora -= 1;
        this.hora_seleccionada = hora;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    quitar_minuto() {
      try {
        let minuto = parseInt(this.minuto_seleccionado);
        minuto -= 1;
        this.minuto_seleccionado = minuto;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    quitar_segundo() {
      try {
        let segundo = parseInt(this.segundo_seleccionado);
        segundo -= 1;
        this.segundo_seleccionado = segundo;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    seleccionar_dia(dia) {
      try {
        this.fecha_seleccionada = dia;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    espaciar_izquierda(texto,
      longitud,
      relleno = "0") {
      try {
        let salida = "" + texto;
        while (salida.length < longitud) {
          salida = relleno + salida;
        }
        return salida;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    obtener_fecha_formateada(fecha) {
      try {
        if (typeof fecha === 'undefined') {
          return;
        }
        let formato = "";
        formato += (() => {
          try {
            if (fecha.getDay() === 0) {
              return "Domingo";
            }
            if (fecha.getDay() === 1) {
              return "Lunes";
            }
            if (fecha.getDay() === 2) {
              return "Martes";
            }
            if (fecha.getDay() === 3) {
              return "Miércoles";
            }
            if (fecha.getDay() === 4) {
              return "Jueves";
            }
            if (fecha.getDay() === 5) {
              return "Viernes";
            }
            if (fecha.getDay() === 6) {
              return "Sábado";
            }
          } catch (error) {
            console.log(error);
            throw error;
          }
        })();
        formato += ", ";
        formato += fecha.getDate();
        formato += " de ";
        formato += (() => {
          try {
            if (fecha.getMonth() === 0) {
              return "Enero";
            }
            if (fecha.getMonth() === 1) {
              return "Febrero";
            }
            if (fecha.getMonth() === 2) {
              return "Marzo";
            }
            if (fecha.getMonth() === 3) {
              return "Abril";
            }
            if (fecha.getMonth() === 4) {
              return "Mayo";
            }
            if (fecha.getMonth() === 5) {
              return "Junio";
            }
            if (fecha.getMonth() === 6) {
              return "Julio";
            }
            if (fecha.getMonth() === 7) {
              return "Agosto";
            }
            if (fecha.getMonth() === 8) {
              return "Septiembre";
            }
            if (fecha.getMonth() === 9) {
              return "Octubre";
            }
            if (fecha.getMonth() === 10) {
              return "Noviembre";
            }
            if (fecha.getMonth() === 11) {
              return "Diciembre";
            }
          } catch (error) {
            console.log(error);
            throw error;
          }
        })();
        formato += " de ";
        formato += fecha.getFullYear();
        return formato;
      } catch (error) {
        console.log(error);
        throw error;
      }

    }
  },
  watch: {
    fecha_seleccionada(nuevo_valor) {
      try {
        const dias = [];
        const dia_1_del_mes = new Date(nuevo_valor);
        dia_1_del_mes.setDate(1);
        dia_1_del_mes.setHours(0);
        dia_1_del_mes.setMinutes(0);
        dia_1_del_mes.setSeconds(0);
        dia_1_del_mes.setMilliseconds(0);
        const dias_antes_de_entrar_en_el_mes = (() => {
          try {
            const dia_de_semana = dia_1_del_mes.getDay();
            if (dia_de_semana === 0) {
              return 6;
            }
            if (dia_de_semana === 1) {
              return 0;
            }
            if (dia_de_semana === 2) {
              return 1;
            }
            if (dia_de_semana === 3) {
              return 2;
            }
            if (dia_de_semana === 4) {
              return 3;
            }
            if (dia_de_semana === 5) {
              return 4;
            }
            if (dia_de_semana === 6) {
              return 5;
            }
          } catch (error) {
            console.log(error);
            throw error;
          }
        })();
        const celdas_vacias_anteriores = new Array(dias_antes_de_entrar_en_el_mes);
        const dia_final_del_mes = new Date(nuevo_valor);
        dia_final_del_mes.setMonth(dia_final_del_mes.getMonth() + 1);
        dia_final_del_mes.setDate(1);
        dia_final_del_mes.setDate(dia_final_del_mes.getDate() - 1);
        const numero_final_de_mes = dia_final_del_mes.getDate();
        let fila_actual = celdas_vacias_anteriores;
        for (let index = 1; index < numero_final_de_mes + 1; index++) {
          const nueva_fecha = new Date(dia_1_del_mes);
          nueva_fecha.setDate(index);
          fila_actual.push(nueva_fecha);
          if (nueva_fecha.getDay() === 0) {
            dias.push(fila_actual);
            fila_actual = [];
          }
        }
        if (fila_actual.length) {
          dias.push(fila_actual);
        }
        this.celdas_del_mes_actual = dias;
        if(typeof this.alCambiarValor === "function") {
          this.alCambiarValor(nuevo_valor, this);
        }
      } catch (error) {
        console.log(error);
        throw error;
      }

    }
  },
  mounted() {
    try {
      this.fecha_seleccionada = new Date();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
});
Vue.component("ControlBox", {
  template: `<div class="ControlBox FormControl">
  <!--Content of the form-->
  <slot></slot>
  <!--Buttons of the form-->
  <div class="ControlBoxButtons" v-if="validateButton || submitButton">
    <span v-if="validateButton">
        <button v-on:click="validate">Validate</button>
    </span>
    <span v-if="submitButton">
        <button v-on:click="submit">Submit</button>
    </span>
  </div>
  <!--Error of the form-->
  <ControlError class="unsized" v-if="error" :error="error" :control="this" style="margin-bottom: 4px;" />
  <div class="ControlSuccess" v-else-if="showValidatedMessage && (state === 'validated')">
    ☑️ All fields are valid.
  </div>
  <div class="ControlSuccess" v-else-if="showSubmittedMessage && (state === 'submitted')">
    ☑️ Data was successfully submitted.
  </div>
  <div class="ControlPending" v-else-if="state === 'pending'">
    🕒 One moment, please... 🕒
  </div>
  <!--End of the form-->
</div>`,
  mixins: [

  ],
  props: {
    validateButton: {
      type: String,
      required: false
    },
    submitButton: {
      type: String,
      required: false
    },
    onSubmit: {
      type: Function,
      default: () => { }
    },
    onValidate: {
      type: Function,
      default: () => undefined,
    },
    formId: {
      type: String,
      default: () => "default"
    },
    showValidatedMessage: {
      type: Boolean,
      default: () => true
    },
    showSubmittedMessage: {
      type: Boolean,
      default: () => true
    }
  },
  data() {
    return {
      validStates: ["pending", "validated", "erroneous", "submitted"],
      state: "unstarted", // also: "pending", "validated", "erroneous" or "submitted"
      error: false
    }
  },
  methods: {
    getControls() {
      return Array.from(this.$el.querySelectorAll(".FormControl")).filter(control => {
        return control.$lswFormControlComponent && (control.$lswFormControlComponent.formId === this.formId);
      });
    },
    getValue() {
      return this.getControls().reduce((output, control) => {
        const value = control.$lswFormControlComponent.getValue();
        output[control.$lswFormControlComponent.name] = value;
        return output;
      }, {});
    },
    getError() {
      return this.error;
    },
    setError(error) {
      this.error = error;
    },
    clearError() {
      this.error = false;
    },
    getState() {
      return this.state;
    },
    setState(state) {
      if (this.validStates.indexOf(state) === -1) {
        throw new Error("Required argument «state» to be a valid state on «ControlBox.methods.setState»");
      }
      this.state = state;
    },
    async validate() {
      // Block repeated validation for asynchronous tasks respect:
      if(this.getState() === "pending") {
        return "Wait for the previous validation to finish";
      }
      const allControls = this.getControls();
      this.clearError();
      this.setState("pending");
      try {
        const errors = [];
        const unknownObjects = [];
        for (let index = 0; index < allControls.length; index++) {
          const control = allControls[index];
          const result = await control.$lswFormControlComponent.validate();
          if (result instanceof Error) {
            errors.push(result);
          } else if (typeof result !== "undefined") {
            // Descarta errores no concretados:
            const isFireWatering = this.isFireWatering(result);
            if(!isFireWatering) {
              unknownObjects.push(result);
            }
          }
        }
        if (errors.length) {
          const errorsSummary = errors.map((err, index) => `${index + 1}. ${err.name}: ${err.message}`).join("\n");
          throw new Error(`Cannot validate form due to ${errors.length} error(s) arised on validation:\n${errorsSummary}`);
        }
        if (unknownObjects.length) {
          const unknownzSummary = unknownObjects.map((err, index) => `${index + 1}. ${this.jsonify(err)}`).join("\n");
          throw new Error(`Cannot validate form due to ${unknownObjects.length} unknown object(s) returned on validation:\n${unknownzSummary}`);
        }
        await this.selfValidate();
        this.clearError();
        this.setState("validated");
      } catch (error) {
        this.handleError(error);
      }
    },
    isFireWatering(result) {
      const isNotUndefined = typeof result === "undefined";
      const isNotTrue = result === true;
      const isNotFalse = result === false;
      const isNotNull = result === null;
      const isNotZero = result === 0;
      return isNotUndefined || isNotTrue || isNotNull || isNotZero || isNotFalse;
    },
    async selfValidate() {
      try {
        const value = this.getValue();
        if(this.onValidate) {
          this.getValue();
          await this.onValidate(value, this);
        }
      } catch (error) {
        this.handleErrror(error);
      }
    },
    async submit() {
      try {
        await this.validate();
        const value = this.getValue();
        await this.onSubmit(value, this);
        this.setState("submitted");
      } catch (error) {
        this.handleError(error);
      }
    },
    handleError(error, propagate = true) {
      this.setError(error);
      this.setState("erroneous");
      if (propagate) {
        throw error;
      }
    },
    jsonify(argInput) {
      const seen = new WeakSet();
      return JSON.stringify(argInput, function (key, value) {
        if (typeof value === "object") {
          if (seen.has(value)) {
            return "[Circular]";
          }
          if (value !== null) {
            seen.add(value);
          }
        }
        return value;
      }, 2);
    }
  },
  watch: {

  },
  mounted() {

  }
});
Vue.component("ControlError", {
  template: `<div class="ControlError">
    <pre><span class="errorName">{{ error.name }}:</span> <span class="errorMessage">{{ error.message }}</span> <span class="errorStack">[{{ error.stack }}]</span></pre>
    <span v-on:click="clearError" class="clearErrorButton">❎</span>
</div>`,
  props: {
    error: {
      type: Object,
      required: true
    },
    control: {
      type: Object,
      required: false
    }
  },
  data() {
    return {}
  },
  methods: {
    clearError() {
      return this.control && this.control.clearError();
    }
  },
  watch: {
    
  },
  mounted() {
    
  }
});
Vue.component("HiddenControl", {
  template: `<div class="HiddenControl FormControl">
    
</div>`,
  mixins: [LswFormControls.mixins.get("BasicControl")],
  props: {
    
  },
  data() {
    return {}
  },
  methods: {
    
  },
  watch: {
    
  },
  mounted() {
    
  }
});
Vue.component("StringControl", {
  template: `<div class="StringControl FormControl ControlType">
    <div class="FormLabel" v-if="label">{{ label }}</div>
    <input v-if="!multiline" class="FormInput" :class="cssClasses.input || {}" :style="cssStyles.input || {}" type="text" v-model="value" :placeholder="placeholder" />
    <textarea v-else class="FormInput" :class="cssClasses.textarea || {}" :style="cssStyles.textarea || {}" v-model="value" :placeholder="placeholder" />
    <ControlError v-if="error" :error="error" :control="this" />
</div>`,
  mixins: [LswFormControls.mixins.get("BasicControl")],
  props: {
    placeholder: {
      type: String,
      default: () => {}
    },
    multiline: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {}
  },
  methods: {
    
  },
  watch: {
    
  },
  mounted() {
    
  }
});
Vue.component("ArrayControl", {
  template: `<div class="ArrayControl FormControl ControlType">
  
</div>`,
  props: {
    
  },
  data() {
    return {}
  },
  methods: {
    
  },
  watch: {
    
  },
  mounted() {
    
  }
});
Vue.component("BooleanControl", {
  template: `<div class="BooleanControl FormControl ControlType">
  
</div>`,
  props: {
    
  },
  data() {
    return {}
  },
  methods: {
    
  },
  watch: {
    
  },
  mounted() {
    
  }
});
Vue.component("NumberControl", {
  template: `<div class="NumberControl FormControl ControlType">
  
</div>`,
  props: {
    
  },
  data() {
    return {}
  },
  methods: {
    
  },
  watch: {
    
  },
  mounted() {
    
  }
});
(() => {
  const defaultState = {

  };

  const predefinedPlaceholders = {
    filter: `return it.name === 'Carl'`,
    mapper: `return it.name`,
    reducer: `return out.concat([it])`,
    sorter: `return a >= b ? 1 : -1`,
    modifier: `return all.splice(1,all.length-1,1)`,
  }

  Vue.component("LswTable", {
    template: `<div class="lsw_table" style="padding: 5px;">
    <div>
        <div style="text-align:right;">
            <button class="button_separation" v-on:click="showTransformers">Transf: {{ transformers.length }}</button>
        </div>
    </div>
    <table class="basic_table">
        <thead>
            <tr>
                <th v-for="header, headerIndex in headers" v-bind:key="'header-' + headerIndex">
                    <div>{{ header }}</div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row, rowIndex in output" v-bind:key="'row-' + rowIndex">
                <td v-for="column, columnIndex in row" v-bind:key="'column-' + columnIndex">
                    {{ column }}
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    props: {
      initialState: {
        type: Object,
        default: () => ({})
      },
      initialInput: {
        type: Array,
        default: () => []
      },
      initialHeaders: {
        type: Array,
        default: () => []
      }
    },
    data() {
      const state = Object.assign(defaultState, this.initialState);
      const input = [].concat(this.initialInput);
      return {
        headers: this.initialHeaders.length ?? undefined,
        transformers: [],
        input,
        output: undefined,
        isShowingPanelMain: false,

      };
    },
    methods: {
      cloneInput() {
        return [].concat(this.input);
      },
      askForTransformerOfType(transformerType) {
        return this.$dialogs.open({
          template: `
          <div>
            <control-box ref="form1" form-id="tempdialog">
              <hidden-control form-id="tempdialog" name="type" :initial-value="transformerType" />
              <string-control form-id="tempdialog"
                name="callbackCode" :multiline="true"
                :label="'Write the new ' + transformerType + ' here:'"
                :on-change="v => value.callback = v"
                :placeholder="predefinedPlaceholders[transformerType]"
                :css-styles="{textarea:'min-height:80px;'}" />
            </control-box>
            <div style="text-align: right; padding-right: 4px;">
              <button v-on:click="() => accept($refs.form1.getValue())">Añadir</button>
              <button v-on:click="() => close()">Cancelar</button>
            </div>
          </div>
        `,
          factory() {
            return {
              data() {
                return {
                  predefinedPlaceholders,
                  transformerType,
                }
              }
            }
          }
        });
      },
      isValidTransformer(transformer) {
        const isObject = typeof transformer === "object";
        const hasType = typeof transformer.type === "string";
        const hasCallbackCode = typeof transformer.callbackCode === "string";
        const isValid = isObject && hasType && hasCallbackCode;
        console.log("transformer is " + (isValid ? "Valid" : "Invalid"));
        let specificArguments = [];
        if (transformer.type === "filter") {
          specificArguments = specificArguments.concat(["it", "i"]);
        } else if (transformer.type === "mapper") {
          specificArguments = specificArguments.concat(["it", "i"]);
        } else if (transformer.type === "reducer") {
          specificArguments = specificArguments.concat(["out", "it", "i"]);
        } else if (transformer.type === "modifier") {
          specificArguments = specificArguments.concat(["data"]);
        } else if (transformer.type === "sorter") {
          specificArguments = specificArguments.concat(["a", "b"]);
        }
        Object.assign(transformer, {
          callback: new Function(...specificArguments, transformer.callbackCode)
        });
        return isValid;
      },
      async askForFilter() {
        const answer = await this.askForTransformerOfType("filter");
        if (!this.isValidTransformer(answer)) return;
        this.transformers = this.transformers.concat([answer]);
      },
      async askForReducer() {
        const answer = await this.askForTransformerOfType("reducer");
        if (!this.isValidTransformer(answer)) return;
        this.transformers = this.transformers.concat([answer]);
      },
      async askForMapper() {
        const answer = await this.askForTransformerOfType("mapper");
        if (!this.isValidTransformer(answer)) return;
        this.transformers = this.transformers.concat([answer]);
      },
      async askForReducer() {
        const answer = await this.askForTransformerOfType("reducer");
        if (!this.isValidTransformer(answer)) return;
        this.transformers = this.transformers.concat([answer]);
      },
      async askForModifier() {
        const answer = await this.askForTransformerOfType("modifier");
        if (!this.isValidTransformer(answer)) return;
        this.transformers = this.transformers.concat([answer]);
      },
      async askForSorter() {
        const answer = await this.askForTransformerOfType("sorter");
        if (!this.isValidTransformer(answer)) return;
        this.transformers = this.transformers.concat([answer]);
      },
      async askForGrouper() {
        const answer = await this.askForTransformerOfType("grouper");
        if (!this.isValidTransformer(answer)) return;
        this.transformers = this.transformers.concat([answer]);
      },
      showTransformers() {
        const that = this;
        return this.$dialogs.open({
          template: `<lsw-table-transformers :table="table" />`,
          factory() {
            return {
              data() {
                return {
                  table: that
                };
              }
            }
          }
        });
      },
      synchronizeOutput(transformers = this.transformers) {
        let temporaryData = this.cloneInput();
        Transform: {
          for (let index = 0; index < transformers.length; index++) {
            const transformer = transformers[index];
            if (transformer.type === "filter") {
              temporaryData = temporaryData.filter(transformer.callback);
            } else if (transformer.type === "mapper") {
              temporaryData = temporaryData.map(transformer.callback);
            } else if (transformer.type === "reducer") {
              temporaryData = temporaryData.reduce(transformer.callback, []);
            } else if (transformer.type === "modifier") {
              temporaryData = transformer.callback(temporaryData);
            } else if (transformer.type === "sorter") {
              temporaryData = temporaryData.sort(transformer.callback);
            } else if (transformer.type === "grouper") {
              temporaryData = temporaryData.sort(transformer.callback);
            } else {
              throw new Error("Required parameter «transformer.type» to be a valid string on «LswTable.methods.synchronizeOutput»");
            }
          }
        }
        const temporaryHeaders = new Set();
        Headers: {
          for (let index = 0; index < temporaryData.length; index++) {
            const temporaryRow = temporaryData[index];
            const temporaryKeys = Object.keys(temporaryRow);
            temporaryKeys.forEach(k => temporaryHeaders.add(k));
          }
        }
        Update_data: {
          this.headers = temporaryHeaders;
          this.output = temporaryData;
        }
      }
    },
    watch: {
      transformers(value) {
        this.synchronizeOutput();
      }
    },
    mounted() {
      this.synchronizeOutput();
    }
  });
})();
Vue.component("LswTableTransformers", {
  template: `<div class="lsw_table_transformers">
    Transformers here.
    {{ table.transformers }}
    <div class="flex_row">
        <button class="button_separation" v-on:click="table.showTransformers">All: {{ table.transformers.length }}</button>
        <button class="button_separation" v-on:click="table.askForFilter">+Filter</button>
        <button class="button_separation" v-on:click="table.askForMapper">+Mapper</button>
        <button class="button_separation" v-on:click="table.askForReducer">+Reducer</button>
        <button class="button_separation" v-on:click="table.askForSorter">+Sorter</button>
        <button class="button_separation" v-on:click="table.askForGrouper">+Grouper</button>
        <div style="flex: 100;"></div>
    </div>
</div>`,
  props: {
    table: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    };
  },
  methods: {

  },
  watch: {

  },
  mounted() {

  }
});
Vue.component('LswDataExplorer', {
  template: `<div class="data-explorer">
    <div class="top_panel flex_row centered" style="padding: 1px;">
        <div class="top_button_cell" v-on:click="toggleTopPanel">
            <button v-if="!isShowingTopPanel">📝</button>
            <button v-else>❌</button>
        </div>
        <div class="top_button_cell" style="padding-left: 1px;">
            <button v-on:click="applyFastFilter">
                <span v-if="isLoadingInnerValue">⌛️</span>
                <span v-else>🔎</span>
            </button>
        </div>
        <div class="top_search_bar_cell flex_cell expanded" style="padding-left: 1px; padding-right: 1px;">
            <input type="text" class="width_100" v-model="textFilter" v-keydown.enter="applyFastFilter" />
        </div>
    </div>
    <div class="top_panel_showable" v-if="isShowingTopPanel">
        <div class="content">
            <div class="flex_row centered">
                <div style="padding-right: 1px;">
                    <button v-on:click="saveRelatedDocument">☑️</button>
                </div>
                <div style="padding-right: 1px;">
                    <button v-on:click="toggleRelatedDocuments">
                        <span v-if="isShowingRelatedDocuments">📂</span>
                        <span v-else>📁</span>
                    </button>
                </div>
                <input v-if="!isShowingRelatedDocuments" class="width_100" type="text" placeholder="Document title here" v-model="documentTitle" />
                <div v-else class="width_100">Related documents: </div>
                <div style="padding-left: 1px;">
                    <button v-on:click="toggleTopPanel">❌</button>
                </div>
            </div>
            <div v-if="isShowingRelatedDocuments" style="padding-top: 1px;">
                <div v-for="doc, docIndex in relatedDocuments">
                    <button v-on:click="() => openDocument(docIndex)">{{ doc.title }}</button>
                </div>
            </div>
            <div class="width_100" v-show="!isShowingRelatedDocuments">
                <textarea v-model="documentContent" placeholder="// Document content here" />
            </div>
        </div>
    </div>
    <template v-if="hasLoadedInnerValue">
        <LswDataImplorer :value="innerValue" v-bind:key="'data-implorer-' + getRandomId()" />
    </template>
</div>`,
  props: {
    value: {
      required: true
    },
    pageSize: {
      type: Number,
      default: 10
    },
    level: {
      type: Number,
      default: 0
    },
    pointer: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      hasLoadedInnerValue: true,
      isLoadingInnerValue: false,
      originalValue: this.value,
      innerValue: this.value,
      textFilter: "",
      isShowingTopPanel: false,
      isShowingRelatedDocuments: false,
      documentTitle: "",
      documentContent: "",
      expanded: {},
      relatedDocuments: [{
        title: "Document 1",
        text: "console.log('hi!');",
      }],
      propagateFastFilterTimeoutId: undefined,
      propagateFastFilterTimeoutMs: 1500
    };
  },
  methods: {
    getRandomId() {
      return this.$lsw.toasts.getRandomString();
    },
    toggleTopPanel() {
      this.isShowingTopPanel = !this.isShowingTopPanel;
    },
    toggleExpand(key) {
      this.$set(this.expanded, key, !this.expanded[key]);
    },
    toggleRelatedDocuments() {
      this.isShowingRelatedDocuments = !this.isShowingRelatedDocuments;
    },
    openDocument(docIndex) {
      // @TODO:
      const doc = this.relatedDocuments[docIndex];
      this.documentTitle = doc.title;
      this.documentContent = doc.text;
      this.isShowingRelatedDocuments = false;
    },
    saveRelatedDocument() {

    },
    async applyFastFilter(textFilter = this.textFilter) {
      // @TODO:
      try {
        this.hasLoadedInnerValue = false;
        this.$forceUpdate(true);
        if(textFilter.trim() === "") {
          this.innerValue = this.originalValue;
          return;
        }
        const textFilterFunction = new Function("it,key,i", "try {\n  return " + textFilter + ";\n} catch(e) {\n  return false;\n}");
        console.log("User-built filter function:");
        console.log(textFilterFunction.toString());
        if(typeof this.originalValue !== "object") {
          this.innerValue = this.originalValue;
          return;
        } else if(Array.isArray(this.originalValue)) {
          this.innerValue = [].concat(this.originalValue).filter(textFilterFunction);
        } else {
          Object.keys(this.originalValue).reduce((out, key, i) => {
            const value = this.originalValue[key];
            const passesFilter = textFilterFunction(value, key, i);
            if(passesFilter) {
              out[key] = value;
            }
            return out;
          }, {});
          this.innerValue = out;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoadingInnerValue = false;
        this.hasLoadedInnerValue = true;
        this.$forceUpdate(true);
      }
    },
    propagateFastFilter(textFilter = this.textFilter) {
      this.isLoadingInnerValue = true;
      clearTimeout(this.propagateFastFilterTimeoutId);
      this.propagateFastFilterTimeoutId = setTimeout(() => {
        this.applyFastFilter(textFilter);
      }, this.propagateFastFilterTimeoutMs);
    }
  },
  watch: {
    textFilter(newValue) {
      this.propagateFastFilter(newValue);
    }
  }
});

Vue.component('LswDataImplorer', {
  template: `<div class="lsw_data_implorer" :class="{ paginated: isPaginated || isRoot }">
    <div class="paginator flex_row centered" v-if="isPaginated" style="padding-left: 1px; padding-top: 1px;">
        <div>
            <button v-on:click="goToPage(1)">««</button>
        </div>
        <div>
            <button v-on:click="goToPreviousPage()">«</button>
        </div>
        <div>
            <button v-on:click="goToNextPage()">»</button>
        </div>
        <div>
            <button v-on:click="goToLastPage()">»»</button>
        </div>
        <div style=" font-size: 10px;">
            Page {{ currentPage }} out of {{ Math.ceil(entries.length / pageSize) }} in packs of {{ pageSize }}
        </div>
    </div>
    <div class="paginated_entry"
        v-for="(entry, index) in paginatedEntries"
        :key="index">
        <div class="entry flex_row">
            <button
                v-if="typeof entry.value === 'object' && entry.value !== null"
                style="margin: 1px; min-width: 20px;"
                @click="toggleExpand(entry.key)">
                {{ expanded[entry.key] ? '🔶' : '🔸' }}
            </button>
            <button
                v-else
                style="margin: 1px; min-width: 20px; background-color: transparent; color: black; border: 1px solid transparent; cursor: default;">
                🔷
            </button>
            <div class="prop_row">
                <span class="level_cell"
                    :title="'value[' + pointer.concat([entry.key]).map(v => JSON.stringify(v)).join('][') + ']'">L{{ level + 1 }} ·
                </span><span class="prop_cell">
                    <span class="prop_id">{{ entry.key }}</span>
                    <span class="prop_type">[{{ typeof entry.value }}]</span>
                </span>
            </div>
            <div class="val_cell"
                v-if="typeof entry.value !== 'object' || entry.value === null"> = {{ entry.value }}</div>
        </div>
        <div class="inner_sight_row" v-if="expanded[entry.key]">
            <div class="path_row flex_row">
                <span class="type_cell">{{ typeof entry.value }} · </span>
                <span class="path_cell_container">
                    <span class="path_cell">{{
                        ["#"].concat(pointer).concat([entry.key]).reverse().join(' « ') }}
                    </span>
                </span>
            </div>
            <LswDataImplorer :value="entry.value"
                :pageSize="pageSize"
                :level="level + 1"
                :pointer="pointer.concat([entry.key])" />
        </div>
    </div>
</div>`,
  props: {
    value: {
      required: true
    },
    pageSize: {
      type: Number,
      default: () => 10
    },
    level: {
      type: Number,
      default: () => 0
    },
    pointer: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      expanded: {},
      isRoot: this.pointer.length === 0,
      currentPageSize: this.pageSize,
      currentPage: 1,
      page: {},
      entries: [],
      paginatedEntries: [],
      isPaginated: false,
    };
  },
  methods: {
    loadEntries() {
      if (typeof this.value !== 'object' || this.value === null) {
        return [{ key: 'value', value: this.value }];
      }
      this.entries = Object.entries(this.value).map(([key, value]) => ({ key, value }));
    },
    toggleExpand(key) {
      this.$set(this.expanded, key, !this.expanded[key]);
    },
    goToPage(page) {
      this.currentPage = page;
      this.loadPaginatedEntries();
    },
    goToPreviousPage() {
      if(this.currentPage <= 1) {
        return;
      }
      this.currentPage--;
      this.loadPaginatedEntries();
    },
    goToNextPage() {
      if(this.currentPage >= Math.ceil(this.entries.length / this.pageSize)) {
        return;
      }
      this.currentPage++;
      this.loadPaginatedEntries();
    },
    goToLastPage() {
      this.currentPage = Math.ceil(this.entries.length / this.pageSize);
      this.loadPaginatedEntries();
    },
    paginateArray(array, pageSize = this.currentPageSize, currentPage = this.currentPage) {
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      return array.slice(start, end);
    },
    loadPaginatedEntries(entries = this.entries) {
      this.paginatedEntries = this.paginateArray(entries);
      this.isPaginated = this.paginatedEntries.length !== this.entries.length;
    },
  },
  watch: {
    entries(newValue) {
      if(this.pageSize <= 0) {
        return newValue;
      }
      this.loadPaginatedEntries(newValue);
    }
  },
  mounted() {
    this.loadEntries();
  }
});

(function () {

  const defaultDialogFactory = () => {
    return {
      props: {},
      data() {
        return {};
      },
      methods: {},
      mounted() { },
    };
  };

  class Dialog {
    static fromIdToComponentName(id) {
      return "lsw-dialog-" + id;
    }
    constructor(info = {}) {
      Object.assign(this, info);
      Validations: {
        if (typeof this.id !== "string") {
          throw new Error(`Required parameter «dialog.id» to be a string on «Dialog.constructor»`);
        }
        if (typeof this.name !== "string") {
          throw new Error(`Required parameter «dialog.name» to be a string on «Dialog.constructor»`);
        }
        if (typeof this.priority !== "number") {
          throw new Error(`Required parameter «dialog.priority» to be a number on «Dialog.constructor»`);
        }
        if (typeof this.component !== "object") {
          throw new Error(`Required parameter «dialog.component» to be an object on «Dialog.constructor»`);
        }
        if (typeof this.promiser !== "object") {
          throw new Error(`Required parameter «dialog.promiser» to be an object on «Dialog.constructor»`);
        }
        if (!(this.promiser.promise instanceof Promise)) {
          throw new Error(`Required parameter «dialog.promiser.promise» to be an instance of Promise on «Dialog.constructor»`);
        }
        if (typeof this.promiser.resolve !== "function") {
          throw new Error(`Required parameter «dialog.promiser.resolve» to be an function on «Dialog.constructor»`);
        }
        if (typeof this.promiser.reject !== "function") {
          throw new Error(`Required parameter «dialog.promiser.reject» to be an function on «Dialog.constructor»`);
        }
        if (typeof this.acceptButton !== "object") {
          this.acceptButton = false;
        }
        if (typeof this.cancelButton !== "object") {
          this.cancelButton = false;
        }
      }
    }
  }

  const closeSubdialogsHook = function (id, lswDialogs) {
    const ids = Object.keys(lswDialogs.opened);
    for (let index_dialog = 0; index_dialog < ids.length; index_dialog++) {
      const idOpened = ids[index_dialog];
      const idParent = lswDialogs.opened[idOpened].parentId;
      if (idParent === id) {
        lswDialogs.close(idOpened);
      }
    }
  };

  Vue.component("LswDialogs", {
    name: "LswDialogs",
    template: `<div class="lws_dialogs_root">
    <div class="lsw_dialogs"
        v-if="openedLength && notMinimizedLength">
        <div class="lsw_dialogs_box">
            <template v-for="dialog, dialog_index in opened">
                <template v-if="!dialog.minimized">
                    <div class="dialog_window"
                        v-bind:key="'dialog_' + dialog_index"
                        :style="{ zIndex: dialog.priority }">
                        <div class="dialog_topbar">
                            <div class="dialog_title">
                                {{ dialog.title }}
                            </div>
                            <div class="dialog_topbar_buttons">
                                <button class="mini"
                                    v-if="enabledWindowsSystem"
                                    v-on:click="goHome">☰</button>
                                <button class="mini"
                                    v-on:click="minimize(dialog.id)">-</button>
                                <button class="mini"
                                    v-on:click="close(dialog.id)">X</button>
                            </div>
                        </div>
                        <div class="dialog_body">
                            <component :is="dialog.name" :ref="'currentDialogComponent_' + dialog_index" />
                        </div>
                        <div class="dialog_footer">
                            <button v-if="dialog && dialog.acceptButton"
                                class=""
                                v-on:click="() => dialog.acceptButton.callback ? dialog.acceptButton.callback($refs['currentDialogComponent_' + dialog_index][0], dialog, dialog.id, this) : resolve(dialog.id).close()">{{
                                dialog.acceptButton.text || "Accept" }}</button>
                            <button v-if="dialog && dialog.cancelButton"
                                class=""
                                v-on:click="() => dialog.cancelButton.callback ? dialog.cancelButton.callback($refs['currentDialogComponent_' + dialog_index][0], dialog, dialog.id, this) : close(dialog.id)">{{
                                dialog.cancelButton.text || "Cancel" }}</button>
                            <button v-else
                                class=""
                                v-on:click="() => close(dialog.id)">{{ dialog?.cancelButton?.text || "Cancel" }}</button>
                        </div>
                    </div>
                </template>
            </template>
        </div>
    </div>
</div>`,
    props: {
      asWindows: {
        type: Boolean,
        default: () => false
      }
    },
    data() {
      this.$trace("lsw-dialogs.data", arguments);
      return {
        enabledWindowsSystem: this.asWindows,
        opened: {},
        openedLength: 0,
        notMinimizedLength: 0,
        hookOnOpen: undefined,
        hookOnClose: closeSubdialogsHook,
      };
    },
    watch: {
      opened(newValue) {
        this.$trace("lsw-dialogs.watch.opened", ["too long object"]);
        this.openedLength = (typeof newValue !== "object") ? 0 : Object.keys(newValue).length;
        this._refreshMinimizedLength(newValue);
      }
    },
    methods: {
      open(parametricObject = {}) {
        this.$trace("lsw-dialogs.methods.open", arguments);
        if (typeof parametricObject !== "object") {
          throw new Error(`Required argument «parametricObject» to be an object on «LswDialogs.methods.open»`);
        }
        const {
          template,
          title = "",
          id = "default",
          priority = 500,
          factory = defaultDialogFactory,
          parentId = undefined,
          created_at = new Date()
        } = parametricObject;
        const componentInfo = {};
        if (typeof id !== "string") {
          throw new Error(`Required parameter «id» to be a string on «LswDialogs.methods.open»`);
        }
        if (id in this.opened) {
          throw new Error(`Cannot open dialog «${id}» because it is already opened on «LswDialogs.methods.open»`);
        }
        if (typeof template !== "string") {
          throw new Error(`Required parameter «template» to be a string on «LswDialogs.methods.open»`);
        }
        if (typeof factory === "object") {
          // @OK
        } else if (typeof factory !== "function") {
          throw new Error(`Required parameter «factory» to be an object or a function on «LswDialogs.methods.open»`);
        }
        if (typeof priority !== "number") {
          throw new Error(`Required parameter «priority» to be a number on «LswDialogs.methods.open»`);
        }
        const dialogComponentInput = typeof factory === "function" ? factory() : factory;
        const dialogComponentData = (() => {
          if (typeof dialogComponentInput.data === "undefined") {
            return function () { return {}; };
          } else if (typeof dialogComponentInput.data === "object") {
            return function () { return dialogComponentInput.data };
          } else if (typeof dialogComponentInput.data === "function") {
            return dialogComponentInput.data;
          } else {
            console.log(dialogComponentInput.data);
            throw new Error("Required parameter «data» returned by «factory» to be an object, a function or empty on «LswDialogs.methods.open»");
          }
        })();
        const scopifyMethods = function(obj, scope) {
          return Object.keys(obj).reduce((out, k) => {
            const v = obj[k];
            if(typeof v !== "function") {
              out[k] = v;
            } else {
              out[k] = v.bind(scope);
            }
            return out;
          }, {});
        };
        // 1) Este es para el Vue.component:
        const componentId = Dialog.fromIdToComponentName(id);
        const dialogComponent = Object.assign({}, dialogComponentInput, {
          name: componentId,
          template,
          data(component, ...args) {
            this.$trace(`lsw-dialogs.[${componentId}].data`, ["too long object"]);
            const preData = dialogComponentData.call(this);
            if (typeof preData.value === "undefined") {
              preData.value = "";
            };
            console.log("El data del nuevo componente dialog:", preData);
            dialogComponentInput.watch = scopifyMethods(dialogComponentInput.watch || {}, component);
            dialogComponentInput.computed = scopifyMethods(dialogComponentInput.computed || {}, component);
            dialogComponentInput.methods = scopifyMethods(dialogComponentInput.methods || {}, component);
            return preData;
          },
          watch: (dialogComponentInput.watch || {}),
          computed: (dialogComponentInput.computed || {}),
          methods: {
            getValue() {
              this.$trace(`lsw-dialogs.[${componentId}].methods.getValue`, []);
              return JSON.parse(JSON.stringify(this.value));
            },
            accept(solution = undefined, ...args) {
              this.$trace(`lsw-dialogs.[${componentId}].methods.accept`, [solution, ...args]);
              if (solution instanceof Event) {
                return this.$dialogs.resolve(id, this.getValue()).close(id);
              }
              return this.$dialogs.resolve(id, typeof solution !== "undefined" ? solution : this.getValue()).close(id);
            },
            cancel(...args) {
              this.$trace("lsw-dialogs.[${componentId}].methods.cancel", args);
              return this.$dialogs.resolve(id, -1).close(id);
            },
            abort(error = undefined, ...args) {
              this.$trace(`lsw-dialogs.[${componentId}].methods.abort`, [error, ...args]);
              if (solution instanceof Event) {
                return this.$dialogs.reject(id, new Error("Aborted dialog error")).close(id);
              }
              return this.$dialogs.reject(id, error).close(id);
            },
            close(...args) {
              this.$trace(`lsw-dialogs.[${componentId}].methods.close`, args);
              return this.$dialogs.resolve(id, -2).close(id);
            },
            ...(dialogComponentInput.methods || {})
          }
        });
        Define_component: {
          Vue.component(dialogComponent.name, dialogComponent);
        }
        // 1) Este es para el this.$dialogs:
        const dialogDefinition = Object.assign({}, {
          ...parametricObject,
          id,
          title,
          name: dialogComponent.name,
          component: dialogComponent,
          priority,
          minimized: false,
          parentId,
          created_at,
          promiser: Promise.withResolvers(),
        });
        const dialogInstance = new Dialog(dialogDefinition);
        console.log("Definición final del dialogo", dialogInstance);
        Define_dialog: {
          this.opened = Object.assign({}, this.opened, {
            [id]: dialogInstance
          });
        }
        if (typeof this.hookOnOpen === "function") {
          this.hookOnOpen(this.opened[id], id, this);
        }
        return this.opened[id].promiser.promise;
      },
      resolve(id, solution, ...args) {
        this.$trace("lsw-dialogs.methods.resolve", [id, solution, ...args]);
        if (typeof id !== "string") {
          throw new Error("Required parameter «id» (argument:1) to be a string on «LswDialogs.resolve»");
        }
        if (!(id in this.opened)) {
          throw new Error(`Cannot resolve dialog «${id}» because it is not opened on «LswDialogs.resolve»`);
        }
        this.opened[id].promiser.resolve(solution);
        return {
          close: () => this.close(id)
        };
      },
      reject(id, error, ...args) {
        this.$trace("lsw-dialogs.methods.reject", [id, error, ...args]);
        if (typeof id !== "string") {
          throw new Error("Required parameter «id» (argument:1) to be a string on «LswDialogs.reject»");
        }
        if (!(id in this.opened)) {
          throw new Error(`Cannot reject dialog «${id}» because it is not opened on «LswDialogs.reject»`);
        }
        this.opened[id].promiser.reject(error);
        return {
          close: () => this.close(id)
        };
      },
      close(id, ...args) {
        this.$trace("lsw-dialogs.methods.close", [id, ...args]);
        if (typeof id !== "string") {
          throw new Error("Required parameter «id» (argument:1) to be a string on «LswDialogs.close»");
        }
        if (!(id in this.opened)) {
          throw new Error(`Cannot close dialog «${id}» because it is not opened on «LswDialogs.close»`);
        }
        let promiseOfDialog = undefined;
        Undefine_component: {
          const dialogName = Dialog.fromIdToComponentName(id);
          delete Vue.options.components[dialogName];
        }
        Undefine_dialog: {
          Solve_promise_if_not_already: {
            if (this.opened[id].promiser.promise.state === "pending") {
              this.opened[id].promiser.resolve(-3);
            }
          }
          promiseOfDialog = this.opened[id].promiser.promise;
          delete this.opened[id];
          this.opened = Object.assign({}, this.opened);
        }
        if (typeof this.hookOnClose === "function") {
          this.hookOnClose(id, this);
        }
        return promiseOfDialog;
        // this.$forceUpdate(true);
      },
      minimize(id, ...args) {
        this.$trace("lsw-dialogs.methods.minimize", [id, ...args]);
        if (typeof id !== "string") {
          throw new Error("Required parameter «id» (argument:1) to be a string on «LswDialogs.minimize»");
        }
        if (!(id in this.opened)) {
          throw new Error(`Cannot minimize dialog «${id}» because it is not opened on «LswDialogs.minimize»`);
        }
        this.opened[id].minimized = true;
        this._refreshMinimizedLength(this.opened);
      },
      maximize(id, ...args) {
        this.$trace("lsw-dialogs.methods.maximize", [id, ...args]);
        if (typeof id !== "string") {
          throw new Error("Required parameter «id» (argument:1) to be a string on «LswDialogs.maximize»");
        }
        if (!(id in this.opened)) {
          throw new Error(`Cannot minimize dialog «${id}» because it is not opened on «LswDialogs.maximize»`);
        }
        Iterating_dialogs:
        for (let dialogId in this.opened) {
          if (id === dialogId) {
            continue Iterating_dialogs;
          }
          const dialogData = this.opened[dialogId];
          const currentPriority = parseInt(dialogData.priority);
          this.opened[dialogId].priority = currentPriority - 1;

        }
        this.opened[id].priority = 500;
        this.opened[id].minimized = false;
        this._refreshMinimizedLength();
      },
      _refreshMinimizedLength(newValue = this.opened, ...args) {
        this.$trace("lsw-dialogs.methods._refreshMinimizedLength", ["too long object", ...args]);
        this.notMinimizedLength = Object.keys(newValue).reduce((out, k) => {
          const v = newValue[k];
          if (v.minimized === false) {
            out++;
          }
          return out;
        }, 0);
        this.$forceUpdate(true);
      },
      goHome(...args) {
        this.$trace("lsw-dialogs.methods.goHome", [...args]);
        this.$window.LswWindows.show();
      },
      onOpen(callback, ...args) {
        this.$trace("lsw-dialogs.methods.onOpen", [callback, ...args]);
        this.hookOnOpen = callback;
      },
      onClose(callback, ...args) {
        this.$trace("lsw-dialogs.methods.onClose", [callback, ...args]);
        this.hookOnClose = callback;
      }
    },
    mounted(...args) {
      this.$trace("lsw-dialogs.mounted", [...args]);
      Vue.prototype.$dialogs = this;
      if (Vue.prototype.$lsw) {
        Vue.prototype.$lsw.dialogs = this;
      }
      window.LswDialogs = this;
      console.log("[*] LswDialogs mounted.");
    }
  });

})();
// Change this component at your convenience:
Vue.component("LswWindowsMainTab", {
  template: `<div class="lsw_windows_main_tab">
        <div class="dialog_window" v-bind:key="'main_dialog'" :style="{ zIndex: 501 }">
            <div class="dialog_topbar">
                <div class="dialog_title">
                    <div>Process manager</div>
                </div>
                <div class="dialog_topbar_buttons">
                    <button v-if="$consoleHooker?.is_shown === false" class="mini" style="white-space: nowrap;flex: 1; margin-right: 4px;" v-on:click="() => $consoleHooker.show()">💻</button><button class="mini" v-on:click="viewer.toggleState">-</button>
                </div>
            </div>
            <div class="dialog_body">
                <div class="main_tab_topbar">
                    <button class="main_tab_topbar_button" v-on:click="openAgenda">Agenda</button>
                    <button class="main_tab_topbar_button" v-on:click="openWiki">Wiki</button>
                    <button class="main_tab_topbar_button" v-on:click="openRest">Data</button>
                    <button class="main_tab_topbar_button" v-on:click="openFilesystem">Files</button>
                </div>
                <div class="pad_normal" v-if="!Object.keys($lsw.dialogs.opened).length">
                    <span>No processes found right now.</span>
                </div>
                <div class="pad_normal" v-else>
                    <div v-for="dialog, dialogIndex, dialogCounter in $lsw.dialogs.opened" v-bind:key="'dialog-' + dialogIndex">
                        <a href="javascript:void(0)" v-on:click="() => viewer.selectDialog(dialogIndex)">{{ dialogCounter + 1 }}. {{ dialog.title }} [{{ dialog.id }}]</a>
                    </div>
                </div>
            </div>
            <div class="dialog_footer">
                <button class="" v-on:click="viewer.toggleState">Minimize</button>
            </div>
        </div>
</div>`,
  props: {
    viewer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    getRandomString(len = 10) {
      const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      let out = "";
      while(out.length < len) {
        out += alphabet[Math.floor(Math.random() * alphabet.length)];
      }
      return out;
    },
    openRest() {
      this.viewer.hide();
      this.$dialogs.open({
        id: "database-explorer-" + this.getRandomString(5),
        title: "Database explorer",
        template: `<lsw-database-explorer />`,
      });
    },
    openFilesystem() {
      this.viewer.hide();
      this.$dialogs.open({
        id: "filesystem-explorer-" + this.getRandomString(5),
        title: "Filesystem explorer",
        template: `<lsw-filesystem-explorer />`,
      });
    },
    openWiki() {
      this.viewer.hide();
      this.$dialogs.open({
        id: "wiki-explorer-" + this.getRandomString(5),
        title: "Wiki explorer",
        template: `<lsw-wiki />`,
      });
    },
    openAgenda() {
      this.viewer.hide();
      this.$dialogs.open({
        id: "agenda-viewer-" + this.getRandomString(5),
        title: "Agenda viewer",
        template: `<lsw-agenda />`,
      });
    },
  },
  mounted() {
    
  }
});
// Change this component at your convenience:
Vue.component("LswWindowsViewer", {
  template: `<div class="lsw-windows-viewer">
    <lsw-dialogs ref="dialogs" :as-windows="true"></lsw-dialogs>
    <lsw-windows-pivot-button :viewer="this" />
    <template v-if="isShowing">
        <lsw-windows-main-tab :viewer="this" />
    </template>
</div>`,
  props: {},
  data() {
    return {
      isShowing: false
    };
  },
  methods: {
    hide() {
      this.isShowing = false;
    },
    show() {
      this.isShowing = true;
    },
    toggleState() {
      this.isShowing = !this.isShowing;
      this.$forceUpdate(true);
    },
    selectDialog(id) {
      this.hide();
      this.$refs.dialogs.maximize(id);
    }
  },
  mounted() {
    this.$window.LswWindows = this;
    this.$lsw.windows = this;
  }
});
// Change this component at your convenience:
Vue.component("LswWindowsPivotButton", {
  template: `<div class="lsw_windows_pivot_button" v-on:click="onClick">
    <button id="windows_pivot_button" class="">🔴</button>
</div>`,
  props: {
    viewer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    onClick(event) {
      this.viewer.toggleState();
    }
  },
  mounted() {
    
  }
});
Vue.component("LswToasts", {
  template: `<div class="lsw_toasts">
    <div class="toasts_box">
        <div class="toast_list">
            <template v-for="toast, toastIndex in sent">
                <div class="toast_box">
                    <div class="toast_item">
                        <div class="toast"
                            v-bind:key="'toast-number-' + toast.id"
                            :style="{ color: toast.foreground, backgroundColor: toast.background }"
                            v-on:click="() => close(toast.id)">
                            <div class="toast_title"
                                style="font-size: 13px;" v-if="toast.title">
                                {{ toast.title }}
                            </div>
                            <div class="toast_text"
                                style="font-size: 10px;">
                                {{ toast.text }}
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</div>`,
  props: {},
  data() {
    return {
      sent: {}
    };
  },
  methods: {
    getRandomString(len = 10) {
      const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      let out = "";
      while(out.length < len) {
        out += alphabet[Math.floor(Math.random() * alphabet.length)];
      }
      return out;
    },
    send(toastsInput = {}) {
      const toastData = Object.assign({
        id: this.getRandomString(),
        title: "",
        text: "",
        timeout: 3000,
        orientation: "bottom",
        background: "rgba(255,255,255,0.5)",
        foreground: "#000",
        started_at: new Date()
      }, toastsInput);
      if(typeof toastData.timeout !== "number") {
        throw new Error("Required parameter «timeout» to be a number or empty on «LswToasts.methods.send»");
      }
      if(isNaN(toastData.timeout)) {
        throw new Error("Required parameter «timeout» to be a (non-NaN) number or empty on «LswToasts.methods.send»");
      }
      if(["top", "bottom", "center"].indexOf(toastData.orientation) === -1) {
        throw new Error("Required parameter «orientation» to be a string (top, center, bottom) or empty on «LswToasts.methods.send»");
      }
      if(toastData.id in this.sent) {
        throw new Error("Required parameter «id» to not be repeated on «LswToasts.methods.send»");
      }
      this.sent = Object.assign({}, this.sent, {
        [toastData.id]: toastData
      });
      setTimeout(() => {
        this.close(toastData.id);
      }, toastData.timeout);
    },
    close(id) {
      delete this.sent[id];
      this.$forceUpdate(true);
    }
  },
  watch: {},
  mounted() {
    this.$toasts = this;
    this.$window.LswToasts = this;
    if(this.$lsw) {
      this.$lsw.toasts = this;
    }
  }
});
Vue.component("LswConsoleHooker", {
  template: `<div class="console-hooker" :class="{hide:!is_shown}">
    <div class="console_viewer">
        <div class="console_box">
            <div class="console_box_title" style="display: flex; flex-direction: row; width: 100%; align-items: center;">
                <span style="flex: 100;">console hooker</span>
                <span style="flex: 1;">
                    <button class="mini" v-on:click="hide">X</button>
                </span>
            </div>
            <div class="console_box_output_container">
                <div class="console_box_output" id="lsw-console-hooker-output"></div>
            </div>
        </div>
    </div>
</div>`,
  props: {},
  data() {
    return {
      is_shown: true,
      instance: undefined
    }
  },
  methods: {
    show() {
      this.is_shown = true;
    },
    hide() {
      this.is_shown = false;
    }
  },
  mounted() {
    this.instance = new ConsoleHooker("lsw-console-hooker-output");
    this.$vue.prototype.$consoleHooker = this;
    this.$window.LswConsoleHooker = this;
  },
  unmounted() {

  }
});
// Change this component at your convenience:
Vue.component("App", {
  template: `<div>
    <button v-on:click="uploadConductometria" v-if="!conductometria.registros">Abrir conductometría</button>
    <button v-on:click="clearConductometria" v-else>Cerrar</button>
    <button v-on:click="openDialog">Abrir diálogo</button>
    <button v-on:click="openDialogSequence">Abrir secuencia de diálogos</button>
    <div style="height: 4px;"></div>
    <pre class="conductometria_viewer_1" style="display: none;">{{ conductometria }}</pre>
    <table class="tabla_de_conductometria">
        <template v-for="dia, dia_index in conductometria.registros">
            <tbody v-bind:key="'conductometria_registro_dia_' + dia.day ">
                <tr v-on:click="() => toggleDay(dia.day)">
                    <td colspan="1000" class="celda_fecha" :class="{ activated: conductometria_minified_days.indexOf(dia.day) === -1 }">
                        {{ dia.day }}
                    </td>
                </tr>
                <template v-if="conductometria_minified_days.indexOf(dia.day) === -1">
                    <template v-for="hora, hora_index in dia.hours">
                        <tr v-bind:key="'conductometria_registro_dia_' + dia.day + '_celda_hora'" :class="{ passed: hora.passed, current: hora.current }">
                            <td class="celda_hora">
                                {{ hora.hour }}
                            </td>
                            <td class="celda_contenido">
                                <button class="minibutton">+</button>
                                <span class="pill_group" v-for="event, event_index in hora.events" v-bind:key="'conductometria_registro_dia_' + dia.day + '_celda_hora_event_' + event_index" style="margin-right: 2px;">
                                    <span style="padding-left: 2px; padding-right: 2px; border: 1px solid #000; border-right: 0px solid #000; background-color: #FFFFFF;">
                                        <template v-if="event.details">
                                            <span>{{ event.name }} <span>({{ event.details }})</span></span>
                                        </template>
                                        <template v-else>
                                            <span>{{ event.name }}</span>
                                        </template>
                                    </span><span class="like_button minibutton display_inline_block text_align_center" style="border: 1px solid #000; border-left: 0px solid #000; min-width:15px;"> - </span>
                                </span>
                            </td>
                        </tr>
                    </template>
                </template>
            </tbody>
        </template>
    </table>




    <lsw-console-hooker />
    <lsw-windows-viewer />
    <lsw-toasts />
</div>`,
  props: {},
  data() {
    return {
      conductometria: [],
      conductometria_minified_days: [],
    };
  },
  methods: {

    async uploadConductometria() {
      try {
        if (localStorage.__conductometria_file_1__) {
          this.conductometria = JSON.parse(localStorage.__conductometria_file_1__);
          return 1;
        }
        const excelData2 = await this.$lsw.utils.loadConductometriaByExcelFile();
        if (excelData2) {
          this.conductometria = excelData2;
          localStorage.__conductometria_file_1__ = JSON.stringify(excelData2);
          return 2;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.$forceUpdate(true);
      }
    },

    clearConductometria() {
      try {
        this.conductometria = [];
        this.conductometria_minified_days = [];
        delete localStorage.__conductometria_file_1__;
      } catch (error) {
        console.log(error);
      } finally {
        this.$forceUpdate(true);
      }
    },

    toggleDay(dia_index) {
      const pos = this.conductometria_minified_days.indexOf(dia_index);
      if (pos === -1) {
        this.conductometria_minified_days.push(dia_index);
      } else {
        this.conductometria_minified_days.splice(pos, 1);
      }
      this.$forceUpdate(true);
    },

    async openDialog() {
      const name = await this.$dialogs.open({
        template: `
          <div>
            <div style="display: flex; flex-direction: row; align-items: center;">
              <div style="flex:100; padding-right: 4px;">
                <input type="text" v-model="value" style="width:100%;" placeholder="Pon tu nombre aquí" v-focus v-on:keydown.enter="accept" />
              </div>
              <div style="flex:1;">
                <button v-on:click="accept">Aceptar</button>
              </div>
            </div>
          </div>
        `
      });
      console.log("Name:", name);
    },

    async openDialogSequence() {
      const userData = await this.$dialogs.open({
        id: "dialog-step-1",
        title: "Paso 1",
        template: `
          <div>
              <div>
                <div>Nombre:</div>
                <input type="text" ref="nameInput" v-model="value.name" style="width:100%;" placeholder="Pon tu nombre aquí" v-focus v-on:keydown.enter="() => $refs.ageInput.focus()" />
                <div>Edad:</div>
                <input type="number" ref="ageInput" v-model="value.age" style="width:100%;" placeholder="Pon tu edad aquí" v-on:keydown.enter="() => $refs.cityInput.focus()" />
                <div>Ciudad:</div>
                <input type="text" ref="cityInput" v-model="value.city" style="width:100%;" placeholder="Pon tu ciudad aquí" v-on:keydown.enter="accept" />
              </div>
              <div>
                <button v-on:click="accept">Aceptar</button>
              </div>
          </div>
        `,
        factory: {
          data: {
            value: {
              tpl1: [["name, nombre"], ["age", "edad"], ["city", "ciudad"]],
              name: "Guybrush Threepwood",
              age: 0,
              city: "Los Angeles"
            }
          }
        }
      });
      console.log("UserData:", userData);
      const response = await this.$dialogs.open({
        id: "dialog-step-2",
        title: "Paso 2",
        template: `
          <div>
              <div>
                <div>¿Cómo estás, ${userData.name}?</div>
                <div>Cuéntame, ¿qué tal todo por ${userData.city}?</div>
                <div>¿Cómo van esos ${userData.age} años?</div>
                <input type="text" v-model="value" style="width:100%;" placeholder="Cuéntame aquí, que quiero saber" v-on:keydown.enter="accept" />
              </div>
              <div>
                <button v-on:click="accept">Aceptar</button>
              </div>
          </div>
        `
      });
      console.log("Response:", response);
    }

  },
  mounted() {
    console.log("[*] Application mounted.");
    window.on_application_mounted.resolve(true);
  }
});
Vue.component("LswDatabaseExplorer", {
  template: `<div>
    <component :is="selectedPage" :args="selectedArgs" :database-explorer="this" />
</div>`,
  props: {},
  data() {
    return {
      selectedPage: "lsw-page-databases",
      selectedArgs: [],
    }
  },
  methods: {
    selectPage(page, args = []) {
      try {
        this.selectedArgs = args;
        this.selectedPage = page;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  },
  async mounted() {
    
  },
  unmounted() {

  }
});
Vue.component("LswDatabaseBreadcrumb", {
  template: `<div class="database_breadcrumb">
    <span>Return to:</span>
    <template v-for="item, itemIndex in breadcrumb">
        <span v-bind:key="'breadcrumb_item_' + itemIndex">
            <span v-if="itemIndex !== 0"> » </span>
            <a v-if="!item.current" href="javascript:void(0)" v-on:click="() => selectPage(item.page, item.args)">
                {{ item.name }}
            </a>
            <span v-else>{{ item.name }}</span>
        </span>
    </template>
</div>`,
  props: {
    databaseExplorer: {
      type: Object,
      required: true
    },
    breadcrumb: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    selectPage(page, args = {}) {
      return this.databaseExplorer.selectPage(page, args);
    }
  },
  async mounted() {
    
  },
  unmounted() {

  }
});
Vue.component("LswPageDatabases", {
  template: `<div>
    <h3>All databases</h3>
    <table class="basic_table">
        <thead>
            <tr>
                <th>Nº</th>
                <th>Database</th>
                <th class="width_100">Version</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="database, databaseIndex in databases" v-bind:key="'database_id_' + database.name">
                <td>
                    {{ databaseIndex + 1 }}
                </td>
                <td>
                    <a href="javascript:void(0)" v-on:click="() => openDatabase(database.name)">{{ database.name }}</a>
                </td>
                <td>
                    {{ database.version }}
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
  props: {
    databaseExplorer: {
      type: Object,
      required: true
    },
    args: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      databases: [],
      breadcrumb: [{
        page: "LswPageDatabases",
        name: "Databases",
        args: {},
        current: true
      }],
    }
  },
  methods: {
    openDatabase(name) {
      this.databaseExplorer.selectPage("LswPageTables", { database: name });
    }
  },
  async mounted() {
    this.databases = await LswDatabaseAdapter.listDatabases();
  },
  unmounted() {

  }
});
Vue.component("LswPageRows", {
  template: `<div>
    <h3>Rows of {{ args.database }}.{{ args.table }}</h3>
    <lsw-database-breadcrumb :breadcrumb="breadcrumb" :database-explorer="databaseExplorer" />
    <table class="basic_table">
        <thead>
            <tr>
                <th>Nº</th>
                <th>ID</th>
                <th class="width_100">Item</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row, rowIndex in rows" v-bind:key="'row_index_' + rowIndex">
                <td>{{ rowIndex + 1 }}</td>
                <td>
                    <a href="javascript:void(0)" v-on:click="() => openRow(row.id)">
                        #{{ row.id }}
                    </a>
                </td>
                <td>
                    <div v-for="prop, propIndex, propCounter in row" v-bind:key="'row_index_' + rowIndex + '_prop_' + propIndex">
                        {{ propCounter + 1 }}. {{ propIndex }}: {{ prop }}
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
  props: {
    databaseExplorer: {
      type: Object,
      required: true
    },
    args: {
      type: Object,
      required: true
    },
  },
  data() {
    if(typeof this.args.database !== "string") {
      throw new Error("Required parameter «args.database» to be a string on «LswPageRows.data»");
    }
    if(typeof this.args.table !== "string") {
      throw new Error("Required parameter «args.table» to be a string on «LswPageRows.data»");
    }
    return {
      breadcrumb: [{
        page: "LswPageDatabases",
        name: "Databases",
        args: {}
      }, {
        page: "LswPageTables",
        name: this.args.database,
        args: {
          database: this.args.database
        }
      }, {
        page: "LswPageRows",
        name: this.args.table,
        args: {
          database: this.args.database,
          table: this.args.table
        },
        current: true
      }],
      database: this.args.database,
      table: this.args.table,
      rows: undefined,
      connection: undefined,
    }
  },
  methods: {
    async loadRows() {
      this.connection = new LswDatabaseAdapter(this.database);
      await this.connection.open();
      this.rows = await this.connection.select(this.table, it => true);
    },
    openRow(rowid) {
      return this.databaseExplorer.selectPage("LswPageRow", {
        database: this.database,
        table: this.table,
        rowid: rowid
      });
    }
  },
  mounted() {
    this.loadRows();
  },
  unmounted() {
    this.connection.close();
  }
});
Vue.component("LswPageRow", {
  template: `<div>
    <h3>Row on {{ args.database }}.{{ args.table }}#{{ args.rowid }}</h3>
    <lsw-database-breadcrumb :breadcrumb="breadcrumb" :database-explorer="databaseExplorer" />
    <table class="basic_table" v-if="row">
        <thead>
            <tr>
                <th>Nº</th>
                <th>Property</th>
                <th class="width_100">Value</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="prop, propIndex in row" v-bind:key="'prop_index_' + propIndex">
                <td>{{ propIndex + 1 }}</td>
                <td>
                    {{ propIndex }}
                </td>
                <td>
                    {{ prop }}
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
  props: {
    databaseExplorer: {
      type: Object,
      required: true
    },
    args: {
      type: Object,
      required: true
    },
  },
  data() {
    if(typeof this.args.database !== "string") {
      throw new Error("Required parameter «args.database» to be a string on «LswPageRow.data»");
    }
    if(typeof this.args.table !== "string") {
      throw new Error("Required parameter «args.table» to be a string on «LswPageRow.data»");
    }
    if(typeof this.args.rowid === "undefined") {
      throw new Error("Required parameter «args.rowid» to be a string or a number on «LswPageRow.data»");
    }
    return {
      breadcrumb: [{
        page: "LswPageDatabases",
        name: "Databases",
        args: {}
      }, {
        page: "LswPageTables",
        name: this.args.database,
        args: {
          database: this.args.database
        }
      }, {
        page: "LswPageRows",
        name: this.args.table,
        args: {
          database: this.args.database,
          table: this.args.table
        },
      }, {
        page: "LswPageRow",
        name: "#" + this.args.rowid,
        args: {
          database: this.args.database,
          table: this.args.table,
          rowid: this.args.rowid
        },
        current: true
      }],
      database: this.args.database,
      table: this.args.table,
      rowid: this.args.rowid,
      connection: undefined,
      row: false,
    }
  },
  methods: {
    async loadRow() {
      this.connection = new LswDatabaseAdapter(this.database);
      await this.connection.open();
      const matches = await this.connection.select(this.table, it => it.id === this.rowid);
      this.rowid = matches[0];
    }
  },
  mounted() {
    this.loadRow();
  },
  unmounted() {
    this.connection.close();
  }
});
Vue.component("LswPageSchema", {
  template: `<div></div>`,
  props: {},
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  mounted() {
    
  },
  unmounted() {

  }
});
Vue.component("LswPageTables", {
  template: `<div>
    <h3>Tables of {{ args.database }}</h3>
    <lsw-database-breadcrumb :breadcrumb="breadcrumb" :database-explorer="databaseExplorer" />
    <table class="basic_table">
        <thead>
            <tr>
                <th>Nº</th>
                <th>Table</th>
                <th class="width_100">Columns</th>
            </tr>
        </thead>
        <tbody v-if="tables">
            <tr v-for="table, tableIndex, tableCounter in tables"
                v-bind:key="'table_id_' + table.name">
                <td>
                    {{ tableCounter + 1 }}
                </td>
                <td>
                    <a href="javascript:void(0)"
                        v-on:click="() => openTable(tableIndex)">{{ tableIndex }}</a>
                </td>
                <td>
                    <!--div>- keyPath: {{ table.keyPath }}</div-->
                    <div v-if="table.autoIncrement">Is autoincrement</div>
                    <div v-for="subprop, subpropIndex in table.indexes"
                        v-bind:key="'table_' + table.name + '_index_' + subpropIndex">
                        <div>
                            {{ subpropIndex + 1 }}. {{ subprop.name }} ({{ [subprop.unique ? "unique" : false, subprop.multiEntry ? "multientry" : false].filter(it => !!it).join(", ") }})
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
  props: {
    databaseExplorer: {
      type: Object,
      required: true
    },
    args: {
      type: Object,
      required: true
    },
  },
  data() {
    if(!("database" in this.args)) {
      throw new Error("Required parameter «args.database» on «LswPageTables.data»");
    }
    if(typeof this.args.database !== "string") {
      throw new Error("Required parameter «args.database» to be a string on «LswPageTables.data»");
    }
    return {
      breadcrumb: [{
        page: "LswPageDatabases",
        name: "Databases",
        args: {}
      }, {
        page: "LswPageTables",
        name: this.args.database,
        args: {
          database: this.args.database
        },
        current: true
      }],
      database: this.args.database,
      tables: false
    }
  },
  methods: {
    async loadDatabase() {
      const db = await LswDatabaseAdapter.getSchema(this.database);
      this.tables = db;
      console.log(db);
    },
    openTable(table) {
      return this.databaseExplorer.selectPage("LswPageRows", {
        database: this.database,
        table: table
      });
    }
  },
  mounted() {
    this.loadDatabase();
  },
  unmounted() {

  }
});
Vue.component("LswFilesystemExplorer", {
  name: "LswFilesystemExplorer",
  template: `<div class="lsw_filesystem_explorer">
    <div class="current_node_box">
        <span class="previous_node_path" v-if="current_node !== '/'">
            <button class="mini previous_node_button" v-on:click="go_up">◀</button>
        </span>
        <span class="current_node_path">{{ current_node_basedir }}</span>
        <span class="current_node_filename">{{ current_node_basename }}</span>
    </div>
    <div class="filesystem_ui">
        <div class="leftside">
            <lsw-filesystem-buttons-panel :explorer="this" />
        </div>
        <div class="middleside">
            <div class="headerside">
                <lsw-filesystem-buttons-panel :explorer="this" />
            </div>
            <div class="bodyside">
                <lsw-filesystem-treeviewer v-if="current_node_is_directory" :explorer="this" ref="treeviewer" />
                <lsw-filesystem-editor v-else-if="current_node_is_file" :explorer="this" ref="editor" :filecontents="current_node_contents" />
            </div>
            <div class="footerside">
                <lsw-filesystem-buttons-panel :explorer="this" />
            </div>
        </div>
        <div class="rightside">
            <lsw-filesystem-buttons-panel :explorer="this" />
        </div>
    </div>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-filesystem-explorer.data");
    return {
      current_node: undefined,
      current_node_parts: undefined,
      current_node_basename: undefined,
      current_node_basedir: undefined,
      current_node_contents: undefined,
      current_node_subnodes: [],
      current_node_is_file: false,
      current_node_is_directory: false,
    };
  },
  methods: {
    open(...args) {
      this.$trace("lsw-filesystem-explorer.methods.open");
      return this.open_node(...args);
    },
    go_up() {
      const parts = this.current_node.split("/");
      parts.pop();
      const dest = this.normalize_path("/" + parts.join("/"));
      return this.open(dest);
    },
    normalize_path(subpath) {
      this.$trace("lsw-filesystem-explorer.methods.normalize_path");
      return this.$lsw.fs.resolve_path(this.current_node, subpath);
    },
    async open_node(subpath) {
      this.$trace("lsw-filesystem-explorer.methods.open_node");
      try {
        if (["", "/"].indexOf(subpath) !== -1) {
          return await this._open_directory("/");
        }
        const temporaryPath = this.normalize_path(subpath);
        const is_directory = await this.$lsw.fs.is_directory(temporaryPath);
        if (is_directory) {
          return await this._open_directory(temporaryPath);
        }
        const is_file = await this.$lsw.fs.is_file(temporaryPath);
        if (is_file) {
          return await this._open_file(temporaryPath);
        }
        throw new Error(`Cannot open path because it does not exist: ${temporaryPath} on «LswFilesystemExplorer.methods.open_node»`);
      } catch (error) {
        console.log(error);
      }
    },
    _set_as_file() {
      this.current_node_is_file = true;
      this.current_node_is_directory = false;
    },
    _set_as_directory() {
      this.current_node_is_directory = true;
      this.current_node_is_file = false;
    },
    async _open_file(subpath) {
      this.$trace("lsw-filesystem-explorer.methods._open_file");
      this.current_node = subpath;
      const contents = await this.$lsw.fs.read_file(this.current_node);
      this.current_node_contents = contents;
      this._set_as_file();
    },
    async _open_directory(subpath) {
      this.$trace("lsw-filesystem-explorer.methods._open_directory");
      this.current_node = subpath;
      const subnodes = await this.$lsw.fs.read_directory(this.current_node);
      this.current_node_subnodes = subnodes;
      this._set_as_directory();
    },
    _update_node_parts(newValue = this.current_node) {
      this.$trace("lsw-filesystem-explorer.methods._update_node_parts");
      this.current_node_parts = newValue.split("/").filter(p => p !== "");
    },
    _update_current_node_basename(current_node_parts = this.current_node_parts) {
      this.$trace("lsw-filesystem-explorer.methods._update_current_node_basename");
      if (current_node_parts.length) {
        this.current_node_basename = current_node_parts[current_node_parts.length - 1];
      } else {
        this.current_node_basename = "/";
      }
    },
    _update_current_node_basedir(current_node_parts = this.current_node_parts) {
      this.$trace("lsw-filesystem-explorer.methods._update_current_node_basedir");
      if (current_node_parts.length > 1) {
        this.current_node_basedir = "/" + [].concat(current_node_parts).splice(0, current_node_parts.length - 1).join("/") + "/";
      } else {
        this.current_node_basedir = "/";
      }
    },
    _update_node_subdata(newValue = this.current_node) {
      this.$trace("lsw-filesystem-explorer.methods._update_node_subdata");
      this._update_node_parts(newValue);
      this._update_current_node_basename();
      this._update_current_node_basedir();
    },
    set_panel_buttons(panelOptions = {}) {
      Validation: {
        if (typeof panelOptions !== "object") {
          throw new Error("Required argument «panelOptions» to be an object on «LswFilesystemExplorer.methods.set_panel_buttons»");
        }
        const keys = Object.keys(panelOptions);
        if (keys.length === 0) {
          throw new Error("Required argument «panelOptions» to be have 1 or more keys on «LswFilesystemExplorer.methods.set_panel_buttons»");
        }
        const valid_keys = ["top", "bottom", "left", "right"];
        for (let index = 0; index < keys.length; index++) {
          const key = keys[index];
          if(valid_keys.indexOf(key) === -1) {
            throw new Error(`Required argument «panelOptions[${key}]» to be a valid key out of «${valid_keys.join(",")}», not «${key}» on «LswFilesystemExplorer.methods.set_panel_buttons»`);
          }
          const value = panelOptions[key];
          if(typeof value !== "object") {
            throw new Error(`Required argument «panelOptions[${key}]» to be an object or array, not ${typeof value}» on «LswFilesystemExplorer.methods.set_panel_buttons»`);
          }
        }
      }
    }
  },
  watch: {
    current_node(newValue) {
      this.$trace("lsw-filesystem-explorer.watch.current_node");
      this._update_node_subdata(newValue);
    }
  },
  async mounted() {
    try {
      this.$trace("lsw-filesystem-explorer.mounted");
      this.$lsw.fs = new LswFilesystem();
      this.$lsw.fsExplorer = this;
      await this.$lsw.fs.init();
      await this.open("/");
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswFilesystemButtonsPanel", {
  name: "LswFilesystemButtonsPanel",
  template: `<div class="lsw_filesystem_buttons_panel">
    
</div>`,
  props: {
    explorer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    };
  },
  watch: {

  },
  methods: {

  },
  mounted() {

  }
});
Vue.component("LswFilesystemEditor", {
  name: "LswFilesystemEditor",
  template: `<div class="lsw_filesystem_editor">
    <textarea class="editor" v-model="filecontents" />
</div>`,
  props: {
    explorer: {
      type: Object,
      required: true
    },
    filecontents: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      
    };
  },
  watch: {

  },
  methods: {

  },
  mounted() {

  }
});
Vue.component("LswFilesystemTreeviewer", {
  name: "LswFilesystemTreeviewer",
  template: `<div class="lsw_filesystem_treeviewer">
    <table class="filesystem_treeviewer_table width_100">
        <thead style="display: none;"></thead>
        <tbody>
            <tr v-if="explorer.current_node !== '/'"
                class="treeviewer_row">
                <td>📁</td>
                <td v-on:click="() => go_up()">
                    <a href="javascript:void(0)">..</a>
                </td>
                <td></td>
            </tr>
            <template v-for="subnode, subnodeIndex, subnodeCounter in explorer.current_node_subnodes">
                <tr class="treeviewer_row"
                    v-bind:key="'subnode_obj_' + subnodeIndex">
                    <template v-if="typeof subnode === 'object'">
                        <td v-on:click="() => open_subnode(subnodeIndex)">📁</td>
                        <td v-on:click="() => open_subnode(subnodeIndex)">
                            <a href="javascript:void(0)"><b>{{ subnodeIndex }}</b></a>
                        </td>
                        <td>
                            <button class="mini">X</button>
                        </td>
                    </template>
                    <template v-else-if="typeof subnode === 'string'">
                        <td v-on:click="() => open_subnode(subnodeIndex)"> </td>
                        <td v-on:click="() => open_subnode(subnodeIndex)">
                            <a href="javascript:void(0)">{{ subnodeIndex }}</a>
                        </td>
                        <td>
                            <button class="mini">X</button>
                        </td>
                    </template>
                </tr>
            </template>
        </tbody>
    </table>

</div>`,
  props: {
    explorer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    };
  },
  watch: {

  },
  methods: {
    go_up() {
      return this.explorer.go_up();
    },
    open_subnode(subnodeIndex) {
      return this.explorer.open(subnodeIndex);
    }
  },
  mounted() {
    this.explorer.set_panel_buttons({
      top: [],
      left: [],
      right: [],
      bottom: [],
    })
  },
  unmounted() {

  }
});
Vue.component("LswWiki", {
  name: "LswWiki",
  template: `<div class="lsw_wiki">
    <h3>Welcome to wiki</h3>
    <div class="wiki_searcher_1_box">
        <div class="wiki_searcher_1_input_cell">
            <input class="wiki_searcher_1_input" v-model="search_text_1" type="text" placeholder="Fast search" v-on:key-down.enter="search" />
        </div>
        <div class="wiki_searcher_1_button_cell">
            <button class="wiki_searcher_1_button" v-on:click="search">🔎</button>
        </div>
    </div>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-wiki.data");
    return {
      search_text_1: "",
    };
  },
  methods: {
    search() {
      this.$trace("lsw-wiki.methods.search");
      console.log("Search");
    }
  },
  watch: {
    
  },
  async mounted() {
    try {
      this.$trace("lsw-wiki.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswCalendario", {
  template: `<div class="Component LswCalendario">
  <div style="max-width: 260px;">
    <div class="like_table" style="border-left: 1px solid white; border-bottom: 1px solid white; border-top: 1px solid white;">
      <div class="like_row">
        <div class="like_cell">
          <button class="boton_de_mover_mes"
            v-on:click="ir_a_mes_anterior"> ◀ </button>
        </div>
        <div class="like_cell" style="width:100%;" :style="!soloFecha ? 'vertical-align: top;' : ''">
          <div class="chivato_de_fecha">{{ obtener_fecha_formateada(fecha_seleccionada) }}</div>
          <div class="chivato_de_fecha" v-if="!soloFecha">a las {{ espaciar_izquierda(hora_seleccionada, 2) }}:{{ espaciar_izquierda(minuto_seleccionado, 2)
            }}:{{
            espaciar_izquierda(segundo_seleccionado, 2) }}.{{ espaciar_izquierda(milisegundo_seleccionado, 3) }}
          </div>
        </div>
        <div class="like_cell">
          <button class="boton_de_mover_mes"
            v-on:click="ir_a_mes_siguiente"> ▶ </button>
        </div>
      </div>
    </div>
    <table class="tabla_de_calendario">
      <tbody>
        <tr class="fila_de_dias_de_semana">
          <td>Lu</td>
          <td>Ma</td>
          <td>Mi</td>
          <td>Ju</td>
          <td>Vi</td>
          <td>Sá</td>
          <td>Do</td>
        </tr>
      </tbody>
      <tbody class="dias_de_calendario">
        <tr v-for="semana, semana_index in celdas_del_mes_actual"
          v-bind:key="'semana-' + semana_index">
          <td v-for="dia, dia_index in semana"
            v-bind:key="'dia-' + dia_index">
            <span v-if="dia">
              <button class="boton_de_calendario boton_de_dia_de_calendario"
                :class="{active: dia.getDate() === fecha_seleccionada.getDate()}"
                v-on:click="() => seleccionar_dia(dia)">{{ dia.getDate() }}</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="tabla_para_horas"
      v-if="!soloFecha">
      <tr>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="agregar_hora"> ▲ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="agregar_minuto"> ▲ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="agregar_segundo"> ▲ </button>
        </td>
      </tr>
      <tr>
        <td>
          <input style="display: table-cell;"
            class="entrada_de_calendario"
            type="text"
            v-model="hora_seleccionada" />
        </td>
        <td>
          <input style="display: table-cell;"
            class="entrada_de_calendario"
            type="text"
            v-model="minuto_seleccionado" />
        </td>
        <td>
          <input style="display: table-cell;"
            class="entrada_de_calendario"
            type="text"
            v-model="segundo_seleccionado" />
        </td>
      </tr>
      <tr>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="quitar_hora"> ▼ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="quitar_minuto"> ▼ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="quitar_segundo"> ▼ </button>
        </td>
      </tr>
    </table>
  </div>
</div>`,
  props: {
    soloFecha: {
      type: Boolean,
      default: false
    },
    alCambiarValor: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    try {
      return {
        fecha_seleccionada: undefined,
        celdas_del_mes_actual: undefined,
        hora_seleccionada: "0",
        minuto_seleccionado: "0",
        segundo_seleccionado: "0",
        milisegundo_seleccionado: "0"
      };
    } catch (error) {
      console.log(error);
      throw error;
    }

  },
  methods: {
    getValue() {
      return this.fecha_seleccionada;
    },
    ir_a_mes_anterior() {
      try {
        const nueva_fecha = new Date(this.fecha_seleccionada);
        nueva_fecha.setMonth(nueva_fecha.getMonth() - 1);
        this.fecha_seleccionada = nueva_fecha;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    ir_a_mes_siguiente() {
      try {
        const nueva_fecha = new Date(this.fecha_seleccionada);
        nueva_fecha.setMonth(nueva_fecha.getMonth() + 1);
        this.fecha_seleccionada = nueva_fecha;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    agregar_hora() {
      try {
        let hora = parseInt(this.hora_seleccionada);
        hora += 1;
        this.hora_seleccionada = hora;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    agregar_minuto() {
      try {
        let minuto = parseInt(this.minuto_seleccionado);
        minuto += 1;
        this.minuto_seleccionado = minuto;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    agregar_segundo() {
      try {
        let segundo = parseInt(this.segundo_seleccionado);
        segundo += 1;
        this.segundo_seleccionado = segundo;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    quitar_hora() {
      try {
        let hora = parseInt(this.hora_seleccionada);
        hora -= 1;
        this.hora_seleccionada = hora;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    quitar_minuto() {
      try {
        let minuto = parseInt(this.minuto_seleccionado);
        minuto -= 1;
        this.minuto_seleccionado = minuto;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    quitar_segundo() {
      try {
        let segundo = parseInt(this.segundo_seleccionado);
        segundo -= 1;
        this.segundo_seleccionado = segundo;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    seleccionar_dia(dia) {
      try {
        this.fecha_seleccionada = dia;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    espaciar_izquierda(texto,
      longitud,
      relleno = "0") {
      try {
        let salida = "" + texto;
        while (salida.length < longitud) {
          salida = relleno + salida;
        }
        return salida;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    obtener_fecha_formateada(fecha) {
      try {
        if (typeof fecha === 'undefined') {
          return;
        }
        let formato = "";
        formato += (() => {
          try {
            if (fecha.getDay() === 0) {
              return "Domingo";
            }
            if (fecha.getDay() === 1) {
              return "Lunes";
            }
            if (fecha.getDay() === 2) {
              return "Martes";
            }
            if (fecha.getDay() === 3) {
              return "Miércoles";
            }
            if (fecha.getDay() === 4) {
              return "Jueves";
            }
            if (fecha.getDay() === 5) {
              return "Viernes";
            }
            if (fecha.getDay() === 6) {
              return "Sábado";
            }
          } catch (error) {
            console.log(error);
            throw error;
          }
        })();
        formato += ", ";
        formato += fecha.getDate();
        formato += " de ";
        formato += (() => {
          try {
            if (fecha.getMonth() === 0) {
              return "Enero";
            }
            if (fecha.getMonth() === 1) {
              return "Febrero";
            }
            if (fecha.getMonth() === 2) {
              return "Marzo";
            }
            if (fecha.getMonth() === 3) {
              return "Abril";
            }
            if (fecha.getMonth() === 4) {
              return "Mayo";
            }
            if (fecha.getMonth() === 5) {
              return "Junio";
            }
            if (fecha.getMonth() === 6) {
              return "Julio";
            }
            if (fecha.getMonth() === 7) {
              return "Agosto";
            }
            if (fecha.getMonth() === 8) {
              return "Septiembre";
            }
            if (fecha.getMonth() === 9) {
              return "Octubre";
            }
            if (fecha.getMonth() === 10) {
              return "Noviembre";
            }
            if (fecha.getMonth() === 11) {
              return "Diciembre";
            }
          } catch (error) {
            console.log(error);
            throw error;
          }
        })();
        formato += " de ";
        formato += fecha.getFullYear();
        return formato;
      } catch (error) {
        console.log(error);
        throw error;
      }

    }
  },
  watch: {
    fecha_seleccionada(nuevo_valor) {
      try {
        const dias = [];
        const dia_1_del_mes = new Date(nuevo_valor);
        dia_1_del_mes.setDate(1);
        dia_1_del_mes.setHours(0);
        dia_1_del_mes.setMinutes(0);
        dia_1_del_mes.setSeconds(0);
        dia_1_del_mes.setMilliseconds(0);
        const dias_antes_de_entrar_en_el_mes = (() => {
          try {
            const dia_de_semana = dia_1_del_mes.getDay();
            if (dia_de_semana === 0) {
              return 6;
            }
            if (dia_de_semana === 1) {
              return 0;
            }
            if (dia_de_semana === 2) {
              return 1;
            }
            if (dia_de_semana === 3) {
              return 2;
            }
            if (dia_de_semana === 4) {
              return 3;
            }
            if (dia_de_semana === 5) {
              return 4;
            }
            if (dia_de_semana === 6) {
              return 5;
            }
          } catch (error) {
            console.log(error);
            throw error;
          }
        })();
        const celdas_vacias_anteriores = new Array(dias_antes_de_entrar_en_el_mes);
        const dia_final_del_mes = new Date(nuevo_valor);
        dia_final_del_mes.setMonth(dia_final_del_mes.getMonth() + 1);
        dia_final_del_mes.setDate(1);
        dia_final_del_mes.setDate(dia_final_del_mes.getDate() - 1);
        const numero_final_de_mes = dia_final_del_mes.getDate();
        let fila_actual = celdas_vacias_anteriores;
        for (let index = 1; index < numero_final_de_mes + 1; index++) {
          const nueva_fecha = new Date(dia_1_del_mes);
          nueva_fecha.setDate(index);
          fila_actual.push(nueva_fecha);
          if (nueva_fecha.getDay() === 0) {
            dias.push(fila_actual);
            fila_actual = [];
          }
        }
        if (fila_actual.length) {
          dias.push(fila_actual);
        }
        this.celdas_del_mes_actual = dias;
        if(typeof this.alCambiarValor === "function") {
          this.alCambiarValor(nuevo_valor, this);
        }
      } catch (error) {
        console.log(error);
        throw error;
      }

    }
  },
  mounted() {
    try {
      this.fecha_seleccionada = new Date();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
});
let trackerCounter = 0;

Vue.component("LswAgenda", {
  name: "LswAgenda",
  template: `<div class="lsw_agenda">
    <div class="flex_row">
        <div class="flex_100">
            <div class="calendar_viewer">
                <lsw-calendario ref="calendario"
                    :solo-fecha="true"
                    :al-cambiar-valor="v => loadDateTasks(v)" />
            </div>
        </div>
        <div class="flex_1 flex_column" style="padding:8px; padding-left: 0px; gap: 4px;">
            <div class="flex_1"><button class="width_100 nowrap" v-on:click="() => openInsertTaskDialog()">New task</button></div>
            <div class="flex_1"><button class="width_100 nowrap" v-on:click="() => goToToday()">Today?</button></div>
            <div class="flex_1"><button class="width_100 nowrap" v-on:click="() => goToToday()">Tomorrow?</button></div>
            <div class="flex_100"></div>
        </div>
    </div>
    <div class="no_tasks_message" v-if="isLoading">
        Please, wait a moment to fetch the data.
    </div>
    <div class="box_for_date_details" v-else-if="(!isLoading) && selectedDateTasksFormattedPerHour && selectedDateTasksFormattedPerHour.length">
        <div class="hour_table" v-for="franja, franjaIndex in selectedDateTasksFormattedPerHour" v-bind:key="'franja_horaria_' + franjaIndex">
            <div class="hour_lapse_separator" v-on:click="() => toggleHour(franja.hora)">
                {{ $lsw.timer.utils.formatHourFromMomento(franja) }} · <span class="hour_compromises">{{ $lsw.utils.pluralizar("compromiso", "compromisos", "%i %s", Object.keys(franja.tareas).length) }}</span>
            </div>
            <div class="hour_lapse_list" v-show="hiddenDateHours.indexOf(franja.hora) === -1">
                <template v-for="tarea, tareaIndex in franja.tareas">
                    <div class="hour_task_block" :class="{is_completed: tarea.estado === 'done', is_failed: tarea.estado === 'failed', is_pending: tarea.estado === 'pending'}" v-bind:key="'franja_horaria_' + franjaIndex + '_tarea_' + tareaIndex">
                        <div class="hour_task_pill pill">
                            <span class="hour_task_dragger pill_start">
                                ≡</span><span class="hour_task_name pill_middle">
                                {{ tarea.nombre }}</span><span class="hour_task_details_start pill_middle">
                                {{ $lsw.timer.utils.formatHourFromMomento(tarea, false) }}</span><span class="hour_task_details_duration pill_middle">
                                {{ tarea.duracion }}</span><span class="hour_task_editer pill_middle" v-on:click="() => openUpdateTaskDialog(tarea)">
                                ⚙</span><span class="hour_task_deleter pill_end" v-on:click="() => openDeleteTaskDialog(tarea)">
                                ❌</span>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
    <div class="no_tasks_message"
        v-else>
        There are no tasks assigned to this day.
    </div>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda.data");
    return {
      counter: 0,
      isLoading: false,
      selectedDate: undefined,
      selectedDateTasks: undefined,
      selectedDateTasksFormattedPerHour: undefined,
      hiddenDateHours: [],
    };
  },
  methods: {
    toggleHour(hourInt) {
      const pos = this.hiddenDateHours.indexOf(hourInt);
      if(pos === -1) {
        this.hiddenDateHours.push(hourInt);
      } else {
        this.hiddenDateHours.splice(pos, 1);
      }
    },
    async loadDateTasks(newDate) {
      this.$trace("lsw-agenda.methods.loadDateTasks");
      this.isLoading = true;
      console.log("Loading date tasks of: " + newDate);
      try {
        this.selectedDate = newDate;
        const selectedDate = this.selectedDate;
        const selectedDateTasks = await this.$lsw.database.selectMany("procedimiento", value => {
          const isSameYear = value.anio === selectedDate.getFullYear();
          const isSameMonth = value.mes === (selectedDate.getMonth()+1);
          const isSameDay = value.dia === selectedDate.getDate();
          const isAccepted = isSameYear && isSameMonth && isSameDay;
          console.log("isSameYear", isSameYear);
          console.log("isSameMonth", isSameMonth);
          console.log("isSameDay", isSameDay);
          console.log("isAccepted", isAccepted);
          console.log(isAccepted);
          return isAccepted;
        });
        console.log("selectedDate");
        console.log(selectedDate);
        console.log("selectedDateTasks");
        console.log(selectedDateTasks);
        this.selectedDateTasks = selectedDateTasks;
        this.propagateDateTasks();
      } catch (error) {
        console.log("Error loading date taskes:", error);
      } finally {
        setTimeout(() => this.isLoading = false, 100);
      }
    },
    groupTasksByHour(tareas = this.selectedDateTasks) {
      this.$trace("lsw-agenda.methods.groupTasksByHour");
      const mapaHoras = new Map();
      for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        const { hora, minuto } = tarea;
        if (!mapaHoras.has(hora)) {
          mapaHoras.set(hora, []);
        }
        mapaHoras.get(hora).push(tarea);
      }
      const resultado = [];
      for (const [hora, lista] of mapaHoras) {
        // Ordenar tareas por minuto
        for (let j = 1; j < lista.length; j++) {
          let k = j;
          while (k > 0 && lista[k - 1].minuto > lista[k].minuto) {
            [lista[k - 1], lista[k]] = [lista[k], lista[k - 1]];
            k--;
          }
        }
        resultado.push({ hora: Number(hora), tareas: lista });
      }
      for (let i = 1; i < resultado.length; i++) {
        let j = i;
        while (j > 0 && resultado[j - 1].hora > resultado[j].hora) {
          [resultado[j - 1], resultado[j]] = [resultado[j], resultado[j - 1]];
          j--;
        }
      }
      return resultado;
    },
    propagateDateTasks() {
      this.$trace("lsw-agenda.methods.propagateDateTasks");
      this.selectedDateTasksFormattedPerHour = this.groupTasksByHour();
    },
    goToToday() {
      this.$trace("lsw-agenda.methods.goToToday");
      // @TODO: 
    },
    async openInsertTaskDialog() {
      this.$trace("lsw-agenda.methods.openInsertTaskDialog");
      // @TODO: 
    },
    async openUpdateTaskDialog(tarea) {
      this.$trace("lsw-agenda.methods.openUpdateTaskDialog");
      // @TODO: 
      const data = await this.$dialogs.open({
        id: "agenda-viewer-update-task-" + this.$lsw.utils.getRandomString(5),
        title: "Update task information",
        template: `
          <div>
            <lsw-agenda-task-form :task="task" ref="taskForm" />
          </div>
        `,
        factory: {
          data: {
            task: tarea
          },
        }
      });
      console.log(data);
    },
    async openDeleteTaskDialog() {
      this.$trace("lsw-agenda.methods.openDeleteTaskDialog");
      // @TODO: 
      const data = await this.$dialogs.open({
        id: "agenda-viewer-delete-task-" + this.$lsw.utils.getRandomString(5),
        title: "Delete task confirmation",
        template: `
          <div>
            <p>Are you sure you want to cancel task deletion?</p>
          </div>
        `,
        acceptButton: {
          text: "OK",
          callback: (id) => {
            this.$dialogs.accept(id);
          },
        },
        cancelButton: {
          text: "Cancel",
          callback: (id) => {
            this.$dialogs.cancel(id);
          },
        }
      });
      console.log(data);
    },
  },
  watch: {
  },
  async mounted() {
    try {
      this.$trace("lsw-agenda.mounted");
      const selectedDate = this.$refs.calendario.getValue();
      this.loadDateTasks(selectedDate);
    } catch (error) {
      console.log(error);
    }
  }
});
});


