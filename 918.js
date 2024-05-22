(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[918],{71918:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>q});var l=n(22155),a=n(17440),r=n(3204),c=n(66548),s=n(94130);const u=new a.l4(`${location.pathname}graphql`,{headers:{}}),i=(0,s.UU)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});var m=n(74008),o=n.n(m),d=n(9193),E=n.n(d),p=n(19603),h=n.n(p),A=n(68488),S=n.n(A),f=n(27556),C=n.n(f),v=n(17281),b=n.n(v),y=n(69837),D=n.n(y),I={};I.styleTagTransform=b(),I.setAttributes=S(),I.insert=h().bind(null,"head"),I.domAPI=E(),I.insertStyleElement=C(),o()(D(),I);const g=D()&&D().locals?D().locals:void 0;class k{client=u;subscriptions=i}const x=a.J1`
  query ScanQuery {
    lan {
      scan
    }
  }
`,w=a.J1`
  query GetCurrentConnectionsQuery {
    lan {
      currentConnections
    }
  }
`,P=new class extends k{scan(){return(0,r.H)(this.client.request(x)).pipe((0,c.T)((({lan:{scan:e}})=>e)))}getCurrentConnections(){return(0,r.H)(this.client.request(w)).pipe((0,c.T)((({lan:{currentConnections:e}})=>e)))}};var T=function(e){return e[e.ID=0]="ID",e[e.IP=1]="IP",e}(T||{});const N=(e,t)=>e.reduce(((e,{mac:n})=>{const l=Object.entries(t).find((([e])=>n.includes(e)));return l?Object.assign(e,{[n]:l[1]}):e}),{}),B=e=>e.split(".").reduce(((e,t)=>256*e+parseInt(t,10)),0),J=(e,t)=>Number(e)-Number(t),_=(e,t)=>B(e)-B(t);function L({devices:e}){const[t,n]=(0,l.useState)(T.ID),[a,r]=(0,l.useState)("ID\tMAC Address\tReserved IP Address\tStatus\tModify\n"),c=(0,l.useMemo)((()=>a.split("\n").map((e=>e.match(/^(\d+)\t(\S+-\S+-\S+-\S+-\S+-\S+)\t(\S+)\t(\S+)/))).filter(Boolean).map((([e,t,n,l,a])=>({id:t,mac:n,ip:l,status:a}))).toSorted(((e,n)=>t===T.ID?J(e.id,n.id):_(e.ip,n.ip)))),[t,a]),s=(0,l.useMemo)((()=>N(c,e)),[c,e]);return l.createElement("div",{className:g.Section},l.createElement("h3",null,"Address Reservation"),l.createElement("div",{style:{display:"flex"}},l.createElement("textarea",{style:{flex:1},rows:5,value:a,onChange:({target:e})=>r(e.value)})),c&&l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",null,t===T.ID?l.createElement("u",null,"ID"):l.createElement("a",{href:"#",onClick:e=>(e.preventDefault(),n(T.ID))},"ID")),l.createElement("th",null,"MAC Address"),l.createElement("th",null,t===T.IP?l.createElement("u",null,"Reserved IP Address"):l.createElement("a",{href:"#",onClick:e=>(e.preventDefault(),n(T.IP))},"Reserved IP Address")),l.createElement("th",null,"Status")),c.map(((e,t)=>l.createElement("tr",{key:t},l.createElement("td",null,e.id),l.createElement("td",null,e.mac,s[e.mac]&&l.createElement("span",null," (",s[e.mac],")")),l.createElement("td",null,e.ip),l.createElement("td",null,e.status)))))),l.createElement("pre",null,JSON.stringify(a,null,2)))}function M({devices:e}){const[t,n]=(0,l.useState)(T.ID),[a,r]=(0,l.useState)("ID\tClient Name\tMAC Address\tAssigned IP\tLease Time\n"),c=(0,l.useMemo)((()=>a.split("\n").map((e=>e.match(/^(\d+)\t(\S+)\t(\S+-\S+-\S+-\S+-\S+-\S+)\t(\S+)\t(\S+)/))).filter(Boolean).map((([e,t,n,l,a,r])=>({id:t,name:n,mac:l,ip:a,time:r}))).toSorted(((e,n)=>t===T.ID?J(e.id,n.id):_(e.ip,n.ip)))),[t,a]),s=(0,l.useMemo)((()=>N(c,e)),[c,e]);return l.createElement("div",{className:g.Section},l.createElement("h3",null,"DHCP Clients List"),l.createElement("div",{style:{display:"flex"}},l.createElement("textarea",{style:{flex:1},rows:5,value:a,onChange:({target:e})=>r(e.value)})),c&&l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",null,t===T.ID?l.createElement("u",null,"ID"):l.createElement("a",{href:"#",onClick:e=>(e.preventDefault(),n(T.ID))},"ID")),l.createElement("th",null,"Client Name"),l.createElement("th",null,"MAC Address"),l.createElement("th",null,t===T.IP?l.createElement("u",null,"Assigned IP"):l.createElement("a",{href:"#",onClick:e=>(e.preventDefault(),n(T.IP))},"Assigned IP")),l.createElement("th",null,"Lease Time")),c.map(((e,t)=>l.createElement("tr",{key:t},l.createElement("td",null,e.id),l.createElement("td",null,e.name),l.createElement("td",null,e.mac,s[e.mac]&&l.createElement("span",null," (",s[e.mac],")")),l.createElement("td",null,e.ip),l.createElement("td",null,e.time)))))),l.createElement("pre",null,JSON.stringify(a,null,2)))}function j({text:e,setText:t}){return l.createElement("div",{className:g.Section},l.createElement("h3",null,"Devices List"),l.createElement("div",{style:{display:"flex"}},l.createElement("textarea",{style:{flex:1},rows:5,value:e,onChange:({target:e})=>t(e.value)})),l.createElement("pre",null,JSON.stringify(e,null,2)))}function q(){const{data:e,scan:t}=function(){const[e,t]=(0,l.useState)((()=>[]));return(0,l.useEffect)((()=>{P.getCurrentConnections().subscribe((e=>t(e)))}),[]),{data:e,scan:(0,l.useCallback)((()=>P.scan().subscribe((e=>t(e)))),[])}}(),[n,a]=(0,l.useState)("\nD9-11 pizero\n"),r=(0,l.useMemo)((()=>n.split("\n").map((e=>e.match(/^(\S+)\s+([^\n|$]+)/))).filter(Boolean).map((([e,t,n])=>({pattern:t,name:n}))).reduce(((e,{pattern:t,name:n})=>Object.assign(e,{[t]:n})),{})),[n]);return l.createElement("div",{className:g.Section},l.createElement("h2",null,"Lan"),e&&l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",null,"ssid"),l.createElement("th",null,"mac"),l.createElement("th",null,"channel"),l.createElement("th",null,"signal_level"),l.createElement("th",null,"quality"),l.createElement("th",null,"security")),e.map(((e,t)=>l.createElement("tr",{key:t},l.createElement("td",null,e.ssid),l.createElement("td",null,e.mac),l.createElement("td",null,e.channel),l.createElement("td",null,e.signal_level),l.createElement("td",null,e.quality),l.createElement("td",null,e.security)))))),l.createElement("button",{onClick:()=>t()},"scan"),l.createElement("pre",null,JSON.stringify(e,null,2)),l.createElement("h2",null,"DHCP"),l.createElement(j,{text:n,setText:a}),l.createElement(M,{devices:r}),l.createElement(L,{devices:r}))}},69837:(e,t,n)=>{var l=n(11288),a=n(35128)(l);a.push([e.id,".jnL5aDk4hheBE_J1TFdb{color:green}.jnL5aDk4hheBE_J1TFdb table{border-collapse:collapse;width:100%}.jnL5aDk4hheBE_J1TFdb th,.jnL5aDk4hheBE_J1TFdb td{padding:.25em;text-align:left}","",{version:3,sources:["webpack://./../lan/src/containers/styles.module.scss"],names:[],mappings:"AAAA,sBACE,WAAA,CAEA,4BACE,wBAAA,CACA,UAAA,CAEF,kDAEE,aAAA,CACA,eAAA",sourcesContent:[".Section {\n  color: green;\n\n  table {\n    border-collapse: collapse;\n    width: 100%;\n  }\n  th,\n  td {\n    padding: 0.25em;\n    text-align: left;\n  }\n}\n"],sourceRoot:""}]),a.locals={Section:"jnL5aDk4hheBE_J1TFdb"},e.exports=a}}]);
//# sourceMappingURL=918.js.map