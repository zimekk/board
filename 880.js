"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[880],{2880:(e,r,n)=>{n.r(r),n.d(r,{default:()=>y});var t=n(2983),o=n(865),s=n(2886),l=n.n(s),i=n(7788),c=n.n(i),u=n(1122),a=n.n(u),f=n(6791),p=n.n(f),d=n(8611),g=n.n(d),h=n(6671),b=n.n(h),v=n(1807),k={};k.styleTagTransform=b(),k.setAttributes=p(),k.insert=a().bind(null,"head"),k.domAPI=c(),k.insertStyleElement=g(),l()(v.Z,k);const m=v.Z&&v.Z.locals?v.Z.locals:void 0,w=(0,o.k)((async(e=1)=>{const r=await fetch(`api/data.json?${e}`);return await r.json()}));function y(){const e=w.read();return t.createElement("section",{className:m.Section},t.createElement("h2",null,"Hello"),t.createElement("pre",null,JSON.stringify(e,null,2)))}},1807:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(6707),o=n.n(t),s=n(9118),l=n.n(s)()(o());l.push([e.id,".bsKDZ3k4BYw9qWm0kDlR{color:blue}","",{version:3,sources:["webpack://./src/containers/Hello.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA",sourcesContent:[".Section {\n  color: blue;\n}\n"],sourceRoot:""}]),l.locals={Section:"bsKDZ3k4BYw9qWm0kDlR"};const i=l},4204:e=>{e.exports=function e(r,n){if(r===n)return!0;if(r&&n&&"object"==typeof r&&"object"==typeof n){if(r.constructor!==n.constructor)return!1;var t,o,s;if(Array.isArray(r)){if((t=r.length)!=n.length)return!1;for(o=t;0!=o--;)if(!e(r[o],n[o]))return!1;return!0}if(r.constructor===RegExp)return r.source===n.source&&r.flags===n.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===n.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===n.toString();if((t=(s=Object.keys(r)).length)!==Object.keys(n).length)return!1;for(o=t;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=t;0!=o--;){var l=s[o];if(!e(r[l],n[l]))return!1}return!0}return r!=r&&n!=n}},865:(e,r,n)=>{n.d(r,{k:()=>c});var t=n(4204),o=n.n(t);const s=[];function l(e,r,n,t=0,s=!1){for(const e of r)if(o()(n,e.args)){if(s)return;if(e.error)throw e.error;if(e.response)return e.response;throw e.promise}const l={args:n,promise:e(...n).then((e=>l.response=null==e||e)).catch((e=>l.error=null!=e?e:"unknown error")).then((()=>{t>0&&setTimeout((()=>{const e=r.indexOf(l);-1!==e&&r.splice(e,1)}),t)}))};if(r.push(l),!s)throw l.promise}function i(e,...r){if(void 0===r||0===r.length)e.splice(0,e.length);else{const n=e.find((e=>o()(r,e.args)));if(n){const r=e.indexOf(n);-1!==r&&e.splice(r,1)}}}function c(e,r=0){const n=[];return{read:(...t)=>l(e,n,t,r),preload:(...t)=>{l(e,n,t,r,!0)},clear:(...e)=>i(n,...e),peek:(...e)=>{var r;return null==(r=n.find((r=>o()(e,r.args))))?void 0:r.response}}}function u(e,...r){return l(e,s,r,u.lifespan)}u.lifespan=0,u.clear=(...e)=>i(s,...e),u.preload=(e,...r)=>{l(e,s,r,u.lifespan,!0)},u.peek=(...e)=>{var r;return null==(r=s.find((r=>o()(e,r.args))))?void 0:r.response}}}]);
//# sourceMappingURL=880.js.map