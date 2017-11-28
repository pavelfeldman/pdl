
### domain: ApplicationCache

#### ApplicationCache.enable()

Enables application cache domain notifications.

#### ApplicationCache.getApplicationCacheForFrame()
- parameters
  - `frameId` <Page.FrameId> Identifier of the frame containing document whose application cache is retrieved
- returns
  - `applicationCache` <ApplicationCache> Relevant application cache data for the document in given frame

Returns relevant application cache data for the document in given frame.

#### ApplicationCache.getFramesWithManifests()
- returns
  - `frameIds` array of <FrameWithManifest> Array of frame identifiers with manifest urls for each frame containing a document
associated with some application cache

Returns array of frame identifiers with manifest urls for each frame containing a document
associated with some application cache.

#### ApplicationCache.getManifestForFrame()
- parameters
  - `frameId` <Page.FrameId> Identifier of the frame containing document whose manifest is retrieved
- returns
  - `manifestURL` <[string]> Manifest URL for document in the given frame

Returns manifest URL for document in the given frame.

#### event: ApplicationCache.applicationCacheStatusUpdated
- `frameId` <Page.FrameId> Identifier of the frame containing document whose application cache updated status
- `manifestURL` <[string]> Manifest URL
- `status` <[integer]> Updated application cache status

#### event: ApplicationCache.networkStateUpdated
- `isNowOnline` <[boolean]> 