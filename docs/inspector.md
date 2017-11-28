
### domain: Inspector

#### Inspector.disable()

Disables inspector domain notifications.

#### Inspector.enable()

Enables inspector domain notifications.

#### event: Inspector.detached
- `reason` <[string]> The reason why connection has been terminated

Fired when remote debugging connection is about to be terminated. Contains detach reason.

#### event: Inspector.targetCrashed

Fired when debugging target has crashed