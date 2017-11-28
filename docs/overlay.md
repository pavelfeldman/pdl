
### domain: Overlay

This domain provides various functionality related to drawing atop the inspected page.

#### Overlay.disable()

Disables domain notifications.

#### Overlay.enable()

Enables domain notifications.

#### Overlay.getHighlightObjectForTest()
- parameters
  - `nodeId` <DOM.NodeId> Id of the node to get highlight object for
- returns
  - `highlight` <[object]> Highlight data for the node

For testing.

#### Overlay.hideHighlight()

Hides any highlight.

#### Overlay.highlightFrame()
- parameters
  - `frameId` <Page.FrameId> Identifier of the frame to highlight
  - `contentColor` <DOM.RGBA> The content box highlight fill color (default: transparent)
  - `contentOutlineColor` <DOM.RGBA> The content box highlight outline color (default: transparent)

Highlights owner element of the frame with given id.

#### Overlay.highlightNode()
- parameters
  - `highlightConfig` <HighlightConfig> A descriptor for the highlight appearance
  - `nodeId` <DOM.NodeId> Identifier of the node to highlight
  - `backendNodeId` <DOM.BackendNodeId> Identifier of the backend node to highlight
  - `objectId` <Runtime.RemoteObjectId> JavaScript object id of the node to be highlighted

Highlights DOM node with given id or with the given JavaScript object wrapper. Either nodeId or
objectId must be specified.

#### Overlay.highlightQuad()
- parameters
  - `quad` <DOM.Quad> Quad to highlight
  - `color` <DOM.RGBA> The highlight fill color (default: transparent)
  - `outlineColor` <DOM.RGBA> The highlight outline color (default: transparent)

Highlights given quad. Coordinates are absolute with respect to the main frame viewport.

#### Overlay.highlightRect()
- parameters
  - `x` <[integer]> X coordinate
  - `y` <[integer]> Y coordinate
  - `width` <[integer]> Rectangle width
  - `height` <[integer]> Rectangle height
  - `color` <DOM.RGBA> The highlight fill color (default: transparent)
  - `outlineColor` <DOM.RGBA> The highlight outline color (default: transparent)

Highlights given rectangle. Coordinates are absolute with respect to the main frame viewport.

#### Overlay.setInspectMode()
- parameters
  - `mode` <InspectMode> Set an inspection mode
  - `highlightConfig` <HighlightConfig> A descriptor for the highlight appearance of hovered-over nodes. May be omitted if `enabled
== false`

Enters the 'inspect' mode. In this mode, elements that user is hovering over are highlighted.
Backend then generates 'inspectNodeRequested' event upon element selection.

#### Overlay.setPausedInDebuggerMessage()
- parameters
  - `message` <[string]> The message to display, also triggers resume and step over controls

#### Overlay.setShowDebugBorders()
- parameters
  - `show` <[boolean]> True for showing debug borders

Requests that backend shows debug borders on layers

#### Overlay.setShowFPSCounter()
- parameters
  - `show` <[boolean]> True for showing the FPS counter

Requests that backend shows the FPS counter

#### Overlay.setShowPaintRects()
- parameters
  - `result` <[boolean]> True for showing paint rectangles

Requests that backend shows paint rectangles

#### Overlay.setShowScrollBottleneckRects()
- parameters
  - `show` <[boolean]> True for showing scroll bottleneck rects

Requests that backend shows scroll bottleneck rects

#### Overlay.setShowViewportSizeOnResize()
- parameters
  - `show` <[boolean]> Whether to paint size or not

Paints viewport size upon main frame resize.

#### Overlay.setSuspended()
- parameters
  - `suspended` <[boolean]> Whether overlay should be suspended and not consume any resources until resumed

#### event: Overlay.inspectNodeRequested
- `backendNodeId` <DOM.BackendNodeId> Id of the node to inspect

Fired when the node should be inspected. This happens after call to `setInspectMode` or when
user manually inspects an element.

#### event: Overlay.nodeHighlightRequested
- `nodeId` <DOM.NodeId> 

Fired when the node should be highlighted. This happens after call to `setInspectMode`.

#### event: Overlay.screenshotRequested
- `viewport` <Page.Viewport> Viewport to capture, in CSS

Fired when user asks to capture screenshot of some area on the page.