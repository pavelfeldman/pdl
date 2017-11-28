
### domain: HeadlessExperimental

This domain provides experimental commands only supported in headless mode.

#### type: HeadlessExperimental.ScreenshotParams = object

Encoding options for a screenshot.

*properties*
  - `format` <string]> Image compression format (defaults to png)
  - `quality` <integer]> Compression quality from range [0..100] (jpeg only)

#### command: HeadlessExperimental.beginFrame()

Sends a BeginFrame to the target and returns when the frame was completed. Optionally captures a
screenshot from the resulting frame. Requires that the target was created with enabled
BeginFrameControl.

*parameters*
- `frameTime` <[Runtime.Timestamp]]> Timestamp of this BeginFrame (milliseconds since epoch). If not set, the current time will
be used
- `deadline` <[Runtime.Timestamp]]> Deadline of this BeginFrame (milliseconds since epoch). If not set, the deadline will be
calculated from the frameTime and interval
- `interval` <number]> The interval between BeginFrames that is reported to the compositor, in milliseconds.
Defaults to a 60 frames/second interval, i.e. about 16.666 milliseconds
- `screenshot` <[HeadlessExperimental.ScreenshotParams]]> If set, a screenshot of the frame will be captured and returned in the response. Otherwise,
no screenshot will be captured

*returns*
- `hasDamage` <boolean]> Whether the BeginFrame resulted in damage and, thus, a new frame was committed to the
display
- `mainFrameContentUpdated` <boolean]> Whether the main frame submitted a new display frame in response to this BeginFrame
- `screenshotData` <string]> Base64-encoded image data of the screenshot, if one was requested and successfully taken

#### command: HeadlessExperimental.disable()

Disables headless events for the target.

#### command: HeadlessExperimental.enable()

Enables headless events for the target.

#### event: HeadlessExperimental.mainFrameReadyForScreenshots

Issued when the main frame has first submitted a frame to the browser. May only be fired while a
BeginFrame is in flight. Before this event, screenshotting requests may fail.

#### event: HeadlessExperimental.needsBeginFramesChanged

Issued when the target starts or stops needing BeginFrames.

*returns*
- `needsBeginFrames` <boolean]> True if BeginFrames are needed, false otherwise

[Runtime.Timestamp]: headlessexperimental.md#runtimetimestamp
[HeadlessExperimental.ScreenshotParams]: headlessexperimental.md#headlessexperimentalscreenshotparams