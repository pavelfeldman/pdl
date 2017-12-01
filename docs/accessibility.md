
### domain: Accessibility 🌱

---


#### command: Accessibility.getPartialAXTree 🌱

Fetches the accessibility node and partial accessibility tree for this DOM node, if it exists.

*parameters*
-  `nodeId` <[DOM.NodeId]> ID of node to get the partial accessibility tree for
- *optional* `fetchRelatives` <[boolean]> Whether to fetch this nodes ancestors, siblings and children. Defaults to true

*returns*
-  `nodes` <array of [Accessibility.AXNode]> The `Accessibility.AXNode` for this DOM node, if it exists, plus its ancestors, siblings and
children, if requested

---


#### type: Accessibility.AXNodeId

Unique accessibility node identifier.

*base type*
- **string**

*property of type*
- [Accessibility.AXNode]

---


#### type: Accessibility.AXValueType

Enum of possible property types.

*base type*
- **string**

*property of type*
- [Accessibility.AXValue]

---


#### type: Accessibility.AXValueSourceType

Enum of possible property sources.

*base type*
- **string**

*property of type*
- [Accessibility.AXValueSource]

---


#### type: Accessibility.AXValueNativeSourceType

Enum of possible native property sources (as a subtype of a particular AXValueSourceType).

*base type*
- **string**

*property of type*
- [Accessibility.AXValueSource]

---


#### type: Accessibility.AXValueSource

A single source for a computed AX property.

*base type*
- **object**

*properties*
-  `type` <[Accessibility.AXValueSourceType]> What type of source this is
- *optional* `value` <[Accessibility.AXValue]> The value of this property source
- *optional* `attribute` <[string]> The name of the relevant attribute, if any
- *optional* `attributeValue` <[Accessibility.AXValue]> The value of the relevant attribute, if any
- *optional* `superseded` <[boolean]> Whether this source is superseded by a higher priority source
- *optional* `nativeSource` <[Accessibility.AXValueNativeSourceType]> The native markup source for this value, e.g. a <label> element
- *optional* `nativeSourceValue` <[Accessibility.AXValue]> The value, such as a node or node list, of the native source
- *optional* `invalid` <[boolean]> Whether the value for this property is invalid
- *optional* `invalidReason` <[string]> Reason for the value being invalid, if it is

*property of type*
- [Accessibility.AXValue]

---


#### type: Accessibility.AXRelatedNode

*base type*
- **object**

*properties*
-  `backendDOMNodeId` <[DOM.BackendNodeId]> The BackendNodeId of the related DOM node
- *optional* `idref` <[string]> The IDRef value provided, if any
- *optional* `text` <[string]> The text alternative of this node in the current context

*property of type*
- [Accessibility.AXValue]

---


#### type: Accessibility.AXProperty

*base type*
- **object**

*properties*
-  `name` <[Accessibility.AXPropertyName]> The name of this property
-  `value` <[Accessibility.AXValue]> The value of this property

*property of type*
- [Accessibility.AXNode]

---


#### type: Accessibility.AXValue

A single computed AX property.

*base type*
- **object**

*properties*
-  `type` <[Accessibility.AXValueType]> The type of this value
- *optional* `value` <[any]> The computed value of this property
- *optional* `relatedNodes` <array of [Accessibility.AXRelatedNode]> One or more related nodes, if applicable
- *optional* `sources` <array of [Accessibility.AXValueSource]> The sources which contributed to the computation of this property

*property of type*
- [Accessibility.AXNode]
- [Accessibility.AXProperty]
- [Accessibility.AXValueSource]

---


#### type: Accessibility.AXPropertyName

Values of AXProperty name: from 'busy' to 'roledescription' - states which apply to every AX
node, from 'live' to 'root' - attributes which apply to nodes in live regions, from
'autocomplete' to 'valuetext' - attributes which apply to widgets, from 'checked' to 'selected'
- states which apply to widgets, from 'activedescendant' to 'owns' - relationships between
elements other than parent/child/sibling.

*base type*
- **string**

*property of type*
- [Accessibility.AXProperty]

---


#### type: Accessibility.AXNode

A node in the accessibility tree.

*base type*
- **object**

