
### domain: DOM

This domain exposes DOM read/write operations. Each DOM Node is represented with its mirror object
that has an `id`. This `id` can be used to get additional information on the Node, resolve it into
the JavaScript object wrapper, etc. It is important that client receives DOM events only for the
nodes that are known to the client. Backend keeps track of the nodes that were sent to the client
and never sends the same node twice. It is client's responsibility to collect information about
the nodes that were sent to the client.<p>Note that `iframe` owner elements will return
corresponding document elements as their child nodes.</p>

#### DOM.collectClassNamesFromSubtree()
- parameters
  - `nodeId` <NodeId> Id of the node to collect class names
- returns
  - `classNames` array of <[string]> Class name list

Collects class names for the node with given id and all of it's child nodes.

#### DOM.copyTo()
- parameters
  - `nodeId` <NodeId> Id of the node to copy
  - `targetNodeId` <NodeId> Id of the element to drop the copy into
  - `insertBeforeNodeId` <NodeId> Drop the copy before this node (if absent, the copy becomes the last child of
`targetNodeId`)
- returns
  - `nodeId` <NodeId> Id of the node clone

Creates a deep copy of the specified node and places it into the target container before the
given anchor.

#### DOM.describeNode()
- parameters
  - `nodeId` <NodeId> Identifier of the node
  - `backendNodeId` <BackendNodeId> Identifier of the backend node
  - `objectId` <Runtime.RemoteObjectId> JavaScript object id of the node wrapper
  - `depth` <[integer]> The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0
  - `pierce` <[boolean]> Whether or not iframes and shadow roots should be traversed when returning the subtree
(default is false)
- returns
  - `node` <Node> Node description

Describes node given its id, does not require domain to be enabled. Does not start tracking any
objects, can be used for automation.

#### DOM.disable()

Disables DOM agent for the given page.

#### DOM.discardSearchResults()
- parameters
  - `searchId` <[string]> Unique search session identifier

Discards search results from the session with the given id. `getSearchResults` should no longer
be called for that search.

#### DOM.enable()

Enables DOM agent for the given page.

#### DOM.focus()
- parameters
  - `nodeId` <NodeId> Identifier of the node
  - `backendNodeId` <BackendNodeId> Identifier of the backend node
  - `objectId` <Runtime.RemoteObjectId> JavaScript object id of the node wrapper

Focuses the given element.

#### DOM.getAttributes()
- parameters
  - `nodeId` <NodeId> Id of the node to retrieve attibutes for
- returns
  - `attributes` array of <[string]> An interleaved array of node attribute names and values

Returns attributes for the specified node.

#### DOM.getBoxModel()
- parameters
  - `nodeId` <NodeId> Identifier of the node
  - `backendNodeId` <BackendNodeId> Identifier of the backend node
  - `objectId` <Runtime.RemoteObjectId> JavaScript object id of the node wrapper
- returns
  - `model` <BoxModel> Box model for the node

Returns boxes for the given node.

#### DOM.getDocument()
- parameters
  - `depth` <[integer]> The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0
  - `pierce` <[boolean]> Whether or not iframes and shadow roots should be traversed when returning the subtree
(default is false)
- returns
  - `root` <Node> Resulting node

Returns the root DOM node (and optionally the subtree) to the caller.

#### DOM.getFlattenedDocument()
- parameters
  - `depth` <[integer]> The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0
  - `pierce` <[boolean]> Whether or not iframes and shadow roots should be traversed when returning the subtree
(default is false)
- returns
  - `nodes` array of <Node> Resulting node

Returns the root DOM node (and optionally the subtree) to the caller.

#### DOM.getNodeForLocation()
- parameters
  - `x` <[integer]> X coordinate
  - `y` <[integer]> Y coordinate
  - `includeUserAgentShadowDOM` <[boolean]> False to skip to the nearest non-UA shadow root ancestor (default: false)
- returns
  - `nodeId` <NodeId> Id of the node at given coordinates

Returns node id at given location.

#### DOM.getOuterHTML()
- parameters
  - `nodeId` <NodeId> Identifier of the node
  - `backendNodeId` <BackendNodeId> Identifier of the backend node
  - `objectId` <Runtime.RemoteObjectId> JavaScript object id of the node wrapper
- returns
  - `outerHTML` <[string]> Outer HTML markup

Returns node's HTML markup.

#### DOM.getRelayoutBoundary()
- parameters
  - `nodeId` <NodeId> Id of the node
- returns
  - `nodeId` <NodeId> Relayout boundary node id for the given node

