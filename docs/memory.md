
### domain: Memory 🌱


#### type: Memory.PressureLevel = string

Memory pressure level.


#### command: Memory.getDOMCounters()

*returns*
-  `documents` <[integer]> 
-  `nodes` <[integer]> 
-  `jsEventListeners` <[integer]> 


#### command: Memory.prepareForLeakDetection()


#### command: Memory.setPressureNotificationsSuppressed()

Enable/disable suppressing memory pressure notifications in all processes.

*parameters*
-  `suppressed` <[boolean]> If true, memory pressure notifications will be suppressed


#### command: Memory.simulatePressureNotification()

Simulate a memory pressure notification in all processes.

*parameters*
-  `level` <[Memory.PressureLevel]> Memory pressure level of the notification

[Memory.PressureLevel]: memory.md#type-memorypressurelevel--string "Memory.PressureLevel"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"