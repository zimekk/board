"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[336],{7336:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(5505),a=n(2983);const c=(({hostname:e,protocol:t})=>`${t}//${e}:9001`)(new URL(`${window.location.href}`.replace(/^mqtt:\/\//,"ws://")));function r({url:e}){const[t,n]=(0,a.useState)([]);(0,a.useEffect)((()=>{const e=l.Z.connect(c);return console.log({MQTT_URL:c}),e.on("connect",(()=>{e.subscribe("device",(e=>{}))})),e.on("message",((e,t)=>{const l=JSON.parse(t.toString());n((e=>e.concat(l)))})),fetch("share").then((e=>e.json())).then(n),()=>{e.end()}}),[]);const r=(0,a.useCallback)((({target:t})=>fetch("share/play",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({xml:t.value,url:e})}).then((e=>e.json())).then(console.info)),[e]);return a.createElement("div",null,a.createElement("h3",null,"devices"),a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null,"host"),a.createElement("th",null,"name"),a.createElement("th",null,"xml"),a.createElement("th",null,"type"),a.createElement("th",null)),t.map((({host:t,name:n,xml:l,type:c},o)=>a.createElement("tr",{key:o},a.createElement("td",null,t),a.createElement("td",null,n),a.createElement("td",null,a.createElement("a",{href:l,target:"_blank"},l)),a.createElement("td",null,c),a.createElement("td",null,a.createElement("button",{disabled:""===e,value:l,onClick:r},"play"))))))),a.createElement("pre",null,JSON.stringify(t,null,2)))}function o(){const[e,t]=(0,a.useState)([]);return(0,a.useEffect)((()=>{fetch("share/networks").then((e=>e.json())).then(t)}),[]),a.createElement("div",null,a.createElement("h3",null,"networks"),a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null,"address"),a.createElement("th",null,"family"),a.createElement("th",null,"mac")),e.map((({address:e,family:t,mac:n},l)=>a.createElement("tr",{key:l},a.createElement("td",null,a.createElement("a",{href:(({hash:t,pathname:n,port:l,protocol:a})=>`${a}//${e}:${l}${n}${t}`)(new URL(document.location.href))},e)),a.createElement("td",null,t),a.createElement("td",null,n)))))),a.createElement("pre",null,JSON.stringify(e,null,2)))}function u({url:e,setUrl:t}){const[n,l]=(0,a.useState)(["http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4"]);(0,a.useEffect)((()=>{fetch("share/list").then((e=>e.json())).then((e=>l((t=>t.concat(e.map((e=>(({origin:t})=>`${t}/api/audio/${encodeURIComponent(e)}`)(new URL(document.location.href)))))))))}),[]);const c=(0,a.useCallback)((({target:e})=>t(e.value)),[]);return a.createElement("div",null,a.createElement("h3",null,"media"),a.createElement("ul",null,n.map(((t,n)=>a.createElement("li",{key:n},a.createElement("label",null,a.createElement("input",{type:"radio",value:t,onChange:c,checked:t===e}),a.createElement("span",null,t)))))),a.createElement("pre",null,JSON.stringify(n,null,2)))}function s(){const[e,t]=(0,a.useState)(""),n=(0,a.useCallback)((e=>fetch("share/start").then((e=>e.json())).then(console.info)),[]),l=(0,a.useCallback)((e=>fetch("share/destroy").then((e=>e.json())).then(console.info)),[]);return a.createElement("section",null,a.createElement("h2",null,"Share"),a.createElement("button",{onClick:n},"start"),a.createElement("button",{onClick:l},"destroy"),a.createElement(r,{url:e}),a.createElement(u,{url:e,setUrl:t}),a.createElement(o,null))}}}]);
//# sourceMappingURL=336.js.map