"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[836],{36836:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var c=n(11806),l=n(22155);const o=(({hostname:e,protocol:t})=>`${t}//${e}:9001`)(new URL(`${window.location.href}`.replace(/^mqtt:\/\//,"ws://")));function s(){const[e,t]=(0,l.useState)([]);return(0,l.useEffect)((()=>{const e=c.A.connect(o);return console.log({MQTT_URL:o}),e.on("connect",(()=>{e.subscribe("request",(e=>{}))})),e.on("message",((e,n)=>{t((e=>e.concat(JSON.parse(n.toString()))))})),()=>{e.end()}}),[]),l.createElement("ul",null,e.map(((e,t)=>l.createElement("li",{key:t},l.createElement("pre",null,JSON.stringify(e,null,2))))))}function r(){const e=(0,l.useCallback)((e=>fetch("request/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:"text"})}).then((e=>e.json())).then(console.info)),[]);return l.createElement("section",null,l.createElement("h2",null,"Request"),l.createElement("button",{onClick:e},"request"),l.createElement(s,null))}}}]);
//# sourceMappingURL=836.js.map