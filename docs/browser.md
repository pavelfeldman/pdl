
### domain: Browser

The Browser domain defines methods and events for browser managing.

#### type: Browser.WindowID = integer

#### type: Browser.WindowState = string

The state of the browser window.

#### type: Browser.Bounds = object

Browser window bounds information

*properties*
  - `left` <integer]> The offset from the left edge of the screen to the window in pixels
  - `top` <integer]> The offset from the top edge of the screen to the window in pixels
  - `width` <integer]> The window width in pixels
  - `height` <integer]> The window height in pixels
  - `windowState` <[Browser.WindowState]]> The window state. Default to normal

#### command: Browser.close()

Close browser gracefully.

#### command: Browser.getVersion()

Returns version information.

*returns*
- `protocolVersion` <string]> Protocol version
- `product` <string]> Product name
- `revision` <string]> Product revision
- `userAgent` <string]> User-Agent
- `jsVersion` <string]> V8 version

#### command: Browser.getWindowBounds()

Get position and size of the browser window.

*parameters*
- `windowId` <[Browser.WindowID]]> Browser window id

*returns*
- `bounds` <[Browser.Bounds]]> Bounds information of the window. When window state is 'minimized', the restored window
position and size are returned

#### command: Browser.getWindowForTarget()

Get the browser window that contains the devtools target.

*parameters*
- `targetId` <[Target.TargetID]]> Devtools agent host id

*returns*
- `windowId` <[Browser.WindowID]]> Browser window id
- `bounds` <[Browser.Bounds]]> Bounds information of the window. When window state is 'minimized', the restored window
position and size are returned

#### command: Browser.setWindowBounds()

Set position and/or size of the browser window.

*parameters*
- `windowId` <[Browser.WindowID]]> Browser window id
- `bounds` <[Browser.Bounds]]> New window bounds. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined
with 'left', 'top', 'width' or 'height'. Leaves unspecified fields unchanged

[Browser.WindowState]: browser.md#browserwindowstate
[Browser.WindowID]: browser.md#browserwindowid
[Browser.Bounds]: browser.md#browserbounds
[Target.TargetID]: browser.md#targettargetid