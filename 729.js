(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[729],{6729:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var r=n(22155),o=n(27668),s=n(5821),a=n(72579);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function i(){const e="from-webrtc-remote-control";return{isConnectionFromRemote:t=>t.metadata===e,connMetadata:e}}function l({sessionStorageKey:e,humanErrors:t}={}){const n=function({mapping:e,withTechicalErrorMessage:t}={mapping:{},withTechicalErrorMessage:!0}){const n=c({"browser-incompatible":"Your browser doesn't support WebRTC features, please try with a recent browser.",disconnected:"You are disconnected and can't make any more peer connection, please reload.",network:"It seems you're experimenting some network problems.","peer-unavailable":"The peer you were connected to seems to have lost connection, try to reload it.","server-error":"An error occured on the signaling server. Sorry, try to come back later.",default:e=>"An error occured"+(e.type?` - type: ${e.type}`:"")},e);return function(e){const r=n[e.type]||("function"==typeof n.default?n.default(e):n.default);return r&&e.message&&t?`${r} (${e.message})`:r}}(t),{isConnectionFromRemote:r}=i(),{getPeerId:o,setPeerIdToSessionStorage:s}=function(e="webrtc-remote-control-peer-id"){return{getPeerId:()=>sessionStorage.getItem(e),setPeerIdToSessionStorage(t){sessionStorage.setItem(e,t)}}}(e);return{humanizeError:n,isConnectionFromRemote:r,getPeerId:o,setPeerIdToSessionStorage:s}}var u={__proto__:null,default:function({humanizeError:e,isConnectionFromRemote:t,getPeerId:n,setPeerIdToSessionStorage:r}){return{humanizeError:e,isConnectionFromRemote:t,getPeerId:n,bindConnection:e=>new Promise((n=>{const o=new a,s=new Map,c={sendTo(e,t){const n=s.get(e);return n?n.send(t):null},sendAll(e){[...s.values()].forEach((t=>{t.send(e)}))},on:o.on.bind(o),off:o.off.bind(o)};e.on("open",(e=>{r(e),n(c)})),e.on("connection",(e=>{t(e)&&(s.set(e.peer,e),e.on("open",(()=>{o.emit("remote.connect",{id:e.peer}),console.log("connections",s)})),e.on("data",(t=>{o.emit("data",{id:e.peer,from:"remote"},t)})),e.on("close",(()=>{s.delete(e.peer),o.emit("remote.disconnect",{id:e.peer}),console.log("connections",s)})))}))}))}},prepareUtils:l},m={__proto__:null,default:function({humanizeError:e,getPeerId:t,setPeerIdToSessionStorage:n}){return{humanizeError:e,getPeerId:t,bindConnection:(e,t)=>new Promise((r=>{let o=null;const s=new a,c={send(e){o?o.send(e):console.warning("You called `send` with no connection")},on:s.on.bind(s),off:s.off.bind(s)},l=n=>{o=null,o=function(e,t,n,r){const{connMetadata:o}=i(),s=e.connect(t,{serialization:"json",metadata:o});return s.on("open",(()=>{"function"==typeof r&&r()})),s.on("data",(e=>{n.emit("data",{from:"master"},e)})),s}(e,t,s,n),o.on("close",(()=>{s.emit("remote.disconnect",{id:e.id}),l((()=>{s.emit("remote.reconnect",{id:e.id})}))}))};e.on("open",(e=>{n(e),l((()=>r(c))),o.on("error",(e=>{console.log("conn.error",e)})),window.addEventListener("beforeunload",(()=>{o&&o.disconnect&&o.disconnect()}))}))}))}},prepareUtils:l};const d=(0,r.createContext)();function p({children:e,sessionStorageKey:t,humanErrors:n,mode:o,masterPeerId:s,init:a}){const c=["master","remote"];if(!c.includes(o))throw new Error(`Unsupported "${o}" mode. Only ${c.map((e=>`"${e}"`)).join(", ")} accepted.`);if("master"===o&&s)throw console.log(typeof s),new Error(`\`masterPeerId\` prop not allowed in "master" mode - "${s}" was passed.`);if("remote"===o&&!s)throw new Error('`masterPeerId` prop required in "remote" mode.');const i=l({sessionStorageKey:t,humanErrors:n}),p=(0,r.useRef)({peer:null,promise:null,mode:o,masterPeerId:s});return(0,r.useEffect)((()=>(p.current.mode=o,p.current.humanizeError=i.humanizeError,"master"===o&&(p.current.isConnectionFromRemote=i.isConnectionFromRemote),p.current.peer=a({humanizeError:i.humanizeError,getPeerId:i.getPeerId,isConnectionFromRemote:"master"===o?i.isConnectionFromRemote:void 0}),p.current.promise=("master"===o?u:m).default(i).bindConnection(p.current.peer,m?s:void 0),p.current.promise.then((()=>{})),()=>{p.current&&p.current.peer.disconnect()})),[o,s,a,i]),r.createElement(d.Provider,{value:p.current},e)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function h(){const[e,t]=(0,r.useState)(!1),[,n]=(0,r.useState)(!1),o=(0,r.useContext)(d),s=(0,r.useRef)(null);return(0,r.useEffect)((()=>{Promise.resolve().then((()=>{var e;n(!0),null==o||null==(e=o.promise)||e.then((e=>{s.current=e,t(!0)}))}))}),[]),f({ready:e,api:s.current},o)}function g({data:e}){return r.createElement(r.Fragment,null,"ErrorsDisplay",r.createElement("pre",null,JSON.stringify(e,null,2)))}function y({count:e}){return r.createElement(r.Fragment,null,"CounterDisplay",r.createElement("pre",null,JSON.stringify(e,null,2)))}function E({data:e,onPing:t,onPingAll:n}){const o=(0,r.useRef)(null),s=(0,r.useCallback)((()=>{n&&n()}),[n]),a=(0,r.useCallback)((e=>{t&&t(e.detail.id)}),[t]);return(0,r.useEffect)((()=>{const e=o?.current;return e&&(e.addEventListener("pingAll",s),e.addEventListener("ping",a)),()=>{o&&(e.removeEventListener("pingAll",s),e.removeEventListener("ping",a))}}),[s,a,o]),r.createElement("div",{ref:o},"RemotesList",r.createElement("pre",null,JSON.stringify(e,null,2)))}function v({data:e}){return r.createElement(r.Fragment,null,"ConsoleDisplay",r.createElement("pre",null,JSON.stringify(e,null,2)))}function b(){const[e,t]=(0,r.useState)([]);return{logger:console,logs:e}}p.propTypes={children:s.any,sessionStorageKey:s.string,humanErrors:s.object,mode:s.oneOf(["master","remote"]),masterPeerId:s.string,init:s.func};const w="master-persist-counters";function _(){const{logs:e,logger:t}=b(),[n,o]=(0,r.useState)(null),[s,a]=(0,r.useState)([]),[c,i]=(0,r.useState)(null),{ready:l,api:u,peer:m,humanizeError:d}=h(),p=({id:e})=>{const n=function(){try{return JSON.parse(sessionStorage.getItem(w))}catch{return{}}}();t.log({event:"remote.connect",payload:{id:e}}),a((t=>[...t,{counter:n?.[e]??0,peerId:e}]))},f=({id:e})=>{t.log({event:"remote.disconnect",payload:{id:e}}),a((t=>t.filter((({peerId:t})=>t!==e))))},_=({id:e},n)=>{t.log({event:"data",data:n,id:e}),a((t=>{const r=function(e,{data:t,id:n}){return e.reduce(((e,r)=>{if(r.peerId===n)switch(t.type){case"COUNTER_INCREMENT":e.push({...r,counter:r.counter+1});break;case"COUNTER_DECREMENT":e.push({...r,counter:r.counter-1});break;case"REMOTE_SET_NAME":e.push({...r,name:t.name});break;default:e.push(r)}else e.push(r);return e}),[])}(t,{data:n,id:e});return function(e){let t;try{t=JSON.stringify(e.reduce(((e,t)=>(e[t.peerId]=t.counter,e)),{}))}catch{t=JSON.stringify({})}sessionStorage.setItem(w,t)}(r),r}))},S=e=>{o(null),t.error({event:"error",error:e}),i([d(e)])};return(0,r.useEffect)((()=>(m&&m.on("error",S),()=>{m&&m.off("error",S)})),[m]),(0,r.useEffect)((()=>(l&&(o(m.id),t.log({event:"open",comment:"Master connected",payload:{id:m.id}}),u.on("remote.connect",p),u.on("remote.disconnect",f),u.on("data",_)),()=>{console.log("Master.jsx.cleanup"),l&&(u.off("remote.connect",p),u.off("remote.disconnect",f),u.off("data",_))})),[l]),r.createElement(r.Fragment,null,r.createElement(g,{data:c}),n&&r.createElement("div",null,r.createElement("a",{href:`${location.href}:${n}`,target:"_blank",rel:"noopener noreferrer"},n)),r.createElement("div",null,"Global counter: ",r.createElement(y,{count:(C=s,C.reduce(((e,{counter:t})=>t+e),0))})),r.createElement(E,{data:s,onPingAll:()=>{},onPing:e=>{}}),r.createElement(v,{data:[...e].reverse()}));var C}function S({onIncrement:e,onDecrement:t,disabled:n}){return r.createElement("div",{className:"counter-control"},r.createElement("button",{type:"button",className:"counter-control-add",onClick:()=>e(),style:{marginRight:"2px"},disabled:n},"+"),r.createElement("button",{type:"button",className:"counter-control-sub",onClick:()=>t(),style:{marginLeft:"2px"},disabled:n},"-"))}function C({onChangeName:e,onConfirmName:t,name:n,disabled:o}){return r.createElement("form",{className:"form-set-name",action:".",onSubmit:e=>{e.preventDefault(),t(e.target.name.value)}},r.createElement("label",null,r.createElement("input",{type:"text",placeholder:"Enter name",onChange:t=>e(t.target.value),value:n,disabled:o}),r.createElement("button",{type:"submit",disabled:o},"OK")))}function O(){const{logs:e,logger:t}=b(),[n,o]=(0,r.useState)(null),[s,a]=function(e){const[t,n]=(0,r.useState)((()=>{if("undefined"==typeof window)return"";try{const t=window.sessionStorage.getItem(e);return t?JSON.parse(t):""}catch(e){return console.log(e),""}}));return[t,r=>{try{const o=r instanceof Function?r(t):r;n(o),"undefined"!=typeof window&&window.sessionStorage.setItem(e,JSON.stringify(o))}catch(e){console.log(e)}}]}("remote-name"),[c,i]=(0,r.useState)(null),{ready:l,api:u,peer:m,humanizeError:d}=h(),p=e=>{t.log({event:"remote.disconnect",payload:e})},f=e=>{t.log({event:"remote.reconnect",payload:e}),s&&u.send({type:"REMOTE_SET_NAME",name:s})},y=e=>{o(null),t.error({event:"error",error:e}),i([d(e)])},E=(e,n)=>{t.log({event:"data",data:n})};return(0,r.useEffect)((()=>(m&&m.on("error",y),()=>{m&&m.off("error",y)})),[m]),(0,r.useEffect)((()=>(l&&(o(m.id),t.log({event:"open",comment:"Remote connected",payload:{id:m.id}}),u.on("remote.disconnect",p),u.on("remote.reconnect",f),u.on("data",E),s&&u.send({type:"REMOTE_SET_NAME",name:s})),()=>{console.log("Remote.jsx.cleanup"),l&&(u.off("remote.disconnect",p),u.off("remote.reconnect",f),u.off("data",E))})),[l]),r.createElement(r.Fragment,null,r.createElement(g,{data:c}),r.createElement(S,{onIncrement:function(){l&&u.send({type:"COUNTER_INCREMENT"})},onDecrement:function(){l&&u.send({type:"COUNTER_DECREMENT"})},disabled:!n}),r.createElement(C,{onChangeName:function(e){a(e)},name:s,onConfirmName:function(){l&&u.send({type:"REMOTE_SET_NAME",name:s})},disabled:!n}),r.createElement("p",null,"Check the counter updating in real-time on the original page, thanks to WebRTC."),r.createElement(v,{data:[...e].reverse()}))}const I=!0;function P(){const[,e=null]=(0,r.useMemo)((()=>decodeURI(location.hash).match(/^#[^:]+:(.+)?/)||[]),[]),t=(0,r.useMemo)((()=>e?"remote":"master"),[e]);return console.log({masterPeerId:e,mode:t}),r.createElement("section",null,r.createElement("h2",null,"WebRtc"),t&&r.createElement(p,{mode:t,init:({getPeerId:e})=>new o.Ay(e(),I?{host:"localhost",port:9e3,path:"/myapp"}:{host:"0.peerjs.com",port:443,path:"/"}),masterPeerId:e,sessionStorageKey:"webrtc-remote-control-peer-id-react"},"remote"===t?r.createElement(O,null):r.createElement(_,null)))}},72579:e=>{"use strict";var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function s(e,t,r,s,a){if("function"!=typeof r)throw new TypeError("The listener must be a function");var c=new o(r,s||e,a),i=n?n+t:t;return e._events[i]?e._events[i].fn?e._events[i]=[e._events[i],c]:e._events[i].push(c):(e._events[i]=c,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function c(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),c.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)t.call(e,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},c.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,s=r.length,a=new Array(s);o<s;o++)a[o]=r[o].fn;return a},c.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},c.prototype.emit=function(e,t,r,o,s,a){var c=n?n+e:e;if(!this._events[c])return!1;var i,l,u=this._events[c],m=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),m){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,o),!0;case 5:return u.fn.call(u.context,t,r,o,s),!0;case 6:return u.fn.call(u.context,t,r,o,s,a),!0}for(l=1,i=new Array(m-1);l<m;l++)i[l-1]=arguments[l];u.fn.apply(u.context,i)}else{var d,p=u.length;for(l=0;l<p;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),m){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,r);break;case 4:u[l].fn.call(u[l].context,t,r,o);break;default:if(!i)for(d=1,i=new Array(m-1);d<m;d++)i[d-1]=arguments[d];u[l].fn.apply(u[l].context,i)}}return!0},c.prototype.on=function(e,t,n){return s(this,e,t,n,!1)},c.prototype.once=function(e,t,n){return s(this,e,t,n,!0)},c.prototype.removeListener=function(e,t,r,o){var s=n?n+e:e;if(!this._events[s])return this;if(!t)return a(this,s),this;var c=this._events[s];if(c.fn)c.fn!==t||o&&!c.once||r&&c.context!==r||a(this,s);else{for(var i=0,l=[],u=c.length;i<u;i++)(c[i].fn!==t||o&&!c[i].once||r&&c[i].context!==r)&&l.push(c[i]);l.length?this._events[s]=1===l.length?l[0]:l:a(this,s)}return this},c.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&a(this,t)):(this._events=new r,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=n,c.EventEmitter=c,e.exports=c},17265:(e,t,n)=>{"use strict";var r=n(23034);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,s,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return n.PropTypes=n,n}},5821:(e,t,n)=>{e.exports=n(17265)()},23034:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=729.js.map