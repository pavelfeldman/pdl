
### domain: Target

Supports additional targets discovery and allows to attach to them.

#### Target.activateTarget()
- parameters
  - `targetId` <TargetID> 

Activates (focuses) the target.

#### Target.attachToTarget()
- parameters
  - `targetId` <TargetID> 
- returns
  - `sessionId` <SessionID> Id assigned to the session

Attaches to the target with given id.

#### Target.closeTarget()
- parameters
  - `targetId` <TargetID> 
- returns
  - `success` <[boolean]> 

Closes the target. If the target is a page that gets closed too.

#### Target.createBrowserContext()
- returns
  - `browserContextId` <BrowserContextID> The id of the context created

Creates a new empty BrowserContext. Similar to an incognito profile but you can have more than
one.

#### Target.createTarget()
- parameters
  - `url` <[string]> The initial URL the page will be navigated to
  - `width` <[integer]> Frame width in DIP (headless chrome only)
  - `height` <[integer]> Frame height in DIP (headless chrome only)
  - `browserContextId` <BrowserContextID> The browser context to create the page in (headless chrome only)
  - `enableBeginFrameControl` <[boolean]> Whether BeginFrames for this target will be controlled via DevTools (headless chrome only,
not supported on MacOS yet, false by default)
- returns
  - `targetId` <TargetID> The id of the page opened

Creates a new page.

#### Target.detachFromTarget()
- parameters
  - `sessionId` <SessionID> Session to detach
  - `targetId` <TargetID> Deprecated

Detaches session with given id.

#### Target.disposeBrowserContext()
- parameters
  - `browserContextId` <BrowserContextID> 
- returns
  - `success` <[boolean]> 

Deletes a BrowserContext, will fail of any open page uses it.

#### Target.getTargetInfo()
- parameters
  - `targetId` <TargetID> 
- returns
  - `targetInfo` <TargetInfo> 

Returns information about a target.

#### Target.getTargets()
- returns
  - `targetInfos` array of <TargetInfo> The list of targets

Retrieves a list of available targets.

#### Target.sendMessageToTarget()
- parameters
  - `message` <[string]> 
  - `sessionId` <SessionID> Identifier of the session
  - `targetId` <TargetID> Deprecated

Sends protocol message over session with given id.

#### Target.setAttachToFrames()
- parameters
  - `value` <[boolean]> Whether to attach to frames

#### Target.setAutoAttach()
- parameters
  - `autoAttach` <[boolean]> Whether to auto-attach to related targets
  - `waitForDebuggerOnStart` <[boolean]> Whether to pause new targets when attaching to them. Use `Runtime.runIfWaitingForDebugger`
to run paused targets

Controls whether to automatically attach to new targets which are considered to be related to
this one. When turned on, attaches to all existing related targets as well. When turned off,
automatically detaches from all currently attached targets.

#### Target.setDiscoverTargets()
- parameters
  - `discover` <[boolean]> Whether to discover available targets

Controls whether to discover available targets and notify via
`targetCreated/targetInfoChanged/targetDestroyed` events.

#### Target.setRemoteLocations()
- parameters
  - `locations` array of <RemoteLocation> List of remote locations

Enables target discovery for the specified locations, when `setDiscoverTargets` was set to
`true`.

#### event: Target.attachedToTarget
- `sessionId` <SessionID> Identifier assigned to the session used to send/receive messages
- `targetInfo` <TargetInfo> 
- `waitingForDebugger` <[boolean]> 

Issued when attached to target because of auto-attach or `attachToTarget` command.

#### event: Target.detachedFromTarget
- `sessionId` <SessionID> Detached session identifier
- `targetId` <TargetID> Deprecated

Issued when detached from target for any reason (including `detachFromTarget` command). Can be
issued multiple times per target if multiple sessions have been attached to it.

#### event: Target.receivedMessageFromTarget
- `sessionId` <SessionID> Identifier of a session which sends a message
- `message` <[string]> 
- `targetId` <TargetID> Deprecated

Notifies about a new protocol message received from the session (as reported in
`attachedToTarget` event).

#### event: Target.targetCreated
- `targetInfo` <TargetInfo> 

Issued when a possible inspection target is created.

#### event: Target.targetDestroyed
- `targetId` <TargetID> 

Issued when a target is destroyed.

#### event: Target.targetInfoChanged
- `targetInfo` <TargetInfo> 

Issued when some information about a target has changed. This only happens between
`targetCreated` and `targetDestroyed`.