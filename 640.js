"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[640],{59640:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var l=n(22155),i=n(28143),o=n(72342),r=n(27096),c=n(30111),a=n(19161),s=n(88806),d=n(70980),E=n(88610),N=n(15586),C=n(18027),I=n(45588),f=n(76206),O=n(8021),y=n(53946);function m({children:e}){const t=(0,l.useRef)(null);return(0,l.useEffect)((()=>{y.toCanvas(t.current,e,{margin:0,scale:5},(function(e){e&&console.error(e)}))}),[e]),l.createElement("div",{style:{margin:"1em"}},l.createElement("a",{href:e,target:"_blank"},l.createElement("canvas",{ref:t,width:"125",height:"125"})))}const u=e=>{const[t,n]=(0,l.useState)(e);return[t,e=>new Promise((t=>{n(e),t()}))]};var T=n(27668);let _,g=function(e){return e.FILE="FILE",e.OTHER="OTHER",e}({}),A=new Map;const S=()=>new Promise(((e,t)=>{try{_&&(_.destroy(),_=void 0),e()}catch(e){console.log(e),t(e)}})),h=e=>new Promise(((t,n)=>{if(_)if(A.has(e))n(new Error("Connection existed"));else try{let l=_.connect(e,{reliable:!0});l?l.on("open",(function(){console.log("Connect to: "+e),A.set(e,l),t()})).on("error",(function(e){console.log(e),n(e)})):n(new Error("Connection can't be established"))}catch(e){n(e)}else n(new Error("Peer doesn't start yet"))})),p=(e,t)=>{if(!_)throw new Error("Peer doesn't start yet");if(!A.has(e))throw new Error("Connection didn't exist");let n=A.get(e);n&&n.on("close",(function(){console.log("Connection closed: "+e),A.delete(e),t()}))},w=(e,t)=>{if(!_)throw new Error("Peer doesn't start yet");if(!A.has(e))throw new Error("Connection didn't exist");let n=A.get(e);n&&n.on("data",(function(n){console.log("Receiving data from "+e),t(n)}))};let P=function(e){return e.CONNECTION_INPUT_CHANGE="CONNECTION_INPUT_CHANGE",e.CONNECTION_CONNECT_LOADING="CONNECTION_CONNECT_LOADING",e.CONNECTION_LIST_ADD="CONNECTION_LIST_ADD",e.CONNECTION_LIST_REMOVE="CONNECTION_LIST_REMOVE",e.CONNECTION_ITEM_SELECT="CONNECTION_ITEM_SELECT",e}({});var v=n(6134),R=n.n(v);const L=e=>({type:P.CONNECTION_CONNECT_LOADING,loading:e}),D=e=>({type:P.CONNECTION_LIST_ADD,id:e}),b=e=>({type:P.CONNECTION_LIST_REMOVE,id:e}),k=i.wA,G=i.d4;let M=function(e){return e.PEER_SESSION_START="PEER_SESSION_START",e.PEER_SESSION_STOP="PEER_SESSION_STOP",e.PEER_LOADING="PEER_LOADING",e}({});const x=e=>({type:M.PEER_LOADING,loading:e}),F=()=>async e=>{e(x(!0));try{const n=await new Promise(((e,t)=>{try{_=new T.Ay,_.on("open",(t=>{console.log("My ID: "+t),e(t)})).on("error",(e=>{console.log(e),a.Ay.error(e.message)}))}catch(e){console.log(e),t(e)}}));t=t=>{const n=t.peer;a.Ay.info("Incoming connection: "+n),e(D(n)),p(n,(()=>{a.Ay.info("Connection closed: "+n),e(b(n))})),w(n,(e=>{a.Ay.info("Receiving file "+e.fileName+" from "+n),e.dataType===g.FILE&&R()(e.file||"",e.fileName||"fileName",e.fileType)}))},_?.on("connection",(function(e){console.log("Incoming connection: "+e.peer),A.set(e.peer,e),t(e)})),e((e=>({type:M.PEER_SESSION_START,id:e}))(n)),e(x(!1))}catch(t){console.log(t),e(x(!1))}var t},{Title:U}=c.A,H=()=>{const e=G((e=>e.peer)),t=G((e=>e.connection)),n=k(),[i,c]=u([]),[y,T]=u(!1),[_,v]=l.useMemo((()=>{return[(e=decodeURI(location.hash).match(/^#([^:]+)(:(.+))?/)||[])[1],e[3]];var e}),[]),x=l.useMemo((()=>String((t=>Object.assign(t,{hash:`#${_}:${e.id}`}))(new URL(document.location.href)))),[_,e.id]),[H,V]=l.useState((()=>v||""));return l.useEffect((()=>{n((e=>({type:P.CONNECTION_INPUT_CHANGE,id:e}))(H))}),[H]),l.createElement(s.A,{justify:"center",align:"top"},l.createElement(d.A,{xs:24,sm:24,md:20,lg:16,xl:12},l.createElement(E.A,null,l.createElement(U,{level:2,style:{textAlign:"center"}},"P2P File Transfer"),l.createElement(E.A,{hidden:e.started},l.createElement(N.Ay,{onClick:()=>{n(F())},loading:e.loading},"Start")),l.createElement(E.A,{hidden:!e.started},l.createElement(C.A,{direction:"horizontal"},l.createElement("div",null,"ID: ",e.id),l.createElement(N.Ay,{icon:l.createElement(o.A,null),onClick:async()=>{await navigator.clipboard.writeText(e.id||""),a.Ay.info("Copied: "+e.id)}}),l.createElement(N.Ay,{danger:!0,onClick:async()=>{await S(),n({type:M.PEER_SESSION_STOP})}},"Stop"),l.createElement("div",null,x&&l.createElement(m,null,x)))),l.createElement("div",{hidden:!e.started},l.createElement(E.A,null,l.createElement(C.A,{direction:"horizontal"},l.createElement(I.A,{placeholder:"ID",value:H,onChange:e=>V(e.target.value),required:!0}),l.createElement(N.Ay,{onClick:()=>{null!=t.id?n((e=>async t=>{t(L(!0));try{await h(e),p(e,(()=>{a.Ay.info("Connection closed: "+e),t(b(e))})),w(e,(t=>{a.Ay.info("Receiving file "+t.fileName+" from "+e),t.dataType===g.FILE&&R()(t.file||"",t.fileName||"fileName",t.fileType)})),t(D(e)),t(L(!1))}catch(e){t(L(!1)),console.log(e)}})(t.id||"")):a.Ay.warning("Please enter ID")},loading:t.loading},"Connect"))),l.createElement(E.A,{title:"Connection"},0===t.list.length?l.createElement("div",null,"Waiting for connection ..."):l.createElement("div",null,"Select a connection",l.createElement(f.A,{selectedKeys:t.selectedId?[t.selectedId]:[],onSelect:e=>n((e=>({type:P.CONNECTION_ITEM_SELECT,id:e}))(e.key)),items:t.list.map((e=>({key:e,icon:null,children:undefined,label:e,type:undefined})))}))),l.createElement(E.A,{title:"Send File"},l.createElement(O.A,{fileList:i,maxCount:1,onRemove:()=>c([]),beforeUpload:e=>(c([e]),!1)},l.createElement(N.Ay,{icon:l.createElement(r.A,null)},"Select File")),l.createElement(N.Ay,{type:"primary",onClick:async()=>{if(0!==i.length)if(t.selectedId)try{await T(!0);let e=i[0],n=new Blob([e],{type:e.type});await((e,t)=>new Promise(((n,l)=>{A.has(e)||l(new Error("Connection didn't exist"));try{let n=A.get(e);n&&n.send(t)}catch(e){l(e)}n()})))(t.selectedId,{dataType:g.FILE,file:n,fileName:e.name,fileType:e.type}),await T(!1),a.Ay.info("Send file successfully")}catch(e){await T(!1),console.log(e),a.Ay.error("Error when sending file")}else a.Ay.warning("Please select a connection");else a.Ay.warning("Please select file")},disabled:0===i.length,loading:y,style:{marginTop:16}},y?"Sending":"Send"))))))};var V=n(19101);const j={id:void 0,loading:!1,started:!1},q={id:void 0,loading:!1,list:[],selectedId:void 0},z=(0,V.U1)({reducer:{peer:(e=j,t)=>{switch(t.type){case M.PEER_SESSION_START:const{id:n}=t;return{...e,id:n,started:!0};case M.PEER_SESSION_STOP:return{...j};case M.PEER_LOADING:const{loading:l}=t;return{...e,loading:l};default:return e}},connection:(e=q,t)=>{if(t.type===P.CONNECTION_INPUT_CHANGE){const{id:n}=t;return{...e,id:n}}if(t.type===P.CONNECTION_CONNECT_LOADING){const{loading:n}=t;return{...e,loading:n}}if(t.type===P.CONNECTION_LIST_ADD){let n=[...e.list,t.id];return 1===n.length?{...e,list:n,selectedId:t.id}:{...e,list:[...e.list,t.id]}}if(t.type===P.CONNECTION_LIST_REMOVE){let n=[...e.list].filter((e=>e!==t.id));return e.selectedId&&!n.includes(e.selectedId)?0===n.length?{...e,list:n,selectedId:void 0}:{...e,list:n,selectedId:n[0]}:{...e,list:n}}return t.type===P.CONNECTION_ITEM_SELECT?{...e,selectedId:t.id}:e}}});function K(){return l.createElement("section",null,l.createElement("h2",null,"Transfer"),l.createElement(i.Kq,{store:z},l.createElement(H,null)))}}}]);
//# sourceMappingURL=640.js.map