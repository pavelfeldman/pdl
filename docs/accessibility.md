
### domain: Accessibility

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
  - `type` <[Accessibility.AXValueSourceType]]> What type of source this is
  - `value` <[Accessibility.AXValue]]> The value of this property source
  - `attribute` <string]> The name of the relevant attribute, if any
  - `attributeValue` <[Accessibility.AXValue]]> The value of the relevant attribute, if any
  - `superseded` <boolean]> Whether this source is superseded by a higher priority source
  - `nativeSource` <[Accessibility.AXValueNativeSourceType]]> The native markup source for this value, e.g. a <label> element
  - `nativeSourceValue` <[Accessibility.AXValue]]> The value, such as a node or node list, of the native source
  - `invalid` <boolean]> Whether the value for this property is invalid
  - `invalidReason` <string]> Reason for the value being invalid, if it is

#### type: Accessibility.AXRelatedNode = object

*properties*
  - `backendDOMNodeId` <[DOM.BackendNodeId]]> The BackendNodeId of the related DOM node
  - `idref` <string]> The IDRef value provided, if any
  - `text` <string]> The text alternative of this node in the current context

#### type: Accessibility.AXProperty = object

*properties*
  - `name` <[Accessibility.AXPropertyName]]> The name of this property
  - `value` <[Accessibility.AXValue]]> The value of this property

#### type: Accessibility.AXValue = object

A single computed AX property.

*properties*
  - `type` <[Accessibility.AXValueType]]> The type of this value
  - `value` <any]> The computed value of this property
  - `relatedNodes` <array of [Accessibility.AXRelatedNode]> One or more related nodes, if applicable
  - `sources` <array of [Accessibility.AXValueSource]> The sources which contributed to the computation of this property

#### type: Accessibility.AXPropertyName = string

Values of AXProperty name: from 'busy' to 'roledescription' - states which apply to every AX
node, from 'live' to 'root' - attributes which apply to nodes in live regions, from
'autocomplete' to 'valuetext' - attributes which apply to widgets, from 'checked' to 'selected'
- states which apply to widgets, from 'activedescendant' to 'owns' - relationships between
elements other than parent/child/sibling.

#### type: Accessibility.AXNode = object

A node in the accessibility tree.

*properties*
  - `nodeId` <[Accessibility.AXNodeId]]> Unique identifier for this node
  - `ignored` <boolean]> Whether this node is ignored for accessibility
  - `ignoredReasons` <array of [Accessibility.AXProperty]> Collection of reasons why this node is hidden
  - `role` <[Accessibility.AXValue]]> This `Node`'s role, whether explicit or implicit
  - `name` <[Accessibility.AXValue]]> The accessible name for this `Node`
  - `description` <[Accessibility.AXValue]]> The accessible description for this `Node`
  - `value` <[Accessibility.AXValue]]> The value for this `Node`
  - `properties` <array of [Accessibility.AXProperty]> All other properties
  - `childIds` <array of [Accessibility.AXNodeId]> IDs for each of this node's child nodes
  - `backendDOMNodeId` <[DOM.BackendNodeId]]> The backend ID for the associated DOM node, if any

#### command: Accessibility.getPartialAXTree()

Fetches the accessibility node and partial accessibility tree for this DOM node, if it exists.

*parameters*
- `nodeId` <[DOM.NodeId]]> ID of node to get the partial accessibility tree for
- `fetchRelatives` <boolean]> Whether to fetch this nodes ancestors, siblings and children. Defaults to true

*returns*
- `nodes` <array of [Accessibility.AXNode]> The `Accessibility.AXNode` for this DOM node, if it exists, plus its ancestors, siblings and
children, if requested

[Accessibility.AXValueSourceType]: accessibility.md#accessibilityaxvaluesourcetype
[Accessibility.AXValue]: accessibility.md#accessibilityaxvalue
[Accessibility.AXValueNativeSourceType]: accessibility.md#accessibilityaxvaluenativesourcetype
[DOM.BackendNodeId]: accessibility.md#dombackendnodeid
[Accessibility.AXPropertyName]: accessibility.md#accessibilityaxpropertyname
[Accessibility.AXValueType]: accessibility.md#accessibilityaxvaluetype
[Accessibility.AXRelatedNode]: accessibility.md#accessibilityaxrelatednode
[Accessibility.AXValueSource]: accessibility.md#accessibilityaxvaluesource
[Accessibility.AXNodeId]: accessibility.md#accessibilityaxnodeid
[Accessibility.AXProperty]: accessibility.md#accessibilityaxproperty
[DOM.NodeId]: accessibility.md#domnodeid
[Accessibility.AXNode]: accessibility.md#accessibilityaxnode