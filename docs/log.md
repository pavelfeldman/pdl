
### domain: Log

Provides access to log entries.

#### type: Log.LogEntry = object

Log entry.

*properties*
  - `source` <string]> Log entry source
  - `level` <string]> Log entry severity
  - `text` <string]> Logged text
  - `timestamp` <[Runtime.Timestamp]]> Timestamp when this entry was added
  - `url` <string]> URL of the resource if known
  - `lineNumber` <integer]> Line number in the resource
  - `stackTrace` <[Runtime.StackTrace]]> JavaScript stack trace
  - `networkRequestId` <[Network.RequestId]]> Identifier of the network request associated with this entry
  - `workerId` <string]> Identifier of the worker associated with this entry
  - `args` <array of [Runtime.RemoteObject]> Call arguments

#### type: Log.ViolationSetting = object

Violation configuration setting.

*properties*
  - `name` <string]> Violation type
  - `threshold` <number]> Time threshold to trigger upon

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
- `config` <array of [Log.ViolationSetting]> Configuration for violations

#### command: Log.stopViolationsReport()

Stop violation reporting.

#### event: Log.entryAdded

Issued when new message was logged.

*returns*
- `entry` <[Log.LogEntry]]> The entry

[Runtime.Timestamp]: log.md#runtimetimestamp
[Runtime.StackTrace]: log.md#runtimestacktrace
[Network.RequestId]: log.md#networkrequestid
[Runtime.RemoteObject]: log.md#runtimeremoteobject
[Log.ViolationSetting]: log.md#logviolationsetting
[Log.LogEntry]: log.md#loglogentry