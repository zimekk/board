"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[15],{43015:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(8056),o=n(22155),r=n(13177);const l=(({hostname:e,protocol:t})=>`${t}//${e}:9001`)(new URL(`${window.location.href}`.replace(/^mqtt:\/\//,"ws://")));function s(){const[e,t]=(0,o.useState)((()=>null));(0,o.useEffect)((()=>{fetch("photo").then((e=>e.json())).then((({list:e})=>e)).then(t)}),[]);const n=(0,o.useCallback)((e=>(e.preventDefault(),fetch(`photo/send/${encodeURIComponent(e.target.dataset.name)}`))),[]);return null===e?o.createElement(r.y,null):o.createElement("div",null,o.createElement("ul",null,e.map((({name:e})=>o.createElement("li",{key:e},o.createElement("a",{href:`photo/${encodeURIComponent(e)}`,"data-name":e,target:"_blank",onClick:n},e))))))}function c(){const[e,t]=(0,o.useState)(null);return(0,o.useEffect)((()=>{const e=a.A.connect(l);return console.log({MQTT_URL:l}),e.on("connect",(()=>{e.subscribe("photos",(e=>{}))})),e.on("message",((e,n)=>{t(URL.createObjectURL(new Blob([n])))})),()=>{e.end()}}),[]),e?o.createElement("div",{style:{bottom:0,right:0,border:"2px solid black"}},o.createElement("img",{style:{maxWidth:"100%"},src:e})):null}function i(){return o.createElement("section",null,o.createElement("h2",null,"Photo"),o.createElement(s,null),o.createElement(c,null))}},13177:(e,t,n)=>{n.d(t,{y:()=>a.y});var a=n(56890)},56890:(e,t,n)=>{n.d(t,{y:()=>r});var a=n(22155);const o=n(73911).Ay.div`
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
//# sourceMappingURL=15.js.map