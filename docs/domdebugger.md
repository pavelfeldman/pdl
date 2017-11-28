
### domain: DOMDebugger

DOM debugging allows setting breakpoints on particular DOM operations and events. JavaScript
execution will stop on these operations as if there was a regular breakpoint set.

#### DOMDebugger.getEventListeners()
- parameters
  - `objectId` <Runtime.RemoteObjectId> Identifier of the object to return listeners for
  - `depth` <[integer]> The maximum depth at which Node children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0
  - `pierce` <[boolean]> Whether or not iframes and shadow roots should be traversed when returning the subtree
(default is false). Reports listeners for all contexts if pierce is enabled
- returns
  - `listeners` array of <EventListener> Array of relevant listeners

Returns event listeners of the given object.

#### DOMDebugger.removeDOMBreakpoint()
- parameters
  - `nodeId` <DOM.NodeId> Identifier of the node to remove breakpoint from
  - `type` <DOMBreakpointType> Type of the breakpoint to remove

Removes DOM breakpoint that was set using `setDOMBreakpoint`.

#### DOMDebugger.removeEventListenerBreakpoint()
- parameters
  - `eventName` <[string]> Event name
  - `targetName` <[string]> EventTarget interface name

Removes breakpoint on particular DOM event.

#### DOMDebugger.removeInstrumentationBreakpoint()
- parameters
  - `eventName` <[string]> Instrumentation name to stop on

Removes breakpoint on particular native event.

#### DOMDebugger.removeXHRBreakpoint()
- parameters
  - `url` <[string]> Resource URL substring

Removes breakpoint from XMLHttpRequest.

#### DOMDebugger.setDOMBreakpoint()
- parameters
  - `nodeId` <DOM.NodeId> Identifier of the node to set breakpoint on
  - `type` <DOMBreakpointType> Type of the operation to stop upon

Sets breakpoint on particular operation with DOM.

#### DOMDebugger.setEventListenerBreakpoint()
- parameters
  - `eventName` <[string]> DOM Event name to stop on (any DOM event will do)
  - `targetName` <[string]> EventTarget interface name to stop on. If equal to `"*"` or not provided, will stop on any
EventTarget

Sets breakpoint on particular DOM event.

#### DOMDebugger.setInstrumentationBreakpoint()
- parameters
  - `eventName` <[string]> Instrumentation name to stop on

Sets breakpoint on particular native event.

#### DOMDebugger.setXHRBreakpoint()
- parameters
  - `url` <[string]> Resource URL substring. All XHRs having this substring in the URL will get stopped upon

Sets breakpoint on XMLHttpRequest.