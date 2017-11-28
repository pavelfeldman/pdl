
### domain: Page

Actions and events related to the inspected page belong to the page domain.

#### Page.addScriptToEvaluateOnLoad()
- parameters
  - `scriptSource` <[string]> 
- returns
  - `identifier` <ScriptIdentifier> Identifier of the added script

Deprecated, please use addScriptToEvaluateOnNewDocument instead.

#### Page.addScriptToEvaluateOnNewDocument()
- parameters
  - `source` <[string]> 
- returns
  - `identifier` <ScriptIdentifier> Identifier of the added script

Evaluates given script in every frame upon creation (before loading frame's scripts).

#### Page.bringToFront()

Brings page to front (activates tab).

#### Page.captureScreenshot()
- parameters
  - `format` <[string]> Image compression format (defaults to png)
  - `quality` <[integer]> Compression quality from range [0..100] (jpeg only)
  - `clip` <Viewport> Capture the screenshot of a given region only
  - `fromSurface` <[boolean]> Capture the screenshot from the surface, rather than the view. Defaults to true
- returns
  - `data` <[string]> Base64-encoded image data

Capture page screenshot.

#### Page.clearDeviceMetricsOverride()

Clears the overriden device metrics.

#### Page.clearDeviceOrientationOverride()

Clears the overridden Device Orientation.

#### Page.clearGeolocationOverride()

Clears the overriden Geolocation Position and Error.

#### Page.createIsolatedWorld()
- parameters
  - `frameId` <FrameId> Id of the frame in which the isolated world should be created
  - `worldName` <[string]> An optional name which is reported in the Execution Context
  - `grantUniveralAccess` <[boolean]> Whether or not universal access should be granted to the isolated world. This is a powerful
option, use with caution
- returns
  - `executionContextId` <Runtime.ExecutionContextId> Execution context of the isolated world

Creates an isolated world for the given frame.

#### Page.deleteCookie()
- parameters
  - `cookieName` <[string]> Name of the cookie to remove
  - `url` <[string]> URL to match cooke domain and path

Deletes browser cookie with given name, domain and path.

#### Page.disable()

Disables page domain notifications.

#### Page.enable()

Enables page domain notifications.

#### Page.getAppManifest()
- returns
  - `url` <[string]> Manifest location
  - `errors` array of <AppManifestError> 
  - `data` <[string]> Manifest content

#### Page.getCookies()
- returns
  - `cookies` array of <Network.Cookie> Array of cookie objects

Returns all browser cookies. Depending on the backend support, will return detailed cookie
information in the `cookies` field.

#### Page.getFrameTree()
- returns
  - `frameTree` <FrameTree> Present frame tree structure

Returns present frame tree structure.

#### Page.getLayoutMetrics()
- returns
  - `layoutViewport` <LayoutViewport> Metrics relating to the layout viewport
  - `visualViewport` <VisualViewport> Metrics relating to the visual viewport
  - `contentSize` <DOM.Rect> Size of scrollable area

Returns metrics relating to the layouting of the page, such as viewport bounds/scale.

#### Page.getNavigationHistory()
- returns
  - `currentIndex` <[integer]> Index of the current navigation history entry
  - `entries` array of <NavigationEntry> Array of navigation history entries

Returns navigation history for the current page.

#### Page.getResourceContent()
- parameters
  - `frameId` <FrameId> Frame id to get resource for
  - `url` <[string]> URL of the resource to get content for
- returns
  - `content` <[string]> Resource content
  - `base64Encoded` <[boolean]> True, if content was served as base64

Returns content of the given resource.

#### Page.getResourceTree()
- returns
  - `frameTree` <FrameResourceTree> Present frame / resource tree structure

Returns present frame / resource tree structure.

#### Page.handleJavaScriptDialog()
- parameters
  - `accept` <[boolean]> Whether to accept or dismiss the dialog
  - `promptText` <[string]> The text to enter into the dialog prompt before accepting. Used only if this is a prompt
dialog

Accepts or dismisses a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload).

#### Page.navigate()
- parameters
  - `url` <[string]> URL to navigate the page to
  - `referrer` <[string]> Referrer URL
  - `transitionType` <TransitionType> Intended transition type
- returns
  - `frameId` <FrameId> Frame id that has navigated (or failed to navigate)
  - `loaderId` <Network.LoaderId> Loader identifier
  - `errorText` <[string]> User friendly error message, present if and only if navigation has failed

Navigates current page to the given URL.

#### Page.navigateToHistoryEntry()
- parameters
  - `entryId` <[integer]> Unique id of the entry to navigate to

Navigates current page to the given history entry.

