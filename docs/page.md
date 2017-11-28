
### domain: Page

Actions and events related to the inspected page belong to the page domain.

#### type: Page.ResourceType = string

Resource type as it was perceived by the rendering engine.

#### type: Page.FrameId = string

Unique frame identifier.

#### type: Page.Frame = object

Information about the Frame on the page.

*properties*
  - `id` <string]> Frame unique identifier
  - `parentId` <string]> Parent frame identifier
  - `loaderId` <[Network.LoaderId]]> Identifier of the loader associated with this frame
  - `name` <string]> Frame's name as specified in the tag
  - `url` <string]> Frame document's URL
  - `securityOrigin` <string]> Frame document's security origin
  - `mimeType` <string]> Frame document's mimeType as determined by the browser
  - `unreachableUrl` <string]> If the frame failed to load, this contains the URL that could not be loaded

#### type: Page.FrameResource = object

Information about the Resource on the page.

*properties*
  - `url` <string]> Resource URL
  - `type` <[Page.ResourceType]]> Type of this resource
  - `mimeType` <string]> Resource mimeType as determined by the browser
  - `lastModified` <[Network.TimeSinceEpoch]]> last-modified timestamp as reported by server
  - `contentSize` <number]> Resource content size
  - `failed` <boolean]> True if the resource failed to load
  - `canceled` <boolean]> True if the resource was canceled during loading

#### type: Page.FrameResourceTree = object

Information about the Frame hierarchy along with their cached resources.

*properties*
  - `frame` <[Page.Frame]]> Frame information for this tree item
  - `childFrames` <array of [Page.FrameResourceTree]> Child frames
  - `resources` <array of [Page.FrameResource]> Information about frame resources

#### type: Page.FrameTree = object

Information about the Frame hierarchy.

*properties*
  - `frame` <[Page.Frame]]> Frame information for this tree item
  - `childFrames` <array of [Page.FrameTree]> Child frames

#### type: Page.ScriptIdentifier = string

Unique script identifier.

#### type: Page.TransitionType = string

Transition type.

#### type: Page.NavigationEntry = object

Navigation history entry.

*properties*
  - `id` <integer]> Unique id of the navigation history entry
  - `url` <string]> URL of the navigation history entry
  - `userTypedURL` <string]> URL that the user typed in the url bar
  - `title` <string]> Title of the navigation history entry
  - `transitionType` <[Page.TransitionType]]> Transition type

#### type: Page.ScreencastFrameMetadata = object

Screencast frame metadata.

*properties*
  - `offsetTop` <number]> Top offset in DIP
  - `pageScaleFactor` <number]> Page scale factor
  - `deviceWidth` <number]> Device screen width in DIP
  - `deviceHeight` <number]> Device screen height in DIP
  - `scrollOffsetX` <number]> Position of horizontal scroll in CSS pixels
  - `scrollOffsetY` <number]> Position of vertical scroll in CSS pixels
  - `timestamp` <[Network.TimeSinceEpoch]]> Frame swap timestamp

#### type: Page.DialogType = string

Javascript dialog type.

#### type: Page.AppManifestError = object

Error while paring app manifest.

*properties*
  - `message` <string]> Error message
  - `critical` <integer]> If criticial, this is a non-recoverable parse error
  - `line` <integer]> Error line
  - `column` <integer]> Error column

#### type: Page.LayoutViewport = object

Layout viewport position and dimensions.

*properties*
  - `pageX` <integer]> Horizontal offset relative to the document (CSS pixels)
  - `pageY` <integer]> Vertical offset relative to the document (CSS pixels)
  - `clientWidth` <integer]> Width (CSS pixels), excludes scrollbar if present
  - `clientHeight` <integer]> Height (CSS pixels), excludes scrollbar if present

#### type: Page.VisualViewport = object

Visual viewport position, dimensions, and scale.

*properties*
  - `offsetX` <number]> Horizontal offset relative to the layout viewport (CSS pixels)
  - `offsetY` <number]> Vertical offset relative to the layout viewport (CSS pixels)
  - `pageX` <number]> Horizontal offset relative to the document (CSS pixels)
  - `pageY` <number]> Vertical offset relative to the document (CSS pixels)
  - `clientWidth` <number]> Width (CSS pixels), excludes scrollbar if present
  - `clientHeight` <number]> Height (CSS pixels), excludes scrollbar if present
  - `scale` <number]> Scale relative to the ideal viewport (size at width=device-width)

