"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[68],{40687:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(61049),a=n.n(r),l=n(22155),s=n(40788);const i=s.z.object({live:s.z.record(s.z.object({publisher:s.z.object({app:s.z.string(),stream:s.z.string(),clientId:s.z.string(),connectCreated:s.z.string(),bytes:s.z.number(),ip:s.z.string(),audio:s.z.object({codec:s.z.string(),profile:s.z.string(),samplerate:s.z.number(),channels:s.z.number()}).nullable(),video:s.z.object({codec:s.z.string(),width:s.z.number(),height:s.z.number(),profile:s.z.string(),level:s.z.number(),fps:s.z.number()})}),subscribers:s.z.array(s.z.unknown())})).optional()}),o=(({protocol:e,hostname:t})=>`${e}//${t}:7000`)(new URL(window.location.href));function c({stream:e}){const[t,n]=(0,l.useState)(null),r=(0,l.useRef)();return(0,l.useEffect)((()=>{if(a().isSupported()){const t=r.current,l=a().createPlayer({type:"flv",url:e});l.attachMediaElement(t),l.on(a().Events.ERROR,n),l.load()}}),[e]),l.createElement("div",null,l.createElement("video",{ref:r,width:"480",height:"270",autoPlay:!0,controls:!0}),t&&l.createElement("pre",{style:{background:"crimson",color:"white",margin:".5em",padding:"1em"}},JSON.stringify(t)))}function m(){const[e,t]=(0,l.useState)(null),[n,r]=(0,l.useState)(null);(0,l.useEffect)((()=>{(window?Promise.resolve({live:{NZXT:{}}}):fetch(`${o}/api/streams`,{headers:{Authorization:`Basic ${btoa(["admin","admin"].join(":"))}`}}).then((e=>e.json())).then(i.parseAsync)).then((e=>Object.keys(e.live||{}).map((e=>`${o}/live/${e}.flv`)))).then((e=>e.length>0&&(t(e),r(e[0]))))}),[]);const a=(0,l.useCallback)((({target:e})=>r(e.value)),[]);return l.createElement("section",null,l.createElement("h2",null,"Stream"),n&&e&&l.createElement("select",{value:n,onChange:a},e.map((e=>l.createElement("option",{key:e,value:e},e)))),n&&l.createElement(c,{stream:n}),l.createElement("a",{href:`${o}/admin/streams`,target:"_blank"},"streams"),l.createElement("pre",{style:{background:"linen",margin:".5em",padding:"1em"}},"~ $ git clone https://github.com/illuspas/Node-Media-Server\n\n~/Node-Media-Server $ docker build . -t nms\n~/Node-Media-Server $ docker run --name nms -d -p 1935:1935 -p 7000:8000 -p 8443:8443 nms\n"),n&&l.createElement("pre",{style:{background:"linen",margin:".5em",padding:"1em"}},`ffmpeg -stream_loop -1 -re -i share/library/BilaShsQphM.mp4 -c copy -f flv ${s=new URL(n),`rtmp://${s.hostname}${s.pathname.split(".")[0]}`}\n`));var s}}}]);
//# sourceMappingURL=68.js.map