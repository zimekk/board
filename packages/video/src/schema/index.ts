import { z } from "zod";

export const BasicInfoSchema = z.object({
  page: z.string(),
  player_response: z.object({
    responseContext: z.object({
      serviceTrackingParams: z.array(
        z.object({
          service: z.string(),
          params: z.array(z.object({ key: z.string(), value: z.string() })),
        }),
      ),
      maxAgeSeconds: z.number(),
      mainAppWebResponseContext: z.object({
        loggedOut: z.boolean(),
        trackingParam: z.string(),
      }),
      webResponseContextExtensionData: z.object({ hasDecorated: z.boolean() }),
    }),
    playabilityStatus: z.object({
      status: z.string(),
      playableInEmbed: z.boolean(),
      miniplayer: z.object({
        miniplayerRenderer: z.object({ playbackMode: z.string() }),
      }),
      contextParams: z.string(),
    }),
    streamingData: z.object({
      expiresInSeconds: z.string(),
      formats: z.array(
        z.object({
          itag: z.number(),
          mimeType: z.string(),
          bitrate: z.number(),
          width: z.number(),
          height: z.number(),
          lastModified: z.string(),
          quality: z.string(),
          fps: z.number(),
          qualityLabel: z.string(),
          projectionType: z.string(),
          audioQuality: z.string(),
          approxDurationMs: z.string(),
          audioSampleRate: z.string(),
          audioChannels: z.number(),
          signatureCipher: z.string(),
        }),
      ),
      adaptiveFormats: z
        .object({
          // itag: z.number(),
          // mimeType: z.string(),
          // bitrate: z.number(),
          // initRange: z.object({ start: z.string(), end: z.string() }),
          // indexRange: z.object({ start: z.string(), end: z.string() }),
          // lastModified: z.string(),
          // contentLength: z.string(),
          // quality: z.string(),
          // projectionType: z.string(),
          // averageBitrate: z.number(),
          // audioQuality: z.string(),
          // approxDurationMs: z.string(),
          // audioSampleRate: z.string(),
          // audioChannels: z.number(),
          // loudnessDb: z.number(),
          // signatureCipher: z.string()
        })
        .array(),
    }),
    playbackTracking: z.object({
      videostatsPlaybackUrl: z.object({ baseUrl: z.string() }),
      videostatsDelayplayUrl: z.object({ baseUrl: z.string() }),
      videostatsWatchtimeUrl: z.object({ baseUrl: z.string() }),
      ptrackingUrl: z.object({ baseUrl: z.string() }),
      qoeUrl: z.object({ baseUrl: z.string() }),
      atrUrl: z.object({
        baseUrl: z.string(),
        elapsedMediaTimeSeconds: z.number(),
      }),
      videostatsScheduledFlushWalltimeSeconds: z.array(z.number()),
      videostatsDefaultFlushIntervalSeconds: z.number(),
    }),
    captions: z
      .object({
        playerCaptionsTracklistRenderer: z.object({
          captionTracks: z.array(
            z.object({
              baseUrl: z.string(),
              name: z.object({ simpleText: z.string() }),
              vssId: z.string(),
              languageCode: z.string(),
              isTranslatable: z.boolean(),
              trackName: z.string(),
            }),
          ),
          audioTracks: z.array(
            z.object({
              // captionTrackIndices: z.array(z.number()),
              // defaultCaptionTrackIndex: z.number(),
              // visibility: z.string(),
              // hasDefaultTrack: z.boolean(),
              // captionsInitialState: z.string()
            }),
          ),
          translationLanguages: z.array(
            z.object({
              languageCode: z.string(),
              languageName: z.object({ simpleText: z.string() }),
            }),
          ),
          defaultAudioTrackIndex: z.number(),
        }),
      })
      .optional(),
    videoDetails: z.object({
      videoId: z.string(),
      title: z.string(),
      lengthSeconds: z.string(),
      keywords: z.array(z.string()),
      channelId: z.string(),
      isOwnerViewing: z.boolean(),
      shortDescription: z.string(),
      isCrawlable: z.boolean(),
      thumbnail: z.object({
        thumbnails: z.array(
          z.object({ url: z.string(), width: z.number(), height: z.number() }),
        ),
      }),
      allowRatings: z.boolean(),
      viewCount: z.string(),
      author: z.string(),
      // isLowLatencyLiveStream: z.boolean(),
      isPrivate: z.boolean(),
      // isUnpluggedCorpus: z.boolean(),
      // latencyClass: z.string(),
      // isLiveContent: z.boolean()
    }),
    // annotations: z.array(
    //   z.object({
    //     playerAnnotationsExpandedRenderer: z.object({
    //       featuredChannel: z.object({
    //         startTimeMs: z.string(),
    //         endTimeMs: z.string(),
    //         watermark: z.object({
    //           thumbnails: z.array(
    //             z.object({
    //               url: z.string(),
    //               width: z.number(),
    //               height: z.number()
    //             })
    //           )
    //         }),
    //         trackingParams: z.string(),
    //         navigationEndpoint: z.object({
    //           clickTrackingParams: z.string(),
    //           commandMetadata: z.object({
    //             webCommandMetadata: z.object({
    //               url: z.string(),
    //               webPageType: z.string(),
    //               rootVe: z.number(),
    //               apiUrl: z.string()
    //             })
    //           }),
    //           browseEndpoint: z.object({ browseId: z.string() })
    //         }),
    //         channelName: z.string(),
    //         subscribeButton: z.object({
    //           subscribeButtonRenderer: z.object({
    //             buttonText: z.object({
    //               runs: z.array(z.object({ text: z.string() }))
    //             }),
    //             subscribed: z.boolean(),
    //             enabled: z.boolean(),
    //             type: z.string(),
    //             channelId: z.string(),
    //             showPreferences: z.boolean(),
    //             subscribedButtonText: z.object({
    //               runs: z.array(z.object({ text: z.string() }))
    //             }),
    //             unsubscribedButtonText: z.object({
    //               runs: z.array(z.object({ text: z.string() }))
    //             }),
    //             trackingParams: z.string(),
    //             unsubscribeButtonText: z.object({
    //               runs: z.array(z.object({ text: z.string() }))
    //             }),
    //             serviceEndpoints: z.array(
    //               // z.union([
    //                 // z.object({
    //                 //   clickTrackingParams: z.string(),
    //                 //   commandMetadata: z.object({
    //                 //     webCommandMetadata: z.object({
    //                 //       sendPost: z.boolean(),
    //                 //       apiUrl: z.string()
    //                 //     })
    //                 //   }),
    //                 //   subscribeEndpoint: z.object({
    //                 //     channelIds: z.array(z.string()),
    //                 //     params: z.string()
    //                 //   })
    //                 // }),
    //                 z.object({
    //                   clickTrackingParams: z.string(),
    //                   commandMetadata: z.object({
    //                     webCommandMetadata: z.object({ sendPost: z.boolean() })
    //                   }),
    //                   // signalServiceEndpoint: z.object({
    //                   //   signal: z.string(),
    //                   //   actions: z.array(
    //                   //     z.object({
    //                   //       clickTrackingParams: z.string(),
    //                   //       openPopupAction: z.object({
    //                   //         popup: z.object({
    //                   //           confirmDialogRenderer: z.object({
    //                   //             trackingParams: z.string(),
    //                   //             dialogMessages: z.array(
    //                   //               z.object({
    //                   //                 runs: z.array(
    //                   //                   z.object({ text: z.string() })
    //                   //                 )
    //                   //               })
    //                   //             ),
    //                   //             confirmButton: z.object({
    //                   //               buttonRenderer: z.object({
    //                   //                 style: z.string(),
    //                   //                 size: z.string(),
    //                   //                 isDisabled: z.boolean(),
    //                   //                 text: z.object({
    //                   //                   runs: z.array(
    //                   //                     z.object({ text: z.string() })
    //                   //                   )
    //                   //                 }),
    //                   //                 serviceEndpoint: z.object({
    //                   //                   clickTrackingParams: z.string(),
    //                   //                   commandMetadata: z.object({
    //                   //                     webCommandMetadata: z.object({
    //                   //                       sendPost: z.boolean(),
    //                   //                       apiUrl: z.string()
    //                   //                     })
    //                   //                   }),
    //                   //                   unsubscribeEndpoint: z.object({
    //                   //                     channelIds: z.array(z.string()),
    //                   //                     params: z.string()
    //                   //                   })
    //                   //                 }),
    //                   //                 accessibility: z.object({
    //                   //                   label: z.string()
    //                   //                 }),
    //                   //                 trackingParams: z.string()
    //                   //               })
    //                   //             }),
    //                   //             cancelButton: z.object({
    //                   //               buttonRenderer: z.object({
    //                   //                 style: z.string(),
    //                   //                 size: z.string(),
    //                   //                 isDisabled: z.boolean(),
    //                   //                 text: z.object({
    //                   //                   runs: z.array(
    //                   //                     z.object({ text: z.string() })
    //                   //                   )
    //                   //                 }),
    //                   //                 accessibility: z.object({
    //                   //                   label: z.string()
    //                   //                 }),
    //                   //                 trackingParams: z.string()
    //                   //               })
    //                   //             }),
    //                   //             primaryIsCancel: z.boolean()
    //                   //           })
    //                   //         }),
    //                   //         popupType: z.string()
    //                   //       })
    //                   //     })
    //                   //   )
    //                   // }).optional()
    //                 })
    //               // ])
    //             ),
    //             subscribeAccessibility: z.object({
    //               accessibilityData: z.object({ label: z.string() })
    //             }),
    //             unsubscribeAccessibility: z.object({
    //               accessibilityData: z.object({ label: z.string() })
    //             }),
    //             signInEndpoint: z.object({
    //               clickTrackingParams: z.string(),
    //               commandMetadata: z.object({
    //                 webCommandMetadata: z.object({ url: z.string() })
    //               })
    //             })
    //           })
    //         })
    //       }),
    //       allowSwipeDismiss: z.boolean(),
    //       annotationId: z.string()
    //     })
    //   })
    // ),
    playerConfig: z.object({
      audioConfig: z.object({
        loudnessDb: z.number(),
        perceptualLoudnessDb: z.number(),
        enablePerFormatLoudness: z.boolean(),
      }),
      streamSelectionConfig: z.object({ maxBitrate: z.string() }),
      mediaCommonConfig: z.object({
        dynamicReadaheadConfig: z.object({
          maxReadAheadMediaTimeMs: z.number(),
          minReadAheadMediaTimeMs: z.number(),
          readAheadGrowthRateMs: z.number(),
        }),
      }),
      webPlayerConfig: z.object({
        useCobaltTvosDash: z.boolean(),
        webPlayerActionsPorting: z.object({
          getSharePanelCommand: z.object({
            clickTrackingParams: z.string(),
            commandMetadata: z.object({
              webCommandMetadata: z.object({
                sendPost: z.boolean(),
                apiUrl: z.string(),
              }),
            }),
            webPlayerShareEntityServiceEndpoint: z.object({
              serializedShareEntity: z.string(),
            }),
          }),
          subscribeCommand: z.object({
            clickTrackingParams: z.string(),
            commandMetadata: z.object({
              webCommandMetadata: z.object({
                sendPost: z.boolean(),
                apiUrl: z.string(),
              }),
            }),
            subscribeEndpoint: z.object({
              channelIds: z.array(z.string()),
              params: z.string(),
            }),
          }),
          unsubscribeCommand: z.object({
            clickTrackingParams: z.string(),
            commandMetadata: z.object({
              webCommandMetadata: z.object({
                sendPost: z.boolean(),
                apiUrl: z.string(),
              }),
            }),
            unsubscribeEndpoint: z.object({
              channelIds: z.array(z.string()),
              params: z.string(),
            }),
          }),
          addToWatchLaterCommand: z.object({
            clickTrackingParams: z.string(),
            commandMetadata: z.object({
              webCommandMetadata: z.object({
                sendPost: z.boolean(),
                apiUrl: z.string(),
              }),
            }),
            playlistEditEndpoint: z.object({
              playlistId: z.string(),
              actions: z.array(
                z.object({ addedVideoId: z.string(), action: z.string() }),
              ),
            }),
          }),
          removeFromWatchLaterCommand: z.object({
            clickTrackingParams: z.string(),
            commandMetadata: z.object({
              webCommandMetadata: z.object({
                sendPost: z.boolean(),
                apiUrl: z.string(),
              }),
            }),
            playlistEditEndpoint: z.object({
              playlistId: z.string(),
              actions: z.array(
                z.object({ action: z.string(), removedVideoId: z.string() }),
              ),
            }),
          }),
        }),
      }),
    }),
    storyboards: z.object({
      playerStoryboardSpecRenderer: z.object({
        spec: z.string(),
        recommendedLevel: z.number(),
        highResolutionRecommendedLevel: z.number(),
      }),
    }),
    microformat: z.object({
      playerMicroformatRenderer: z.object({
        thumbnail: z.object({
          thumbnails: z.array(
            z.object({
              url: z.string(),
              width: z.number(),
              height: z.number(),
            }),
          ),
        }),
        embed: z.object({
          iframeUrl: z.string(),
          width: z.number(),
          height: z.number(),
        }),
        title: z.object({ simpleText: z.string() }),
        description: z.object({ simpleText: z.string() }),
        lengthSeconds: z.string(),
        ownerProfileUrl: z.string(),
        externalChannelId: z.string(),
        isFamilySafe: z.boolean(),
        availableCountries: z.array(z.string()),
        isUnlisted: z.boolean(),
        hasYpcMetadata: z.boolean(),
        viewCount: z.string(),
        category: z.string(),
        publishDate: z.string(),
        ownerChannelName: z.string(),
        liveBroadcastDetails: z
          .object({
            isLiveNow: z.boolean(),
            startTimestamp: z.string(),
            endTimestamp: z.string(),
          })
          .optional(),
        uploadDate: z.string(),
      }),
    }),
    // cards: z.object({
    //   cardCollectionRenderer: z.object({
    //     cards: z.array(
    //       z.object({
    //         cardRenderer: z.object({
    //           teaser: z.object({
    //             simpleCardTeaserRenderer: z.object({
    //               message: z.object({ simpleText: z.string() }),
    //               trackingParams: z.string(),
    //               prominent: z.boolean(),
    //               logVisibilityUpdates: z.boolean(),
    //               onTapCommand: z.object({
    //                 clickTrackingParams: z.string(),
    //                 changeEngagementPanelVisibilityAction: z.object({
    //                   targetId: z.string(),
    //                   visibility: z.string()
    //                 })
    //               })
    //             })
    //           }),
    //           cueRanges: z.array(
    //             z.object({
    //               startCardActiveMs: z.string(),
    //               endCardActiveMs: z.string(),
    //               teaserDurationMs: z.string(),
    //               iconAfterTeaserMs: z.string()
    //             })
    //           ),
    //           trackingParams: z.string()
    //         })
    //       })
    //     ),
    //     headerText: z.object({ simpleText: z.string() }),
    //     icon: z.object({
    //       infoCardIconRenderer: z.object({ trackingParams: z.string() })
    //     }),
    //     closeButton: z.object({
    //       infoCardIconRenderer: z.object({ trackingParams: z.string() })
    //     }),
    //     trackingParams: z.string(),
    //     allowTeaserDismiss: z.boolean(),
    //     logIconVisibilityUpdates: z.boolean()
    //   })
    // }),
    trackingParams: z.string(),
    attestation: z.object({
      playerAttestationRenderer: z.object({
        challenge: z.string(),
        botguardData: z.object({
          program: z.string(),
          interpreterSafeUrl: z.object({
            privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: z.string(),
          }),
          serverEnvironment: z.number(),
        }),
      }),
    }),
    // adPlacements: z.array(
    //   z.object({
    //     // adPlacementRenderer: z.object({
    //     //   config: z.object({
    //     //     adPlacementConfig: z.object({
    //     //       kind: z.string(),
    //     //       adTimeOffset: z.object({
    //     //         offsetStartMilliseconds: z.string(),
    //     //         offsetEndMilliseconds: z.string()
    //     //       }),
    //     //       hideCueRangeMarker: z.boolean()
    //     //     })
    //     //   }),
    //     //   renderer: z.object({ clientForecastingAdRenderer: z.object({}) }),
    //     //   adSlotLoggingData: z.object({
    //     //     serializedSlotAdServingDataEntry: z.string()
    //     //   })
    //     // })
    //   })
    // ),
    adBreakHeartbeatParams: z.string(),
    frameworkUpdates: z.object({
      entityBatchUpdate: z.object({
        mutations: z.array(
          z.object({
            entityKey: z.string(),
            type: z.string(),
            payload: z.object({
              offlineabilityEntity: z.object({
                key: z.string(),
                addToOfflineButtonState: z.string(),
              }),
            }),
          }),
        ),
        timestamp: z.object({ seconds: z.string(), nanos: z.number() }),
      }),
    }),
  }),
  response: z.object({
    responseContext: z.object({
      serviceTrackingParams: z.array(
        z.object({
          service: z.string(),
          params: z.array(z.object({ key: z.string(), value: z.string() })),
        }),
      ),
      mainAppWebResponseContext: z.object({
        loggedOut: z.boolean(),
        trackingParam: z.string(),
      }),
      webResponseContextExtensionData: z.object({
        ytConfigData: z.object({
          visitorData: z.string(),
          rootVisualElementType: z.number(),
        }),
        webPrefetchData: z.object({
          navigationEndpoints: z.array(
            z.object({
              clickTrackingParams: z.string(),
              commandMetadata: z.object({
                webCommandMetadata: z.object({
                  url: z.string(),
                  webPageType: z.string(),
                  rootVe: z.number(),
                }),
              }),
              watchEndpoint: z.object({
                videoId: z.string(),
                params: z.string(),
                playerParams: z.string(),
                watchEndpointSupportedPrefetchConfig: z.object({
                  prefetchHintConfig: z.object({
                    prefetchPriority: z.number(),
                    countdownUiRelativeSecondsPrefetchCondition: z.number(),
                  }),
                }),
              }),
            }),
          ),
        }),
        hasDecorated: z.boolean(),
      }),
    }),
    contents: z.object({
      twoColumnWatchNextResults: z.object({
        results: z.object({
          results: z.object({
            contents: z.array(
              // z.union([
              z.object({
                // videoPrimaryInfoRenderer: z.object({
                //   title: z.object({
                //     runs: z.array(z.object({ text: z.string() }))
                //   }),
                //   viewCount: z.object({
                //     videoViewCountRenderer: z.object({
                //       viewCount: z.object({ simpleText: z.string() }),
                //       shortViewCount: z.object({ simpleText: z.string() }),
                //       originalViewCount: z.string()
                //     })
                //   }),
                //   videoActions: z.object({
                //     menuRenderer: z.object({
                //       items: z.array(
                //         z.object({
                //           // menuNavigationItemRenderer: z.object({
                //           //   text: z.object({
                //           //     runs: z.array(z.object({ text: z.string() }))
                //           //   }),
                //           //   icon: z.object({ iconType: z.string() }),
                //           //   navigationEndpoint: z.object({
                //           //     clickTrackingParams: z.string(),
                //           //     commandMetadata: z.object({
                //           //       webCommandMetadata: z.object({
                //           //         ignoreNavigation: z.boolean()
                //           //       })
                //           //     }),
                //           //     modalEndpoint: z.object({
                //           //       modal: z.object({
                //           //         modalWithTitleAndButtonRenderer: z.object({
                //           //           title: z.object({
                //           //             runs: z.array(
                //           //               z.object({ text: z.string() })
                //           //             )
                //           //           }),
                //           //           content: z.object({
                //           //             runs: z.array(
                //           //               // z.union([
                //           //                 // z.object({ text: z.string() }),
                //           //                 z.object({
                //           //                   text: z.string(),
                //           //                   navigationEndpoint: z.object({
                //           //                     clickTrackingParams: z.string(),
                //           //                     commandMetadata: z.object({
                //           //                       webCommandMetadata: z.object({
                //           //                         url: z.string(),
                //           //                         webPageType: z.string(),
                //           //                         rootVe: z.number()
                //           //                       })
                //           //                     }),
                //           //                     urlEndpoint: z.object({
                //           //                       url: z.string()
                //           //                     })
                //           //                   })
                //           //                 })
                //           //               // ])
                //           //             )
                //           //           }),
                //           //           button: z.object({
                //           //             buttonRenderer: z.object({
                //           //               style: z.string(),
                //           //               size: z.string(),
                //           //               text: z.object({
                //           //                 runs: z.array(
                //           //                   z.object({ text: z.string() })
                //           //                 )
                //           //               }),
                //           //               navigationEndpoint: z.object({
                //           //                 clickTrackingParams: z.string(),
                //           //                 commandMetadata: z.object({
                //           //                   webCommandMetadata: z.object({
                //           //                     url: z.string(),
                //           //                     webPageType: z.string(),
                //           //                     rootVe: z.number()
                //           //                   })
                //           //                 }),
                //           //                 signInEndpoint: z.object({
                //           //                   hack: z.boolean()
                //           //                 })
                //           //               }),
                //           //               trackingParams: z.string(),
                //           //               command: z.object({
                //           //                 clickTrackingParams: z.string(),
                //           //                 commandMetadata: z.object({
                //           //                   webCommandMetadata: z.object({
                //           //                     url: z.string(),
                //           //                     webPageType: z.string(),
                //           //                     rootVe: z.number()
                //           //                   })
                //           //                 }),
                //           //                 signInEndpoint: z.object({
                //           //                   hack: z.boolean()
                //           //                 })
                //           //               })
                //           //             })
                //           //           })
                //           //         })
                //           //       })
                //           //     })
                //           //   }),
                //           //   trackingParams: z.string()
                //           // })
                //         })
                //       ),
                //       trackingParams: z.string(),
                //       topLevelButtons: z.array(
                //         // z.union([
                //           z.object({
                //             // segmentedLikeDislikeButtonRenderer: z.object({
                //             //   likeButton: z.object({
                //             //     toggleButtonRenderer: z.object({
                //             //       style: z.object({ styleType: z.string() }),
                //             //       isToggled: z.boolean(),
                //             //       isDisabled: z.boolean(),
                //             //       defaultIcon: z.object({
                //             //         iconType: z.string()
                //             //       }),
                //             //       defaultText: z.object({
                //             //         accessibility: z.object({
                //             //           accessibilityData: z.object({
                //             //             label: z.string()
                //             //           })
                //             //         }),
                //             //         simpleText: z.string()
                //             //       }),
                //             //       toggledText: z.object({
                //             //         accessibility: z.object({
                //             //           accessibilityData: z.object({
                //             //             label: z.string()
                //             //           })
                //             //         }),
                //             //         simpleText: z.string()
                //             //       }),
                //             //       accessibility: z.object({
                //             //         label: z.string()
                //             //       }),
                //             //       trackingParams: z.string(),
                //             //       defaultTooltip: z.string(),
                //             //       toggledTooltip: z.string(),
                //             //       toggledStyle: z.object({
                //             //         styleType: z.string()
                //             //       }),
                //             //       defaultNavigationEndpoint: z.object({
                //             //         clickTrackingParams: z.string(),
                //             //         commandMetadata: z.object({
                //             //           webCommandMetadata: z.object({
                //             //             ignoreNavigation: z.boolean()
                //             //           })
                //             //         }),
                //             //         modalEndpoint: z.object({
                //             //           modal: z.object({
                //             //             modalWithTitleAndButtonRenderer: z.object(
                //             //               {
                //             //                 title: z.object({
                //             //                   simpleText: z.string()
                //             //                 }),
                //             //                 content: z.object({
                //             //                   simpleText: z.string()
                //             //                 }),
                //             //                 button: z.object({
                //             //                   buttonRenderer: z.object({
                //             //                     style: z.string(),
                //             //                     size: z.string(),
                //             //                     isDisabled: z.boolean(),
                //             //                     text: z.object({
                //             //                       simpleText: z.string()
                //             //                     }),
                //             //                     navigationEndpoint: z.object({
                //             //                       clickTrackingParams: z.string(),
                //             //                       commandMetadata: z.object({
                //             //                         webCommandMetadata: z.object(
                //             //                           {
                //             //                             url: z.string(),
                //             //                             webPageType: z.string(),
                //             //                             rootVe: z.number()
                //             //                           }
                //             //                         )
                //             //                       }),
                //             //                       signInEndpoint: z.object({
                //             //                         nextEndpoint: z.object({
                //             //                           clickTrackingParams: z.string(),
                //             //                           commandMetadata: z.object(
                //             //                             {
                //             //                               webCommandMetadata: z.object(
                //             //                                 {
                //             //                                   url: z.string(),
                //             //                                   webPageType: z.string(),
                //             //                                   rootVe: z.number()
                //             //                                 }
                //             //                               )
                //             //                             }
                //             //                           ),
                //             //                           watchEndpoint: z.object(
                //             //                             {
                //             //                               videoId: z.string(),
                //             //                               watchEndpointSupportedOnesieConfig: z.object(
                //             //                                 {
                //             //                                   html5PlaybackOnesieConfig: z.object(
                //             //                                     {
                //             //                                       commonConfig: z.object(
                //             //                                         {
                //             //                                           url: z.string()
                //             //                                         }
                //             //                                       )
                //             //                                     }
                //             //                                   )
                //             //                                 }
                //             //                               )
                //             //                             }
                //             //                           )
                //             //                         }),
                //             //                         idamTag: z.string()
                //             //                       })
                //             //                     }),
                //             //                     trackingParams: z.string()
                //             //                   })
                //             //                 })
                //             //               }
                //             //             )
                //             //           })
                //             //         })
                //             //       }),
                //             //       accessibilityData: z.object({
                //             //         accessibilityData: z.object({
                //             //           label: z.string()
                //             //         })
                //             //       }),
                //             //       toggleButtonSupportedData: z.object({
                //             //         toggleButtonIdData: z.object({
                //             //           id: z.string()
                //             //         })
                //             //       }),
                //             //       targetId: z.string()
                //             //     })
                //             //   }),
                //             //   dislikeButton: z.object({
                //             //     toggleButtonRenderer: z.object({
                //             //       style: z.object({ styleType: z.string() }),
                //             //       isToggled: z.boolean(),
                //             //       isDisabled: z.boolean(),
                //             //       defaultIcon: z.object({
                //             //         iconType: z.string()
                //             //       }),
                //             //       accessibility: z.object({
                //             //         label: z.string()
                //             //       }),
                //             //       trackingParams: z.string(),
                //             //       defaultTooltip: z.string(),
                //             //       toggledTooltip: z.string(),
                //             //       toggledStyle: z.object({
                //             //         styleType: z.string()
                //             //       }),
                //             //       defaultNavigationEndpoint: z.object({
                //             //         clickTrackingParams: z.string(),
                //             //         commandMetadata: z.object({
                //             //           webCommandMetadata: z.object({
                //             //             ignoreNavigation: z.boolean()
                //             //           })
                //             //         }),
                //             //         modalEndpoint: z.object({
                //             //           modal: z.object({
                //             //             modalWithTitleAndButtonRenderer: z.object(
                //             //               {
                //             //                 title: z.object({
                //             //                   simpleText: z.string()
                //             //                 }),
                //             //                 content: z.object({
                //             //                   simpleText: z.string()
                //             //                 }),
                //             //                 button: z.object({
                //             //                   buttonRenderer: z.object({
                //             //                     style: z.string(),
                //             //                     size: z.string(),
                //             //                     isDisabled: z.boolean(),
                //             //                     text: z.object({
                //             //                       simpleText: z.string()
                //             //                     }),
                //             //                     navigationEndpoint: z.object({
                //             //                       clickTrackingParams: z.string(),
                //             //                       commandMetadata: z.object({
                //             //                         webCommandMetadata: z.object(
                //             //                           {
                //             //                             url: z.string(),
                //             //                             webPageType: z.string(),
                //             //                             rootVe: z.number()
                //             //                           }
                //             //                         )
                //             //                       }),
                //             //                       signInEndpoint: z.object({
                //             //                         nextEndpoint: z.object({
                //             //                           clickTrackingParams: z.string(),
                //             //                           commandMetadata: z.object(
                //             //                             {
                //             //                               webCommandMetadata: z.object(
                //             //                                 {
                //             //                                   url: z.string(),
                //             //                                   webPageType: z.string(),
                //             //                                   rootVe: z.number()
                //             //                                 }
                //             //                               )
                //             //                             }
                //             //                           ),
                //             //                           watchEndpoint: z.object(
                //             //                             {
                //             //                               videoId: z.string(),
                //             //                               watchEndpointSupportedOnesieConfig: z.object(
                //             //                                 {
                //             //                                   html5PlaybackOnesieConfig: z.object(
                //             //                                     {
                //             //                                       commonConfig: z.object(
                //             //                                         {
                //             //                                           url: z.string()
                //             //                                         }
                //             //                                       )
                //             //                                     }
                //             //                                   )
                //             //                                 }
                //             //                               )
                //             //                             }
                //             //                           )
                //             //                         }),
                //             //                         idamTag: z.string()
                //             //                       })
                //             //                     }),
                //             //                     trackingParams: z.string()
                //             //                   })
                //             //                 })
                //             //               }
                //             //             )
                //             //           })
                //             //         })
                //             //       }),
                //             //       accessibilityData: z.object({
                //             //         accessibilityData: z.object({
                //             //           label: z.string()
                //             //         })
                //             //       }),
                //             //       toggleButtonSupportedData: z.object({
                //             //         toggleButtonIdData: z.object({
                //             //           id: z.string()
                //             //         })
                //             //       }),
                //             //       targetId: z.string()
                //             //     })
                //             //   }),
                //             //   likeCount: z.string()
                //             // })
                //           }),
                //           // z.object({
                //           //   buttonRenderer: z.object({
                //           //     style: z.string(),
                //           //     size: z.string(),
                //           //     isDisabled: z.boolean(),
                //           //     text: z.object({
                //           //       runs: z.array(z.object({ text: z.string() }))
                //           //     }),
                //           //     serviceEndpoint: z.object({
                //           //       clickTrackingParams: z.string(),
                //           //       commandMetadata: z.object({
                //           //         webCommandMetadata: z.object({
                //           //           sendPost: z.boolean(),
                //           //           apiUrl: z.string()
                //           //         })
                //           //       }),
                //           //       shareEntityServiceEndpoint: z.object({
                //           //         serializedShareEntity: z.string(),
                //           //         commands: z.array(
                //           //           z.object({
                //           //             clickTrackingParams: z.string(),
                //           //             openPopupAction: z.object({
                //           //               popup: z.object({
                //           //                 unifiedSharePanelRenderer: z.object(
                //           //                   {
                //           //                     trackingParams: z.string(),
                //           //                     showLoadingSpinner: z.boolean()
                //           //                   }
                //           //                 )
                //           //               }),
                //           //               popupType: z.string(),
                //           //               beReused: z.boolean()
                //           //             })
                //           //           })
                //           //         )
                //           //       })
                //           //     }),
                //           //     icon: z.object({ iconType: z.string() }),
                //           //     tooltip: z.string(),
                //           //     trackingParams: z.string(),
                //           //     accessibilityData: z.object({
                //           //       accessibilityData: z.object({
                //           //         label: z.string()
                //           //       })
                //           //     })
                //           //   })
                //           // })
                //         // ])
                //       ),
                //       accessibility: z.object({
                //         accessibilityData: z.object({ label: z.string() })
                //       }),
                //       flexibleItems: z.array(
                //         // z.union([
                //           z.object({
                //             menuFlexibleItemRenderer: z.object({
                //               menuItem: z.object({
                //                 // menuServiceItemDownloadRenderer: z.object({
                //                 //   serviceEndpoint: z.object({
                //                 //     clickTrackingParams: z.string(),
                //                 //     offlineVideoEndpoint: z.object({
                //                 //       videoId: z.string(),
                //                 //       onAddCommand: z.object({
                //                 //         clickTrackingParams: z.string(),
                //                 //         getDownloadActionCommand: z.object({
                //                 //           videoId: z.string(),
                //                 //           params: z.string(),
                //                 //           offlineabilityEntityKey: z.string()
                //                 //         })
                //                 //       })
                //                 //     })
                //                 //   }),
                //                 //   trackingParams: z.string()
                //                 // })
                //               }),
                //               topLevelButton: z.object({
                //                 // downloadButtonRenderer: z.object({
                //                 //   trackingParams: z.string(),
                //                 //   style: z.string(),
                //                 //   size: z.string(),
                //                 //   targetId: z.string(),
                //                 //   command: z.object({
                //                 //     clickTrackingParams: z.string(),
                //                 //     offlineVideoEndpoint: z.object({
                //                 //       videoId: z.string(),
                //                 //       onAddCommand: z.object({
                //                 //         clickTrackingParams: z.string(),
                //                 //         getDownloadActionCommand: z.object({
                //                 //           videoId: z.string(),
                //                 //           params: z.string(),
                //                 //           offlineabilityEntityKey: z.string()
                //                 //         })
                //                 //       })
                //                 //     })
                //                 //   })
                //                 // })
                //               })
                //             })
                //           }),
                //           // z.object({
                //           //   menuFlexibleItemRenderer: z.object({
                //           //     menuItem: z.object({
                //           //       menuServiceItemRenderer: z.object({
                //           //         text: z.object({
                //           //           runs: z.array(
                //           //             z.object({ text: z.string() })
                //           //           )
                //           //         }),
                //           //         icon: z.object({ iconType: z.string() }),
                //           //         serviceEndpoint: z.object({
                //           //           clickTrackingParams: z.string(),
                //           //           commandMetadata: z.object({
                //           //             webCommandMetadata: z.object({
                //           //               ignoreNavigation: z.boolean()
                //           //             })
                //           //           }),
                //           //           modalEndpoint: z.object({
                //           //             modal: z.object({
                //           //               modalWithTitleAndButtonRenderer: z.object(
                //           //                 {
                //           //                   title: z.object({
                //           //                     runs: z.array(
                //           //                       z.object({ text: z.string() })
                //           //                     )
                //           //                   }),
                //           //                   content: z.object({
                //           //                     runs: z.array(
                //           //                       z.object({ text: z.string() })
                //           //                     )
                //           //                   }),
                //           //                   button: z.object({
                //           //                     buttonRenderer: z.object({
                //           //                       style: z.string(),
                //           //                       size: z.string(),
                //           //                       isDisabled: z.boolean(),
                //           //                       text: z.object({
                //           //                         simpleText: z.string()
                //           //                       }),
                //           //                       navigationEndpoint: z.object({
                //           //                         clickTrackingParams: z.string(),
                //           //                         commandMetadata: z.object({
                //           //                           webCommandMetadata: z.object(
                //           //                             {
                //           //                               url: z.string(),
                //           //                               webPageType: z.string(),
                //           //                               rootVe: z.number()
                //           //                             }
                //           //                           )
                //           //                         }),
                //           //                         signInEndpoint: z.object({
                //           //                           nextEndpoint: z.object({
                //           //                             clickTrackingParams: z.string(),
                //           //                             commandMetadata: z.object(
                //           //                               {
                //           //                                 webCommandMetadata: z.object(
                //           //                                   {
                //           //                                     url: z.string(),
                //           //                                     webPageType: z.string(),
                //           //                                     rootVe: z.number()
                //           //                                   }
                //           //                                 )
                //           //                               }
                //           //                             ),
                //           //                             watchEndpoint: z.object(
                //           //                               {
                //           //                                 videoId: z.string(),
                //           //                                 watchEndpointSupportedOnesieConfig: z.object(
                //           //                                   {
                //           //                                     html5PlaybackOnesieConfig: z.object(
                //           //                                       {
                //           //                                         commonConfig: z.object(
                //           //                                           {
                //           //                                             url: z.string()
                //           //                                           }
                //           //                                         )
                //           //                                       }
                //           //                                     )
                //           //                                   }
                //           //                                 )
                //           //                               }
                //           //                             )
                //           //                           }),
                //           //                           idamTag: z.string()
                //           //                         })
                //           //                       }),
                //           //                       trackingParams: z.string()
                //           //                     })
                //           //                   })
                //           //                 }
                //           //               )
                //           //             })
                //           //           })
                //           //         }),
                //           //         trackingParams: z.string()
                //           //       })
                //           //     }),
                //           //     topLevelButton: z.object({
                //           //       buttonRenderer: z.object({
                //           //         style: z.string(),
                //           //         size: z.string(),
                //           //         isDisabled: z.boolean(),
                //           //         text: z.object({
                //           //           runs: z.array(
                //           //             z.object({ text: z.string() })
                //           //           )
                //           //         }),
                //           //         icon: z.object({ iconType: z.string() }),
                //           //         accessibility: z.object({
                //           //           label: z.string()
                //           //         }),
                //           //         tooltip: z.string(),
                //           //         trackingParams: z.string(),
                //           //         accessibilityData: z.object({
                //           //           accessibilityData: z.object({
                //           //             label: z.string()
                //           //           })
                //           //         }),
                //           //         command: z.object({
                //           //           clickTrackingParams: z.string(),
                //           //           commandMetadata: z.object({
                //           //             webCommandMetadata: z.object({
                //           //               ignoreNavigation: z.boolean()
                //           //             })
                //           //           }),
                //           //           modalEndpoint: z.object({
                //           //             modal: z.object({
                //           //               modalWithTitleAndButtonRenderer: z.object(
                //           //                 {
                //           //                   title: z.object({
                //           //                     runs: z.array(
                //           //                       z.object({ text: z.string() })
                //           //                     )
                //           //                   }),
                //           //                   content: z.object({
                //           //                     runs: z.array(
                //           //                       z.object({ text: z.string() })
                //           //                     )
                //           //                   }),
                //           //                   button: z.object({
                //           //                     buttonRenderer: z.object({
                //           //                       style: z.string(),
                //           //                       size: z.string(),
                //           //                       isDisabled: z.boolean(),
                //           //                       text: z.object({
                //           //                         simpleText: z.string()
                //           //                       }),
                //           //                       navigationEndpoint: z.object({
                //           //                         clickTrackingParams: z.string(),
                //           //                         commandMetadata: z.object({
                //           //                           webCommandMetadata: z.object(
                //           //                             {
                //           //                               url: z.string(),
                //           //                               webPageType: z.string(),
                //           //                               rootVe: z.number()
                //           //                             }
                //           //                           )
                //           //                         }),
                //           //                         signInEndpoint: z.object({
                //           //                           nextEndpoint: z.object({
                //           //                             clickTrackingParams: z.string(),
                //           //                             commandMetadata: z.object(
                //           //                               {
                //           //                                 webCommandMetadata: z.object(
                //           //                                   {
                //           //                                     url: z.string(),
                //           //                                     webPageType: z.string(),
                //           //                                     rootVe: z.number()
                //           //                                   }
                //           //                                 )
                //           //                               }
                //           //                             ),
                //           //                             watchEndpoint: z.object(
                //           //                               {
                //           //                                 videoId: z.string(),
                //           //                                 watchEndpointSupportedOnesieConfig: z.object(
                //           //                                   {
                //           //                                     html5PlaybackOnesieConfig: z.object(
                //           //                                       {
                //           //                                         commonConfig: z.object(
                //           //                                           {
                //           //                                             url: z.string()
                //           //                                           }
                //           //                                         )
                //           //                                       }
                //           //                                     )
                //           //                                   }
                //           //                                 )
                //           //                               }
                //           //                             )
                //           //                           }),
                //           //                           idamTag: z.string()
                //           //                         })
                //           //                       }),
                //           //                       trackingParams: z.string()
                //           //                     })
                //           //                   })
                //           //                 }
                //           //               )
                //           //             })
                //           //           })
                //           //         })
                //           //       })
                //           //     })
                //           //   })
                //           // })
                //         // ])
                //       )
                //     })
                //   }),
                //   // trackingParams: z.string(),
                //   // superTitleLink: z.object({
                //   //   runs: z.array(
                //   //     // z.union([
                //   //       // z.object({
                //   //       //   text: z.string(),
                //   //       //   navigationEndpoint: z.object({
                //   //       //     clickTrackingParams: z.string(),
                //   //       //     commandMetadata: z.object({
                //   //       //       webCommandMetadata: z.object({
                //   //       //         url: z.string(),
                //   //       //         webPageType: z.string(),
                //   //       //         rootVe: z.number(),
                //   //       //         apiUrl: z.string()
                //   //       //       })
                //   //       //     }),
                //   //       //     browseEndpoint: z.object({
                //   //       //       browseId: z.string(),
                //   //       //       params: z.string()
                //   //       //     })
                //   //       //   }),
                //   //       //   loggingDirectives: z.object({
                //   //       //     trackingParams: z.string(),
                //   //       //     visibility: z.object({ types: z.string() }),
                //   //       //     enableDisplayloggerExperiment: z.boolean()
                //   //       //   })
                //   //       // }),
                //   //       z.object({ text: z.string() })
                //   //     // ])
                //   //   )
                //   // }),
                //   // dateText: z.object({ simpleText: z.string() }),
                //   // relativeDateText: z.object({
                //   //   accessibility: z.object({
                //   //     accessibilityData: z.object({ label: z.string() })
                //   //   }),
                //   //   simpleText: z.string()
                //   // })
                // })
              }),
              // z.object({
              //   videoSecondaryInfoRenderer: z.object({
              //     owner: z.object({
              //       videoOwnerRenderer: z.object({
              //         thumbnail: z.object({
              //           thumbnails: z.array(
              //             z.object({
              //               url: z.string(),
              //               width: z.number(),
              //               height: z.number()
              //             })
              //           )
              //         }),
              //         title: z.object({
              //           runs: z.array(
              //             z.object({
              //               text: z.string(),
              //               navigationEndpoint: z.object({
              //                 clickTrackingParams: z.string(),
              //                 commandMetadata: z.object({
              //                   webCommandMetadata: z.object({
              //                     url: z.string(),
              //                     webPageType: z.string(),
              //                     rootVe: z.number(),
              //                     apiUrl: z.string()
              //                   })
              //                 }),
              //                 browseEndpoint: z.object({
              //                   browseId: z.string(),
              //                   canonicalBaseUrl: z.string()
              //                 })
              //               })
              //             })
              //           )
              //         }),
              //         subscriptionButton: z.object({ type: z.string() }),
              //         navigationEndpoint: z.object({
              //           clickTrackingParams: z.string(),
              //           commandMetadata: z.object({
              //             webCommandMetadata: z.object({
              //               url: z.string(),
              //               webPageType: z.string(),
              //               rootVe: z.number(),
              //               apiUrl: z.string()
              //             })
              //           }),
              //           browseEndpoint: z.object({
              //             browseId: z.string(),
              //             canonicalBaseUrl: z.string()
              //           })
              //         }),
              //         subscriberCountText: z.object({
              //           accessibility: z.object({
              //             accessibilityData: z.object({ label: z.string() })
              //           }),
              //           simpleText: z.string()
              //         }),
              //         trackingParams: z.string(),
              //         badges: z.array(
              //           z.object({
              //             metadataBadgeRenderer: z.object({
              //               icon: z.object({ iconType: z.string() }),
              //               style: z.string(),
              //               tooltip: z.string(),
              //               trackingParams: z.string(),
              //               accessibilityData: z.object({
              //                 label: z.string()
              //               })
              //             })
              //           })
              //         )
              //       })
              //     }),
              //     subscribeButton: z.object({
              //       subscribeButtonRenderer: z.object({
              //         buttonText: z.object({
              //           runs: z.array(z.object({ text: z.string() }))
              //         }),
              //         subscribed: z.boolean(),
              //         enabled: z.boolean(),
              //         type: z.string(),
              //         channelId: z.string(),
              //         showPreferences: z.boolean(),
              //         subscribedButtonText: z.object({
              //           runs: z.array(z.object({ text: z.string() }))
              //         }),
              //         unsubscribedButtonText: z.object({
              //           runs: z.array(z.object({ text: z.string() }))
              //         }),
              //         trackingParams: z.string(),
              //         unsubscribeButtonText: z.object({
              //           runs: z.array(z.object({ text: z.string() }))
              //         }),
              //         subscribeAccessibility: z.object({
              //           accessibilityData: z.object({ label: z.string() })
              //         }),
              //         unsubscribeAccessibility: z.object({
              //           accessibilityData: z.object({ label: z.string() })
              //         }),
              //         notificationPreferenceButton: z.object({
              //           subscriptionNotificationToggleButtonRenderer: z.object(
              //             {
              //               states: z.array(
              //                 z.object({
              //                   stateId: z.number(),
              //                   nextStateId: z.number(),
              //                   state: z.object({
              //                     buttonRenderer: z.object({
              //                       style: z.string(),
              //                       size: z.string(),
              //                       isDisabled: z.boolean(),
              //                       icon: z.object({ iconType: z.string() }),
              //                       accessibility: z.object({
              //                         label: z.string()
              //                       }),
              //                       trackingParams: z.string(),
              //                       accessibilityData: z.object({
              //                         accessibilityData: z.object({
              //                           label: z.string()
              //                         })
              //                       })
              //                     })
              //                   })
              //                 })
              //               ),
              //               currentStateId: z.number(),
              //               trackingParams: z.string(),
              //               command: z.object({
              //                 clickTrackingParams: z.string(),
              //                 commandExecutorCommand: z.object({
              //                   commands: z.array(
              //                     z.object({
              //                       clickTrackingParams: z.string(),
              //                       openPopupAction: z.object({
              //                         popup: z.object({
              //                           menuPopupRenderer: z.object({
              //                             items: z.array(
              //                               z.union([
              //                                 z.object({
              //                                   menuServiceItemRenderer: z.object(
              //                                     {
              //                                       text: z.object({
              //                                         simpleText: z.string()
              //                                       }),
              //                                       icon: z.object({
              //                                         iconType: z.string()
              //                                       }),
              //                                       serviceEndpoint: z.object(
              //                                         {
              //                                           clickTrackingParams: z.string(),
              //                                           commandMetadata: z.object(
              //                                             {
              //                                               webCommandMetadata: z.object(
              //                                                 {
              //                                                   sendPost: z.boolean(),
              //                                                   apiUrl: z.string()
              //                                                 }
              //                                               )
              //                                             }
              //                                           ),
              //                                           modifyChannelNotificationPreferenceEndpoint: z.object(
              //                                             {
              //                                               params: z.string()
              //                                             }
              //                                           )
              //                                         }
              //                                       ),
              //                                       trackingParams: z.string(),
              //                                       isSelected: z.boolean()
              //                                     }
              //                                   )
              //                                 }),
              //                                 z.object({
              //                                   menuServiceItemRenderer: z.object(
              //                                     {
              //                                       text: z.object({
              //                                         runs: z.array(
              //                                           z.object({
              //                                             text: z.string()
              //                                           })
              //                                         )
              //                                       }),
              //                                       icon: z.object({
              //                                         iconType: z.string()
              //                                       }),
              //                                       serviceEndpoint: z.object(
              //                                         {
              //                                           clickTrackingParams: z.string(),
              //                                           commandMetadata: z.object(
              //                                             {
              //                                               webCommandMetadata: z.object(
              //                                                 {
              //                                                   sendPost: z.boolean()
              //                                                 }
              //                                               )
              //                                             }
              //                                           ),
              //                                           signalServiceEndpoint: z.object(
              //                                             {
              //                                               signal: z.string(),
              //                                               actions: z.array(
              //                                                 z.object({
              //                                                   clickTrackingParams: z.string(),
              //                                                   openPopupAction: z.object(
              //                                                     {
              //                                                       popup: z.object(
              //                                                         {
              //                                                           confirmDialogRenderer: z.object(
              //                                                             {
              //                                                               trackingParams: z.string(),
              //                                                               dialogMessages: z.array(
              //                                                                 z.object(
              //                                                                   {
              //                                                                     runs: z.array(
              //                                                                       z.object(
              //                                                                         {
              //                                                                           text: z.string()
              //                                                                         }
              //                                                                       )
              //                                                                     )
              //                                                                   }
              //                                                                 )
              //                                                               ),
              //                                                               confirmButton: z.object(
              //                                                                 {
              //                                                                   buttonRenderer: z.object(
              //                                                                     {
              //                                                                       style: z.string(),
              //                                                                       size: z.string(),
              //                                                                       isDisabled: z.boolean(),
              //                                                                       text: z.object(
              //                                                                         {
              //                                                                           runs: z.array(
              //                                                                             z.object(
              //                                                                               {
              //                                                                                 text: z.string()
              //                                                                               }
              //                                                                             )
              //                                                                           )
              //                                                                         }
              //                                                                       ),
              //                                                                       serviceEndpoint: z.object(
              //                                                                         {
              //                                                                           clickTrackingParams: z.string(),
              //                                                                           commandMetadata: z.object(
              //                                                                             {
              //                                                                               webCommandMetadata: z.object(
              //                                                                                 {
              //                                                                                   sendPost: z.boolean(),
              //                                                                                   apiUrl: z.string()
              //                                                                                 }
              //                                                                               )
              //                                                                             }
              //                                                                           ),
              //                                                                           unsubscribeEndpoint: z.object(
              //                                                                             {
              //                                                                               channelIds: z.array(
              //                                                                                 z.string()
              //                                                                               ),
              //                                                                               params: z.string()
              //                                                                             }
              //                                                                           )
              //                                                                         }
              //                                                                       ),
              //                                                                       accessibility: z.object(
              //                                                                         {
              //                                                                           label: z.string()
              //                                                                         }
              //                                                                       ),
              //                                                                       trackingParams: z.string()
              //                                                                     }
              //                                                                   )
              //                                                                 }
              //                                                               ),
              //                                                               cancelButton: z.object(
              //                                                                 {
              //                                                                   buttonRenderer: z.object(
              //                                                                     {
              //                                                                       style: z.string(),
              //                                                                       size: z.string(),
              //                                                                       isDisabled: z.boolean(),
              //                                                                       text: z.object(
              //                                                                         {
              //                                                                           runs: z.array(
              //                                                                             z.object(
              //                                                                               {
              //                                                                                 text: z.string()
              //                                                                               }
              //                                                                             )
              //                                                                           )
              //                                                                         }
              //                                                                       ),
              //                                                                       accessibility: z.object(
              //                                                                         {
              //                                                                           label: z.string()
              //                                                                         }
              //                                                                       ),
              //                                                                       trackingParams: z.string()
              //                                                                     }
              //                                                                   )
              //                                                                 }
              //                                                               ),
              //                                                               primaryIsCancel: z.boolean()
              //                                                             }
              //                                                           )
              //                                                         }
              //                                                       ),
              //                                                       popupType: z.string()
              //                                                     }
              //                                                   )
              //                                                 })
              //                                               )
              //                                             }
              //                                           )
              //                                         }
              //                                       ),
              //                                       trackingParams: z.string()
              //                                     }
              //                                   )
              //                                 })
              //                               ])
              //                             )
              //                           })
              //                         }),
              //                         popupType: z.string()
              //                       })
              //                     })
              //                   )
              //                 })
              //               }),
              //               targetId: z.string(),
              //               secondaryIcon: z.object({ iconType: z.string() })
              //             }
              //           )
              //         }),
              //         targetId: z.string(),
              //         signInEndpoint: z.object({
              //           clickTrackingParams: z.string(),
              //           commandMetadata: z.object({
              //             webCommandMetadata: z.object({
              //               ignoreNavigation: z.boolean()
              //             })
              //           }),
              //           modalEndpoint: z.object({
              //             modal: z.object({
              //               modalWithTitleAndButtonRenderer: z.object({
              //                 title: z.object({ simpleText: z.string() }),
              //                 content: z.object({ simpleText: z.string() }),
              //                 button: z.object({
              //                   buttonRenderer: z.object({
              //                     style: z.string(),
              //                     size: z.string(),
              //                     isDisabled: z.boolean(),
              //                     text: z.object({ simpleText: z.string() }),
              //                     navigationEndpoint: z.object({
              //                       clickTrackingParams: z.string(),
              //                       commandMetadata: z.object({
              //                         webCommandMetadata: z.object({
              //                           url: z.string(),
              //                           webPageType: z.string(),
              //                           rootVe: z.number()
              //                         })
              //                       }),
              //                       signInEndpoint: z.object({
              //                         nextEndpoint: z.object({
              //                           clickTrackingParams: z.string(),
              //                           commandMetadata: z.object({
              //                             webCommandMetadata: z.object({
              //                               url: z.string(),
              //                               webPageType: z.string(),
              //                               rootVe: z.number()
              //                             })
              //                           }),
              //                           watchEndpoint: z.object({
              //                             videoId: z.string(),
              //                             watchEndpointSupportedOnesieConfig: z.object(
              //                               {
              //                                 html5PlaybackOnesieConfig: z.object(
              //                                   {
              //                                     commonConfig: z.object({
              //                                       url: z.string()
              //                                     })
              //                                   }
              //                                 )
              //                               }
              //                             )
              //                           })
              //                         }),
              //                         continueAction: z.string(),
              //                         idamTag: z.string()
              //                       })
              //                     }),
              //                     trackingParams: z.string()
              //                   })
              //                 })
              //               })
              //             })
              //           })
              //         }),
              //         subscribedEntityKey: z.string(),
              //         onSubscribeEndpoints: z.array(
              //           z.object({
              //             clickTrackingParams: z.string(),
              //             commandMetadata: z.object({
              //               webCommandMetadata: z.object({
              //                 sendPost: z.boolean(),
              //                 apiUrl: z.string()
              //               })
              //             }),
              //             subscribeEndpoint: z.object({
              //               channelIds: z.array(z.string()),
              //               params: z.string()
              //             })
              //           })
              //         ),
              //         onUnsubscribeEndpoints: z.array(
              //           z.object({
              //             clickTrackingParams: z.string(),
              //             commandMetadata: z.object({
              //               webCommandMetadata: z.object({
              //                 sendPost: z.boolean()
              //               })
              //             }),
              //             signalServiceEndpoint: z.object({
              //               signal: z.string(),
              //               actions: z.array(
              //                 z.object({
              //                   clickTrackingParams: z.string(),
              //                   openPopupAction: z.object({
              //                     popup: z.object({
              //                       confirmDialogRenderer: z.object({
              //                         trackingParams: z.string(),
              //                         dialogMessages: z.array(
              //                           z.object({
              //                             runs: z.array(
              //                               z.object({ text: z.string() })
              //                             )
              //                           })
              //                         ),
              //                         confirmButton: z.object({
              //                           buttonRenderer: z.object({
              //                             style: z.string(),
              //                             size: z.string(),
              //                             isDisabled: z.boolean(),
              //                             text: z.object({
              //                               runs: z.array(
              //                                 z.object({ text: z.string() })
              //                               )
              //                             }),
              //                             serviceEndpoint: z.object({
              //                               clickTrackingParams: z.string(),
              //                               commandMetadata: z.object({
              //                                 webCommandMetadata: z.object({
              //                                   sendPost: z.boolean(),
              //                                   apiUrl: z.string()
              //                                 })
              //                               }),
              //                               unsubscribeEndpoint: z.object({
              //                                 channelIds: z.array(z.string()),
              //                                 params: z.string()
              //                               })
              //                             }),
              //                             accessibility: z.object({
              //                               label: z.string()
              //                             }),
              //                             trackingParams: z.string()
              //                           })
              //                         }),
              //                         cancelButton: z.object({
              //                           buttonRenderer: z.object({
              //                             style: z.string(),
              //                             size: z.string(),
              //                             isDisabled: z.boolean(),
              //                             text: z.object({
              //                               runs: z.array(
              //                                 z.object({ text: z.string() })
              //                               )
              //                             }),
              //                             accessibility: z.object({
              //                               label: z.string()
              //                             }),
              //                             trackingParams: z.string()
              //                           })
              //                         }),
              //                         primaryIsCancel: z.boolean()
              //                       })
              //                     }),
              //                     popupType: z.string()
              //                   })
              //                 })
              //               )
              //             })
              //           })
              //         )
              //       })
              //     }),
              //     metadataRowContainer: z.object({
              //       metadataRowContainerRenderer: z.object({
              //         collapsedItemCount: z.number(),
              //         trackingParams: z.string()
              //       })
              //     }),
              //     showMoreText: z.object({ simpleText: z.string() }),
              //     showLessText: z.object({ simpleText: z.string() }),
              //     trackingParams: z.string(),
              //     defaultExpanded: z.boolean(),
              //     descriptionCollapsedLines: z.number(),
              //     showMoreCommand: z.object({
              //       clickTrackingParams: z.string(),
              //       commandExecutorCommand: z.object({
              //         commands: z.array(
              //           z.union([
              //             z.object({
              //               clickTrackingParams: z.string(),
              //               changeEngagementPanelVisibilityAction: z.object({
              //                 targetId: z.string(),
              //                 visibility: z.string()
              //               })
              //             }),
              //             z.object({
              //               clickTrackingParams: z.string(),
              //               scrollToEngagementPanelCommand: z.object({
              //                 targetId: z.string()
              //               })
              //             })
              //           ])
              //         )
              //       })
              //     }),
              //     showLessCommand: z.object({
              //       clickTrackingParams: z.string(),
              //       changeEngagementPanelVisibilityAction: z.object({
              //         targetId: z.string(),
              //         visibility: z.string()
              //       })
              //     }),
              //     attributedDescription: z.object({
              //       content: z.string(),
              //       commandRuns: z.array(
              //         z.union([
              //           z.object({
              //             startIndex: z.number(),
              //             length: z.number(),
              //             onTap: z.object({
              //               innertubeCommand: z.object({
              //                 clickTrackingParams: z.string(),
              //                 commandMetadata: z.object({
              //                   webCommandMetadata: z.object({
              //                     url: z.string(),
              //                     webPageType: z.string(),
              //                     rootVe: z.number()
              //                   })
              //                 }),
              //                 urlEndpoint: z.object({
              //                   url: z.string(),
              //                   target: z.string(),
              //                   nofollow: z.boolean()
              //                 })
              //               })
              //             })
              //           }),
              //           z.object({
              //             startIndex: z.number(),
              //             length: z.number(),
              //             onTap: z.object({
              //               innertubeCommand: z.object({
              //                 clickTrackingParams: z.string(),
              //                 commandMetadata: z.object({
              //                   webCommandMetadata: z.object({
              //                     url: z.string(),
              //                     webPageType: z.string(),
              //                     rootVe: z.number(),
              //                     apiUrl: z.string()
              //                   })
              //                 }),
              //                 browseEndpoint: z.object({
              //                   browseId: z.string(),
              //                   params: z.string()
              //                 })
              //               })
              //             }),
              //             loggingDirectives: z.object({
              //               trackingParams: z.string(),
              //               enableDisplayloggerExperiment: z.boolean()
              //             })
              //           })
              //         ])
              //       ),
              //       styleRuns: z.array(
              //         z.object({
              //           startIndex: z.number(),
              //           length: z.number(),
              //           styleRunExtensions: z.object({
              //             styleRunColorMapExtension: z.object({
              //               colorMap: z.array(
              //                 z.object({ key: z.string(), value: z.number() })
              //               )
              //             })
              //           })
              //         })
              //       ),
              //       attachmentRuns: z.array(
              //         z.object({
              //           startIndex: z.number(),
              //           length: z.number(),
              //           element: z.object({
              //             type: z.object({
              //               imageType: z.object({
              //                 image: z.object({
              //                   sources: z.array(
              //                     z.object({ url: z.string() })
              //                   )
              //                 })
              //               })
              //             }),
              //             properties: z.object({
              //               layoutProperties: z.object({
              //                 height: z.object({
              //                   value: z.number(),
              //                   unit: z.string()
              //                 }),
              //                 width: z.object({
              //                   value: z.number(),
              //                   unit: z.string()
              //                 }),
              //                 margin: z.object({
              //                   top: z.object({
              //                     value: z.number(),
              //                     unit: z.string()
              //                   })
              //                 })
              //               })
              //             })
              //           }),
              //           alignment: z.string()
              //         })
              //       ),
              //       decorationRuns: z.array(
              //         z.object({
              //           textDecorator: z.object({
              //             highlightTextDecorator: z.object({
              //               startIndex: z.number(),
              //               length: z.number(),
              //               backgroundCornerRadius: z.number(),
              //               bottomPadding: z.number(),
              //               highlightTextDecoratorExtensions: z.object({
              //                 highlightTextDecoratorColorMapExtension: z.object(
              //                   {
              //                     colorMap: z.array(
              //                       z.object({
              //                         key: z.string(),
              //                         value: z.number()
              //                       })
              //                     )
              //                   }
              //                 )
              //               })
              //             })
              //           })
              //         })
              //       )
              //     }),
              //     headerRuns: z.array(
              //       z.object({
              //         startIndex: z.number(),
              //         length: z.number(),
              //         headerMapping: z.string()
              //       })
              //     )
              //   })
              // }),
              // z.object({
              //   itemSectionRenderer: z.object({
              //     contents: z.array(
              //       z.object({
              //         commentsEntryPointHeaderRenderer: z.object({
              //           headerText: z.object({
              //             runs: z.array(z.object({ text: z.string() }))
              //           }),
              //           onTap: z.object({
              //             clickTrackingParams: z.string(),
              //             commandExecutorCommand: z.object({
              //               commands: z.array(
              //                 z.union([
              //                   z.object({
              //                     clickTrackingParams: z.string(),
              //                     changeEngagementPanelVisibilityAction: z.object(
              //                       {
              //                         targetId: z.string(),
              //                         visibility: z.string()
              //                       }
              //                     )
              //                   }),
              //                   z.object({
              //                     clickTrackingParams: z.string(),
              //                     scrollToEngagementPanelCommand: z.object({
              //                       targetId: z.string()
              //                     })
              //                   })
              //                 ])
              //               )
              //             })
              //           }),
              //           trackingParams: z.string(),
              //           commentCount: z.object({ simpleText: z.string() }),
              //           contentRenderer: z.object({
              //             commentsEntryPointTeaserRenderer: z.object({
              //               teaserAvatar: z.object({
              //                 thumbnails: z.array(
              //                   z.object({
              //                     url: z.string(),
              //                     width: z.number(),
              //                     height: z.number()
              //                   })
              //                 ),
              //                 accessibility: z.object({
              //                   accessibilityData: z.object({
              //                     label: z.string()
              //                   })
              //                 })
              //               }),
              //               teaserContent: z.object({
              //                 simpleText: z.string()
              //               }),
              //               trackingParams: z.string()
              //             })
              //           }),
              //           targetId: z.string()
              //         })
              //       })
              //     ),
              //     trackingParams: z.string(),
              //     sectionIdentifier: z.string()
              //   })
              // }),
              // z.object({
              //   itemSectionRenderer: z.object({
              //     contents: z.array(
              //       z.object({
              //         continuationItemRenderer: z.object({
              //           trigger: z.string(),
              //           continuationEndpoint: z.object({
              //             clickTrackingParams: z.string(),
              //             commandMetadata: z.object({
              //               webCommandMetadata: z.object({
              //                 sendPost: z.boolean(),
              //                 apiUrl: z.string()
              //               })
              //             }),
              //             continuationCommand: z.object({
              //               token: z.string(),
              //               request: z.string()
              //             })
              //           })
              //         })
              //       })
              //     ),
              //     trackingParams: z.string(),
              //     sectionIdentifier: z.string(),
              //     targetId: z.string()
              //   })
              // })
              // ])
            ),
            trackingParams: z.string(),
          }),
        }),
        secondaryResults: z.object({
          secondaryResults: z.object({
            // results: z.array(
            //   // z.union([
            //     z.object({
            //       compactVideoRenderer: z.object({
            //         videoId: z.string(),
            //         thumbnail: z.object({
            //           thumbnails: z.array(
            //             z.object({
            //               url: z.string(),
            //               width: z.number(),
            //               height: z.number()
            //             })
            //           )
            //         }),
            //         title: z.object({
            //           accessibility: z.object({
            //             accessibilityData: z.object({ label: z.string() })
            //           }),
            //           simpleText: z.string()
            //         }),
            //         longBylineText: z.object({
            //           runs: z.array(
            //             z.object({
            //               text: z.string(),
            //               navigationEndpoint: z.object({
            //                 clickTrackingParams: z.string(),
            //                 commandMetadata: z.object({
            //                   webCommandMetadata: z.object({
            //                     url: z.string(),
            //                     webPageType: z.string(),
            //                     rootVe: z.number(),
            //                     apiUrl: z.string()
            //                   })
            //                 }),
            //                 browseEndpoint: z.object({
            //                   browseId: z.string(),
            //                   canonicalBaseUrl: z.string()
            //                 })
            //               })
            //             })
            //           )
            //         }),
            //         publishedTimeText: z.object({ simpleText: z.string() }),
            //         viewCountText: z.object({ simpleText: z.string() }),
            //         lengthText: z.object({
            //           accessibility: z.object({
            //             accessibilityData: z.object({ label: z.string() })
            //           }),
            //           simpleText: z.string()
            //         }),
            //         navigationEndpoint: z.object({
            //           clickTrackingParams: z.string(),
            //           commandMetadata: z.object({
            //             webCommandMetadata: z.object({
            //               url: z.string(),
            //               webPageType: z.string(),
            //               rootVe: z.number()
            //             })
            //           }),
            //           watchEndpoint: z.object({
            //             videoId: z.string(),
            //             nofollow: z.boolean(),
            //             watchEndpointSupportedOnesieConfig: z.object({
            //               html5PlaybackOnesieConfig: z.object({
            //                 commonConfig: z.object({ url: z.string() })
            //               })
            //             })
            //           })
            //         }),
            //         shortBylineText: z.object({
            //           runs: z.array(
            //             z.object({
            //               text: z.string(),
            //               navigationEndpoint: z.object({
            //                 clickTrackingParams: z.string(),
            //                 commandMetadata: z.object({
            //                   webCommandMetadata: z.object({
            //                     url: z.string(),
            //                     webPageType: z.string(),
            //                     rootVe: z.number(),
            //                     apiUrl: z.string()
            //                   })
            //                 }),
            //                 browseEndpoint: z.object({
            //                   browseId: z.string(),
            //                   canonicalBaseUrl: z.string()
            //                 })
            //               })
            //             })
            //           )
            //         }),
            //         channelThumbnail: z.object({
            //           thumbnails: z.array(
            //             z.object({
            //               url: z.string(),
            //               width: z.number(),
            //               height: z.number()
            //             })
            //           )
            //         }),
            //         // ownerBadges: z.array(
            //         //   z.object({
            //         //     metadataBadgeRenderer: z.object({
            //         //       icon: z.object({ iconType: z.string() }),
            //         //       style: z.string(),
            //         //       tooltip: z.string(),
            //         //       trackingParams: z.string(),
            //         //       accessibilityData: z.object({ label: z.string() })
            //         //     })
            //         //   })
            //         // ),
            //         trackingParams: z.string(),
            //         shortViewCountText: z.object({
            //           accessibility: z.object({
            //             accessibilityData: z.object({ label: z.string() })
            //           }),
            //           simpleText: z.string()
            //         }),
            //         menu: z.object({
            //           // menuRenderer: z.object({
            //           //   items: z.array(
            //           //     // z.union([
            //           //       z.object({
            //           //         menuServiceItemRenderer: z.object({
            //           //           text: z.object({
            //           //             runs: z.array(z.object({ text: z.string() }))
            //           //           }),
            //           //           icon: z.object({ iconType: z.string() }),
            //           //           serviceEndpoint: z.object({
            //           //             clickTrackingParams: z.string(),
            //           //             commandMetadata: z.object({
            //           //               webCommandMetadata: z.object({
            //           //                 sendPost: z.boolean()
            //           //               })
            //           //             }),
            //           //             signalServiceEndpoint: z.object({
            //           //               signal: z.string(),
            //           //               actions: z.array(
            //           //                 // z.union([
            //           //                   // z.object({
            //           //                   //   clickTrackingParams: z.string(),
            //           //                   //   addToPlaylistCommand: z.object({
            //           //                   //     openMiniplayer: z.boolean(),
            //           //                   //     openListPanel: z.boolean(),
            //           //                   //     videoId: z.string(),
            //           //                   //     listType: z.string(),
            //           //                   //     onCreateListCommand: z.object({
            //           //                   //       clickTrackingParams: z.string(),
            //           //                   //       commandMetadata: z.object({
            //           //                   //         webCommandMetadata: z.object({
            //           //                   //           sendPost: z.boolean(),
            //           //                   //           apiUrl: z.string()
            //           //                   //         })
            //           //                   //       }),
            //           //                   //       createPlaylistServiceEndpoint: z.object(
            //           //                   //         {
            //           //                   //           videoIds: z.array(z.string()),
            //           //                   //           params: z.string()
            //           //                   //         }
            //           //                   //       )
            //           //                   //     }),
            //           //                   //     videoIds: z.array(z.string())
            //           //                   //   })
            //           //                   // }),
            //           //                   z.object({
            //           //                     clickTrackingParams: z.string(),
            //           //                     openPopupAction: z.object({
            //           //                       popup: z.object({
            //           //                         notificationActionRenderer: z.object(
            //           //                           {
            //           //                             responseText: z.object({
            //           //                               simpleText: z.string()
            //           //                             }),
            //           //                             trackingParams: z.string()
            //           //                           }
            //           //                         )
            //           //                       }),
            //           //                       popupType: z.string()
            //           //                     })
            //           //                   })
            //           //                 // ])
            //           //               )
            //           //             })
            //           //           }),
            //           //           trackingParams: z.string()
            //           //         })
            //           //       }),
            //           //       // z.object({
            //           //       //   menuServiceItemDownloadRenderer: z.object({
            //           //       //     serviceEndpoint: z.object({
            //           //       //       clickTrackingParams: z.string(),
            //           //       //       offlineVideoEndpoint: z.object({
            //           //       //         videoId: z.string(),
            //           //       //         onAddCommand: z.object({
            //           //       //           clickTrackingParams: z.string(),
            //           //       //           getDownloadActionCommand: z.object({
            //           //       //             videoId: z.string(),
            //           //       //             params: z.string()
            //           //       //           })
            //           //       //         })
            //           //       //       })
            //           //       //     }),
            //           //       //     trackingParams: z.string()
            //           //       //   })
            //           //       // }),
            //           //       // z.object({
            //           //       //   menuServiceItemRenderer: z.object({
            //           //       //     text: z.object({
            //           //       //       runs: z.array(z.object({ text: z.string() }))
            //           //       //     }),
            //           //       //     icon: z.object({ iconType: z.string() }),
            //           //       //     serviceEndpoint: z.object({
            //           //       //       clickTrackingParams: z.string(),
            //           //       //       commandMetadata: z.object({
            //           //       //         webCommandMetadata: z.object({
            //           //       //           sendPost: z.boolean(),
            //           //       //           apiUrl: z.string()
            //           //       //         })
            //           //       //       }),
            //           //       //       shareEntityServiceEndpoint: z.object({
            //           //       //         serializedShareEntity: z.string(),
            //           //       //         commands: z.array(
            //           //       //           z.object({
            //           //       //             clickTrackingParams: z.string(),
            //           //       //             openPopupAction: z.object({
            //           //       //               popup: z.object({
            //           //       //                 unifiedSharePanelRenderer: z.object(
            //           //       //                   {
            //           //       //                     trackingParams: z.string(),
            //           //       //                     showLoadingSpinner: z.boolean()
            //           //       //                   }
            //           //       //                 )
            //           //       //               }),
            //           //       //               popupType: z.string(),
            //           //       //               beReused: z.boolean()
            //           //       //             })
            //           //       //           })
            //           //       //         )
            //           //       //       })
            //           //       //     }),
            //           //       //     trackingParams: z.string(),
            //           //       //     hasSeparator: z.boolean()
            //           //       //   })
            //           //       // })
            //           //     // ])
            //           //   ),
            //           //   trackingParams: z.string(),
            //           //   accessibility: z.object({
            //           //     accessibilityData: z.object({ label: z.string() })
            //           //   }),
            //           //   targetId: z.string()
            //           // })
            //         }),
            //         // thumbnailOverlays: z.array(
            //         //   // z.union([
            //         //     z.object({
            //         //       thumbnailOverlayTimeStatusRenderer: z.object({
            //         //         text: z.object({
            //         //           accessibility: z.object({
            //         //             accessibilityData: z.object({
            //         //               label: z.string()
            //         //             })
            //         //           }),
            //         //           simpleText: z.string()
            //         //         }),
            //         //         style: z.string()
            //         //       })
            //         //     }),
            //         //     // z.object({
            //         //     //   thumbnailOverlayToggleButtonRenderer: z.object({
            //         //     //     isToggled: z.boolean(),
            //         //     //     untoggledIcon: z.object({ iconType: z.string() }),
            //         //     //     toggledIcon: z.object({ iconType: z.string() }),
            //         //     //     untoggledTooltip: z.string(),
            //         //     //     toggledTooltip: z.string(),
            //         //     //     untoggledServiceEndpoint: z.object({
            //         //     //       clickTrackingParams: z.string(),
            //         //     //       commandMetadata: z.object({
            //         //     //         webCommandMetadata: z.object({
            //         //     //           sendPost: z.boolean(),
            //         //     //           apiUrl: z.string()
            //         //     //         })
            //         //     //       }),
            //         //     //       playlistEditEndpoint: z.object({
            //         //     //         playlistId: z.string(),
            //         //     //         actions: z.array(
            //         //     //           z.object({
            //         //     //             addedVideoId: z.string(),
            //         //     //             action: z.string()
            //         //     //           })
            //         //     //         )
            //         //     //       })
            //         //     //     }),
            //         //     //     toggledServiceEndpoint: z.object({
            //         //     //       clickTrackingParams: z.string(),
            //         //     //       commandMetadata: z.object({
            //         //     //         webCommandMetadata: z.object({
            //         //     //           sendPost: z.boolean(),
            //         //     //           apiUrl: z.string()
            //         //     //         })
            //         //     //       }),
            //         //     //       playlistEditEndpoint: z.object({
            //         //     //         playlistId: z.string(),
            //         //     //         actions: z.array(
            //         //     //           z.object({
            //         //     //             action: z.string(),
            //         //     //             removedVideoId: z.string()
            //         //     //           })
            //         //     //         )
            //         //     //       })
            //         //     //     }),
            //         //     //     untoggledAccessibility: z.object({
            //         //     //       accessibilityData: z.object({
            //         //     //         label: z.string()
            //         //     //       })
            //         //     //     }),
            //         //     //     toggledAccessibility: z.object({
            //         //     //       accessibilityData: z.object({
            //         //     //         label: z.string()
            //         //     //       })
            //         //     //     }),
            //         //     //     trackingParams: z.string()
            //         //     //   })
            //         //     // }),
            //         //     // z.object({
            //         //     //   thumbnailOverlayToggleButtonRenderer: z.object({
            //         //     //     untoggledIcon: z.object({ iconType: z.string() }),
            //         //     //     toggledIcon: z.object({ iconType: z.string() }),
            //         //     //     untoggledTooltip: z.string(),
            //         //     //     toggledTooltip: z.string(),
            //         //     //     untoggledServiceEndpoint: z.object({
            //         //     //       clickTrackingParams: z.string(),
            //         //     //       commandMetadata: z.object({
            //         //     //         webCommandMetadata: z.object({
            //         //     //           sendPost: z.boolean()
            //         //     //         })
            //         //     //       }),
            //         //     //       signalServiceEndpoint: z.object({
            //         //     //         signal: z.string(),
            //         //     //         actions: z.array(
            //         //     //           z.object({
            //         //     //             clickTrackingParams: z.string(),
            //         //     //             addToPlaylistCommand: z.object({
            //         //     //               openMiniplayer: z.boolean(),
            //         //     //               openListPanel: z.boolean(),
            //         //     //               videoId: z.string(),
            //         //     //               listType: z.string(),
            //         //     //               onCreateListCommand: z.object({
            //         //     //                 clickTrackingParams: z.string(),
            //         //     //                 commandMetadata: z.object({
            //         //     //                   webCommandMetadata: z.object({
            //         //     //                     sendPost: z.boolean(),
            //         //     //                     apiUrl: z.string()
            //         //     //                   })
            //         //     //                 }),
            //         //     //                 createPlaylistServiceEndpoint: z.object(
            //         //     //                   {
            //         //     //                     videoIds: z.array(z.string()),
            //         //     //                     params: z.string()
            //         //     //                   }
            //         //     //                 )
            //         //     //               }),
            //         //     //               videoIds: z.array(z.string())
            //         //     //             })
            //         //     //           })
            //         //     //         )
            //         //     //       })
            //         //     //     }),
            //         //     //     untoggledAccessibility: z.object({
            //         //     //       accessibilityData: z.object({
            //         //     //         label: z.string()
            //         //     //       })
            //         //     //     }),
            //         //     //     toggledAccessibility: z.object({
            //         //     //       accessibilityData: z.object({
            //         //     //         label: z.string()
            //         //     //       })
            //         //     //     }),
            //         //     //     trackingParams: z.string()
            //         //     //   })
            //         //     // }),
            //         //     // z.object({
            //         //     //   thumbnailOverlayNowPlayingRenderer: z.object({
            //         //     //     text: z.object({
            //         //     //       runs: z.array(z.object({ text: z.string() }))
            //         //     //     })
            //         //     //   })
            //         //     // })
            //         //   // ])
            //         // ),
            //         accessibility: z.object({
            //           accessibilityData: z.object({ label: z.string() })
            //         })
            //       })
            //     }),
            //     // z.object({
            //     //   compactVideoRenderer: z.object({
            //     //     videoId: z.string(),
            //     //     thumbnail: z.object({
            //     //       thumbnails: z.array(
            //     //         z.object({
            //     //           url: z.string(),
            //     //           width: z.number(),
            //     //           height: z.number()
            //     //         })
            //     //       )
            //     //     }),
            //     //     title: z.object({
            //     //       accessibility: z.object({
            //     //         accessibilityData: z.object({ label: z.string() })
            //     //       }),
            //     //       simpleText: z.string()
            //     //     }),
            //     //     longBylineText: z.object({
            //     //       runs: z.array(
            //     //         z.object({
            //     //           text: z.string(),
            //     //           navigationEndpoint: z.object({
            //     //             clickTrackingParams: z.string(),
            //     //             commandMetadata: z.object({
            //     //               webCommandMetadata: z.object({
            //     //                 url: z.string(),
            //     //                 webPageType: z.string(),
            //     //                 rootVe: z.number(),
            //     //                 apiUrl: z.string()
            //     //               })
            //     //             }),
            //     //             browseEndpoint: z.object({
            //     //               browseId: z.string(),
            //     //               canonicalBaseUrl: z.string()
            //     //             })
            //     //           })
            //     //         })
            //     //       )
            //     //     }),
            //     //     publishedTimeText: z.object({ simpleText: z.string() }),
            //     //     viewCountText: z.object({ simpleText: z.string() }),
            //     //     lengthText: z.object({
            //     //       accessibility: z.object({
            //     //         accessibilityData: z.object({ label: z.string() })
            //     //       }),
            //     //       simpleText: z.string()
            //     //     }),
            //     //     navigationEndpoint: z.object({
            //     //       clickTrackingParams: z.string(),
            //     //       commandMetadata: z.object({
            //     //         webCommandMetadata: z.object({
            //     //           url: z.string(),
            //     //           webPageType: z.string(),
            //     //           rootVe: z.number()
            //     //         })
            //     //       }),
            //     //       watchEndpoint: z.object({
            //     //         videoId: z.string(),
            //     //         nofollow: z.boolean(),
            //     //         watchEndpointSupportedOnesieConfig: z.object({
            //     //           html5PlaybackOnesieConfig: z.object({
            //     //             commonConfig: z.object({ url: z.string() })
            //     //           })
            //     //         })
            //     //       })
            //     //     }),
            //     //     shortBylineText: z.object({
            //     //       runs: z.array(
            //     //         z.object({
            //     //           text: z.string(),
            //     //           navigationEndpoint: z.object({
            //     //             clickTrackingParams: z.string(),
            //     //             commandMetadata: z.object({
            //     //               webCommandMetadata: z.object({
            //     //                 url: z.string(),
            //     //                 webPageType: z.string(),
            //     //                 rootVe: z.number(),
            //     //                 apiUrl: z.string()
            //     //               })
            //     //             }),
            //     //             browseEndpoint: z.object({
            //     //               browseId: z.string(),
            //     //               canonicalBaseUrl: z.string()
            //     //             })
            //     //           })
            //     //         })
            //     //       )
            //     //     }),
            //     //     channelThumbnail: z.object({
            //     //       thumbnails: z.array(
            //     //         z.object({
            //     //           url: z.string(),
            //     //           width: z.number(),
            //     //           height: z.number()
            //     //         })
            //     //       )
            //     //     }),
            //     //     trackingParams: z.string(),
            //     //     shortViewCountText: z.object({
            //     //       accessibility: z.object({
            //     //         accessibilityData: z.object({ label: z.string() })
            //     //       }),
            //     //       simpleText: z.string()
            //     //     }),
            //     //     menu: z.object({
            //     //       menuRenderer: z.object({
            //     //         items: z.array(
            //     //           z.union([
            //     //             z.object({
            //     //               menuServiceItemRenderer: z.object({
            //     //                 text: z.object({
            //     //                   runs: z.array(z.object({ text: z.string() }))
            //     //                 }),
            //     //                 icon: z.object({ iconType: z.string() }),
            //     //                 serviceEndpoint: z.object({
            //     //                   clickTrackingParams: z.string(),
            //     //                   commandMetadata: z.object({
            //     //                     webCommandMetadata: z.object({
            //     //                       sendPost: z.boolean()
            //     //                     })
            //     //                   }),
            //     //                   signalServiceEndpoint: z.object({
            //     //                     signal: z.string(),
            //     //                     actions: z.array(
            //     //                       z.union([
            //     //                         z.object({
            //     //                           clickTrackingParams: z.string(),
            //     //                           addToPlaylistCommand: z.object({
            //     //                             openMiniplayer: z.boolean(),
            //     //                             openListPanel: z.boolean(),
            //     //                             videoId: z.string(),
            //     //                             listType: z.string(),
            //     //                             onCreateListCommand: z.object({
            //     //                               clickTrackingParams: z.string(),
            //     //                               commandMetadata: z.object({
            //     //                                 webCommandMetadata: z.object({
            //     //                                   sendPost: z.boolean(),
            //     //                                   apiUrl: z.string()
            //     //                                 })
            //     //                               }),
            //     //                               createPlaylistServiceEndpoint: z.object(
            //     //                                 {
            //     //                                   videoIds: z.array(z.string()),
            //     //                                   params: z.string()
            //     //                                 }
            //     //                               )
            //     //                             }),
            //     //                             videoIds: z.array(z.string())
            //     //                           })
            //     //                         }),
            //     //                         z.object({
            //     //                           clickTrackingParams: z.string(),
            //     //                           openPopupAction: z.object({
            //     //                             popup: z.object({
            //     //                               notificationActionRenderer: z.object(
            //     //                                 {
            //     //                                   responseText: z.object({
            //     //                                     simpleText: z.string()
            //     //                                   }),
            //     //                                   trackingParams: z.string()
            //     //                                 }
            //     //                               )
            //     //                             }),
            //     //                             popupType: z.string()
            //     //                           })
            //     //                         })
            //     //                       ])
            //     //                     )
            //     //                   })
            //     //                 }),
            //     //                 trackingParams: z.string()
            //     //               })
            //     //             }),
            //     //             z.object({
            //     //               menuServiceItemDownloadRenderer: z.object({
            //     //                 serviceEndpoint: z.object({
            //     //                   clickTrackingParams: z.string(),
            //     //                   offlineVideoEndpoint: z.object({
            //     //                     videoId: z.string(),
            //     //                     onAddCommand: z.object({
            //     //                       clickTrackingParams: z.string(),
            //     //                       getDownloadActionCommand: z.object({
            //     //                         videoId: z.string(),
            //     //                         params: z.string()
            //     //                       })
            //     //                     })
            //     //                   })
            //     //                 }),
            //     //                 trackingParams: z.string()
            //     //               })
            //     //             }),
            //     //             z.object({
            //     //               menuServiceItemRenderer: z.object({
            //     //                 text: z.object({
            //     //                   runs: z.array(z.object({ text: z.string() }))
            //     //                 }),
            //     //                 icon: z.object({ iconType: z.string() }),
            //     //                 serviceEndpoint: z.object({
            //     //                   clickTrackingParams: z.string(),
            //     //                   commandMetadata: z.object({
            //     //                     webCommandMetadata: z.object({
            //     //                       sendPost: z.boolean(),
            //     //                       apiUrl: z.string()
            //     //                     })
            //     //                   }),
            //     //                   shareEntityServiceEndpoint: z.object({
            //     //                     serializedShareEntity: z.string(),
            //     //                     commands: z.array(
            //     //                       z.object({
            //     //                         clickTrackingParams: z.string(),
            //     //                         openPopupAction: z.object({
            //     //                           popup: z.object({
            //     //                             unifiedSharePanelRenderer: z.object(
            //     //                               {
            //     //                                 trackingParams: z.string(),
            //     //                                 showLoadingSpinner: z.boolean()
            //     //                               }
            //     //                             )
            //     //                           }),
            //     //                           popupType: z.string(),
            //     //                           beReused: z.boolean()
            //     //                         })
            //     //                       })
            //     //                     )
            //     //                   })
            //     //                 }),
            //     //                 trackingParams: z.string(),
            //     //                 hasSeparator: z.boolean()
            //     //               })
            //     //             })
            //     //           ])
            //     //         ),
            //     //         trackingParams: z.string(),
            //     //         accessibility: z.object({
            //     //           accessibilityData: z.object({ label: z.string() })
            //     //         })
            //     //       })
            //     //     }),
            //     //     thumbnailOverlays: z.array(
            //     //       z.union([
            //     //         z.object({
            //     //           thumbnailOverlayTimeStatusRenderer: z.object({
            //     //             text: z.object({
            //     //               accessibility: z.object({
            //     //                 accessibilityData: z.object({
            //     //                   label: z.string()
            //     //                 })
            //     //               }),
            //     //               simpleText: z.string()
            //     //             }),
            //     //             style: z.string()
            //     //           })
            //     //         }),
            //     //         z.object({
            //     //           thumbnailOverlayToggleButtonRenderer: z.object({
            //     //             isToggled: z.boolean(),
            //     //             untoggledIcon: z.object({ iconType: z.string() }),
            //     //             toggledIcon: z.object({ iconType: z.string() }),
            //     //             untoggledTooltip: z.string(),
            //     //             toggledTooltip: z.string(),
            //     //             untoggledServiceEndpoint: z.object({
            //     //               clickTrackingParams: z.string(),
            //     //               commandMetadata: z.object({
            //     //                 webCommandMetadata: z.object({
            //     //                   sendPost: z.boolean(),
            //     //                   apiUrl: z.string()
            //     //                 })
            //     //               }),
            //     //               playlistEditEndpoint: z.object({
            //     //                 playlistId: z.string(),
            //     //                 actions: z.array(
            //     //                   z.object({
            //     //                     addedVideoId: z.string(),
            //     //                     action: z.string()
            //     //                   })
            //     //                 )
            //     //               })
            //     //             }),
            //     //             toggledServiceEndpoint: z.object({
            //     //               clickTrackingParams: z.string(),
            //     //               commandMetadata: z.object({
            //     //                 webCommandMetadata: z.object({
            //     //                   sendPost: z.boolean(),
            //     //                   apiUrl: z.string()
            //     //                 })
            //     //               }),
            //     //               playlistEditEndpoint: z.object({
            //     //                 playlistId: z.string(),
            //     //                 actions: z.array(
            //     //                   z.object({
            //     //                     action: z.string(),
            //     //                     removedVideoId: z.string()
            //     //                   })
            //     //                 )
            //     //               })
            //     //             }),
            //     //             untoggledAccessibility: z.object({
            //     //               accessibilityData: z.object({
            //     //                 label: z.string()
            //     //               })
            //     //             }),
            //     //             toggledAccessibility: z.object({
            //     //               accessibilityData: z.object({
            //     //                 label: z.string()
            //     //               })
            //     //             }),
            //     //             trackingParams: z.string()
            //     //           })
            //     //         }),
            //     //         z.object({
            //     //           thumbnailOverlayToggleButtonRenderer: z.object({
            //     //             untoggledIcon: z.object({ iconType: z.string() }),
            //     //             toggledIcon: z.object({ iconType: z.string() }),
            //     //             untoggledTooltip: z.string(),
            //     //             toggledTooltip: z.string(),
            //     //             untoggledServiceEndpoint: z.object({
            //     //               clickTrackingParams: z.string(),
            //     //               commandMetadata: z.object({
            //     //                 webCommandMetadata: z.object({
            //     //                   sendPost: z.boolean()
            //     //                 })
            //     //               }),
            //     //               signalServiceEndpoint: z.object({
            //     //                 signal: z.string(),
            //     //                 actions: z.array(
            //     //                   z.object({
            //     //                     clickTrackingParams: z.string(),
            //     //                     addToPlaylistCommand: z.object({
            //     //                       openMiniplayer: z.boolean(),
            //     //                       openListPanel: z.boolean(),
            //     //                       videoId: z.string(),
            //     //                       listType: z.string(),
            //     //                       onCreateListCommand: z.object({
            //     //                         clickTrackingParams: z.string(),
            //     //                         commandMetadata: z.object({
            //     //                           webCommandMetadata: z.object({
            //     //                             sendPost: z.boolean(),
            //     //                             apiUrl: z.string()
            //     //                           })
            //     //                         }),
            //     //                         createPlaylistServiceEndpoint: z.object(
            //     //                           {
            //     //                             videoIds: z.array(z.string()),
            //     //                             params: z.string()
            //     //                           }
            //     //                         )
            //     //                       }),
            //     //                       videoIds: z.array(z.string())
            //     //                     })
            //     //                   })
            //     //                 )
            //     //               })
            //     //             }),
            //     //             untoggledAccessibility: z.object({
            //     //               accessibilityData: z.object({
            //     //                 label: z.string()
            //     //               })
            //     //             }),
            //     //             toggledAccessibility: z.object({
            //     //               accessibilityData: z.object({
            //     //                 label: z.string()
            //     //               })
            //     //             }),
            //     //             trackingParams: z.string()
            //     //           })
            //     //         }),
            //     //         z.object({
            //     //           thumbnailOverlayNowPlayingRenderer: z.object({
            //     //             text: z.object({
            //     //               runs: z.array(z.object({ text: z.string() }))
            //     //             })
            //     //           })
            //     //         })
            //     //       ])
            //     //     ),
            //     //     accessibility: z.object({
            //     //       accessibilityData: z.object({ label: z.string() })
            //     //     })
            //     //   })
            //     // }),
            //     // z.object({
            //     //   compactVideoRenderer: z.object({
            //     //     videoId: z.string(),
            //     //     thumbnail: z.object({
            //     //       thumbnails: z.array(
            //     //         z.object({
            //     //           url: z.string(),
            //     //           width: z.number(),
            //     //           height: z.number()
            //     //         })
            //     //       )
            //     //     }),
            //     //     title: z.object({
            //     //       accessibility: z.object({
            //     //         accessibilityData: z.object({ label: z.string() })
            //     //       }),
            //     //       simpleText: z.string()
            //     //     }),
            //     //     longBylineText: z.object({
            //     //       runs: z.array(
            //     //         z.object({
            //     //           text: z.string(),
            //     //           navigationEndpoint: z.object({
            //     //             clickTrackingParams: z.string(),
            //     //             commandMetadata: z.object({
            //     //               webCommandMetadata: z.object({
            //     //                 url: z.string(),
            //     //                 webPageType: z.string(),
            //     //                 rootVe: z.number(),
            //     //                 apiUrl: z.string()
            //     //               })
            //     //             }),
            //     //             browseEndpoint: z.object({
            //     //               browseId: z.string(),
            //     //               canonicalBaseUrl: z.string()
            //     //             })
            //     //           })
            //     //         })
            //     //       )
            //     //     }),
            //     //     publishedTimeText: z.object({ simpleText: z.string() }),
            //     //     viewCountText: z.object({ simpleText: z.string() }),
            //     //     lengthText: z.object({
            //     //       accessibility: z.object({
            //     //         accessibilityData: z.object({ label: z.string() })
            //     //       }),
            //     //       simpleText: z.string()
            //     //     }),
            //     //     navigationEndpoint: z.object({
            //     //       clickTrackingParams: z.string(),
            //     //       commandMetadata: z.object({
            //     //         webCommandMetadata: z.object({
            //     //           url: z.string(),
            //     //           webPageType: z.string(),
            //     //           rootVe: z.number()
            //     //         })
            //     //       }),
            //     //       watchEndpoint: z.object({
            //     //         videoId: z.string(),
            //     //         nofollow: z.boolean(),
            //     //         watchEndpointSupportedOnesieConfig: z.object({
            //     //           html5PlaybackOnesieConfig: z.object({
            //     //             commonConfig: z.object({ url: z.string() })
            //     //           })
            //     //         })
            //     //       })
            //     //     }),
            //     //     shortBylineText: z.object({
            //     //       runs: z.array(
            //     //         z.object({
            //     //           text: z.string(),
            //     //           navigationEndpoint: z.object({
            //     //             clickTrackingParams: z.string(),
            //     //             commandMetadata: z.object({
            //     //               webCommandMetadata: z.object({
            //     //                 url: z.string(),
            //     //                 webPageType: z.string(),
            //     //                 rootVe: z.number(),
            //     //                 apiUrl: z.string()
            //     //               })
            //     //             }),
            //     //             browseEndpoint: z.object({
            //     //               browseId: z.string(),
            //     //               canonicalBaseUrl: z.string()
            //     //             })
            //     //           })
            //     //         })
            //     //       )
            //     //     }),
            //     //     channelThumbnail: z.object({
            //     //       thumbnails: z.array(
            //     //         z.object({
            //     //           url: z.string(),
            //     //           width: z.number(),
            //     //           height: z.number()
            //     //         })
            //     //       )
            //     //     }),
            //     //     ownerBadges: z.array(
            //     //       z.object({
            //     //         metadataBadgeRenderer: z.object({
            //     //           icon: z.object({ iconType: z.string() }),
            //     //           style: z.string(),
            //     //           tooltip: z.string(),
            //     //           trackingParams: z.string(),
            //     //           accessibilityData: z.object({ label: z.string() })
            //     //         })
            //     //       })
            //     //     ),
            //     //     trackingParams: z.string(),
            //     //     shortViewCountText: z.object({
            //     //       accessibility: z.object({
            //     //         accessibilityData: z.object({ label: z.string() })
            //     //       }),
            //     //       simpleText: z.string()
            //     //     }),
            //     //     menu: z.object({
            //     //       menuRenderer: z.object({
            //     //         items: z.array(
            //     //           z.union([
            //     //             z.object({
            //     //               menuServiceItemRenderer: z.object({
            //     //                 text: z.object({
            //     //                   runs: z.array(z.object({ text: z.string() }))
            //     //                 }),
            //     //                 icon: z.object({ iconType: z.string() }),
            //     //                 serviceEndpoint: z.object({
            //     //                   clickTrackingParams: z.string(),
            //     //                   commandMetadata: z.object({
            //     //                     webCommandMetadata: z.object({
            //     //                       sendPost: z.boolean()
            //     //                     })
            //     //                   }),
            //     //                   signalServiceEndpoint: z.object({
            //     //                     signal: z.string(),
            //     //                     actions: z.array(
            //     //                       z.union([
            //     //                         z.object({
            //     //                           clickTrackingParams: z.string(),
            //     //                           addToPlaylistCommand: z.object({
            //     //                             openMiniplayer: z.boolean(),
            //     //                             openListPanel: z.boolean(),
            //     //                             videoId: z.string(),
            //     //                             listType: z.string(),
            //     //                             onCreateListCommand: z.object({
            //     //                               clickTrackingParams: z.string(),
            //     //                               commandMetadata: z.object({
            //     //                                 webCommandMetadata: z.object({
            //     //                                   sendPost: z.boolean(),
            //     //                                   apiUrl: z.string()
            //     //                                 })
            //     //                               }),
            //     //                               createPlaylistServiceEndpoint: z.object(
            //     //                                 {
            //     //                                   videoIds: z.array(z.string()),
            //     //                                   params: z.string()
            //     //                                 }
            //     //                               )
            //     //                             }),
            //     //                             videoIds: z.array(z.string())
            //     //                           })
            //     //                         }),
            //     //                         z.object({
            //     //                           clickTrackingParams: z.string(),
            //     //                           openPopupAction: z.object({
            //     //                             popup: z.object({
            //     //                               notificationActionRenderer: z.object(
            //     //                                 {
            //     //                                   responseText: z.object({
            //     //                                     simpleText: z.string()
            //     //                                   }),
            //     //                                   trackingParams: z.string()
            //     //                                 }
            //     //                               )
            //     //                             }),
            //     //                             popupType: z.string()
            //     //                           })
            //     //                         })
            //     //                       ])
            //     //                     )
            //     //                   })
            //     //                 }),
            //     //                 trackingParams: z.string()
            //     //               })
            //     //             }),
            //     //             z.object({
            //     //               menuServiceItemDownloadRenderer: z.object({
            //     //                 serviceEndpoint: z.object({
            //     //                   clickTrackingParams: z.string(),
            //     //                   offlineVideoEndpoint: z.object({
            //     //                     videoId: z.string(),
            //     //                     onAddCommand: z.object({
            //     //                       clickTrackingParams: z.string(),
            //     //                       getDownloadActionCommand: z.object({
            //     //                         videoId: z.string(),
            //     //                         params: z.string()
            //     //                       })
            //     //                     })
            //     //                   })
            //     //                 }),
            //     //                 trackingParams: z.string()
            //     //               })
            //     //             }),
            //     //             z.object({
            //     //               menuServiceItemRenderer: z.object({
            //     //                 text: z.object({
            //     //                   runs: z.array(z.object({ text: z.string() }))
            //     //                 }),
            //     //                 icon: z.object({ iconType: z.string() }),
            //     //                 serviceEndpoint: z.object({
            //     //                   clickTrackingParams: z.string(),
            //     //                   commandMetadata: z.object({
            //     //                     webCommandMetadata: z.object({
            //     //                       sendPost: z.boolean(),
            //     //                       apiUrl: z.string()
            //     //                     })
            //     //                   }),
            //     //                   shareEntityServiceEndpoint: z.object({
            //     //                     serializedShareEntity: z.string(),
            //     //                     commands: z.array(
            //     //                       z.object({
            //     //                         clickTrackingParams: z.string(),
            //     //                         openPopupAction: z.object({
            //     //                           popup: z.object({
            //     //                             unifiedSharePanelRenderer: z.object(
            //     //                               {
            //     //                                 trackingParams: z.string(),
            //     //                                 showLoadingSpinner: z.boolean()
            //     //                               }
            //     //                             )
            //     //                           }),
            //     //                           popupType: z.string(),
            //     //                           beReused: z.boolean()
            //     //                         })
            //     //                       })
            //     //                     )
            //     //                   })
            //     //                 }),
            //     //                 trackingParams: z.string(),
            //     //                 hasSeparator: z.boolean()
            //     //               })
            //     //             })
            //     //           ])
            //     //         ),
            //     //         trackingParams: z.string(),
            //     //         accessibility: z.object({
            //     //           accessibilityData: z.object({ label: z.string() })
            //     //         })
            //     //       })
            //     //     }),
            //     //     thumbnailOverlays: z.array(
            //     //       z.union([
            //     //         z.object({
            //     //           thumbnailOverlayTimeStatusRenderer: z.object({
            //     //             text: z.object({
            //     //               accessibility: z.object({
            //     //                 accessibilityData: z.object({
            //     //                   label: z.string()
            //     //                 })
            //     //               }),
            //     //               simpleText: z.string()
            //     //             }),
            //     //             style: z.string()
            //     //           })
            //     //         }),
            //     //         z.object({
            //     //           thumbnailOverlayToggleButtonRenderer: z.object({
            //     //             isToggled: z.boolean(),
            //     //             untoggledIcon: z.object({ iconType: z.string() }),
            //     //             toggledIcon: z.object({ iconType: z.string() }),
            //     //             untoggledTooltip: z.string(),
            //     //             toggledTooltip: z.string(),
            //     //             untoggledServiceEndpoint: z.object({
            //     //               clickTrackingParams: z.string(),
            //     //               commandMetadata: z.object({
            //     //                 webCommandMetadata: z.object({
            //     //                   sendPost: z.boolean(),
            //     //                   apiUrl: z.string()
            //     //                 })
            //     //               }),
            //     //               playlistEditEndpoint: z.object({
            //     //                 playlistId: z.string(),
            //     //                 actions: z.array(
            //     //                   z.object({
            //     //                     addedVideoId: z.string(),
            //     //                     action: z.string()
            //     //                   })
            //     //                 )
            //     //               })
            //     //             }),
            //     //             toggledServiceEndpoint: z.object({
            //     //               clickTrackingParams: z.string(),
            //     //               commandMetadata: z.object({
            //     //                 webCommandMetadata: z.object({
            //     //                   sendPost: z.boolean(),
            //     //                   apiUrl: z.string()
            //     //                 })
            //     //               }),
            //     //               playlistEditEndpoint: z.object({
            //     //                 playlistId: z.string(),
            //     //                 actions: z.array(
            //     //                   z.object({
            //     //                     action: z.string(),
            //     //                     removedVideoId: z.string()
            //     //                   })
            //     //                 )
            //     //               })
            //     //             }),
            //     //             untoggledAccessibility: z.object({
            //     //               accessibilityData: z.object({
            //     //                 label: z.string()
            //     //               })
            //     //             }),
            //     //             toggledAccessibility: z.object({
            //     //               accessibilityData: z.object({
            //     //                 label: z.string()
            //     //               })
            //     //             }),
            //     //             trackingParams: z.string()
            //     //           })
            //     //         }),
            //     //         z.object({
            //     //           thumbnailOverlayToggleButtonRenderer: z.object({
            //     //             untoggledIcon: z.object({ iconType: z.string() }),
            //     //             toggledIcon: z.object({ iconType: z.string() }),
            //     //             untoggledTooltip: z.string(),
            //     //             toggledTooltip: z.string(),
            //     //             untoggledServiceEndpoint: z.object({
            //     //               clickTrackingParams: z.string(),
            //     //               commandMetadata: z.object({
            //     //                 webCommandMetadata: z.object({
            //     //                   sendPost: z.boolean()
            //     //                 })
            //     //               }),
            //     //               signalServiceEndpoint: z.object({
            //     //                 signal: z.string(),
            //     //                 actions: z.array(
            //     //                   z.object({
            //     //                     clickTrackingParams: z.string(),
            //     //                     addToPlaylistCommand: z.object({
            //     //                       openMiniplayer: z.boolean(),
            //     //                       openListPanel: z.boolean(),
            //     //                       videoId: z.string(),
            //     //                       listType: z.string(),
            //     //                       onCreateListCommand: z.object({
            //     //                         clickTrackingParams: z.string(),
            //     //                         commandMetadata: z.object({
            //     //                           webCommandMetadata: z.object({
            //     //                             sendPost: z.boolean(),
            //     //                             apiUrl: z.string()
            //     //                           })
            //     //                         }),
            //     //                         createPlaylistServiceEndpoint: z.object(
            //     //                           {
            //     //                             videoIds: z.array(z.string()),
            //     //                             params: z.string()
            //     //                           }
            //     //                         )
            //     //                       }),
            //     //                       videoIds: z.array(z.string())
            //     //                     })
            //     //                   })
            //     //                 )
            //     //               })
            //     //             }),
            //     //             untoggledAccessibility: z.object({
            //     //               accessibilityData: z.object({
            //     //                 label: z.string()
            //     //               })
            //     //             }),
            //     //             toggledAccessibility: z.object({
            //     //               accessibilityData: z.object({
            //     //                 label: z.string()
            //     //               })
            //     //             }),
            //     //             trackingParams: z.string()
            //     //           })
            //     //         }),
            //     //         z.object({
            //     //           thumbnailOverlayNowPlayingRenderer: z.object({
            //     //             text: z.object({
            //     //               runs: z.array(z.object({ text: z.string() }))
            //     //             })
            //     //           })
            //     //         })
            //     //       ])
            //     //     ),
            //     //     accessibility: z.object({
            //     //       accessibilityData: z.object({ label: z.string() })
            //     //     })
            //     //   })
            //     // }),
            //     // z.object({
            //     //   compactVideoRenderer: z.object({
            //     //     videoId: z.string(),
            //     //     thumbnail: z.object({
            //     //       thumbnails: z.array(
            //     //         z.object({
            //     //           url: z.string(),
            //     //           width: z.number(),
            //     //           height: z.number()
            //     //         })
            //     //       )
            //     //     }),
            //     //     title: z.object({
            //     //       accessibility: z.object({
            //     //         accessibilityData: z.object({ label: z.string() })
            //     //       }),
            //     //       simpleText: z.string()
            //     //     }),
            //     //     longBylineText: z.object({
            //     //       runs: z.array(
            //     //         z.object({
            //     //           text: z.string(),
            //     //           navigationEndpoint: z.object({
            //     //             clickTrackingParams: z.string(),
            //     //             commandMetadata: z.object({
            //     //               webCommandMetadata: z.object({
            //     //                 url: z.string(),
            //     //                 webPageType: z.string(),
            //     //                 rootVe: z.number(),
            //     //                 apiUrl: z.string()
            //     //               })
            //     //             }),
            //     //             browseEndpoint: z.object({
            //     //               browseId: z.string(),
            //     //               canonicalBaseUrl: z.string()
            //     //             })
            //     //           })
            //     //         })
            //     //       )
            //     //     }),
            //     //     publishedTimeText: z.object({ simpleText: z.string() }),
            //     //     viewCountText: z.object({ simpleText: z.string() }),
            //     //     lengthText: z.object({
            //     //       accessibility: z.object({
            //     //         accessibilityData: z.object({ label: z.string() })
            //     //       }),
            //     //       simpleText: z.string()
            //     //     }),
            //     //     navigationEndpoint: z.object({
            //     //       clickTrackingParams: z.string(),
            //     //       commandMetadata: z.object({
            //     //         webCommandMetadata: z.object({
            //     //           url: z.string(),
            //     //           webPageType: z.string(),
            //     //           rootVe: z.number()
            //     //         })
            //     //       }),
            //     //       watchEndpoint: z.object({
            //     //         videoId: z.string(),
            //     //         nofollow: z.boolean(),
            //     //         watchEndpointSupportedOnesieConfig: z.object({
            //     //           html5PlaybackOnesieConfig: z.object({
            //     //             commonConfig: z.object({ url: z.string() })
            //     //           })
            //     //         })
            //     //       })
            //     //     }),
            //     //     shortBylineText: z.object({
            //     //       runs: z.array(
            //     //         z.object({
            //     //           text: z.string(),
            //     //           navigationEndpoint: z.object({
            //     //             clickTrackingParams: z.string(),
            //     //             commandMetadata: z.object({
            //     //               webCommandMetadata: z.object({
            //     //                 url: z.string(),
            //     //                 webPageType: z.string(),
            //     //                 rootVe: z.number(),
            //     //                 apiUrl: z.string()
            //     //               })
            //     //             }),
            //     //             browseEndpoint: z.object({
            //     //               browseId: z.string(),
            //     //               canonicalBaseUrl: z.string()
            //     //             })
            //     //           })
            //     //         })
            //     //       )
            //     //     }),
            //     //     channelThumbnail: z.object({
            //     //       thumbnails: z.array(
            //     //         z.object({
            //     //           url: z.string(),
            //     //           width: z.number(),
            //     //           height: z.number()
            //     //         })
            //     //       )
            //     //     }),
            //     //     trackingParams: z.string(),
            //     //     shortViewCountText: z.object({
            //     //       accessibility: z.object({
            //     //         accessibilityData: z.object({ label: z.string() })
            //     //       }),
            //     //       simpleText: z.string()
            //     //     }),
            //     //     menu: z.object({
            //     //       menuRenderer: z.object({
            //     //         items: z.array(
            //     //           z.union([
            //     //             z.object({
            //     //               menuServiceItemRenderer: z.object({
            //     //                 text: z.object({
            //     //                   runs: z.array(z.object({ text: z.string() }))
            //     //                 }),
            //     //                 icon: z.object({ iconType: z.string() }),
            //     //                 serviceEndpoint: z.object({
            //     //                   clickTrackingParams: z.string(),
            //     //                   commandMetadata: z.object({
            //     //                     webCommandMetadata: z.object({
            //     //                       sendPost: z.boolean()
            //     //                     })
            //     //                   }),
            //     //                   signalServiceEndpoint: z.object({
            //     //                     signal: z.string(),
            //     //                     actions: z.array(
            //     //                       z.union([
            //     //                         z.object({
            //     //                           clickTrackingParams: z.string(),
            //     //                           addToPlaylistCommand: z.object({
            //     //                             openMiniplayer: z.boolean(),
            //     //                             openListPanel: z.boolean(),
            //     //                             videoId: z.string(),
            //     //                             listType: z.string(),
            //     //                             onCreateListCommand: z.object({
            //     //                               clickTrackingParams: z.string(),
            //     //                               commandMetadata: z.object({
            //     //                                 webCommandMetadata: z.object({
            //     //                                   sendPost: z.boolean(),
            //     //                                   apiUrl: z.string()
            //     //                                 })
            //     //                               }),
            //     //                               createPlaylistServiceEndpoint: z.object(
            //     //                                 {
            //     //                                   videoIds: z.array(z.string()),
            //     //                                   params: z.string()
            //     //                                 }
            //     //                               )
            //     //                             }),
            //     //                             videoIds: z.array(z.string())
            //     //                           })
            //     //                         }),
            //     //                         z.object({
            //     //                           clickTrackingParams: z.string(),
            //     //                           openPopupAction: z.object({
            //     //                             popup: z.object({
            //     //                               notificationActionRenderer: z.object(
            //     //                                 {
            //     //                                   responseText: z.object({
            //     //                                     simpleText: z.string()
            //     //                                   }),
            //     //                                   trackingParams: z.string()
            //     //                                 }
            //     //                               )
            //     //                             }),
            //     //                             popupType: z.string()
            //     //                           })
            //     //                         })
            //     //                       ])
            //     //                     )
            //     //                   })
            //     //                 }),
            //     //                 trackingParams: z.string()
            //     //               })
            //     //             }),
            //     //             z.object({
            //     //               menuServiceItemDownloadRenderer: z.object({
            //     //                 serviceEndpoint: z.object({
            //     //                   clickTrackingParams: z.string(),
            //     //                   offlineVideoEndpoint: z.object({
            //     //                     videoId: z.string(),
            //     //                     onAddCommand: z.object({
            //     //                       clickTrackingParams: z.string(),
            //     //                       getDownloadActionCommand: z.object({
            //     //                         videoId: z.string(),
            //     //                         params: z.string()
            //     //                       })
            //     //                     })
            //     //                   })
            //     //                 }),
            //     //                 trackingParams: z.string()
            //     //               })
            //     //             }),
            //     //             z.object({
            //     //               menuServiceItemRenderer: z.object({
            //     //                 text: z.object({
            //     //                   runs: z.array(z.object({ text: z.string() }))
            //     //                 }),
            //     //                 icon: z.object({ iconType: z.string() }),
            //     //                 serviceEndpoint: z.object({
            //     //                   clickTrackingParams: z.string(),
            //     //                   commandMetadata: z.object({
            //     //                     webCommandMetadata: z.object({
            //     //                       sendPost: z.boolean(),
            //     //                       apiUrl: z.string()
            //     //                     })
            //     //                   }),
            //     //                   shareEntityServiceEndpoint: z.object({
            //     //                     serializedShareEntity: z.string(),
            //     //                     commands: z.array(
            //     //                       z.object({
            //     //                         clickTrackingParams: z.string(),
            //     //                         openPopupAction: z.object({
            //     //                           popup: z.object({
            //     //                             unifiedSharePanelRenderer: z.object(
            //     //                               {
            //     //                                 trackingParams: z.string(),
            //     //                                 showLoadingSpinner: z.boolean()
            //     //                               }
            //     //                             )
            //     //                           }),
            //     //                           popupType: z.string(),
            //     //                           beReused: z.boolean()
            //     //                         })
            //     //                       })
            //     //                     )
            //     //                   })
            //     //                 }),
            //     //                 trackingParams: z.string(),
            //     //                 hasSeparator: z.boolean()
            //     //               })
            //     //             })
            //     //           ])
            //     //         ),
            //     //         trackingParams: z.string(),
            //     //         accessibility: z.object({
            //     //           accessibilityData: z.object({ label: z.string() })
            //     //         })
            //     //       })
            //     //     }),
            //     //     thumbnailOverlays: z.array(
            //     //       z.union([
            //     //         z.object({
            //     //           thumbnailOverlayTimeStatusRenderer: z.object({
            //     //             text: z.object({
            //     //               accessibility: z.object({
            //     //                 accessibilityData: z.object({
            //     //                   label: z.string()
            //     //                 })
            //     //               }),
            //     //               simpleText: z.string()
            //     //             }),
            //     //             style: z.string()
            //     //           })
            //     //         }),
            //     //         z.object({
            //     //           thumbnailOverlayToggleButtonRenderer: z.object({
            //     //             isToggled: z.boolean(),
            //     //             untoggledIcon: z.object({ iconType: z.string() }),
            //     //             toggledIcon: z.object({ iconType: z.string() }),
            //     //             untoggledTooltip: z.string(),
            //     //             toggledTooltip: z.string(),
            //     //             untoggledServiceEndpoint: z.object({
            //     //               clickTrackingParams: z.string(),
            //     //               commandMetadata: z.object({
            //     //                 webCommandMetadata: z.object({
            //     //                   sendPost: z.boolean(),
            //     //                   apiUrl: z.string()
            //     //                 })
            //     //               }),
            //     //               playlistEditEndpoint: z.object({
            //     //                 playlistId: z.string(),
            //     //                 actions: z.array(
            //     //                   z.object({
            //     //                     addedVideoId: z.string(),
            //     //                     action: z.string()
            //     //                   })
            //     //                 )
            //     //               })
            //     //             }),
            //     //             toggledServiceEndpoint: z.object({
            //     //               clickTrackingParams: z.string(),
            //     //               commandMetadata: z.object({
            //     //                 webCommandMetadata: z.object({
            //     //                   sendPost: z.boolean(),
            //     //                   apiUrl: z.string()
            //     //                 })
            //     //               }),
            //     //               playlistEditEndpoint: z.object({
            //     //                 playlistId: z.string(),
            //     //                 actions: z.array(
            //     //                   z.object({
            //     //                     action: z.string(),
            //     //                     removedVideoId: z.string()
            //     //                   })
            //     //                 )
            //     //               })
            //     //             }),
            //     //             untoggledAccessibility: z.object({
            //     //               accessibilityData: z.object({
            //     //                 label: z.string()
            //     //               })
            //     //             }),
            //     //             toggledAccessibility: z.object({
            //     //               accessibilityData: z.object({
            //     //                 label: z.string()
            //     //               })
            //     //             }),
            //     //             trackingParams: z.string()
            //     //           })
            //     //         }),
            //     //         z.object({
            //     //           thumbnailOverlayToggleButtonRenderer: z.object({
            //     //             untoggledIcon: z.object({ iconType: z.string() }),
            //     //             toggledIcon: z.object({ iconType: z.string() }),
            //     //             untoggledTooltip: z.string(),
            //     //             toggledTooltip: z.string(),
            //     //             untoggledServiceEndpoint: z.object({
            //     //               clickTrackingParams: z.string(),
            //     //               commandMetadata: z.object({
            //     //                 webCommandMetadata: z.object({
            //     //                   sendPost: z.boolean()
            //     //                 })
            //     //               }),
            //     //               signalServiceEndpoint: z.object({
            //     //                 signal: z.string(),
            //     //                 actions: z.array(
            //     //                   z.object({
            //     //                     clickTrackingParams: z.string(),
            //     //                     addToPlaylistCommand: z.object({
            //     //                       openMiniplayer: z.boolean(),
            //     //                       openListPanel: z.boolean(),
            //     //                       videoId: z.string(),
            //     //                       listType: z.string(),
            //     //                       onCreateListCommand: z.object({
            //     //                         clickTrackingParams: z.string(),
            //     //                         commandMetadata: z.object({
            //     //                           webCommandMetadata: z.object({
            //     //                             sendPost: z.boolean(),
            //     //                             apiUrl: z.string()
            //     //                           })
            //     //                         }),
            //     //                         createPlaylistServiceEndpoint: z.object(
            //     //                           {
            //     //                             videoIds: z.array(z.string()),
            //     //                             params: z.string()
            //     //                           }
            //     //                         )
            //     //                       }),
            //     //                       videoIds: z.array(z.string())
            //     //                     })
            //     //                   })
            //     //                 )
            //     //               })
            //     //             }),
            //     //             untoggledAccessibility: z.object({
            //     //               accessibilityData: z.object({
            //     //                 label: z.string()
            //     //               })
            //     //             }),
            //     //             toggledAccessibility: z.object({
            //     //               accessibilityData: z.object({
            //     //                 label: z.string()
            //     //               })
            //     //             }),
            //     //             trackingParams: z.string()
            //     //           })
            //     //         }),
            //     //         z.object({
            //     //           thumbnailOverlayNowPlayingRenderer: z.object({
            //     //             text: z.object({
            //     //               runs: z.array(z.object({ text: z.string() }))
            //     //             })
            //     //           })
            //     //         })
            //     //       ])
            //     //     ),
            //     //     accessibility: z.object({
            //     //       accessibilityData: z.object({ label: z.string() })
            //     //     }),
            //     //     richThumbnail: z.object({
            //     //       movingThumbnailRenderer: z.object({
            //     //         enableHoveredLogging: z.boolean(),
            //     //         enableOverlay: z.boolean()
            //     //       })
            //     //     })
            //     //   })
            //     // })
            //   // ])
            // ),
            // continuations: z.array(
            //   z.object({
            //     nextContinuationData: z.object({
            //       continuation: z.string(),
            //       clickTrackingParams: z.string(),
            //       label: z.object({
            //         runs: z.array(z.object({ text: z.string() }))
            //       })
            //     })
            //   })
            // ),
            // trackingParams: z.string()
          }),
        }),
        autoplay: z.object({
          autoplay: z.object({
            sets: z.array(
              z.object({
                mode: z.string(),
                autoplayVideo: z.object({
                  clickTrackingParams: z.string(),
                  commandMetadata: z.object({
                    webCommandMetadata: z.object({
                      url: z.string(),
                      webPageType: z.string(),
                      rootVe: z.number(),
                    }),
                  }),
                  watchEndpoint: z.object({
                    videoId: z.string(),
                    params: z.string(),
                    playerParams: z.string(),
                    watchEndpointSupportedPrefetchConfig: z.object({
                      prefetchHintConfig: z.object({
                        prefetchPriority: z.number(),
                        countdownUiRelativeSecondsPrefetchCondition: z.number(),
                      }),
                    }),
                  }),
                }),
              }),
            ),
            countDownSecs: z.number(),
            trackingParams: z.string(),
          }),
        }),
        // conversationBar: z.object({
        //   liveChatRenderer: z.object({
        //     continuations: z.array(
        //       z.object({
        //         reloadContinuationData: z.object({
        //           continuation: z.string(),
        //           clickTrackingParams: z.string()
        //         })
        //       })
        //     ),
        //     header: z.object({
        //       liveChatHeaderRenderer: z.object({
        //         overflowMenu: z.object({
        //           menuRenderer: z.object({
        //             items: z.array(
        //               // z.union([
        //                 z.object({
        //                   clientSideToggleMenuItemRenderer: z.object({
        //                     defaultText: z.object({
        //                       runs: z.array(z.object({ text: z.string() }))
        //                     }),
        //                     defaultIcon: z.object({ iconType: z.string() }),
        //                     toggledText: z.object({
        //                       runs: z.array(z.object({ text: z.string() }))
        //                     }),
        //                     toggledIcon: z.object({ iconType: z.string() }),
        //                     menuItemIdentifier: z.string(),
        //                     command: z.object({
        //                       clickTrackingParams: z.string(),
        //                       toggleLiveChatTimestampsEndpoint: z.object({
        //                         hack: z.boolean()
        //                       })
        //                     })
        //                   })
        //                 }),
        //                 // z.object({
        //                 //   menuNavigationItemRenderer: z.object({
        //                 //     text: z.object({
        //                 //       runs: z.array(z.object({ text: z.string() }))
        //                 //     }),
        //                 //     icon: z.object({ iconType: z.string() }),
        //                 //     navigationEndpoint: z.object({
        //                 //       clickTrackingParams: z.string(),
        //                 //       commandMetadata: z.object({
        //                 //         webCommandMetadata: z.object({
        //                 //           ignoreNavigation: z.boolean()
        //                 //         })
        //                 //       }),
        //                 //       userFeedbackEndpoint: z.object({
        //                 //         hack: z.boolean(),
        //                 //         bucketIdentifier: z.string()
        //                 //       })
        //                 //     }),
        //                 //     trackingParams: z.string()
        //                 //   })
        //                 // })
        //               // ])
        //             ),
        //             trackingParams: z.string(),
        //             accessibility: z.object({
        //               accessibilityData: z.object({ label: z.string() })
        //             })
        //           })
        //         }),
        //         viewSelector: z.object({
        //           sortFilterSubMenuRenderer: z.object({
        //             subMenuItems: z.array(
        //               z.object({
        //                 title: z.string(),
        //                 selected: z.boolean(),
        //                 continuation: z.object({
        //                   reloadContinuationData: z.object({
        //                     continuation: z.string(),
        //                     clickTrackingParams: z.string()
        //                   })
        //                 }),
        //                 accessibility: z.object({
        //                   accessibilityData: z.object({ label: z.string() })
        //                 }),
        //                 subtitle: z.string(),
        //                 trackingParams: z.string()
        //               })
        //             ),
        //             accessibility: z.object({
        //               accessibilityData: z.object({ label: z.string() })
        //             }),
        //             trackingParams: z.string(),
        //             targetId: z.string()
        //           })
        //         })
        //       })
        //     }),
        //     trackingParams: z.string(),
        //     clientMessages: z.object({
        //       reconnectMessage: z.object({
        //         runs: z.array(z.object({ text: z.string() }))
        //       }),
        //       unableToReconnectMessage: z.object({
        //         runs: z.array(z.object({ text: z.string() }))
        //       }),
        //       fatalError: z.object({
        //         runs: z.array(z.object({ text: z.string() }))
        //       }),
        //       reconnectedMessage: z.object({
        //         runs: z.array(z.object({ text: z.string() }))
        //       }),
        //       genericError: z.object({
        //         runs: z.array(z.object({ text: z.string() }))
        //       })
        //     }),
        //     isReplay: z.boolean(),
        //     initialDisplayState: z.string(),
        //     showHideButton: z.object({
        //       toggleButtonRenderer: z.object({
        //         defaultText: z.object({
        //           runs: z.array(z.object({ text: z.string() }))
        //         }),
        //         toggledText: z.object({
        //           runs: z.array(z.object({ text: z.string() }))
        //         }),
        //         trackingParams: z.string()
        //       })
        //     })
        //   })
        // })
      }),
    }),
    currentVideoEndpoint: z.object({
      clickTrackingParams: z.string(),
      commandMetadata: z.object({
        webCommandMetadata: z.object({
          url: z.string(),
          webPageType: z.string(),
          rootVe: z.number(),
        }),
      }),
      watchEndpoint: z.object({
        videoId: z.string(),
        watchEndpointSupportedOnesieConfig: z.object({
          html5PlaybackOnesieConfig: z.object({
            commonConfig: z.object({ url: z.string() }),
          }),
        }),
      }),
    }),
    trackingParams: z.string(),
    playerOverlays: z.object({
      playerOverlayRenderer: z.object({
        // endScreen: z.object({
        //   watchNextEndScreenRenderer: z.object({
        //     results: z.array(
        //       z.object({
        //         endScreenVideoRenderer: z.object({
        //           videoId: z.string(),
        //           thumbnail: z.object({
        //             thumbnails: z.array(
        //               z.object({
        //                 url: z.string(),
        //                 width: z.number(),
        //                 height: z.number()
        //               })
        //             )
        //           }),
        //           title: z.object({
        //             accessibility: z.object({
        //               accessibilityData: z.object({ label: z.string() })
        //             }),
        //             simpleText: z.string()
        //           }),
        //           shortBylineText: z.object({
        //             runs: z.array(
        //               z.object({
        //                 text: z.string(),
        //                 navigationEndpoint: z.object({
        //                   clickTrackingParams: z.string(),
        //                   commandMetadata: z.object({
        //                     webCommandMetadata: z.object({
        //                       url: z.string(),
        //                       webPageType: z.string(),
        //                       rootVe: z.number(),
        //                       apiUrl: z.string()
        //                     })
        //                   }),
        //                   browseEndpoint: z.object({
        //                     browseId: z.string(),
        //                     canonicalBaseUrl: z.string()
        //                   })
        //                 })
        //               })
        //             )
        //           }),
        //           lengthText: z.object({
        //             accessibility: z.object({
        //               accessibilityData: z.object({ label: z.string() })
        //             }),
        //             simpleText: z.string()
        //           }),
        //           lengthInSeconds: z.number(),
        //           navigationEndpoint: z.object({
        //             clickTrackingParams: z.string(),
        //             commandMetadata: z.object({
        //               webCommandMetadata: z.object({
        //                 url: z.string(),
        //                 webPageType: z.string(),
        //                 rootVe: z.number()
        //               })
        //             }),
        //             watchEndpoint: z.object({
        //               videoId: z.string(),
        //               watchEndpointSupportedOnesieConfig: z.object({
        //                 html5PlaybackOnesieConfig: z.object({
        //                   commonConfig: z.object({ url: z.string() })
        //                 })
        //               })
        //             })
        //           }),
        //           trackingParams: z.string(),
        //           shortViewCountText: z.object({
        //             accessibility: z.object({
        //               accessibilityData: z.object({ label: z.string() })
        //             }),
        //             simpleText: z.string()
        //           }),
        //           publishedTimeText: z.object({ simpleText: z.string() }),
        //           thumbnailOverlays: z.array(
        //             // z.union([
        //               // z.object({
        //               //   thumbnailOverlayTimeStatusRenderer: z.object({
        //               //     text: z.object({
        //               //       accessibility: z.object({
        //               //         accessibilityData: z.object({
        //               //           label: z.string()
        //               //         })
        //               //       }),
        //               //       simpleText: z.string()
        //               //     }),
        //               //     style: z.string()
        //               //   })
        //               // }),
        //               z.object({
        //                 thumbnailOverlayNowPlayingRenderer: z.object({
        //                   text: z.object({
        //                     runs: z.array(z.object({ text: z.string() }))
        //                   })
        //                 })
        //               })
        //             // ])
        //           )
        //         })
        //       })
        //     ),
        //     title: z.object({ simpleText: z.string() }),
        //     trackingParams: z.string()
        //   })
        // }),
        // autoplay: z.object({
        //   playerOverlayAutoplayRenderer: z.object({
        //     title: z.object({ simpleText: z.string() }),
        //     videoTitle: z.object({
        //       accessibility: z.object({
        //         accessibilityData: z.object({ label: z.string() })
        //       }),
        //       simpleText: z.string()
        //     }),
        //     byline: z.object({
        //       runs: z.array(
        //         z.object({
        //           text: z.string(),
        //           navigationEndpoint: z.object({
        //             clickTrackingParams: z.string(),
        //             commandMetadata: z.object({
        //               webCommandMetadata: z.object({
        //                 url: z.string(),
        //                 webPageType: z.string(),
        //                 rootVe: z.number(),
        //                 apiUrl: z.string()
        //               })
        //             }),
        //             browseEndpoint: z.object({
        //               browseId: z.string(),
        //               canonicalBaseUrl: z.string()
        //             })
        //           })
        //         })
        //       )
        //     }),
        //     pauseText: z.object({ simpleText: z.string() }),
        //     background: z.object({
        //       thumbnails: z.array(
        //         z.object({
        //           url: z.string(),
        //           width: z.number(),
        //           height: z.number()
        //         })
        //       )
        //     }),
        //     countDownSecs: z.number(),
        //     cancelButton: z.object({
        //       buttonRenderer: z.object({
        //         style: z.string(),
        //         size: z.string(),
        //         isDisabled: z.boolean(),
        //         text: z.object({ simpleText: z.string() }),
        //         accessibility: z.object({ label: z.string() }),
        //         trackingParams: z.string(),
        //         accessibilityData: z.object({
        //           accessibilityData: z.object({ label: z.string() })
        //         }),
        //         command: z.object({
        //           clickTrackingParams: z.string(),
        //           commandMetadata: z.object({
        //             webCommandMetadata: z.object({
        //               sendPost: z.boolean(),
        //               apiUrl: z.string()
        //             })
        //           }),
        //           getSurveyCommand: z.object({
        //             endpoint: z.object({
        //               watch: z.object({ hack: z.boolean() })
        //             }),
        //             action: z.string()
        //           })
        //         })
        //       })
        //     }),
        //     nextButton: z.object({
        //       buttonRenderer: z.object({
        //         style: z.string(),
        //         size: z.string(),
        //         isDisabled: z.boolean(),
        //         navigationEndpoint: z.object({
        //           clickTrackingParams: z.string(),
        //           commandMetadata: z.object({
        //             webCommandMetadata: z.object({
        //               url: z.string(),
        //               webPageType: z.string(),
        //               rootVe: z.number()
        //             })
        //           }),
        //           watchEndpoint: z.object({
        //             videoId: z.string(),
        //             watchEndpointSupportedOnesieConfig: z.object({
        //               html5PlaybackOnesieConfig: z.object({
        //                 commonConfig: z.object({ url: z.string() })
        //               })
        //             })
        //           })
        //         }),
        //         accessibility: z.object({ label: z.string() }),
        //         trackingParams: z.string(),
        //         accessibilityData: z.object({
        //           accessibilityData: z.object({ label: z.string() })
        //         })
        //       })
        //     }),
        //     trackingParams: z.string(),
        //     closeButton: z.object({
        //       buttonRenderer: z.object({
        //         style: z.string(),
        //         size: z.string(),
        //         isDisabled: z.boolean(),
        //         icon: z.object({ iconType: z.string() }),
        //         accessibility: z.object({ label: z.string() }),
        //         trackingParams: z.string()
        //       })
        //     }),
        //     thumbnailOverlays: z.array(
        //       z.object({
        //         thumbnailOverlayTimeStatusRenderer: z.object({
        //           text: z.object({
        //             accessibility: z.object({
        //               accessibilityData: z.object({ label: z.string() })
        //             }),
        //             simpleText: z.string()
        //           }),
        //           style: z.string()
        //         })
        //       })
        //     ),
        //     preferImmediateRedirect: z.boolean(),
        //     videoId: z.string(),
        //     publishedTimeText: z.object({ simpleText: z.string() }),
        //     webShowNewAutonavCountdown: z.boolean(),
        //     webShowBigThumbnailEndscreen: z.boolean(),
        //     shortViewCountText: z.object({
        //       accessibility: z.object({
        //         accessibilityData: z.object({ label: z.string() })
        //       }),
        //       simpleText: z.string()
        //     }),
        //     countDownSecsForFullscreen: z.number()
        //   })
        // }),
        // shareButton: z.object({
        //   buttonRenderer: z.object({
        //     style: z.string(),
        //     size: z.string(),
        //     isDisabled: z.boolean(),
        //     icon: z.object({ iconType: z.string() }),
        //     navigationEndpoint: z.object({
        //       clickTrackingParams: z.string(),
        //       commandMetadata: z.object({
        //         webCommandMetadata: z.object({
        //           sendPost: z.boolean(),
        //           apiUrl: z.string()
        //         })
        //       }),
        //       shareEntityServiceEndpoint: z.object({
        //         serializedShareEntity: z.string(),
        //         commands: z.array(
        //           z.object({
        //             clickTrackingParams: z.string(),
        //             openPopupAction: z.object({
        //               popup: z.object({
        //                 unifiedSharePanelRenderer: z.object({
        //                   trackingParams: z.string(),
        //                   showLoadingSpinner: z.boolean()
        //                 })
        //               }),
        //               popupType: z.string(),
        //               beReused: z.boolean()
        //             })
        //           })
        //         )
        //       })
        //     }),
        //     tooltip: z.string(),
        //     trackingParams: z.string()
        //   })
        // }),
        // addToMenu: z.object({
        //   menuRenderer: z.object({ trackingParams: z.string() })
        // }),
        // videoDetails: z.object({
        //   playerOverlayVideoDetailsRenderer: z.object({
        //     title: z.object({ simpleText: z.string() }),
        //     subtitle: z.object({
        //       runs: z.array(z.object({ text: z.string() }))
        //     })
        //   })
        // }),
        // autonavToggle: z.object({
        //   autoplaySwitchButtonRenderer: z.object({
        //     onEnabledCommand: z.object({
        //       clickTrackingParams: z.string(),
        //       commandMetadata: z.object({
        //         webCommandMetadata: z.object({
        //           sendPost: z.boolean(),
        //           apiUrl: z.string()
        //         })
        //       }),
        //       setSettingEndpoint: z.object({
        //         settingItemId: z.string(),
        //         boolValue: z.boolean(),
        //         settingItemIdForClient: z.string()
        //       })
        //     }),
        //     onDisabledCommand: z.object({
        //       clickTrackingParams: z.string(),
        //       commandMetadata: z.object({
        //         webCommandMetadata: z.object({
        //           sendPost: z.boolean(),
        //           apiUrl: z.string()
        //         })
        //       }),
        //       setSettingEndpoint: z.object({
        //         settingItemId: z.string(),
        //         boolValue: z.boolean(),
        //         settingItemIdForClient: z.string()
        //       })
        //     }),
        //     enabledAccessibilityData: z.object({
        //       accessibilityData: z.object({ label: z.string() })
        //     }),
        //     disabledAccessibilityData: z.object({
        //       accessibilityData: z.object({ label: z.string() })
        //     }),
        //     trackingParams: z.string(),
        //     enabled: z.boolean()
        //   })
        // }),
        // decoratedPlayerBarRenderer: z.object({
        //   decoratedPlayerBarRenderer: z.object({
        //     playerBar: z.object({
        //       multiMarkersPlayerBarRenderer: z.object({
        //         visibleOnLoad: z.object({ key: z.string() }),
        //         trackingParams: z.string()
        //       })
        //     })
        //   })
        // }),
        // speedmasterUserEdu: z.object({
        //   speedmasterEduViewModel: z.object({
        //     bodyText: z.object({ content: z.string() })
        //   })
        // })
      }),
    }),
    onResponseReceivedEndpoints: z.array(
      // z.union([
      //   z.object({
      //     clickTrackingParams: z.string(),
      //     commandMetadata: z.object({
      //       webCommandMetadata: z.object({ sendPost: z.boolean() })
      //     }),
      //     signalServiceEndpoint: z.object({
      //       signal: z.string(),
      //       actions: z.array(
      //         z.object({
      //           clickTrackingParams: z.string(),
      //           signalAction: z.object({ signal: z.string() })
      //         })
      //       )
      //     })
      //   }),
      z.object({
        // clickTrackingParams: z.string(),
        // loadMarkersCommand: z.object({
        //   visibleOnLoadKeys: z.array(z.string()),
        //   entityKeys: z.array(z.string())
        // })
      }),
      // ])
    ),
    // engagementPanels: z.array(
    //   // z.union([
    //     z.object({
    //       engagementPanelSectionListRenderer: z.object({
    //         content: z.object({
    //           adsEngagementPanelContentRenderer: z.object({
    //             hack: z.boolean()
    //           })
    //         }),
    //         targetId: z.string(),
    //         visibility: z.string(),
    //         loggingDirectives: z.object({
    //           trackingParams: z.string(),
    //           visibility: z.object({ types: z.string() }),
    //           enableDisplayloggerExperiment: z.boolean()
    //         })
    //       })
    //     }),
    //     // z.object({
    //     //   engagementPanelSectionListRenderer: z.object({
    //     //     panelIdentifier: z.string(),
    //     //     header: z.object({
    //     //       engagementPanelTitleHeaderRenderer: z.object({
    //     //         title: z.object({ simpleText: z.string() }),
    //     //         visibilityButton: z.object({
    //     //           buttonRenderer: z.object({
    //     //             icon: z.object({ iconType: z.string() }),
    //     //             trackingParams: z.string(),
    //     //             accessibilityData: z.object({
    //     //               accessibilityData: z.object({ label: z.string() })
    //     //             }),
    //     //             command: z.object({
    //     //               clickTrackingParams: z.string(),
    //     //               commandExecutorCommand: z.object({
    //     //                 commands: z.array(
    //     //                   z.union([
    //     //                     z.object({
    //     //                       clickTrackingParams: z.string(),
    //     //                       changeEngagementPanelVisibilityAction: z.object({
    //     //                         targetId: z.string(),
    //     //                         visibility: z.string()
    //     //                       })
    //     //                     }),
    //     //                     z.object({
    //     //                       clickTrackingParams: z.string(),
    //     //                       updateToggleButtonStateCommand: z.object({
    //     //                         toggled: z.boolean(),
    //     //                         buttonId: z.string()
    //     //                       })
    //     //                     })
    //     //                   ])
    //     //                 )
    //     //               })
    //     //             })
    //     //           })
    //     //         }),
    //     //         trackingParams: z.string()
    //     //       })
    //     //     }),
    //     //     content: z.object({
    //     //       structuredDescriptionContentRenderer: z.object({
    //     //         items: z.array(
    //     //           z.union([
    //     //             z.object({
    //     //               videoDescriptionHeaderRenderer: z.object({
    //     //                 title: z.object({
    //     //                   runs: z.array(z.object({ text: z.string() }))
    //     //                 }),
    //     //                 channel: z.object({ simpleText: z.string() }),
    //     //                 views: z.object({ simpleText: z.string() }),
    //     //                 publishDate: z.object({ simpleText: z.string() }),
    //     //                 channelNavigationEndpoint: z.object({
    //     //                   clickTrackingParams: z.string(),
    //     //                   commandMetadata: z.object({
    //     //                     webCommandMetadata: z.object({
    //     //                       url: z.string(),
    //     //                       webPageType: z.string(),
    //     //                       rootVe: z.number(),
    //     //                       apiUrl: z.string()
    //     //                     })
    //     //                   }),
    //     //                   browseEndpoint: z.object({
    //     //                     browseId: z.string(),
    //     //                     canonicalBaseUrl: z.string()
    //     //                   })
    //     //                 }),
    //     //                 channelThumbnail: z.object({
    //     //                   thumbnails: z.array(z.object({ url: z.string() }))
    //     //                 })
    //     //               })
    //     //             }),
    //     //             z.object({
    //     //               expandableVideoDescriptionBodyRenderer: z.object({
    //     //                 showMoreText: z.object({ simpleText: z.string() }),
    //     //                 showLessText: z.object({ simpleText: z.string() }),
    //     //                 attributedDescriptionBodyText: z.object({
    //     //                   content: z.string(),
    //     //                   commandRuns: z.array(
    //     //                     z.union([
    //     //                       z.object({
    //     //                         startIndex: z.number(),
    //     //                         length: z.number(),
    //     //                         onTap: z.object({
    //     //                           innertubeCommand: z.object({
    //     //                             clickTrackingParams: z.string(),
    //     //                             commandMetadata: z.object({
    //     //                               webCommandMetadata: z.object({
    //     //                                 url: z.string(),
    //     //                                 webPageType: z.string(),
    //     //                                 rootVe: z.number()
    //     //                               })
    //     //                             }),
    //     //                             urlEndpoint: z.object({
    //     //                               url: z.string(),
    //     //                               target: z.string(),
    //     //                               nofollow: z.boolean()
    //     //                             })
    //     //                           })
    //     //                         })
    //     //                       }),
    //     //                       z.object({
    //     //                         startIndex: z.number(),
    //     //                         length: z.number(),
    //     //                         onTap: z.object({
    //     //                           innertubeCommand: z.object({
    //     //                             clickTrackingParams: z.string(),
    //     //                             commandMetadata: z.object({
    //     //                               webCommandMetadata: z.object({
    //     //                                 url: z.string(),
    //     //                                 webPageType: z.string(),
    //     //                                 rootVe: z.number(),
    //     //                                 apiUrl: z.string()
    //     //                               })
    //     //                             }),
    //     //                             browseEndpoint: z.object({
    //     //                               browseId: z.string(),
    //     //                               params: z.string()
    //     //                             })
    //     //                           })
    //     //                         }),
    //     //                         loggingDirectives: z.object({
    //     //                           trackingParams: z.string(),
    //     //                           enableDisplayloggerExperiment: z.boolean()
    //     //                         })
    //     //                       })
    //     //                     ])
    //     //                   ),
    //     //                   styleRuns: z.array(
    //     //                     z.object({
    //     //                       startIndex: z.number(),
    //     //                       length: z.number(),
    //     //                       styleRunExtensions: z.object({
    //     //                         styleRunColorMapExtension: z.object({
    //     //                           colorMap: z.array(
    //     //                             z.object({
    //     //                               key: z.string(),
    //     //                               value: z.number()
    //     //                             })
    //     //                           )
    //     //                         })
    //     //                       })
    //     //                     })
    //     //                   ),
    //     //                   attachmentRuns: z.array(
    //     //                     z.object({
    //     //                       startIndex: z.number(),
    //     //                       length: z.number(),
    //     //                       element: z.object({
    //     //                         type: z.object({
    //     //                           imageType: z.object({
    //     //                             image: z.object({
    //     //                               sources: z.array(
    //     //                                 z.object({ url: z.string() })
    //     //                               )
    //     //                             })
    //     //                           })
    //     //                         }),
    //     //                         properties: z.object({
    //     //                           layoutProperties: z.object({
    //     //                             height: z.object({
    //     //                               value: z.number(),
    //     //                               unit: z.string()
    //     //                             }),
    //     //                             width: z.object({
    //     //                               value: z.number(),
    //     //                               unit: z.string()
    //     //                             }),
    //     //                             margin: z.object({
    //     //                               top: z.object({
    //     //                                 value: z.number(),
    //     //                                 unit: z.string()
    //     //                               })
    //     //                             })
    //     //                           })
    //     //                         })
    //     //                       }),
    //     //                       alignment: z.string()
    //     //                     })
    //     //                   ),
    //     //                   decorationRuns: z.array(
    //     //                     z.object({
    //     //                       textDecorator: z.object({
    //     //                         highlightTextDecorator: z.object({
    //     //                           startIndex: z.number(),
    //     //                           length: z.number(),
    //     //                           backgroundCornerRadius: z.number(),
    //     //                           bottomPadding: z.number(),
    //     //                           highlightTextDecoratorExtensions: z.object({
    //     //                             highlightTextDecoratorColorMapExtension: z.object(
    //     //                               {
    //     //                                 colorMap: z.array(
    //     //                                   z.object({
    //     //                                     key: z.string(),
    //     //                                     value: z.number()
    //     //                                   })
    //     //                                 )
    //     //                               }
    //     //                             )
    //     //                           })
    //     //                         })
    //     //                       })
    //     //                     })
    //     //                   )
    //     //                 }),
    //     //                 headerRuns: z.array(
    //     //                   z.object({
    //     //                     startIndex: z.number(),
    //     //                     length: z.number(),
    //     //                     headerMapping: z.string()
    //     //                   })
    //     //                 )
    //     //               })
    //     //             }),
    //     //             z.object({
    //     //               horizontalCardListRenderer: z.object({
    //     //                 cards: z.array(
    //     //                   z.object({
    //     //                     videoAttributeViewModel: z.object({
    //     //                       image: z.object({
    //     //                         sources: z.array(z.object({ url: z.string() }))
    //     //                       }),
    //     //                       imageStyle: z.string(),
    //     //                       title: z.string(),
    //     //                       subtitle: z.string(),
    //     //                       secondarySubtitle: z.object({
    //     //                         content: z.string()
    //     //                       }),
    //     //                       orientation: z.string(),
    //     //                       sizingRule: z.string(),
    //     //                       overflowMenuOnTap: z.object({
    //     //                         innertubeCommand: z.object({
    //     //                           clickTrackingParams: z.string(),
    //     //                           commandMetadata: z.object({
    //     //                             webCommandMetadata: z.object({
    //     //                               ignoreNavigation: z.boolean()
    //     //                             })
    //     //                           }),
    //     //                           confirmDialogEndpoint: z.object({
    //     //                             content: z.object({
    //     //                               confirmDialogRenderer: z.object({
    //     //                                 title: z.object({
    //     //                                   runs: z.array(
    //     //                                     z.object({ text: z.string() })
    //     //                                   )
    //     //                                 }),
    //     //                                 trackingParams: z.string(),
    //     //                                 dialogMessages: z.array(
    //     //                                   z.object({
    //     //                                     runs: z.array(
    //     //                                       z.union([
    //     //                                         z.object({
    //     //                                           text: z.string(),
    //     //                                           bold: z.boolean()
    //     //                                         }),
    //     //                                         z.object({ text: z.string() })
    //     //                                       ])
    //     //                                     )
    //     //                                   })
    //     //                                 ),
    //     //                                 confirmButton: z.object({
    //     //                                   buttonRenderer: z.object({
    //     //                                     style: z.string(),
    //     //                                     size: z.string(),
    //     //                                     isDisabled: z.boolean(),
    //     //                                     text: z.object({
    //     //                                       runs: z.array(
    //     //                                         z.object({ text: z.string() })
    //     //                                       )
    //     //                                     }),
    //     //                                     trackingParams: z.string(),
    //     //                                     accessibilityData: z.object({
    //     //                                       accessibilityData: z.object({
    //     //                                         label: z.string()
    //     //                                       })
    //     //                                     })
    //     //                                   })
    //     //                                 }),
    //     //                                 primaryIsCancel: z.boolean()
    //     //                               })
    //     //                             })
    //     //                           })
    //     //                         })
    //     //                       }),
    //     //                       overflowMenuA11yLabel: z.string(),
    //     //                       loggingDirectives: z.object({
    //     //                         trackingParams: z.string(),
    //     //                         visibility: z.object({ types: z.string() }),
    //     //                         enableDisplayloggerExperiment: z.boolean()
    //     //                       })
    //     //                     })
    //     //                   })
    //     //                 ),
    //     //                 trackingParams: z.string(),
    //     //                 header: z.object({
    //     //                   richListHeaderRenderer: z.object({
    //     //                     title: z.object({ simpleText: z.string() }),
    //     //                     subtitle: z.object({ simpleText: z.string() }),
    //     //                     trackingParams: z.string()
    //     //                   })
    //     //                 }),
    //     //                 style: z.object({ type: z.string() }),
    //     //                 footerButton: z.object({
    //     //                   buttonViewModel: z.object({
    //     //                     iconName: z.string(),
    //     //                     onTap: z.object({
    //     //                       innertubeCommand: z.object({
    //     //                         clickTrackingParams: z.string(),
    //     //                         commandMetadata: z.object({
    //     //                           webCommandMetadata: z.object({
    //     //                             url: z.string(),
    //     //                             webPageType: z.string(),
    //     //                             rootVe: z.number(),
    //     //                             apiUrl: z.string()
    //     //                           })
    //     //                         }),
    //     //                         browseEndpoint: z.object({
    //     //                           browseId: z.string()
    //     //                         })
    //     //                       })
    //     //                     }),
    //     //                     style: z.string(),
    //     //                     trackingParams: z.string(),
    //     //                     type: z.string(),
    //     //                     buttonSize: z.string(),
    //     //                     titleFormatted: z.object({ content: z.string() })
    //     //                   })
    //     //                 })
    //     //               })
    //     //             }),
    //     //             z.object({
    //     //               reelShelfRenderer: z.object({
    //     //                 title: z.object({
    //     //                   runs: z.array(z.object({ text: z.string() }))
    //     //                 }),
    //     //                 items: z.array(
    //     //                   z.object({
    //     //                     reelItemRenderer: z.object({
    //     //                       videoId: z.string(),
    //     //                       headline: z.object({ simpleText: z.string() }),
    //     //                       thumbnail: z.object({
    //     //                         thumbnails: z.array(
    //     //                           z.object({
    //     //                             url: z.string(),
    //     //                             width: z.number(),
    //     //                             height: z.number()
    //     //                           })
    //     //                         ),
    //     //                         isOriginalAspectRatio: z.boolean()
    //     //                       }),
    //     //                       viewCountText: z.object({
    //     //                         accessibility: z.object({
    //     //                           accessibilityData: z.object({
    //     //                             label: z.string()
    //     //                           })
    //     //                         }),
    //     //                         simpleText: z.string()
    //     //                       }),
    //     //                       navigationEndpoint: z.object({
    //     //                         clickTrackingParams: z.string(),
    //     //                         commandMetadata: z.object({
    //     //                           webCommandMetadata: z.object({
    //     //                             url: z.string(),
    //     //                             webPageType: z.string(),
    //     //                             rootVe: z.number()
    //     //                           })
    //     //                         }),
    //     //                         reelWatchEndpoint: z.object({
    //     //                           videoId: z.string(),
    //     //                           playerParams: z.string(),
    //     //                           thumbnail: z.object({
    //     //                             thumbnails: z.array(
    //     //                               z.object({
    //     //                                 url: z.string(),
    //     //                                 width: z.number(),
    //     //                                 height: z.number()
    //     //                               })
    //     //                             ),
    //     //                             isOriginalAspectRatio: z.boolean()
    //     //                           }),
    //     //                           overlay: z.object({
    //     //                             reelPlayerOverlayRenderer: z.object({
    //     //                               style: z.string(),
    //     //                               trackingParams: z.string(),
    //     //                               reelPlayerNavigationModel: z.string()
    //     //                             })
    //     //                           }),
    //     //                           params: z.string(),
    //     //                           sequenceProvider: z.string(),
    //     //                           sequenceParams: z.string(),
    //     //                           loggingContext: z.object({
    //     //                             vssLoggingContext: z.object({
    //     //                               serializedContextData: z.string()
    //     //                             }),
    //     //                             qoeLoggingContext: z.object({
    //     //                               serializedContextData: z.string()
    //     //                             })
    //     //                           }),
    //     //                           ustreamerConfig: z.string()
    //     //                         })
    //     //                       }),
    //     //                       menu: z.object({
    //     //                         menuRenderer: z.object({
    //     //                           items: z.array(
    //     //                             z.object({
    //     //                               menuNavigationItemRenderer: z.object({
    //     //                                 text: z.object({
    //     //                                   runs: z.array(
    //     //                                     z.object({ text: z.string() })
    //     //                                   )
    //     //                                 }),
    //     //                                 icon: z.object({
    //     //                                   iconType: z.string()
    //     //                                 }),
    //     //                                 navigationEndpoint: z.object({
    //     //                                   clickTrackingParams: z.string(),
    //     //                                   commandMetadata: z.object({
    //     //                                     webCommandMetadata: z.object({
    //     //                                       ignoreNavigation: z.boolean()
    //     //                                     })
    //     //                                   }),
    //     //                                   userFeedbackEndpoint: z.object({
    //     //                                     additionalDatas: z.array(
    //     //                                       z.object({
    //     //                                         userFeedbackEndpointProductSpecificValueData: z.object(
    //     //                                           {
    //     //                                             key: z.string(),
    //     //                                             value: z.string()
    //     //                                           }
    //     //                                         )
    //     //                                       })
    //     //                                     )
    //     //                                   })
    //     //                                 }),
    //     //                                 trackingParams: z.string(),
    //     //                                 accessibility: z.object({
    //     //                                   accessibilityData: z.object({
    //     //                                     label: z.string()
    //     //                                   })
    //     //                                 })
    //     //                               })
    //     //                             })
    //     //                           ),
    //     //                           trackingParams: z.string(),
    //     //                           accessibility: z.object({
    //     //                             accessibilityData: z.object({
    //     //                               label: z.string()
    //     //                             })
    //     //                           })
    //     //                         })
    //     //                       }),
    //     //                       trackingParams: z.string(),
    //     //                       accessibility: z.object({
    //     //                         accessibilityData: z.object({
    //     //                           label: z.string()
    //     //                         })
    //     //                       }),
    //     //                       style: z.string(),
    //     //                       videoType: z.string(),
    //     //                       loggingDirectives: z.object({
    //     //                         trackingParams: z.string(),
    //     //                         visibility: z.object({ types: z.string() }),
    //     //                         enableDisplayloggerExperiment: z.boolean()
    //     //                       })
    //     //                     })
    //     //                   })
    //     //                 ),
    //     //                 trackingParams: z.string()
    //     //               })
    //     //             }),
    //     //             z.object({
    //     //               videoDescriptionTranscriptSectionRenderer: z.object({
    //     //                 sectionTitle: z.object({
    //     //                   runs: z.array(z.object({ text: z.string() }))
    //     //                 }),
    //     //                 subHeaderText: z.object({
    //     //                   runs: z.array(z.object({ text: z.string() }))
    //     //                 }),
    //     //                 primaryButton: z.object({
    //     //                   buttonRenderer: z.object({
    //     //                     style: z.string(),
    //     //                     size: z.string(),
    //     //                     isDisabled: z.boolean(),
    //     //                     text: z.object({
    //     //                       runs: z.array(z.object({ text: z.string() }))
    //     //                     }),
    //     //                     trackingParams: z.string(),
    //     //                     command: z.object({
    //     //                       clickTrackingParams: z.string(),
    //     //                       commandExecutorCommand: z.object({
    //     //                         commands: z.array(
    //     //                           z.union([
    //     //                             z.object({
    //     //                               clickTrackingParams: z.string(),
    //     //                               showEngagementPanelEndpoint: z.object({
    //     //                                 panelIdentifier: z.string(),
    //     //                                 sourcePanelIdentifier: z.string()
    //     //                               })
    //     //                             }),
    //     //                             z.object({
    //     //                               clickTrackingParams: z.string(),
    //     //                               scrollToEngagementPanelCommand: z.object({
    //     //                                 targetId: z.string()
    //     //                               })
    //     //                             })
    //     //                           ])
    //     //                         )
    //     //                       })
    //     //                     })
    //     //                   })
    //     //                 }),
    //     //                 trackingParams: z.string()
    //     //               })
    //     //             }),
    //     //             z.object({
    //     //               videoDescriptionInfocardsSectionRenderer: z.object({
    //     //                 sectionTitle: z.object({ simpleText: z.string() }),
    //     //                 creatorVideosButton: z.object({
    //     //                   buttonRenderer: z.object({
    //     //                     style: z.string(),
    //     //                     size: z.string(),
    //     //                     isDisabled: z.boolean(),
    //     //                     text: z.object({ simpleText: z.string() }),
    //     //                     icon: z.object({ iconType: z.string() }),
    //     //                     trackingParams: z.string(),
    //     //                     command: z.object({
    //     //                       clickTrackingParams: z.string(),
    //     //                       commandMetadata: z.object({
    //     //                         webCommandMetadata: z.object({
    //     //                           url: z.string(),
    //     //                           webPageType: z.string(),
    //     //                           rootVe: z.number(),
    //     //                           apiUrl: z.string()
    //     //                         })
    //     //                       }),
    //     //                       browseEndpoint: z.object({
    //     //                         browseId: z.string(),
    //     //                         params: z.string()
    //     //                       })
    //     //                     })
    //     //                   })
    //     //                 }),
    //     //                 creatorAboutButton: z.object({
    //     //                   buttonRenderer: z.object({
    //     //                     style: z.string(),
    //     //                     size: z.string(),
    //     //                     isDisabled: z.boolean(),
    //     //                     text: z.object({ simpleText: z.string() }),
    //     //                     icon: z.object({ iconType: z.string() }),
    //     //                     trackingParams: z.string(),
    //     //                     command: z.object({
    //     //                       clickTrackingParams: z.string(),
    //     //                       commandMetadata: z.object({
    //     //                         webCommandMetadata: z.object({
    //     //                           url: z.string(),
    //     //                           webPageType: z.string(),
    //     //                           rootVe: z.number(),
    //     //                           apiUrl: z.string()
    //     //                         })
    //     //                       }),
    //     //                       browseEndpoint: z.object({
    //     //                         browseId: z.string(),
    //     //                         params: z.string()
    //     //                       })
    //     //                     })
    //     //                   })
    //     //                 }),
    //     //                 infocards: z.array(
    //     //                   z.union([
    //     //                     z.object({
    //     //                       compactInfocardRenderer: z.object({
    //     //                         content: z.object({
    //     //                           mediaLockupRenderer: z.object({
    //     //                             title: z.object({ simpleText: z.string() }),
    //     //                             subtitle: z.object({
    //     //                               simpleText: z.string()
    //     //                             }),
    //     //                             thumbnailDetails: z.object({
    //     //                               thumbnails: z.array(
    //     //                                 z.object({
    //     //                                   url: z.string(),
    //     //                                   width: z.number(),
    //     //                                   height: z.number()
    //     //                                 })
    //     //                               )
    //     //                             }),
    //     //                             endpoint: z.object({
    //     //                               clickTrackingParams: z.string(),
    //     //                               commandMetadata: z.object({
    //     //                                 webCommandMetadata: z.object({
    //     //                                   url: z.string(),
    //     //                                   webPageType: z.string(),
    //     //                                   rootVe: z.number()
    //     //                                 })
    //     //                               }),
    //     //                               urlEndpoint: z.object({
    //     //                                 url: z.string(),
    //     //                                 target: z.string()
    //     //                               })
    //     //                             }),
    //     //                             trackingParams: z.string(),
    //     //                             enableSubtitleLaunchIcon: z.boolean(),
    //     //                             uiTweaks: z.object({
    //     //                               useZeroPadding: z.boolean(),
    //     //                               thumbnailWidth: z.number(),
    //     //                               thumbnailHeight: z.number()
    //     //                             }),
    //     //                             maxLinesTitle: z.number(),
    //     //                             maxLinesSubtitle: z.number(),
    //     //                             disableEndpoint: z.boolean()
    //     //                           })
    //     //                         }),
    //     //                         trackingParams: z.string()
    //     //                       })
    //     //                     }),
    //     //                     z.object({
    //     //                       compactInfocardRenderer: z.object({
    //     //                         content: z.object({
    //     //                           structuredDescriptionVideoLockupRenderer: z.object(
    //     //                             {
    //     //                               thumbnail: z.object({
    //     //                                 thumbnails: z.array(
    //     //                                   z.object({
    //     //                                     url: z.string(),
    //     //                                     width: z.number(),
    //     //                                     height: z.number()
    //     //                                   })
    //     //                                 )
    //     //                               }),
    //     //                               title: z.object({
    //     //                                 simpleText: z.string()
    //     //                               }),
    //     //                               shortBylineText: z.object({
    //     //                                 simpleText: z.string()
    //     //                               }),
    //     //                               metadataDetails: z.object({
    //     //                                 simpleText: z.string()
    //     //                               }),
    //     //                               navigationEndpoint: z.object({
    //     //                                 clickTrackingParams: z.string(),
    //     //                                 commandMetadata: z.object({
    //     //                                   webCommandMetadata: z.object({
    //     //                                     url: z.string(),
    //     //                                     webPageType: z.string(),
    //     //                                     rootVe: z.number()
    //     //                                   })
    //     //                                 }),
    //     //                                 watchEndpoint: z.object({
    //     //                                   videoId: z.string(),
    //     //                                   watchEndpointSupportedOnesieConfig: z.object(
    //     //                                     {
    //     //                                       html5PlaybackOnesieConfig: z.object(
    //     //                                         {
    //     //                                           commonConfig: z.object({
    //     //                                             url: z.string()
    //     //                                           })
    //     //                                         }
    //     //                                       )
    //     //                                     }
    //     //                                   )
    //     //                                 })
    //     //                               }),
    //     //                               lengthText: z.object({
    //     //                                 simpleText: z.string()
    //     //                               }),
    //     //                               trackingParams: z.string(),
    //     //                               isLiveVideo: z.boolean(),
    //     //                               disableNavigationEndpoint: z.boolean(),
    //     //                               maxLinesTitle: z.number(),
    //     //                               maxLinesShortBylineText: z.number(),
    //     //                               maxLinesMetadataDetails: z.number(),
    //     //                               thumbnailWidth: z.number(),
    //     //                               aspectRatio: z.number(),
    //     //                               thumbnailOverlays: z.array(
    //     //                                 z.object({
    //     //                                   thumbnailOverlayTimeStatusRenderer: z.object(
    //     //                                     {
    //     //                                       text: z.object({
    //     //                                         simpleText: z.string()
    //     //                                       }),
    //     //                                       style: z.string()
    //     //                                     }
    //     //                                   )
    //     //                                 })
    //     //                               )
    //     //                             }
    //     //                           )
    //     //                         }),
    //     //                         trackingParams: z.string()
    //     //                       })
    //     //                     })
    //     //                   ])
    //     //                 ),
    //     //                 sectionSubtitle: z.object({
    //     //                   accessibility: z.object({
    //     //                     accessibilityData: z.object({ label: z.string() })
    //     //                   }),
    //     //                   simpleText: z.string()
    //     //                 }),
    //     //                 channelAvatar: z.object({
    //     //                   thumbnails: z.array(z.object({ url: z.string() }))
    //     //                 }),
    //     //                 channelEndpoint: z.object({
    //     //                   clickTrackingParams: z.string(),
    //     //                   commandMetadata: z.object({
    //     //                     webCommandMetadata: z.object({
    //     //                       url: z.string(),
    //     //                       webPageType: z.string(),
    //     //                       rootVe: z.number(),
    //     //                       apiUrl: z.string()
    //     //                     })
    //     //                   }),
    //     //                   browseEndpoint: z.object({
    //     //                     browseId: z.string(),
    //     //                     canonicalBaseUrl: z.string()
    //     //                   })
    //     //                 }),
    //     //                 trackingParams: z.string()
    //     //               })
    //     //             })
    //     //           ])
    //     //         )
    //     //       })
    //     //     }),
    //     //     veType: z.number(),
    //     //     targetId: z.string(),
    //     //     visibility: z.string(),
    //     //     loggingDirectives: z.object({
    //     //       trackingParams: z.string(),
    //     //       visibility: z.object({ types: z.string() }),
    //     //       enableDisplayloggerExperiment: z.boolean()
    //     //     })
    //     //   })
    //     // }),
    //     // z.object({
    //     //   engagementPanelSectionListRenderer: z.object({
    //     //     panelIdentifier: z.string(),
    //     //     header: z.object({
    //     //       engagementPanelTitleHeaderRenderer: z.object({
    //     //         title: z.object({
    //     //           runs: z.array(z.object({ text: z.string() }))
    //     //         }),
    //     //         contextualInfo: z.object({
    //     //           runs: z.array(z.object({ text: z.string() }))
    //     //         }),
    //     //         menu: z.object({
    //     //           sortFilterSubMenuRenderer: z.object({
    //     //             subMenuItems: z.array(
    //     //               z.object({
    //     //                 title: z.string(),
    //     //                 selected: z.boolean(),
    //     //                 serviceEndpoint: z.object({
    //     //                   clickTrackingParams: z.string(),
    //     //                   commandMetadata: z.object({
    //     //                     webCommandMetadata: z.object({
    //     //                       sendPost: z.boolean(),
    //     //                       apiUrl: z.string()
    //     //                     })
    //     //                   }),
    //     //                   continuationCommand: z.object({
    //     //                     token: z.string(),
    //     //                     request: z.string(),
    //     //                     command: z.object({
    //     //                       clickTrackingParams: z.string(),
    //     //                       showReloadUiCommand: z.object({
    //     //                         targetId: z.string()
    //     //                       })
    //     //                     })
    //     //                   })
    //     //                 }),
    //     //                 trackingParams: z.string()
    //     //               })
    //     //             ),
    //     //             icon: z.object({ iconType: z.string() }),
    //     //             accessibility: z.object({
    //     //               accessibilityData: z.object({ label: z.string() })
    //     //             }),
    //     //             trackingParams: z.string()
    //     //           })
    //     //         }),
    //     //         visibilityButton: z.object({
    //     //           buttonRenderer: z.object({
    //     //             style: z.string(),
    //     //             size: z.string(),
    //     //             icon: z.object({ iconType: z.string() }),
    //     //             trackingParams: z.string(),
    //     //             accessibilityData: z.object({
    //     //               accessibilityData: z.object({ label: z.string() })
    //     //             }),
    //     //             command: z.object({
    //     //               clickTrackingParams: z.string(),
    //     //               changeEngagementPanelVisibilityAction: z.object({
    //     //                 targetId: z.string(),
    //     //                 visibility: z.string()
    //     //               })
    //     //             })
    //     //           })
    //     //         }),
    //     //         trackingParams: z.string()
    //     //       })
    //     //     }),
    //     //     content: z.object({
    //     //       sectionListRenderer: z.object({
    //     //         contents: z.array(
    //     //           z.object({
    //     //             itemSectionRenderer: z.object({
    //     //               contents: z.array(
    //     //                 z.object({
    //     //                   continuationItemRenderer: z.object({
    //     //                     trigger: z.string(),
    //     //                     continuationEndpoint: z.object({
    //     //                       clickTrackingParams: z.string(),
    //     //                       commandMetadata: z.object({
    //     //                         webCommandMetadata: z.object({
    //     //                           sendPost: z.boolean(),
    //     //                           apiUrl: z.string()
    //     //                         })
    //     //                       }),
    //     //                       continuationCommand: z.object({
    //     //                         token: z.string(),
    //     //                         request: z.string()
    //     //                       })
    //     //                     })
    //     //                   })
    //     //                 })
    //     //               ),
    //     //               trackingParams: z.string(),
    //     //               sectionIdentifier: z.string(),
    //     //               targetId: z.string()
    //     //             })
    //     //           })
    //     //         ),
    //     //         trackingParams: z.string()
    //     //       })
    //     //     }),
    //     //     veType: z.number(),
    //     //     targetId: z.string(),
    //     //     visibility: z.string(),
    //     //     loggingDirectives: z.object({
    //     //       trackingParams: z.string(),
    //     //       visibility: z.object({ types: z.string() }),
    //     //       enableDisplayloggerExperiment: z.boolean()
    //     //     })
    //     //   })
    //     // }),
    //   //   z.object({
    //   //     engagementPanelSectionListRenderer: z.object({
    //   //       panelIdentifier: z.string(),
    //   //       header: z.object({
    //   //         engagementPanelTitleHeaderRenderer: z.object({
    //   //           title: z.object({
    //   //             runs: z.array(z.object({ text: z.string() }))
    //   //           }),
    //   //           menu: z.object({
    //   //             menuRenderer: z.object({
    //   //               items: z.array(
    //   //                 z.object({
    //   //                   menuServiceItemRenderer: z.object({
    //   //                     text: z.object({
    //   //                       runs: z.array(z.object({ text: z.string() }))
    //   //                     }),
    //   //                     serviceEndpoint: z.object({
    //   //                       clickTrackingParams: z.string(),
    //   //                       commandMetadata: z.object({
    //   //                         webCommandMetadata: z.object({
    //   //                           sendPost: z.boolean()
    //   //                         })
    //   //                       }),
    //   //                       signalServiceEndpoint: z.object({
    //   //                         signal: z.string(),
    //   //                         actions: z.array(
    //   //                           z.object({
    //   //                             clickTrackingParams: z.string(),
    //   //                             signalAction: z.object({
    //   //                               signal: z.string()
    //   //                             })
    //   //                           })
    //   //                         )
    //   //                       })
    //   //                     }),
    //   //                     trackingParams: z.string()
    //   //                   })
    //   //                 })
    //   //               ),
    //   //               trackingParams: z.string(),
    //   //               accessibility: z.object({
    //   //                 accessibilityData: z.object({ label: z.string() })
    //   //               })
    //   //             })
    //   //           }),
    //   //           visibilityButton: z.object({
    //   //             buttonRenderer: z.object({
    //   //               icon: z.object({ iconType: z.string() }),
    //   //               accessibility: z.object({ label: z.string() }),
    //   //               trackingParams: z.string(),
    //   //               accessibilityData: z.object({
    //   //                 accessibilityData: z.object({ label: z.string() })
    //   //               }),
    //   //               command: z.object({
    //   //                 clickTrackingParams: z.string(),
    //   //                 changeEngagementPanelVisibilityAction: z.object({
    //   //                   targetId: z.string(),
    //   //                   visibility: z.string()
    //   //                 })
    //   //               })
    //   //             })
    //   //           }),
    //   //           trackingParams: z.string()
    //   //         })
    //   //       }),
    //   //       content: z.object({
    //   //         continuationItemRenderer: z.object({
    //   //           trigger: z.string(),
    //   //           continuationEndpoint: z.object({
    //   //             clickTrackingParams: z.string(),
    //   //             commandMetadata: z.object({
    //   //               webCommandMetadata: z.object({
    //   //                 sendPost: z.boolean(),
    //   //                 apiUrl: z.string()
    //   //               })
    //   //             }),
    //   //             getTranscriptEndpoint: z.object({ params: z.string() })
    //   //           })
    //   //         })
    //   //       }),
    //   //       veType: z.number(),
    //   //       targetId: z.string(),
    //   //       visibility: z.string(),
    //   //       onShowCommands: z.array(
    //   //         z.object({
    //   //           clickTrackingParams: z.string(),
    //   //           scrollToEngagementPanelCommand: z.object({
    //   //             targetId: z.string()
    //   //           })
    //   //         })
    //   //       ),
    //   //       loggingDirectives: z.object({
    //   //         trackingParams: z.string(),
    //   //         visibility: z.object({ types: z.string() }),
    //   //         enableDisplayloggerExperiment: z.boolean()
    //   //       })
    //   //     })
    //   //   })
    //   // ])
    // ),
    topbar: z.object({
      desktopTopbarRenderer: z.object({
        logo: z.object({
          topbarLogoRenderer: z.object({
            iconImage: z.object({ iconType: z.string() }),
            tooltipText: z.object({
              runs: z.array(z.object({ text: z.string() })),
            }),
            endpoint: z.object({
              clickTrackingParams: z.string(),
              commandMetadata: z.object({
                webCommandMetadata: z.object({
                  url: z.string(),
                  webPageType: z.string(),
                  rootVe: z.number(),
                  apiUrl: z.string(),
                }),
              }),
              browseEndpoint: z.object({ browseId: z.string() }),
            }),
            trackingParams: z.string(),
            overrideEntityKey: z.string(),
          }),
        }),
        searchbox: z.object({
          fusionSearchboxRenderer: z.object({
            icon: z.object({ iconType: z.string() }),
            placeholderText: z.object({
              runs: z.array(z.object({ text: z.string() })),
            }),
            config: z.object({
              webSearchboxConfig: z.object({
                requestLanguage: z.string(),
                requestDomain: z.string(),
                hasOnscreenKeyboard: z.boolean(),
                focusSearchbox: z.boolean(),
              }),
            }),
            trackingParams: z.string(),
            searchEndpoint: z.object({
              clickTrackingParams: z.string(),
              commandMetadata: z.object({
                webCommandMetadata: z.object({
                  url: z.string(),
                  webPageType: z.string(),
                  rootVe: z.number(),
                }),
              }),
              searchEndpoint: z.object({ query: z.string() }),
            }),
            clearButton: z.object({
              buttonRenderer: z.object({
                style: z.string(),
                size: z.string(),
                isDisabled: z.boolean(),
                icon: z.object({ iconType: z.string() }),
                trackingParams: z.string(),
                accessibilityData: z.object({
                  accessibilityData: z.object({ label: z.string() }),
                }),
              }),
            }),
          }),
        }),
        trackingParams: z.string(),
        interstitial: z.object({
          consentBumpV2Renderer: z.object({
            interstitialLogoAside: z.object({
              runs: z.array(z.object({ text: z.string() })),
            }),
            languagePickerButton: z.object({
              buttonRenderer: z.object({
                style: z.string(),
                size: z.string(),
                isDisabled: z.boolean(),
                text: z.object({ simpleText: z.string() }),
                icon: z.object({ iconType: z.string() }),
                accessibility: z.object({ label: z.string() }),
                trackingParams: z.string(),
              }),
            }),
            interstitialTitle: z.object({
              runs: z.array(z.object({ text: z.string() })),
            }),
            customizeButton: z.object({
              buttonRenderer: z.object({
                style: z.string(),
                size: z.string(),
                isDisabled: z.boolean(),
                text: z.object({ simpleText: z.string() }),
                trackingParams: z.string(),
                command: z.object({
                  clickTrackingParams: z.string(),
                  commandMetadata: z.object({
                    webCommandMetadata: z.object({
                      url: z.string(),
                      webPageType: z.string(),
                      rootVe: z.number(),
                    }),
                  }),
                  urlEndpoint: z.object({ url: z.string() }),
                }),
              }),
            }),
            agreeButton: z.object({
              buttonRenderer: z.object({
                style: z.string(),
                size: z.string(),
                isDisabled: z.boolean(),
                text: z.object({ simpleText: z.string() }),
                accessibility: z.object({ label: z.string() }),
                trackingParams: z.string(),
                command: z.object({
                  clickTrackingParams: z.string(),
                  saveConsentAction: z.object({
                    socsCookie: z.string(),
                    savePreferenceUrl: z.string(),
                  }),
                }),
              }),
            }),
            privacyLink: z.object({
              runs: z.array(
                z.object({
                  text: z.string(),
                  navigationEndpoint: z.object({
                    clickTrackingParams: z.string(),
                    commandMetadata: z.object({
                      webCommandMetadata: z.object({
                        url: z.string(),
                        webPageType: z.string(),
                        rootVe: z.number(),
                      }),
                    }),
                    urlEndpoint: z.object({ url: z.string() }),
                  }),
                }),
              ),
            }),
            termsLink: z.object({
              runs: z.array(
                z.object({
                  text: z.string(),
                  navigationEndpoint: z.object({
                    clickTrackingParams: z.string(),
                    commandMetadata: z.object({
                      webCommandMetadata: z.object({
                        url: z.string(),
                        webPageType: z.string(),
                        rootVe: z.number(),
                      }),
                    }),
                    urlEndpoint: z.object({ url: z.string() }),
                  }),
                }),
              ),
            }),
            trackingParams: z.string(),
            signInButton: z.object({
              buttonRenderer: z.object({
                style: z.string(),
                size: z.string(),
                isDisabled: z.boolean(),
                text: z.object({ simpleText: z.string() }),
                icon: z.object({ iconType: z.string() }),
                tooltip: z.string(),
                trackingParams: z.string(),
                command: z.object({
                  clickTrackingParams: z.string(),
                  commandMetadata: z.object({
                    webCommandMetadata: z.object({
                      url: z.string(),
                      webPageType: z.string(),
                      rootVe: z.number(),
                    }),
                  }),
                  signInEndpoint: z.object({ hack: z.boolean() }),
                }),
              }),
            }),
            languageList: z.object({
              dropdownRenderer: z.object({
                entries: z.array(
                  z.object({
                    dropdownItemRenderer: z.object({
                      label: z.object({ simpleText: z.string() }),
                      isSelected: z.boolean(),
                      stringValue: z.string(),
                      onSelectCommand: z.object({
                        clickTrackingParams: z.string(),
                        commandMetadata: z.object({
                          webCommandMetadata: z.object({
                            sendPost: z.boolean(),
                          }),
                        }),
                        signalServiceEndpoint: z.object({
                          signal: z.string(),
                          actions: z.array(
                            z.object({
                              clickTrackingParams: z.string(),
                              selectLanguageCommand: z.object({
                                hl: z.string(),
                              }),
                            }),
                          ),
                        }),
                      }),
                    }),
                  }),
                ),
                accessibility: z.object({ label: z.string() }),
              }),
            }),
            readMoreButton: z.object({
              buttonRenderer: z.object({
                style: z.string(),
                size: z.string(),
                isDisabled: z.boolean(),
                text: z.object({ simpleText: z.string() }),
                icon: z.object({ iconType: z.string() }),
                trackingParams: z.string(),
                iconPosition: z.string(),
              }),
            }),
            disableP13nButton: z.object({
              buttonRenderer: z.object({
                style: z.string(),
                size: z.string(),
                isDisabled: z.boolean(),
                text: z.object({ simpleText: z.string() }),
                trackingParams: z.string(),
                accessibilityData: z.object({
                  accessibilityData: z.object({ label: z.string() }),
                }),
                command: z.object({
                  clickTrackingParams: z.string(),
                  disablePersonalizationAction: z.object({
                    socsCookie: z.string(),
                    savePreferenceUrl: z.string(),
                  }),
                }),
              }),
            }),
            loadingMessage: z.object({
              runs: z.array(z.object({ text: z.string() })),
            }),
            errorMessage: z.object({
              runs: z.array(z.object({ text: z.string() })),
            }),
            eomV1Text: z.object({
              essentialCookieMsg: z.object({
                begin: z.object({
                  runs: z.array(
                    // z.union([
                    z.object({ text: z.string() }),
                    //   z.object({
                    //     text: z.string(),
                    //     navigationEndpoint: z.object({
                    //       clickTrackingParams: z.string(),
                    //       commandMetadata: z.object({
                    //         webCommandMetadata: z.object({
                    //           url: z.string(),
                    //           webPageType: z.string(),
                    //           rootVe: z.number()
                    //         })
                    //       }),
                    //       urlEndpoint: z.object({ url: z.string() })
                    //     })
                    //   })
                    // ])
                  ),
                }),
                items: z.array(
                  z.object({ runs: z.array(z.object({ text: z.string() })) }),
                ),
              }),
              nonEssentialCookieMsg: z.object({
                begin: z.object({
                  runs: z.array(z.object({ text: z.string() })),
                }),
                items: z.array(
                  z.object({ runs: z.array(z.object({ text: z.string() })) }),
                ),
              }),
              ifReject: z.object({
                runs: z.array(z.object({ text: z.string() })),
              }),
              personalization: z.object({
                runs: z.array(z.object({ text: z.string() })),
              }),
              moreOptions: z.object({
                runs: z.array(z.object({ text: z.string() })),
              }),
            }),
          }),
        }),
        countryCode: z.string(),
        topbarButtons: z.array(
          // z.union([
          z.object({
            // topbarMenuButtonRenderer: z.object({
            //   icon: z.object({ iconType: z.string() }),
            //   menuRequest: z.object({
            //     clickTrackingParams: z.string(),
            //     commandMetadata: z.object({
            //       webCommandMetadata: z.object({
            //         sendPost: z.boolean(),
            //         apiUrl: z.string()
            //       })
            //     }),
            //     signalServiceEndpoint: z.object({
            //       signal: z.string(),
            //       actions: z.array(
            //         z.object({
            //           clickTrackingParams: z.string(),
            //           openPopupAction: z.object({
            //             popup: z.object({
            //               multiPageMenuRenderer: z.object({
            //                 trackingParams: z.string(),
            //                 style: z.string(),
            //                 showLoadingSpinner: z.boolean()
            //               })
            //             }),
            //             popupType: z.string(),
            //             beReused: z.boolean()
            //           })
            //         })
            //       )
            //     })
            //   }),
            //   trackingParams: z.string(),
            //   accessibility: z.object({
            //     accessibilityData: z.object({ label: z.string() })
            //   }),
            //   tooltip: z.string(),
            //   style: z.string()
            // })
          }),
          //   z.object({
          //     buttonRenderer: z.object({
          //       style: z.string(),
          //       size: z.string(),
          //       text: z.object({
          //         runs: z.array(z.object({ text: z.string() }))
          //       }),
          //       icon: z.object({ iconType: z.string() }),
          //       navigationEndpoint: z.object({
          //         clickTrackingParams: z.string(),
          //         commandMetadata: z.object({
          //           webCommandMetadata: z.object({
          //             url: z.string(),
          //             webPageType: z.string(),
          //             rootVe: z.number()
          //           })
          //         }),
          //         signInEndpoint: z.object({ idamTag: z.string() })
          //       }),
          //       trackingParams: z.string(),
          //       targetId: z.string()
          //     })
          //   })
          // ])
        ),
        hotkeyDialog: z.object({
          hotkeyDialogRenderer: z.object({
            title: z.object({ runs: z.array(z.object({ text: z.string() })) }),
            sections: z.array(
              // z.union([
              //   z.object({
              //     hotkeyDialogSectionRenderer: z.object({
              //       title: z.object({
              //         runs: z.array(z.object({ text: z.string() }))
              //       }),
              //       options: z.array(
              //         z.union([
              //           z.object({
              //             hotkeyDialogSectionOptionRenderer: z.object({
              //               label: z.object({
              //                 runs: z.array(z.object({ text: z.string() }))
              //               }),
              //               hotkey: z.string()
              //             })
              //           }),
              //           z.object({
              //             hotkeyDialogSectionOptionRenderer: z.object({
              //               label: z.object({
              //                 runs: z.array(z.object({ text: z.string() }))
              //               }),
              //               hotkey: z.string(),
              //               hotkeyAccessibilityLabel: z.object({
              //                 accessibilityData: z.object({
              //                   label: z.string()
              //                 })
              //               })
              //             })
              //           })
              //         ])
              //       )
              //     })
              //   }),
              z.object({
                hotkeyDialogSectionRenderer: z.object({
                  title: z.object({
                    runs: z.array(z.object({ text: z.string() })),
                  }),
                  options: z.array(
                    z.object({
                      hotkeyDialogSectionOptionRenderer: z.object({
                        label: z.object({
                          runs: z.array(z.object({ text: z.string() })),
                        }),
                        hotkey: z.string(),
                      }),
                    }),
                  ),
                }),
              }),
              // ])
            ),
            dismissButton: z.object({
              buttonRenderer: z.object({
                style: z.string(),
                size: z.string(),
                isDisabled: z.boolean(),
                text: z.object({
                  runs: z.array(z.object({ text: z.string() })),
                }),
                trackingParams: z.string(),
              }),
            }),
            trackingParams: z.string(),
          }),
        }),
        backButton: z.object({
          buttonRenderer: z.object({
            trackingParams: z.string(),
            command: z.object({
              clickTrackingParams: z.string(),
              commandMetadata: z.object({
                webCommandMetadata: z.object({ sendPost: z.boolean() }),
              }),
              signalServiceEndpoint: z.object({
                signal: z.string(),
                actions: z.array(
                  z.object({
                    clickTrackingParams: z.string(),
                    signalAction: z.object({ signal: z.string() }),
                  }),
                ),
              }),
            }),
          }),
        }),
        forwardButton: z.object({
          buttonRenderer: z.object({
            trackingParams: z.string(),
            command: z.object({
              clickTrackingParams: z.string(),
              commandMetadata: z.object({
                webCommandMetadata: z.object({ sendPost: z.boolean() }),
              }),
              signalServiceEndpoint: z.object({
                signal: z.string(),
                actions: z.array(
                  z.object({
                    clickTrackingParams: z.string(),
                    signalAction: z.object({ signal: z.string() }),
                  }),
                ),
              }),
            }),
          }),
        }),
        a11ySkipNavigationButton: z.object({
          buttonRenderer: z.object({
            style: z.string(),
            size: z.string(),
            isDisabled: z.boolean(),
            text: z.object({ runs: z.array(z.object({ text: z.string() })) }),
            trackingParams: z.string(),
            command: z.object({
              clickTrackingParams: z.string(),
              commandMetadata: z.object({
                webCommandMetadata: z.object({ sendPost: z.boolean() }),
              }),
              signalServiceEndpoint: z.object({
                signal: z.string(),
                actions: z.array(
                  z.object({
                    clickTrackingParams: z.string(),
                    signalAction: z.object({ signal: z.string() }),
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    }),
    // cards: z.object({
    //   cardCollectionRenderer: z.object({
    //     cards: z.array(
    //       z.object({
    //         cardRenderer: z.object({
    //           teaser: z.object({
    //             simpleCardTeaserRenderer: z.object({
    //               message: z.object({ simpleText: z.string() }),
    //               trackingParams: z.string(),
    //               onTapCommand: z.object({
    //                 clickTrackingParams: z.string(),
    //                 showEngagementPanelEndpoint: z.object({
    //                   panelIdentifier: z.string(),
    //                   forcePortrait: z.boolean(),
    //                   engagementPanelExtras: z.object({
    //                     sectionListEngagementPanelExtras: z.object({
    //                       scrollToItemSectionIdentifier: z.string(),
    //                       scrollToItemSectionOffsetDistance: z.number()
    //                     })
    //                   })
    //                 })
    //               }),
    //               channelAvatar: z.object({
    //                 thumbnails: z.array(
    //                   z.object({
    //                     url: z.string(),
    //                     width: z.number(),
    //                     height: z.number()
    //                   })
    //                 )
    //               })
    //             })
    //           }),
    //           cueRanges: z.array(
    //             z.object({
    //               startCardActiveMs: z.string(),
    //               endCardActiveMs: z.string(),
    //               teaserDurationMs: z.string()
    //             })
    //           ),
    //           trackingParams: z.string()
    //         })
    //       })
    //     ),
    //     headerText: z.object({ simpleText: z.string() }),
    //     trackingParams: z.string(),
    //     onIconTapCommand: z.object({
    //       clickTrackingParams: z.string(),
    //       showEngagementPanelEndpoint: z.object({
    //         panelIdentifier: z.string(),
    //         forcePortrait: z.boolean(),
    //         engagementPanelExtras: z.object({
    //           sectionListEngagementPanelExtras: z.object({
    //             scrollToItemSectionIdentifier: z.string()
    //           })
    //         })
    //       })
    //     })
    //   })
    // }),
    pageVisualEffects: z.array(
      z.object({
        cinematicContainerRenderer: z.object({
          gradientColorConfig: z.array(
            // z.union([
            z.object({
              darkThemeColor: z.number(),
              startLocation: z.number().optional(),
            }),
            //   z.object({ darkThemeColor: z.number() })
            // ])
          ),
          presentationStyle: z.string(),
          config: z.object({
            lightThemeBackgroundColor: z.number(),
            darkThemeBackgroundColor: z.number(),
            animationConfig: z.object({
              minImageUpdateIntervalMs: z.number(),
              crossfadeDurationMs: z.number(),
              crossfadeStartOffset: z.number(),
              maxFrameRate: z.number(),
            }),
            colorSourceSizeMultiplier: z.number(),
            applyClientImageBlur: z.boolean(),
            bottomColorSourceHeightMultiplier: z.number(),
            maxBottomColorSourceHeight: z.number(),
            colorSourceWidthMultiplier: z.number(),
            colorSourceHeightMultiplier: z.number(),
            blurStrength: z.number(),
          }),
        }),
      }),
    ),
    frameworkUpdates: z.object({
      // entityBatchUpdate: z.object({
      //   mutations: z.array(
      //     // z.union([
      //     //   z.object({
      //     //     entityKey: z.string(),
      //     //     type: z.string(),
      //     //     payload: z.object({
      //     //       macroMarkersListEntity: z.object({
      //     //         key: z.string(),
      //     //         externalVideoId: z.string(),
      //     //         markersList: z.object({
      //     //           markerType: z.string(),
      //     //           markers: z.array(
      //     //             z.object({
      //     //               startMillis: z.string(),
      //     //               durationMillis: z.string(),
      //     //               intensityScoreNormalized: z.number()
      //     //             })
      //     //           ),
      //     //           markersMetadata: z.object({
      //     //             heatmapMetadata: z.object({
      //     //               maxHeightDp: z.number(),
      //     //               minHeightDp: z.number(),
      //     //               showHideAnimationDurationMillis: z.number()
      //     //             })
      //     //           }),
      //     //           markersDecoration: z.object({
      //     //             timedMarkerDecorations: z.array(
      //     //               z.object({
      //     //                 visibleTimeRangeStartMillis: z.number(),
      //     //                 visibleTimeRangeEndMillis: z.number(),
      //     //                 decorationTimeMillis: z.number(),
      //     //                 label: z.object({
      //     //                   runs: z.array(z.object({ text: z.string() }))
      //     //                 }),
      //     //                 icon: z.string()
      //     //               })
      //     //             )
      //     //           })
      //     //         })
      //     //       })
      //     //     })
      //     //   }),
      //       z.object({
      //         entityKey: z.string(),
      //         type: z.string(),
      //         options: z.object({ persistenceOption: z.string() })
      //       }),
      //     //   z.object({
      //     //     entityKey: z.string(),
      //     //     type: z.string(),
      //     //     payload: z.object({
      //     //       subscriptionStateEntity: z.object({
      //     //         key: z.string(),
      //     //         subscribed: z.boolean()
      //     //       })
      //     //     })
      //     //   })
      //     // ])
      //   ),
      //   timestamp: z.object({ seconds: z.string(), nanos: z.number() })
      // })
    }),
  }),
  html5player: z.string(),
  formats: z.array(
    // z.union([
    z.object({
      // itag: z.number(),
      mimeType: z.string(),
      // bitrate: z.number(),
      // width: z.number(),
      // height: z.number(),
      // lastModified: z.string(),
      // quality: z.string(),
      // fps: z.number(),
      // qualityLabel: z.string(),
      // projectionType: z.string(),
      // audioQuality: z.string(),
      // approxDurationMs: z.string(),
      // audioSampleRate: z.string(),
      // audioChannels: z.number(),
      // signatureCipher: z.string()
    }),
    //   z.object({
    //     itag: z.number(),
    //     mimeType: z.string(),
    //     bitrate: z.number(),
    //     width: z.number(),
    //     height: z.number(),
    //     initRange: z.object({ start: z.string(), end: z.string() }),
    //     indexRange: z.object({ start: z.string(), end: z.string() }),
    //     lastModified: z.string(),
    //     contentLength: z.string(),
    //     quality: z.string(),
    //     fps: z.number(),
    //     qualityLabel: z.string(),
    //     projectionType: z.string(),
    //     averageBitrate: z.number(),
    //     colorInfo: z.object({
    //       primaries: z.string(),
    //       transferCharacteristics: z.string(),
    //       matrixCoefficients: z.string()
    //     }),
    //     approxDurationMs: z.string(),
    //     signatureCipher: z.string()
    //   }),
    //   z.object({
    //     itag: z.number(),
    //     mimeType: z.string(),
    //     bitrate: z.number(),
    //     width: z.number(),
    //     height: z.number(),
    //     initRange: z.object({ start: z.string(), end: z.string() }),
    //     indexRange: z.object({ start: z.string(), end: z.string() }),
    //     lastModified: z.string(),
    //     contentLength: z.string(),
    //     quality: z.string(),
    //     fps: z.number(),
    //     qualityLabel: z.string(),
    //     projectionType: z.string(),
    //     averageBitrate: z.number(),
    //     approxDurationMs: z.string(),
    //     signatureCipher: z.string()
    //   }),
    //   z.object({
    //     itag: z.number(),
    //     mimeType: z.string(),
    //     bitrate: z.number(),
    //     width: z.number(),
    //     height: z.number(),
    //     initRange: z.object({ start: z.string(), end: z.string() }),
    //     indexRange: z.object({ start: z.string(), end: z.string() }),
    //     lastModified: z.string(),
    //     contentLength: z.string(),
    //     quality: z.string(),
    //     fps: z.number(),
    //     qualityLabel: z.string(),
    //     projectionType: z.string(),
    //     averageBitrate: z.number(),
    //     highReplication: z.boolean(),
    //     approxDurationMs: z.string(),
    //     signatureCipher: z.string()
    //   }),
    //   z.object({
    //     itag: z.number(),
    //     mimeType: z.string(),
    //     bitrate: z.number(),
    //     initRange: z.object({ start: z.string(), end: z.string() }),
    //     indexRange: z.object({ start: z.string(), end: z.string() }),
    //     lastModified: z.string(),
    //     contentLength: z.string(),
    //     quality: z.string(),
    //     projectionType: z.string(),
    //     averageBitrate: z.number(),
    //     highReplication: z.boolean(),
    //     audioQuality: z.string(),
    //     approxDurationMs: z.string(),
    //     audioSampleRate: z.string(),
    //     audioChannels: z.number(),
    //     loudnessDb: z.number(),
    //     signatureCipher: z.string()
    //   }),
    //   z.object({
    //     itag: z.number(),
    //     mimeType: z.string(),
    //     bitrate: z.number(),
    //     initRange: z.object({ start: z.string(), end: z.string() }),
    //     indexRange: z.object({ start: z.string(), end: z.string() }),
    //     lastModified: z.string(),
    //     contentLength: z.string(),
    //     quality: z.string(),
    //     projectionType: z.string(),
    //     averageBitrate: z.number(),
    //     audioQuality: z.string(),
    //     approxDurationMs: z.string(),
    //     audioSampleRate: z.string(),
    //     audioChannels: z.number(),
    //     loudnessDb: z.number(),
    //     signatureCipher: z.string()
    //   })
    // ])
  ),
  related_videos: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      published: z.string(),
      author: z.object({
        id: z.string(),
        name: z.string(),
        user: z.string(),
        channel_url: z.string(),
        user_url: z.string(),
        thumbnails: z.array(
          z.object({ url: z.string(), width: z.number(), height: z.number() }),
        ),
        verified: z.boolean(),
      }),
      short_view_count_text: z.string(),
      view_count: z.string(),
      length_seconds: z.number(),
      thumbnails: z.array(
        z.object({ url: z.string(), width: z.number(), height: z.number() }),
      ),
      richThumbnails: z.array(z.unknown()),
      isLive: z.boolean(),
    }),
  ),
  videoDetails: z.object({
    embed: z.object({
      iframeUrl: z.string(),
      width: z.number(),
      height: z.number(),
    }),
    title: z.string(),
    description: z.string(),
    lengthSeconds: z.string(),
    ownerProfileUrl: z.string(),
    externalChannelId: z.string(),
    isFamilySafe: z.boolean(),
    availableCountries: z.array(z.string()),
    isUnlisted: z.boolean(),
    hasYpcMetadata: z.boolean(),
    viewCount: z.string(),
    category: z.string(),
    publishDate: z.string(),
    ownerChannelName: z.string(),
    // liveBroadcastDetails: z.object({
    //   isLiveNow: z.boolean(),
    //   startTimestamp: z.string(),
    //   endTimestamp: z.string()
    // }),
    uploadDate: z.string(),
    videoId: z.string(),
    keywords: z.array(z.string()),
    channelId: z.string(),
    isOwnerViewing: z.boolean(),
    isCrawlable: z.boolean(),
    allowRatings: z.boolean(),
    author: z.object({
      id: z.string(),
      name: z.string(),
      user: z.string(),
      channel_url: z.string(),
      external_channel_url: z.string(),
      user_url: z.string(),
      thumbnails: z.array(
        z.object({ url: z.string(), width: z.number(), height: z.number() }),
      ),
      verified: z.boolean(),
      subscriber_count: z.number(),
    }),
    // isLowLatencyLiveStream: z.boolean(),
    isPrivate: z.boolean(),
    isUnpluggedCorpus: z.boolean(),
    // latencyClass: z.string(),
    isLiveContent: z.boolean(),
    media: z.object({}),
    likes: z.null(),
    dislikes: z.null(),
    age_restricted: z.boolean(),
    video_url: z.string(),
    storyboards: z.array(
      z.object({
        templateUrl: z.string(),
        thumbnailWidth: z.number(),
        thumbnailHeight: z.number(),
        thumbnailCount: z.number(),
        interval: z.number(),
        columns: z.number(),
        rows: z.number(),
        storyboardCount: z.number(),
      }),
    ),
    chapters: z.array(z.unknown()),
    thumbnails: z.array(
      z.object({ url: z.string(), width: z.number(), height: z.number() }),
    ),
  }),
});

export const InfoSchema = z.object({
  page: z.string(),
  player_response: z.unknown(),
  response: z.object({
    responseContext: z.unknown(),
    contents: z.unknown(),
    currentVideoEndpoint: z.unknown(),
    trackingParams: z.string(),
    playerOverlays: z.unknown(),
    onResponseReceivedEndpoints: z.unknown().array(),
    engagementPanels: z.unknown().array(),
    topbar: z.unknown(),
    cards: z.unknown(),
    pageVisualEffects: z.array(
      z.object({
        cinematicContainerRenderer: z.object({
          // gradientColorConfig: z.array(
          //   z.union([
          //     z.object({
          //       darkThemeColor: z.number(),
          //       startLocation: z.number(),
          //     }),
          //     z.object({ darkThemeColor: z.number() }),
          //   ])
          // ),
          presentationStyle: z.string(),
          config: z.object({
            lightThemeBackgroundColor: z.number(),
            darkThemeBackgroundColor: z.number(),
            animationConfig: z.object({
              minImageUpdateIntervalMs: z.number(),
              crossfadeDurationMs: z.number(),
              crossfadeStartOffset: z.number(),
              maxFrameRate: z.number(),
            }),
            colorSourceSizeMultiplier: z.number(),
            applyClientImageBlur: z.boolean(),
            bottomColorSourceHeightMultiplier: z.number(),
            maxBottomColorSourceHeight: z.number(),
            colorSourceWidthMultiplier: z.number(),
            colorSourceHeightMultiplier: z.number(),
            blurStrength: z.number(),
          }),
        }),
      }),
    ),
    frameworkUpdates: z.object({
      entityBatchUpdate: z.object({
        mutations: z.array(
          // z.union([
          z.object({
            entityKey: z.string(),
            type: z.string(),
            options: z.object({ persistenceOption: z.string() }),
          }),
          //   z.object({
          //     entityKey: z.string(),
          //     type: z.string(),
          //     payload: z.object({
          //       macroMarkersListEntity: z.object({
          //         key: z.string(),
          //         externalVideoId: z.string(),
          //         markersList: z.object({
          //           markerType: z.string(),
          //           markers: z.array(
          //             z.object({
          //               startMillis: z.string(),
          //               durationMillis: z.string(),
          //               intensityScoreNormalized: z.number(),
          //             })
          //           ),
          //           markersMetadata: z.object({
          //             heatmapMetadata: z.object({
          //               maxHeightDp: z.number(),
          //               minHeightDp: z.number(),
          //               showHideAnimationDurationMillis: z.number(),
          //             }),
          //           }),
          //           markersDecoration: z.object({
          //             timedMarkerDecorations: z.array(
          //               z.object({
          //                 visibleTimeRangeStartMillis: z.number(),
          //                 visibleTimeRangeEndMillis: z.number(),
          //                 decorationTimeMillis: z.number(),
          //                 label: z.object({
          //                   runs: z.array(z.object({ text: z.string() })),
          //                 }),
          //                 icon: z.string(),
          //               })
          //             ),
          //           }),
          //         }),
          //       }),
          //     }),
          //   }),
          //   z.object({
          //     entityKey: z.string(),
          //     type: z.string(),
          //     payload: z.object({
          //       subscriptionStateEntity: z.object({
          //         key: z.string(),
          //         subscribed: z.boolean(),
          //       }),
          //     }),
          //   }),
          // ])
        ),
        timestamp: z.object({ seconds: z.string(), nanos: z.number() }),
      }),
    }),
  }),
  html5player: z.string(),
  formats: z.unknown().array(),
  related_videos: z.unknown().array(),
  videoDetails: z.object({
    embed: z.object({
      iframeUrl: z.string(),
      width: z.number(),
      height: z.number(),
    }),
    title: z.string(),
    description: z.string(),
    lengthSeconds: z.string(),
    ownerProfileUrl: z.string(),
    externalChannelId: z.string(),
    isFamilySafe: z.boolean(),
    availableCountries: z.array(z.string()),
    isUnlisted: z.boolean(),
    hasYpcMetadata: z.boolean(),
    viewCount: z.string(),
    category: z.string(),
    publishDate: z.string(),
    ownerChannelName: z.string(),
    liveBroadcastDetails: z
      .object({
        isLiveNow: z.boolean(),
        startTimestamp: z.string(),
        endTimestamp: z.string(),
      })
      .optional(),
    uploadDate: z.string(),
    videoId: z.string(),
    keywords: z.array(z.string()),
    channelId: z.string(),
    isOwnerViewing: z.boolean(),
    isCrawlable: z.boolean(),
    allowRatings: z.boolean(),
    author: z.object({
      id: z.string(),
      name: z.string(),
      user: z.string(),
      channel_url: z.string(),
      external_channel_url: z.string(),
      user_url: z.string(),
      thumbnails: z.array(
        z.object({ url: z.string(), width: z.number(), height: z.number() }),
      ),
      verified: z.boolean(),
      subscriber_count: z.number(),
    }),
    isLowLatencyLiveStream: z.boolean().optional(),
    isPrivate: z.boolean(),
    isUnpluggedCorpus: z.boolean(),
    latencyClass: z.string().optional(),
    isLiveContent: z.boolean(),
    media: z.object({}),
    likes: z.null(),
    dislikes: z.null(),
    age_restricted: z.boolean(),
    video_url: z.string(),
    storyboards: z.array(
      z.object({
        templateUrl: z.string(),
        thumbnailWidth: z.number(),
        thumbnailHeight: z.number(),
        thumbnailCount: z.number(),
        interval: z.number(),
        columns: z.number(),
        rows: z.number(),
        storyboardCount: z.number(),
      }),
    ),
    chapters: z.array(z.unknown()),
    thumbnails: z.array(
      z.object({ url: z.string(), width: z.number(), height: z.number() }),
    ),
  }),
  full: z.boolean(),
});

export type BasicInfoType = z.infer<typeof BasicInfoSchema>;
export type InfoType = z.infer<typeof InfoSchema>;
