
### domain: Accessibility

#### Accessibility.getPartialAXTree()
- parameters
  - `nodeId` <DOM.NodeId> ID of node to get the partial accessibility tree for
  - `fetchRelatives` <[boolean]> Whether to fetch this nodes ancestors, siblings and children. Defaults to true
- returns
  - `nodes` array of <AXNode> The `Accessibility.AXNode` for this DOM node, if it exists, plus its ancestors, siblings and
children, if requested

Fetches the accessibility node and partial accessibility tree for this DOM node, if it exists.

---

### domain: Animation

#### Animation.disable()

Disables animation domain notifications.

#### Animation.enable()

Enables animation domain notifications.

#### Animation.getCurrentTime()
- parameters
  - `id` <[string]> Id of animation
- returns
  - `currentTime` <[number]> Current time of the page

Returns the current time of the an animation.

#### Animation.getPlaybackRate()
- returns
  - `playbackRate` <[number]> Playback rate for animations on page

Gets the playback rate of the document timeline.

#### Animation.releaseAnimations()
- parameters
  - `animations` array of <[string]> List of animation ids to seek

Releases a set of animations to no longer be manipulated.

#### Animation.resolveAnimation()
- parameters
  - `animationId` <[string]> Animation id
- returns
  - `remoteObject` <Runtime.RemoteObject> Corresponding remote object

Gets the remote object of the Animation.

#### Animation.seekAnimations()
- parameters
  - `animations` array of <[string]> List of animation ids to seek
  - `currentTime` <[number]> Set the current time of each animation

Seek a set of animations to a particular time within each animation.

#### Animation.setPaused()
- parameters
  - `animations` array of <[string]> Animations to set the pause state of
  - `paused` <[boolean]> Paused state to set to

Sets the paused state of a set of animations.

#### Animation.setPlaybackRate()
- parameters
  - `playbackRate` <[number]> Playback rate for animations on page

Sets the playback rate of the document timeline.

#### Animation.setTiming()
- parameters
  - `animationId` <[string]> Animation id
  - `duration` <[number]> Duration of the animation
  - `delay` <[number]> Delay of the animation

Sets the timing of an animation node.

#### event: Animation.animationCanceled
- `id` <[string]> Id of the animation that was cancelled

Event for when an animation has been cancelled.

#### event: Animation.animationCreated
- `id` <[string]> Id of the animation that was created

Event for each animation that has been created.

#### event: Animation.animationStarted
- `animation` <Animation> Animation that was started

Event for animation that has been started.

---

### domain: ApplicationCache

#### ApplicationCache.enable()

Enables application cache domain notifications.

#### ApplicationCache.getApplicationCacheForFrame()
- parameters
  - `frameId` <Page.FrameId> Identifier of the frame containing document whose application cache is retrieved
- returns
  - `applicationCache` <ApplicationCache> Relevant application cache data for the document in given frame

Returns relevant application cache data for the document in given frame.

#### ApplicationCache.getFramesWithManifests()
- returns
  - `frameIds` array of <FrameWithManifest> Array of frame identifiers with manifest urls for each frame containing a document
associated with some application cache

Returns array of frame identifiers with manifest urls for each frame containing a document
associated with some application cache.

#### ApplicationCache.getManifestForFrame()
- parameters
  - `frameId` <Page.FrameId> Identifier of the frame containing document whose manifest is retrieved
- returns
  - `manifestURL` <[string]> Manifest URL for document in the given frame

Returns manifest URL for document in the given frame.

#### event: ApplicationCache.applicationCacheStatusUpdated
- `frameId` <Page.FrameId> Identifier of the frame containing document whose application cache updated status
- `manifestURL` <[string]> Manifest URL
- `status` <[integer]> Updated application cache status

#### event: ApplicationCache.networkStateUpdated
- `isNowOnline` <[boolean]> 

---

### domain: Audits

Audits domain allows investigation of page violations and possible improvements.

#### Audits.getEncodedResponse()
- parameters
  - `requestId` <Network.RequestId> Identifier of the network request to get content for
  - `encoding` <[string]> The encoding to use
  - `quality` <[number]> The quality of the encoding (0-1). (defaults to 1)
  - `sizeOnly` <[boolean]> Whether to only return the size information (defaults to false)
- returns
  - `body` <[string]> The encoded body as a base64 string. Omitted if sizeOnly is true
  - `originalSize` <[integer]> Size before re-encoding
  - `encodedSize` <[integer]> Size after re-encoding

Returns the response body and size if it were re-encoded with the specified settings. Only
applies to images.

---

### domain: Browser

The Browser domain defines methods and events for browser managing.

#### Browser.close()

Close browser gracefully.

#### Browser.getVersion()
- returns
  - `protocolVersion` <[string]> Protocol version
  - `product` <[string]> Product name
  - `revision` <[string]> Product revision
  - `userAgent` <[string]> User-Agent
  - `jsVersion` <[string]> V8 version

Returns version information.

#### Browser.getWindowBounds()
- parameters
  - `windowId` <WindowID> Browser window id
- returns
  - `bounds` <Bounds> Bounds information of the window. When window state is 'minimized', the restored window
position and size are returned

Get position and size of the browser window.

#### Browser.getWindowForTarget()
- parameters
  - `targetId` <Target.TargetID> Devtools agent host id
- returns
  - `windowId` <WindowID> Browser window id
  - `bounds` <Bounds> Bounds information of the window. When window state is 'minimized', the restored window
position and size are returned

Get the browser window that contains the devtools target.

#### Browser.setWindowBounds()
- parameters
  - `windowId` <WindowID> Browser window id
  - `bounds` <Bounds> New window bounds. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined
with 'left', 'top', 'width' or 'height'. Leaves unspecified fields unchanged

Set position and/or size of the browser window.

---

### domain: CSS

This domain exposes CSS read/write operations. All CSS objects (stylesheets, rules, and styles)
have an associated `id` used in subsequent operations on the related object. Each object type has
a specific `id` structure, and those are not interchangeable between objects of different kinds.
CSS objects can be loaded using the `get*ForNode()` calls (which accept a DOM node id). A client
can also keep track of stylesheets via the `styleSheetAdded`/`styleSheetRemoved` events and
subsequently load the required stylesheet contents using the `getStyleSheet[Text]()` methods.

#### CSS.addRule()
- parameters
  - `styleSheetId` <StyleSheetId> The css style sheet identifier where a new rule should be inserted
  - `ruleText` <[string]> The text of a new rule
  - `location` <SourceRange> Text position of a new rule in the target style sheet
- returns
  - `rule` <CSSRule> The newly created rule

Inserts a new rule with the given `ruleText` in a stylesheet with given `styleSheetId`, at the
position specified by `location`.

#### CSS.collectClassNames()
- parameters
  - `styleSheetId` <StyleSheetId> 
- returns
  - `classNames` array of <[string]> Class name list

Returns all class names from specified stylesheet.

#### CSS.createStyleSheet()
- parameters
  - `frameId` <Page.FrameId> Identifier of the frame where "via-inspector" stylesheet should be created
- returns
  - `styleSheetId` <StyleSheetId> Identifier of the created "via-inspector" stylesheet

Creates a new special "via-inspector" stylesheet in the frame with given `frameId`.

#### CSS.disable()

Disables the CSS agent for the given page.

#### CSS.enable()

Enables the CSS agent for the given page. Clients should not assume that the CSS agent has been
enabled until the result of this command is received.

#### CSS.forcePseudoState()
- parameters
  - `nodeId` <DOM.NodeId> The element id for which to force the pseudo state
  - `forcedPseudoClasses` array of <[string]> Element pseudo classes to force when computing the element's style

Ensures that the given node will have specified pseudo-classes whenever its style is computed by
the browser.

#### CSS.getBackgroundColors()
- parameters
  - `nodeId` <DOM.NodeId> Id of the node to get background colors for
- returns
  - `backgroundColors` array of <[string]> The range of background colors behind this element, if it contains any visible text. If no
visible text is present, this will be undefined. In the case of a flat background color,
this will consist of simply that color. In the case of a gradient, this will consist of each
of the color stops. For anything more complicated, this will be an empty array. Images will
be ignored (as if the image had failed to load)
  - `computedFontSize` <[string]> The computed font size for this node, as a CSS computed value string (e.g. '12px')
  - `computedFontWeight` <[string]> The computed font weight for this node, as a CSS computed value string (e.g. 'normal' or
'100')
  - `computedBodyFontSize` <[string]> The computed font size for the document body, as a computed CSS value string (e.g. '16px')

#### CSS.getComputedStyleForNode()
- parameters
  - `nodeId` <DOM.NodeId> 
- returns
  - `computedStyle` array of <CSSComputedStyleProperty> Computed style for the specified DOM node

Returns the computed style for a DOM node identified by `nodeId`.

#### CSS.getInlineStylesForNode()
- parameters
  - `nodeId` <DOM.NodeId> 
