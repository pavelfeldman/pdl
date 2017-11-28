
### domain: DOM

This domain exposes DOM read/write operations. Each DOM Node is represented with its mirror object
that has an `id`. This `id` can be used to get additional information on the Node, resolve it into
the JavaScript object wrapper, etc. It is important that client receives DOM events only for the
nodes that are known to the client. Backend keeps track of the nodes that were sent to the client
and never sends the same node twice. It is client's responsibility to collect information about
the nodes that were sent to the client.<p>Note that `iframe` owner elements will return
corresponding document elements as their child nodes.</p>

#### type: DOM.NodeId = integer

Unique DOM node identifier.

#### type: DOM.BackendNodeId = integer

Unique DOM node identifier used to reference a node that may not have been pushed to the
front-end.

#### type: DOM.BackendNode = object

Backend node with a friendly name.

*properties*
  - `nodeType` <integer]> `Node`'s nodeType
  - `nodeName` <string]> `Node`'s nodeName
  - `backendNodeId` <[DOM.BackendNodeId]]> 

#### type: DOM.PseudoType = string

Pseudo element type.

#### type: DOM.ShadowRootType = string

Shadow root type.

#### type: DOM.Node = object

DOM interaction is implemented in terms of mirror objects that represent the actual DOM nodes.
DOMNode is a base node mirror type.

*properties*
  - `nodeId` <[DOM.NodeId]]> Node identifier that is passed into the rest of the DOM messages as the `nodeId`. Backend
will only push node with given `id` once. It is aware of all requested nodes and will only
fire DOM events for nodes known to the client
  - `parentId` <[DOM.NodeId]]> The id of the parent node if any
  - `backendNodeId` <[DOM.BackendNodeId]]> The BackendNodeId for this node
  - `nodeType` <integer]> `Node`'s nodeType
  - `nodeName` <string]> `Node`'s nodeName
  - `localName` <string]> `Node`'s localName
  - `nodeValue` <string]> `Node`'s nodeValue
  - `childNodeCount` <integer]> Child count for `Container` nodes
  - `children` <array of [DOM.Node]> Child nodes of this node when requested with children
  - `attributes` <array of string> Attributes of the `Element` node in the form of flat array `[name1, value1, name2, value2]`
  - `documentURL` <string]> Document URL that `Document` or `FrameOwner` node points to
  - `baseURL` <string]> Base URL that `Document` or `FrameOwner` node uses for URL completion
  - `publicId` <string]> `DocumentType`'s publicId
  - `systemId` <string]> `DocumentType`'s systemId
  - `internalSubset` <string]> `DocumentType`'s internalSubset
  - `xmlVersion` <string]> `Document`'s XML version in case of XML documents
  - `name` <string]> `Attr`'s name
  - `value` <string]> `Attr`'s value
  - `pseudoType` <[DOM.PseudoType]]> Pseudo element type for this node
  - `shadowRootType` <[DOM.ShadowRootType]]> Shadow root type
  - `frameId` <[Page.FrameId]]> Frame ID for frame owner elements
  - `contentDocument` <[DOM.Node]]> Content document for frame owner elements
  - `shadowRoots` <array of [DOM.Node]> Shadow root list for given element host
  - `templateContent` <[DOM.Node]]> Content document fragment for template elements
  - `pseudoElements` <array of [DOM.Node]> Pseudo elements associated with this node
  - `importedDocument` <[DOM.Node]]> Import document for the HTMLImport links
  - `distributedNodes` <array of [DOM.BackendNode]> Distributed nodes for given insertion point
  - `isSVG` <boolean]> Whether the node is SVG

#### type: DOM.RGBA = object

A structure holding an RGBA color.

*properties*
  - `r` <integer]> The red component, in the [0-255] range
  - `g` <integer]> The green component, in the [0-255] range
  - `b` <integer]> The blue component, in the [0-255] range
  - `a` <number]> The alpha component, in the [0-1] range (default: 1)

#### type: DOM.Quad = array

An array of quad vertices, x immediately followed by y for each point, points clock-wise.

#### type: DOM.BoxModel = object

Box model.

*properties*
  - `content` <[DOM.Quad]]> Content box
  - `padding` <[DOM.Quad]]> Padding box
  - `border` <[DOM.Quad]]> Border box
  - `margin` <[DOM.Quad]]> Margin box
  - `width` <integer]> Node width
  - `height` <integer]> Node height
  - `shapeOutside` <[DOM.ShapeOutsideInfo]]> Shape outside coordinates

#### type: DOM.ShapeOutsideInfo = object

CSS Shape Outside details.

*properties*
  - `bounds` <[DOM.Quad]]> Shape bounds
  - `shape` <array of any> Shape coordinate details
  - `marginShape` <array of any> Margin shape bounds

