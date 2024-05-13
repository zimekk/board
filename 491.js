/*! For license information please see 491.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[491],{48491:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(46382),o=n(11855);const u=(({hostname:e,protocol:t})=>`${t}//${e}:9001`)(new URL(`${window.location.href}`.replace(/^mqtt:\/\//,"ws://")));function l(){fetch("share/discover").then((e=>e.json())).then(console.info)}function a({url:e}){const[t,n]=(0,o.useState)([]);(0,o.useEffect)((()=>{const e=r.A.connect(u);return console.log({MQTT_URL:u}),e.on("connect",(()=>{e.subscribe("device",(e=>{})).subscribe("device/list",(e=>{}))})),e.on("message",((e,t)=>{switch(e){case"device":const e=JSON.parse(t.toString());n((t=>t.concat(e)));break;case"device/list":const r=JSON.parse(t.toString());n(r)}})),l(),()=>{e.end()}}),[]);const a=(0,o.useCallback)((({target:t})=>fetch("share/play",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({xml:t.value,url:e})}).then((e=>e.json())).then(console.info)),[e]),c=(0,o.useCallback)((e=>l()),[]);return o.createElement("div",null,o.createElement("h3",null,"devices"),o.createElement("button",{onClick:c},"discover"),o.createElement("table",null,o.createElement("tbody",null,o.createElement("tr",null,o.createElement("th",null,"host"),o.createElement("th",null,"name"),o.createElement("th",null,"xml"),o.createElement("th",null,"type"),o.createElement("th",null)),t.map((({host:t,name:n,xml:r,type:u},l)=>o.createElement("tr",{key:l},o.createElement("td",null,t),o.createElement("td",null,n),o.createElement("td",null,o.createElement("a",{href:r,target:"_blank"},r)),o.createElement("td",null,u),o.createElement("td",null,o.createElement("button",{disabled:""===e,value:r,onClick:a},"play"))))))),o.createElement("pre",null,JSON.stringify(t,null,2)))}function c(){const[e,t]=(0,o.useState)([]);return(0,o.useEffect)((()=>{fetch("share/networks").then((e=>e.json())).then(t)}),[]),o.createElement("div",null,o.createElement("h3",null,"networks"),o.createElement("table",null,o.createElement("tbody",null,o.createElement("tr",null,o.createElement("th",null,"address"),o.createElement("th",null,"family"),o.createElement("th",null,"mac")),e.map((({address:e,family:t,mac:n},r)=>o.createElement("tr",{key:r},o.createElement("td",null,o.createElement("a",{href:(({hash:t,pathname:n,port:r,protocol:o})=>`${o}//${e}:${r}${n}${t}`)(new URL(document.location.href))},e)),o.createElement("td",null,t),o.createElement("td",null,n)))))),o.createElement("pre",null,JSON.stringify(e,null,2)))}function s({url:e,setUrl:t}){const[n,r]=(0,o.useState)(["http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4"]);(0,o.useEffect)((()=>{fetch("share/list").then((e=>e.json())).then((e=>r((t=>t.concat(e.map((e=>(({origin:t})=>`${t}/api/audio/${encodeURIComponent(e)}`)(new URL(document.location.href)))))))))}),[]);const u=(0,o.useCallback)((({target:e})=>t(e.value)),[]),l=(0,o.useCallback)((e=>Promise.resolve(prompt("Url:")).then((e=>e&&(r((t=>t.concat(e))),t(e))))),[]);return o.createElement("div",null,o.createElement("h3",null,"media"),o.createElement("button",{onClick:l},"add"),o.createElement("ul",null,n.map(((t,n)=>o.createElement("li",{key:n},o.createElement("label",null,o.createElement("input",{type:"radio",value:t,onChange:u,checked:t===e}),o.createElement("span",null,t)))))),o.createElement("pre",null,JSON.stringify(n,null,2)))}function i(){const[e,t]=(0,o.useState)("");return o.createElement("section",null,o.createElement("h2",null,"Share"),o.createElement(a,{url:e}),o.createElement(s,{url:e,setUrl:t}),o.createElement(c,null))}},18430:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function E(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||d}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||d}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=E.prototype;var _=v.prototype=new b;_.constructor=v,y(_,E.prototype),_.isPureReactComponent=!0;var S=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},g={key:!0,ref:!0,__self:!0,__source:!0};function $(e,t,r){var o,u={},l=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(l=""+t.key),t)k.call(t,o)&&!g.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(1===c)u.children=r;else if(1<c){for(var s=Array(c),i=0;i<c;i++)s[i]=arguments[i+2];u.children=s}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:n,type:e,key:l,ref:a,props:u,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,u,l){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return l=l(c=e),e=""===u?"."+j(c,0):u,S(l)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),O(l,t,o,"",(function(e){return e}))):null!=l&&(C(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,o+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(R,"$&/")+"/")+e)),t.push(l)),1;if(c=0,u=""===u?".":u+":",S(e))for(var s=0;s<e.length;s++){var i=u+j(a=e[s],s);c+=O(a,t,o,i,l)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),s=0;!(a=e.next()).done;)c+=O(a=a.value,t,o,i=u+j(a,s++),l);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function x(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var U={current:null},I={transition:null},T={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};t.Children={map:x,forEach:function(e,t,n){x(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=E,t.Fragment=o,t.Profiler=l,t.PureComponent=v,t.StrictMode=u,t.Suspense=i,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),u=e.key,l=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,a=w.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)k.call(t,s)&&!g.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){c=Array(s);for(var i=0;i<s;i++)c[i]=arguments[i+2];o.children=c}return{$$typeof:n,type:e.type,key:u,ref:l,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=$,t.createFactory=function(e){var t=$.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return U.current.useCallback(e,t)},t.useContext=function(e){return U.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return U.current.useDeferredValue(e)},t.useEffect=function(e,t){return U.current.useEffect(e,t)},t.useId=function(){return U.current.useId()},t.useImperativeHandle=function(e,t,n){return U.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return U.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return U.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return U.current.useMemo(e,t)},t.useReducer=function(e,t,n){return U.current.useReducer(e,t,n)},t.useRef=function(e){return U.current.useRef(e)},t.useState=function(e){return U.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return U.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return U.current.useTransition()},t.version="18.2.0"},11855:(e,t,n)=>{e.exports=n(18430)}}]);
//# sourceMappingURL=491.js.map