- returns
  - `inlineStyle` <CSSStyle> Inline style for the specified DOM node
  - `attributesStyle` <CSSStyle> Attribute-defined element style (e.g. resulting from "width=20 height=100%")

Returns the styles defined inline (explicitly in the "style" attribute and implicitly, using DOM
attributes) for a DOM node identified by `nodeId`.

#### CSS.getMatchedStylesForNode()
- parameters
  - `nodeId` <DOM.NodeId> 
- returns
  - `inlineStyle` <CSSStyle> Inline style for the specified DOM node
  - `attributesStyle` <CSSStyle> Attribute-defined element style (e.g. resulting from "width=20 height=100%")
  - `matchedCSSRules` array of <RuleMatch> CSS rules matching this node, from all applicable stylesheets
  - `pseudoElements` array of <PseudoElementMatches> Pseudo style matches for this node
  - `inherited` array of <InheritedStyleEntry> A chain of inherited styles (from the immediate node parent up to the DOM tree root)
  - `cssKeyframesRules` array of <CSSKeyframesRule> A list of CSS keyframed animations matching this node

Returns requested styles for a DOM node identified by `nodeId`.

#### CSS.getMediaQueries()
- returns
  - `medias` array of <CSSMedia> 

Returns all media queries parsed by the rendering engine.

#### CSS.getPlatformFontsForNode()
- parameters
  - `nodeId` <DOM.NodeId> 
- returns
  - `fonts` array of <PlatformFontUsage> Usage statistics for every employed platform font

Requests information about platform fonts which we used to render child TextNodes in the given
node.

#### CSS.getStyleSheetText()
- parameters
  - `styleSheetId` <StyleSheetId> 
- returns
  - `text` <[string]> The stylesheet text

Returns the current textual content and the URL for a stylesheet.

#### CSS.setEffectivePropertyValueForNode()
- parameters
  - `nodeId` <DOM.NodeId> The element id for which to set property
  - `propertyName` <[string]> 
  - `value` <[string]> 

Find a rule with the given active property for the given node and set the new value for this
property

#### CSS.setKeyframeKey()
- parameters
  - `styleSheetId` <StyleSheetId> 
  - `range` <SourceRange> 
  - `keyText` <[string]> 
- returns
  - `keyText` <Value> The resulting key text after modification

Modifies the keyframe rule key text.

#### CSS.setMediaText()
- parameters
  - `styleSheetId` <StyleSheetId> 
  - `range` <SourceRange> 
  - `text` <[string]> 
- returns
  - `media` <CSSMedia> The resulting CSS media rule after modification

Modifies the rule selector.

#### CSS.setRuleSelector()
- parameters
  - `styleSheetId` <StyleSheetId> 
  - `range` <SourceRange> 
  - `selector` <[string]> 
- returns
  - `selectorList` <SelectorList> The resulting selector list after modification

Modifies the rule selector.

#### CSS.setStyleSheetText()
- parameters
  - `styleSheetId` <StyleSheetId> 
  - `text` <[string]> 
- returns
  - `sourceMapURL` <[string]> URL of source map associated with script (if any)

Sets the new stylesheet text.

#### CSS.setStyleTexts()
- parameters
  - `edits` array of <StyleDeclarationEdit> 
- returns
  - `styles` array of <CSSStyle> The resulting styles after modification

Applies specified style edits one after another in the given order.

#### CSS.startRuleUsageTracking()

Enables the selector recording.

#### CSS.stopRuleUsageTracking()
- returns
  - `ruleUsage` array of <RuleUsage> 

The list of rules with an indication of whether these were used

#### CSS.takeCoverageDelta()
- returns
  - `coverage` array of <RuleUsage> 

Obtain list of rules that became used since last call to this method (or since start of coverage
instrumentation)

#### event: CSS.fontsUpdated

Fires whenever a web font gets loaded.

#### event: CSS.mediaQueryResultChanged

Fires whenever a MediaQuery result changes (for example, after a browser window has been
resized.) The current implementation considers only viewport-dependent media features.

#### event: CSS.styleSheetAdded
- `header` <CSSStyleSheetHeader> Added stylesheet metainfo

Fired whenever an active document stylesheet is added.

#### event: CSS.styleSheetChanged
- `styleSheetId` <StyleSheetId> 

Fired whenever a stylesheet is changed as a result of the client operation.

#### event: CSS.styleSheetRemoved
- `styleSheetId` <StyleSheetId> Identifier of the removed stylesheet

Fired whenever an active document stylesheet is removed.

---

### domain: CacheStorage

#### CacheStorage.deleteCache()
- parameters
  - `cacheId` <CacheId> Id of cache for deletion

Deletes a cache.

#### CacheStorage.deleteEntry()
- parameters
  - `cacheId` <CacheId> Id of cache where the entry will be deleted
  - `request` <[string]> URL spec of the request

Deletes a cache entry.

#### CacheStorage.requestCacheNames()
- parameters
  - `securityOrigin` <[string]> Security origin
- returns
  - `caches` array of <Cache> Caches for the security origin

Requests cache names.

#### CacheStorage.requestCachedResponse()
- parameters
  - `cacheId` <CacheId> Id of cache that contains the enty
  - `requestURL` <[string]> URL spec of the request
- returns
  - `response` <CachedResponse> Response read from the cache

Fetches cache entry.

#### CacheStorage.requestEntries()
- parameters
  - `cacheId` <CacheId> ID of cache to get entries from
  - `skipCount` <[integer]> Number of records to skip
  - `pageSize` <[integer]> Number of records to fetch
- returns
  - `cacheDataEntries` array of <DataEntry> Array of object store data entries
  - `hasMore` <[boolean]> If true, there are more entries to fetch in the given range

Requests data from cache.

---

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

---

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

---

### domain: DOMSnapshot

This domain facilitates obtaining document snapshots with DOM, layout, and style information.

#### DOMSnapshot.getSnapshot()
- parameters
  - `computedStyleWhitelist` array of <[string]> Whitelist of computed styles to return
- returns
  - `domNodes` array of <DOMNode> The nodes in the DOM tree. The DOMNode at index 0 corresponds to the root document
  - `layoutTreeNodes` array of <LayoutTreeNode> The nodes in the layout tree
  - `computedStyles` array of <ComputedStyle> Whitelisted ComputedStyle properties for each node in the layout tree

Returns a document snapshot, including the full DOM tree of the root node (including iframes,
template contents, and imported documents) in a flattened array, as well as layout and
white-listed computed style information for the nodes. Shadow DOM in the returned DOM tree is
flattened.

---

### domain: DOMStorage

Query and modify DOM storage.

#### DOMStorage.clear()
- parameters
  - `storageId` <StorageId> 

#### DOMStorage.disable()

Disables storage tracking, prevents storage events from being sent to the client.

#### DOMStorage.enable()

Enables storage tracking, storage events will now be delivered to the client.

#### DOMStorage.getDOMStorageItems()
- parameters
  - `storageId` <StorageId> 
- returns
  - `entries` array of <Item> 

#### DOMStorage.removeDOMStorageItem()
- parameters
  - `storageId` <StorageId> 
  - `key` <[string]> 

#### DOMStorage.setDOMStorageItem()
- parameters
  - `storageId` <StorageId> 
  - `key` <[string]> 
  - `value` <[string]> 

#### event: DOMStorage.domStorageItemAdded
- `storageId` <StorageId> 
- `key` <[string]> 
- `newValue` <[string]> 

#### event: DOMStorage.domStorageItemRemoved
- `storageId` <StorageId> 
- `key` <[string]> 

#### event: DOMStorage.domStorageItemUpdated
- `storageId` <StorageId> 
- `key` <[string]> 
- `oldValue` <[string]> 
- `newValue` <[string]> 

#### event: DOMStorage.domStorageItemsCleared
- `storageId` <StorageId> 

---

### domain: Database

#### Database.disable()

Disables database tracking, prevents database events from being sent to the client.

#### Database.enable()

Enables database tracking, database events will now be delivered to the client.

#### Database.executeSQL()
- parameters
  - `databaseId` <DatabaseId> 
  - `query` <[string]> 
- returns
  - `columnNames` array of <[string]> 
  - `values` array of <[any]> 
  - `sqlError` <Error> 

#### Database.getDatabaseTableNames()
- parameters
  - `databaseId` <DatabaseId> 
- returns
  - `tableNames` array of <[string]> 

#### event: Database.addDatabase
- `database` <Database> 

---

### domain: DeviceOrientation

#### DeviceOrientation.clearDeviceOrientationOverride()

Clears the overridden Device Orientation.

#### DeviceOrientation.setDeviceOrientationOverride()
- parameters
  - `alpha` <[number]> Mock alpha
  - `beta` <[number]> Mock beta
  - `gamma` <[number]> Mock gamma

Overrides the Device Orientation.

---

### domain: Emulation

This domain emulates different environments for the page.

