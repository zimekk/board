"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[896],{34896:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(83892),r=n(66411),l=n(60175);const o=(({hostname:e,protocol:t})=>`${t}//${e}:9001`)(new URL(`${window.location.href}`.replace(/^mqtt:\/\//,"ws://")));function s(){const[e,t]=(0,l.useState)(()=>null);(0,l.useEffect)(()=>{fetch("photo").then(e=>e.json()).then(({list:e})=>e).then(t)},[]);const n=(0,l.useCallback)(e=>(e.preventDefault(),fetch(`photo/send/${encodeURIComponent(e.target.dataset.name)}`)),[]);return null===e?l.createElement(a.y,null):l.createElement("div",null,l.createElement("ul",null,e.map(({name:e})=>l.createElement("li",{key:e},l.createElement("a",{href:`photo/${encodeURIComponent(e)}`,"data-name":e,target:"_blank",onClick:n},e)))))}function c(){const[e,t]=(0,l.useState)(null);return(0,l.useEffect)(()=>{const e=r.A.connect(o);return console.log({MQTT_URL:o}),e.on("connect",()=>{e.subscribe("photos",e=>{})}),e.on("message",(e,n)=>{t(URL.createObjectURL(new Blob([n])))}),()=>{e.end()}},[]),e?l.createElement("div",{style:{bottom:0,right:0,border:"2px solid black"}},l.createElement("img",{style:{maxWidth:"100%"},src:e})):null}function i(){return l.createElement("section",null,l.createElement("h2",null,"Photo"),l.createElement(s,null),l.createElement(c,null))}},44141:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(60175),r=n(77681);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(null,arguments)}function o({width:e,height:t,...n}){return a.createElement(a.Suspense,{fallback:null},a.createElement(r.A,l({autoplay:!0},n,{style:{display:"block",width:e,height:t},config:{}})))}},81392:(e,t,n)=>{n.d(t,{y:()=>l});var a=n(60175);const r=n(71455).Ay.div`
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
`;function l(){return a.createElement(r,null,a.createElement("svg",{className:"spinner",viewBox:"0 0 50 50"},a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})))}},83892:(e,t,n)=>{n.d(t,{D:()=>a.A,y:()=>r.y});var a=n(44141),r=n(81392)}}]);
//# sourceMappingURL=896.js.map