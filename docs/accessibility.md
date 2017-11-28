
### domain: Accessibility

#### Accessibility.getPartialAXTree()
- parameters
  - `nodeId` <DOM.NodeId> ID of node to get the partial accessibility tree for
  - `fetchRelatives` <[boolean]> Whether to fetch this nodes ancestors, siblings and children. Defaults to true
- returns
  - `nodes` array of <AXNode> The `Accessibility.AXNode` for this DOM node, if it exists, plus its ancestors, siblings and
children, if requested

Fetches the accessibility node and partial accessibility tree for this DOM node, if it exists.