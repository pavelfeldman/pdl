
### domain: Memory

#### Memory.getDOMCounters()
- returns
  - `documents` <[integer]> 
  - `nodes` <[integer]> 
  - `jsEventListeners` <[integer]> 

#### Memory.prepareForLeakDetection()

#### Memory.setPressureNotificationsSuppressed()
- parameters
  - `suppressed` <[boolean]> If true, memory pressure notifications will be suppressed

Enable/disable suppressing memory pressure notifications in all processes.

#### Memory.simulatePressureNotification()
- parameters
  - `level` <PressureLevel> Memory pressure level of the notification

Simulate a memory pressure notification in all processes.