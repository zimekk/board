"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[981],{51981:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(22155),r=n(83881);function s({setItem:e}){const[t,n]=(0,a.useState)((()=>null));(0,a.useEffect)((()=>{fetch("movie").then((e=>e.json())).then((({list:e})=>e)).then(n)}),[]);const s=(0,a.useCallback)((t=>(t.preventDefault(),e({name:t.target.dataset.name}))),[]);return null===t?a.createElement(r.y,null):a.createElement("div",null,a.createElement("ul",null,t.map((({name:e})=>a.createElement("li",{key:e},a.createElement("a",{href:`photo/${encodeURIComponent(e)}`,"data-name":e,target:"_blank",onClick:s},e))))))}function o({item:e}){const t=(0,a.useRef)();return a.createElement("div",{style:{position:"fixed",bottom:0,right:0,border:"2px solid black"}},a.createElement("video",{ref:t,src:`movie/${encodeURIComponent(e.name)}`,width:"480",height:"270",autoPlay:!0,controls:!0}))}function i(){const[e,t]=(0,a.useState)(null);return a.createElement("section",null,a.createElement("h2",null,"Movie"),a.createElement(s,{setItem:t}),e&&a.createElement(o,{item:e}))}},83881:(e,t,n)=>{n.d(t,{y:()=>a.y});var a=n(38648)},38648:(e,t,n)=>{n.d(t,{y:()=>s});var a=n(22155);const r=n(82342).Ay.div`
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
`;function s(){return a.createElement(r,null,a.createElement("svg",{className:"spinner",viewBox:"0 0 50 50"},a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})))}}}]);
//# sourceMappingURL=981.js.map