#### Page.printToPDF()
- parameters
  - `landscape` <[boolean]> Paper orientation. Defaults to false
  - `displayHeaderFooter` <[boolean]> Display header and footer. Defaults to false
  - `printBackground` <[boolean]> Print background graphics. Defaults to false
  - `scale` <[number]> Scale of the webpage rendering. Defaults to 1
  - `paperWidth` <[number]> Paper width in inches. Defaults to 8.5 inches
  - `paperHeight` <[number]> Paper height in inches. Defaults to 11 inches
  - `marginTop` <[number]> Top margin in inches. Defaults to 1cm (~0.4 inches)
  - `marginBottom` <[number]> Bottom margin in inches. Defaults to 1cm (~0.4 inches)
  - `marginLeft` <[number]> Left margin in inches. Defaults to 1cm (~0.4 inches)
  - `marginRight` <[number]> Right margin in inches. Defaults to 1cm (~0.4 inches)
  - `pageRanges` <[string]> Paper ranges to print, e.g., '1-5, 8, 11-13'. Defaults to the empty string, which means
print all pages
  - `ignoreInvalidPageRanges` <[boolean]> Whether to silently ignore invalid but successfully parsed page ranges, such as '3-2'.
Defaults to false
- returns
  - `data` <[string]> Base64-encoded pdf data

Print page as PDF.

#### Page.reload()
- parameters
  - `ignoreCache` <[boolean]> If true, browser cache is ignored (as if the user pressed Shift+refresh)
  - `scriptToEvaluateOnLoad` <[string]> If set, the script will be injected into all frames of the inspected page after reload

Reloads given page optionally ignoring the cache.

#### Page.removeScriptToEvaluateOnLoad()
- parameters
  - `identifier` <ScriptIdentifier> 

Deprecated, please use removeScriptToEvaluateOnNewDocument instead.

#### Page.removeScriptToEvaluateOnNewDocument()
- parameters
  - `identifier` <ScriptIdentifier> 

Removes given script from the list.

#### Page.requestAppBanner()

#### Page.screencastFrameAck()
- parameters
  - `sessionId` <[integer]> Frame number

Acknowledges that a screencast frame has been received by the frontend.

#### Page.searchInResource()
- parameters
  - `frameId` <FrameId> Frame id for resource to search in
  - `url` <[string]> URL of the resource to search in
  - `query` <[string]> String to search for
  - `caseSensitive` <[boolean]> If true, search is case sensitive
  - `isRegex` <[boolean]> If true, treats string parameter as regex
- returns
  - `result` array of <Debugger.SearchMatch> List of search matches

Searches for given string in resource content.

#### Page.setAdBlockingEnabled()
- parameters
  - `enabled` <[boolean]> Whether to block ads

Enable Chrome's experimental ad filter on all sites.

#### Page.setAutoAttachToCreatedPages()
- parameters
  - `autoAttach` <[boolean]> If true, browser will open a new inspector window for every page created from this one

Controls whether browser will open a new inspector window for connected pages.

#### Page.setDeviceMetricsOverride()
- parameters
  - `width` <[integer]> Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override
  - `height` <[integer]> Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override
  - `deviceScaleFactor` <[number]> Overriding device scale factor value. 0 disables the override
  - `mobile` <[boolean]> Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text
autosizing and more
  - `scale` <[number]> Scale to apply to resulting view image
  - `screenWidth` <[integer]> Overriding screen width value in pixels (minimum 0, maximum 10000000)
  - `screenHeight` <[integer]> Overriding screen height value in pixels (minimum 0, maximum 10000000)
  - `positionX` <[integer]> Overriding view X position on screen in pixels (minimum 0, maximum 10000000)
  - `positionY` <[integer]> Overriding view Y position on screen in pixels (minimum 0, maximum 10000000)
  - `dontSetVisibleSize` <[boolean]> Do not set visible view size, rely upon explicit setVisibleSize call
  - `screenOrientation` <Emulation.ScreenOrientation> Screen orientation override
  - `viewport` <Viewport> The viewport dimensions and scale. If not set, the override is cleared

Overrides the values of device screen dimensions (window.screen.width, window.screen.height,
window.innerWidth, window.innerHeight, and "device-width"/"device-height"-related CSS media
query results).

#### Page.setDeviceOrientationOverride()
- parameters
  - `alpha` <[number]> Mock alpha
  - `beta` <[number]> Mock beta
  - `gamma` <[number]> Mock gamma

Overrides the Device Orientation.

#### Page.setDocumentContent()
- parameters
  - `frameId` <FrameId> Frame id to set HTML for
  - `html` <[string]> HTML content to set

Sets given markup as the document's HTML.

#### Page.setDownloadBehavior()
- parameters
  - `behavior` <[string]> Whether to allow all or deny all download requests, or use default Chrome behavior if
