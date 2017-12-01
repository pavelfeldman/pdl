
### domain: Target

Supports additional targets discovery and allows to attach to them.

---


#### command: Target.activateTarget

Activates (focuses) the target.

*parameters*
-  `targetId` <[Target.TargetID]> 

---


#### command: Target.attachToTarget

Attaches to the target with given id.

*parameters*
-  `targetId` <[Target.TargetID]> 

*returns*
-  `sessionId` <[Target.SessionID]> Id assigned to the session

---


#### command: Target.closeTarget

Closes the target. If the target is a page that gets closed too.

*parameters*
-  `targetId` <[Target.TargetID]> 

*returns*
-  `success` <[boolean]> 

---


#### command: Target.createBrowserContext 🌱

Creates a new empty BrowserContext. Similar to an incognito profile but you can have more than
one.

*returns*
-  `browserContextId` <[Target.BrowserContextID]> The id of the context created

---


#### command: Target.createTarget

Creates a new page.

*parameters*
-  `url` <[string]> The initial URL the page will be navigated to
- *optional* `width` <[integer]> Frame width in DIP (headless chrome only)
- *optional* `height` <[integer]> Frame height in DIP (headless chrome only)
- *optional* `browserContextId` <[Target.BrowserContextID]> The browser context to create the page in (headless chrome only)
- *optional* `enableBeginFrameControl` <[boolean]> 🌱 Whether BeginFrames for this target will be controlled via DevTools (headless chrome only,
not supported on MacOS yet, false by default)

*returns*
-  `targetId` <[Target.TargetID]> The id of the page opened

---


#### command: Target.detachFromTarget

Detaches session with given id.

*parameters*
- *optional* `sessionId` <[Target.SessionID]> Session to detach
- *optional* `targetId` <[Target.TargetID]> 🍂 Deprecated

---


#### command: Target.disposeBrowserContext 🌱

Deletes a BrowserContext, will fail of any open page uses it.

*parameters*
-  `browserContextId` <[Target.BrowserContextID]> 

*returns*
-  `success` <[boolean]> 

---


#### command: Target.getTargetInfo 🌱

Returns information about a target.

*parameters*
-  `targetId` <[Target.TargetID]> 

*returns*
-  `targetInfo` <[Target.TargetInfo]> 

---


#### command: Target.getTargets

Retrieves a list of available targets.

*returns*
-  `targetInfos` <array of [Target.TargetInfo]> The list of targets

---


#### command: Target.sendMessageToTarget

Sends protocol message over session with given id.

*parameters*
-  `message` <[string]> 
- *optional* `sessionId` <[Target.SessionID]> Identifier of the session
- *optional* `targetId` <[Target.TargetID]> 🍂 Deprecated

---


#### command: Target.setAttachToFrames 🌱

*parameters*
-  `value` <[boolean]> Whether to attach to frames

---


#### command: Target.setAutoAttach 🌱

Controls whether to automatically attach to new targets which are considered to be related to
this one. When turned on, attaches to all existing related targets as well. When turned off,
automatically detaches from all currently attached targets.

*parameters*
-  `autoAttach` <[boolean]> Whether to auto-attach to related targets
-  `waitForDebuggerOnStart` <[boolean]> Whether to pause new targets when attaching to them. Use `Runtime.runIfWaitingForDebugger`
to run paused targets

---


#### command: Target.setDiscoverTargets

Controls whether to discover available targets and notify via
`targetCreated/targetInfoChanged/targetDestroyed` events.

*parameters*
-  `discover` <[boolean]> Whether to discover available targets

---


#### command: Target.setRemoteLocations 🌱

Enables target discovery for the specified locations, when `setDiscoverTargets` was set to
`true`.

*parameters*
-  `locations` <array of [Target.RemoteLocation]> List of remote locations

---


#### event: Target.attachedToTarget 🌱

Issued when attached to target because of auto-attach or `attachToTarget` command.

*parameters*
-  `sessionId` <[Target.SessionID]> Identifier assigned to the session used to send/receive messages
-  `targetInfo` <[Target.TargetInfo]> 
-  `waitingForDebugger` <[boolean]> 

---


#### event: Target.detachedFromTarget 🌱

