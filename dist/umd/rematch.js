!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.Rematch={})}(this,function(e){"use strict"
var l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
function o(i,a,c,u){return new(c||(c=Promise))(function(e,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function n(e){try{o(u.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new c(function(e){e(t.value)}).then(r,n)}o((u=u.apply(i,a||[])).next())})}function i(r,n){var o,i,a,e,c={label:0,sent:function(){if(1&a[0])throw a[1]
return a[1]},trys:[],ops:[]}
return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e
function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.")
for(;c;)try{if(o=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a
switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t
break
case 4:return c.label++,{value:t[1],done:!1}
case 5:c.label++,i=t[1],t=[0]
continue
case 7:t=c.ops.pop(),c.trys.pop()
continue
default:if(!(a=0<(a=c.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){c=0
continue}if(3===t[0]&&(!a||a[0]<t[1]&&t[1]<a[3])){c.label=t[1]
break}if(6===t[0]&&c.label<a[1]){c.label=a[1],a=t
break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(t)
break}a[2]&&c.ops.pop(),c.trys.pop()
continue}t=n.call(r,c)}catch(e){t=[6,e],i=0}finally{o=a=0}if(5&t[0])throw t[1]
return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}var t,a=function(e){},r={exposed:{storeDispatch:function(e,t){console.warn("Warning: store not yet loaded")},storeGetState:function(){console.warn("Warning: store not yet loaded")},dispatch:function(e){return this.storeDispatch(e)},createDispatcher:function(r,n){var e=this
return function(payload,meta){return o(e,void 0,void 0,function(){var t
return i(this,function(e){return t={type:r+"/"+n},void 0!==payload&&(t.payload=payload),void 0!==meta&&(t.meta=meta),[2,this.dispatch(t)]})})}}},onStoreCreated:function(e){return this.storeDispatch=e.dispatch,this.storeGetState=e.getState,{dispatch:this.dispatch}},onModel:function(e){if(this.dispatch[e.name]={},e.reducers)for(var t=0,r=Object.keys(e.reducers);t<r.length;t++){var n=r[t]
this.validate([[!!n.match(/\/.+\//),"Invalid reducer name ("+e.name+"/"+n+")"],["function"!=typeof e.reducers[n],"Invalid reducer ("+e.name+"/"+n+"). Must be a function"]]),this.dispatch[e.name][n]=this.createDispatcher.call(this,e.name,n)}}},n={exposed:{effects:{}},onModel:function(e){if(e.effects)for(var t="function"==typeof e.effects?e.effects(this.dispatch):e.effects,r=0,n=Object.keys(t);r<n.length;r++){var o=n[r]
this.validate([[!!o.match(/\//),"Invalid effect name ("+e.name+"/"+o+")"],["function"!=typeof t[o],"Invalid effect ("+e.name+"/"+o+"). Must be a function"]]),this.effects[e.name+"/"+o]=t[o].bind(this.dispatch[e.name]),this.dispatch[e.name][o]=this.createDispatcher.call(this,e.name,o),this.dispatch[e.name][o].isEffect=!0}},middleware:function(n){var e=this
return function(r){return function(t){return o(e,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return t.type in this.effects?[4,r(t)]:[3,2]
case 1:return e.sent(),[2,this.effects[t.type](t.payload,n.getState(),t.meta)]
case 2:return[2,r(t)]}})})}}}}
t="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()
var c,u,h=("function"==typeof(u=t.Symbol)?u.observable?c=u.observable:(c=u("observable"),u.observable=c):c="@@observable",c),p={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")},y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}
function v(e,t,r){var n
if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw Error("Expected the enhancer to be a function.")
return r(v)(e,t)}if("function"!=typeof e)throw Error("Expected the reducer to be a function.")
var o=e,i=t,a=[],c=a,u=!1
function s(){c===a&&(c=a.slice())}function d(){if(u)throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.")
return i}function f(t){if("function"!=typeof t)throw Error("Expected the listener to be a function.")
if(u)throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.")
var r=!0
return s(),c.push(t),function(){if(r){if(u)throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.")
r=!1,s()
var e=c.indexOf(t)
c.splice(e,1)}}}function l(e){if(!function(e){if("object"!==(void 0===e?"undefined":y(e))||null===e)return!1
for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t)
return Object.getPrototypeOf(e)===t}(e))throw Error("Actions must be plain objects. Use custom middleware for async actions.")
if(void 0===e.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')
if(u)throw Error("Reducers may not dispatch actions.")
try{u=!0,i=o(i,e)}finally{u=!1}for(var t=a=c,r=0;r<t.length;r++){(0,t[r])()}return e}return l({type:p.INIT}),(n={dispatch:l,subscribe:f,getState:d,replaceReducer:function(e){if("function"!=typeof e)throw Error("Expected the nextReducer to be a function.")
o=e,l({type:p.REPLACE})}})[h]=function(){var e,r=f
return(e={subscribe:function(e){if("object"!==(void 0===e?"undefined":y(e))||null===e)throw new TypeError("Expected the observer to be an object.")
function t(){e.next&&e.next(d())}return t(),{unsubscribe:r(t)}}})[h]=function(){return this},e},n}function b(e){for(var t=Object.keys(e),f={},r=0;r<t.length;r++){var n=t[r]
"function"==typeof e[n]&&(f[n]=e[n])}var o,l=Object.keys(f),h=void 0
try{Object.keys(o=f).forEach(function(e){var t=o[e]
if(void 0===t(void 0,{type:p.INIT}))throw Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.")
if(void 0===t(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+p.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}catch(e){h=e}return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1]
if(h)throw h
for(var r,n,o=!1,i={},a=0;a<l.length;a++){var c=l[a],u=e[c],s=(0,f[c])(u,t)
if(void 0===s){var d=(void 0,"Given "+((n=(r=t)&&r.type)&&'action "'+n+'"'||"an action")+', reducer "'+c+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.')
throw Error(d)}i[c]=s,o=o||s!==u}return o?i:e}}function d(e,t){return function(){return t(e.apply(this,arguments))}}function f(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function m(){for(var e=arguments.length,u=Array(e),t=0;t<e;t++)u[t]=arguments[t]
return function(c){return function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
var n=c.apply(void 0,t),o=function(){throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:n.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=u.map(function(e){return e(i)})
return o=f.apply(void 0,a)(n.dispatch),s({},n,{dispatch:o})}}}var g=Object.freeze({createStore:v,combineReducers:b,bindActionCreators:function(e,t){if("function"==typeof e)return d(e,t)
if("object"!==(void 0===e?"undefined":y(e))||null===e)throw Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":void 0===e?"undefined":y(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?')
for(var r=Object.keys(e),n={},o=0;o<r.length;o++){var i=r[o],a=e[i]
"function"==typeof a&&(n[i]=d(a,t))}return n},applyMiddleware:m,compose:f,__DO_NOT_USE__ActionTypes:p}),w=function(e){void 0===e&&(e={})
var t=e.disabled,r=function(e,t){var r={}
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r}(e,["disabled"])
return!t&&"object"==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(r):f}
var x=[r,n],O=function(){function e(e){var t=this
this.plugins=[],this.config=e,this.pluginFactory={config:e,validate:a,create:function(e){e.onInit&&e.onInit.call(this)
var t={}
if(e.exposed)for(var r=0,n=Object.keys(e.exposed);r<n.length;r++){var o=n[r]
this[o]="function"==typeof e.exposed[o]?e.exposed[o].bind(this):Object.create(e.exposed[o])}for(var i=0,a=["onModel","middleware","onStoreCreated"];i<a.length;i++){var c=a[i]
e[c]&&(t[c]=e[c].bind(this))}return t}}
for(var r=0,n=x.concat(this.config.plugins);r<n.length;r++){this.plugins.push(this.pluginFactory.create(n[r]))}this.forEachPlugin("middleware",function(e){t.config.redux.middlewares.push(e)})}return e.prototype.forEachPlugin=function(e,t){for(var r=0,n=this.plugins;r<n.length;r++){var o=n[r]
o[e]&&t(o[e])}},e.prototype.getModels=function(t){return Object.keys(t).map(function(e){return l({name:e},t[e],{reducers:t[e].reducers||{}})})},e.prototype.addModel=function(t){this.forEachPlugin("onModel",function(e){return e(t)})},e.prototype.init=function(){var t=this
this.models=this.getModels(this.config.models)
for(var e=0,r=this.models;e<r.length;e++){this.addModel(r[e])}var n=function(e){var u=this,t=e.redux,r=e.models,n=t.combineReducers||b,o=t.createStore||v,i=void 0!==t.initialState?t.initialState:{}
this.reducers=t.reducers,this.mergeReducers=function(e){return void 0===e&&(e={}),u.reducers=l({},u.reducers,e),Object.keys(u.reducers).length?n(u.reducers):function(e){return e}},this.createModelReducer=function(r){for(var n=r.baseReducer,o={},e=0,t=Object.keys(r.reducers||{});e<t.length;e++){var i=t[e],a=i.includes("/")?i:r.name+"/"+i
o[a]=r.reducers[i]}var c=function(e,t){return void 0===e&&(e=r.state),"function"==typeof o[t.type]?o[t.type](e,t.payload,t.meta):e}
u.reducers[r.name]=n?function(e,t){return c(n(e,t),t)}:c}
for(var a=0,c=r;a<c.length;a++)this.createModelReducer(c[a])
this.createRootReducer=function(r){void 0===r&&(r={})
var n=u.mergeReducers()
return Object.keys(r).length?function(e,t){return n(r[t.type]?(0,r[t.type])(e,t):e,t)}:n}
var s=this.createRootReducer(t.rootReducers),d=m.apply(g,t.middlewares),f=w(t.devtoolOptions).apply(void 0,t.enhancers.concat([d]))
return this.store=o(s,i,f),this}.call(this,{redux:this.config.redux,models:this.models}),o=l({name:this.config.name},n.store,{model:function(e){t.addModel(e),n.mergeReducers(n.createModelReducer(e)),n.store.replaceReducer(n.createRootReducer(t.config.redux.rootReducers)),n.store.dispatch({type:"@@redux/REPLACE "})}})
return this.forEachPlugin("onStoreCreated",function(e){var t=e(o)
t&&Object.keys(t||{}).forEach(function(e){o[e]=t[e]})}),o},e}(),E=function(e){console.warn(e)},S=function(e,t){return t?l({},t,e||{}):e||{}}
var j=0,R=function(e){void 0===e&&(e={})
var t=e.name||""+j
j+=1
var r=function(e){for(var t=l({name:e.name,models:{},plugins:[]},e,{redux:l({reducers:{},rootReducers:{},enhancers:[],middlewares:[]},e.redux,{devtoolOptions:l({name:e.name},e.redux&&e.redux.devtoolOptions?e.redux.devtoolOptions:{})})}),r=0,n=t.plugins;r<n.length;r++){var o=n[r]
if(o.config){var i=S(t.models,o.config.models)
t.models=i,t.plugins=t.plugins.concat(o.config.plugins||[]),o.config.redux&&(t.redux.initialState=S(t.redux.initialState,o.config.redux.initialState),t.redux.reducers=S(t.redux.reducers,o.config.redux.reducers),t.redux.rootReducers=S(t.redux.rootReducers,o.config.redux.reducers),t.redux.enhancers=t.redux.enhancers.concat(o.config.redux.enhancers||[]),t.redux.middlewares=t.redux.middlewares.concat(o.config.redux.middlewares||[]),t.redux.combineReducers=t.redux.combineReducers||o.config.redux.combineReducers,t.redux.createStore=t.redux.createStore||o.config.redux.createStore)}}return t}(l({},e,{name:t}))
return new O(r).init()},_={init:R}
e.getState=function(){E("global getState has been removed in @rematch/core 1.0.0-beta.3.\n\tSee https://github.com/rematch/rematch/blob/master/CHANGELOG.md#100-beta3---2018-06-23 for details.\n\tFor a quick fix, import and use store.getState.")},e.dispatch=function(){E("global dispatch has been removed in @rematch/core 1.0.0-beta.3.\n\tSee https://github.com/rematch/rematch/blob/master/CHANGELOG.md#100-beta3---2018-06-23 for details.\n\tFor a quick fix, import and use store.dispatch.")},e.createModel=function(e){return e},e.init=R,e.default=_,Object.defineProperty(e,"__esModule",{value:!0})})
//# sourceMappingURL=rematch.js.map
