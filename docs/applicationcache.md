
### domain: ApplicationCache 🌱

---


#### command: ApplicationCache.enable

Enables application cache domain notifications.

---


#### command: ApplicationCache.getApplicationCacheForFrame

Returns relevant application cache data for the document in given frame.

*parameters*
-  `frameId` <[Page.FrameId]> Identifier of the frame containing document whose application cache is retrieved

*returns*
-  `applicationCache` <[ApplicationCache.ApplicationCache]> Relevant application cache data for the document in given frame

---


#### command: ApplicationCache.getFramesWithManifests

Returns array of frame identifiers with manifest urls for each frame containing a document
associated with some application cache.

*returns*
-  `frameIds` <array of [ApplicationCache.FrameWithManifest]> Array of frame identifiers with manifest urls for each frame containing a document
associated with some application cache

---


#### command: ApplicationCache.getManifestForFrame

Returns manifest URL for document in the given frame.

*parameters*
-  `frameId` <[Page.FrameId]> Identifier of the frame containing document whose manifest is retrieved

*returns*
-  `manifestURL` <[string]> Manifest URL for document in the given frame

---


#### event: ApplicationCache.applicationCacheStatusUpdated

*parameters*
-  `frameId` <[Page.FrameId]> Identifier of the frame containing document whose application cache updated status
-  `manifestURL` <[string]> Manifest URL
-  `status` <[integer]> Updated application cache status

---


#### event: ApplicationCache.networkStateUpdated

*parameters*
-  `isNowOnline` <[boolean]> 

---


#### type: ApplicationCache.ApplicationCacheResource

Detailed application cache resource information.

*base type*
- **object**

*properties*
-  `url` <[string]> Resource url
-  `size` <[integer]> Resource size
-  `type` <[string]> Resource type

*property of type*
- [ApplicationCache.ApplicationCache]

---


#### type: ApplicationCache.ApplicationCache

Detailed application cache information.

*base type*
- **object**

*properties*
-  `manifestURL` <[string]> Manifest URL
-  `size` <[number]> Application cache size
-  `creationTime` <[number]> Application cache creation time
-  `updateTime` <[number]> Application cache update time
-  `resources` <array of [ApplicationCache.ApplicationCacheResource]> Application cache resources

*returned from command*
- [ApplicationCache.getApplicationCacheForFrame]

---


#### type: ApplicationCache.FrameWithManifest

Frame identifier - manifest URL pair.

*base type*
- **object**

*properties*
-  `frameId` <[Page.FrameId]> Frame identifier
-  `manifestURL` <[string]> Manifest URL
-  `status` <[integer]> Application cache status

*returned from command*
- [ApplicationCache.getFramesWithManifests]

[ApplicationCache.ApplicationCache]: applicationcache.md#type-applicationcacheapplicationcache "ApplicationCache.ApplicationCache"
[ApplicationCache.getApplicationCacheForFrame]: applicationcache.md#command-applicationcachegetapplicationcacheforframe "ApplicationCache.getApplicationCacheForFrame"
[ApplicationCache.getFramesWithManifests]: applicationcache.md#command-applicationcachegetframeswithmanifests "ApplicationCache.getFramesWithManifests"
[ApplicationCache.ApplicationCacheResource]: applicationcache.md#type-applicationcacheapplicationcacheresource "ApplicationCache.ApplicationCacheResource"
[Page.FrameId]: page.md#type-pageframeid "Page.FrameId"
[Page.FrameId]: page.md#type-pageframeid "Page.FrameId"
[ApplicationCache.ApplicationCache]: applicationcache.md#type-applicationcacheapplicationcache "ApplicationCache.ApplicationCache"
[ApplicationCache.FrameWithManifest]: applicationcache.md#type-applicationcacheframewithmanifest "ApplicationCache.FrameWithManifest"
[Page.FrameId]: page.md#type-pageframeid "Page.FrameId"
[Page.FrameId]: page.md#type-pageframeid "Page.FrameId"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"