#### Emulation.canEmulate()
- returns
  - `result` <[boolean]> True if emulation is supported

Tells whether emulation is supported.

#### Emulation.clearDeviceMetricsOverride()

Clears the overriden device metrics.

#### Emulation.clearGeolocationOverride()

Clears the overriden Geolocation Position and Error.

#### Emulation.resetPageScaleFactor()

Requests that page scale factor is reset to initial values.

#### Emulation.setCPUThrottlingRate()
- parameters
  - `rate` <[number]> Throttling rate as a slowdown factor (1 is no throttle, 2 is 2x slowdown, etc)

Enables CPU throttling to emulate slow CPUs.

#### Emulation.setDefaultBackgroundColorOverride()
- parameters
  - `color` <DOM.RGBA> RGBA of the default background color. If not specified, any existing override will be
cleared

Sets or clears an override of the default background color of the frame. This override is used
if the content does not specify one.

#### Emulation.setDeviceMetricsOverride()
- parameters
  - `width` <[integer]> Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override
  - `height` <[integer]> Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override
  - `deviceScaleFactor` <[number]> Overriding device scale factor value. 0 disables the override
  - `mobile` <[boolean]> Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text
autosizing and more
  - `scale` <[number]> Scale to apply to resulting view image
  - `screenWidth` <[integer]> Overriding screen width value in pixels (minimum 0, maximum 10000000)
  - `screenHeight` <[integer]> Overriding screen height value in pixels (minimum 0, maximum 10000000)
  - `positionX` <[integer]> Overriding view X position on screen in pixels (minimum 0, maximum 10000000)
  - `positionY` <[integer]> Overriding view Y position on screen in pixels (minimum 0, maximum 10000000)
  - `dontSetVisibleSize` <[boolean]> Do not set visible view size, rely upon explicit setVisibleSize call
  - `screenOrientation` <ScreenOrientation> Screen orientation override
  - `viewport` <Page.Viewport> If set, the visible area of the page will be overridden to this viewport. This viewport
change is not observed by the page, e.g. viewport-relative elements do not change positions

Overrides the values of device screen dimensions (window.screen.width, window.screen.height,
window.innerWidth, window.innerHeight, and "device-width"/"device-height"-related CSS media
query results).

#### Emulation.setEmitTouchEventsForMouse()
- parameters
  - `enabled` <[boolean]> Whether touch emulation based on mouse input should be enabled
  - `configuration` <[string]> Touch/gesture events configuration. Default: current platform

#### Emulation.setEmulatedMedia()
- parameters
  - `media` <[string]> Media type to emulate. Empty string disables the override

Emulates the given media for CSS media queries.

#### Emulation.setGeolocationOverride()
- parameters
  - `latitude` <[number]> Mock latitude
  - `longitude` <[number]> Mock longitude
  - `accuracy` <[number]> Mock accuracy

Overrides the Geolocation Position or Error. Omitting any of the parameters emulates position
unavailable.

#### Emulation.setNavigatorOverrides()
- parameters
  - `platform` <[string]> The platform navigator.platform should return

Overrides value returned by the javascript navigator object.

#### Emulation.setPageScaleFactor()
- parameters
  - `pageScaleFactor` <[number]> Page scale factor

Sets a specified page scale factor.

#### Emulation.setScriptExecutionDisabled()
- parameters
  - `value` <[boolean]> Whether script execution should be disabled in the page

Switches script execution in the page.

#### Emulation.setTouchEmulationEnabled()
- parameters
  - `enabled` <[boolean]> Whether the touch event emulation should be enabled
  - `maxTouchPoints` <[integer]> Maximum touch points supported. Defaults to one

Enables touch on platforms which do not support them.

#### Emulation.setVirtualTimePolicy()
- parameters
  - `policy` <VirtualTimePolicy> 
  - `budget` <[number]> If set, after this many virtual milliseconds have elapsed virtual time will be paused and a
virtualTimeBudgetExpired event is sent
  - `maxVirtualTimeTaskStarvationCount` <[integer]> If set this specifies the maximum number of tasks that can be run before virtual is forced
forwards to prevent deadlock
- returns
  - `virtualTimeBase` <Runtime.Timestamp> Absolute timestamp at which virtual time was first enabled (milliseconds since epoch)

Turns on virtual time for all frames (replacing real-time with a synthetic time source) and sets
the current virtual time policy.  Note this supersedes any previous time budget.

#### Emulation.setVisibleSize()
- parameters
  - `width` <[integer]> Frame width (DIP)
  - `height` <[integer]> Frame height (DIP)

Resizes the frame/viewport of the page. Note that this does not affect the frame's container
(e.g. browser window). Can be used to produce screenshots of the specified size. Not supported
on Android.

#### event: Emulation.virtualTimeAdvanced
- `virtualTimeElapsed` <[number]> The amount of virtual time that has elapsed in milliseconds since virtual time was first
enabled

Notification sent after the virtual time has advanced.

#### event: Emulation.virtualTimeBudgetExpired

Notification sent after the virtual time budget for the current VirtualTimePolicy has run out.

#### event: Emulation.virtualTimePaused
- `virtualTimeElapsed` <[number]> The amount of virtual time that has elapsed in milliseconds since virtual time was first
enabled

Notification sent after the virtual time has paused.

---

### domain: HeadlessExperimental

This domain provides experimental commands only supported in headless mode.

#### HeadlessExperimental.beginFrame()
- parameters
  - `frameTime` <Runtime.Timestamp> Timestamp of this BeginFrame (milliseconds since epoch). If not set, the current time will
be used
  - `deadline` <Runtime.Timestamp> Deadline of this BeginFrame (milliseconds since epoch). If not set, the deadline will be
calculated from the frameTime and interval
  - `interval` <[number]> The interval between BeginFrames that is reported to the compositor, in milliseconds.
Defaults to a 60 frames/second interval, i.e. about 16.666 milliseconds
  - `screenshot` <ScreenshotParams> If set, a screenshot of the frame will be captured and returned in the response. Otherwise,
no screenshot will be captured
- returns
  - `hasDamage` <[boolean]> Whether the BeginFrame resulted in damage and, thus, a new frame was committed to the
display
  - `mainFrameContentUpdated` <[boolean]> Whether the main frame submitted a new display frame in response to this BeginFrame
  - `screenshotData` <[string]> Base64-encoded image data of the screenshot, if one was requested and successfully taken

Sends a BeginFrame to the target and returns when the frame was completed. Optionally captures a
screenshot from the resulting frame. Requires that the target was created with enabled
BeginFrameControl.

#### HeadlessExperimental.disable()

Disables headless events for the target.

#### HeadlessExperimental.enable()

Enables headless events for the target.

#### event: HeadlessExperimental.mainFrameReadyForScreenshots

Issued when the main frame has first submitted a frame to the browser. May only be fired while a
BeginFrame is in flight. Before this event, screenshotting requests may fail.

#### event: HeadlessExperimental.needsBeginFramesChanged
- `needsBeginFrames` <[boolean]> True if BeginFrames are needed, false otherwise

Issued when the target starts or stops needing BeginFrames.

---

### domain: IO

Input/Output operations for streams produced by DevTools.

#### IO.close()
- parameters
  - `handle` <StreamHandle> Handle of the stream to close

Close the stream, discard any temporary backing storage.

#### IO.read()
- parameters
  - `handle` <StreamHandle> Handle of the stream to read
  - `offset` <[integer]> Seek to the specified offset before reading (if not specificed, proceed with offset
following the last read)
  - `size` <[integer]> Maximum number of bytes to read (left upon the agent discretion if not specified)
- returns
  - `base64Encoded` <[boolean]> Set if the data is base64-encoded
  - `data` <[string]> Data that were read
  - `eof` <[boolean]> Set if the end-of-file condition occured while reading

Read a chunk of the stream

#### IO.resolveBlob()
- parameters
  - `objectId` <Runtime.RemoteObjectId> Object id of a Blob object wrapper
- returns
  - `uuid` <[string]> UUID of the specified Blob

Return UUID of Blob object specified by a remote object id.

---

### domain: IndexedDB

#### IndexedDB.clearObjectStore()
- parameters
  - `securityOrigin` <[string]> Security origin
  - `databaseName` <[string]> Database name
  - `objectStoreName` <[string]> Object store name

Clears all entries from an object store.

#### IndexedDB.deleteDatabase()
- parameters
  - `securityOrigin` <[string]> Security origin
  - `databaseName` <[string]> Database name

Deletes a database.

#### IndexedDB.disable()

Disables events from backend.

#### IndexedDB.enable()

Enables events from backend.

#### IndexedDB.requestData()
- parameters
  - `securityOrigin` <[string]> Security origin
  - `databaseName` <[string]> Database name
  - `objectStoreName` <[string]> Object store name
  - `indexName` <[string]> Index name, empty string for object store data requests
  - `skipCount` <[integer]> Number of records to skip
  - `pageSize` <[integer]> Number of records to fetch
  - `keyRange` <KeyRange> Key range
