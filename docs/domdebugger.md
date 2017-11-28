
### domain: DOMDebugger

DOM debugging allows setting breakpoints on particular DOM operations and events. JavaScript
execution will stop on these operations as if there was a regular breakpoint set.

#### type: DOMDebugger.DOMBreakpointType = string

DOM breakpoint type.

#### type: DOMDebugger.EventListener = object

Object event listener.

*properties*
  - `type` <string]> `EventListener`'s type
  - `useCapture` <boolean]> `EventListener`'s useCapture
  - `passive` <boolean]> `EventListener`'s passive flag
  - `once` <boolean]> `EventListener`'s once flag
  - `scriptId` <[Runtime.ScriptId]]> Script id of the handler code
  - `lineNumber` <integer]> Line number in the script (0-based)
  - `columnNumber` <integer]> Column number in the script (0-based)
  - `handler` <[Runtime.RemoteObject]]> Event handler function value
  - `originalHandler` <[Runtime.RemoteObject]]> Event original handler function value
  - `backendNodeId` <[DOM.BackendNodeId]]> Node the listener is added to (if any)

#### command: DOMDebugger.getEventListeners()

Returns event listeners of the given object.

*parameters*
- `objectId` <[Runtime.RemoteObjectId]]> Identifier of the object to return listeners for
- `depth` <integer]> The maximum depth at which Node children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0
- `pierce` <boolean]> Whether or not iframes and shadow roots should be traversed when returning the subtree
(default is false). Reports listeners for all contexts if pierce is enabled

*returns*
- `listeners` <array of [DOMDebugger.EventListener]> Array of relevant listeners

#### command: DOMDebugger.removeDOMBreakpoint()

Removes DOM breakpoint that was set using `setDOMBreakpoint`.

*parameters*
- `nodeId` <[DOM.NodeId]]> Identifier of the node to remove breakpoint from
- `type` <[DOMDebugger.DOMBreakpointType]]> Type of the breakpoint to remove

#### command: DOMDebugger.removeEventListenerBreakpoint()

Removes breakpoint on particular DOM event.

*parameters*
- `eventName` <string]> Event name
- `targetName` <string]> EventTarget interface name

#### command: DOMDebugger.removeInstrumentationBreakpoint()

Removes breakpoint on particular native event.

*parameters*
- `eventName` <string]> Instrumentation name to stop on

#### command: DOMDebugger.removeXHRBreakpoint()

Removes breakpoint from XMLHttpRequest.

*parameters*
- `url` <string]> Resource URL substring

#### command: DOMDebugger.setDOMBreakpoint()

Sets breakpoint on particular operation with DOM.

*parameters*
- `nodeId` <[DOM.NodeId]]> Identifier of the node to set breakpoint on
- `type` <[DOMDebugger.DOMBreakpointType]]> Type of the operation to stop upon

#### command: DOMDebugger.setEventListenerBreakpoint()

Sets breakpoint on particular DOM event.

*parameters*
- `eventName` <string]> DOM Event name to stop on (any DOM event will do)
- `targetName` <string]> EventTarget interface name to stop on. If equal to `"*"` or not provided, will stop on any
EventTarget

#### command: DOMDebugger.setInstrumentationBreakpoint()

Sets breakpoint on particular native event.

*parameters*
- `eventName` <string]> Instrumentation name to stop on

#### command: DOMDebugger.setXHRBreakpoint()

Sets breakpoint on XMLHttpRequest.

*parameters*
- `url` <string]> Resource URL substring. All XHRs having this substring in the URL will get stopped upon

[Runtime.ScriptId]: domdebugger.md#runtimescriptid
[Runtime.RemoteObject]: domdebugger.md#runtimeremoteobject
[DOM.BackendNodeId]: domdebugger.md#dombackendnodeid
[Runtime.RemoteObjectId]: domdebugger.md#runtimeremoteobjectid
[DOMDebugger.EventListener]: domdebugger.md#domdebuggereventlistener
[DOM.NodeId]: domdebugger.md#domnodeid
[DOMDebugger.DOMBreakpointType]: domdebugger.md#domdebuggerdombreakpointtype