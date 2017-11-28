
### domain: Overlay

This domain provides various functionality related to drawing atop the inspected page.

#### type: Overlay.HighlightConfig = object

Configuration data for the highlighting of page elements.

*properties*
  - `showInfo` <boolean]> Whether the node info tooltip should be shown (default: false)
  - `showRulers` <boolean]> Whether the rulers should be shown (default: false)
  - `showExtensionLines` <boolean]> Whether the extension lines from node to the rulers should be shown (default: false)
  - `displayAsMaterial` <boolean]> 
  - `contentColor` <[DOM.RGBA]]> The content box highlight fill color (default: transparent)
  - `paddingColor` <[DOM.RGBA]]> The padding highlight fill color (default: transparent)
  - `borderColor` <[DOM.RGBA]]> The border highlight fill color (default: transparent)
  - `marginColor` <[DOM.RGBA]]> The margin highlight fill color (default: transparent)
  - `eventTargetColor` <[DOM.RGBA]]> The event target element highlight fill color (default: transparent)
  - `shapeColor` <[DOM.RGBA]]> The shape outside fill color (default: transparent)
  - `shapeMarginColor` <[DOM.RGBA]]> The shape margin fill color (default: transparent)
  - `selectorList` <string]> Selectors to highlight relevant nodes
  - `cssGridColor` <[DOM.RGBA]]> The grid layout color (default: transparent)

#### type: Overlay.InspectMode = string

#### command: Overlay.disable()

Disables domain notifications.

#### command: Overlay.enable()

Enables domain notifications.

#### command: Overlay.getHighlightObjectForTest()

For testing.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node to get highlight object for

*returns*
- `highlight` <object]> Highlight data for the node

#### command: Overlay.hideHighlight()

Hides any highlight.

#### command: Overlay.highlightFrame()

Highlights owner element of the frame with given id.

*parameters*
- `frameId` <[Page.FrameId]]> Identifier of the frame to highlight
- `contentColor` <[DOM.RGBA]]> The content box highlight fill color (default: transparent)
- `contentOutlineColor` <[DOM.RGBA]]> The content box highlight outline color (default: transparent)

#### command: Overlay.highlightNode()

Highlights DOM node with given id or with the given JavaScript object wrapper. Either nodeId or
objectId must be specified.

*parameters*
- `highlightConfig` <[Overlay.HighlightConfig]]> A descriptor for the highlight appearance
- `nodeId` <[DOM.NodeId]]> Identifier of the node to highlight
- `backendNodeId` <[DOM.BackendNodeId]]> Identifier of the backend node to highlight
- `objectId` <[Runtime.RemoteObjectId]]> JavaScript object id of the node to be highlighted

#### command: Overlay.highlightQuad()

Highlights given quad. Coordinates are absolute with respect to the main frame viewport.

*parameters*
- `quad` <[DOM.Quad]]> Quad to highlight
- `color` <[DOM.RGBA]]> The highlight fill color (default: transparent)
- `outlineColor` <[DOM.RGBA]]> The highlight outline color (default: transparent)

#### command: Overlay.highlightRect()

Highlights given rectangle. Coordinates are absolute with respect to the main frame viewport.

*parameters*
- `x` <integer]> X coordinate
- `y` <integer]> Y coordinate
- `width` <integer]> Rectangle width
- `height` <integer]> Rectangle height
- `color` <[DOM.RGBA]]> The highlight fill color (default: transparent)
- `outlineColor` <[DOM.RGBA]]> The highlight outline color (default: transparent)

#### command: Overlay.setInspectMode()

Enters the 'inspect' mode. In this mode, elements that user is hovering over are highlighted.
Backend then generates 'inspectNodeRequested' event upon element selection.

*parameters*
- `mode` <[Overlay.InspectMode]]> Set an inspection mode
- `highlightConfig` <[Overlay.HighlightConfig]]> A descriptor for the highlight appearance of hovered-over nodes. May be omitted if `enabled
== false`

#### command: Overlay.setPausedInDebuggerMessage()

*parameters*
- `message` <string]> The message to display, also triggers resume and step over controls

#### command: Overlay.setShowDebugBorders()

Requests that backend shows debug borders on layers

*parameters*
- `show` <boolean]> True for showing debug borders

#### command: Overlay.setShowFPSCounter()

Requests that backend shows the FPS counter

*parameters*
- `show` <boolean]> True for showing the FPS counter

#### command: Overlay.setShowPaintRects()

Requests that backend shows paint rectangles

*parameters*
- `result` <boolean]> True for showing paint rectangles

#### command: Overlay.setShowScrollBottleneckRects()

Requests that backend shows scroll bottleneck rects

*parameters*
- `show` <boolean]> True for showing scroll bottleneck rects

#### command: Overlay.setShowViewportSizeOnResize()

Paints viewport size upon main frame resize.

*parameters*
- `show` <boolean]> Whether to paint size or not

#### command: Overlay.setSuspended()

*parameters*
- `suspended` <boolean]> Whether overlay should be suspended and not consume any resources until resumed

#### event: Overlay.inspectNodeRequested

Fired when the node should be inspected. This happens after call to `setInspectMode` or when
user manually inspects an element.

*returns*
- `backendNodeId` <[DOM.BackendNodeId]]> Id of the node to inspect

#### event: Overlay.nodeHighlightRequested

Fired when the node should be highlighted. This happens after call to `setInspectMode`.

*returns*
- `nodeId` <[DOM.NodeId]]> 

#### event: Overlay.screenshotRequested

Fired when user asks to capture screenshot of some area on the page.

*returns*
- `viewport` <[Page.Viewport]]> Viewport to capture, in CSS

[DOM.RGBA]: overlay.md#domrgba
[DOM.NodeId]: overlay.md#domnodeid
[Page.FrameId]: overlay.md#pageframeid
[Overlay.HighlightConfig]: overlay.md#overlayhighlightconfig
[DOM.BackendNodeId]: overlay.md#dombackendnodeid
[Runtime.RemoteObjectId]: overlay.md#runtimeremoteobjectid
[DOM.Quad]: overlay.md#domquad
[Overlay.InspectMode]: overlay.md#overlayinspectmode
[Page.Viewport]: overlay.md#pageviewport