Issued when detached from target for any reason (including `detachFromTarget` command). Can be
issued multiple times per target if multiple sessions have been attached to it.

*parameters*
-  `sessionId` <[Target.SessionID]> Detached session identifier
- *optional* `targetId` <[Target.TargetID]> 🍂 Deprecated

---


#### event: Target.receivedMessageFromTarget

Notifies about a new protocol message received from the session (as reported in
`attachedToTarget` event).

*parameters*
-  `sessionId` <[Target.SessionID]> Identifier of a session which sends a message
-  `message` <[string]> 
- *optional* `targetId` <[Target.TargetID]> 🍂 Deprecated

---


#### event: Target.targetCreated

Issued when a possible inspection target is created.

*parameters*
-  `targetInfo` <[Target.TargetInfo]> 

---


#### event: Target.targetDestroyed

Issued when a target is destroyed.

*parameters*
-  `targetId` <[Target.TargetID]> 

---


#### event: Target.targetInfoChanged

Issued when some information about a target has changed. This only happens between
`targetCreated` and `targetDestroyed`.

*parameters*
-  `targetInfo` <[Target.TargetInfo]> 

---


#### type: Target.TargetID

*base type*
- **string**

*accepted by command*
- [Target.activateTarget]
- [Target.attachToTarget]
- [Target.closeTarget]
- [Target.detachFromTarget]
- [Target.getTargetInfo]
- [Browser.getWindowForTarget]
- [Target.sendMessageToTarget]

*property of type*
- [ServiceWorker.ServiceWorkerVersion]
- [Target.TargetInfo]

*returned from command*
- [Target.createTarget]

*parameter in event*
- [Target.detachedFromTarget]
- [Target.receivedMessageFromTarget]
- [Target.targetDestroyed]

---


#### type: Target.SessionID

Unique identifier of attached debugging session.

*base type*
- **string**

*returned from command*
- [Target.attachToTarget]

*accepted by command*
- [Target.detachFromTarget]
- [Target.sendMessageToTarget]

*parameter in event*
- [Target.attachedToTarget]
- [Target.detachedFromTarget]
- [Target.receivedMessageFromTarget]

---


#### type: Target.BrowserContextID

*base type*
- **string**

*returned from command*
- [Target.createBrowserContext]

*accepted by command*
- [Target.createTarget]
- [Target.disposeBrowserContext]

---


#### type: Target.TargetInfo

*base type*
- **object**

*properties*
-  `targetId` <[Target.TargetID]> 
-  `type` <[string]> 
-  `title` <[string]> 
-  `url` <[string]> 
-  `attached` <[boolean]> Whether the target has an attached client
- *optional* `openerId` <[Target.TargetID]> Opener target Id

*returned from command*
- [Target.getTargetInfo]
- [Target.getTargets]

*parameter in event*
- [Target.attachedToTarget]
- [Target.targetCreated]
- [Target.targetInfoChanged]

---


#### type: Target.RemoteLocation

*base type*
- **object**

*properties*
-  `host` <[string]> 
-  `port` <[integer]> 

*accepted by command*
- [Target.setRemoteLocations]

