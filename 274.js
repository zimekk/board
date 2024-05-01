"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[274],{15274:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var l=n(44259),r=n(22155);const i=e=>Number.isFinite(e)?e:0;const o=e=>0===e||0n===e,a=(e,t)=>1===t||1n===t?e:`${e}s`,c=1e-7,s=86400000n;function u(e,t){const n="bigint"==typeof e;if(!n&&!Number.isFinite(e))throw new TypeError("Expected a finite number or bigint");(t={...t}).colonNotation&&(t.compact=!1,t.formatSubMilliseconds=!1,t.separateMilliseconds=!1,t.verbose=!1),t.compact&&(t.unitCount=1,t.secondsDecimalDigits=0,t.millisecondsDecimalDigits=0);let l=[];const r=(e,n,r,i)=>{if(0!==l.length&&t.colonNotation||!o(e)||t.colonNotation&&"m"===r){if(i=i??String(e),t.colonNotation){const e=i.includes(".")?i.split(".")[0].length:i.length,t=l.length>0?2:1;i="0".repeat(Math.max(0,t-e))+i}else i+=t.verbose?" "+a(n,e):r;l.push(i)}},u=function(e){switch(typeof e){case"number":if(Number.isFinite(e))return function(e){return{days:Math.trunc(e/864e5),hours:Math.trunc(e/36e5%24),minutes:Math.trunc(e/6e4%60),seconds:Math.trunc(e/1e3%60),milliseconds:Math.trunc(e%1e3),microseconds:Math.trunc(i(1e3*e)%1e3),nanoseconds:Math.trunc(i(1e6*e)%1e3)}}(e);break;case"bigint":return function(e){return{days:e/86400000n,hours:e/3600000n%24n,minutes:e/60000n%60n,seconds:e/1000n%60n,milliseconds:e%1000n,microseconds:0n,nanoseconds:0n}}(e)}throw new TypeError("Expected a finite number or bigint")}(e),m=BigInt(u.days);if(r(m/365n,"year","y"),r(m%365n,"day","d"),r(Number(u.hours),"hour","h"),r(Number(u.minutes),"minute","m"),t.separateMilliseconds||t.formatSubMilliseconds||!t.colonNotation&&e<1e3){const e=Number(u.seconds),n=Number(u.milliseconds),l=Number(u.microseconds),i=Number(u.nanoseconds);if(r(e,"second","s"),t.formatSubMilliseconds)r(n,"millisecond","ms"),r(l,"microsecond","µs"),r(i,"nanosecond","ns");else{const e=n+l/1e3+i/1e6,o="number"==typeof t.millisecondsDecimalDigits?t.millisecondsDecimalDigits:0,a=e>=1?Math.round(e):Math.ceil(e),c=o?e.toFixed(o):a;r(Number.parseFloat(c),"millisecond","ms",c)}}else{const l=((e,t)=>{const n=Math.floor(e*10**t+c);return(Math.round(n)/10**t).toFixed(t)})((n?Number(e%s):e)/1e3%60,"number"==typeof t.secondsDecimalDigits?t.secondsDecimalDigits:1),i=t.keepDecimalsOnWholeSeconds?l:l.replace(/\.0+$/,"");r(Number.parseFloat(i),"second","s",i)}if(0===l.length)return"0"+(t.verbose?" milliseconds":"ms");const d=t.colonNotation?":":" ";return"number"==typeof t.unitCount&&(l=l.slice(0,Math.max(t.unitCount,1))),l.join(d)}var m=n(95469),d=n(67371),f=n.n(d);const h=[];function p(e,t,n,l=0,r=!1){for(const e of t)if(f()(n,e.args)){if(r)return;if(e.error)throw e.error;if(e.response)return e.response;throw e.promise}const i={args:n,promise:e(...n).then((e=>i.response=null==e||e)).catch((e=>i.error=null!=e?e:"unknown error")).then((()=>{l>0&&setTimeout((()=>{const e=t.indexOf(i);-1!==e&&t.splice(e,1)}),l)}))};if(t.push(i),!r)throw i.promise}function b(e,...t){if(void 0===t||0===t.length)e.splice(0,e.length);else{const n=e.find((e=>f()(t,e.args)));if(n){const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}}function E(e,...t){return p(e,h,t,E.lifespan)}E.lifespan=0,E.clear=(...e)=>b(h,...e),E.preload=(e,...t)=>{p(e,h,t,E.lifespan,!0)},E.peek=(...e)=>{var t;return null==(t=h.find((t=>f()(e,t.args))))?void 0:t.response};const g=e=>Number((((e.map((e=>e.split(/\s+/))).find((e=>e[5].match(/hostname/)))||[])[4]||"").match(/^(\d+)%/)||[])[1]),y=(({hostname:e,protocol:t})=>`${t}//${e}:9001`)(new URL(`${window.location.href}`.replace(/^mqtt:\/\//,"ws://"))),M=function(e,t=0){const n=[];return{read:(...l)=>p(e,n,l,t),preload:(...l)=>{p(e,n,l,t,!0)},clear:(...e)=>b(n,...e),peek:(...e)=>{var t;return null==(t=n.find((t=>f()(e,t.args))))?void 0:t.response}}}((()=>fetch("status").then((e=>e.json())).then((({result:e})=>e)).catch((e=>(console.error(e),{databases:[],usage:[],cpus:[],hostname:null,platform:null,type:null,loadavg:null,freemem:0,totalmem:0,uptime:0})))));function v(){const[e,t]=(0,r.useState)({});return(0,r.useEffect)((()=>{const e=l.A.connect(y);return console.log({MQTT_URL:y}),e.on("connect",(()=>{e.subscribe("status",(e=>{}))})),e.on("message",((e,n)=>{const l=JSON.parse(n.toString());t((e=>({...e,[l.hostname]:l})))})),()=>{e.end()}}),[]),r.createElement("div",null,r.createElement("a",{href:"http://www.emqx.io/online-mqtt-client",rel:"noopener noreferrer",target:"_blank"},"online-mqtt-client"),r.createElement("pre",null,JSON.stringify(e,null,2)))}function N(){const e=M.read();return console.log({result:e}),console.log({total:g(e.usage)}),r.createElement("section",null,r.createElement("h2",null,"Status"),r.createElement(v,null),r.createElement("h3",null,"databases"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"name"),r.createElement("th",null,"size")),e.databases.map((({name:e,size:t},n)=>r.createElement("tr",{key:n},r.createElement("td",null,e),r.createElement("td",null,t)))))),r.createElement("h3",null,"disks"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"filesystem"),r.createElement("th",null,"size"),r.createElement("th",null,"used"),r.createElement("th",null,"avail"),r.createElement("th",null,"capacity")),e.usage.map(((e,t)=>r.createElement("tr",{key:t},r.createElement("td",{colSpan:5},e)))))),r.createElement("h3",null,"cpus"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"model"),r.createElement("th",null,"speed"),r.createElement("th",null,"times")),e.cpus.map((({model:e,speed:t,times:n},l)=>r.createElement("tr",{key:l},r.createElement("td",null,e),r.createElement("td",null,t),r.createElement("td",null,r.createElement("pre",null,JSON.stringify(n,null,2)))))))),r.createElement("h3",null,"host"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"hostname"),r.createElement("th",null,"platform"),r.createElement("th",null,"type"),r.createElement("th",null,"loadavg")),[e].map((({hostname:e,platform:t,type:n,loadavg:l},i)=>r.createElement("tr",{key:i},r.createElement("td",null,e),r.createElement("td",null,t),r.createElement("td",null,n),r.createElement("td",null,r.createElement("pre",null,JSON.stringify(l,null,2)))))))),r.createElement("h3",null,"mem"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"freemem"),r.createElement("th",null,"totalmem"),r.createElement("th",null,"usage")),[e].map((({freemem:e,totalmem:t},n)=>r.createElement("tr",{key:n},r.createElement("td",null,(0,m.A)(e)),r.createElement("td",null,(0,m.A)(t)),r.createElement("td",null,(0,m.A)(t-e))))))),r.createElement("h3",null,"uptime"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"uptime")),[e].map((({uptime:e},t)=>r.createElement("tr",{key:t},r.createElement("td",null,u(1e3*e))))))),r.createElement("pre",null,JSON.stringify(e,null,2)))}},67371:e=>{e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var l,r,i;if(Array.isArray(t)){if((l=t.length)!=n.length)return!1;for(r=l;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((l=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=l;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,i[r]))return!1;for(r=l;0!=r--;){var o=i[r];if(!e(t[o],n[o]))return!1}return!0}return t!=t&&n!=n}},95469:(e,t,n)=>{n.d(t,{A:()=>c});const l=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],r=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],i=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],o=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],a=(e,t,n)=>{let l=e;return"string"==typeof t||Array.isArray(t)?l=e.toLocaleString(t,n):!0!==t&&void 0===n||(l=e.toLocaleString(void 0,n)),l};function c(e,t){if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);const n=(t={bits:!1,binary:!1,space:!0,...t}).bits?t.binary?o:i:t.binary?r:l,c=t.space?" ":"";if(t.signed&&0===e)return` 0${c}${n[0]}`;const s=e<0,u=s?"-":t.signed?"+":"";let m;if(s&&(e=-e),void 0!==t.minimumFractionDigits&&(m={minimumFractionDigits:t.minimumFractionDigits}),void 0!==t.maximumFractionDigits&&(m={maximumFractionDigits:t.maximumFractionDigits,...m}),e<1)return u+a(e,t.locale,m)+c+n[0];const d=Math.min(Math.floor(t.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),n.length-1);return e/=(t.binary?1024:1e3)**d,m||(e=e.toPrecision(3)),u+a(Number(e),t.locale,m)+c+n[d]}}}]);
//# sourceMappingURL=274.js.map