- returns
  - `objectStoreDataEntries` array of <DataEntry> Array of object store data entries
  - `hasMore` <[boolean]> If true, there are more entries to fetch in the given range

Requests data from object store or index.

#### IndexedDB.requestDatabase()
- parameters
  - `securityOrigin` <[string]> Security origin
  - `databaseName` <[string]> Database name
- returns
  - `databaseWithObjectStores` <DatabaseWithObjectStores> Database with an array of object stores

Requests database with given name in given frame.

#### IndexedDB.requestDatabaseNames()
- parameters
  - `securityOrigin` <[string]> Security origin
- returns
  - `databaseNames` array of <[string]> Database names for origin

Requests database names for given security origin.

---

### domain: Input

#### Input.dispatchKeyEvent()
- parameters
  - `type` <[string]> Type of the key event
  - `modifiers` <[integer]> Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
(default: 0)
  - `timestamp` <TimeSinceEpoch> Time at which the event occurred
  - `text` <[string]> Text as generated by processing a virtual key code with a keyboard layout. Not needed for
for `keyUp` and `rawKeyDown` events (default: "")
  - `unmodifiedText` <[string]> Text that would have been generated by the keyboard if no modifiers were pressed (except for
shift). Useful for shortcut (accelerator) key handling (default: "")
  - `keyIdentifier` <[string]> Unique key identifier (e.g., 'U+0041') (default: "")
  - `code` <[string]> Unique DOM defined string value for each physical key (e.g., 'KeyA') (default: "")
  - `key` <[string]> Unique DOM defined string value describing the meaning of the key in the context of active
modifiers, keyboard layout, etc (e.g., 'AltGr') (default: "")
  - `windowsVirtualKeyCode` <[integer]> Windows virtual key code (default: 0)
  - `nativeVirtualKeyCode` <[integer]> Native virtual key code (default: 0)
  - `autoRepeat` <[boolean]> Whether the event was generated from auto repeat (default: false)
  - `isKeypad` <[boolean]> Whether the event was generated from the keypad (default: false)
  - `isSystemKey` <[boolean]> Whether the event was a system key event (default: false)
  - `location` <[integer]> Whether the event was from the left or right side of the keyboard. 1=Left, 2=Right (default:
0)

Dispatches a key event to the page.

#### Input.dispatchMouseEvent()
- parameters
  - `type` <[string]> Type of the mouse event
  - `x` <[number]> X coordinate of the event relative to the main frame's viewport in CSS pixels
  - `y` <[number]> Y coordinate of the event relative to the main frame's viewport in CSS pixels. 0 refers to
the top of the viewport and Y increases as it proceeds towards the bottom of the viewport
  - `modifiers` <[integer]> Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
(default: 0)
  - `timestamp` <TimeSinceEpoch> Time at which the event occurred
  - `button` <[string]> Mouse button (default: "none")
  - `clickCount` <[integer]> Number of times the mouse button was clicked (default: 0)
  - `deltaX` <[number]> X delta in CSS pixels for mouse wheel event (default: 0)
  - `deltaY` <[number]> Y delta in CSS pixels for mouse wheel event (default: 0)

Dispatches a mouse event to the page.

#### Input.dispatchTouchEvent()
- parameters
  - `type` <[string]> Type of the touch event. TouchEnd and TouchCancel must not contain any touch points, while
TouchStart and TouchMove must contains at least one
  - `touchPoints` array of <TouchPoint> Active touch points on the touch device. One event per any changed point (compared to
previous touch event in a sequence) is generated, emulating pressing/moving/releasing points
one by one
  - `modifiers` <[integer]> Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
(default: 0)
  - `timestamp` <TimeSinceEpoch> Time at which the event occurred

Dispatches a touch event to the page.

#### Input.emulateTouchFromMouseEvent()
- parameters
  - `type` <[string]> Type of the mouse event
  - `x` <[integer]> X coordinate of the mouse pointer in DIP
  - `y` <[integer]> Y coordinate of the mouse pointer in DIP
  - `timestamp` <TimeSinceEpoch> Time at which the event occurred
  - `button` <[string]> Mouse button
  - `deltaX` <[number]> X delta in DIP for mouse wheel event (default: 0)
  - `deltaY` <[number]> Y delta in DIP for mouse wheel event (default: 0)
  - `modifiers` <[integer]> Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
(default: 0)
  - `clickCount` <[integer]> Number of times the mouse button was clicked (default: 0)

Emulates touch event from the mouse event parameters.

#### Input.setIgnoreInputEvents()
- parameters
  - `ignore` <[boolean]> Ignores input events processing when set to true

Ignores input events (useful while auditing page).

#### Input.synthesizePinchGesture()
- parameters
  - `x` <[number]> X coordinate of the start of the gesture in CSS pixels
  - `y` <[number]> Y coordinate of the start of the gesture in CSS pixels
  - `scaleFactor` <[number]> Relative scale factor after zooming (>1.0 zooms in, <1.0 zooms out)
  - `relativeSpeed` <[integer]> Relative pointer speed in pixels per second (default: 800)
  - `gestureSourceType` <GestureSourceType> Which type of input events to be generated (default: 'default', which queries the platform
for the preferred input type)

Synthesizes a pinch gesture over a time period by issuing appropriate touch events.

#### Input.synthesizeScrollGesture()
- parameters
  - `x` <[number]> X coordinate of the start of the gesture in CSS pixels
  - `y` <[number]> Y coordinate of the start of the gesture in CSS pixels
  - `xDistance` <[number]> The distance to scroll along the X axis (positive to scroll left)
  - `yDistance` <[number]> The distance to scroll along the Y axis (positive to scroll up)
  - `xOverscroll` <[number]> The number of additional pixels to scroll back along the X axis, in addition to the given
distance
  - `yOverscroll` <[number]> The number of additional pixels to scroll back along the Y axis, in addition to the given
distance
  - `preventFling` <[boolean]> Prevent fling (default: true)
  - `speed` <[integer]> Swipe speed in pixels per second (default: 800)
  - `gestureSourceType` <GestureSourceType> Which type of input events to be generated (default: 'default', which queries the platform
for the preferred input type)
  - `repeatCount` <[integer]> The number of times to repeat the gesture (default: 0)
  - `repeatDelayMs` <[integer]> The number of milliseconds delay between each repeat. (default: 250)
  - `interactionMarkerName` <[string]> The name of the interaction markers to generate, if not empty (default: "")

Synthesizes a scroll gesture over a time period by issuing appropriate touch events.

#### Input.synthesizeTapGesture()
- parameters
  - `x` <[number]> X coordinate of the start of the gesture in CSS pixels
  - `y` <[number]> Y coordinate of the start of the gesture in CSS pixels
  - `duration` <[integer]> Duration between touchdown and touchup events in ms (default: 50)
  - `tapCount` <[integer]> Number of times to perform the tap (e.g. 2 for double tap, default: 1)
  - `gestureSourceType` <GestureSourceType> Which type of input events to be generated (default: 'default', which queries the platform
for the preferred input type)

Synthesizes a tap gesture over a time period by issuing appropriate touch events.

---

### domain: Inspector

#### Inspector.disable()

Disables inspector domain notifications.

#### Inspector.enable()

Enables inspector domain notifications.

#### event: Inspector.detached
- `reason` <[string]> The reason why connection has been terminated

Fired when remote debugging connection is about to be terminated. Contains detach reason.

#### event: Inspector.targetCrashed

Fired when debugging target has crashed

---

### domain: LayerTree

#### LayerTree.compositingReasons()
- parameters
  - `layerId` <LayerId> The id of the layer for which we want to get the reasons it was composited
- returns
  - `compositingReasons` array of <[string]> A list of strings specifying reasons for the given layer to become composited

Provides the reasons why the given layer was composited.

#### LayerTree.disable()

Disables compositing tree inspection.

#### LayerTree.enable()

Enables compositing tree inspection.

#### LayerTree.loadSnapshot()
- parameters
  - `tiles` array of <PictureTile> An array of tiles composing the snapshot
- returns
  - `snapshotId` <SnapshotId> The id of the snapshot

Returns the snapshot identifier.

#### LayerTree.makeSnapshot()
- parameters
  - `layerId` <LayerId> The id of the layer
- returns
  - `snapshotId` <SnapshotId> The id of the layer snapshot

Returns the layer snapshot identifier.

#### LayerTree.profileSnapshot()
- parameters
  - `snapshotId` <SnapshotId> The id of the layer snapshot
  - `minRepeatCount` <[integer]> The maximum number of times to replay the snapshot (1, if not specified)
  - `minDuration` <[number]> The minimum duration (in seconds) to replay the snapshot
  - `clipRect` <DOM.Rect> The clip rectangle to apply when replaying the snapshot
- returns
  - `timings` array of <PaintProfile> The array of paint profiles, one per run

#### LayerTree.releaseSnapshot()
- parameters
  - `snapshotId` <SnapshotId> The id of the layer snapshot