[Target.activateTarget]: target.md#command-targetactivatetarget "Target.activateTarget"
[Target.attachToTarget]: target.md#command-targetattachtotarget "Target.attachToTarget"
[Target.closeTarget]: target.md#command-targetclosetarget "Target.closeTarget"
[Target.detachFromTarget]: target.md#command-targetdetachfromtarget "Target.detachFromTarget"
[Target.getTargetInfo]: target.md#command-targetgettargetinfo "Target.getTargetInfo"
[Browser.getWindowForTarget]: browser.md#command-browsergetwindowfortarget "Browser.getWindowForTarget"
[Target.sendMessageToTarget]: target.md#command-targetsendmessagetotarget "Target.sendMessageToTarget"
[ServiceWorker.ServiceWorkerVersion]: serviceworker.md#type-serviceworkerserviceworkerversion "ServiceWorker.ServiceWorkerVersion"
[Target.TargetInfo]: target.md#type-targettargetinfo "Target.TargetInfo"
[Target.createTarget]: target.md#command-targetcreatetarget "Target.createTarget"
[Target.detachedFromTarget]: target.md#event-targetdetachedfromtarget "Target.detachedFromTarget"
[Target.receivedMessageFromTarget]: target.md#event-targetreceivedmessagefromtarget "Target.receivedMessageFromTarget"
[Target.targetDestroyed]: target.md#event-targettargetdestroyed "Target.targetDestroyed"
[Target.attachToTarget]: target.md#command-targetattachtotarget "Target.attachToTarget"
[Target.detachFromTarget]: target.md#command-targetdetachfromtarget "Target.detachFromTarget"
[Target.sendMessageToTarget]: target.md#command-targetsendmessagetotarget "Target.sendMessageToTarget"
[Target.attachedToTarget]: target.md#event-targetattachedtotarget "Target.attachedToTarget"
[Target.detachedFromTarget]: target.md#event-targetdetachedfromtarget "Target.detachedFromTarget"
[Target.receivedMessageFromTarget]: target.md#event-targetreceivedmessagefromtarget "Target.receivedMessageFromTarget"
[Target.createBrowserContext]: target.md#command-targetcreatebrowsercontext "Target.createBrowserContext"
[Target.createTarget]: target.md#command-targetcreatetarget "Target.createTarget"
[Target.disposeBrowserContext]: target.md#command-targetdisposebrowsercontext "Target.disposeBrowserContext"
[Target.getTargetInfo]: target.md#command-targetgettargetinfo "Target.getTargetInfo"
[Target.getTargets]: target.md#command-targetgettargets "Target.getTargets"
[Target.attachedToTarget]: target.md#event-targetattachedtotarget "Target.attachedToTarget"
[Target.targetCreated]: target.md#event-targettargetcreated "Target.targetCreated"
[Target.targetInfoChanged]: target.md#event-targettargetinfochanged "Target.targetInfoChanged"
[Target.setRemoteLocations]: target.md#command-targetsetremotelocations "Target.setRemoteLocations"
[Target.TargetID]: target.md#type-targettargetid "Target.TargetID"
[Target.TargetID]: target.md#type-targettargetid "Target.TargetID"
[Target.TargetID]: target.md#type-targettargetid "Target.TargetID"
[Target.SessionID]: target.md#type-targetsessionid "Target.SessionID"
[Target.TargetID]: target.md#type-targettargetid "Target.TargetID"
[Target.BrowserContextID]: target.md#type-targetbrowsercontextid "Target.BrowserContextID"
[Target.BrowserContextID]: target.md#type-targetbrowsercontextid "Target.BrowserContextID"
[Target.TargetID]: target.md#type-targettargetid "Target.TargetID"
[Target.SessionID]: target.md#type-targetsessionid "Target.SessionID"
[Target.TargetID]: target.md#type-targettargetid "Target.TargetID"
[Target.BrowserContextID]: target.md#type-targetbrowsercontextid "Target.BrowserContextID"
[Target.TargetID]: target.md#type-targettargetid "Target.TargetID"
[Target.TargetInfo]: target.md#type-targettargetinfo "Target.TargetInfo"
[Target.TargetInfo]: target.md#type-targettargetinfo "Target.TargetInfo"
[Target.SessionID]: target.md#type-targetsessionid "Target.SessionID"
[Target.TargetID]: target.md#type-targettargetid "Target.TargetID"
[Target.RemoteLocation]: target.md#type-targetremotelocation "Target.RemoteLocation"
[Target.SessionID]: target.md#type-targetsessionid "Target.SessionID"
[Target.TargetInfo]: target.md#type-targettargetinfo "Target.TargetInfo"
[Target.SessionID]: target.md#type-targetsessionid "Target.SessionID"
[Target.TargetID]: target.md#type-targettargetid "Target.TargetID"
[Target.SessionID]: target.md#type-targetsessionid "Target.SessionID"
[Target.TargetID]: target.md#type-targettargetid "Target.TargetID"
[Target.TargetInfo]: target.md#type-targettargetinfo "Target.TargetInfo"
[Target.TargetID]: target.md#type-targettargetid "Target.TargetID"
[Target.TargetInfo]: target.md#type-targettargetinfo "Target.TargetInfo"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"