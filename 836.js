"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[836],{63836:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var l=n(22155),i=n(63260),o=n(35010),r=n(17243),c=n(78044),a=n(20318),d=n(96977),E=n(33007),s=n(47149),N=n(39605),C=n(91501),I=n(33925),O=n(64084),y=n(69066);const T=i.wA,_=i.d4;let f=function(e){return e.PEER_SESSION_START="PEER_SESSION_START",e.PEER_SESSION_STOP="PEER_SESSION_STOP",e.PEER_LOADING="PEER_LOADING",e}({});var m=n(26480);let A,u=function(e){return e.FILE="FILE",e.OTHER="OTHER",e}({}),S=new Map;const g=()=>new Promise(((e,t)=>{try{A&&(A.destroy(),A=void 0),e()}catch(e){console.log(e),t(e)}})),p=e=>new Promise(((t,n)=>{if(A)if(S.has(e))n(new Error("Connection existed"));else try{let l=A.connect(e,{reliable:!0});l?l.on("open",(function(){console.log("Connect to: "+e),S.set(e,l),t()})).on("error",(function(e){console.log(e),n(e)})):n(new Error("Connection can't be established"))}catch(e){n(e)}else n(new Error("Peer doesn't start yet"))})),w=(e,t)=>{if(!A)throw new Error("Peer doesn't start yet");if(!S.has(e))throw new Error("Connection didn't exist");let n=S.get(e);n&&n.on("close",(function(){console.log("Connection closed: "+e),S.delete(e),t()}))},h=(e,t)=>{if(!A)throw new Error("Peer doesn't start yet");if(!S.has(e))throw new Error("Connection didn't exist");let n=S.get(e);n&&n.on("data",(function(n){console.log("Receiving data from "+e),t(n)}))};let P=function(e){return e.CONNECTION_INPUT_CHANGE="CONNECTION_INPUT_CHANGE",e.CONNECTION_CONNECT_LOADING="CONNECTION_CONNECT_LOADING",e.CONNECTION_LIST_ADD="CONNECTION_LIST_ADD",e.CONNECTION_LIST_REMOVE="CONNECTION_LIST_REMOVE",e.CONNECTION_ITEM_SELECT="CONNECTION_ITEM_SELECT",e}({});var v=n(6134),L=n.n(v);const R=e=>({type:P.CONNECTION_CONNECT_LOADING,loading:e}),D=e=>({type:P.CONNECTION_LIST_ADD,id:e}),b=e=>({type:P.CONNECTION_LIST_REMOVE,id:e}),G=e=>({type:f.PEER_LOADING,loading:e}),k=()=>async e=>{e(G(!0));try{const n=await new Promise(((e,t)=>{try{A=new m.Ay,A.on("open",(t=>{console.log("My ID: "+t),e(t)})).on("error",(e=>{console.log(e),r.Ay.error(e.message)}))}catch(e){console.log(e),t(e)}}));t=t=>{const n=t.peer;r.Ay.info("Incoming connection: "+n),e(D(n)),w(n,(()=>{r.Ay.info("Connection closed: "+n),e(b(n))})),h(n,(e=>{r.Ay.info("Receiving file "+e.fileName+" from "+n),e.dataType===u.FILE&&L()(e.file||"",e.fileName||"fileName",e.fileType)}))},A?.on("connection",(function(e){console.log("Incoming connection: "+e.peer),S.set(e.peer,e),t(e)})),e((e=>({type:f.PEER_SESSION_START,id:e}))(n)),e(G(!1))}catch(t){console.log(t),e(G(!1))}var t},M=e=>{const[t,n]=(0,l.useState)(e);return[t,e=>new Promise((t=>{n(e),t()}))]},{Title:x}=o.A,F=()=>{const e=_((e=>e.peer)),t=_((e=>e.connection)),n=T(),[i,o]=M([]),[m,A]=M(!1);return l.createElement(c.A,{justify:"center",align:"top"},l.createElement(a.A,{xs:24,sm:24,md:20,lg:16,xl:12},l.createElement(d.A,null,l.createElement(x,{level:2,style:{textAlign:"center"}},"P2P File Transfer"),l.createElement(d.A,{hidden:e.started},l.createElement(E.Ay,{onClick:()=>{n(k())},loading:e.loading},"Start")),l.createElement(d.A,{hidden:!e.started},l.createElement(s.A,{direction:"horizontal"},l.createElement("div",null,"ID: ",e.id),l.createElement(E.Ay,{icon:l.createElement(O.A,null),onClick:async()=>{await navigator.clipboard.writeText(e.id||""),r.Ay.info("Copied: "+e.id)}}),l.createElement(E.Ay,{danger:!0,onClick:async()=>{await g(),n({type:f.PEER_SESSION_STOP})}},"Stop"))),l.createElement("div",{hidden:!e.started},l.createElement(d.A,null,l.createElement(s.A,{direction:"horizontal"},l.createElement(N.A,{placeholder:"ID",onChange:e=>{return n((t=e.target.value,{type:P.CONNECTION_INPUT_CHANGE,id:t}));var t},required:!0}),l.createElement(E.Ay,{onClick:()=>{var e;null!=t.id?n((e=t.id||"",async t=>{t(R(!0));try{await p(e),w(e,(()=>{r.Ay.info("Connection closed: "+e),t(b(e))})),h(e,(t=>{r.Ay.info("Receiving file "+t.fileName+" from "+e),t.dataType===u.FILE&&L()(t.file||"",t.fileName||"fileName",t.fileType)})),t(D(e)),t(R(!1))}catch(e){t(R(!1)),console.log(e)}})):r.Ay.warning("Please enter ID")},loading:t.loading},"Connect"))),l.createElement(d.A,{title:"Connection"},0===t.list.length?l.createElement("div",null,"Waiting for connection ..."):l.createElement("div",null,"Select a connection",l.createElement(C.A,{selectedKeys:t.selectedId?[t.selectedId]:[],onSelect:e=>{return n((t=e.key,{type:P.CONNECTION_ITEM_SELECT,id:t}));var t},items:t.list.map((e=>({key:e,icon:null,children:undefined,label:e,type:undefined})))}))),l.createElement(d.A,{title:"Send File"},l.createElement(I.A,{fileList:i,maxCount:1,onRemove:()=>o([]),beforeUpload:e=>(o([e]),!1)},l.createElement(E.Ay,{icon:l.createElement(y.A,null)},"Select File")),l.createElement(E.Ay,{type:"primary",onClick:async()=>{if(0!==i.length)if(t.selectedId)try{await A(!0);let l=i[0],o=new Blob([l],{type:l.type});await(e=t.selectedId,n={dataType:u.FILE,file:o,fileName:l.name,fileType:l.type},new Promise(((t,l)=>{S.has(e)||l(new Error("Connection didn't exist"));try{let t=S.get(e);t&&t.send(n)}catch(e){l(e)}t()}))),await A(!1),r.Ay.info("Send file successfully")}catch(e){await A(!1),console.log(e),r.Ay.error("Error when sending file")}else r.Ay.warning("Please select a connection");else r.Ay.warning("Please select file");var e,n},disabled:0===i.length,loading:m,style:{marginTop:16}},m?"Sending":"Send"))))))};var H=n(3306);const U={id:void 0,loading:!1,started:!1},V={id:void 0,loading:!1,list:[],selectedId:void 0},q=(0,H.U1)({reducer:{peer:(e=U,t)=>{switch(t.type){case f.PEER_SESSION_START:const{id:n}=t;return{...e,id:n,started:!0};case f.PEER_SESSION_STOP:return{...U};case f.PEER_LOADING:const{loading:l}=t;return{...e,loading:l};default:return e}},connection:(e=V,t)=>{if(t.type===P.CONNECTION_INPUT_CHANGE){const{id:n}=t;return{...e,id:n}}if(t.type===P.CONNECTION_CONNECT_LOADING){const{loading:n}=t;return{...e,loading:n}}if(t.type===P.CONNECTION_LIST_ADD){let n=[...e.list,t.id];return 1===n.length?{...e,list:n,selectedId:t.id}:{...e,list:[...e.list,t.id]}}if(t.type===P.CONNECTION_LIST_REMOVE){let n=[...e.list].filter((e=>e!==t.id));return e.selectedId&&!n.includes(e.selectedId)?0===n.length?{...e,list:n,selectedId:void 0}:{...e,list:n,selectedId:n[0]}:{...e,list:n}}return t.type===P.CONNECTION_ITEM_SELECT?{...e,selectedId:t.id}:e}}});function z(){return l.createElement("section",null,l.createElement("h2",null,"Transfer"),l.createElement(i.Kq,{store:q},l.createElement(F,null)))}}}]);
//# sourceMappingURL=836.js.map