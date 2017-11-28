
### domain: CSS

This domain exposes CSS read/write operations. All CSS objects (stylesheets, rules, and styles)
have an associated `id` used in subsequent operations on the related object. Each object type has
a specific `id` structure, and those are not interchangeable between objects of different kinds.
CSS objects can be loaded using the `get*ForNode()` calls (which accept a DOM node id). A client
can also keep track of stylesheets via the `styleSheetAdded`/`styleSheetRemoved` events and
subsequently load the required stylesheet contents using the `getStyleSheet[Text]()` methods.

#### type: CSS.StyleSheetId = string

#### type: CSS.StyleSheetOrigin = string

Stylesheet type: "injected" for stylesheets injected via extension, "user-agent" for user-agent
stylesheets, "inspector" for stylesheets created by the inspector (i.e. those holding the "via
inspector" rules), "regular" for regular stylesheets.

#### type: CSS.PseudoElementMatches = object

CSS rule collection for a single pseudo style.

*properties*
  - `pseudoType` <[DOM.PseudoType]]> Pseudo element type
  - `matches` <array of [CSS.RuleMatch]> Matches of CSS rules applicable to the pseudo style

#### type: CSS.InheritedStyleEntry = object

Inherited CSS rule collection from ancestor node.

*properties*
  - `inlineStyle` <[CSS.CSSStyle]]> The ancestor node's inline style, if any, in the style inheritance chain
  - `matchedCSSRules` <array of [CSS.RuleMatch]> Matches of CSS rules matching the ancestor node in the style inheritance chain

#### type: CSS.RuleMatch = object

Match data for a CSS rule.

*properties*
  - `rule` <[CSS.CSSRule]]> CSS rule in the match
  - `matchingSelectors` <array of integer> Matching selector indices in the rule's selectorList selectors (0-based)

#### type: CSS.Value = object

Data for a simple selector (these are delimited by commas in a selector list).

*properties*
  - `text` <string]> Value text
  - `range` <[CSS.SourceRange]]> Value range in the underlying resource (if available)

#### type: CSS.SelectorList = object

Selector list data.

*properties*
  - `selectors` <array of [CSS.Value]> Selectors in the list
  - `text` <string]> Rule selector text

#### type: CSS.CSSStyleSheetHeader = object

CSS stylesheet metainformation.

*properties*
  - `styleSheetId` <[CSS.StyleSheetId]]> The stylesheet identifier
  - `frameId` <[Page.FrameId]]> Owner frame identifier
  - `sourceURL` <string]> Stylesheet resource URL
  - `sourceMapURL` <string]> URL of source map associated with the stylesheet (if any)
  - `origin` <[CSS.StyleSheetOrigin]]> Stylesheet origin
  - `title` <string]> Stylesheet title
  - `ownerNode` <[DOM.BackendNodeId]]> The backend id for the owner node of the stylesheet
  - `disabled` <boolean]> Denotes whether the stylesheet is disabled
  - `hasSourceURL` <boolean]> Whether the sourceURL field value comes from the sourceURL comment
  - `isInline` <boolean]> Whether this stylesheet is created for STYLE tag by parser. This flag is not set for
document.written STYLE tags
  - `startLine` <number]> Line offset of the stylesheet within the resource (zero based)
  - `startColumn` <number]> Column offset of the stylesheet within the resource (zero based)
  - `length` <number]> Size of the content (in characters)

#### type: CSS.CSSRule = object

CSS rule representation.

*properties*
  - `styleSheetId` <[CSS.StyleSheetId]]> The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from
  - `selectorList` <[CSS.SelectorList]]> Rule selector data
  - `origin` <[CSS.StyleSheetOrigin]]> Parent stylesheet's origin
  - `style` <[CSS.CSSStyle]]> Associated style declaration
  - `media` <array of [CSS.CSSMedia]> Media list array (for rules involving media queries). The array enumerates media queries
starting with the innermost one, going outwards

#### type: CSS.RuleUsage = object

CSS coverage information.

*properties*
  - `styleSheetId` <[CSS.StyleSheetId]]> The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from
  - `startOffset` <number]> Offset of the start of the rule (including selector) from the beginning of the stylesheet
  - `endOffset` <number]> Offset of the end of the rule body from the beginning of the stylesheet
  - `used` <boolean]> Indicates whether the rule was actually used by some element in the page

#### type: CSS.SourceRange = object

Text range within a resource. All numbers are zero-based.

*properties*
  - `startLine` <integer]> Start line of range
  - `startColumn` <integer]> Start column of range (inclusive)
  - `endLine` <integer]> End line of range
  - `endColumn` <integer]> End column of range (exclusive)

