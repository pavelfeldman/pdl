
### domain: Emulation

This domain emulates different environments for the page.

---


#### command: Emulation.canEmulate

Tells whether emulation is supported.

*returns*
-  `result` <[boolean]> True if emulation is supported

---


#### command: Emulation.clearDeviceMetricsOverride

Clears the overriden device metrics.

---


#### command: Emulation.clearGeolocationOverride

Clears the overriden Geolocation Position and Error.

---


#### command: Emulation.resetPageScaleFactor 🌱

Requests that page scale factor is reset to initial values.

---


#### command: Emulation.setCPUThrottlingRate 🌱

Enables CPU throttling to emulate slow CPUs.

*parameters*
-  `rate` <[number]> Throttling rate as a slowdown factor (1 is no throttle, 2 is 2x slowdown, etc)

---


#### command: Emulation.setDefaultBackgroundColorOverride

Sets or clears an override of the default background color of the frame. This override is used
if the content does not specify one.

*parameters*
- *optional* `color` <[DOM.RGBA]> RGBA of the default background color. If not specified, any existing override will be
cleared

---


#### command: Emulation.setDeviceMetricsOverride

Overrides the values of device screen dimensions (window.screen.width, window.screen.height,
window.innerWidth, window.innerHeight, and "device-width"/"device-height"-related CSS media
query results).

*parameters*
-  `width` <[integer]> Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override
-  `height` <[integer]> Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override
-  `deviceScaleFactor` <[number]> Overriding device scale factor value. 0 disables the override
-  `mobile` <[boolean]> Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text
autosizing and more
- *optional* `scale` <[number]> 🌱 Scale to apply to resulting view image
- *optional* `screenWidth` <[integer]> 🌱 Overriding screen width value in pixels (minimum 0, maximum 10000000)
- *optional* `screenHeight` <[integer]> 🌱 Overriding screen height value in pixels (minimum 0, maximum 10000000)
- *optional* `positionX` <[integer]> 🌱 Overriding view X position on screen in pixels (minimum 0, maximum 10000000)
- *optional* `positionY` <[integer]> 🌱 Overriding view Y position on screen in pixels (minimum 0, maximum 10000000)
- *optional* `dontSetVisibleSize` <[boolean]> 🌱 Do not set visible view size, rely upon explicit setVisibleSize call
- *optional* `screenOrientation` <[Emulation.ScreenOrientation]> Screen orientation override
- *optional* `viewport` <[Page.Viewport]> 🌱 If set, the visible area of the page will be overridden to this viewport. This viewport
change is not observed by the page, e.g. viewport-relative elements do not change positions

---


#### command: Emulation.setEmitTouchEventsForMouse 🌱

*parameters*
-  `enabled` <[boolean]> Whether touch emulation based on mouse input should be enabled
- *optional* `configuration` <[string]> Touch/gesture events configuration. Default: current platform

---


#### command: Emulation.setEmulatedMedia

Emulates the given media for CSS media queries.

*parameters*
-  `media` <[string]> Media type to emulate. Empty string disables the override

---


#### command: Emulation.setGeolocationOverride

Overrides the Geolocation Position or Error. Omitting any of the parameters emulates position
unavailable.

*parameters*
- *optional* `latitude` <[number]> Mock latitude
- *optional* `longitude` <[number]> Mock longitude
- *optional* `accuracy` <[number]> Mock accuracy

---


#### command: Emulation.setNavigatorOverrides 🌱

Overrides value returned by the javascript navigator object.

*parameters*
-  `platform` <[string]> The platform navigator.platform should return

---


#### command: Emulation.setPageScaleFactor 🌱

Sets a specified page scale factor.

*parameters*
-  `pageScaleFactor` <[number]> Page scale factor

---


#### command: Emulation.setScriptExecutionDisabled

Switches script execution in the page.

*parameters*
-  `value` <[boolean]> Whether script execution should be disabled in the page

---


#### command: Emulation.setTouchEmulationEnabled

Enables touch on platforms which do not support them.

*parameters*
-  `enabled` <[boolean]> Whether the touch event emulation should be enabled
- *optional* `maxTouchPoints` <[integer]> Maximum touch points supported. Defaults to one

---


#### command: Emulation.setVirtualTimePolicy 🌱

Turns on virtual time for all frames (replacing real-time with a synthetic time source) and sets
the current virtual time policy.  Note this supersedes any previous time budget.

*parameters*
-  `policy` <[Emulation.VirtualTimePolicy]> 
- *optional* `budget` <[number]> If set, after this many virtual milliseconds have elapsed virtual time will be paused and a
virtualTimeBudgetExpired event is sent
- *optional* `maxVirtualTimeTaskStarvationCount` <[integer]> If set this specifies the maximum number of tasks that can be run before virtual is forced
forwards to prevent deadlock

*returns*
-  `virtualTimeBase` <[Runtime.Timestamp]> Absolute timestamp at which virtual time was first enabled (milliseconds since epoch)

---


#### command: Emulation.setVisibleSize 🌱 🍂

Resizes the frame/viewport of the page. Note that this does not affect the frame's container
(e.g. browser window). Can be used to produce screenshots of the specified size. Not supported
on Android.

*parameters*
-  `width` <[integer]> Frame width (DIP)
-  `height` <[integer]> Frame height (DIP)

---


#### event: Emulation.virtualTimeAdvanced 🌱

Notification sent after the virtual time has advanced.

*parameters*
-  `virtualTimeElapsed` <[number]> The amount of virtual time that has elapsed in milliseconds since virtual time was first
enabled

---


#### event: Emulation.virtualTimeBudgetExpired 🌱

Notification sent after the virtual time budget for the current VirtualTimePolicy has run out.

---


#### event: Emulation.virtualTimePaused 🌱

Notification sent after the virtual time has paused.

*parameters*
-  `virtualTimeElapsed` <[number]> The amount of virtual time that has elapsed in milliseconds since virtual time was first
enabled

---


#### type: Emulation.ScreenOrientation

Screen orientation.

*base type*
- **object**

*properties*
-  `type` <[string]> Orientation type
-  `angle` <[integer]> Orientation angle

*accepted by command*
- [Emulation.setDeviceMetricsOverride]
- [Page.setDeviceMetricsOverride]

---


#### type: Emulation.VirtualTimePolicy

advance: If the scheduler runs out of immediate work, the virtual time base may fast forward to
allow the next delayed task (if any) to run; pause: The virtual time base may not advance;
pauseIfNetworkFetchesPending: The virtual time base may not advance if there are any pending
resource fetches.

*base type*
- **string**

*accepted by command*
- [Emulation.setVirtualTimePolicy]

[Emulation.setDeviceMetricsOverride]: emulation.md#command-emulationsetdevicemetricsoverride "Emulation.setDeviceMetricsOverride"
[Page.setDeviceMetricsOverride]: page.md#command-pagesetdevicemetricsoverride "Page.setDeviceMetricsOverride"
[Emulation.setVirtualTimePolicy]: emulation.md#command-emulationsetvirtualtimepolicy "Emulation.setVirtualTimePolicy"
[DOM.RGBA]: dom.md#type-domrgba "DOM.RGBA"
[Emulation.ScreenOrientation]: emulation.md#type-emulationscreenorientation "Emulation.ScreenOrientation"
[Page.Viewport]: page.md#type-pageviewport "Page.Viewport"
[Emulation.VirtualTimePolicy]: emulation.md#type-emulationvirtualtimepolicy "Emulation.VirtualTimePolicy"
[Runtime.Timestamp]: runtime.md#type-runtimetimestamp "Runtime.Timestamp"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"