#### type: Page.Viewport = object

Viewport for capturing screenshot.

*properties*
  - `x` <number]> X offset in CSS pixels
  - `y` <number]> Y offset in CSS pixels
  - `width` <number]> Rectangle width in CSS pixels
  - `height` <number]> Rectangle height in CSS pixels
  - `scale` <number]> Page scale factor

#### command: Page.addScriptToEvaluateOnLoad()

Deprecated, please use addScriptToEvaluateOnNewDocument instead.

*parameters*
- `scriptSource` <string]> 

*returns*
- `identifier` <[Page.ScriptIdentifier]]> Identifier of the added script

#### command: Page.addScriptToEvaluateOnNewDocument()

Evaluates given script in every frame upon creation (before loading frame's scripts).

*parameters*
- `source` <string]> 

*returns*
- `identifier` <[Page.ScriptIdentifier]]> Identifier of the added script

#### command: Page.bringToFront()

Brings page to front (activates tab).

#### command: Page.captureScreenshot()

Capture page screenshot.

*parameters*
- `format` <string]> Image compression format (defaults to png)
- `quality` <integer]> Compression quality from range [0..100] (jpeg only)
- `clip` <[Page.Viewport]]> Capture the screenshot of a given region only
- `fromSurface` <boolean]> Capture the screenshot from the surface, rather than the view. Defaults to true

*returns*
- `data` <string]> Base64-encoded image data

#### command: Page.clearDeviceMetricsOverride()

Clears the overriden device metrics.

#### command: Page.clearDeviceOrientationOverride()

Clears the overridden Device Orientation.

#### command: Page.clearGeolocationOverride()

Clears the overriden Geolocation Position and Error.

#### command: Page.createIsolatedWorld()

Creates an isolated world for the given frame.

*parameters*
- `frameId` <[Page.FrameId]]> Id of the frame in which the isolated world should be created
- `worldName` <string]> An optional name which is reported in the Execution Context
- `grantUniveralAccess` <boolean]> Whether or not universal access should be granted to the isolated world. This is a powerful
option, use with caution

*returns*
- `executionContextId` <[Runtime.ExecutionContextId]]> Execution context of the isolated world

#### command: Page.deleteCookie()

Deletes browser cookie with given name, domain and path.

*parameters*
- `cookieName` <string]> Name of the cookie to remove
- `url` <string]> URL to match cooke domain and path

#### command: Page.disable()

Disables page domain notifications.

#### command: Page.enable()

Enables page domain notifications.

#### command: Page.getAppManifest()

*returns*
- `url` <string]> Manifest location
- `errors` <array of [Page.AppManifestError]> 
- `data` <string]> Manifest content

#### command: Page.getCookies()

Returns all browser cookies. Depending on the backend support, will return detailed cookie
information in the `cookies` field.

*returns*
- `cookies` <array of [Network.Cookie]> Array of cookie objects

#### command: Page.getFrameTree()

Returns present frame tree structure.

*returns*
- `frameTree` <[Page.FrameTree]]> Present frame tree structure

#### command: Page.getLayoutMetrics()

Returns metrics relating to the layouting of the page, such as viewport bounds/scale.

*returns*
- `layoutViewport` <[Page.LayoutViewport]]> Metrics relating to the layout viewport
- `visualViewport` <[Page.VisualViewport]]> Metrics relating to the visual viewport
- `contentSize` <[DOM.Rect]]> Size of scrollable area

#### command: Page.getNavigationHistory()

Returns navigation history for the current page.

*returns*
- `currentIndex` <integer]> Index of the current navigation history entry
- `entries` <array of [Page.NavigationEntry]> Array of navigation history entries

#### command: Page.getResourceContent()

Returns content of the given resource.

*parameters*
- `frameId` <[Page.FrameId]]> Frame id to get resource for
- `url` <string]> URL of the resource to get content for

*returns*
- `content` <string]> Resource content
- `base64Encoded` <boolean]> True, if content was served as base64

