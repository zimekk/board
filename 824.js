"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[824],{46161:(t,e,n)=>{n.d(e,{_P:()=>o,my:()=>a,w4:()=>r}),Math.pow(10,8);const a=6048e5,r=864e5,o=Symbol.for("constructDateFrom")},49005:(t,e,n)=>{n.d(e,{w:()=>r});var a=n(46161);function r(t,e){return"function"==typeof t?t(e):t&&"object"==typeof t&&a._P in t?t[a._P](e):t instanceof Date?new t.constructor(e):new Date(e)}},85824:(t,e,n)=>{n.d(e,{GP:()=>X});const a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function r(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const o={date:r({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:r({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:r({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},i={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function s(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],u=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(u)?function(t){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(u):function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(u);let c;return c=t.valueCallback?t.valueCallback(s):s,c=n.valueCallback?n.valueCallback(c):c,{value:c,rest:e.slice(i.length)}}}var c;const d={code:"en-US",formatDistance:(t,e,n)=>{let r;const o=a[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:o,formatRelative:(t,e,n,a)=>i[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(c={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(c.matchPattern);if(!n)return null;const a=n[0],r=t.match(c.parsePattern);if(!r)return null;let o=c.valueCallback?c.valueCallback(r[0]):r[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(a.length)}}),era:s({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:s({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:s({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:s({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let l={};function h(){return l}var m=n(13435);function f(t){const e=(0,m.a)(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}var g=n(49005),w=n(46161);function b(t,e){const n=(0,m.a)(t,e?.in);return n.setHours(0,0,0,0),n}function y(t,e){const n=(0,m.a)(t,e?.in);return function(t,e,n){const[a,r]=function(t,...e){const n=g.w.bind(null,t||e.find((t=>"object"==typeof t)));return e.map(n)}(n?.in,t,e),o=b(a),i=b(r),u=+o-f(o),s=+i-f(i);return Math.round((u-s)/w.w4)}(n,function(t,e){const n=(0,m.a)(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n))+1}function p(t,e){const n=h(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=(0,m.a)(t,e?.in),o=r.getDay(),i=(o<a?7:0)+o-a;return r.setDate(r.getDate()-i),r.setHours(0,0,0,0),r}function M(t,e){return p(t,{...e,weekStartsOn:1})}function v(t,e){const n=(0,m.a)(t,e?.in),a=n.getFullYear(),r=(0,g.w)(n,0);r.setFullYear(a+1,0,4),r.setHours(0,0,0,0);const o=M(r),i=(0,g.w)(n,0);i.setFullYear(a,0,4),i.setHours(0,0,0,0);const u=M(i);return n.getTime()>=o.getTime()?a+1:n.getTime()>=u.getTime()?a:a-1}function k(t,e){const n=(0,m.a)(t,e?.in),a=+M(n)-+function(t,e){const n=v(t,e),a=(0,g.w)(e?.in||t,0);return a.setFullYear(n,0,4),a.setHours(0,0,0,0),M(a)}(n);return Math.round(a/w.my)+1}function P(t,e){const n=(0,m.a)(t,e?.in),a=n.getFullYear(),r=h(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=(0,g.w)(e?.in||t,0);i.setFullYear(a+1,0,o),i.setHours(0,0,0,0);const u=p(i,e),s=(0,g.w)(e?.in||t,0);s.setFullYear(a,0,o),s.setHours(0,0,0,0);const c=p(s,e);return+n>=+u?a+1:+n>=+c?a:a-1}function x(t,e){const n=(0,m.a)(t,e?.in),a=+p(n,e)-+function(t,e){const n=h(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,r=P(t,e),o=(0,g.w)(e?.in||t,0);return o.setFullYear(r,0,a),o.setHours(0,0,0,0),p(o,e)}(n,e);return Math.round(a/w.my)+1}function S(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const W={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return S("yy"===e?a%100:a,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):S(n+1,2)},d:(t,e)=>S(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>S(t.getHours()%12||12,e.length),H:(t,e)=>S(t.getHours(),e.length),m:(t,e)=>S(t.getMinutes(),e.length),s:(t,e)=>S(t.getSeconds(),e.length),S(t,e){const n=e.length,a=t.getMilliseconds();return S(Math.trunc(a*Math.pow(10,n-3)),e.length)}},D={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return W.y(t,e)},Y:function(t,e,n,a){const r=P(t,a),o=r>0?r:1-r;return"YY"===e?S(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):S(o,e.length)},R:function(t,e){return S(v(t),e.length)},u:function(t,e){return S(t.getFullYear(),e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return S(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return S(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return W.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return S(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=x(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):S(r,e.length)},I:function(t,e,n){const a=k(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):S(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):W.d(t,e)},D:function(t,e,n){const a=y(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):S(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return S(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return S(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return S(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return W.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):W.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):S(a,e.length)},k:function(t,e,n){let a=t.getHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):S(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):W.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):W.s(t,e)},S:function(t,e){return W.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return C(a);case"XXXX":case"XX":return Y(a);default:return Y(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return C(a);case"xxxx":case"xx":return Y(a);default:return Y(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+T(a,":");default:return"GMT"+Y(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+T(a,":");default:return"GMT"+Y(a,":")}},t:function(t,e,n){return S(Math.trunc(+t/1e3),e.length)},T:function(t,e,n){return S(+t,e.length)}};function T(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.trunc(a/60),o=a%60;return 0===o?n+String(r):n+String(r)+e+S(o,2)}function C(t,e){return t%60==0?(t>0?"-":"+")+S(Math.abs(t)/60,2):Y(t,e)}function Y(t,e=""){const n=t>0?"-":"+",a=Math.abs(t);return n+S(Math.trunc(a/60),2)+e+S(a%60,2)}const O=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},q=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},F={p:q,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return O(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",O(a,e)).replace("{{time}}",q(r,e))}},H=/^D+$/,N=/^Y+$/,E=["D","DD","YY","YYYY"];function j(t){return!(!((e=t)instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))&&"number"!=typeof t||isNaN(+(0,m.a)(t)));var e}const z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,L=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Q=/^'([^]*?)'?$/,A=/''/g,G=/[a-zA-Z]/;function X(t,e,n){const a=h(),r=n?.locale??a.locale??d,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,u=(0,m.a)(t,n?.in);if(!j(u))throw new RangeError("Invalid time value");let s=e.match(L).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,F[e])(t,r.formatLong):t})).join("").match(z).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:B(t)};if(D[e])return{isToken:!0,value:t};if(e.match(G))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));r.localize.preprocessor&&(s=r.localize.preprocessor(u,s));const c={firstWeekContainsDate:o,weekStartsOn:i,locale:r};return s.map((a=>{if(!a.isToken)return a.value;const o=a.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return N.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return H.test(t)}(o))&&function(t,e,n){const a=function(t,e,n){const a="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(a),E.includes(t))throw new RangeError(a)}(o,e,String(t)),(0,D[o[0]])(u,o,r.localize,c)})).join("")}function B(t){const e=t.match(Q);return e?e[1].replace(A,"'"):t}},13435:(t,e,n)=>{n.d(e,{a:()=>r});var a=n(49005);function r(t,e){return(0,a.w)(e||t,t)}}}]);
//# sourceMappingURL=824.js.map