available (otherwise deny)
  - `downloadPath` <[string]> The default path to save downloaded files to. This is requred if behavior is set to 'allow'

Set the behavior when downloading a file.

#### Page.setGeolocationOverride()
- parameters
  - `latitude` <[number]> Mock latitude
  - `longitude` <[number]> Mock longitude
  - `accuracy` <[number]> Mock accuracy

Overrides the Geolocation Position or Error. Omitting any of the parameters emulates position
unavailable.

#### Page.setLifecycleEventsEnabled()
- parameters
  - `enabled` <[boolean]> If true, starts emitting lifecycle events

Controls whether page will emit lifecycle events.

#### Page.setTouchEmulationEnabled()
- parameters
  - `enabled` <[boolean]> Whether the touch event emulation should be enabled
  - `configuration` <[string]> Touch/gesture events configuration. Default: current platform

Toggles mouse event-based touch event emulation.

#### Page.startScreencast()
- parameters
  - `format` <[string]> Image compression format
  - `quality` <[integer]> Compression quality from range [0..100]
  - `maxWidth` <[integer]> Maximum screenshot width
  - `maxHeight` <[integer]> Maximum screenshot height
  - `everyNthFrame` <[integer]> Send every n-th frame

Starts sending each frame using the `screencastFrame` event.

#### Page.stopLoading()

Force the page stop all navigations and pending resource fetches.

#### Page.stopScreencast()

Stops sending each frame in the `screencastFrame`.

#### event: Page.domContentEventFired
- `timestamp` <Network.MonotonicTime> 

#### event: Page.frameAttached
- `frameId` <FrameId> Id of the frame that has been attached
- `parentFrameId` <FrameId> Parent frame identifier
- `stack` <Runtime.StackTrace> JavaScript stack trace of when frame was attached, only set if frame initiated from script

Fired when frame has been attached to its parent.

#### event: Page.frameClearedScheduledNavigation
- `frameId` <FrameId> Id of the frame that has cleared its scheduled navigation

Fired when frame no longer has a scheduled navigation.

#### event: Page.frameDetached
- `frameId` <FrameId> Id of the frame that has been detached

Fired when frame has been detached from its parent.

#### event: Page.frameNavigated
- `frame` <Frame> Frame object

Fired once navigation of the frame has completed. Frame is now associated with the new loader.

#### event: Page.frameResized

#### event: Page.frameScheduledNavigation
- `frameId` <FrameId> Id of the frame that has scheduled a navigation
- `delay` <[number]> Delay (in seconds) until the navigation is scheduled to begin. The navigation is not
guaranteed to start
- `reason` <[string]> The reason for the navigation
- `url` <[string]> The destination URL for the scheduled navigation

Fired when frame schedules a potential navigation.

#### event: Page.frameStartedLoading
- `frameId` <FrameId> Id of the frame that has started loading

Fired when frame has started loading.

#### event: Page.frameStoppedLoading
- `frameId` <FrameId> Id of the frame that has stopped loading

Fired when frame has stopped loading.

#### event: Page.interstitialHidden

Fired when interstitial page was hidden

#### event: Page.interstitialShown

Fired when interstitial page was shown

#### event: Page.javascriptDialogClosed
- `result` <[boolean]> Whether dialog was confirmed
- `userInput` <[string]> User input in case of prompt

Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) has been
closed.

#### event: Page.javascriptDialogOpening
- `url` <[string]> Frame url
- `message` <[string]> Message that will be displayed by the dialog
- `type` <DialogType> Dialog type
- `defaultPrompt` <[string]> Default dialog prompt

Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) is about to
open.

#### event: Page.lifecycleEvent
- `frameId` <FrameId> Id of the frame
- `loaderId` <Network.LoaderId> Loader identifier. Empty string if the request is fetched from worker
- `name` <[string]> 
- `timestamp` <Network.MonotonicTime> 

Fired for top level page lifecycle events such as navigation, load, paint, etc.

#### event: Page.loadEventFired
- `timestamp` <Network.MonotonicTime> 

#### event: Page.screencastFrame
- `data` <[string]> Base64-encoded compressed image
- `metadata` <ScreencastFrameMetadata> Screencast frame metadata
- `sessionId` <[integer]> Frame number

Compressed image data requested by the `startScreencast`.

#### event: Page.screencastVisibilityChanged
- `visible` <[boolean]> True if the page is visible

Fired when the page with currently enabled screencast was shown or hidden `.

#### event: Page.windowOpen
- `url` <[string]> The URL for the new window
- `windowName` <[string]> Window name
- `windowFeatures` array of <[string]> An array of enabled window features
- `userGesture` <[boolean]> Whether or not it was triggered by user gesture

Fired when a new window is going to be opened, via window.open(), link click, form submission,
etc.