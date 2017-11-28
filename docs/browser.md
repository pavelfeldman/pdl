
### domain: Browser

The Browser domain defines methods and events for browser managing.

#### Browser.close()

Close browser gracefully.

#### Browser.getVersion()
- returns
  - `protocolVersion` <[string]> Protocol version
  - `product` <[string]> Product name
  - `revision` <[string]> Product revision
  - `userAgent` <[string]> User-Agent
  - `jsVersion` <[string]> V8 version

Returns version information.

#### Browser.getWindowBounds()
- parameters
  - `windowId` <WindowID> Browser window id
- returns
  - `bounds` <Bounds> Bounds information of the window. When window state is 'minimized', the restored window
position and size are returned

Get position and size of the browser window.

#### Browser.getWindowForTarget()
- parameters
  - `targetId` <Target.TargetID> Devtools agent host id
- returns
  - `windowId` <WindowID> Browser window id
  - `bounds` <Bounds> Bounds information of the window. When window state is 'minimized', the restored window
position and size are returned

Get the browser window that contains the devtools target.

#### Browser.setWindowBounds()
- parameters
  - `windowId` <WindowID> Browser window id
  - `bounds` <Bounds> New window bounds. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined
with 'left', 'top', 'width' or 'height'. Leaves unspecified fields unchanged

Set position and/or size of the browser window.