Releases layer snapshot captured by the back-end.

#### LayerTree.replaySnapshot()
- parameters
  - `snapshotId` <SnapshotId> The id of the layer snapshot
  - `fromStep` <[integer]> The first step to replay from (replay from the very start if not specified)
  - `toStep` <[integer]> The last step to replay to (replay till the end if not specified)
  - `scale` <[number]> The scale to apply while replaying (defaults to 1)
- returns
  - `dataURL` <[string]> A data: URL for resulting image

Replays the layer snapshot and returns the resulting bitmap.

#### LayerTree.snapshotCommandLog()
- parameters
  - `snapshotId` <SnapshotId> The id of the layer snapshot
- returns
  - `commandLog` array of <[object]> The array of canvas function calls

Replays the layer snapshot and returns canvas log.

#### event: LayerTree.layerPainted
- `layerId` <LayerId> The id of the painted layer
- `clip` <DOM.Rect> Clip rectangle

#### event: LayerTree.layerTreeDidChange
- `layers` array of <Layer> Layer tree, absent if not in the comspositing mode

---

### domain: Log

Provides access to log entries.

#### Log.clear()

Clears the log.

#### Log.disable()

Disables log domain, prevents further log entries from being reported to the client.

#### Log.enable()

Enables log domain, sends the entries collected so far to the client by means of the
`entryAdded` notification.

#### Log.startViolationsReport()
- parameters
  - `config` array of <ViolationSetting> Configuration for violations

start violation reporting.

#### Log.stopViolationsReport()

Stop violation reporting.

#### event: Log.entryAdded
- `entry` <LogEntry> The entry

Issued when new message was logged.

---

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

---

### domain: Network

Network domain allows tracking network activities of the page. It exposes information about http,
file, data and other requests and responses, their headers, bodies, timing, etc.

#### Network.canClearBrowserCache()
- returns
  - `result` <[boolean]> True if browser cache can be cleared

Tells whether clearing browser cache is supported.

#### Network.canClearBrowserCookies()
- returns
  - `result` <[boolean]> True if browser cookies can be cleared

Tells whether clearing browser cookies is supported.

#### Network.canEmulateNetworkConditions()
- returns
  - `result` <[boolean]> True if emulation of network conditions is supported

Tells whether emulation of network conditions is supported.

#### Network.clearBrowserCache()

Clears browser cache.

#### Network.clearBrowserCookies()

Clears browser cookies.

#### Network.continueInterceptedRequest()
- parameters
  - `interceptionId` <InterceptionId> 
  - `errorReason` <ErrorReason> If set this causes the request to fail with the given reason. Passing `Aborted` for requests
marked with `isNavigationRequest` also cancels the navigation. Must not be set in response
to an authChallenge
  - `rawResponse` <[string]> If set the requests completes using with the provided base64 encoded raw response, including
HTTP status line and headers etc... Must not be set in response to an authChallenge
  - `url` <[string]> If set the request url will be modified in a way that's not observable by page. Must not be
set in response to an authChallenge
  - `method` <[string]> If set this allows the request method to be overridden. Must not be set in response to an
authChallenge
  - `postData` <[string]> If set this allows postData to be set. Must not be set in response to an authChallenge
  - `headers` <Headers> If set this allows the request headers to be changed. Must not be set in response to an
authChallenge
  - `authChallengeResponse` <AuthChallengeResponse> Response to a requestIntercepted with an authChallenge. Must not be set otherwise

Response to Network.requestIntercepted which either modifies the request to continue with any
modifications, or blocks it, or completes it with the provided response bytes. If a network
fetch occurs as a result which encounters a redirect an additional Network.requestIntercepted
event will be sent with the same InterceptionId.

#### Network.deleteCookies()
- parameters
  - `name` <[string]> Name of the cookies to remove
  - `url` <[string]> If specified, deletes all the cookies with the given name where domain and path match
provided URL
  - `domain` <[string]> If specified, deletes only cookies with the exact domain
  - `path` <[string]> If specified, deletes only cookies with the exact path

Deletes browser cookies with matching name and url or domain/path pair.

#### Network.disable()

Disables network tracking, prevents network events from being sent to the client.

#### Network.emulateNetworkConditions()
- parameters
  - `offline` <[boolean]> True to emulate internet disconnection
  - `latency` <[number]> Minimum latency from request sent to response headers received (ms)
  - `downloadThroughput` <[number]> Maximal aggregated download throughput (bytes/sec). -1 disables download throttling
  - `uploadThroughput` <[number]> Maximal aggregated upload throughput (bytes/sec).  -1 disables upload throttling
  - `connectionType` <ConnectionType> Connection type if known

Activates emulation of network conditions.

#### Network.enable()
- parameters
  - `maxTotalBufferSize` <[integer]> Buffer size in bytes to use when preserving network payloads (XHRs, etc)
  - `maxResourceBufferSize` <[integer]> Per-resource buffer size in bytes to use when preserving network payloads (XHRs, etc)

Enables network tracking, network events will now be delivered to the client.

#### Network.getAllCookies()
- returns
  - `cookies` array of <Cookie> Array of cookie objects

Returns all browser cookies. Depending on the backend support, will return detailed cookie
information in the `cookies` field.

#### Network.getCertificate()
- parameters
  - `origin` <[string]> Origin to get certificate for
- returns
  - `tableNames` array of <[string]> 

Returns the DER-encoded certificate.

#### Network.getCookies()
- parameters
  - `urls` array of <[string]> The list of URLs for which applicable cookies will be fetched
- returns
  - `cookies` array of <Cookie> Array of cookie objects

Returns all browser cookies for the current URL. Depending on the backend support, will return
detailed cookie information in the `cookies` field.

#### Network.getResponseBody()
- parameters
  - `requestId` <RequestId> Identifier of the network request to get content for
- returns
  - `body` <[string]> Response body
  - `base64Encoded` <[boolean]> True, if content was sent as base64

Returns content served for the given request.

#### Network.getResponseBodyForInterception()
- parameters
  - `interceptionId` <InterceptionId> Identifier for the intercepted request to get body for
- returns
  - `body` <[string]> Response body
  - `base64Encoded` <[boolean]> True, if content was sent as base64

Returns content served for the given currently intercepted request.

#### Network.replayXHR()
- parameters
  - `requestId` <RequestId> Identifier of XHR to replay

This method sends a new XMLHttpRequest which is identical to the original one. The following
parameters should be identical: method, url, async, request body, extra headers, withCredentials
attribute, user, password.

#### Network.searchInResponseBody()
- parameters
  - `requestId` <RequestId> Identifier of the network response to search
  - `query` <[string]> String to search for
  - `caseSensitive` <[boolean]> If true, search is case sensitive
  - `isRegex` <[boolean]> If true, treats string parameter as regex
- returns
  - `result` array of <Debugger.SearchMatch> List of search matches

Searches for given string in response content.

#### Network.setBlockedURLs()
- parameters
  - `urls` array of <[string]> URL patterns to block. Wildcards ('*') are allowed

Blocks URLs from loading.

#### Network.setBypassServiceWorker()
- parameters
  - `bypass` <[boolean]> Bypass service worker and load from network

Toggles ignoring of service worker for each request.

#### Network.setCacheDisabled()
- parameters
  - `cacheDisabled` <[boolean]> Cache disabled state

Toggles ignoring cache for each request. If `true`, cache will not be used.

#### Network.setCookie()
- parameters
  - `name` <[string]> Cookie name
  - `value` <[string]> Cookie value
  - `url` <[string]> The request-URI to associate with the setting of the cookie. This value can affect the
default domain and path values of the created cookie
  - `domain` <[string]> Cookie domain
  - `path` <[string]> Cookie path
  - `secure` <[boolean]> True if cookie is secure
  - `httpOnly` <[boolean]> True if cookie is http-only
  - `sameSite` <CookieSameSite> Cookie SameSite type
  - `expires` <TimeSinceEpoch> Cookie expiration date, session cookie if not set
- returns
  - `success` <[boolean]> True if successfully set cookie

Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.

#### Network.setCookies()
- parameters
  - `cookies` array of <CookieParam> Cookies to be set

Sets given cookies.

#### Network.setDataSizeLimitsForTest()
- parameters
  - `maxTotalSize` <[integer]> Maximum total buffer size
  - `maxResourceSize` <[integer]> Maximum per-resource size

For testing.

#### Network.setExtraHTTPHeaders()
- parameters
  - `headers` <Headers> Map with extra HTTP headers

Specifies whether to always send extra HTTP headers with the requests from this page.

#### Network.setRequestInterception()
- parameters
  - `patterns` array of <RequestPattern> Requests matching any of these patterns will be forwarded and wait for the corresponding
continueInterceptedRequest call

Sets the requests to intercept that match a the provided patterns and optionally resource types.

#### Network.setUserAgentOverride()
- parameters
  - `userAgent` <[string]> User agent to use

