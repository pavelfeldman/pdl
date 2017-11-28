
### domain: Inspector

#### command: Inspector.disable()

Disables inspector domain notifications.

#### command: Inspector.enable()

Enables inspector domain notifications.

#### event: Inspector.detached

Fired when remote debugging connection is about to be terminated. Contains detach reason.

*returns*
- `reason` <string]> The reason why connection has been terminated

#### event: Inspector.targetCrashed

Fired when debugging target has crashed
