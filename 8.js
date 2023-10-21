"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[8],{5008:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(2983),a=n(1311),o=n.n(a);const i=n(681).ZP.div`
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
`;function s(){return r.createElement(i,null,r.createElement("svg",{className:"spinner",viewBox:"0 0 50 50"},r.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})))}var l=n(6256);const u=l.z.object({page:l.z.string(),player_response:l.z.unknown(),response:l.z.object({responseContext:l.z.unknown(),contents:l.z.unknown(),currentVideoEndpoint:l.z.unknown(),trackingParams:l.z.string(),playerOverlays:l.z.unknown(),onResponseReceivedEndpoints:l.z.unknown().array(),engagementPanels:l.z.unknown().array(),topbar:l.z.unknown(),cards:l.z.unknown(),pageVisualEffects:l.z.array(l.z.object({cinematicContainerRenderer:l.z.object({gradientColorConfig:l.z.array(l.z.union([l.z.object({darkThemeColor:l.z.number(),startLocation:l.z.number()}),l.z.object({darkThemeColor:l.z.number()})])),presentationStyle:l.z.string(),config:l.z.object({lightThemeBackgroundColor:l.z.number(),darkThemeBackgroundColor:l.z.number(),animationConfig:l.z.object({minImageUpdateIntervalMs:l.z.number(),crossfadeDurationMs:l.z.number(),crossfadeStartOffset:l.z.number(),maxFrameRate:l.z.number()}),colorSourceSizeMultiplier:l.z.number(),applyClientImageBlur:l.z.boolean(),bottomColorSourceHeightMultiplier:l.z.number(),maxBottomColorSourceHeight:l.z.number(),colorSourceWidthMultiplier:l.z.number(),colorSourceHeightMultiplier:l.z.number(),blurStrength:l.z.number()})})})),frameworkUpdates:l.z.object({entityBatchUpdate:l.z.object({mutations:l.z.array(l.z.union([l.z.object({entityKey:l.z.string(),type:l.z.string(),options:l.z.object({persistenceOption:l.z.string()})}),l.z.object({entityKey:l.z.string(),type:l.z.string(),payload:l.z.object({macroMarkersListEntity:l.z.object({key:l.z.string(),externalVideoId:l.z.string(),markersList:l.z.object({markerType:l.z.string(),markers:l.z.array(l.z.object({startMillis:l.z.string(),durationMillis:l.z.string(),intensityScoreNormalized:l.z.number()})),markersMetadata:l.z.object({heatmapMetadata:l.z.object({maxHeightDp:l.z.number(),minHeightDp:l.z.number(),showHideAnimationDurationMillis:l.z.number()})}),markersDecoration:l.z.object({timedMarkerDecorations:l.z.array(l.z.object({visibleTimeRangeStartMillis:l.z.number(),visibleTimeRangeEndMillis:l.z.number(),decorationTimeMillis:l.z.number(),label:l.z.object({runs:l.z.array(l.z.object({text:l.z.string()}))}),icon:l.z.string()}))})})})})}),l.z.object({entityKey:l.z.string(),type:l.z.string(),payload:l.z.object({subscriptionStateEntity:l.z.object({key:l.z.string(),subscribed:l.z.boolean()})})})])),timestamp:l.z.object({seconds:l.z.string(),nanos:l.z.number()})})})}),html5player:l.z.string(),formats:l.z.unknown().array(),related_videos:l.z.unknown().array(),videoDetails:l.z.object({embed:l.z.object({iframeUrl:l.z.string(),width:l.z.number(),height:l.z.number()}),title:l.z.string(),description:l.z.string(),lengthSeconds:l.z.string(),ownerProfileUrl:l.z.string(),externalChannelId:l.z.string(),isFamilySafe:l.z.boolean(),availableCountries:l.z.array(l.z.string()),isUnlisted:l.z.boolean(),hasYpcMetadata:l.z.boolean(),viewCount:l.z.string(),category:l.z.string(),publishDate:l.z.string(),ownerChannelName:l.z.string(),liveBroadcastDetails:l.z.object({isLiveNow:l.z.boolean(),startTimestamp:l.z.string(),endTimestamp:l.z.string()}).optional(),uploadDate:l.z.string(),videoId:l.z.string(),keywords:l.z.array(l.z.string()),channelId:l.z.string(),isOwnerViewing:l.z.boolean(),isCrawlable:l.z.boolean(),allowRatings:l.z.boolean(),author:l.z.object({id:l.z.string(),name:l.z.string(),user:l.z.string(),channel_url:l.z.string(),external_channel_url:l.z.string(),user_url:l.z.string(),thumbnails:l.z.array(l.z.object({url:l.z.string(),width:l.z.number(),height:l.z.number()})),verified:l.z.boolean(),subscriber_count:l.z.number()}),isLowLatencyLiveStream:l.z.boolean().optional(),isPrivate:l.z.boolean(),isUnpluggedCorpus:l.z.boolean(),latencyClass:l.z.string().optional(),isLiveContent:l.z.boolean(),media:l.z.object({}),likes:l.z.null(),dislikes:l.z.null(),age_restricted:l.z.boolean(),video_url:l.z.string(),storyboards:l.z.array(l.z.object({templateUrl:l.z.string(),thumbnailWidth:l.z.number(),thumbnailHeight:l.z.number(),thumbnailCount:l.z.number(),interval:l.z.number(),columns:l.z.number(),rows:l.z.number(),storyboardCount:l.z.number()})),chapters:l.z.array(l.z.unknown()),thumbnails:l.z.array(l.z.object({url:l.z.string(),width:l.z.number(),height:l.z.number()}))}),full:l.z.boolean()});function c({link:e}){const[t,n]=(0,r.useState)(null);return(0,r.useEffect)((()=>{fetch(`video/info?videoId=${e}`).then((e=>e.json())).then((e=>u.parseAsync(e))).then(n)}),[]),t?r.createElement("div",null,t.videoDetails.thumbnails.slice(0,1).map((({url:e,width:t,height:n},a)=>r.createElement("img",{key:a,src:e,width:t,height:n,referrerPolicy:"no-referrer"}))),r.createElement("pre",null,JSON.stringify(t,null,2))):r.createElement(s,null)}function z(){const[e,t]=(0,r.useState)((()=>[])),[n,a]=(0,r.useState)(""),[i]=(0,r.useState)((()=>["https://www.youtube.com/watch?v=yxW5yuzVi8w","https://www.youtube.com/watch?v=Fp_P_e1cPOE","https://www.youtube.com/watch?v=XXYlFuWEuKI","https://www.youtube.com/watch?v=a0q6JMuLBYQ","https://www.youtube.com/watch?v=b6U3xeYqdKQ","https://www.youtube.com/watch?v=L4QxmPMplYc","https://www.youtube.com/watch?v=c8WDzsqQ7UY"]));(0,r.useEffect)((()=>{fetch("video").then((e=>e.json())).then(console.info)}),[]);const s=(0,r.useCallback)((e=>(e.preventDefault(),(e=>a(e))(e.currentTarget.href))),[]),l=(0,r.useCallback)((e=>(e.preventDefault(),(e=>fetch(`video/download?videoId=${e}`).then((e=>e.json())).then(console.info))(e.currentTarget.href))),[]),u=(0,r.useCallback)((({target:e})=>t((t=>e.checked?t.concat(e.value):t.filter((t=>t!==e.value))))),[]);return r.createElement("div",null,n&&r.createElement(o(),{url:n,controls:!0,loop:!0}),r.createElement("ul",null,i.map((t=>r.createElement("li",{key:t},r.createElement("input",{type:"checkbox",value:t,checked:e.includes(t),onChange:u}),r.createElement("a",{href:t,onClick:s},t),"[",r.createElement("a",{href:t,onClick:l},"download"),"]",e.includes(t)&&r.createElement(c,{link:t}))))))}function m(){return r.createElement("section",null,r.createElement("h2",null,"Video"),r.createElement(z,null))}}}]);
//# sourceMappingURL=8.js.map