*properties*
-  `nodeId` <[Accessibility.AXNodeId]> Unique identifier for this node
-  `ignored` <[boolean]> Whether this node is ignored for accessibility
- *optional* `ignoredReasons` <array of [Accessibility.AXProperty]> Collection of reasons why this node is hidden
- *optional* `role` <[Accessibility.AXValue]> This `Node`'s role, whether explicit or implicit
- *optional* `name` <[Accessibility.AXValue]> The accessible name for this `Node`
- *optional* `description` <[Accessibility.AXValue]> The accessible description for this `Node`
- *optional* `value` <[Accessibility.AXValue]> The value for this `Node`
- *optional* `properties` <array of [Accessibility.AXProperty]> All other properties
- *optional* `childIds` <array of [Accessibility.AXNodeId]> IDs for each of this node's child nodes
- *optional* `backendDOMNodeId` <[DOM.BackendNodeId]> The backend ID for the associated DOM node, if any

*returned from command*
- [Accessibility.getPartialAXTree]

[Accessibility.AXNode]: accessibility.md#type-accessibilityaxnode "Accessibility.AXNode"
[Accessibility.AXValue]: accessibility.md#type-accessibilityaxvalue "Accessibility.AXValue"
[Accessibility.AXValueSource]: accessibility.md#type-accessibilityaxvaluesource "Accessibility.AXValueSource"
[Accessibility.AXValueSource]: accessibility.md#type-accessibilityaxvaluesource "Accessibility.AXValueSource"
[Accessibility.AXValue]: accessibility.md#type-accessibilityaxvalue "Accessibility.AXValue"
[Accessibility.AXValue]: accessibility.md#type-accessibilityaxvalue "Accessibility.AXValue"
[Accessibility.AXNode]: accessibility.md#type-accessibilityaxnode "Accessibility.AXNode"
[Accessibility.AXNode]: accessibility.md#type-accessibilityaxnode "Accessibility.AXNode"
[Accessibility.AXProperty]: accessibility.md#type-accessibilityaxproperty "Accessibility.AXProperty"
[Accessibility.AXValueSource]: accessibility.md#type-accessibilityaxvaluesource "Accessibility.AXValueSource"
[Accessibility.AXProperty]: accessibility.md#type-accessibilityaxproperty "Accessibility.AXProperty"
[Accessibility.getPartialAXTree]: accessibility.md#command-accessibilitygetpartialaxtree "Accessibility.getPartialAXTree"
[Accessibility.AXValueSourceType]: accessibility.md#type-accessibilityaxvaluesourcetype "Accessibility.AXValueSourceType"
[Accessibility.AXValue]: accessibility.md#type-accessibilityaxvalue "Accessibility.AXValue"
[Accessibility.AXValueNativeSourceType]: accessibility.md#type-accessibilityaxvaluenativesourcetype "Accessibility.AXValueNativeSourceType"
[DOM.BackendNodeId]: dom.md#type-dombackendnodeid "DOM.BackendNodeId"
[Accessibility.AXPropertyName]: accessibility.md#type-accessibilityaxpropertyname "Accessibility.AXPropertyName"
[Accessibility.AXValue]: accessibility.md#type-accessibilityaxvalue "Accessibility.AXValue"
[Accessibility.AXValueType]: accessibility.md#type-accessibilityaxvaluetype "Accessibility.AXValueType"
[Accessibility.AXRelatedNode]: accessibility.md#type-accessibilityaxrelatednode "Accessibility.AXRelatedNode"
[Accessibility.AXValueSource]: accessibility.md#type-accessibilityaxvaluesource "Accessibility.AXValueSource"
[Accessibility.AXNodeId]: accessibility.md#type-accessibilityaxnodeid "Accessibility.AXNodeId"
[Accessibility.AXProperty]: accessibility.md#type-accessibilityaxproperty "Accessibility.AXProperty"
[Accessibility.AXValue]: accessibility.md#type-accessibilityaxvalue "Accessibility.AXValue"
[DOM.BackendNodeId]: dom.md#type-dombackendnodeid "DOM.BackendNodeId"
[DOM.NodeId]: dom.md#type-domnodeid "DOM.NodeId"
[Accessibility.AXNode]: accessibility.md#type-accessibilityaxnode "Accessibility.AXNode"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"