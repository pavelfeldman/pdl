
### domain: Emulation

This domain emulates different environments for the page.

#### Emulation.canEmulate()
- returns
  - `result` <[boolean]> True if emulation is supported

Tells whether emulation is supported.

#### Emulation.clearDeviceMetricsOverride()

Clears the overriden device metrics.

#### Emulation.clearGeolocationOverride()

Clears the overriden Geolocation Position and Error.

#### Emulation.resetPageScaleFactor()

Requests that page scale factor is reset to initial values.

#### Emulation.setCPUThrottlingRate()
- parameters
  - `rate` <[number]> Throttling rate as a slowdown factor (1 is no throttle, 2 is 2x slowdown, etc)

Enables CPU throttling to emulate slow CPUs.

#### Emulation.setDefaultBackgroundColorOverride()
- parameters
  - `color` <DOM.RGBA> RGBA of the default background color. If not specified, any existing override will be
cleared

Sets or clears an override of the default background color of the frame. This override is used
if the content does not specify one.

#### Emulation.setDeviceMetricsOverride()
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
  - `screenOrientation` <ScreenOrientation> Screen orientation override
  - `viewport` <Page.Viewport> If set, the visible area of the page will be overridden to this viewport. This viewport
change is not observed by the page, e.g. viewport-relative elements do not change positions

Overrides the values of device screen dimensions (window.screen.width, window.screen.height,
window.innerWidth, window.innerHeight, and "device-width"/"device-height"-related CSS media
query results).

#### Emulation.setEmitTouchEventsForMouse()
- parameters
  - `enabled` <[boolean]> Whether touch emulation based on mouse input should be enabled
  - `configuration` <[string]> Touch/gesture events configuration. Default: current platform

#### Emulation.setEmulatedMedia()
- parameters
  - `media` <[string]> Media type to emulate. Empty string disables the override

Emulates the given media for CSS media queries.

#### Emulation.setGeolocationOverride()
- parameters
  - `latitude` <[number]> Mock latitude
  - `longitude` <[number]> Mock longitude
  - `accuracy` <[number]> Mock accuracy

Overrides the Geolocation Position or Error. Omitting any of the parameters emulates position
unavailable.

#### Emulation.setNavigatorOverrides()
- parameters
  - `platform` <[string]> The platform navigator.platform should return

Overrides value returned by the javascript navigator object.

#### Emulation.setPageScaleFactor()
- parameters
  - `pageScaleFactor` <[number]> Page scale factor

Sets a specified page scale factor.

#### Emulation.setScriptExecutionDisabled()
- parameters
  - `value` <[boolean]> Whether script execution should be disabled in the page

Switches script execution in the page.

#### Emulation.setTouchEmulationEnabled()
- parameters
  - `enabled` <[boolean]> Whether the touch event emulation should be enabled
  - `maxTouchPoints` <[integer]> Maximum touch points supported. Defaults to one

Enables touch on platforms which do not support them.

#### Emulation.setVirtualTimePolicy()
- parameters
  - `policy` <VirtualTimePolicy> 
  - `budget` <[number]> If set, after this many virtual milliseconds have elapsed virtual time will be paused and a
virtualTimeBudgetExpired event is sent
  - `maxVirtualTimeTaskStarvationCount` <[integer]> If set this specifies the maximum number of tasks that can be run before virtual is forced
forwards to prevent deadlock
- returns
  - `virtualTimeBase` <Runtime.Timestamp> Absolute timestamp at which virtual time was first enabled (milliseconds since epoch)

Turns on virtual time for all frames (replacing real-time with a synthetic time source) and sets
the current virtual time policy.  Note this supersedes any previous time budget.

#### Emulation.setVisibleSize()
- parameters
  - `width` <[integer]> Frame width (DIP)
  - `height` <[integer]> Frame height (DIP)

Resizes the frame/viewport of the page. Note that this does not affect the frame's container
(e.g. browser window). Can be used to produce screenshots of the specified size. Not supported
on Android.

#### event: Emulation.virtualTimeAdvanced
- `virtualTimeElapsed` <[number]> The amount of virtual time that has elapsed in milliseconds since virtual time was first
enabled

Notification sent after the virtual time has advanced.

#### event: Emulation.virtualTimeBudgetExpired

Notification sent after the virtual time budget for the current VirtualTimePolicy has run out.

#### event: Emulation.virtualTimePaused
- `virtualTimeElapsed` <[number]> The amount of virtual time that has elapsed in milliseconds since virtual time was first
enabled

Notification sent after the virtual time has paused.