#### type: DOM.Rect = object

Rectangle.

*properties*
  - `x` <number]> X coordinate
  - `y` <number]> Y coordinate
  - `width` <number]> Rectangle width
  - `height` <number]> Rectangle height

#### command: DOM.collectClassNamesFromSubtree()

Collects class names for the node with given id and all of it's child nodes.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node to collect class names

*returns*
- `classNames` <array of string> Class name list

#### command: DOM.copyTo()

Creates a deep copy of the specified node and places it into the target container before the
given anchor.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node to copy
- `targetNodeId` <[DOM.NodeId]]> Id of the element to drop the copy into
- `insertBeforeNodeId` <[DOM.NodeId]]> Drop the copy before this node (if absent, the copy becomes the last child of
`targetNodeId`)

*returns*
- `nodeId` <[DOM.NodeId]]> Id of the node clone

#### command: DOM.describeNode()

Describes node given its id, does not require domain to be enabled. Does not start tracking any
objects, can be used for automation.

*parameters*
- `nodeId` <[DOM.NodeId]]> Identifier of the node
- `backendNodeId` <[DOM.BackendNodeId]]> Identifier of the backend node
- `objectId` <[Runtime.RemoteObjectId]]> JavaScript object id of the node wrapper
- `depth` <integer]> The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0
- `pierce` <boolean]> Whether or not iframes and shadow roots should be traversed when returning the subtree
(default is false)

*returns*
- `node` <[DOM.Node]]> Node description

#### command: DOM.disable()

Disables DOM agent for the given page.

#### command: DOM.discardSearchResults()

Discards search results from the session with the given id. `getSearchResults` should no longer
be called for that search.

*parameters*
- `searchId` <string]> Unique search session identifier

#### command: DOM.enable()

Enables DOM agent for the given page.

#### command: DOM.focus()

Focuses the given element.

*parameters*
- `nodeId` <[DOM.NodeId]]> Identifier of the node
- `backendNodeId` <[DOM.BackendNodeId]]> Identifier of the backend node
- `objectId` <[Runtime.RemoteObjectId]]> JavaScript object id of the node wrapper

#### command: DOM.getAttributes()

Returns attributes for the specified node.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node to retrieve attibutes for

*returns*
- `attributes` <array of string> An interleaved array of node attribute names and values

#### command: DOM.getBoxModel()

Returns boxes for the given node.

*parameters*
- `nodeId` <[DOM.NodeId]]> Identifier of the node
- `backendNodeId` <[DOM.BackendNodeId]]> Identifier of the backend node
- `objectId` <[Runtime.RemoteObjectId]]> JavaScript object id of the node wrapper

*returns*
- `model` <[DOM.BoxModel]]> Box model for the node

#### command: DOM.getDocument()

Returns the root DOM node (and optionally the subtree) to the caller.

*parameters*
- `depth` <integer]> The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0
- `pierce` <boolean]> Whether or not iframes and shadow roots should be traversed when returning the subtree
(default is false)

*returns*
- `root` <[DOM.Node]]> Resulting node

#### command: DOM.getFlattenedDocument()

Returns the root DOM node (and optionally the subtree) to the caller.

*parameters*
- `depth` <integer]> The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0
- `pierce` <boolean]> Whether or not iframes and shadow roots should be traversed when returning the subtree
(default is false)

*returns*
- `nodes` <array of [DOM.Node]> Resulting node

#### command: DOM.getNodeForLocation()

Returns node id at given location.

*parameters*
- `x` <integer]> X coordinate
- `y` <integer]> Y coordinate
- `includeUserAgentShadowDOM` <boolean]> False to skip to the nearest non-UA shadow root ancestor (default: false)

*returns*
- `nodeId` <[DOM.NodeId]]> Id of the node at given coordinates

#### command: DOM.getOuterHTML()

Returns node's HTML markup.

*parameters*
- `nodeId` <[DOM.NodeId]]> Identifier of the node
- `backendNodeId` <[DOM.BackendNodeId]]> Identifier of the backend node
- `objectId` <[Runtime.RemoteObjectId]]> JavaScript object id of the node wrapper

*returns*
- `outerHTML` <string]> Outer HTML markup

#### command: DOM.getRelayoutBoundary()

Returns the id of the nearest ancestor that is a relayout boundary.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node

*returns*
- `nodeId` <[DOM.NodeId]]> Relayout boundary node id for the given node

#### command: DOM.getSearchResults()

Returns search results from given `fromIndex` to given `toIndex` from the search with the given
identifier.

*parameters*
- `searchId` <string]> Unique search session identifier
- `fromIndex` <integer]> Start index of the search result to be returned
- `toIndex` <integer]> End index of the search result to be returned