#### type: CSS.ShorthandEntry = object

*properties*
  - `name` <string]> Shorthand name
  - `value` <string]> Shorthand value
  - `important` <boolean]> Whether the property has "!important" annotation (implies `false` if absent)

#### type: CSS.CSSComputedStyleProperty = object

*properties*
  - `name` <string]> Computed style property name
  - `value` <string]> Computed style property value

#### type: CSS.CSSStyle = object

CSS style representation.

*properties*
  - `styleSheetId` <[CSS.StyleSheetId]]> The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from
  - `cssProperties` <array of [CSS.CSSProperty]> CSS properties in the style
  - `shorthandEntries` <array of [CSS.ShorthandEntry]> Computed values for all shorthands found in the style
  - `cssText` <string]> Style declaration text (if available)
  - `range` <[CSS.SourceRange]]> Style declaration range in the enclosing stylesheet (if available)

#### type: CSS.CSSProperty = object

CSS property declaration data.

*properties*
  - `name` <string]> The property name
  - `value` <string]> The property value
  - `important` <boolean]> Whether the property has "!important" annotation (implies `false` if absent)
  - `implicit` <boolean]> Whether the property is implicit (implies `false` if absent)
  - `text` <string]> The full property text as specified in the style
  - `parsedOk` <boolean]> Whether the property is understood by the browser (implies `true` if absent)
  - `disabled` <boolean]> Whether the property is disabled by the user (present for source-based properties only)
  - `range` <[CSS.SourceRange]]> The entire property range in the enclosing style declaration (if available)

#### type: CSS.CSSMedia = object

CSS media rule descriptor.

*properties*
  - `text` <string]> Media query text
  - `source` <string]> Source of the media query: "mediaRule" if specified by a @media rule, "importRule" if
specified by an @import rule, "linkedSheet" if specified by a "media" attribute in a linked
stylesheet's LINK tag, "inlineSheet" if specified by a "media" attribute in an inline
stylesheet's STYLE tag
  - `sourceURL` <string]> URL of the document containing the media query description
  - `range` <[CSS.SourceRange]]> The associated rule (@media or @import) header range in the enclosing stylesheet (if
available)
  - `styleSheetId` <[CSS.StyleSheetId]]> Identifier of the stylesheet containing this object (if exists)
  - `mediaList` <array of [CSS.MediaQuery]> Array of media queries

#### type: CSS.MediaQuery = object

Media query descriptor.

*properties*
  - `expressions` <array of [CSS.MediaQueryExpression]> Array of media query expressions
  - `active` <boolean]> Whether the media query condition is satisfied

#### type: CSS.MediaQueryExpression = object

Media query expression descriptor.

*properties*
  - `value` <number]> Media query expression value
  - `unit` <string]> Media query expression units
  - `feature` <string]> Media query expression feature
  - `valueRange` <[CSS.SourceRange]]> The associated range of the value text in the enclosing stylesheet (if available)
  - `computedLength` <number]> Computed length of media query expression (if applicable)

#### type: CSS.PlatformFontUsage = object

Information about amount of glyphs that were rendered with given font.

*properties*
  - `familyName` <string]> Font's family name reported by platform
  - `isCustomFont` <boolean]> Indicates if the font was downloaded or resolved locally
  - `glyphCount` <number]> Amount of glyphs that were rendered with this font

#### type: CSS.CSSKeyframesRule = object

CSS keyframes rule representation.

*properties*
  - `animationName` <[CSS.Value]]> Animation name
  - `keyframes` <array of [CSS.CSSKeyframeRule]> List of keyframes

#### type: CSS.CSSKeyframeRule = object

CSS keyframe rule representation.

*properties*
  - `styleSheetId` <[CSS.StyleSheetId]]> The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from
  - `origin` <[CSS.StyleSheetOrigin]]> Parent stylesheet's origin
  - `keyText` <[CSS.Value]]> Associated key text
  - `style` <[CSS.CSSStyle]]> Associated style declaration

#### type: CSS.StyleDeclarationEdit = object

A descriptor of operation to mutate style declaration text.

*properties*
  - `styleSheetId` <[CSS.StyleSheetId]]> The css style sheet identifier
  - `range` <[CSS.SourceRange]]> The range of the style text in the enclosing stylesheet
  - `text` <string]> New style text

#### command: CSS.addRule()

Inserts a new rule with the given `ruleText` in a stylesheet with given `styleSheetId`, at the
position specified by `location`.

*parameters*
- `styleSheetId` <[CSS.StyleSheetId]]> The css style sheet identifier where a new rule should be inserted
- `ruleText` <string]> The text of a new rule
- `location` <[CSS.SourceRange]]> Text position of a new rule in the target style sheet

