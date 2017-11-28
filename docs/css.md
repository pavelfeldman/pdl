
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