*returns*
- `nodeIds` <array of [DOM.NodeId]> Ids of the search result nodes

#### command: DOM.hideHighlight()

Hides any highlight.

#### command: DOM.highlightNode()

Highlights DOM node.

#### command: DOM.highlightRect()

Highlights given rectangle.

#### command: DOM.markUndoableState()

Marks last undoable state.

#### command: DOM.moveTo()

Moves node into the new container, places it before the given anchor.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node to move
- `targetNodeId` <[DOM.NodeId]]> Id of the element to drop the moved node into
- `insertBeforeNodeId` <[DOM.NodeId]]> Drop node before this one (if absent, the moved node becomes the last child of
`targetNodeId`)

*returns*
- `nodeId` <[DOM.NodeId]]> New id of the moved node

#### command: DOM.performSearch()

Searches for a given string in the DOM tree. Use `getSearchResults` to access search results or
`cancelSearch` to end this search session.

*parameters*
- `query` <string]> Plain text or query selector or XPath search query
- `includeUserAgentShadowDOM` <boolean]> True to search in user agent shadow DOM

*returns*
- `searchId` <string]> Unique search session identifier
- `resultCount` <integer]> Number of search results

#### command: DOM.pushNodeByPathToFrontend()

Requests that the node is sent to the caller given its path. // FIXME, use XPath

*parameters*
- `path` <string]> Path to node in the proprietary format

*returns*
- `nodeId` <[DOM.NodeId]]> Id of the node for given path

#### command: DOM.pushNodesByBackendIdsToFrontend()

Requests that a batch of nodes is sent to the caller given their backend node ids.

*parameters*
- `backendNodeIds` <array of [DOM.BackendNodeId]> The array of backend node ids

*returns*
- `nodeIds` <array of [DOM.NodeId]> The array of ids of pushed nodes that correspond to the backend ids specified in
backendNodeIds

#### command: DOM.querySelector()

Executes `querySelector` on a given node.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node to query upon
- `selector` <string]> Selector string

*returns*
- `nodeId` <[DOM.NodeId]]> Query selector result

#### command: DOM.querySelectorAll()

Executes `querySelectorAll` on a given node.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node to query upon
- `selector` <string]> Selector string

*returns*
- `nodeIds` <array of [DOM.NodeId]> Query selector result

#### command: DOM.redo()

Re-does the last undone action.

#### command: DOM.removeAttribute()

Removes attribute with given name from an element with given id.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the element to remove attribute from
- `name` <string]> Name of the attribute to remove

#### command: DOM.removeNode()

Removes node with given id.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node to remove

#### command: DOM.requestChildNodes()

Requests that children of the node with given id are returned to the caller in form of
`setChildNodes` events where not only immediate children are retrieved, but all children down to
the specified depth.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node to get children for
- `depth` <integer]> The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0
- `pierce` <boolean]> Whether or not iframes and shadow roots should be traversed when returning the sub-tree
(default is false)

#### command: DOM.requestNode()

Requests that the node is sent to the caller given the JavaScript node object reference. All
nodes that form the path from the node to the root are also sent to the client as a series of
`setChildNodes` notifications.

*parameters*
- `objectId` <[Runtime.RemoteObjectId]]> JavaScript object id to convert into node

*returns*
- `nodeId` <[DOM.NodeId]]> Node id for given object

#### command: DOM.resolveNode()

Resolves the JavaScript node object for a given NodeId or BackendNodeId.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node to resolve
- `backendNodeId` <[DOM.BackendNodeId]]> Backend identifier of the node to resolve
- `objectGroup` <string]> Symbolic group name that can be used to release multiple objects

*returns*
- `object` <[Runtime.RemoteObject]]> JavaScript object wrapper for given node

#### command: DOM.setAttributeValue()

Sets attribute for an element with given id.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the element to set attribute for
- `name` <string]> Attribute name
- `value` <string]> Attribute value

#### command: DOM.setAttributesAsText()

Sets attributes on element with given id. This method is useful when user edits some existing
attribute value and types in several attribute name/value pairs.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the element to set attributes for
- `text` <string]> Text with a number of attributes. Will parse this text using HTML parser
- `name` <string]> Attribute name to replace with new attributes derived from text in case text parsed
successfully

#### command: DOM.setFileInputFiles()

Sets files for the given file input element.

*parameters*
- `files` <array of string> Array of file paths to set
- `nodeId` <[DOM.NodeId]]> Identifier of the node
- `backendNodeId` <[DOM.BackendNodeId]]> Identifier of the backend node
- `objectId` <[Runtime.RemoteObjectId]]> JavaScript object id of the node wrapper

#### command: DOM.setInspectedNode()

Enables console to refer to the node with given id via $x (see Command Line API for more details
$x functions).

