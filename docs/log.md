
### domain: Log

Provides access to log entries.


#### type: Log.LogEntry = object

Log entry.

*properties*
-  `source` <[string]> Log entry source
-  `level` <[string]> Log entry severity
-  `text` <[string]> Logged text
-  `timestamp` <[Runtime.Timestamp]> Timestamp when this entry was added
- *optional* `url` <[string]> URL of the resource if known
- *optional* `lineNumber` <[integer]> Line number in the resource
- *optional* `stackTrace` <[Runtime.StackTrace]> JavaScript stack trace
- *optional* `networkRequestId` <[Network.RequestId]> Identifier of the network request associated with this entry
- *optional* `workerId` <[string]> Identifier of the worker associated with this entry
- *optional* `args` <array of [Runtime.RemoteObject]> Call arguments


#### type: Log.ViolationSetting = object

Violation configuration setting.

*properties*
-  `name` <[string]> Violation type
-  `threshold` <[number]> Time threshold to trigger upon


#### command: Log.clear()

Clears the log.


#### command: Log.disable()

Disables log domain, prevents further log entries from being reported to the client.


#### command: Log.enable()

Enables log domain, sends the entries collected so far to the client by means of the
`entryAdded` notification.


#### command: Log.startViolationsReport()

start violation reporting.

*parameters*
-  `config` <array of [Log.ViolationSetting]> Configuration for violations


#### command: Log.stopViolationsReport()

Stop violation reporting.


#### event: Log.entryAdded

Issued when new message was logged.

*parameters*
-  `entry` <[Log.LogEntry]> The entry

[Runtime.Timestamp]: runtime.md#type-runtimetimestamp--number "Runtime.Timestamp"
[Runtime.StackTrace]: runtime.md#type-runtimestacktrace--object "Runtime.StackTrace"
[Network.RequestId]: network.md#type-networkrequestid--string "Network.RequestId"
[Runtime.RemoteObject]: runtime.md#type-runtimeremoteobject--object "Runtime.RemoteObject"
[Log.ViolationSetting]: log.md#type-logviolationsetting--object "Log.ViolationSetting"
[Log.LogEntry]: log.md#type-loglogentry--object "Log.LogEntry"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"