*returns*
- `rule` <[CSS.CSSRule]]> The newly created rule

#### command: CSS.collectClassNames()

Returns all class names from specified stylesheet.

*parameters*
- `styleSheetId` <[CSS.StyleSheetId]]> 

*returns*
- `classNames` <array of string> Class name list

#### command: CSS.createStyleSheet()

Creates a new special "via-inspector" stylesheet in the frame with given `frameId`.

*parameters*
- `frameId` <[Page.FrameId]]> Identifier of the frame where "via-inspector" stylesheet should be created

*returns*
- `styleSheetId` <[CSS.StyleSheetId]]> Identifier of the created "via-inspector" stylesheet

#### command: CSS.disable()

Disables the CSS agent for the given page.

#### command: CSS.enable()

Enables the CSS agent for the given page. Clients should not assume that the CSS agent has been
enabled until the result of this command is received.

#### command: CSS.forcePseudoState()

Ensures that the given node will have specified pseudo-classes whenever its style is computed by
the browser.

*parameters*
- `nodeId` <[DOM.NodeId]]> The element id for which to force the pseudo state
- `forcedPseudoClasses` <array of string> Element pseudo classes to force when computing the element's style

#### command: CSS.getBackgroundColors()

*parameters*
- `nodeId` <[DOM.NodeId]]> Id of the node to get background colors for

*returns*
- `backgroundColors` <array of string> The range of background colors behind this element, if it contains any visible text. If no
visible text is present, this will be undefined. In the case of a flat background color,
this will consist of simply that color. In the case of a gradient, this will consist of each
of the color stops. For anything more complicated, this will be an empty array. Images will
be ignored (as if the image had failed to load)
- `computedFontSize` <string]> The computed font size for this node, as a CSS computed value string (e.g. '12px')
- `computedFontWeight` <string]> The computed font weight for this node, as a CSS computed value string (e.g. 'normal' or
'100')
- `computedBodyFontSize` <string]> The computed font size for the document body, as a computed CSS value string (e.g. '16px')

#### command: CSS.getComputedStyleForNode()

Returns the computed style for a DOM node identified by `nodeId`.

*parameters*
- `nodeId` <[DOM.NodeId]]> 

*returns*
- `computedStyle` <array of [CSS.CSSComputedStyleProperty]> Computed style for the specified DOM node

#### command: CSS.getInlineStylesForNode()

Returns the styles defined inline (explicitly in the "style" attribute and implicitly, using DOM
attributes) for a DOM node identified by `nodeId`.

*parameters*
- `nodeId` <[DOM.NodeId]]> 

*returns*
- `inlineStyle` <[CSS.CSSStyle]]> Inline style for the specified DOM node
- `attributesStyle` <[CSS.CSSStyle]]> Attribute-defined element style (e.g. resulting from "width=20 height=100%")

#### command: CSS.getMatchedStylesForNode()

Returns requested styles for a DOM node identified by `nodeId`.

*parameters*
- `nodeId` <[DOM.NodeId]]> 

*returns*
- `inlineStyle` <[CSS.CSSStyle]]> Inline style for the specified DOM node
- `attributesStyle` <[CSS.CSSStyle]]> Attribute-defined element style (e.g. resulting from "width=20 height=100%")
- `matchedCSSRules` <array of [CSS.RuleMatch]> CSS rules matching this node, from all applicable stylesheets
- `pseudoElements` <array of [CSS.PseudoElementMatches]> Pseudo style matches for this node
- `inherited` <array of [CSS.InheritedStyleEntry]> A chain of inherited styles (from the immediate node parent up to the DOM tree root)
- `cssKeyframesRules` <array of [CSS.CSSKeyframesRule]> A list of CSS keyframed animations matching this node

#### command: CSS.getMediaQueries()

Returns all media queries parsed by the rendering engine.

*returns*
- `medias` <array of [CSS.CSSMedia]> 

#### command: CSS.getPlatformFontsForNode()

Requests information about platform fonts which we used to render child TextNodes in the given
node.

*parameters*
- `nodeId` <[DOM.NodeId]]> 

*returns*
- `fonts` <array of [CSS.PlatformFontUsage]> Usage statistics for every employed platform font

#### command: CSS.getStyleSheetText()

Returns the current textual content and the URL for a stylesheet.

*parameters*
- `styleSheetId` <[CSS.StyleSheetId]]> 

*returns*
- `text` <string]> The stylesheet text

#### command: CSS.setEffectivePropertyValueForNode()

Find a rule with the given active property for the given node and set the new value for this
property

