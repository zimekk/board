"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[816],{816:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});var a=n(2983),o=n(1311),r=n.n(o);const i=n(681).ZP.div`
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
`;function s(){return a.createElement(i,null,a.createElement("svg",{className:"spinner",viewBox:"0 0 50 50"},a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})))}var c=n(6256);const z=c.z.object({page:c.z.string(),player_response:c.z.object({responseContext:c.z.object({serviceTrackingParams:c.z.array(c.z.object({service:c.z.string(),params:c.z.array(c.z.object({key:c.z.string(),value:c.z.string()}))})),maxAgeSeconds:c.z.number(),mainAppWebResponseContext:c.z.object({loggedOut:c.z.boolean(),trackingParam:c.z.string()}),webResponseContextExtensionData:c.z.object({hasDecorated:c.z.boolean()})}),playabilityStatus:c.z.object({status:c.z.string(),playableInEmbed:c.z.boolean(),miniplayer:c.z.object({miniplayerRenderer:c.z.object({playbackMode:c.z.string()})}),contextParams:c.z.string()}),streamingData:c.z.object({expiresInSeconds:c.z.string(),formats:c.z.array(c.z.object({itag:c.z.number(),mimeType:c.z.string(),bitrate:c.z.number(),width:c.z.number(),height:c.z.number(),lastModified:c.z.string(),quality:c.z.string(),fps:c.z.number(),qualityLabel:c.z.string(),projectionType:c.z.string(),audioQuality:c.z.string(),approxDurationMs:c.z.string(),audioSampleRate:c.z.string(),audioChannels:c.z.number(),signatureCipher:c.z.string().optional()})),adaptiveFormats:c.z.object({}).array()}),playbackTracking:c.z.object({videostatsPlaybackUrl:c.z.object({baseUrl:c.z.string()}),videostatsDelayplayUrl:c.z.object({baseUrl:c.z.string()}),videostatsWatchtimeUrl:c.z.object({baseUrl:c.z.string()}),ptrackingUrl:c.z.object({baseUrl:c.z.string()}),qoeUrl:c.z.object({baseUrl:c.z.string()}),atrUrl:c.z.object({baseUrl:c.z.string(),elapsedMediaTimeSeconds:c.z.number()}),videostatsScheduledFlushWalltimeSeconds:c.z.array(c.z.number()),videostatsDefaultFlushIntervalSeconds:c.z.number()}),captions:c.z.object({playerCaptionsTracklistRenderer:c.z.object({captionTracks:c.z.array(c.z.object({baseUrl:c.z.string(),name:c.z.object({simpleText:c.z.string()}),vssId:c.z.string(),languageCode:c.z.string(),isTranslatable:c.z.boolean(),trackName:c.z.string()})),audioTracks:c.z.array(c.z.object({})),translationLanguages:c.z.array(c.z.object({languageCode:c.z.string(),languageName:c.z.object({simpleText:c.z.string()})})),defaultAudioTrackIndex:c.z.number()})}).optional(),videoDetails:c.z.object({videoId:c.z.string(),title:c.z.string(),lengthSeconds:c.z.string(),keywords:c.z.array(c.z.string()).optional(),channelId:c.z.string(),isOwnerViewing:c.z.boolean(),shortDescription:c.z.string(),isCrawlable:c.z.boolean(),thumbnail:c.z.object({thumbnails:c.z.array(c.z.object({url:c.z.string(),width:c.z.number(),height:c.z.number()}))}),allowRatings:c.z.boolean(),viewCount:c.z.string(),author:c.z.string(),isPrivate:c.z.boolean()}),playerConfig:c.z.object({audioConfig:c.z.object({loudnessDb:c.z.number(),perceptualLoudnessDb:c.z.number(),enablePerFormatLoudness:c.z.boolean()}),streamSelectionConfig:c.z.object({maxBitrate:c.z.string()}),mediaCommonConfig:c.z.object({dynamicReadaheadConfig:c.z.object({maxReadAheadMediaTimeMs:c.z.number(),minReadAheadMediaTimeMs:c.z.number(),readAheadGrowthRateMs:c.z.number()})}),webPlayerConfig:c.z.object({useCobaltTvosDash:c.z.boolean(),webPlayerActionsPorting:c.z.object({getSharePanelCommand:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({sendPost:c.z.boolean(),apiUrl:c.z.string()})}),webPlayerShareEntityServiceEndpoint:c.z.object({serializedShareEntity:c.z.string()})}).optional(),subscribeCommand:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({sendPost:c.z.boolean(),apiUrl:c.z.string()})}),subscribeEndpoint:c.z.object({channelIds:c.z.array(c.z.string()),params:c.z.string()})}),unsubscribeCommand:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({sendPost:c.z.boolean(),apiUrl:c.z.string()})}),unsubscribeEndpoint:c.z.object({channelIds:c.z.array(c.z.string()),params:c.z.string()})}),addToWatchLaterCommand:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({sendPost:c.z.boolean(),apiUrl:c.z.string()})}),playlistEditEndpoint:c.z.object({playlistId:c.z.string(),actions:c.z.array(c.z.object({addedVideoId:c.z.string(),action:c.z.string()}))})}).optional(),removeFromWatchLaterCommand:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({sendPost:c.z.boolean(),apiUrl:c.z.string()})}),playlistEditEndpoint:c.z.object({playlistId:c.z.string(),actions:c.z.array(c.z.object({action:c.z.string(),removedVideoId:c.z.string()}))})}).optional()})})}),storyboards:c.z.object({playerStoryboardSpecRenderer:c.z.object({spec:c.z.string(),recommendedLevel:c.z.number(),highResolutionRecommendedLevel:c.z.number().optional()})}),microformat:c.z.object({playerMicroformatRenderer:c.z.object({thumbnail:c.z.object({thumbnails:c.z.array(c.z.object({url:c.z.string(),width:c.z.number(),height:c.z.number()}))}),embed:c.z.object({iframeUrl:c.z.string(),width:c.z.number(),height:c.z.number()}),title:c.z.object({simpleText:c.z.string()}),description:c.z.object({simpleText:c.z.string()}),lengthSeconds:c.z.string(),ownerProfileUrl:c.z.string(),externalChannelId:c.z.string(),isFamilySafe:c.z.boolean(),availableCountries:c.z.array(c.z.string()),isUnlisted:c.z.boolean(),hasYpcMetadata:c.z.boolean(),viewCount:c.z.string(),category:c.z.string(),publishDate:c.z.string(),ownerChannelName:c.z.string(),liveBroadcastDetails:c.z.object({isLiveNow:c.z.boolean(),startTimestamp:c.z.string(),endTimestamp:c.z.string()}).optional(),uploadDate:c.z.string()})}),trackingParams:c.z.string(),attestation:c.z.object({playerAttestationRenderer:c.z.object({challenge:c.z.string(),botguardData:c.z.object({program:c.z.string(),interpreterSafeUrl:c.z.object({privateDoNotAccessOrElseTrustedResourceUrlWrappedValue:c.z.string()}),serverEnvironment:c.z.number()})})}),adBreakHeartbeatParams:c.z.string(),frameworkUpdates:c.z.object({entityBatchUpdate:c.z.object({mutations:c.z.array(c.z.object({entityKey:c.z.string(),type:c.z.string(),payload:c.z.object({offlineabilityEntity:c.z.object({key:c.z.string(),addToOfflineButtonState:c.z.string()})})})),timestamp:c.z.object({seconds:c.z.string(),nanos:c.z.number()})})})}),response:c.z.object({responseContext:c.z.object({serviceTrackingParams:c.z.array(c.z.object({service:c.z.string(),params:c.z.array(c.z.object({key:c.z.string(),value:c.z.string()}))})),mainAppWebResponseContext:c.z.object({loggedOut:c.z.boolean(),trackingParam:c.z.string()}),webResponseContextExtensionData:c.z.object({ytConfigData:c.z.object({visitorData:c.z.string(),rootVisualElementType:c.z.number()}),webPrefetchData:c.z.object({navigationEndpoints:c.z.array(c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({url:c.z.string(),webPageType:c.z.string(),rootVe:c.z.number()})}),watchEndpoint:c.z.object({videoId:c.z.string(),params:c.z.string(),playerParams:c.z.string(),watchEndpointSupportedPrefetchConfig:c.z.object({prefetchHintConfig:c.z.object({prefetchPriority:c.z.number(),countdownUiRelativeSecondsPrefetchCondition:c.z.number()})})})}))}),hasDecorated:c.z.boolean()})}),contents:c.z.object({twoColumnWatchNextResults:c.z.object({results:c.z.object({results:c.z.object({contents:c.z.array(c.z.object({})),trackingParams:c.z.string()})}),secondaryResults:c.z.object({secondaryResults:c.z.object({})}),autoplay:c.z.object({autoplay:c.z.object({sets:c.z.array(c.z.object({mode:c.z.string(),autoplayVideo:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({url:c.z.string(),webPageType:c.z.string(),rootVe:c.z.number()})}),watchEndpoint:c.z.object({videoId:c.z.string(),params:c.z.string(),playerParams:c.z.string(),watchEndpointSupportedPrefetchConfig:c.z.object({prefetchHintConfig:c.z.object({prefetchPriority:c.z.number(),countdownUiRelativeSecondsPrefetchCondition:c.z.number()})})})})})),countDownSecs:c.z.number(),trackingParams:c.z.string()})})})}),currentVideoEndpoint:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({url:c.z.string(),webPageType:c.z.string(),rootVe:c.z.number()})}),watchEndpoint:c.z.object({videoId:c.z.string(),watchEndpointSupportedOnesieConfig:c.z.object({html5PlaybackOnesieConfig:c.z.object({commonConfig:c.z.object({url:c.z.string()})})})})}),trackingParams:c.z.string(),playerOverlays:c.z.object({playerOverlayRenderer:c.z.object({})}),onResponseReceivedEndpoints:c.z.array(c.z.object({})),topbar:c.z.object({desktopTopbarRenderer:c.z.object({logo:c.z.object({topbarLogoRenderer:c.z.object({iconImage:c.z.object({iconType:c.z.string()}),tooltipText:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),endpoint:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({url:c.z.string(),webPageType:c.z.string(),rootVe:c.z.number(),apiUrl:c.z.string()})}),browseEndpoint:c.z.object({browseId:c.z.string()})}),trackingParams:c.z.string(),overrideEntityKey:c.z.string()})}),searchbox:c.z.object({fusionSearchboxRenderer:c.z.object({icon:c.z.object({iconType:c.z.string()}),placeholderText:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),config:c.z.object({webSearchboxConfig:c.z.object({requestLanguage:c.z.string(),requestDomain:c.z.string(),hasOnscreenKeyboard:c.z.boolean(),focusSearchbox:c.z.boolean()})}),trackingParams:c.z.string(),searchEndpoint:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({url:c.z.string(),webPageType:c.z.string(),rootVe:c.z.number()})}),searchEndpoint:c.z.object({query:c.z.string()})}),clearButton:c.z.object({buttonRenderer:c.z.object({style:c.z.string(),size:c.z.string(),isDisabled:c.z.boolean(),icon:c.z.object({iconType:c.z.string()}),trackingParams:c.z.string(),accessibilityData:c.z.object({accessibilityData:c.z.object({label:c.z.string()})})})})})}),trackingParams:c.z.string(),interstitial:c.z.object({consentBumpV2Renderer:c.z.object({interstitialLogoAside:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),languagePickerButton:c.z.object({buttonRenderer:c.z.object({style:c.z.string(),size:c.z.string(),isDisabled:c.z.boolean(),text:c.z.object({simpleText:c.z.string()}),icon:c.z.object({iconType:c.z.string()}),accessibility:c.z.object({label:c.z.string()}),trackingParams:c.z.string()})}),interstitialTitle:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),customizeButton:c.z.object({buttonRenderer:c.z.object({style:c.z.string(),size:c.z.string(),isDisabled:c.z.boolean(),text:c.z.object({simpleText:c.z.string()}),trackingParams:c.z.string(),command:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({url:c.z.string(),webPageType:c.z.string(),rootVe:c.z.number()})}),urlEndpoint:c.z.object({url:c.z.string()})})})}),agreeButton:c.z.object({buttonRenderer:c.z.object({style:c.z.string(),size:c.z.string(),isDisabled:c.z.boolean(),text:c.z.object({simpleText:c.z.string()}),accessibility:c.z.object({label:c.z.string()}),trackingParams:c.z.string(),command:c.z.object({clickTrackingParams:c.z.string(),saveConsentAction:c.z.object({socsCookie:c.z.string(),savePreferenceUrl:c.z.string()})})})}),privacyLink:c.z.object({runs:c.z.array(c.z.object({text:c.z.string(),navigationEndpoint:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({url:c.z.string(),webPageType:c.z.string(),rootVe:c.z.number()})}),urlEndpoint:c.z.object({url:c.z.string()})})}))}),termsLink:c.z.object({runs:c.z.array(c.z.object({text:c.z.string(),navigationEndpoint:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({url:c.z.string(),webPageType:c.z.string(),rootVe:c.z.number()})}),urlEndpoint:c.z.object({url:c.z.string()})})}))}),trackingParams:c.z.string(),signInButton:c.z.object({buttonRenderer:c.z.object({style:c.z.string(),size:c.z.string(),isDisabled:c.z.boolean(),text:c.z.object({simpleText:c.z.string()}),icon:c.z.object({iconType:c.z.string()}),tooltip:c.z.string(),trackingParams:c.z.string(),command:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({url:c.z.string(),webPageType:c.z.string(),rootVe:c.z.number()})}),signInEndpoint:c.z.object({hack:c.z.boolean()})})})}),languageList:c.z.object({dropdownRenderer:c.z.object({entries:c.z.array(c.z.object({dropdownItemRenderer:c.z.object({label:c.z.object({simpleText:c.z.string()}),isSelected:c.z.boolean(),stringValue:c.z.string(),onSelectCommand:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({sendPost:c.z.boolean()})}),signalServiceEndpoint:c.z.object({signal:c.z.string(),actions:c.z.array(c.z.object({clickTrackingParams:c.z.string(),selectLanguageCommand:c.z.object({hl:c.z.string()})}))})})})})),accessibility:c.z.object({label:c.z.string()})})}),readMoreButton:c.z.object({buttonRenderer:c.z.object({style:c.z.string(),size:c.z.string(),isDisabled:c.z.boolean(),text:c.z.object({simpleText:c.z.string()}),icon:c.z.object({iconType:c.z.string()}),trackingParams:c.z.string(),iconPosition:c.z.string()})}),disableP13nButton:c.z.object({buttonRenderer:c.z.object({style:c.z.string(),size:c.z.string(),isDisabled:c.z.boolean(),text:c.z.object({simpleText:c.z.string()}),trackingParams:c.z.string(),accessibilityData:c.z.object({accessibilityData:c.z.object({label:c.z.string()})}),command:c.z.object({clickTrackingParams:c.z.string(),disablePersonalizationAction:c.z.object({socsCookie:c.z.string(),savePreferenceUrl:c.z.string()})})})}),loadingMessage:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),errorMessage:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),eomV1Text:c.z.object({essentialCookieMsg:c.z.object({begin:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),items:c.z.array(c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}))}),nonEssentialCookieMsg:c.z.object({begin:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),items:c.z.array(c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}))}),ifReject:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),personalization:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),moreOptions:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))})})})}).optional(),countryCode:c.z.string(),topbarButtons:c.z.array(c.z.object({})),hotkeyDialog:c.z.object({hotkeyDialogRenderer:c.z.object({title:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),sections:c.z.array(c.z.object({hotkeyDialogSectionRenderer:c.z.object({title:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),options:c.z.array(c.z.object({hotkeyDialogSectionOptionRenderer:c.z.object({label:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),hotkey:c.z.string()})}))})})),dismissButton:c.z.object({buttonRenderer:c.z.object({style:c.z.string(),size:c.z.string(),isDisabled:c.z.boolean(),text:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),trackingParams:c.z.string()})}),trackingParams:c.z.string()})}),backButton:c.z.object({buttonRenderer:c.z.object({trackingParams:c.z.string(),command:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({sendPost:c.z.boolean()})}),signalServiceEndpoint:c.z.object({signal:c.z.string(),actions:c.z.array(c.z.object({clickTrackingParams:c.z.string(),signalAction:c.z.object({signal:c.z.string()})}))})})})}),forwardButton:c.z.object({buttonRenderer:c.z.object({trackingParams:c.z.string(),command:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({sendPost:c.z.boolean()})}),signalServiceEndpoint:c.z.object({signal:c.z.string(),actions:c.z.array(c.z.object({clickTrackingParams:c.z.string(),signalAction:c.z.object({signal:c.z.string()})}))})})})}),a11ySkipNavigationButton:c.z.object({buttonRenderer:c.z.object({style:c.z.string(),size:c.z.string(),isDisabled:c.z.boolean(),text:c.z.object({runs:c.z.array(c.z.object({text:c.z.string()}))}),trackingParams:c.z.string(),command:c.z.object({clickTrackingParams:c.z.string(),commandMetadata:c.z.object({webCommandMetadata:c.z.object({sendPost:c.z.boolean()})}),signalServiceEndpoint:c.z.object({signal:c.z.string(),actions:c.z.array(c.z.object({clickTrackingParams:c.z.string(),signalAction:c.z.object({signal:c.z.string()})}))})})})})})}),pageVisualEffects:c.z.array(c.z.object({cinematicContainerRenderer:c.z.object({gradientColorConfig:c.z.array(c.z.object({darkThemeColor:c.z.number(),startLocation:c.z.number().optional()})).optional(),presentationStyle:c.z.string(),config:c.z.object({lightThemeBackgroundColor:c.z.number(),darkThemeBackgroundColor:c.z.number(),animationConfig:c.z.object({minImageUpdateIntervalMs:c.z.number(),crossfadeDurationMs:c.z.number(),crossfadeStartOffset:c.z.number(),maxFrameRate:c.z.number()}),colorSourceSizeMultiplier:c.z.number(),applyClientImageBlur:c.z.boolean(),bottomColorSourceHeightMultiplier:c.z.number(),maxBottomColorSourceHeight:c.z.number(),colorSourceWidthMultiplier:c.z.number(),colorSourceHeightMultiplier:c.z.number(),blurStrength:c.z.number()})})})),frameworkUpdates:c.z.object({})}),html5player:c.z.string(),formats:c.z.array(c.z.object({mimeType:c.z.string()})),related_videos:c.z.array(c.z.object({id:c.z.string(),title:c.z.string(),published:c.z.string(),author:c.z.object({id:c.z.string(),name:c.z.string(),user:c.z.string(),channel_url:c.z.string(),user_url:c.z.string(),thumbnails:c.z.array(c.z.object({url:c.z.string(),width:c.z.number(),height:c.z.number()})),verified:c.z.boolean()}),short_view_count_text:c.z.string(),view_count:c.z.string(),length_seconds:c.z.number(),thumbnails:c.z.array(c.z.object({url:c.z.string(),width:c.z.number(),height:c.z.number()})),richThumbnails:c.z.array(c.z.unknown()),isLive:c.z.boolean()})),videoDetails:c.z.object({embed:c.z.object({iframeUrl:c.z.string(),width:c.z.number(),height:c.z.number()}),title:c.z.string(),description:c.z.string(),lengthSeconds:c.z.string(),ownerProfileUrl:c.z.string(),externalChannelId:c.z.string(),isFamilySafe:c.z.boolean(),availableCountries:c.z.array(c.z.string()),isUnlisted:c.z.boolean(),hasYpcMetadata:c.z.boolean(),viewCount:c.z.string(),category:c.z.string(),publishDate:c.z.string(),ownerChannelName:c.z.string(),uploadDate:c.z.string(),videoId:c.z.string(),keywords:c.z.array(c.z.string()).optional(),channelId:c.z.string(),isOwnerViewing:c.z.boolean(),isCrawlable:c.z.boolean(),allowRatings:c.z.boolean(),author:c.z.object({id:c.z.string(),name:c.z.string(),user:c.z.string(),channel_url:c.z.string(),external_channel_url:c.z.string(),user_url:c.z.string(),thumbnails:c.z.array(c.z.object({url:c.z.string(),width:c.z.number(),height:c.z.number()})),verified:c.z.boolean(),subscriber_count:c.z.number()}),isPrivate:c.z.boolean(),isUnpluggedCorpus:c.z.boolean(),isLiveContent:c.z.boolean(),media:c.z.object({}),likes:c.z.null(),dislikes:c.z.null(),age_restricted:c.z.boolean(),video_url:c.z.string(),storyboards:c.z.array(c.z.object({templateUrl:c.z.string(),thumbnailWidth:c.z.number(),thumbnailHeight:c.z.number(),thumbnailCount:c.z.number(),interval:c.z.number(),columns:c.z.number(),rows:c.z.number(),storyboardCount:c.z.number()})),chapters:c.z.array(c.z.unknown()),thumbnails:c.z.array(c.z.object({url:c.z.string(),width:c.z.number(),height:c.z.number()}))})}),b=(c.z.object({page:c.z.string(),player_response:c.z.unknown(),response:c.z.object({responseContext:c.z.unknown(),contents:c.z.unknown(),currentVideoEndpoint:c.z.unknown(),trackingParams:c.z.string(),playerOverlays:c.z.unknown(),onResponseReceivedEndpoints:c.z.unknown().array(),engagementPanels:c.z.unknown().array(),topbar:c.z.unknown(),cards:c.z.unknown(),pageVisualEffects:c.z.array(c.z.object({cinematicContainerRenderer:c.z.object({presentationStyle:c.z.string(),config:c.z.object({lightThemeBackgroundColor:c.z.number(),darkThemeBackgroundColor:c.z.number(),animationConfig:c.z.object({minImageUpdateIntervalMs:c.z.number(),crossfadeDurationMs:c.z.number(),crossfadeStartOffset:c.z.number(),maxFrameRate:c.z.number()}),colorSourceSizeMultiplier:c.z.number(),applyClientImageBlur:c.z.boolean(),bottomColorSourceHeightMultiplier:c.z.number(),maxBottomColorSourceHeight:c.z.number(),colorSourceWidthMultiplier:c.z.number(),colorSourceHeightMultiplier:c.z.number(),blurStrength:c.z.number()})})})),frameworkUpdates:c.z.object({entityBatchUpdate:c.z.object({mutations:c.z.array(c.z.object({entityKey:c.z.string(),type:c.z.string(),options:c.z.object({persistenceOption:c.z.string()})})),timestamp:c.z.object({seconds:c.z.string(),nanos:c.z.number()})})})}),html5player:c.z.string(),formats:c.z.unknown().array(),related_videos:c.z.unknown().array(),videoDetails:c.z.object({embed:c.z.object({iframeUrl:c.z.string(),width:c.z.number(),height:c.z.number()}),title:c.z.string(),description:c.z.string(),lengthSeconds:c.z.string(),ownerProfileUrl:c.z.string(),externalChannelId:c.z.string(),isFamilySafe:c.z.boolean(),availableCountries:c.z.array(c.z.string()),isUnlisted:c.z.boolean(),hasYpcMetadata:c.z.boolean(),viewCount:c.z.string(),category:c.z.string(),publishDate:c.z.string(),ownerChannelName:c.z.string(),liveBroadcastDetails:c.z.object({isLiveNow:c.z.boolean(),startTimestamp:c.z.string(),endTimestamp:c.z.string()}).optional(),uploadDate:c.z.string(),videoId:c.z.string(),keywords:c.z.array(c.z.string()),channelId:c.z.string(),isOwnerViewing:c.z.boolean(),isCrawlable:c.z.boolean(),allowRatings:c.z.boolean(),author:c.z.object({id:c.z.string(),name:c.z.string(),user:c.z.string(),channel_url:c.z.string(),external_channel_url:c.z.string(),user_url:c.z.string(),thumbnails:c.z.array(c.z.object({url:c.z.string(),width:c.z.number(),height:c.z.number()})),verified:c.z.boolean(),subscriber_count:c.z.number()}),isLowLatencyLiveStream:c.z.boolean().optional(),isPrivate:c.z.boolean(),isUnpluggedCorpus:c.z.boolean(),latencyClass:c.z.string().optional(),isLiveContent:c.z.boolean(),media:c.z.object({}),likes:c.z.null(),dislikes:c.z.null(),age_restricted:c.z.boolean(),video_url:c.z.string(),storyboards:c.z.array(c.z.object({templateUrl:c.z.string(),thumbnailWidth:c.z.number(),thumbnailHeight:c.z.number(),thumbnailCount:c.z.number(),interval:c.z.number(),columns:c.z.number(),rows:c.z.number(),storyboardCount:c.z.number()})),chapters:c.z.array(c.z.unknown()),thumbnails:c.z.array(c.z.object({url:c.z.string(),width:c.z.number(),height:c.z.number()}))}),full:c.z.boolean()}),["https://www.youtube.com/watch?v=yxW5yuzVi8w","https://www.youtube.com/watch?v=BilaShsQphM","https://www.youtube.com/watch?v=Fp_P_e1cPOE","https://www.youtube.com/watch?v=XXYlFuWEuKI","https://www.youtube.com/watch?v=a0q6JMuLBYQ","https://www.youtube.com/watch?v=b6U3xeYqdKQ","https://www.youtube.com/watch?v=4qvBnEgCvkc","https://www.youtube.com/watch?v=m8_8tMzmpTg","https://www.youtube.com/watch?v=j4IXCjWnAkY","https://www.youtube.com/watch?v=gCadlN8fexk","https://www.youtube.com/watch?v=aAkMkVFwAoo","https://www.youtube.com/watch?v=E8gmARGvPlI","https://www.youtube.com/watch?v=L4QxmPMplYc","https://www.youtube.com/watch?v=WJvtX-Ec1S8","https://www.youtube.com/watch?v=wXWZiGnaeqo","https://www.youtube.com/watch?v=OiC1rgCPmUQ","https://www.youtube.com/watch?v=suAR1PYFNYA","https://www.youtube.com/watch?v=ekmHAfUIu1M","https://www.youtube.com/watch?v=YFoDEQXJLcQ","https://www.youtube.com/watch?v=6vEeOfkwXwc","https://www.youtube.com/watch?v=DsoWvXDMo1c","https://www.youtube.com/watch?v=TdZyXgadFG0","https://www.youtube.com/watch?v=NZqEICgKwrw","https://www.youtube.com/watch?v=XrsbfrFPATs","https://www.youtube.com/watch?v=U2waT9TxPU0","https://www.youtube.com/watch?v=Uq9gPaIzbe8","https://www.youtube.com/watch?v=5FNCukepaS8","https://www.youtube.com/watch?v=4m1EFMoRFvY","https://www.youtube.com/watch?v=6Mgqbai3fKo","https://www.youtube.com/watch?v=59Q_lhgGANc","https://www.youtube.com/watch?v=oC-GflRB0y4","https://www.youtube.com/watch?v=c8WDzsqQ7UY","https://www.youtube.com/watch?v=GKTV6-9ONzE","https://www.youtube.com/watch?v=PQZhN65vq9E","https://www.youtube.com/watch?v=lY2yjAdbvdQ","https://www.youtube.com/watch?v=8GotXeCwUnc","https://www.youtube.com/watch?v=PUdyuKaGQd4","https://www.youtube.com/watch?v=hT_nvWreIhg","https://www.youtube.com/watch?v=L1v7hXEQhsQ","https://www.youtube.com/watch?v=wbOTkDn49qI","https://www.youtube.com/watch?v=7jMlFXouPk8","https://www.youtube.com/watch?v=HrxX9TBj2zY","https://www.youtube.com/watch?v=ghSh-xqJX8A","https://www.youtube.com/watch?v=b_zHQ6kFuQ0","https://www.youtube.com/watch?v=0-EF60neguk","https://www.youtube.com/watch?v=u1ZoHfJZACA","https://www.youtube.com/watch?v=d8OI9FllKfg","https://www.youtube.com/watch?v=VYG1-czlu2s","https://www.youtube.com/watch?v=ywQvbGcCIEk","https://www.youtube.com/watch?v=1sM89qLmd9Y","https://www.youtube.com/watch?v=a5irTX82olg","https://www.youtube.com/watch?v=LMOKlXfXn50","https://www.youtube.com/watch?v=u3u22OYqFGo","https://www.youtube.com/watch?v=tbbKjDjMDok","https://www.youtube.com/watch?v=RIsgWYVXIcA","https://www.youtube.com/watch?v=d5wURLqNTXE","https://www.youtube.com/watch?v=S2TaAcwC_zI","https://www.youtube.com/watch?v=WjLcVqjIkLo","https://www.youtube.com/watch?v=Ps2Jc28tQrw","https://www.youtube.com/watch?v=JYIaWeVL1JM","https://www.youtube.com/watch?v=pvmNeNd5SYk","https://www.youtube.com/watch?v=noezMrwMGuY","https://www.youtube.com/watch?v=9EcjWd-O4jI","https://www.youtube.com/watch?v=aBJZsHDJvf0"]);function l({data:t}){const[e,n]=(0,a.useState)(!1),o=(0,a.useCallback)((t=>(t.preventDefault(),n((t=>!t)))),[]);return a.createElement("a",{href:"#",onClick:o,style:{textDecoration:"none"}},a.createElement("pre",null,e?JSON.stringify(t,null,2):"[...]"))}function u({link:t,onClick:e}){const[n,o]=(0,a.useState)(null);return(0,a.useEffect)((()=>{fetch(`video/info?videoId=${t}`).then((t=>t.json())).then((t=>z.parseAsync(t))).then(o)}),[]),n?a.createElement("div",null,n.videoDetails.thumbnails.slice(0,1).map((({url:o,width:r,height:i},s)=>a.createElement("div",{key:s},a.createElement("a",{href:t,onClick:e},a.createElement("img",{src:o,width:r,height:i,referrerPolicy:"no-referrer"})),a.createElement("div",null,a.createElement("strong",null,n.videoDetails.title))))),a.createElement(l,{data:n})):a.createElement(s,null)}function g(){const[t,e]=(0,a.useState)((()=>[])),[n,o]=(0,a.useState)(""),[i]=(0,a.useState)((()=>b));(0,a.useEffect)((()=>{fetch("video").then((t=>t.json())).then(console.info)}),[]);const s=(0,a.useCallback)((t=>(t.preventDefault(),(t=>o(t))(t.currentTarget.href))),[]),c=(0,a.useCallback)((t=>(t.preventDefault(),(t=>fetch(`video/download?videoId=${t}`).then((t=>t.json())).then(console.info))(t.currentTarget.href))),[]),z=(0,a.useCallback)((t=>(t.preventDefault(),(t=>fetch(`video/download-audio?videoId=${t}`).then((t=>t.json())).then(console.info))(t.currentTarget.href))),[]),l=(0,a.useCallback)((({target:t})=>e((e=>t.checked?e.concat(t.value):e.filter((e=>e!==t.value))))),[]),g=(0,a.useCallback)((({target:t})=>e((()=>t.checked?i:[]))),[]);return a.createElement("div",null,a.createElement("div",null,a.createElement("label",null,a.createElement("input",{type:"checkbox",checked:t.length===i.length,onChange:g}),a.createElement("span",null,"select all")," ")),a.createElement("ul",null,i.map((e=>a.createElement("li",{key:e},a.createElement("input",{type:"checkbox",value:e,checked:t.includes(e),onChange:l}),a.createElement("a",{href:e,onClick:s},e),"[",a.createElement("a",{href:e,onClick:c},"download"),"][",a.createElement("a",{href:e,onClick:z},"download-audio"),"]",t.includes(e)&&a.createElement(u,{link:e,onClick:s}))))),a.createElement("div",{style:{position:"fixed",bottom:0,right:0,border:"2px solid black"}},n&&a.createElement(r(),{url:n,width:320,height:180,controls:!0,light:!0,loop:!0,pip:!0,playing:!0})))}function m(){return a.createElement("section",null,a.createElement("h2",null,"Video"),a.createElement(g,null))}}}]);
//# sourceMappingURL=816.js.map