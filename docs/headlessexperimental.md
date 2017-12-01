
### domain: HeadlessExperimental 🌱

This domain provides experimental commands only supported in headless mode.

---


#### command: HeadlessExperimental.beginFrame

Sends a BeginFrame to the target and returns when the frame was completed. Optionally captures a
screenshot from the resulting frame. Requires that the target was created with enabled
BeginFrameControl.

*parameters*
- *optional* `frameTime` <[Runtime.Timestamp]> Timestamp of this BeginFrame (milliseconds since epoch). If not set, the current time will
be used
- *optional* `deadline` <[Runtime.Timestamp]> Deadline of this BeginFrame (milliseconds since epoch). If not set, the deadline will be
calculated from the frameTime and interval
- *optional* `interval` <[number]> The interval between BeginFrames that is reported to the compositor, in milliseconds.
Defaults to a 60 frames/second interval, i.e. about 16.666 milliseconds
- *optional* `screenshot` <[HeadlessExperimental.ScreenshotParams]> If set, a screenshot of the frame will be captured and returned in the response. Otherwise,
no screenshot will be captured

*returns*
-  `hasDamage` <[boolean]> Whether the BeginFrame resulted in damage and, thus, a new frame was committed to the
display
-  `mainFrameContentUpdated` <[boolean]> Whether the main frame submitted a new display frame in response to this BeginFrame
- *optional* `screenshotData` <[string]> Base64-encoded image data of the screenshot, if one was requested and successfully taken

---


#### command: HeadlessExperimental.disable

Disables headless events for the target.

---


#### command: HeadlessExperimental.enable

Enables headless events for the target.

---


#### event: HeadlessExperimental.mainFrameReadyForScreenshots

Issued when the main frame has first submitted a frame to the browser. May only be fired while a
BeginFrame is in flight. Before this event, screenshotting requests may fail.

---


#### event: HeadlessExperimental.needsBeginFramesChanged

Issued when the target starts or stops needing BeginFrames.

*parameters*
-  `needsBeginFrames` <[boolean]> True if BeginFrames are needed, false otherwise

---


#### type: HeadlessExperimental.ScreenshotParams

Encoding options for a screenshot.

*base type*
- **object**

*properties*
- *optional* `format` <[string]> Image compression format (defaults to png)
- *optional* `quality` <[integer]> Compression quality from range [0..100] (jpeg only)

*accepted by command*
- [HeadlessExperimental.beginFrame]

[HeadlessExperimental.beginFrame]: headlessexperimental.md#command-headlessexperimentalbeginframe "HeadlessExperimental.beginFrame"
[Runtime.Timestamp]: runtime.md#type-runtimetimestamp "Runtime.Timestamp"
[HeadlessExperimental.ScreenshotParams]: headlessexperimental.md#type-headlessexperimentalscreenshotparams "HeadlessExperimental.ScreenshotParams"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"