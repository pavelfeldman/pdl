
### domain: Log

Provides access to log entries.

#### Log.clear()

Clears the log.

#### Log.disable()

Disables log domain, prevents further log entries from being reported to the client.

#### Log.enable()

Enables log domain, sends the entries collected so far to the client by means of the
`entryAdded` notification.

#### Log.startViolationsReport()
- parameters
  - `config` array of <ViolationSetting> Configuration for violations

start violation reporting.

#### Log.stopViolationsReport()

Stop violation reporting.

#### event: Log.entryAdded
- `entry` <LogEntry> The entry

Issued when new message was logged.