Returns the id of the nearest ancestor that is a relayout boundary.

#### DOM.getSearchResults()
- parameters
  - `searchId` <[string]> Unique search session identifier
  - `fromIndex` <[integer]> Start index of the search result to be returned
  - `toIndex` <[integer]> End index of the search result to be returned
- returns
  - `nodeIds` array of <NodeId> Ids of the search result nodes

Returns search results from given `fromIndex` to given `toIndex` from the search with the given
identifier.

#### DOM.hideHighlight()

Hides any highlight.

#### DOM.highlightNode()

Highlights DOM node.

#### DOM.highlightRect()

Highlights given rectangle.

#### DOM.markUndoableState()

Marks last undoable state.

#### DOM.moveTo()
- parameters
  - `nodeId` <NodeId> Id of the node to move
  - `targetNodeId` <NodeId> Id of the element to drop the moved node into
  - `insertBeforeNodeId` <NodeId> Drop node before this one (if absent, the moved node becomes the last child of
`targetNodeId`)
- returns
  - `nodeId` <NodeId> New id of the moved node

Moves node into the new container, places it before the given anchor.

#### DOM.performSearch()
- parameters
  - `query` <[string]> Plain text or query selector or XPath search query
  - `includeUserAgentShadowDOM` <[boolean]> True to search in user agent shadow DOM
- returns
  - `searchId` <[string]> Unique search session identifier
  - `resultCount` <[integer]> Number of search results

Searches for a given string in the DOM tree. Use `getSearchResults` to access search results or
`cancelSearch` to end this search session.

#### DOM.pushNodeByPathToFrontend()
- parameters
  - `path` <[string]> Path to node in the proprietary format
- returns
  - `nodeId` <NodeId> Id of the node for given path

Requests that the node is sent to the caller given its path. // FIXME, use XPath

#### DOM.pushNodesByBackendIdsToFrontend()
- parameters
  - `backendNodeIds` array of <BackendNodeId> The array of backend node ids
- returns
  - `nodeIds` array of <NodeId> The array of ids of pushed nodes that correspond to the backend ids specified in
backendNodeIds

Requests that a batch of nodes is sent to the caller given their backend node ids.

#### DOM.querySelector()
- parameters
  - `nodeId` <NodeId> Id of the node to query upon
  - `selector` <[string]> Selector string
- returns
  - `nodeId` <NodeId> Query selector result

Executes `querySelector` on a given node.

#### DOM.querySelectorAll()
- parameters
  - `nodeId` <NodeId> Id of the node to query upon
  - `selector` <[string]> Selector string
- returns
  - `nodeIds` array of <NodeId> Query selector result

Executes `querySelectorAll` on a given node.

#### DOM.redo()

Re-does the last undone action.

#### DOM.removeAttribute()
- parameters
  - `nodeId` <NodeId> Id of the element to remove attribute from
  - `name` <[string]> Name of the attribute to remove

Removes attribute with given name from an element with given id.

#### DOM.removeNode()
- parameters
  - `nodeId` <NodeId> Id of the node to remove

Removes node with given id.

#### DOM.requestChildNodes()
- parameters
  - `nodeId` <NodeId> Id of the node to get children for
  - `depth` <[integer]> The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0
  - `pierce` <[boolean]> Whether or not iframes and shadow roots should be traversed when returning the sub-tree
(default is false)

Requests that children of the node with given id are returned to the caller in form of
`setChildNodes` events where not only immediate children are retrieved, but all children down to
the specified depth.

#### DOM.requestNode()
- parameters
  - `objectId` <Runtime.RemoteObjectId> JavaScript object id to convert into node
- returns
  - `nodeId` <NodeId> Node id for given object

Requests that the node is sent to the caller given the JavaScript node object reference. All
nodes that form the path from the node to the root are also sent to the client as a series of
`setChildNodes` notifications.

#### DOM.resolveNode()
- parameters
  - `nodeId` <NodeId> Id of the node to resolve
  - `backendNodeId` <DOM.BackendNodeId> Backend identifier of the node to resolve
  - `objectGroup` <[string]> Symbolic group name that can be used to release multiple objects
- returns
  - `object` <Runtime.RemoteObject> JavaScript object wrapper for given node

Resolves the JavaScript node object for a given NodeId or BackendNodeId.

#### DOM.setAttributeValue()
- parameters
  - `nodeId` <NodeId> Id of the element to set attribute for
  - `name` <[string]> Attribute name
  - `value` <[string]> Attribute value

