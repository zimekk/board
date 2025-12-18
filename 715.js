"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[715],{411(e,t,n){n.d(t,{A:()=>i});var a=n(39081),r=n(77681);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(null,arguments)}function i({width:e,height:t,...n}){return a.createElement(a.Suspense,{fallback:null},a.createElement(r.A,l({autoplay:!0},n,{style:{display:"block",width:e,height:t},config:{}})))}},1618(e,t,n){n.d(t,{y:()=>l});var a=n(39081);const r=n(97585).Ay.div`
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
`;function l(){return a.createElement(r,null,a.createElement("svg",{className:"spinner",viewBox:"0 0 50 50"},a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})))}},15996(e,t,n){n.d(t,{D:()=>a.A,y:()=>r.y});var a=n(411),r=n(1618)},44715(e,t,n){n.r(t),n.d(t,{default:()=>s});var a=n(15996),r=n(39081);function l({setItem:e}){const[t,n]=(0,r.useState)(()=>null);(0,r.useEffect)(()=>{fetch("movie").then(e=>e.json()).then(({list:e})=>e).then(n)},[]);const l=(0,r.useCallback)(t=>(t.preventDefault(),e({name:t.target.dataset.name})),[]);return null===t?r.createElement(a.y,null):r.createElement("div",null,r.createElement("ul",null,t.map(({name:e})=>r.createElement("li",{key:e},r.createElement("a",{href:`photo/${encodeURIComponent(e)}`,"data-name":e,target:"_blank",onClick:l},e)))))}function i({item:e}){const t=(0,r.useRef)(null);return r.createElement("div",{style:{position:"fixed",bottom:0,right:0,border:"2px solid black"}},r.createElement("video",{ref:t,src:`movie/${encodeURIComponent(e.name)}`,width:"480",height:"270",autoPlay:!0,controls:!0}))}function s(){const[e,t]=(0,r.useState)(null);return r.createElement("section",null,r.createElement("h2",null,"Movie"),r.createElement(l,{setItem:t}),e&&r.createElement(i,{item:e}))}}}]);
//# sourceMappingURL=715.js.map