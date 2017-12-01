
### domain: DOMDebugger

DOM debugging allows setting breakpoints on particular DOM operations and events. JavaScript
execution will stop on these operations as if there was a regular breakpoint set.

---


#### command: DOMDebugger.getEventListeners

Returns event listeners of the given object.

*parameters*
-  `objectId` <[Runtime.RemoteObjectId]> Identifier of the object to return listeners for
- *optional* `depth` <[integer]> The maximum depth at which Node children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0
- *optional* `pierce` <[boolean]> Whether or not iframes and shadow roots should be traversed when returning the subtree
(default is false). Reports listeners for all contexts if pierce is enabled

*returns*
-  `listeners` <array of [DOMDebugger.EventListener]> Array of relevant listeners

---


#### command: DOMDebugger.removeDOMBreakpoint

Removes DOM breakpoint that was set using `setDOMBreakpoint`.

*parameters*
-  `nodeId` <[DOM.NodeId]> Identifier of the node to remove breakpoint from
-  `type` <[DOMDebugger.DOMBreakpointType]> Type of the breakpoint to remove

---


#### command: DOMDebugger.removeEventListenerBreakpoint

Removes breakpoint on particular DOM event.

*parameters*
-  `eventName` <[string]> Event name
- *optional* `targetName` <[string]> 🌱 EventTarget interface name

---


#### command: DOMDebugger.removeInstrumentationBreakpoint 🌱

Removes breakpoint on particular native event.

*parameters*
-  `eventName` <[string]> Instrumentation name to stop on

---


#### command: DOMDebugger.removeXHRBreakpoint

Removes breakpoint from XMLHttpRequest.

*parameters*
-  `url` <[string]> Resource URL substring

---


#### command: DOMDebugger.setDOMBreakpoint

Sets breakpoint on particular operation with DOM.

*parameters*
-  `nodeId` <[DOM.NodeId]> Identifier of the node to set breakpoint on
-  `type` <[DOMDebugger.DOMBreakpointType]> Type of the operation to stop upon

---


#### command: DOMDebugger.setEventListenerBreakpoint

Sets breakpoint on particular DOM event.

*parameters*
-  `eventName` <[string]> DOM Event name to stop on (any DOM event will do)
- *optional* `targetName` <[string]> 🌱 EventTarget interface name to stop on. If equal to `"*"` or not provided, will stop on any
EventTarget

---


#### command: DOMDebugger.setInstrumentationBreakpoint 🌱

Sets breakpoint on particular native event.

*parameters*
-  `eventName` <[string]> Instrumentation name to stop on

---


#### command: DOMDebugger.setXHRBreakpoint

Sets breakpoint on XMLHttpRequest.

*parameters*
-  `url` <[string]> Resource URL substring. All XHRs having this substring in the URL will get stopped upon

---


#### type: DOMDebugger.DOMBreakpointType

DOM breakpoint type.

*base type*
- **string**

*accepted by command*
- [DOMDebugger.removeDOMBreakpoint]
- [DOMDebugger.setDOMBreakpoint]

---


#### type: DOMDebugger.EventListener

Object event listener.

*base type*
- **object**

*properties*
-  `type` <[string]> `EventListener`'s type
-  `useCapture` <[boolean]> `EventListener`'s useCapture
-  `passive` <[boolean]> `EventListener`'s passive flag
-  `once` <[boolean]> `EventListener`'s once flag
-  `scriptId` <[Runtime.ScriptId]> Script id of the handler code
-  `lineNumber` <[integer]> Line number in the script (0-based)
-  `columnNumber` <[integer]> Column number in the script (0-based)
- *optional* `handler` <[Runtime.RemoteObject]> Event handler function value
- *optional* `originalHandler` <[Runtime.RemoteObject]> Event original handler function value
- *optional* `backendNodeId` <[DOM.BackendNodeId]> Node the listener is added to (if any)

*returned from command*
- [DOMDebugger.getEventListeners]

[DOMDebugger.removeDOMBreakpoint]: domdebugger.md#command-domdebuggerremovedombreakpoint "DOMDebugger.removeDOMBreakpoint"
[DOMDebugger.setDOMBreakpoint]: domdebugger.md#command-domdebuggersetdombreakpoint "DOMDebugger.setDOMBreakpoint"
[DOMDebugger.getEventListeners]: domdebugger.md#command-domdebuggergeteventlisteners "DOMDebugger.getEventListeners"
[Runtime.ScriptId]: runtime.md#type-runtimescriptid "Runtime.ScriptId"
[Runtime.RemoteObject]: runtime.md#type-runtimeremoteobject "Runtime.RemoteObject"
[DOM.BackendNodeId]: dom.md#type-dombackendnodeid "DOM.BackendNodeId"
[Runtime.RemoteObjectId]: runtime.md#type-runtimeremoteobjectid "Runtime.RemoteObjectId"
[DOMDebugger.EventListener]: domdebugger.md#type-domdebuggereventlistener "DOMDebugger.EventListener"
[DOM.NodeId]: dom.md#type-domnodeid "DOM.NodeId"
[DOMDebugger.DOMBreakpointType]: domdebugger.md#type-domdebuggerdombreakpointtype "DOMDebugger.DOMBreakpointType"
[DOM.NodeId]: dom.md#type-domnodeid "DOM.NodeId"
[DOMDebugger.DOMBreakpointType]: domdebugger.md#type-domdebuggerdombreakpointtype "DOMDebugger.DOMBreakpointType"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"