*parameters*
- `nodeId` <[DOM.NodeId]]> DOM node id to be accessible by means of $x command line API

#### command: DOM.setNodeName()

Sets node name for a node with given id.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node to set name for
- `name` <string]> New node's name

*returns*
- `nodeId` <[DOM.NodeId]]> New node's id

#### command: DOM.setNodeValue()

Sets node value for a node with given id.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node to set value for
- `value` <string]> New node's value

#### command: DOM.setOuterHTML()

Sets node HTML markup, returns new node id.

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node to set markup for
- `outerHTML` <string]> Outer HTML markup to set

#### command: DOM.undo()

Undoes the last performed action.

#### event: DOM.attributeModified

Fired when `Element`'s attribute is modified.

*returns*
- `nodeId` <[DOM.NodeId]]> Id of the node that has changed
- `name` <string]> Attribute name
- `value` <string]> Attribute value

#### event: DOM.attributeRemoved

Fired when `Element`'s attribute is removed.

*returns*
- `nodeId` <[DOM.NodeId]]> Id of the node that has changed
- `name` <string]> A ttribute name

#### event: DOM.characterDataModified

Mirrors `DOMCharacterDataModified` event.

*returns*
- `nodeId` <[DOM.NodeId]]> Id of the node that has changed
- `characterData` <string]> New text value

#### event: DOM.childNodeCountUpdated

Fired when `Container`'s child node count has changed.

*returns*
- `nodeId` <[DOM.NodeId]]> Id of the node that has changed
- `childNodeCount` <integer]> New node count

#### event: DOM.childNodeInserted

Mirrors `DOMNodeInserted` event.

*returns*
- `parentNodeId` <[DOM.NodeId]]> Id of the node that has changed
- `previousNodeId` <[DOM.NodeId]]> If of the previous siblint
- `node` <[DOM.Node]]> Inserted node data

#### event: DOM.childNodeRemoved

Mirrors `DOMNodeRemoved` event.

*returns*
- `parentNodeId` <[DOM.NodeId]]> Parent id
- `nodeId` <[DOM.NodeId]]> Id of the node that has been removed

#### event: DOM.distributedNodesUpdated

Called when distrubution is changed.

*returns*
- `insertionPointId` <[DOM.NodeId]]> Insertion point where distrubuted nodes were updated
- `distributedNodes` <array of [DOM.BackendNode]> Distributed nodes for given insertion point

#### event: DOM.documentUpdated

Fired when `Document` has been totally updated. Node ids are no longer valid.

#### event: DOM.inlineStyleInvalidated

Fired when `Element`'s inline style is modified via a CSS property modification.

*returns*
- `nodeIds` <array of [DOM.NodeId]> Ids of the nodes for which the inline styles have been invalidated

#### event: DOM.pseudoElementAdded

Called when a pseudo element is added to an element.

*returns*
- `parentId` <[DOM.NodeId]]> Pseudo element's parent element id
- `pseudoElement` <[DOM.Node]]> The added pseudo element

#### event: DOM.pseudoElementRemoved

Called when a pseudo element is removed from an element.

*returns*
- `parentId` <[DOM.NodeId]]> Pseudo element's parent element id
- `pseudoElementId` <[DOM.NodeId]]> The removed pseudo element id

#### event: DOM.setChildNodes

Fired when backend wants to provide client with the missing DOM structure. This happens upon
most of the calls requesting node ids.

*returns*
- `parentId` <[DOM.NodeId]]> Parent node id to populate with children
- `nodes` <array of [DOM.Node]> Child nodes array

#### event: DOM.shadowRootPopped

Called when shadow root is popped from the element.

*returns*
- `hostId` <[DOM.NodeId]]> Host element id
- `rootId` <[DOM.NodeId]]> Shadow root id

#### event: DOM.shadowRootPushed

Called when shadow root is pushed into the element.

*returns*
- `hostId` <[DOM.NodeId]]> Host element id
- `root` <[DOM.Node]]> Shadow root

[DOM.BackendNodeId]: dom.md#dombackendnodeid
[DOM.NodeId]: dom.md#domnodeid
[DOM.Node]: dom.md#domnode
[DOM.PseudoType]: dom.md#dompseudotype
[DOM.ShadowRootType]: dom.md#domshadowroottype
[Page.FrameId]: dom.md#pageframeid
[DOM.BackendNode]: dom.md#dombackendnode
[DOM.Quad]: dom.md#domquad
[DOM.ShapeOutsideInfo]: dom.md#domshapeoutsideinfo
[Runtime.RemoteObjectId]: dom.md#runtimeremoteobjectid
[DOM.BoxModel]: dom.md#domboxmodel
[Runtime.RemoteObject]: dom.md#runtimeremoteobject