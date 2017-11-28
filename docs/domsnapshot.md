
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