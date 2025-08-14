"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[689],{32689:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(77227),o=n(85860),r=n(22155);const l=(({hostname:e,protocol:t})=>`${t}//${e}:9001`)(new URL(`${window.location.href}`.replace(/^mqtt:\/\//,"ws://")));function s(){const[e,t]=(0,r.useState)(()=>null);(0,r.useEffect)(()=>{fetch("photo").then(e=>e.json()).then(({list:e})=>e).then(t)},[]);const n=(0,r.useCallback)(e=>(e.preventDefault(),fetch(`photo/send/${encodeURIComponent(e.target.dataset.name)}`)),[]);return null===e?r.createElement(a.y,null):r.createElement("div",null,r.createElement("ul",null,e.map(({name:e})=>r.createElement("li",{key:e},r.createElement("a",{href:`photo/${encodeURIComponent(e)}`,"data-name":e,target:"_blank",onClick:n},e)))))}function c(){const[e,t]=(0,r.useState)(null);return(0,r.useEffect)(()=>{const e=o.A.connect(l);return console.log({MQTT_URL:l}),e.on("connect",()=>{e.subscribe("photos",e=>{})}),e.on("message",(e,n)=>{t(URL.createObjectURL(new Blob([n])))}),()=>{e.end()}},[]),e?r.createElement("div",{style:{bottom:0,right:0,border:"2px solid black"}},r.createElement("img",{style:{maxWidth:"100%"},src:e})):null}function i(){return r.createElement("section",null,r.createElement("h2",null,"Photo"),r.createElement(s,null),r.createElement(c,null))}},77227:(e,t,n)=>{n.d(t,{y:()=>a.y});var a=n(96021)},96021:(e,t,n)=>{n.d(t,{y:()=>r});var a=n(22155);const o=n(10419).Ay.div`
  display: inline-block;
  width: 1em;
  height: 1em;
  position: relative;

  .spinner {
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    margin: 0;
  }

  svg {
    animation: rotate 2s linear infinite;
    margin: -25px 0 0 -25px;
    width: 50px;
    height: 50px;

    & .path {
      stroke: #5652bf;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;function r(){return a.createElement(o,null,a.createElement("svg",{className:"spinner",viewBox:"0 0 50 50"},a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})))}}}]);
//# sourceMappingURL=689.js.map