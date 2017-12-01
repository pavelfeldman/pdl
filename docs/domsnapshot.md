
### domain: DOMSnapshot 🌱

This domain facilitates obtaining document snapshots with DOM, layout, and style information.

---


#### command: DOMSnapshot.getSnapshot

Returns a document snapshot, including the full DOM tree of the root node (including iframes,
template contents, and imported documents) in a flattened array, as well as layout and
white-listed computed style information for the nodes. Shadow DOM in the returned DOM tree is
flattened.

*parameters*
-  `computedStyleWhitelist` <array of [string]> Whitelist of computed styles to return

*returns*
-  `domNodes` <array of [DOMSnapshot.DOMNode]> The nodes in the DOM tree. The DOMNode at index 0 corresponds to the root document
-  `layoutTreeNodes` <array of [DOMSnapshot.LayoutTreeNode]> The nodes in the layout tree
-  `computedStyles` <array of [DOMSnapshot.ComputedStyle]> Whitelisted ComputedStyle properties for each node in the layout tree

---


#### type: DOMSnapshot.DOMNode

A Node in the DOM tree.

*base type*
- **object**

*properties*
-  `nodeType` <[integer]> `Node`'s nodeType
-  `nodeName` <[string]> `Node`'s nodeName
-  `nodeValue` <[string]> `Node`'s nodeValue
- *optional* `textValue` <[string]> Only set for textarea elements, contains the text value
- *optional* `inputValue` <[string]> Only set for input elements, contains the input's associated text value
- *optional* `inputChecked` <[boolean]> Only set for radio and checkbox input elements, indicates if the element has been checked
- *optional* `optionSelected` <[boolean]> Only set for option elements, indicates if the element has been selected
-  `backendNodeId` <[DOM.BackendNodeId]> `Node`'s id, corresponds to DOM.Node.backendNodeId
- *optional* `childNodeIndexes` <array of [integer]> The indexes of the node's child nodes in the `domNodes` array returned by `getSnapshot`, if
any
- *optional* `attributes` <array of [DOMSnapshot.NameValue]> Attributes of an `Element` node
- *optional* `pseudoElementIndexes` <array of [integer]> Indexes of pseudo elements associated with this node in the `domNodes` array returned by
`getSnapshot`, if any
- *optional* `layoutNodeIndex` <[integer]> The index of the node's related layout tree node in the `layoutTreeNodes` array returned by
`getSnapshot`, if any
- *optional* `documentURL` <[string]> Document URL that `Document` or `FrameOwner` node points to
- *optional* `baseURL` <[string]> Base URL that `Document` or `FrameOwner` node uses for URL completion
- *optional* `contentLanguage` <[string]> Only set for documents, contains the document's content language
- *optional* `documentEncoding` <[string]> Only set for documents, contains the document's character set encoding
- *optional* `publicId` <[string]> `DocumentType` node's publicId
- *optional* `systemId` <[string]> `DocumentType` node's systemId
- *optional* `frameId` <[Page.FrameId]> Frame ID for frame owner elements and also for the document node
- *optional* `contentDocumentIndex` <[integer]> The index of a frame owner element's content document in the `domNodes` array returned by
`getSnapshot`, if any
- *optional* `importedDocumentIndex` <[integer]> Index of the imported document's node of a link element in the `domNodes` array returned by
`getSnapshot`, if any
- *optional* `templateContentIndex` <[integer]> Index of the content node of a template element in the `domNodes` array returned by
`getSnapshot`
- *optional* `pseudoType` <[DOM.PseudoType]> Type of a pseudo element node
- *optional* `isClickable` <[boolean]> Whether this DOM node responds to mouse clicks. This includes nodes that have had click
event listeners attached via JavaScript as well as anchor tags that naturally navigate when
clicked

*returned from command*
- [DOMSnapshot.getSnapshot]

---


#### type: DOMSnapshot.InlineTextBox

Details of post layout rendered text positions. The exact layout should not be regarded as
stable and may change between versions.

