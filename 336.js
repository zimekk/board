"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[336],{7336:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(5505),c=n(2983);const r=(({hostname:e,protocol:t})=>`${t}//${e}:9001`)(new URL(`${window.location.href}`.replace(/^mqtt:\/\//,"ws://")));function a(){const[e,t]=(0,c.useState)([]);return(0,c.useEffect)((()=>{const e=l.Z.connect(r);return console.log({MQTT_URL:r}),e.on("connect",(()=>{e.subscribe("device",(e=>{}))})),e.on("message",((e,n)=>{const l=JSON.parse(n.toString());t((e=>e.concat(l)))})),fetch("share").then((e=>e.json())).then(t),()=>{e.end()}}),[]),c.createElement("div",null,c.createElement("h3",null,"devices"),c.createElement("table",null,c.createElement("tbody",null,c.createElement("tr",null,c.createElement("th",null,"host"),c.createElement("th",null,"name"),c.createElement("th",null,"xml"),c.createElement("th",null,"type")),e.map((({host:e,name:t,xml:n,type:l},r)=>c.createElement("tr",{key:r},c.createElement("td",null,e),c.createElement("td",null,t),c.createElement("td",null,c.createElement("a",{href:n,target:"_blank"},n)),c.createElement("td",null,l)))))),c.createElement("pre",null,JSON.stringify(e,null,2)))}function o(){const e=(0,c.useCallback)((e=>fetch("share/start").then((e=>e.json())).then(console.info)),[]),t=(0,c.useCallback)((e=>fetch("share/destroy").then((e=>e.json())).then(console.info)),[]);return c.createElement("section",null,c.createElement("h2",null,"Share"),c.createElement("button",{onClick:e},"start"),c.createElement("button",{onClick:t},"destroy"),c.createElement(a,null))}}}]);
//# sourceMappingURL=336.js.map