*parameters*
- `nodeId` <[DOM.NodeId]]> The element id for which to set property
- `propertyName` <string]> 
- `value` <string]> 

#### command: CSS.setKeyframeKey()

Modifies the keyframe rule key text.

*parameters*
- `styleSheetId` <[CSS.StyleSheetId]]> 
- `range` <[CSS.SourceRange]]> 
- `keyText` <string]> 

*returns*
- `keyText` <[CSS.Value]]> The resulting key text after modification

#### command: CSS.setMediaText()

Modifies the rule selector.

*parameters*
- `styleSheetId` <[CSS.StyleSheetId]]> 
- `range` <[CSS.SourceRange]]> 
- `text` <string]> 

*returns*
- `media` <[CSS.CSSMedia]]> The resulting CSS media rule after modification

#### command: CSS.setRuleSelector()

Modifies the rule selector.

*parameters*
- `styleSheetId` <[CSS.StyleSheetId]]> 
- `range` <[CSS.SourceRange]]> 
- `selector` <string]> 

*returns*
- `selectorList` <[CSS.SelectorList]]> The resulting selector list after modification

#### command: CSS.setStyleSheetText()

Sets the new stylesheet text.

*parameters*
- `styleSheetId` <[CSS.StyleSheetId]]> 
- `text` <string]> 

*returns*
- `sourceMapURL` <string]> URL of source map associated with script (if any)

#### command: CSS.setStyleTexts()

Applies specified style edits one after another in the given order.

*parameters*
- `edits` <array of [CSS.StyleDeclarationEdit]> 

*returns*
- `styles` <array of [CSS.CSSStyle]> The resulting styles after modification

#### command: CSS.startRuleUsageTracking()

Enables the selector recording.

#### command: CSS.stopRuleUsageTracking()

The list of rules with an indication of whether these were used

*returns*
- `ruleUsage` <array of [CSS.RuleUsage]> 

#### command: CSS.takeCoverageDelta()

Obtain list of rules that became used since last call to this method (or since start of coverage
instrumentation)

*returns*
- `coverage` <array of [CSS.RuleUsage]> 

#### event: CSS.fontsUpdated

Fires whenever a web font gets loaded.

#### event: CSS.mediaQueryResultChanged

Fires whenever a MediaQuery result changes (for example, after a browser window has been
resized.) The current implementation considers only viewport-dependent media features.

#### event: CSS.styleSheetAdded

Fired whenever an active document stylesheet is added.

*returns*
- `header` <[CSS.CSSStyleSheetHeader]]> Added stylesheet metainfo

#### event: CSS.styleSheetChanged

Fired whenever a stylesheet is changed as a result of the client operation.

*returns*
- `styleSheetId` <[CSS.StyleSheetId]]> 

#### event: CSS.styleSheetRemoved

Fired whenever an active document stylesheet is removed.

*returns*
- `styleSheetId` <[CSS.StyleSheetId]]> Identifier of the removed stylesheet

[DOM.PseudoType]: css.md#dompseudotype
[CSS.RuleMatch]: css.md#cssrulematch
[CSS.CSSStyle]: css.md#csscssstyle
[CSS.CSSRule]: css.md#csscssrule
[CSS.SourceRange]: css.md#csssourcerange
[CSS.Value]: css.md#cssvalue
[CSS.StyleSheetId]: css.md#cssstylesheetid
[Page.FrameId]: css.md#pageframeid
[CSS.StyleSheetOrigin]: css.md#cssstylesheetorigin
[DOM.BackendNodeId]: css.md#dombackendnodeid
[CSS.SelectorList]: css.md#cssselectorlist
[CSS.CSSMedia]: css.md#csscssmedia
[CSS.CSSProperty]: css.md#csscssproperty
[CSS.ShorthandEntry]: css.md#cssshorthandentry
[CSS.MediaQuery]: css.md#cssmediaquery
[CSS.MediaQueryExpression]: css.md#cssmediaqueryexpression
[CSS.CSSKeyframeRule]: css.md#csscsskeyframerule
[DOM.NodeId]: css.md#domnodeid
[CSS.CSSComputedStyleProperty]: css.md#csscsscomputedstyleproperty
[CSS.PseudoElementMatches]: css.md#csspseudoelementmatches
[CSS.InheritedStyleEntry]: css.md#cssinheritedstyleentry
[CSS.CSSKeyframesRule]: css.md#csscsskeyframesrule
[CSS.PlatformFontUsage]: css.md#cssplatformfontusage
[CSS.StyleDeclarationEdit]: css.md#cssstyledeclarationedit
[CSS.RuleUsage]: css.md#cssruleusage
[CSS.CSSStyleSheetHeader]: css.md#csscssstylesheetheader