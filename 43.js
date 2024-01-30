"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[43],{4043:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(2983),r=n(3465);function l({onSelect:e}){const[t,n]=(0,a.useState)((()=>null));(0,a.useEffect)((()=>{fetch("photo").then((e=>e.json())).then((({list:e})=>e)).then(n)}),[]);const l=(0,a.useCallback)((t=>(t.preventDefault(),e(t.target.href))),[]);return null===t?a.createElement(r.$,null):a.createElement("div",null,a.createElement("ul",null,t.map((({name:e})=>a.createElement("li",{key:e},a.createElement("a",{href:`photo/${e}`,target:"_blank",onClick:l},e))))))}function s({name:e}){return a.createElement("div",{style:{bottom:0,right:0,border:"2px solid black"}},a.createElement("img",{style:{maxWidth:"100%"},src:e}))}function i(){const[e,t]=(0,a.useState)(null);return a.createElement("section",null,a.createElement("h2",null,"Photo"),a.createElement(l,{onSelect:t}),e&&a.createElement(s,{name:e}))}},3465:(e,t,n)=>{n.d(t,{$:()=>a.$});var a=n(9059)},9059:(e,t,n)=>{n.d(t,{$:()=>l});var a=n(2983);const r=n(6373).ZP.div`
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
`;function l(){return a.createElement(r,null,a.createElement("svg",{className:"spinner",viewBox:"0 0 50 50"},a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})))}}}]);
//# sourceMappingURL=43.js.map