Sets attribute for an element with given id.

#### DOM.setAttributesAsText()
- parameters
  - `nodeId` <NodeId> Id of the element to set attributes for
  - `text` <[string]> Text with a number of attributes. Will parse this text using HTML parser
  - `name` <[string]> Attribute name to replace with new attributes derived from text in case text parsed
successfully

Sets attributes on element with given id. This method is useful when user edits some existing
attribute value and types in several attribute name/value pairs.

#### DOM.setFileInputFiles()
- parameters
  - `files` array of <[string]> Array of file paths to set
  - `nodeId` <NodeId> Identifier of the node
  - `backendNodeId` <BackendNodeId> Identifier of the backend node
  - `objectId` <Runtime.RemoteObjectId> JavaScript object id of the node wrapper

Sets files for the given file input element.

#### DOM.setInspectedNode()
- parameters
  - `nodeId` <NodeId> DOM node id to be accessible by means of $x command line API

Enables console to refer to the node with given id via $x (see Command Line API for more details
$x functions).

#### DOM.setNodeName()
- parameters
  - `nodeId` <NodeId> Id of the node to set name for
  - `name` <[string]> New node's name
- returns
  - `nodeId` <NodeId> New node's id

Sets node name for a node with given id.

#### DOM.setNodeValue()
- parameters
  - `nodeId` <NodeId> Id of the node to set value for
  - `value` <[string]> New node's value

Sets node value for a node with given id.

#### DOM.setOuterHTML()
- parameters
  - `nodeId` <NodeId> Id of the node to set markup for
  - `outerHTML` <[string]> Outer HTML markup to set

Sets node HTML markup, returns new node id.

#### DOM.undo()

Undoes the last performed action.

#### event: DOM.attributeModified
- `nodeId` <NodeId> Id of the node that has changed
- `name` <[string]> Attribute name
- `value` <[string]> Attribute value

Fired when `Element`'s attribute is modified.

#### event: DOM.attributeRemoved
- `nodeId` <NodeId> Id of the node that has changed
- `name` <[string]> A ttribute name

Fired when `Element`'s attribute is removed.

#### event: DOM.characterDataModified
- `nodeId` <NodeId> Id of the node that has changed
- `characterData` <[string]> New text value

Mirrors `DOMCharacterDataModified` event.

#### event: DOM.childNodeCountUpdated
- `nodeId` <NodeId> Id of the node that has changed
- `childNodeCount` <[integer]> New node count

Fired when `Container`'s child node count has changed.

#### event: DOM.childNodeInserted
- `parentNodeId` <NodeId> Id of the node that has changed
- `previousNodeId` <NodeId> If of the previous siblint
- `node` <Node> Inserted node data

Mirrors `DOMNodeInserted` event.

#### event: DOM.childNodeRemoved
- `parentNodeId` <NodeId> Parent id
- `nodeId` <NodeId> Id of the node that has been removed

Mirrors `DOMNodeRemoved` event.

#### event: DOM.distributedNodesUpdated
- `insertionPointId` <NodeId> Insertion point where distrubuted nodes were updated
- `distributedNodes` array of <BackendNode> Distributed nodes for given insertion point

Called when distrubution is changed.

#### event: DOM.documentUpdated

Fired when `Document` has been totally updated. Node ids are no longer valid.

#### event: DOM.inlineStyleInvalidated
- `nodeIds` array of <NodeId> Ids of the nodes for which the inline styles have been invalidated

Fired when `Element`'s inline style is modified via a CSS property modification.

#### event: DOM.pseudoElementAdded
- `parentId` <NodeId> Pseudo element's parent element id
- `pseudoElement` <Node> The added pseudo element

Called when a pseudo element is added to an element.

#### event: DOM.pseudoElementRemoved
- `parentId` <NodeId> Pseudo element's parent element id
- `pseudoElementId` <NodeId> The removed pseudo element id

Called when a pseudo element is removed from an element.

#### event: DOM.setChildNodes
- `parentId` <NodeId> Parent node id to populate with children
- `nodes` array of <Node> Child nodes array

Fired when backend wants to provide client with the missing DOM structure. This happens upon
most of the calls requesting node ids.

#### event: DOM.shadowRootPopped
- `hostId` <NodeId> Host element id
- `rootId` <NodeId> Shadow root id

Called when shadow root is popped from the element.

#### event: DOM.shadowRootPushed
- `hostId` <NodeId> Host element id
- `root` <Node> Shadow root

Called when shadow root is pushed into the element.