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
    const runQueue = async function (queue, errorHandler) {
        Iterating_tests:
        for (const test of queue) {
            try {
                await test();
            } catch (err) {
                if (errorHandler) {
                    try {
                        await errorHandler(err);
                    } catch (stopExecutionError) {
                        console.error("Execution halted due to:", stopExecutionError);
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
        const state = { finished: false, onError: null, tests: {}, onlyActivated: false };
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
        const failTest = (label, error) => {
            Object.assign(state.tests[label], { state: "failed", error, took_milliseconds: (new Date()) - state.tests[label].started_at });
            return updateUI("fail", 1, state.tests[label], label);
        };
        const it = (label, fn, type = "normal") => {
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
                    const result = await fn.call(context);
                    passTest(label, result);
                } catch (err) {
                    failTest(label, err);
                    throw err; // Re-lanzar el error para que runQueue lo capture
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

        it.onError = (callback) => {
            state.onError = (error) => {
                callback(error); // Configurar el manejador de errores
                return error;
            };
        };

        const context = { it };

        callback.call(context, context.it);
        updateUI("begin", 0, 0, description);

        return runQueue(queue, state.onError).finally(() => {
            updateUI("finish");
        });
    };

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

    /*
    // Crea la base de datos con el esquema final
    static createDatabase(dbName, storeDefinitions) {
      this.trace("Browsie.createDatabase", arguments);
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);
        request.onsuccess = () => {
          request.result.close();
          resolve(request.result);
        };
        request.onerror = (error) => reject(error);

        // Establecemos el esquema final
        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          const storeKeys = Object.keys(storeDefinitions);
          storeKeys.forEach(storeKey => {
            const store = storeDefinitions[storeKey];
            if (!db.objectStoreNames.contains(storeKey)) {
              const objectStore = db.createObjectStore(storeKey, {
                keyPath: "id",
                autoIncrement: true,
              });
              for (let storeIndex of store) {
                const storeName = storeIndex.replace(/^\!/g, "");
                objectStore.createIndex(storeName, storeName, {
                  unique: storeIndex.startsWith("!")
                });
              }
            }
          });
        };
      });
    }
    //*/

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

  return Browsie;

});
const Importer = class {

  static create(...args) {
    return new this(...args);
  }

  $trace(method, args) {
    if(this.options.trace) {
      const args_resumen = Array.from(args).map((it, index) => {
        return (index+1) + "=" + typeof it;
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
    if(clue) {
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
      if(typeof total !== "undefined") {
        this.modules_total = total;
      }
      if(!this.options.update_ui) {
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
      if(!this.options.update_ui) {
        return;
      }
      const htmlTrace = document.querySelector(this.id_trace);
      if(htmlTrace.textContent.length) {
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
      console.log(`[OK][Importer] Loaded «${moduleId}» as «${moduleType}» ${this.$getMillisecondsOfLife()}`);
      ++this.modules_loaded;
      if(!this.options.update_ui) {
        return;
      }
      const htmlLoaded = document.querySelector(this.id_loaded);
      htmlLoaded.textContent = this.modules_loaded;
      this.$prependTrace(`Loaded «${moduleType}» from «${moduleId}»`);
      this.$updateLoaderBar();
      if((this.modules_loaded+1) >= this.modules_total) {
        this.$removeIntersitial();
      }
    } catch (error) {
      if(this.is_loaded) {
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
      if(!this.options.update_ui) {
        return;
      }
      const htmlLoaderBar = document.querySelector(this.id_loader_bar);
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
      if(this.is_loaded) {
        return;
      }
      this.is_loaded = true;
      if(!this.options.update_ui) {
        return;
      }
      if(this.options.update_ui_minimum_milliseconds) {
        clearTimeout(this.options.update_ui_minimum_milliseconds_timeout_id);
        this.update_ui_minimum_milliseconds_timeout_id = setTimeout(() => {
          const intersitial = document.querySelector(this.id);
          if(intersitial) {
            intersitial.remove();
          } else {
            console.log("Calling to $removeIntersitial when there is not such");
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
    while(out.length < spaces) {
      out = charc + out;
    }
    return out;
  }

  $breakLines(code) {
    const lines = code.split(/(\r\n|\r|\n)/g).filter(l => {
      return l !== "\n" && l !== "";
    });
    const maxDigits = (lines.length + "").length +1;
    let out = "";
    for(let index=0; index<lines.length; index++) {
      const line = lines[index];
      out += this.$padLeft(index+1, maxDigits, " ");
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
          if(mode === "extend") {
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
        peg$c9 = function(fecha, hora) {
              delete fecha.tipo;
              delete hora.tipo;
              return { tipo: "FechaHora", ...fecha, ...hora };
            },
        peg$c10 = "/",
        peg$c11 = peg$literalExpectation("/", false),
        peg$c12 = function(anio, mes, dia) {
              return { tipo: "SoloFecha", anio, mes, dia };
            },
        peg$c13 = ":",
        peg$c14 = peg$literalExpectation(":", false),
        peg$c15 = ".",
        peg$c16 = peg$literalExpectation(".", false),
        peg$c17 = function(hora, minuto, segundo, milisegundo) {
              return { tipo: "Hora", hora, minuto, segundo, milisegundo };
            },
        peg$c18 = function(hora, minuto, segundo) {
              return { tipo: "Hora", hora, minuto, segundo };
            },
        peg$c19 = function(hora, minuto) {
              return { tipo: "Hora", hora, minuto };
            },
        peg$c20 = function(partes) {
              return { tipo: "Duracion", ...recomponer_objeto(partes) };
            },
        peg$c21 = function(valor, unidad) {
              return { valor, unidad };
            },
        peg$c22 = "y",
        peg$c23 = peg$literalExpectation("y", false),
        peg$c24 = function() { return "anios"; },
        peg$c25 = "mon",
        peg$c26 = peg$literalExpectation("mon", false),
        peg$c27 = function() { return "meses"; },
        peg$c28 = "d",
        peg$c29 = peg$literalExpectation("d", false),
        peg$c30 = function() { return "dias"; },
        peg$c31 = "h",
        peg$c32 = peg$literalExpectation("h", false),
        peg$c33 = function() { return "horas"; },
        peg$c34 = "min",
        peg$c35 = peg$literalExpectation("min", false),
        peg$c36 = function() { return "minutos"; },
        peg$c37 = "s",
        peg$c38 = peg$literalExpectation("s", false),
        peg$c39 = function() { return "segundos"; },
        peg$c40 = "ms",
        peg$c41 = peg$literalExpectation("ms", false),
        peg$c42 = function() { return "milisegundos"; },
        peg$c43 = /^[0-9]/,
        peg$c44 = peg$classExpectation([["0", "9"]], false, false),
        peg$c45 = function() { return parseInt(text(), 10); },
        peg$c46 = /^[0-1]/,
        peg$c47 = peg$classExpectation([["0", "1"]], false, false),
        peg$c48 = /^[0-3]/,
        peg$c49 = peg$classExpectation([["0", "3"]], false, false),
        peg$c50 = /^[0-2]/,
        peg$c51 = peg$classExpectation([["0", "2"]], false, false),
        peg$c52 = /^[0-5]/,
        peg$c53 = peg$classExpectation([["0", "5"]], false, false),
        peg$c54 = " ",
        peg$c55 = peg$literalExpectation(" ", false),
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
        if (s2 !== peg$FAILED) {
          s3 = peg$parseHora();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c9(s1, s3);
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
          s2 = peg$c10;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c11); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseMes();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
              s4 = peg$c10;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c11); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseDia();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c12(s1, s3, s5);
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
          s2 = peg$c13;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c14); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseMinuto();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 58) {
              s4 = peg$c13;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c14); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseSegundo();
              if (s5 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                  s6 = peg$c15;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c16); }
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseMilisegundo();
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c17(s1, s3, s5, s7);
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
            s2 = peg$c13;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseMinuto();
            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 58) {
                s4 = peg$c13;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c14); }
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parseSegundo();
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c18(s1, s3, s5);
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
              s2 = peg$c13;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c14); }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$parseMinuto();
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c19(s1, s3);
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
        s1 = peg$c20(s1);
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
            s1 = peg$c21(s2, s3);
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
        s1 = peg$c22;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c24();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 3) === peg$c25) {
          s1 = peg$c25;
          peg$currPos += 3;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c26); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c27();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 100) {
            s1 = peg$c28;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c29); }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c30();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 104) {
              s1 = peg$c31;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c32); }
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c33();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 3) === peg$c34) {
                s1 = peg$c34;
                peg$currPos += 3;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c35); }
              }
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c36();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 115) {
                  s1 = peg$c37;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c38); }
                }
                if (s1 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c39();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  if (input.substr(peg$currPos, 2) === peg$c40) {
                    s1 = peg$c40;
                    peg$currPos += 2;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c41); }
                  }
                  if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c42();
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
      if (peg$c43.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c43.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c44); }
        }
        if (s2 !== peg$FAILED) {
          if (peg$c43.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c44); }
          }
          if (s3 !== peg$FAILED) {
            if (peg$c43.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c44); }
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c45();
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
      if (peg$c46.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c47); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c43.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c44); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c45();
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
      if (peg$c48.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c43.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c44); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c45();
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
      if (peg$c50.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c51); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c43.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c44); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c45();
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
      if (peg$c52.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c53); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c43.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c44); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c45();
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
      if (peg$c52.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c53); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c43.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c44); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c45();
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
      if (peg$c43.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c43.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c44); }
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          if (peg$c43.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c44); }
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c45();
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
      if (peg$c43.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c43.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c44); }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c45();
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 32) {
        s0 = peg$c54;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c55); }
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
  
  return {
    parser: Timeformat_parser
  };
  
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

  return LswUtils;
});
Vue.directive("descriptor", {
  bind(el, binding) {
      const resolveClasses = key => {
          const resolved = window.stylingDescriptor[key];
          if (!resolved) return key;
          return resolved.map(subKey => resolveClasses(subKey)).flat();
      };
      const descriptorKeys = (binding.value || el.getAttribute("descriptor")).split(" ");
      const descriptorClasses = descriptorKeys.map(key => resolveClasses(key)).flat();
      descriptorClasses.forEach(cls => el.classList.add(cls));
  }
});
Vue.directive("focus", {
  inserted: function(el) {
    el.focus();
  }
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
    <div style="max-width: 200px;">
      <div class="chivato_de_fecha">{{ obtener_fecha_formateada(fecha_seleccionada) }}</div>
      <div class="chivato_de_fecha">a las {{ espaciar_izquierda(hora_seleccionada, 2) }}:{{ espaciar_izquierda(minuto_seleccionado, 2) }}:{{ espaciar_izquierda(segundo_seleccionado, 2) }}.{{ espaciar_izquierda(milisegundo_seleccionado, 3) }}</div>
      <table class="tabla_de_calendario">
        <tbody>
          <tr>
            <td>
              <button class="boton_de_mover_mes" v-on:click="ir_a_mes_anterior"> ◀ </button>
            </td>
            <td>
              <button class="boton_de_mover_mes" v-on:click="ir_a_mes_siguiente"> ▶ </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="tabla_de_calendario">
        <tbody>
          <tr v-for="semana, semana_index in celdas_del_mes_actual" v-bind:key="'semana-' + semana_index">
            <td v-for="dia, dia_index in semana" v-bind:key="'dia-' + dia_index">
              <span v-if="dia">
                <button class="boton_de_calendario" :class="{active: dia.getDate() === fecha_seleccionada.getDate()}" v-on:click="() => seleccionar_dia(dia)">{{ dia.getDate() }}</button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="tabla_de_calendario" v-if="!soloFecha">
        <tbody>
          <tr>
            <td>
              <button class="boton_de_calendario" v-on:click="agregar_hora"> ▲ </button>
            </td>
            <td>
              <button class="boton_de_calendario" v-on:click="agregar_minuto"> ▲ </button>
            </td>
            <td>
              <button class="boton_de_calendario" v-on:click="agregar_segundo"> ▲ </button>
            </td>
          </tr>
          <tr>
            <td>
              <table>
                <tr>
                  <td><input class="entrada_de_calendario" type="text" v-model="hora_seleccionada" /></td>
                  <td>:</td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td><input class="entrada_de_calendario" type="text" v-model="minuto_seleccionado" /></td>
                  <td>:</td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td><input class="entrada_de_calendario" type="text" v-model="segundo_seleccionado" /></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <button class="boton_de_calendario" v-on:click="quitar_hora"> ▼ </button>
            </td>
            <td>
              <button class="boton_de_calendario" v-on:click="quitar_minuto"> ▼ </button>
            </td>
            <td>
              <button class="boton_de_calendario" v-on:click="quitar_segundo"> ▼ </button>
            </td>
          </tr>
          <tr>
            <td colspan="100">
              <input class="entrada_de_calendario" type="text" v-model="milisegundo_seleccionado" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  props: {
    soloFecha: {
      type: Boolean,
      default: false
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
});