Allows overriding user agent with the given string.

#### event: Network.dataReceived
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `dataLength` <[integer]> Data chunk length
- `encodedDataLength` <[integer]> Actual bytes received (might be less than dataLength for compressed encodings)

Fired when data chunk was received over the network.

#### event: Network.eventSourceMessageReceived
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `eventName` <[string]> Message type
- `eventId` <[string]> Message identifier
- `data` <[string]> Message content

Fired when EventSource message is received.

#### event: Network.loadingFailed
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `type` <Page.ResourceType> Resource type
- `errorText` <[string]> User friendly error message
- `canceled` <[boolean]> True if loading was canceled
- `blockedReason` <BlockedReason> The reason why loading was blocked, if any

Fired when HTTP request has failed to load.

#### event: Network.loadingFinished
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `encodedDataLength` <[number]> Total number of bytes received for this request

Fired when HTTP request has finished loading.

#### event: Network.requestIntercepted
- `interceptionId` <InterceptionId> Each request the page makes will have a unique id, however if any redirects are encountered
while processing that fetch, they will be reported with the same id as the original fetch.
Likewise if HTTP authentication is needed then the same fetch id will be used
- `request` <Request> 
- `frameId` <Page.FrameId> The id of the frame that initiated the request
- `resourceType` <Page.ResourceType> How the requested resource will be used
- `isNavigationRequest` <[boolean]> Whether this is a navigation request, which can abort the navigation completely
- `redirectUrl` <[string]> Redirect location, only sent if a redirect was intercepted
- `authChallenge` <AuthChallenge> Details of the Authorization Challenge encountered. If this is set then
continueInterceptedRequest must contain an authChallengeResponse
- `responseErrorReason` <ErrorReason> Response error if intercepted at response stage or if redirect occurred while intercepting
request
- `responseStatusCode` <[integer]> Response code if intercepted at response stage or if redirect occurred while intercepting
request or auth retry occurred
- `responseHeaders` <Headers> Response headers if intercepted at the response stage or if redirect occurred while
intercepting request or auth retry occurred

Details of an intercepted HTTP request, which must be either allowed, blocked, modified or
mocked.

#### event: Network.requestServedFromCache
- `requestId` <RequestId> Request identifier

Fired if request ended up loading from cache.

#### event: Network.requestWillBeSent
- `requestId` <RequestId> Request identifier
- `loaderId` <LoaderId> Loader identifier. Empty string if the request is fetched from worker
- `documentURL` <[string]> URL of the document this request is loaded for
- `request` <Request> Request data
- `timestamp` <MonotonicTime> Timestamp
- `wallTime` <TimeSinceEpoch> Timestamp
- `initiator` <Initiator> Request initiator
- `redirectResponse` <Response> Redirect response data
- `type` <Page.ResourceType> Type of this resource
- `frameId` <Page.FrameId> Frame identifier

Fired when page is about to send HTTP request.

#### event: Network.resourceChangedPriority
- `requestId` <RequestId> Request identifier
- `newPriority` <ResourcePriority> New priority
- `timestamp` <MonotonicTime> Timestamp

Fired when resource loading priority is changed

#### event: Network.responseReceived
- `requestId` <RequestId> Request identifier
- `loaderId` <LoaderId> Loader identifier. Empty string if the request is fetched from worker
- `timestamp` <MonotonicTime> Timestamp
- `type` <Page.ResourceType> Resource type
- `response` <Response> Response data
- `frameId` <Page.FrameId> Frame identifier

Fired when HTTP response is available.

#### event: Network.webSocketClosed
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp

Fired when WebSocket is closed.

#### event: Network.webSocketCreated
- `requestId` <RequestId> Request identifier
- `url` <[string]> WebSocket request URL
- `initiator` <Initiator> Request initiator

Fired upon WebSocket creation.

#### event: Network.webSocketFrameError
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `errorMessage` <[string]> WebSocket frame error message

Fired when WebSocket frame error occurs.

#### event: Network.webSocketFrameReceived
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `response` <WebSocketFrame> WebSocket response data

Fired when WebSocket frame is received.

#### event: Network.webSocketFrameSent
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `response` <WebSocketFrame> WebSocket response data

Fired when WebSocket frame is sent.

#### event: Network.webSocketHandshakeResponseReceived
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `response` <WebSocketResponse> WebSocket response data

Fired when WebSocket handshake response becomes available.

#### event: Network.webSocketWillSendHandshakeRequest
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `wallTime` <TimeSinceEpoch> UTC Timestamp
- `request` <WebSocketRequest> WebSocket request data

Fired when WebSocket is about to initiate handshake.

---

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

---

### domain: Page

Actions and events related to the inspected page belong to the page domain.

#### Page.addScriptToEvaluateOnLoad()
- parameters
  - `scriptSource` <[string]> 
- returns
  - `identifier` <ScriptIdentifier> Identifier of the added script

Deprecated, please use addScriptToEvaluateOnNewDocument instead.

#### Page.addScriptToEvaluateOnNewDocument()
- parameters
  - `source` <[string]> 
- returns
  - `identifier` <ScriptIdentifier> Identifier of the added script

Evaluates given script in every frame upon creation (before loading frame's scripts).

#### Page.bringToFront()

Brings page to front (activates tab).

#### Page.captureScreenshot()
- parameters
  - `format` <[string]> Image compression format (defaults to png)
  - `quality` <[integer]> Compression quality from range [0..100] (jpeg only)
  - `clip` <Viewport> Capture the screenshot of a given region only
  - `fromSurface` <[boolean]> Capture the screenshot from the surface, rather than the view. Defaults to true
- returns
  - `data` <[string]> Base64-encoded image data

Capture page screenshot.

#### Page.clearDeviceMetricsOverride()

Clears the overriden device metrics.

#### Page.clearDeviceOrientationOverride()

Clears the overridden Device Orientation.

#### Page.clearGeolocationOverride()

Clears the overriden Geolocation Position and Error.

#### Page.createIsolatedWorld()
- parameters
  - `frameId` <FrameId> Id of the frame in which the isolated world should be created
  - `worldName` <[string]> An optional name which is reported in the Execution Context
  - `grantUniveralAccess` <[boolean]> Whether or not universal access should be granted to the isolated world. This is a powerful
option, use with caution
- returns
  - `executionContextId` <Runtime.ExecutionContextId> Execution context of the isolated world

Creates an isolated world for the given frame.

#### Page.deleteCookie()
- parameters
  - `cookieName` <[string]> Name of the cookie to remove
  - `url` <[string]> URL to match cooke domain and path

Deletes browser cookie with given name, domain and path.

#### Page.disable()

Disables page domain notifications.

#### Page.enable()

Enables page domain notifications.

#### Page.getAppManifest()
- returns
  - `url` <[string]> Manifest location
  - `errors` array of <AppManifestError> 
  - `data` <[string]> Manifest content

#### Page.getCookies()
- returns
  - `cookies` array of <Network.Cookie> Array of cookie objects

Returns all browser cookies. Depending on the backend support, will return detailed cookie
information in the `cookies` field.

#### Page.getFrameTree()
- returns
  - `frameTree` <FrameTree> Present frame tree structure

Returns present frame tree structure.

#### Page.getLayoutMetrics()
- returns
  - `layoutViewport` <LayoutViewport> Metrics relating to the layout viewport
  - `visualViewport` <VisualViewport> Metrics relating to the visual viewport
  - `contentSize` <DOM.Rect> Size of scrollable area

Returns metrics relating to the layouting of the page, such as viewport bounds/scale.

#### Page.getNavigationHistory()
- returns
  - `currentIndex` <[integer]> Index of the current navigation history entry
  - `entries` array of <NavigationEntry> Array of navigation history entries

Returns navigation history for the current page.

#### Page.getResourceContent()
- parameters
  - `frameId` <FrameId> Frame id to get resource for
  - `url` <[string]> URL of the resource to get content for
- returns
  - `content` <[string]> Resource content
  - `base64Encoded` <[boolean]> True, if content was served as base64

Returns content of the given resource.

#### Page.getResourceTree()
- returns
  - `frameTree` <FrameResourceTree> Present frame / resource tree structure

Returns present frame / resource tree structure.

#### Page.handleJavaScriptDialog()
- parameters
  - `accept` <[boolean]> Whether to accept or dismiss the dialog
  - `promptText` <[string]> The text to enter into the dialog prompt before accepting. Used only if this is a prompt
dialog

Accepts or dismisses a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload).

#### Page.navigate()
- parameters
  - `url` <[string]> URL to navigate the page to
  - `referrer` <[string]> Referrer URL
  - `transitionType` <TransitionType> Intended transition type
- returns
  - `frameId` <FrameId> Frame id that has navigated (or failed to navigate)
  - `loaderId` <Network.LoaderId> Loader identifier
  - `errorText` <[string]> User friendly error message, present if and only if navigation has failed

Navigates current page to the given URL.

