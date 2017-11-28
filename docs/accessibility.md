
### domain: Accessibility 🌱


#### type: Accessibility.AXNodeId = string

Unique accessibility node identifier.


#### type: Accessibility.AXValueType = string

Enum of possible property types.


#### type: Accessibility.AXValueSourceType = string

Enum of possible property sources.


#### type: Accessibility.AXValueNativeSourceType = string

Enum of possible native property sources (as a subtype of a particular AXValueSourceType).


#### type: Accessibility.AXValueSource = object

A single source for a computed AX property.

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


#### type: Accessibility.AXRelatedNode = object

*properties*
-  `backendDOMNodeId` <[DOM.BackendNodeId]> The BackendNodeId of the related DOM node
- *optional* `idref` <[string]> The IDRef value provided, if any
- *optional* `text` <[string]> The text alternative of this node in the current context


#### type: Accessibility.AXProperty = object

*properties*
-  `name` <[Accessibility.AXPropertyName]> The name of this property
-  `value` <[Accessibility.AXValue]> The value of this property


#### type: Accessibility.AXValue = object

A single computed AX property.

*properties*
-  `type` <[Accessibility.AXValueType]> The type of this value
- *optional* `value` <[any]> The computed value of this property
- *optional* `relatedNodes` <array of [Accessibility.AXRelatedNode]> One or more related nodes, if applicable
- *optional* `sources` <array of [Accessibility.AXValueSource]> The sources which contributed to the computation of this property


#### type: Accessibility.AXPropertyName = string

Values of AXProperty name: from 'busy' to 'roledescription' - states which apply to every AX
node, from 'live' to 'root' - attributes which apply to nodes in live regions, from
'autocomplete' to 'valuetext' - attributes which apply to widgets, from 'checked' to 'selected'
- states which apply to widgets, from 'activedescendant' to 'owns' - relationships between
elements other than parent/child/sibling.


#### type: Accessibility.AXNode = object

A node in the accessibility tree.

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


#### command: Accessibility.getPartialAXTree() 🌱

Fetches the accessibility node and partial accessibility tree for this DOM node, if it exists.

*parameters*
-  `nodeId` <[DOM.NodeId]> ID of node to get the partial accessibility tree for
- *optional* `fetchRelatives` <[boolean]> Whether to fetch this nodes ancestors, siblings and children. Defaults to true

*returns*
-  `nodes` <array of [Accessibility.AXNode]> The `Accessibility.AXNode` for this DOM node, if it exists, plus its ancestors, siblings and
children, if requested

[Accessibility.AXValueSourceType]: accessibility.md#type-accessibilityaxvaluesourcetype--string "Accessibility.AXValueSourceType"
[Accessibility.AXValue]: accessibility.md#type-accessibilityaxvalue--object "Accessibility.AXValue"
[Accessibility.AXValueNativeSourceType]: accessibility.md#type-accessibilityaxvaluenativesourcetype--string "Accessibility.AXValueNativeSourceType"
[DOM.BackendNodeId]: dom.md#type-dombackendnodeid--integer "DOM.BackendNodeId"
[Accessibility.AXPropertyName]: accessibility.md#type-accessibilityaxpropertyname--string "Accessibility.AXPropertyName"
[Accessibility.AXValueType]: accessibility.md#type-accessibilityaxvaluetype--string "Accessibility.AXValueType"
[Accessibility.AXRelatedNode]: accessibility.md#type-accessibilityaxrelatednode--object "Accessibility.AXRelatedNode"
[Accessibility.AXValueSource]: accessibility.md#type-accessibilityaxvaluesource--object "Accessibility.AXValueSource"
[Accessibility.AXNodeId]: accessibility.md#type-accessibilityaxnodeid--string "Accessibility.AXNodeId"
[Accessibility.AXProperty]: accessibility.md#type-accessibilityaxproperty--object "Accessibility.AXProperty"
[DOM.NodeId]: dom.md#type-domnodeid--integer "DOM.NodeId"
[Accessibility.AXNode]: accessibility.md#type-accessibilityaxnode--object "Accessibility.AXNode"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"