#### command: Page.getResourceTree()

Returns present frame / resource tree structure.

*returns*
- `frameTree` <[Page.FrameResourceTree]]> Present frame / resource tree structure

#### command: Page.handleJavaScriptDialog()

Accepts or dismisses a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload).

*parameters*
- `accept` <boolean]> Whether to accept or dismiss the dialog
- `promptText` <string]> The text to enter into the dialog prompt before accepting. Used only if this is a prompt
dialog

#### command: Page.navigate()

Navigates current page to the given URL.

*parameters*
- `url` <string]> URL to navigate the page to
- `referrer` <string]> Referrer URL
- `transitionType` <[Page.TransitionType]]> Intended transition type

*returns*
- `frameId` <[Page.FrameId]]> Frame id that has navigated (or failed to navigate)
- `loaderId` <[Network.LoaderId]]> Loader identifier
- `errorText` <string]> User friendly error message, present if and only if navigation has failed

#### command: Page.navigateToHistoryEntry()

Navigates current page to the given history entry.

*parameters*
- `entryId` <integer]> Unique id of the entry to navigate to

#### command: Page.printToPDF()

Print page as PDF.

*parameters*
- `landscape` <boolean]> Paper orientation. Defaults to false
- `displayHeaderFooter` <boolean]> Display header and footer. Defaults to false
- `printBackground` <boolean]> Print background graphics. Defaults to false
- `scale` <number]> Scale of the webpage rendering. Defaults to 1
- `paperWidth` <number]> Paper width in inches. Defaults to 8.5 inches
- `paperHeight` <number]> Paper height in inches. Defaults to 11 inches
- `marginTop` <number]> Top margin in inches. Defaults to 1cm (~0.4 inches)
- `marginBottom` <number]> Bottom margin in inches. Defaults to 1cm (~0.4 inches)
- `marginLeft` <number]> Left margin in inches. Defaults to 1cm (~0.4 inches)
- `marginRight` <number]> Right margin in inches. Defaults to 1cm (~0.4 inches)
- `pageRanges` <string]> Paper ranges to print, e.g., '1-5, 8, 11-13'. Defaults to the empty string, which means
print all pages
- `ignoreInvalidPageRanges` <boolean]> Whether to silently ignore invalid but successfully parsed page ranges, such as '3-2'.
Defaults to false

*returns*
- `data` <string]> Base64-encoded pdf data

#### command: Page.reload()

Reloads given page optionally ignoring the cache.

*parameters*
- `ignoreCache` <boolean]> If true, browser cache is ignored (as if the user pressed Shift+refresh)
- `scriptToEvaluateOnLoad` <string]> If set, the script will be injected into all frames of the inspected page after reload

#### command: Page.removeScriptToEvaluateOnLoad()

Deprecated, please use removeScriptToEvaluateOnNewDocument instead.

*parameters*
- `identifier` <[Page.ScriptIdentifier]]> 

#### command: Page.removeScriptToEvaluateOnNewDocument()

Removes given script from the list.

*parameters*
- `identifier` <[Page.ScriptIdentifier]]> 

#### command: Page.requestAppBanner()

#### command: Page.screencastFrameAck()

Acknowledges that a screencast frame has been received by the frontend.

*parameters*
- `sessionId` <integer]> Frame number

#### command: Page.searchInResource()

Searches for given string in resource content.

*parameters*
- `frameId` <[Page.FrameId]]> Frame id for resource to search in
- `url` <string]> URL of the resource to search in
- `query` <string]> String to search for
- `caseSensitive` <boolean]> If true, search is case sensitive
- `isRegex` <boolean]> If true, treats string parameter as regex

*returns*
- `result` <array of [Debugger.SearchMatch]> List of search matches

#### command: Page.setAdBlockingEnabled()

Enable Chrome's experimental ad filter on all sites.

*parameters*
- `enabled` <boolean]> Whether to block ads

#### command: Page.setAutoAttachToCreatedPages()

Controls whether browser will open a new inspector window for connected pages.

*parameters*
- `autoAttach` <boolean]> If true, browser will open a new inspector window for every page created from this one

#### command: Page.setDeviceMetricsOverride()