*base type*
- **object**

*properties*
-  `boundingBox` <[DOM.Rect]> The absolute position bounding box
-  `startCharacterIndex` <[integer]> The starting index in characters, for this post layout textbox substring
-  `numCharacters` <[integer]> The number of characters in this post layout textbox substring

*property of type*
- [DOMSnapshot.LayoutTreeNode]

---


#### type: DOMSnapshot.LayoutTreeNode

Details of an element in the DOM tree with a LayoutObject.

*base type*
- **object**

*properties*
-  `domNodeIndex` <[integer]> The index of the related DOM node in the `domNodes` array returned by `getSnapshot`
-  `boundingBox` <[DOM.Rect]> The absolute position bounding box
- *optional* `layoutText` <[string]> Contents of the LayoutText, if any
- *optional* `inlineTextNodes` <array of [DOMSnapshot.InlineTextBox]> The post-layout inline text nodes, if any
- *optional* `styleIndex` <[integer]> Index into the `computedStyles` array returned by `getSnapshot`

*returned from command*
- [DOMSnapshot.getSnapshot]

---


#### type: DOMSnapshot.ComputedStyle

A subset of the full ComputedStyle as defined by the request whitelist.

*base type*
- **object**

*properties*
-  `properties` <array of [DOMSnapshot.NameValue]> Name/value pairs of computed style properties

*returned from command*
- [DOMSnapshot.getSnapshot]

---


#### type: DOMSnapshot.NameValue

A name/value pair.

*base type*
- **object**

*properties*
-  `name` <[string]> Attribute/property name
-  `value` <[string]> Attribute/property value

*property of type*
- [DOMSnapshot.ComputedStyle]
- [DOMSnapshot.DOMNode]

[DOMSnapshot.getSnapshot]: domsnapshot.md#command-domsnapshotgetsnapshot "DOMSnapshot.getSnapshot"
[DOMSnapshot.LayoutTreeNode]: domsnapshot.md#type-domsnapshotlayouttreenode "DOMSnapshot.LayoutTreeNode"
[DOMSnapshot.getSnapshot]: domsnapshot.md#command-domsnapshotgetsnapshot "DOMSnapshot.getSnapshot"
[DOMSnapshot.getSnapshot]: domsnapshot.md#command-domsnapshotgetsnapshot "DOMSnapshot.getSnapshot"
[DOMSnapshot.ComputedStyle]: domsnapshot.md#type-domsnapshotcomputedstyle "DOMSnapshot.ComputedStyle"
[DOMSnapshot.DOMNode]: domsnapshot.md#type-domsnapshotdomnode "DOMSnapshot.DOMNode"
[DOM.BackendNodeId]: dom.md#type-dombackendnodeid "DOM.BackendNodeId"
[DOMSnapshot.NameValue]: domsnapshot.md#type-domsnapshotnamevalue "DOMSnapshot.NameValue"
[Page.FrameId]: page.md#type-pageframeid "Page.FrameId"
[DOM.PseudoType]: dom.md#type-dompseudotype "DOM.PseudoType"
[DOM.Rect]: dom.md#type-domrect "DOM.Rect"
[DOM.Rect]: dom.md#type-domrect "DOM.Rect"
[DOMSnapshot.InlineTextBox]: domsnapshot.md#type-domsnapshotinlinetextbox "DOMSnapshot.InlineTextBox"
[DOMSnapshot.NameValue]: domsnapshot.md#type-domsnapshotnamevalue "DOMSnapshot.NameValue"
[DOMSnapshot.DOMNode]: domsnapshot.md#type-domsnapshotdomnode "DOMSnapshot.DOMNode"
[DOMSnapshot.LayoutTreeNode]: domsnapshot.md#type-domsnapshotlayouttreenode "DOMSnapshot.LayoutTreeNode"
[DOMSnapshot.ComputedStyle]: domsnapshot.md#type-domsnapshotcomputedstyle "DOMSnapshot.ComputedStyle"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"