#### Page.navigateToHistoryEntry()
- parameters
  - `entryId` <[integer]> Unique id of the entry to navigate to

Navigates current page to the given history entry.

#### Page.printToPDF()
- parameters
  - `landscape` <[boolean]> Paper orientation. Defaults to false
  - `displayHeaderFooter` <[boolean]> Display header and footer. Defaults to false
  - `printBackground` <[boolean]> Print background graphics. Defaults to false
  - `scale` <[number]> Scale of the webpage rendering. Defaults to 1
  - `paperWidth` <[number]> Paper width in inches. Defaults to 8.5 inches
  - `paperHeight` <[number]> Paper height in inches. Defaults to 11 inches
  - `marginTop` <[number]> Top margin in inches. Defaults to 1cm (~0.4 inches)
  - `marginBottom` <[number]> Bottom margin in inches. Defaults to 1cm (~0.4 inches)
  - `marginLeft` <[number]> Left margin in inches. Defaults to 1cm (~0.4 inches)
  - `marginRight` <[number]> Right margin in inches. Defaults to 1cm (~0.4 inches)
  - `pageRanges` <[string]> Paper ranges to print, e.g., '1-5, 8, 11-13'. Defaults to the empty string, which means
print all pages
  - `ignoreInvalidPageRanges` <[boolean]> Whether to silently ignore invalid but successfully parsed page ranges, such as '3-2'.
Defaults to false
- returns
  - `data` <[string]> Base64-encoded pdf data

Print page as PDF.

#### Page.reload()
- parameters
  - `ignoreCache` <[boolean]> If true, browser cache is ignored (as if the user pressed Shift+refresh)
  - `scriptToEvaluateOnLoad` <[string]> If set, the script will be injected into all frames of the inspected page after reload

Reloads given page optionally ignoring the cache.

#### Page.removeScriptToEvaluateOnLoad()
- parameters
  - `identifier` <ScriptIdentifier> 

Deprecated, please use removeScriptToEvaluateOnNewDocument instead.

#### Page.removeScriptToEvaluateOnNewDocument()
- parameters
  - `identifier` <ScriptIdentifier> 

Removes given script from the list.

#### Page.requestAppBanner()

#### Page.screencastFrameAck()
- parameters
  - `sessionId` <[integer]> Frame number

Acknowledges that a screencast frame has been received by the frontend.

#### Page.searchInResource()
- parameters
  - `frameId` <FrameId> Frame id for resource to search in
  - `url` <[string]> URL of the resource to search in
  - `query` <[string]> String to search for
  - `caseSensitive` <[boolean]> If true, search is case sensitive
  - `isRegex` <[boolean]> If true, treats string parameter as regex
- returns
  - `result` array of <Debugger.SearchMatch> List of search matches

Searches for given string in resource content.

#### Page.setAdBlockingEnabled()
- parameters
  - `enabled` <[boolean]> Whether to block ads

Enable Chrome's experimental ad filter on all sites.

#### Page.setAutoAttachToCreatedPages()
- parameters
  - `autoAttach` <[boolean]> If true, browser will open a new inspector window for every page created from this one

Controls whether browser will open a new inspector window for connected pages.

#### Page.setDeviceMetricsOverride()
- parameters
  - `width` <[integer]> Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override
  - `height` <[integer]> Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override
  - `deviceScaleFactor` <[number]> Overriding device scale factor value. 0 disables the override
  - `mobile` <[boolean]> Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text
autosizing and more
  - `scale` <[number]> Scale to apply to resulting view image
  - `screenWidth` <[integer]> Overriding screen width value in pixels (minimum 0, maximum 10000000)
  - `screenHeight` <[integer]> Overriding screen height value in pixels (minimum 0, maximum 10000000)
  - `positionX` <[integer]> Overriding view X position on screen in pixels (minimum 0, maximum 10000000)
  - `positionY` <[integer]> Overriding view Y position on screen in pixels (minimum 0, maximum 10000000)
  - `dontSetVisibleSize` <[boolean]> Do not set visible view size, rely upon explicit setVisibleSize call
  - `screenOrientation` <Emulation.ScreenOrientation> Screen orientation override
  - `viewport` <Viewport> The viewport dimensions and scale. If not set, the override is cleared

Overrides the values of device screen dimensions (window.screen.width, window.screen.height,
window.innerWidth, window.innerHeight, and "device-width"/"device-height"-related CSS media
query results).

#### Page.setDeviceOrientationOverride()
- parameters
  - `alpha` <[number]> Mock alpha
  - `beta` <[number]> Mock beta
  - `gamma` <[number]> Mock gamma

Overrides the Device Orientation.

#### Page.setDocumentContent()
- parameters
  - `frameId` <FrameId> Frame id to set HTML for
  - `html` <[string]> HTML content to set

Sets given markup as the document's HTML.

#### Page.setDownloadBehavior()
- parameters
  - `behavior` <[string]> Whether to allow all or deny all download requests, or use default Chrome behavior if
available (otherwise deny)
  - `downloadPath` <[string]> The default path to save downloaded files to. This is requred if behavior is set to 'allow'

Set the behavior when downloading a file.

#### Page.setGeolocationOverride()
- parameters
  - `latitude` <[number]> Mock latitude
  - `longitude` <[number]> Mock longitude
  - `accuracy` <[number]> Mock accuracy

Overrides the Geolocation Position or Error. Omitting any of the parameters emulates position
unavailable.

#### Page.setLifecycleEventsEnabled()
- parameters
  - `enabled` <[boolean]> If true, starts emitting lifecycle events

Controls whether page will emit lifecycle events.

#### Page.setTouchEmulationEnabled()
- parameters
  - `enabled` <[boolean]> Whether the touch event emulation should be enabled
  - `configuration` <[string]> Touch/gesture events configuration. Default: current platform

Toggles mouse event-based touch event emulation.

#### Page.startScreencast()
- parameters
  - `format` <[string]> Image compression format
  - `quality` <[integer]> Compression quality from range [0..100]
  - `maxWidth` <[integer]> Maximum screenshot width
  - `maxHeight` <[integer]> Maximum screenshot height
  - `everyNthFrame` <[integer]> Send every n-th frame

Starts sending each frame using the `screencastFrame` event.

#### Page.stopLoading()

Force the page stop all navigations and pending resource fetches.

#### Page.stopScreencast()

Stops sending each frame in the `screencastFrame`.

#### event: Page.domContentEventFired
- `timestamp` <Network.MonotonicTime> 

#### event: Page.frameAttached
- `frameId` <FrameId> Id of the frame that has been attached
- `parentFrameId` <FrameId> Parent frame identifier
- `stack` <Runtime.StackTrace> JavaScript stack trace of when frame was attached, only set if frame initiated from script

Fired when frame has been attached to its parent.

#### event: Page.frameClearedScheduledNavigation
- `frameId` <FrameId> Id of the frame that has cleared its scheduled navigation

Fired when frame no longer has a scheduled navigation.

#### event: Page.frameDetached
- `frameId` <FrameId> Id of the frame that has been detached

Fired when frame has been detached from its parent.

#### event: Page.frameNavigated
- `frame` <Frame> Frame object

Fired once navigation of the frame has completed. Frame is now associated with the new loader.

#### event: Page.frameResized

#### event: Page.frameScheduledNavigation
- `frameId` <FrameId> Id of the frame that has scheduled a navigation
- `delay` <[number]> Delay (in seconds) until the navigation is scheduled to begin. The navigation is not
guaranteed to start
- `reason` <[string]> The reason for the navigation
- `url` <[string]> The destination URL for the scheduled navigation

Fired when frame schedules a potential navigation.

#### event: Page.frameStartedLoading
- `frameId` <FrameId> Id of the frame that has started loading

Fired when frame has started loading.

#### event: Page.frameStoppedLoading
- `frameId` <FrameId> Id of the frame that has stopped loading

Fired when frame has stopped loading.

#### event: Page.interstitialHidden

Fired when interstitial page was hidden

#### event: Page.interstitialShown

Fired when interstitial page was shown

#### event: Page.javascriptDialogClosed
- `result` <[boolean]> Whether dialog was confirmed
- `userInput` <[string]> User input in case of prompt

Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) has been
closed.

#### event: Page.javascriptDialogOpening
- `url` <[string]> Frame url
- `message` <[string]> Message that will be displayed by the dialog
- `type` <DialogType> Dialog type
- `defaultPrompt` <[string]> Default dialog prompt

Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) is about to
open.

#### event: Page.lifecycleEvent
- `frameId` <FrameId> Id of the frame
- `loaderId` <Network.LoaderId> Loader identifier. Empty string if the request is fetched from worker
- `name` <[string]> 
- `timestamp` <Network.MonotonicTime> 

Fired for top level page lifecycle events such as navigation, load, paint, etc.

#### event: Page.loadEventFired
- `timestamp` <Network.MonotonicTime> 

