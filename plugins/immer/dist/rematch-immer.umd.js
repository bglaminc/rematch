!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.RematchImmer={})}(this,function(e){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r,n,o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f="undefined"!=typeof Symbol?Symbol("immer-nothing"):(o=!0,(n="immer-nothing")in(r={})?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,r),c="undefined"!=typeof Symbol?Symbol("immer-draftable"):"__$immer_draftable",s="undefined"!=typeof Symbol?Symbol("immer-state"):"__$immer_state";function l(e){return!!e&&!!e[s]}function d(e){if(!e||"object"!==(void 0===e?"undefined":i(e)))return!1;if(Array.isArray(e))return!0;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype||(!!e[c]||!!e.constructor[c])}var p=Object.assign||function(e,t){for(var r in t)g(t,r)&&(e[r]=t[r]);return e},h="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function y(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Array.isArray(e))return e.slice();var r=Object.create(Object.getPrototypeOf(e));return h(e).forEach(function(n){if(n!==s){var o=Object.getOwnPropertyDescriptor(e,n);if(o.get){if(!t)throw new Error("Immer drafts cannot have computed properties");o.value=o.get.call(e)}o.enumerable?r[n]=o.value:Object.defineProperty(r,n,{value:o.value,writable:!0,configurable:!0})}}),r}function v(e,t){if(Array.isArray(e))for(var r=0;r<e.length;r++)t(r,e[r],e);else h(e).forEach(function(r){return t(r,e[r],e)})}function b(e,t){return Object.getOwnPropertyDescriptor(e,t).enumerable}function g(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function m(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}var w={},O=[],j=function(){return O[O.length-1]};function P(e,t){var r=Array.isArray(e),n=z(e);v(n,function(t){!function(e,t,r){var n=w[t];n?n.enumerable=r:w[t]=n={configurable:!0,enumerable:r,get:function(){return function(e,t){k(e);var r=x(e)[t];if(!e.finalizing&&r===e.base[t]&&d(r))return S(e),e.copy[t]=P(r,e);return r}(this[s],t)},set:function(e){!function(e,t,r){if(k(e),e.assigned[t]=!0,!e.modified){if(m(x(e)[t],r))return;A(e),S(e)}e.copy[t]=r}(this[s],t,e)}};Object.defineProperty(e,t,n)}(n,t,r||b(e,t))});var o={scope:t?t.scope:j(),modified:!1,finalizing:!1,finalized:!1,assigned:{},parent:t,base:e,draft:n,copy:null,revoke:E,revoked:!1};return Object.defineProperty(n,s,{value:o,enumerable:!1,writable:!0}),o.scope.push(o),n}function E(){this.revoked=!0}function x(e){return e.copy||e.base}function A(e){e.modified||(e.modified=!0,e.parent&&A(e.parent))}function S(e){e.copy||(e.copy=z(e.base))}function z(e){var t=e&&e[s];if(t){t.finalizing=!0;var r=y(t.draft,!0);return t.finalizing=!1,r}return y(e)}function k(e){if(!0===e.revoked)throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+JSON.stringify(x(e)))}function I(e){for(var t=e.base,r=Object.keys(e.draft),n=r.length-1;n>=0;n--)if(void 0===t[r[n]]&&!g(t,r[n]))return!0;return r.length!==Object.keys(t).length}function _(e){var t=e.draft;if(t.length!==e.base.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}var R=Object.freeze({scopes:O,currentScope:j,willFinalize:function(e,t,r){var n=j();n.forEach(function(e){return e.finalizing=!0}),void 0!==e&&e!==t||(r&&function e(t){if(t&&"object"===(void 0===t?"undefined":i(t))){var r=t[s];if(r){var n=r.base,o=r.draft,a=r.assigned;if(Array.isArray(t)){if(_(r)){if(A(r),a.length=!0,o.length<n.length)for(var u=o.length;u<n.length;u++)a[u]=!1;else for(var f=n.length;f<o.length;f++)a[f]=!0;for(var c=0;c<o.length;c++)void 0===a[c]&&e(o[c])}}else Object.keys(o).forEach(function(t){void 0!==n[t]||g(n,t)?a[t]||e(o[t]):(a[t]=!0,A(r))}),Object.keys(n).forEach(function(e){void 0!==o[e]||g(o,e)||(a[e]=!1,A(r))})}}}(t),function(e){for(var t=e.length-1;t>=0;t--){var r=e[t];!1===r.modified&&(Array.isArray(r.base)?_(r)&&A(r):I(r)&&A(r))}}(n))},createDraft:P}),D=[],T=function(){return D[D.length-1]};function N(e,t){var r={scope:t?t.scope:T(),modified:!1,finalized:!1,assigned:{},parent:t,base:e,draft:null,drafts:{},copy:null,revoke:null},n=Array.isArray(e)?Proxy.revocable([r],F):Proxy.revocable(r,C),o=n.revoke,i=n.proxy;return r.draft=i,r.revoke=o,r.scope.push(r),i}var C={get:function(e,t){if(t===s)return e;var r=e.drafts;if(!e.modified&&g(r,t))return r[t];var n=M(e)[t];if(e.finalized||!d(n))return n;if(e.modified){if(n!==e.base[t])return n;r=e.copy}return r[t]=N(n,e)},has:function(e,t){return t in M(e)},ownKeys:function(e){return Reflect.ownKeys(M(e))},set:function(e,t,r){if(!e.modified){var n=r?m(e.base[t],r)||r===e.drafts[t]:m(e.base[t],r)&&t in e.base;if(n)return!0;U(e)}return e.assigned[t]=!0,e.copy[t]=r,!0},deleteProperty:function(e,t){(void 0!==e.base[t]||t in e.base)&&(e.assigned[t]=!1,U(e));e.copy&&delete e.copy[t];return!0},getOwnPropertyDescriptor:function(e,t){var r=M(e),n=Reflect.getOwnPropertyDescriptor(r,t);n&&(n.writable=!0,n.configurable=!Array.isArray(r)||"length"!==t);return n},defineProperty:function(){throw new Error("Object.defineProperty() cannot be used on an Immer draft")},getPrototypeOf:function(e){return Object.getPrototypeOf(e.base)},setPrototypeOf:function(){throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft")}},F={};function M(e){return e.copy||e.base}function U(e){e.modified||(e.modified=!0,e.copy=p(y(e.base),e.drafts),e.drafts=null,e.parent&&U(e.parent))}v(C,function(e,t){F[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),F.deleteProperty=function(e,t){if(isNaN(parseInt(t)))throw new Error("Immer only supports deleting array indices");return C.deleteProperty.call(this,e[0],t)},F.set=function(e,t,r){if("length"!==t&&isNaN(parseInt(t)))throw new Error("Immer only supports setting array indices and the 'length' property");return C.set.call(this,e[0],t,r)};var K=Object.freeze({scopes:D,currentScope:T,willFinalize:function(){},createDraft:N});function L(e,t,r,n){Array.isArray(e.base)?function(e,t,r,n){for(var o=e.base,i=e.copy,a=e.assigned,u=Math.min(o.length,i.length),f=0;f<u;f++)if(a[f]&&o[f]!==i[f]){var c=t.concat(f);r.push({op:"replace",path:c,value:i[f]}),n.push({op:"replace",path:c,value:o[f]})}if(u<i.length){for(var s=u;s<i.length;s++)r.push({op:"add",path:t.concat(s),value:i[s]});n.push({op:"replace",path:t.concat("length"),value:o.length})}else if(u<o.length){r.push({op:"replace",path:t.concat("length"),value:i.length});for(var l=u;l<o.length;l++)n.push({op:"add",path:t.concat(l),value:o[l]})}}(e,t,r,n):function(e,t,r,n){var o=e.base,i=e.copy;v(e.assigned,function(e,a){var u=o[e],f=i[e],c=a?e in o?"replace":"add":"remove";if(u!==f||"replace"!==c){var s=t.concat(e);r.push("remove"===c?{op:c,path:s}:{op:c,path:s,value:f}),n.push("add"===c?{op:"remove",path:s}:"remove"===c?{op:"add",path:s,value:u}:{op:"replace",path:s,value:u})}})}(e,t,r,n)}function Y(e,t){for(var r=0;r<t.length;r++){var n=t[r],o=n.path;if(0===o.length&&"replace"===n.op)e=n.value;else{for(var a=e,u=0;u<o.length-1;u++)if(!(a=a[o[u]])||"object"!==(void 0===a?"undefined":i(a)))throw new Error("Cannot apply patch, path doesn't resolve: "+o.join("/"));var f=o[o.length-1];switch(n.op){case"replace":case"add":a[f]=n.value;break;case"remove":if(Array.isArray(a)){if(f!==a.length-1)throw new Error("Only the last index of an array can be removed, index: "+f+", length: "+a.length);a.length-=1}else delete a[f];break;default:throw new Error("Unsupported patch operation: "+n.op)}}}return e}var $={useProxies:"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect,autoFreeze:"undefined"==typeof process&&"verifyMinified"===function(){}.name,onAssign:null,onDelete:null,onCopy:null},B=new(function(){function e(t){a(this,e),p(this,$,t),this.setUseProxies(this.useProxies),this.produce=this.produce.bind(this)}return u(e,[{key:"produce",value:function(e,t,r){var n=this;if("function"==typeof e&&"function"!=typeof t){var o=t;return t=e,function(){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return n.produce(arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,function(e){var n;return(n=t).call.apply(n,[e,e].concat(r))})}}if("function"!=typeof t)throw new Error("if first argument is not a function, the second argument to produce should be a function");if(void 0!==r&&"function"!=typeof r)throw new Error("the third argument of a producer should not be set or a function");var i=void 0;if(d(e)){this.scopes.push([]);var a=this.createDraft(e);try{i=t.call(a,a),this.willFinalize(i,a,!!r);var u=r&&[],c=r&&[];if(void 0===i||i===a)i=this.finalize(a,[],u,c);else{if(a[s].modified)throw new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.");d(i)&&(i=this.finalize(i)),r&&(u.push({op:"replace",path:[],value:i}),c.push({op:"replace",path:[],value:e}))}}finally{this.currentScope().forEach(function(e){return e.revoke()}),this.scopes.pop()}r&&r(u,c)}else if(void 0===(i=t(e)))return e;return i===f?void 0:i}},{key:"setAutoFreeze",value:function(e){this.autoFreeze=e}},{key:"setUseProxies",value:function(e){this.useProxies=e,p(this,e?K:R)}},{key:"applyPatches",value:function(e,t){return l(e)?Y(e,t):this.produce(e,function(e){return Y(e,t)})}},{key:"finalize",value:function(e,t,r,n){var o=this,i=e[s];if(!i)return Object.isFrozen(e)?e:this.finalizeTree(e);if(i.scope!==this.currentScope())return e;if(!i.modified)return i.base;if(!i.finalized){if(i.finalized=!0,this.finalizeTree(i.draft,t,r,n),this.onDelete)if(this.useProxies){var a=i.assigned;for(var u in a)a[u]||this.onDelete(i,u)}else{var f=i.copy;v(i.base,function(e){g(f,e)||o.onDelete(i,e)})}this.onCopy&&this.onCopy(i),this.autoFreeze&&1===this.scopes.length&&Object.freeze(i.copy),r&&L(i,t,r,n)}return i.copy}},{key:"finalizeTree",value:function(e,t,r,n){var o=this,i=e[s];i&&(this.useProxies||(i.finalizing=!0,i.copy=y(i.draft,!0),i.finalizing=!1),e=i.copy);var a=this.onAssign;return v(e,function u(f,c,s){if(c===s)throw Error("Immer forbids circular references");var p=!!i&&s===e;if(l(c)){if(c=r&&p&&!i.assigned[f]?o.finalize(c,t.concat(f),r,n):o.finalize(c),Array.isArray(s)||b(s,f)?s[f]=c:Object.defineProperty(s,f,{value:c}),p&&c===i.base[f])return}else{if(p&&m(c,i.base[f]))return;d(c)&&!Object.isFrozen(c)&&v(c,u)}p&&a&&a(i,f,c)}),e}}]),e}()),G=B.produce;B.setAutoFreeze.bind(B),B.setUseProxies.bind(B),B.applyPatches.bind(B);var H=function(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()),J={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")},W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function Q(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function V(e,t){return function(){return t(e.apply(this,arguments))}}function X(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}var Z,ee=Object.freeze({createStore:function e(t,r,n){var o;if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(e)(t,r)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var i=t,a=r,u=[],f=u,c=!1;function s(){f===u&&(f=u.slice())}function l(){if(c)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return a}function d(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(c)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return s(),f.push(e),function(){if(t){if(c)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,s();var r=f.indexOf(e);f.splice(r,1)}}}function p(e){if(!function(e){if("object"!==(void 0===e?"undefined":W(e))||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(c)throw new Error("Reducers may not dispatch actions.");try{c=!0,a=i(a,e)}finally{c=!1}for(var t=u=f,r=0;r<t.length;r++)(0,t[r])();return e}return p({type:J.INIT}),(o={dispatch:p,subscribe:d,getState:l,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");i=e,p({type:J.REPLACE})}})[H]=function(){var e,t=d;return(e={subscribe:function(e){if("object"!==(void 0===e?"undefined":W(e))||null===e)throw new TypeError("Expected the observer to be an object.");function r(){e.next&&e.next(l())}return r(),{unsubscribe:t(r)}}})[H]=function(){return this},e},o},combineReducers:function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];"function"==typeof e[o]&&(r[o]=e[o])}var i=Object.keys(r),a=void 0;try{!function(e){Object.keys(e).forEach(function(t){var r=e[t];if(void 0===r(void 0,{type:J.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+J.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(r)}catch(e){a=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(a)throw a;for(var n=!1,o={},u=0;u<i.length;u++){var f=i[u],c=e[f],s=(0,r[f])(c,t);if(void 0===s){var l=Q(f,t);throw new Error(l)}o[f]=s,n=n||s!==c}return n?o:e}},bindActionCreators:function(e,t){if("function"==typeof e)return V(e,t);if("object"!==(void 0===e?"undefined":W(e))||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":void 0===e?"undefined":W(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(e),n={},o=0;o<r.length;o++){var i=r[o],a=e[i];"function"==typeof a&&(n[i]=V(a,t))}return n},applyMiddleware:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=e.apply(void 0,n),a=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},u={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},f=t.map(function(e){return e(u)});return a=X.apply(void 0,f)(i.dispatch),q({},i,{dispatch:a})}}},compose:X,__DO_NOT_USE__ActionTypes:J}),te=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e,r){var n=t&&t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=n(G);function i(e){for(var t={},r=function(e,r){t[e]=function(e,t){return"object"==typeof e?o.default(e,function(e){var n=r(e,t);if("object"==typeof n)return n}):r(e,t)}},n=0,i=Object.entries(e);n<i.length;n++){var a=i[n];r(a[0],a[1])}return ee.combineReducers(t)}r.default=function(){return{config:{redux:{combineReducers:i}}}}}),re=(Z=te)&&Z.__esModule&&Object.prototype.hasOwnProperty.call(Z,"default")?Z.default:Z;e.default=re,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=rematch-immer.umd.js.map