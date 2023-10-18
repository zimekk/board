import { z } from "zod";

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
          gradientColorConfig: z.array(
            z.union([
              z.object({
                darkThemeColor: z.number(),
                startLocation: z.number(),
              }),
              z.object({ darkThemeColor: z.number() }),
            ])
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
      })
    ),
    frameworkUpdates: z.object({
      entityBatchUpdate: z.object({
        mutations: z.array(
          z.union([
            z.object({
              entityKey: z.string(),
              type: z.string(),
              options: z.object({ persistenceOption: z.string() }),
            }),
            z.object({
              entityKey: z.string(),
              type: z.string(),
              payload: z.object({
                macroMarkersListEntity: z.object({
                  key: z.string(),
                  externalVideoId: z.string(),
                  markersList: z.object({
                    markerType: z.string(),
                    markers: z.array(
                      z.object({
                        startMillis: z.string(),
                        durationMillis: z.string(),
                        intensityScoreNormalized: z.number(),
                      })
                    ),
                    markersMetadata: z.object({
                      heatmapMetadata: z.object({
                        maxHeightDp: z.number(),
                        minHeightDp: z.number(),
                        showHideAnimationDurationMillis: z.number(),
                      }),
                    }),
                    markersDecoration: z.object({
                      timedMarkerDecorations: z.array(
                        z.object({
                          visibleTimeRangeStartMillis: z.number(),
                          visibleTimeRangeEndMillis: z.number(),
                          decorationTimeMillis: z.number(),
                          label: z.object({
                            runs: z.array(z.object({ text: z.string() })),
                          }),
                          icon: z.string(),
                        })
                      ),
                    }),
                  }),
                }),
              }),
            }),
            z.object({
              entityKey: z.string(),
              type: z.string(),
              payload: z.object({
                subscriptionStateEntity: z.object({
                  key: z.string(),
                  subscribed: z.boolean(),
                }),
              }),
            }),
          ])
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
        z.object({ url: z.string(), width: z.number(), height: z.number() })
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
      })
    ),
    chapters: z.array(z.unknown()),
    thumbnails: z.array(
      z.object({ url: z.string(), width: z.number(), height: z.number() })
    ),
  }),
  full: z.boolean(),
});

export type InfoType = z.infer<typeof InfoSchema>;