Overrides the values of device screen dimensions (window.screen.width, window.screen.height,
window.innerWidth, window.innerHeight, and "device-width"/"device-height"-related CSS media
query results).

*parameters*
- `width` <integer]> Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override
- `height` <integer]> Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override
- `deviceScaleFactor` <number]> Overriding device scale factor value. 0 disables the override
- `mobile` <boolean]> Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text
autosizing and more
- `scale` <number]> Scale to apply to resulting view image
- `screenWidth` <integer]> Overriding screen width value in pixels (minimum 0, maximum 10000000)
- `screenHeight` <integer]> Overriding screen height value in pixels (minimum 0, maximum 10000000)
- `positionX` <integer]> Overriding view X position on screen in pixels (minimum 0, maximum 10000000)
- `positionY` <integer]> Overriding view Y position on screen in pixels (minimum 0, maximum 10000000)
- `dontSetVisibleSize` <boolean]> Do not set visible view size, rely upon explicit setVisibleSize call
- `screenOrientation` <[Emulation.ScreenOrientation]]> Screen orientation override
- `viewport` <[Page.Viewport]]> The viewport dimensions and scale. If not set, the override is cleared

#### command: Page.setDeviceOrientationOverride()

Overrides the Device Orientation.

*parameters*
- `alpha` <number]> Mock alpha
- `beta` <number]> Mock beta
- `gamma` <number]> Mock gamma

#### command: Page.setDocumentContent()

Sets given markup as the document's HTML.

*parameters*
- `frameId` <[Page.FrameId]]> Frame id to set HTML for
- `html` <string]> HTML content to set

#### command: Page.setDownloadBehavior()

Set the behavior when downloading a file.

*parameters*
- `behavior` <string]> Whether to allow all or deny all download requests, or use default Chrome behavior if
available (otherwise deny)
- `downloadPath` <string]> The default path to save downloaded files to. This is requred if behavior is set to 'allow'

#### command: Page.setGeolocationOverride()

Overrides the Geolocation Position or Error. Omitting any of the parameters emulates position
unavailable.

*parameters*
- `latitude` <number]> Mock latitude
- `longitude` <number]> Mock longitude
- `accuracy` <number]> Mock accuracy

#### command: Page.setLifecycleEventsEnabled()

Controls whether page will emit lifecycle events.

*parameters*
- `enabled` <boolean]> If true, starts emitting lifecycle events

#### command: Page.setTouchEmulationEnabled()

Toggles mouse event-based touch event emulation.

*parameters*
- `enabled` <boolean]> Whether the touch event emulation should be enabled
- `configuration` <string]> Touch/gesture events configuration. Default: current platform

#### command: Page.startScreencast()

Starts sending each frame using the `screencastFrame` event.

*parameters*
- `format` <string]> Image compression format
- `quality` <integer]> Compression quality from range [0..100]
- `maxWidth` <integer]> Maximum screenshot width
- `maxHeight` <integer]> Maximum screenshot height
- `everyNthFrame` <integer]> Send every n-th frame

#### command: Page.stopLoading()

Force the page stop all navigations and pending resource fetches.

#### command: Page.stopScreencast()

Stops sending each frame in the `screencastFrame`.

#### event: Page.domContentEventFired

*returns*
- `timestamp` <[Network.MonotonicTime]]> 

#### event: Page.frameAttached

Fired when frame has been attached to its parent.

*returns*
- `frameId` <[Page.FrameId]]> Id of the frame that has been attached
- `parentFrameId` <[Page.FrameId]]> Parent frame identifier
- `stack` <[Runtime.StackTrace]]> JavaScript stack trace of when frame was attached, only set if frame initiated from script

#### event: Page.frameClearedScheduledNavigation

Fired when frame no longer has a scheduled navigation.

*returns*
- `frameId` <[Page.FrameId]]> Id of the frame that has cleared its scheduled navigation

#### event: Page.frameDetached

Fired when frame has been detached from its parent.

*returns*
- `frameId` <[Page.FrameId]]> Id of the frame that has been detached

#### event: Page.frameNavigated

Fired once navigation of the frame has completed. Frame is now associated with the new loader.

*returns*
- `frame` <[Page.Frame]]> Frame object

