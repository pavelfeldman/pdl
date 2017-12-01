
### domain: Browser

The Browser domain defines methods and events for browser managing.

---


#### command: Browser.close

Close browser gracefully.

---


#### command: Browser.getVersion

Returns version information.

*returns*
-  `protocolVersion` <[string]> Protocol version
-  `product` <[string]> Product name
-  `revision` <[string]> Product revision
-  `userAgent` <[string]> User-Agent
-  `jsVersion` <[string]> V8 version

---


#### command: Browser.getWindowBounds 🌱

Get position and size of the browser window.

*parameters*
-  `windowId` <[Browser.WindowID]> Browser window id

*returns*
-  `bounds` <[Browser.Bounds]> Bounds information of the window. When window state is 'minimized', the restored window
position and size are returned

---


#### command: Browser.getWindowForTarget 🌱

Get the browser window that contains the devtools target.

*parameters*
-  `targetId` <[Target.TargetID]> Devtools agent host id

*returns*
-  `windowId` <[Browser.WindowID]> Browser window id
-  `bounds` <[Browser.Bounds]> Bounds information of the window. When window state is 'minimized', the restored window
position and size are returned

---


#### command: Browser.setWindowBounds 🌱

Set position and/or size of the browser window.

*parameters*
-  `windowId` <[Browser.WindowID]> Browser window id
-  `bounds` <[Browser.Bounds]> New window bounds. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined
with 'left', 'top', 'width' or 'height'. Leaves unspecified fields unchanged

---


#### type: Browser.WindowID

*base type*
- **integer**

*accepted by command*
- [Browser.getWindowBounds]
- [Browser.setWindowBounds]

*returned from command*
- [Browser.getWindowForTarget]

---


#### type: Browser.WindowState

The state of the browser window.

*base type*
- **string**

*property of type*
- [Browser.Bounds]

---


#### type: Browser.Bounds

Browser window bounds information

*base type*
- **object**

*properties*
- *optional* `left` <[integer]> The offset from the left edge of the screen to the window in pixels
- *optional* `top` <[integer]> The offset from the top edge of the screen to the window in pixels
- *optional* `width` <[integer]> The window width in pixels
- *optional* `height` <[integer]> The window height in pixels
- *optional* `windowState` <[Browser.WindowState]> The window state. Default to normal

*returned from command*
- [Browser.getWindowBounds]
- [Browser.getWindowForTarget]

*accepted by command*
- [Browser.setWindowBounds]

[Browser.getWindowBounds]: browser.md#command-browsergetwindowbounds "Browser.getWindowBounds"
[Browser.setWindowBounds]: browser.md#command-browsersetwindowbounds "Browser.setWindowBounds"
[Browser.getWindowForTarget]: browser.md#command-browsergetwindowfortarget "Browser.getWindowForTarget"
[Browser.Bounds]: browser.md#type-browserbounds "Browser.Bounds"
[Browser.getWindowBounds]: browser.md#command-browsergetwindowbounds "Browser.getWindowBounds"
[Browser.getWindowForTarget]: browser.md#command-browsergetwindowfortarget "Browser.getWindowForTarget"
[Browser.setWindowBounds]: browser.md#command-browsersetwindowbounds "Browser.setWindowBounds"
[Browser.WindowState]: browser.md#type-browserwindowstate "Browser.WindowState"
[Browser.WindowID]: browser.md#type-browserwindowid "Browser.WindowID"
[Browser.Bounds]: browser.md#type-browserbounds "Browser.Bounds"
[Target.TargetID]: target.md#type-targettargetid "Target.TargetID"
[Browser.WindowID]: browser.md#type-browserwindowid "Browser.WindowID"
[Browser.Bounds]: browser.md#type-browserbounds "Browser.Bounds"
[Browser.WindowID]: browser.md#type-browserwindowid "Browser.WindowID"
[Browser.Bounds]: browser.md#type-browserbounds "Browser.Bounds"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"