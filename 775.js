"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[775],{5775:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(1855),o=n(8932),a={recordingDuration:0,initRecording:!1,mediaStream:null,mediaRecorder:null,audio:null};const i=r.memo((function(e){var t,n,i=e.setRecorderState,c=e.options,l=(0,r.useRef)(null),u=function(e,t){var n,r;e.fillStyle=null!==(n=null==c?void 0:c.backgroundColor)&&void 0!==n?n:"#fff",e.fillRect(0,0,e.canvas.width,e.canvas.height),e.fillStyle=null!==(r=null==c?void 0:c.fillStyle)&&void 0!==r?r:"#2cbcbe",t.slice(t.length>50?t.length-50:0,-1).map((function(t,n){var r,o=t+3,a=10*n+10;return e.strokeStyle=null!==(r=null==c?void 0:c.strokeStyle)&&void 0!==r?r:"#d5d5d5",e.beginPath(),e.roundRect(a,e.canvas.height/2-o/2,3,o,8),e.stroke(),e.fill(),t}))},f=function(e,t){var n=(0,r.useState)(a),i=n[0],c=n[1],l=(0,r.useState)(null),u=l[0],f=l[1];return(0,r.useEffect)((function(){var e=null;return i.initRecording?e=setInterval((function(){c((function(e){return(0,o.Cl)((0,o.Cl)({},e),{recordingDuration:e.recordingDuration+1})}))}),1e3):"number"==typeof e&&clearInterval(e),function(){"number"==typeof e&&clearInterval(e)}})),(0,r.useEffect)((function(){c((function(e){return e.mediaStream?(0,o.Cl)((0,o.Cl)({},e),{mediaRecorder:new MediaRecorder(e.mediaStream)}):e}))}),[i.mediaStream]),(0,r.useEffect)((function(){var e=i.mediaRecorder,t=[];return e&&"inactive"===e.state&&(e.start(),e.ondataavailable=function(e){t.push(e.data)},e.onstop=function(){var e=new Blob(t,{type:"audio/ogg; codecs=opus"});t=[],c((function(t){return t.mediaRecorder?(0,o.Cl)((0,o.Cl)({},a),{mediaStream:t.mediaStream,audio:window.URL.createObjectURL(e)}):(0,o.Cl)((0,o.Cl)({},a),{mediaStream:t.mediaStream})}))}),function(){e&&e.stream.getAudioTracks().forEach((function(e){return e.stop()}))}}),[i.mediaRecorder]),(0,r.useEffect)((function(){var n=e.current,r=null==n?void 0:n.getContext("2d");if(n.width=500,n.height=50,i.mediaStream){var o=new AudioContext,a=o.createAnalyser(),c=o.createMediaStreamSource(i.mediaStream),l=o.createScriptProcessor(0,1,1);if(null===u&&f(l),i.initRecording){a.smoothingTimeConstant=.8,a.fftSize=128,c.connect(a),a.connect(l),l.connect(o.destination);var s=[];l.onaudioprocess=function(){var e=new Uint8Array(a.frequencyBinCount);a.getByteFrequencyData(e);var n=e.reduce((function(e,t){return e+t}),0)/e.length/4;s.push(Math.floor(n)),t(r,s)}}else u.onaudioprocess=null,f(null)}}),[i.initRecording]),(0,o.Cl)((0,o.Cl)({},i),{startRecording:function(){return function(e){return(0,o.sH)(this,void 0,void 0,(function(){var t,n;return(0,o.YH)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,navigator.mediaDevices.getUserMedia({audio:!0})];case 1:return t=r.sent(),e((function(e){return(0,o.Cl)((0,o.Cl)({},e),{initRecording:!0,mediaStream:t})})),[3,3];case 2:return n=r.sent(),console.log(n),[3,3];case 3:return[2]}}))}))}(c)},cancelRecording:function(){return c(a)},saveRecording:function(){var e;"inactive"!==(e=i.mediaRecorder).state&&e.stop()}})}(l,u);return(0,r.useEffect)((function(){i&&i(f)}),[f,i]),(0,r.useEffect)((function(){var e=l.current,t=null==e?void 0:e.getContext("2d");u(t,[])}),[]),r.createElement("canvas",{id:"audio-recorder-canvas",width:null!==(t=null==c?void 0:c.width)&&void 0!==t?t:200,height:null!==(n=null==c?void 0:c.height)&&void 0!==n?n:200,ref:l})}));function c(){const[e,t]=(0,r.useState)(null);return r.createElement("section",null,r.createElement("h2",null,"Waveform"),r.createElement("div",null,e?.initRecording?r.createElement("button",{onClick:e?.saveRecording},"Stop"):r.createElement("button",{onClick:e?.startRecording},"Start"),r.createElement(i,{setRecorderState:t}),e?.recordingDuration),r.createElement("a",{href:"https://www.kaggle.com/datasets/aanhari/alexa-dataset",target:"_blank",rel:"noopener noreferrer"},"alexa-dataset"))}},8932:(e,t,n)=>{n.d(t,{C6:()=>o,Cl:()=>a,Ju:()=>l,YH:()=>c,fX:()=>f,sH:()=>i,zs:()=>u});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function c(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}function l(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function f(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);
//# sourceMappingURL=775.js.map