#### event: Page.frameResized

#### event: Page.frameScheduledNavigation

Fired when frame schedules a potential navigation.

*returns*
- `frameId` <[Page.FrameId]]> Id of the frame that has scheduled a navigation
- `delay` <number]> Delay (in seconds) until the navigation is scheduled to begin. The navigation is not
guaranteed to start
- `reason` <string]> The reason for the navigation
- `url` <string]> The destination URL for the scheduled navigation

#### event: Page.frameStartedLoading

Fired when frame has started loading.

*returns*
- `frameId` <[Page.FrameId]]> Id of the frame that has started loading

#### event: Page.frameStoppedLoading

Fired when frame has stopped loading.

*returns*
- `frameId` <[Page.FrameId]]> Id of the frame that has stopped loading

#### event: Page.interstitialHidden

Fired when interstitial page was hidden

#### event: Page.interstitialShown

Fired when interstitial page was shown

#### event: Page.javascriptDialogClosed

Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) has been
closed.

*returns*
- `result` <boolean]> Whether dialog was confirmed
- `userInput` <string]> User input in case of prompt

#### event: Page.javascriptDialogOpening

Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) is about to
open.

*returns*
- `url` <string]> Frame url
- `message` <string]> Message that will be displayed by the dialog
- `type` <[Page.DialogType]]> Dialog type
- `defaultPrompt` <string]> Default dialog prompt

#### event: Page.lifecycleEvent

Fired for top level page lifecycle events such as navigation, load, paint, etc.

*returns*
- `frameId` <[Page.FrameId]]> Id of the frame
- `loaderId` <[Network.LoaderId]]> Loader identifier. Empty string if the request is fetched from worker
- `name` <string]> 
- `timestamp` <[Network.MonotonicTime]]> 

#### event: Page.loadEventFired

*returns*
- `timestamp` <[Network.MonotonicTime]]> 

#### event: Page.screencastFrame

Compressed image data requested by the `startScreencast`.

*returns*
- `data` <string]> Base64-encoded compressed image
- `metadata` <[Page.ScreencastFrameMetadata]]> Screencast frame metadata
- `sessionId` <integer]> Frame number

#### event: Page.screencastVisibilityChanged

Fired when the page with currently enabled screencast was shown or hidden `.

*returns*
- `visible` <boolean]> True if the page is visible

#### event: Page.windowOpen

Fired when a new window is going to be opened, via window.open(), link click, form submission,
etc.

*returns*
- `url` <string]> The URL for the new window
- `windowName` <string]> Window name
- `windowFeatures` <array of string> An array of enabled window features
- `userGesture` <boolean]> Whether or not it was triggered by user gesture

[Network.LoaderId]: page.md#networkloaderid
[Page.ResourceType]: page.md#pageresourcetype
[Network.TimeSinceEpoch]: page.md#networktimesinceepoch
[Page.Frame]: page.md#pageframe
[Page.FrameResourceTree]: page.md#pageframeresourcetree
[Page.FrameResource]: page.md#pageframeresource
[Page.FrameTree]: page.md#pageframetree
[Page.TransitionType]: page.md#pagetransitiontype
[Page.ScriptIdentifier]: page.md#pagescriptidentifier
[Page.Viewport]: page.md#pageviewport
[Page.FrameId]: page.md#pageframeid
[Runtime.ExecutionContextId]: page.md#runtimeexecutioncontextid
[Page.AppManifestError]: page.md#pageappmanifesterror
[Network.Cookie]: page.md#networkcookie
[Page.LayoutViewport]: page.md#pagelayoutviewport
[Page.VisualViewport]: page.md#pagevisualviewport
[DOM.Rect]: page.md#domrect
[Page.NavigationEntry]: page.md#pagenavigationentry
[Debugger.SearchMatch]: page.md#debuggersearchmatch
[Emulation.ScreenOrientation]: page.md#emulationscreenorientation
[Network.MonotonicTime]: page.md#networkmonotonictime
[Runtime.StackTrace]: page.md#runtimestacktrace
[Page.DialogType]: page.md#pagedialogtype
[Page.ScreencastFrameMetadata]: page.md#pagescreencastframemetadata