#### event: Page.screencastFrame
- `data` <[string]> Base64-encoded compressed image
- `metadata` <ScreencastFrameMetadata> Screencast frame metadata
- `sessionId` <[integer]> Frame number

Compressed image data requested by the `startScreencast`.

#### event: Page.screencastVisibilityChanged
- `visible` <[boolean]> True if the page is visible

Fired when the page with currently enabled screencast was shown or hidden `.

#### event: Page.windowOpen
- `url` <[string]> The URL for the new window
- `windowName` <[string]> Window name
- `windowFeatures` array of <[string]> An array of enabled window features
- `userGesture` <[boolean]> Whether or not it was triggered by user gesture

Fired when a new window is going to be opened, via window.open(), link click, form submission,
etc.

---

### domain: Performance

#### Performance.disable()

Disable collecting and reporting metrics.

#### Performance.enable()

Enable collecting and reporting metrics.

#### Performance.getMetrics()
- returns
  - `metrics` array of <Metric> Current values for run-time metrics

Retrieve current values of run-time metrics.

#### event: Performance.metrics
- `metrics` array of <Metric> Current values of the metrics
- `title` <[string]> Timestamp title

Current values of the metrics.

---

### domain: Security

Security

#### Security.disable()

Disables tracking security state changes.

#### Security.enable()

Enables tracking security state changes.

#### Security.handleCertificateError()
- parameters
  - `eventId` <[integer]> The ID of the event
  - `action` <CertificateErrorAction> The action to take on the certificate error

Handles a certificate error that fired a certificateError event.

#### Security.setOverrideCertificateErrors()
- parameters
  - `override` <[boolean]> If true, certificate errors will be overridden

Enable/disable overriding certificate errors. If enabled, all certificate error events need to
be handled by the DevTools client and should be answered with handleCertificateError commands.

#### event: Security.certificateError
- `eventId` <[integer]> The ID of the event
- `errorType` <[string]> The type of the error
- `requestURL` <[string]> The url that was requested

There is a certificate error. If overriding certificate errors is enabled, then it should be
handled with the handleCertificateError command. Note: this event does not fire if the
certificate error has been allowed internally.

#### event: Security.securityStateChanged
- `securityState` <SecurityState> Security state
- `schemeIsCryptographic` <[boolean]> True if the page was loaded over cryptographic transport such as HTTPS
- `explanations` array of <SecurityStateExplanation> List of explanations for the security state. If the overall security state is `insecure` or
`warning`, at least one corresponding explanation should be included
- `insecureContentStatus` <InsecureContentStatus> Information about insecure content on the page
- `summary` <[string]> Overrides user-visible description of the state

The security state of the page changed.

---

### domain: ServiceWorker

#### ServiceWorker.deliverPushMessage()
- parameters
  - `origin` <[string]> 
  - `registrationId` <[string]> 
  - `data` <[string]> 

#### ServiceWorker.disable()

#### ServiceWorker.dispatchSyncEvent()
- parameters
  - `origin` <[string]> 
  - `registrationId` <[string]> 
  - `tag` <[string]> 
  - `lastChance` <[boolean]> 

#### ServiceWorker.enable()

#### ServiceWorker.inspectWorker()
- parameters
  - `versionId` <[string]> 

#### ServiceWorker.setForceUpdateOnPageLoad()
- parameters
  - `forceUpdateOnPageLoad` <[boolean]> 

#### ServiceWorker.skipWaiting()
- parameters
  - `scopeURL` <[string]> 

#### ServiceWorker.startWorker()
- parameters
  - `scopeURL` <[string]> 

#### ServiceWorker.stopAllWorkers()

#### ServiceWorker.stopWorker()
- parameters
  - `versionId` <[string]> 

#### ServiceWorker.unregister()
- parameters
  - `scopeURL` <[string]> 

#### ServiceWorker.updateRegistration()
- parameters
  - `scopeURL` <[string]> 

#### event: ServiceWorker.workerErrorReported
- `errorMessage` <ServiceWorkerErrorMessage> 

#### event: ServiceWorker.workerRegistrationUpdated
- `registrations` array of <ServiceWorkerRegistration> 

#### event: ServiceWorker.workerVersionUpdated
- `versions` array of <ServiceWorkerVersion> 

---

### domain: Storage

#### Storage.clearDataForOrigin()
- parameters
  - `origin` <[string]> Security origin
  - `storageTypes` <[string]> Comma separated origin names

Clears storage for origin.

#### Storage.getUsageAndQuota()
- parameters
  - `origin` <[string]> Security origin
- returns
  - `usage` <[number]> Storage usage (bytes)
  - `quota` <[number]> Storage quota (bytes)
  - `usageBreakdown` array of <UsageForType> Storage usage per type (bytes)

Returns usage and quota in bytes.

#### Storage.trackCacheStorageForOrigin()
- parameters
  - `origin` <[string]> Security origin

Registers origin to be notified when an update occurs to its cache storage list.

#### Storage.trackIndexedDBForOrigin()
- parameters
  - `origin` <[string]> Security origin

Registers origin to be notified when an update occurs to its IndexedDB.

#### Storage.untrackCacheStorageForOrigin()
- parameters
  - `origin` <[string]> Security origin

Unregisters origin from receiving notifications for cache storage.

#### Storage.untrackIndexedDBForOrigin()
- parameters
  - `origin` <[string]> Security origin

Unregisters origin from receiving notifications for IndexedDB.

#### event: Storage.cacheStorageContentUpdated
- `origin` <[string]> Origin to update
- `cacheName` <[string]> Name of cache in origin

A cache's contents have been modified.

#### event: Storage.cacheStorageListUpdated
- `origin` <[string]> Origin to update

A cache has been added/deleted.

#### event: Storage.indexedDBContentUpdated
- `origin` <[string]> Origin to update
- `databaseName` <[string]> Database to update
- `objectStoreName` <[string]> ObjectStore to update

The origin's IndexedDB object store has been modified.

#### event: Storage.indexedDBListUpdated
- `origin` <[string]> Origin to update

The origin's IndexedDB database list has been modified.

---

### domain: SystemInfo

The SystemInfo domain defines methods and events for querying low-level system information.

#### SystemInfo.getInfo()
- returns
  - `gpu` <GPUInfo> Information about the GPUs on the system
  - `modelName` <[string]> A platform-dependent description of the model of the machine. On Mac OS, this is, for
example, 'MacBookPro'. Will be the empty string if not supported
  - `modelVersion` <[string]> A platform-dependent description of the version of the machine. On Mac OS, this is, for
example, '10.1'. Will be the empty string if not supported
  - `commandLine` <[string]> The command line string used to launch the browser. Will be the empty string if not
supported

Returns information about the system.

---

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

---

### domain: Tethering

The Tethering domain defines methods and events for browser port binding.

#### Tethering.bind()
- parameters
  - `port` <[integer]> Port number to bind

Request browser port binding.

#### Tethering.unbind()
- parameters
  - `port` <[integer]> Port number to unbind

Request browser port unbinding.

#### event: Tethering.accepted
- `port` <[integer]> Port number that was successfully bound
- `connectionId` <[string]> Connection id to be used

Informs that port was successfully bound and got a specified connection id.

---

### domain: Tracing

#### Tracing.end()

Stop trace events collection.

#### Tracing.getCategories()
- returns
  - `categories` array of <[string]> A list of supported tracing categories

Gets supported tracing categories.

#### Tracing.recordClockSyncMarker()
- parameters
  - `syncId` <[string]> The ID of this clock sync marker

Record a clock sync marker in the trace.

#### Tracing.requestMemoryDump()
- returns
  - `dumpGuid` <[string]> GUID of the resulting global memory dump
  - `success` <[boolean]> True iff the global memory dump succeeded

Request a global memory dump.

#### Tracing.start()
- parameters
  - `categories` <[string]> Category/tag filter
  - `options` <[string]> Tracing options
  - `bufferUsageReportingInterval` <[number]> If set, the agent will issue bufferUsage events at this interval, specified in milliseconds
  - `transferMode` <[string]> Whether to report trace events as series of dataCollected events or to save trace to a
stream (defaults to `ReportEvents`)
  - `traceConfig` <TraceConfig> 

Start trace events collection.

#### event: Tracing.bufferUsage
- `percentFull` <[number]> A number in range [0..1] that indicates the used size of event buffer as a fraction of its
total size
- `eventCount` <[number]> An approximate number of events in the trace log
- `value` <[number]> A number in range [0..1] that indicates the used size of event buffer as a fraction of its
total size

#### event: Tracing.dataCollected
- `value` array of <[object]> 

Contains an bucket of collected trace events. When tracing is stopped collected events will be
send as a sequence of dataCollected events followed by tracingComplete event.

#### event: Tracing.tracingComplete
- `stream` <IO.StreamHandle> A handle of the stream that holds resulting trace data

Signals that tracing is stopped and there is no trace buffers pending flush, all data were
delivered via dataCollected events.
