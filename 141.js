"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[141],{2141:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});var a=n(2983),r=n(1311),o=n.n(r);const i=n(681).ZP.div`
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
`;function s(){return a.createElement(i,null,a.createElement("svg",{className:"spinner",viewBox:"0 0 50 50"},a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})))}var z=n(6256);const c=z.z.object({page:z.z.string(),player_response:z.z.object({responseContext:z.z.object({serviceTrackingParams:z.z.array(z.z.object({service:z.z.string(),params:z.z.array(z.z.object({key:z.z.string(),value:z.z.string()}))})),maxAgeSeconds:z.z.number(),mainAppWebResponseContext:z.z.object({loggedOut:z.z.boolean(),trackingParam:z.z.string()}),webResponseContextExtensionData:z.z.object({hasDecorated:z.z.boolean()})}),playabilityStatus:z.z.object({status:z.z.string(),playableInEmbed:z.z.boolean(),miniplayer:z.z.object({miniplayerRenderer:z.z.object({playbackMode:z.z.string()})}),contextParams:z.z.string()}),streamingData:z.z.object({expiresInSeconds:z.z.string(),formats:z.z.array(z.z.object({itag:z.z.number(),mimeType:z.z.string(),bitrate:z.z.number(),width:z.z.number(),height:z.z.number(),lastModified:z.z.string(),quality:z.z.string(),fps:z.z.number(),qualityLabel:z.z.string(),projectionType:z.z.string(),audioQuality:z.z.string(),approxDurationMs:z.z.string(),audioSampleRate:z.z.string(),audioChannels:z.z.number(),signatureCipher:z.z.string().optional()})),adaptiveFormats:z.z.object({}).array()}),playbackTracking:z.z.object({videostatsPlaybackUrl:z.z.object({baseUrl:z.z.string()}),videostatsDelayplayUrl:z.z.object({baseUrl:z.z.string()}),videostatsWatchtimeUrl:z.z.object({baseUrl:z.z.string()}),ptrackingUrl:z.z.object({baseUrl:z.z.string()}),qoeUrl:z.z.object({baseUrl:z.z.string()}),atrUrl:z.z.object({baseUrl:z.z.string(),elapsedMediaTimeSeconds:z.z.number()}),videostatsScheduledFlushWalltimeSeconds:z.z.array(z.z.number()),videostatsDefaultFlushIntervalSeconds:z.z.number()}),captions:z.z.object({playerCaptionsTracklistRenderer:z.z.object({captionTracks:z.z.array(z.z.object({baseUrl:z.z.string(),name:z.z.object({simpleText:z.z.string()}),vssId:z.z.string(),languageCode:z.z.string(),isTranslatable:z.z.boolean(),trackName:z.z.string()})),audioTracks:z.z.array(z.z.object({})),translationLanguages:z.z.array(z.z.object({languageCode:z.z.string(),languageName:z.z.object({simpleText:z.z.string()})})),defaultAudioTrackIndex:z.z.number()})}).optional(),videoDetails:z.z.object({videoId:z.z.string(),title:z.z.string(),lengthSeconds:z.z.string(),keywords:z.z.array(z.z.string()).optional(),channelId:z.z.string(),isOwnerViewing:z.z.boolean(),shortDescription:z.z.string(),isCrawlable:z.z.boolean(),thumbnail:z.z.object({thumbnails:z.z.array(z.z.object({url:z.z.string(),width:z.z.number(),height:z.z.number()}))}),allowRatings:z.z.boolean(),viewCount:z.z.string(),author:z.z.string(),isPrivate:z.z.boolean()}),playerConfig:z.z.object({audioConfig:z.z.object({loudnessDb:z.z.number(),perceptualLoudnessDb:z.z.number(),enablePerFormatLoudness:z.z.boolean()}),streamSelectionConfig:z.z.object({maxBitrate:z.z.string()}),mediaCommonConfig:z.z.object({dynamicReadaheadConfig:z.z.object({maxReadAheadMediaTimeMs:z.z.number(),minReadAheadMediaTimeMs:z.z.number(),readAheadGrowthRateMs:z.z.number()})}),webPlayerConfig:z.z.object({useCobaltTvosDash:z.z.boolean(),webPlayerActionsPorting:z.z.object({getSharePanelCommand:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({sendPost:z.z.boolean(),apiUrl:z.z.string()})}),webPlayerShareEntityServiceEndpoint:z.z.object({serializedShareEntity:z.z.string()})}).optional(),subscribeCommand:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({sendPost:z.z.boolean(),apiUrl:z.z.string()})}),subscribeEndpoint:z.z.object({channelIds:z.z.array(z.z.string()),params:z.z.string()})}),unsubscribeCommand:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({sendPost:z.z.boolean(),apiUrl:z.z.string()})}),unsubscribeEndpoint:z.z.object({channelIds:z.z.array(z.z.string()),params:z.z.string()})}),addToWatchLaterCommand:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({sendPost:z.z.boolean(),apiUrl:z.z.string()})}),playlistEditEndpoint:z.z.object({playlistId:z.z.string(),actions:z.z.array(z.z.object({addedVideoId:z.z.string(),action:z.z.string()}))})}).optional(),removeFromWatchLaterCommand:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({sendPost:z.z.boolean(),apiUrl:z.z.string()})}),playlistEditEndpoint:z.z.object({playlistId:z.z.string(),actions:z.z.array(z.z.object({action:z.z.string(),removedVideoId:z.z.string()}))})}).optional()})})}),storyboards:z.z.object({playerStoryboardSpecRenderer:z.z.object({spec:z.z.string(),recommendedLevel:z.z.number(),highResolutionRecommendedLevel:z.z.number().optional()})}),microformat:z.z.object({playerMicroformatRenderer:z.z.object({thumbnail:z.z.object({thumbnails:z.z.array(z.z.object({url:z.z.string(),width:z.z.number(),height:z.z.number()}))}),embed:z.z.object({iframeUrl:z.z.string(),width:z.z.number(),height:z.z.number()}),title:z.z.object({simpleText:z.z.string()}),description:z.z.object({simpleText:z.z.string()}),lengthSeconds:z.z.string(),ownerProfileUrl:z.z.string(),externalChannelId:z.z.string(),isFamilySafe:z.z.boolean(),availableCountries:z.z.array(z.z.string()),isUnlisted:z.z.boolean(),hasYpcMetadata:z.z.boolean(),viewCount:z.z.string(),category:z.z.string(),publishDate:z.z.string(),ownerChannelName:z.z.string(),liveBroadcastDetails:z.z.object({isLiveNow:z.z.boolean(),startTimestamp:z.z.string(),endTimestamp:z.z.string()}).optional(),uploadDate:z.z.string()})}),trackingParams:z.z.string(),attestation:z.z.object({playerAttestationRenderer:z.z.object({challenge:z.z.string(),botguardData:z.z.object({program:z.z.string(),interpreterSafeUrl:z.z.object({privateDoNotAccessOrElseTrustedResourceUrlWrappedValue:z.z.string()}),serverEnvironment:z.z.number()})})}),adBreakHeartbeatParams:z.z.string(),frameworkUpdates:z.z.object({entityBatchUpdate:z.z.object({mutations:z.z.array(z.z.object({entityKey:z.z.string(),type:z.z.string(),payload:z.z.object({offlineabilityEntity:z.z.object({key:z.z.string(),addToOfflineButtonState:z.z.string()})})})),timestamp:z.z.object({seconds:z.z.string(),nanos:z.z.number()})})})}),response:z.z.object({responseContext:z.z.object({serviceTrackingParams:z.z.array(z.z.object({service:z.z.string(),params:z.z.array(z.z.object({key:z.z.string(),value:z.z.string()}))})),mainAppWebResponseContext:z.z.object({loggedOut:z.z.boolean(),trackingParam:z.z.string()}),webResponseContextExtensionData:z.z.object({ytConfigData:z.z.object({visitorData:z.z.string(),rootVisualElementType:z.z.number()}),webPrefetchData:z.z.object({navigationEndpoints:z.z.array(z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({url:z.z.string(),webPageType:z.z.string(),rootVe:z.z.number()})}),watchEndpoint:z.z.object({videoId:z.z.string(),params:z.z.string(),playerParams:z.z.string(),watchEndpointSupportedPrefetchConfig:z.z.object({prefetchHintConfig:z.z.object({prefetchPriority:z.z.number(),countdownUiRelativeSecondsPrefetchCondition:z.z.number()})})})}))}),hasDecorated:z.z.boolean()})}),contents:z.z.object({twoColumnWatchNextResults:z.z.object({results:z.z.object({results:z.z.object({contents:z.z.array(z.z.object({})),trackingParams:z.z.string()})}),secondaryResults:z.z.object({secondaryResults:z.z.object({})}),autoplay:z.z.object({autoplay:z.z.object({sets:z.z.array(z.z.object({mode:z.z.string(),autoplayVideo:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({url:z.z.string(),webPageType:z.z.string(),rootVe:z.z.number()})}),watchEndpoint:z.z.object({videoId:z.z.string(),params:z.z.string(),playerParams:z.z.string(),watchEndpointSupportedPrefetchConfig:z.z.object({prefetchHintConfig:z.z.object({prefetchPriority:z.z.number(),countdownUiRelativeSecondsPrefetchCondition:z.z.number()})})})})})),countDownSecs:z.z.number(),trackingParams:z.z.string()})})})}),currentVideoEndpoint:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({url:z.z.string(),webPageType:z.z.string(),rootVe:z.z.number()})}),watchEndpoint:z.z.object({videoId:z.z.string(),watchEndpointSupportedOnesieConfig:z.z.object({html5PlaybackOnesieConfig:z.z.object({commonConfig:z.z.object({url:z.z.string()})})})})}),trackingParams:z.z.string(),playerOverlays:z.z.object({playerOverlayRenderer:z.z.object({})}),onResponseReceivedEndpoints:z.z.array(z.z.object({})),topbar:z.z.object({desktopTopbarRenderer:z.z.object({logo:z.z.object({topbarLogoRenderer:z.z.object({iconImage:z.z.object({iconType:z.z.string()}),tooltipText:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),endpoint:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({url:z.z.string(),webPageType:z.z.string(),rootVe:z.z.number(),apiUrl:z.z.string()})}),browseEndpoint:z.z.object({browseId:z.z.string()})}),trackingParams:z.z.string(),overrideEntityKey:z.z.string()})}),searchbox:z.z.object({fusionSearchboxRenderer:z.z.object({icon:z.z.object({iconType:z.z.string()}),placeholderText:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),config:z.z.object({webSearchboxConfig:z.z.object({requestLanguage:z.z.string(),requestDomain:z.z.string(),hasOnscreenKeyboard:z.z.boolean(),focusSearchbox:z.z.boolean()})}),trackingParams:z.z.string(),searchEndpoint:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({url:z.z.string(),webPageType:z.z.string(),rootVe:z.z.number()})}),searchEndpoint:z.z.object({query:z.z.string()})}),clearButton:z.z.object({buttonRenderer:z.z.object({style:z.z.string(),size:z.z.string(),isDisabled:z.z.boolean(),icon:z.z.object({iconType:z.z.string()}),trackingParams:z.z.string(),accessibilityData:z.z.object({accessibilityData:z.z.object({label:z.z.string()})})})})})}),trackingParams:z.z.string(),interstitial:z.z.object({consentBumpV2Renderer:z.z.object({interstitialLogoAside:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),languagePickerButton:z.z.object({buttonRenderer:z.z.object({style:z.z.string(),size:z.z.string(),isDisabled:z.z.boolean(),text:z.z.object({simpleText:z.z.string()}),icon:z.z.object({iconType:z.z.string()}),accessibility:z.z.object({label:z.z.string()}),trackingParams:z.z.string()})}),interstitialTitle:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),customizeButton:z.z.object({buttonRenderer:z.z.object({style:z.z.string(),size:z.z.string(),isDisabled:z.z.boolean(),text:z.z.object({simpleText:z.z.string()}),trackingParams:z.z.string(),command:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({url:z.z.string(),webPageType:z.z.string(),rootVe:z.z.number()})}),urlEndpoint:z.z.object({url:z.z.string()})})})}),agreeButton:z.z.object({buttonRenderer:z.z.object({style:z.z.string(),size:z.z.string(),isDisabled:z.z.boolean(),text:z.z.object({simpleText:z.z.string()}),accessibility:z.z.object({label:z.z.string()}),trackingParams:z.z.string(),command:z.z.object({clickTrackingParams:z.z.string(),saveConsentAction:z.z.object({socsCookie:z.z.string(),savePreferenceUrl:z.z.string()})})})}),privacyLink:z.z.object({runs:z.z.array(z.z.object({text:z.z.string(),navigationEndpoint:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({url:z.z.string(),webPageType:z.z.string(),rootVe:z.z.number()})}),urlEndpoint:z.z.object({url:z.z.string()})})}))}),termsLink:z.z.object({runs:z.z.array(z.z.object({text:z.z.string(),navigationEndpoint:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({url:z.z.string(),webPageType:z.z.string(),rootVe:z.z.number()})}),urlEndpoint:z.z.object({url:z.z.string()})})}))}),trackingParams:z.z.string(),signInButton:z.z.object({buttonRenderer:z.z.object({style:z.z.string(),size:z.z.string(),isDisabled:z.z.boolean(),text:z.z.object({simpleText:z.z.string()}),icon:z.z.object({iconType:z.z.string()}),tooltip:z.z.string(),trackingParams:z.z.string(),command:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({url:z.z.string(),webPageType:z.z.string(),rootVe:z.z.number()})}),signInEndpoint:z.z.object({hack:z.z.boolean()})})})}),languageList:z.z.object({dropdownRenderer:z.z.object({entries:z.z.array(z.z.object({dropdownItemRenderer:z.z.object({label:z.z.object({simpleText:z.z.string()}),isSelected:z.z.boolean(),stringValue:z.z.string(),onSelectCommand:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({sendPost:z.z.boolean()})}),signalServiceEndpoint:z.z.object({signal:z.z.string(),actions:z.z.array(z.z.object({clickTrackingParams:z.z.string(),selectLanguageCommand:z.z.object({hl:z.z.string()})}))})})})})),accessibility:z.z.object({label:z.z.string()})})}),readMoreButton:z.z.object({buttonRenderer:z.z.object({style:z.z.string(),size:z.z.string(),isDisabled:z.z.boolean(),text:z.z.object({simpleText:z.z.string()}),icon:z.z.object({iconType:z.z.string()}),trackingParams:z.z.string(),iconPosition:z.z.string()})}),disableP13nButton:z.z.object({buttonRenderer:z.z.object({style:z.z.string(),size:z.z.string(),isDisabled:z.z.boolean(),text:z.z.object({simpleText:z.z.string()}),trackingParams:z.z.string(),accessibilityData:z.z.object({accessibilityData:z.z.object({label:z.z.string()})}),command:z.z.object({clickTrackingParams:z.z.string(),disablePersonalizationAction:z.z.object({socsCookie:z.z.string(),savePreferenceUrl:z.z.string()})})})}),loadingMessage:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),errorMessage:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),eomV1Text:z.z.object({essentialCookieMsg:z.z.object({begin:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),items:z.z.array(z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}))}),nonEssentialCookieMsg:z.z.object({begin:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),items:z.z.array(z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}))}),ifReject:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),personalization:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),moreOptions:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))})})})}).optional(),countryCode:z.z.string(),topbarButtons:z.z.array(z.z.object({})),hotkeyDialog:z.z.object({hotkeyDialogRenderer:z.z.object({title:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),sections:z.z.array(z.z.object({hotkeyDialogSectionRenderer:z.z.object({title:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),options:z.z.array(z.z.object({hotkeyDialogSectionOptionRenderer:z.z.object({label:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),hotkey:z.z.string()})}))})})),dismissButton:z.z.object({buttonRenderer:z.z.object({style:z.z.string(),size:z.z.string(),isDisabled:z.z.boolean(),text:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),trackingParams:z.z.string()})}),trackingParams:z.z.string()})}),backButton:z.z.object({buttonRenderer:z.z.object({trackingParams:z.z.string(),command:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({sendPost:z.z.boolean()})}),signalServiceEndpoint:z.z.object({signal:z.z.string(),actions:z.z.array(z.z.object({clickTrackingParams:z.z.string(),signalAction:z.z.object({signal:z.z.string()})}))})})})}),forwardButton:z.z.object({buttonRenderer:z.z.object({trackingParams:z.z.string(),command:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({sendPost:z.z.boolean()})}),signalServiceEndpoint:z.z.object({signal:z.z.string(),actions:z.z.array(z.z.object({clickTrackingParams:z.z.string(),signalAction:z.z.object({signal:z.z.string()})}))})})})}),a11ySkipNavigationButton:z.z.object({buttonRenderer:z.z.object({style:z.z.string(),size:z.z.string(),isDisabled:z.z.boolean(),text:z.z.object({runs:z.z.array(z.z.object({text:z.z.string()}))}),trackingParams:z.z.string(),command:z.z.object({clickTrackingParams:z.z.string(),commandMetadata:z.z.object({webCommandMetadata:z.z.object({sendPost:z.z.boolean()})}),signalServiceEndpoint:z.z.object({signal:z.z.string(),actions:z.z.array(z.z.object({clickTrackingParams:z.z.string(),signalAction:z.z.object({signal:z.z.string()})}))})})})})})}),pageVisualEffects:z.z.array(z.z.object({cinematicContainerRenderer:z.z.object({gradientColorConfig:z.z.array(z.z.object({darkThemeColor:z.z.number(),startLocation:z.z.number().optional()})).optional(),presentationStyle:z.z.string(),config:z.z.object({lightThemeBackgroundColor:z.z.number(),darkThemeBackgroundColor:z.z.number(),animationConfig:z.z.object({minImageUpdateIntervalMs:z.z.number(),crossfadeDurationMs:z.z.number(),crossfadeStartOffset:z.z.number(),maxFrameRate:z.z.number()}),colorSourceSizeMultiplier:z.z.number(),applyClientImageBlur:z.z.boolean(),bottomColorSourceHeightMultiplier:z.z.number(),maxBottomColorSourceHeight:z.z.number(),colorSourceWidthMultiplier:z.z.number(),colorSourceHeightMultiplier:z.z.number(),blurStrength:z.z.number()})})})),frameworkUpdates:z.z.object({})}),html5player:z.z.string(),formats:z.z.array(z.z.object({mimeType:z.z.string()})),related_videos:z.z.array(z.z.object({id:z.z.string(),title:z.z.string(),published:z.z.string(),author:z.z.object({id:z.z.string(),name:z.z.string(),user:z.z.string(),channel_url:z.z.string(),user_url:z.z.string(),thumbnails:z.z.array(z.z.object({url:z.z.string(),width:z.z.number(),height:z.z.number()})),verified:z.z.boolean()}),short_view_count_text:z.z.string(),view_count:z.z.string(),length_seconds:z.z.number(),thumbnails:z.z.array(z.z.object({url:z.z.string(),width:z.z.number(),height:z.z.number()})),richThumbnails:z.z.array(z.z.unknown()),isLive:z.z.boolean()})),videoDetails:z.z.object({embed:z.z.object({iframeUrl:z.z.string(),width:z.z.number(),height:z.z.number()}),title:z.z.string(),description:z.z.string(),lengthSeconds:z.z.string(),ownerProfileUrl:z.z.string(),externalChannelId:z.z.string(),isFamilySafe:z.z.boolean(),availableCountries:z.z.array(z.z.string()),isUnlisted:z.z.boolean(),hasYpcMetadata:z.z.boolean(),viewCount:z.z.string(),category:z.z.string(),publishDate:z.z.string(),ownerChannelName:z.z.string(),uploadDate:z.z.string(),videoId:z.z.string(),keywords:z.z.array(z.z.string()).optional(),channelId:z.z.string(),isOwnerViewing:z.z.boolean(),isCrawlable:z.z.boolean(),allowRatings:z.z.boolean(),author:z.z.object({id:z.z.string(),name:z.z.string(),user:z.z.string(),channel_url:z.z.string(),external_channel_url:z.z.string(),user_url:z.z.string(),thumbnails:z.z.array(z.z.object({url:z.z.string(),width:z.z.number(),height:z.z.number()})),verified:z.z.boolean(),subscriber_count:z.z.number()}),isPrivate:z.z.boolean(),isUnpluggedCorpus:z.z.boolean(),isLiveContent:z.z.boolean(),media:z.z.object({}),likes:z.z.null(),dislikes:z.z.null(),age_restricted:z.z.boolean(),video_url:z.z.string(),storyboards:z.z.array(z.z.object({templateUrl:z.z.string(),thumbnailWidth:z.z.number(),thumbnailHeight:z.z.number(),thumbnailCount:z.z.number(),interval:z.z.number(),columns:z.z.number(),rows:z.z.number(),storyboardCount:z.z.number()})),chapters:z.z.array(z.z.unknown()),thumbnails:z.z.array(z.z.object({url:z.z.string(),width:z.z.number(),height:z.z.number()}))})}),b=(z.z.object({page:z.z.string(),player_response:z.z.unknown(),response:z.z.object({responseContext:z.z.unknown(),contents:z.z.unknown(),currentVideoEndpoint:z.z.unknown(),trackingParams:z.z.string(),playerOverlays:z.z.unknown(),onResponseReceivedEndpoints:z.z.unknown().array(),engagementPanels:z.z.unknown().array(),topbar:z.z.unknown(),cards:z.z.unknown(),pageVisualEffects:z.z.array(z.z.object({cinematicContainerRenderer:z.z.object({presentationStyle:z.z.string(),config:z.z.object({lightThemeBackgroundColor:z.z.number(),darkThemeBackgroundColor:z.z.number(),animationConfig:z.z.object({minImageUpdateIntervalMs:z.z.number(),crossfadeDurationMs:z.z.number(),crossfadeStartOffset:z.z.number(),maxFrameRate:z.z.number()}),colorSourceSizeMultiplier:z.z.number(),applyClientImageBlur:z.z.boolean(),bottomColorSourceHeightMultiplier:z.z.number(),maxBottomColorSourceHeight:z.z.number(),colorSourceWidthMultiplier:z.z.number(),colorSourceHeightMultiplier:z.z.number(),blurStrength:z.z.number()})})})),frameworkUpdates:z.z.object({entityBatchUpdate:z.z.object({mutations:z.z.array(z.z.object({entityKey:z.z.string(),type:z.z.string(),options:z.z.object({persistenceOption:z.z.string()})})),timestamp:z.z.object({seconds:z.z.string(),nanos:z.z.number()})})})}),html5player:z.z.string(),formats:z.z.unknown().array(),related_videos:z.z.unknown().array(),videoDetails:z.z.object({embed:z.z.object({iframeUrl:z.z.string(),width:z.z.number(),height:z.z.number()}),title:z.z.string(),description:z.z.string(),lengthSeconds:z.z.string(),ownerProfileUrl:z.z.string(),externalChannelId:z.z.string(),isFamilySafe:z.z.boolean(),availableCountries:z.z.array(z.z.string()),isUnlisted:z.z.boolean(),hasYpcMetadata:z.z.boolean(),viewCount:z.z.string(),category:z.z.string(),publishDate:z.z.string(),ownerChannelName:z.z.string(),liveBroadcastDetails:z.z.object({isLiveNow:z.z.boolean(),startTimestamp:z.z.string(),endTimestamp:z.z.string()}).optional(),uploadDate:z.z.string(),videoId:z.z.string(),keywords:z.z.array(z.z.string()),channelId:z.z.string(),isOwnerViewing:z.z.boolean(),isCrawlable:z.z.boolean(),allowRatings:z.z.boolean(),author:z.z.object({id:z.z.string(),name:z.z.string(),user:z.z.string(),channel_url:z.z.string(),external_channel_url:z.z.string(),user_url:z.z.string(),thumbnails:z.z.array(z.z.object({url:z.z.string(),width:z.z.number(),height:z.z.number()})),verified:z.z.boolean(),subscriber_count:z.z.number()}),isLowLatencyLiveStream:z.z.boolean().optional(),isPrivate:z.z.boolean(),isUnpluggedCorpus:z.z.boolean(),latencyClass:z.z.string().optional(),isLiveContent:z.z.boolean(),media:z.z.object({}),likes:z.z.null(),dislikes:z.z.null(),age_restricted:z.z.boolean(),video_url:z.z.string(),storyboards:z.z.array(z.z.object({templateUrl:z.z.string(),thumbnailWidth:z.z.number(),thumbnailHeight:z.z.number(),thumbnailCount:z.z.number(),interval:z.z.number(),columns:z.z.number(),rows:z.z.number(),storyboardCount:z.z.number()})),chapters:z.z.array(z.z.unknown()),thumbnails:z.z.array(z.z.object({url:z.z.string(),width:z.z.number(),height:z.z.number()}))}),full:z.z.boolean()}),["https://www.youtube.com/watch?v=yxW5yuzVi8w","https://www.youtube.com/watch?v=BilaShsQphM","https://www.youtube.com/watch?v=Fp_P_e1cPOE","https://www.youtube.com/watch?v=XXYlFuWEuKI","https://www.youtube.com/watch?v=a0q6JMuLBYQ","https://www.youtube.com/watch?v=b6U3xeYqdKQ","https://www.youtube.com/watch?v=4qvBnEgCvkc","https://www.youtube.com/watch?v=m8_8tMzmpTg","https://www.youtube.com/watch?v=j4IXCjWnAkY","https://www.youtube.com/watch?v=gCadlN8fexk","https://www.youtube.com/watch?v=aAkMkVFwAoo","https://www.youtube.com/watch?v=E8gmARGvPlI","https://www.youtube.com/watch?v=L4QxmPMplYc","https://www.youtube.com/watch?v=WJvtX-Ec1S8","https://www.youtube.com/watch?v=wXWZiGnaeqo","https://www.youtube.com/watch?v=OiC1rgCPmUQ","https://www.youtube.com/watch?v=ekmHAfUIu1M","https://www.youtube.com/watch?v=YFoDEQXJLcQ","https://www.youtube.com/watch?v=6vEeOfkwXwc","https://www.youtube.com/watch?v=DsoWvXDMo1c","https://www.youtube.com/watch?v=TdZyXgadFG0","https://www.youtube.com/watch?v=NZqEICgKwrw","https://www.youtube.com/watch?v=XrsbfrFPATs","https://www.youtube.com/watch?v=U2waT9TxPU0","https://www.youtube.com/watch?v=Uq9gPaIzbe8","https://www.youtube.com/watch?v=5FNCukepaS8","https://www.youtube.com/watch?v=4m1EFMoRFvY","https://www.youtube.com/watch?v=6Mgqbai3fKo","https://www.youtube.com/watch?v=59Q_lhgGANc","https://www.youtube.com/watch?v=oC-GflRB0y4","https://www.youtube.com/watch?v=c8WDzsqQ7UY","https://www.youtube.com/watch?v=GKTV6-9ONzE","https://www.youtube.com/watch?v=PQZhN65vq9E","https://www.youtube.com/watch?v=lY2yjAdbvdQ","https://www.youtube.com/watch?v=8GotXeCwUnc","https://www.youtube.com/watch?v=PUdyuKaGQd4","https://www.youtube.com/watch?v=hT_nvWreIhg","https://www.youtube.com/watch?v=L1v7hXEQhsQ","https://www.youtube.com/watch?v=wbOTkDn49qI","https://www.youtube.com/watch?v=7jMlFXouPk8","https://www.youtube.com/watch?v=HrxX9TBj2zY","https://www.youtube.com/watch?v=ghSh-xqJX8A","https://www.youtube.com/watch?v=b_zHQ6kFuQ0","https://www.youtube.com/watch?v=0-EF60neguk","https://www.youtube.com/watch?v=u1ZoHfJZACA","https://www.youtube.com/watch?v=d8OI9FllKfg","https://www.youtube.com/watch?v=VYG1-czlu2s","https://www.youtube.com/watch?v=ywQvbGcCIEk","https://www.youtube.com/watch?v=1sM89qLmd9Y","https://www.youtube.com/watch?v=a5irTX82olg","https://www.youtube.com/watch?v=LMOKlXfXn50","https://www.youtube.com/watch?v=u3u22OYqFGo","https://www.youtube.com/watch?v=tbbKjDjMDok","https://www.youtube.com/watch?v=RIsgWYVXIcA","https://www.youtube.com/watch?v=d5wURLqNTXE"]);function l({data:t}){const[e,n]=(0,a.useState)(!1),r=(0,a.useCallback)((t=>(t.preventDefault(),n((t=>!t)))),[]);return a.createElement("a",{href:"#",onClick:r,style:{textDecoration:"none"}},a.createElement("pre",null,e?JSON.stringify(t,null,2):"[...]"))}function g({link:t,onClick:e}){const[n,r]=(0,a.useState)(null);return(0,a.useEffect)((()=>{fetch(`video/info?videoId=${t}`).then((t=>t.json())).then((t=>c.parseAsync(t))).then(r)}),[]),n?a.createElement("div",null,n.videoDetails.thumbnails.slice(0,1).map((({url:r,width:o,height:i},s)=>a.createElement("div",{key:s},a.createElement("a",{href:t,onClick:e},a.createElement("img",{src:r,width:o,height:i,referrerPolicy:"no-referrer"})),a.createElement("div",null,a.createElement("strong",null,n.videoDetails.title))))),a.createElement(l,{data:n})):a.createElement(s,null)}function u(){const[t,e]=(0,a.useState)((()=>[])),[n,r]=(0,a.useState)(""),[i]=(0,a.useState)((()=>b));(0,a.useEffect)((()=>{fetch("video").then((t=>t.json())).then(console.info)}),[]);const s=(0,a.useCallback)((t=>(t.preventDefault(),(t=>r(t))(t.currentTarget.href))),[]),z=(0,a.useCallback)((t=>(t.preventDefault(),(t=>fetch(`video/download?videoId=${t}`).then((t=>t.json())).then(console.info))(t.currentTarget.href))),[]),c=(0,a.useCallback)((t=>(t.preventDefault(),(t=>fetch(`video/download-audio?videoId=${t}`).then((t=>t.json())).then(console.info))(t.currentTarget.href))),[]),l=(0,a.useCallback)((({target:t})=>e((e=>t.checked?e.concat(t.value):e.filter((e=>e!==t.value))))),[]),u=(0,a.useCallback)((({target:t})=>e((()=>t.checked?i:[]))),[]);return a.createElement("div",null,a.createElement("div",null,a.createElement("label",null,a.createElement("input",{type:"checkbox",checked:t.length===i.length,onChange:u}),a.createElement("span",null,"select all")," ")),a.createElement("ul",null,i.map((e=>a.createElement("li",{key:e},a.createElement("input",{type:"checkbox",value:e,checked:t.includes(e),onChange:l}),a.createElement("a",{href:e,onClick:s},e),"[",a.createElement("a",{href:e,onClick:z},"download"),"][",a.createElement("a",{href:e,onClick:c},"download-audio"),"]",t.includes(e)&&a.createElement(g,{link:e,onClick:s}))))),a.createElement("div",{style:{position:"fixed",bottom:0,right:0,border:"2px solid black"}},n&&a.createElement(o(),{url:n,width:320,height:180,controls:!0,light:!0,loop:!0,pip:!0,playing:!0})))}function m(){return a.createElement("section",null,a.createElement("h2",null,"Video"),a.createElement(u,null))}}}]);
//# sourceMappingURL=141.js.map