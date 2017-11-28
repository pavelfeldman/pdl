
### domain: Memory

#### type: Memory.PressureLevel = string

Memory pressure level.

#### command: Memory.getDOMCounters()

*returns*
- `documents` <integer]> 
- `nodes` <integer]> 
- `jsEventListeners` <integer]> 

#### command: Memory.prepareForLeakDetection()

#### command: Memory.setPressureNotificationsSuppressed()

Enable/disable suppressing memory pressure notifications in all processes.

*parameters*
- `suppressed` <boolean]> If true, memory pressure notifications will be suppressed

#### command: Memory.simulatePressureNotification()

Simulate a memory pressure notification in all processes.

*parameters*
- `level` <[Memory.PressureLevel]]> Memory pressure level of the notification

[Memory.PressureLevel]: memory.md#memorypressurelevel