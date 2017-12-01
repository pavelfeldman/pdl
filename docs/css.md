
### domain: CSS 🌱

This domain exposes CSS read/write operations. All CSS objects (stylesheets, rules, and styles)
have an associated `id` used in subsequent operations on the related object. Each object type has
a specific `id` structure, and those are not interchangeable between objects of different kinds.
CSS objects can be loaded using the `get*ForNode()` calls (which accept a DOM node id). A client
can also keep track of stylesheets via the `styleSheetAdded`/`styleSheetRemoved` events and
subsequently load the required stylesheet contents using the `getStyleSheet[Text]()` methods.

---


#### command: CSS.addRule

Inserts a new rule with the given `ruleText` in a stylesheet with given `styleSheetId`, at the
position specified by `location`.

*parameters*
-  `styleSheetId` <[CSS.StyleSheetId]> The css style sheet identifier where a new rule should be inserted
-  `ruleText` <[string]> The text of a new rule
-  `location` <[CSS.SourceRange]> Text position of a new rule in the target style sheet

*returns*
-  `rule` <[CSS.CSSRule]> The newly created rule

---


#### command: CSS.collectClassNames

Returns all class names from specified stylesheet.

*parameters*
-  `styleSheetId` <[CSS.StyleSheetId]> 

*returns*
-  `classNames` <array of [string]> Class name list

---


#### command: CSS.createStyleSheet

Creates a new special "via-inspector" stylesheet in the frame with given `frameId`.

*parameters*
-  `frameId` <[Page.FrameId]> Identifier of the frame where "via-inspector" stylesheet should be created

*returns*
-  `styleSheetId` <[CSS.StyleSheetId]> Identifier of the created "via-inspector" stylesheet

---


#### command: CSS.disable

Disables the CSS agent for the given page.

---


#### command: CSS.enable

Enables the CSS agent for the given page. Clients should not assume that the CSS agent has been
enabled until the result of this command is received.

---


#### command: CSS.forcePseudoState

Ensures that the given node will have specified pseudo-classes whenever its style is computed by
the browser.

*parameters*
-  `nodeId` <[DOM.NodeId]> The element id for which to force the pseudo state
-  `forcedPseudoClasses` <array of [string]> Element pseudo classes to force when computing the element's style

---


#### command: CSS.getBackgroundColors

*parameters*
-  `nodeId` <[DOM.NodeId]> Id of the node to get background colors for

*returns*
- *optional* `backgroundColors` <array of [string]> The range of background colors behind this element, if it contains any visible text. If no
visible text is present, this will be undefined. In the case of a flat background color,
this will consist of simply that color. In the case of a gradient, this will consist of each
of the color stops. For anything more complicated, this will be an empty array. Images will
be ignored (as if the image had failed to load)
- *optional* `computedFontSize` <[string]> The computed font size for this node, as a CSS computed value string (e.g. '12px')
- *optional* `computedFontWeight` <[string]> The computed font weight for this node, as a CSS computed value string (e.g. 'normal' or
'100')
- *optional* `computedBodyFontSize` <[string]> The computed font size for the document body, as a computed CSS value string (e.g. '16px')

---


#### command: CSS.getComputedStyleForNode

Returns the computed style for a DOM node identified by `nodeId`.

*parameters*
-  `nodeId` <[DOM.NodeId]> 

*returns*
-  `computedStyle` <array of [CSS.CSSComputedStyleProperty]> Computed style for the specified DOM node

---


#### command: CSS.getInlineStylesForNode

Returns the styles defined inline (explicitly in the "style" attribute and implicitly, using DOM
attributes) for a DOM node identified by `nodeId`.

*parameters*
-  `nodeId` <[DOM.NodeId]> 

*returns*
- *optional* `inlineStyle` <[CSS.CSSStyle]> Inline style for the specified DOM node
- *optional* `attributesStyle` <[CSS.CSSStyle]> Attribute-defined element style (e.g. resulting from "width=20 height=100%")

---


#### command: CSS.getMatchedStylesForNode

Returns requested styles for a DOM node identified by `nodeId`.

*parameters*
-  `nodeId` <[DOM.NodeId]> 

*returns*
- *optional* `inlineStyle` <[CSS.CSSStyle]> Inline style for the specified DOM node
- *optional* `attributesStyle` <[CSS.CSSStyle]> Attribute-defined element style (e.g. resulting from "width=20 height=100%")
- *optional* `matchedCSSRules` <array of [CSS.RuleMatch]> CSS rules matching this node, from all applicable stylesheets
- *optional* `pseudoElements` <array of [CSS.PseudoElementMatches]> Pseudo style matches for this node
- *optional* `inherited` <array of [CSS.InheritedStyleEntry]> A chain of inherited styles (from the immediate node parent up to the DOM tree root)
- *optional* `cssKeyframesRules` <array of [CSS.CSSKeyframesRule]> A list of CSS keyframed animations matching this node

---


#### command: CSS.getMediaQueries

Returns all media queries parsed by the rendering engine.

*returns*
-  `medias` <array of [CSS.CSSMedia]> 

---


#### command: CSS.getPlatformFontsForNode

Requests information about platform fonts which we used to render child TextNodes in the given
node.

*parameters*
-  `nodeId` <[DOM.NodeId]> 

*returns*
-  `fonts` <array of [CSS.PlatformFontUsage]> Usage statistics for every employed platform font

---


#### command: CSS.getStyleSheetText

Returns the current textual content and the URL for a stylesheet.

*parameters*
-  `styleSheetId` <[CSS.StyleSheetId]> 

*returns*
-  `text` <[string]> The stylesheet text

---


#### command: CSS.setEffectivePropertyValueForNode

Find a rule with the given active property for the given node and set the new value for this
property

*parameters*
-  `nodeId` <[DOM.NodeId]> The element id for which to set property
-  `propertyName` <[string]> 
-  `value` <[string]> 

---


#### command: CSS.setKeyframeKey

Modifies the keyframe rule key text.

*parameters*
-  `styleSheetId` <[CSS.StyleSheetId]> 
-  `range` <[CSS.SourceRange]> 
-  `keyText` <[string]> 

*returns*
-  `keyText` <[CSS.Value]> The resulting key text after modification

---


#### command: CSS.setMediaText

Modifies the rule selector.

*parameters*
-  `styleSheetId` <[CSS.StyleSheetId]> 
-  `range` <[CSS.SourceRange]> 
-  `text` <[string]> 

*returns*
-  `media` <[CSS.CSSMedia]> The resulting CSS media rule after modification

---


#### command: CSS.setRuleSelector

Modifies the rule selector.

*parameters*
-  `styleSheetId` <[CSS.StyleSheetId]> 
-  `range` <[CSS.SourceRange]> 
-  `selector` <[string]> 

*returns*
-  `selectorList` <[CSS.SelectorList]> The resulting selector list after modification

---


#### command: CSS.setStyleSheetText

Sets the new stylesheet text.

*parameters*
-  `styleSheetId` <[CSS.StyleSheetId]> 
-  `text` <[string]> 

*returns*
- *optional* `sourceMapURL` <[string]> URL of source map associated with script (if any)

---


#### command: CSS.setStyleTexts

Applies specified style edits one after another in the given order.

*parameters*
-  `edits` <array of [CSS.StyleDeclarationEdit]> 

*returns*
-  `styles` <array of [CSS.CSSStyle]> The resulting styles after modification

---


#### command: CSS.startRuleUsageTracking

Enables the selector recording.

---


#### command: CSS.stopRuleUsageTracking

The list of rules with an indication of whether these were used

*returns*
-  `ruleUsage` <array of [CSS.RuleUsage]> 

---


#### command: CSS.takeCoverageDelta

Obtain list of rules that became used since last call to this method (or since start of coverage
instrumentation)

*returns*
-  `coverage` <array of [CSS.RuleUsage]> 

---


#### event: CSS.fontsUpdated

Fires whenever a web font gets loaded.

---


#### event: CSS.mediaQueryResultChanged

Fires whenever a MediaQuery result changes (for example, after a browser window has been
resized.) The current implementation considers only viewport-dependent media features.

---


#### event: CSS.styleSheetAdded

Fired whenever an active document stylesheet is added.

*parameters*
-  `header` <[CSS.CSSStyleSheetHeader]> Added stylesheet metainfo

---


#### event: CSS.styleSheetChanged

Fired whenever a stylesheet is changed as a result of the client operation.

*parameters*
-  `styleSheetId` <[CSS.StyleSheetId]> 

---


#### event: CSS.styleSheetRemoved

Fired whenever an active document stylesheet is removed.

*parameters*
-  `styleSheetId` <[CSS.StyleSheetId]> Identifier of the removed stylesheet

---


#### type: CSS.StyleSheetId

*base type*
- **string**

*property of type*
- [CSS.CSSKeyframeRule]
- [CSS.CSSMedia]
- [CSS.CSSRule]
- [CSS.CSSStyle]
- [CSS.CSSStyleSheetHeader]
- [CSS.RuleUsage]
- [CSS.StyleDeclarationEdit]

*accepted by command*
- [CSS.addRule]
- [CSS.collectClassNames]
- [CSS.getStyleSheetText]
- [CSS.setKeyframeKey]
- [CSS.setMediaText]
- [CSS.setRuleSelector]
- [CSS.setStyleSheetText]

*returned from command*
- [CSS.createStyleSheet]

*parameter in event*
- [CSS.styleSheetChanged]
- [CSS.styleSheetRemoved]

---


#### type: CSS.StyleSheetOrigin

Stylesheet type: "injected" for stylesheets injected via extension, "user-agent" for user-agent
stylesheets, "inspector" for stylesheets created by the inspector (i.e. those holding the "via
inspector" rules), "regular" for regular stylesheets.

*base type*
- **string**

*property of type*
- [CSS.CSSKeyframeRule]
- [CSS.CSSRule]
- [CSS.CSSStyleSheetHeader]

---


#### type: CSS.PseudoElementMatches

CSS rule collection for a single pseudo style.

*base type*
- **object**

*properties*
-  `pseudoType` <[DOM.PseudoType]> Pseudo element type
-  `matches` <array of [CSS.RuleMatch]> Matches of CSS rules applicable to the pseudo style

*returned from command*
- [CSS.getMatchedStylesForNode]

---


#### type: CSS.InheritedStyleEntry

Inherited CSS rule collection from ancestor node.

*base type*
- **object**

*properties*
- *optional* `inlineStyle` <[CSS.CSSStyle]> The ancestor node's inline style, if any, in the style inheritance chain
-  `matchedCSSRules` <array of [CSS.RuleMatch]> Matches of CSS rules matching the ancestor node in the style inheritance chain

*returned from command*
- [CSS.getMatchedStylesForNode]

---


#### type: CSS.RuleMatch

Match data for a CSS rule.

*base type*
- **object**

*properties*
-  `rule` <[CSS.CSSRule]> CSS rule in the match
-  `matchingSelectors` <array of [integer]> Matching selector indices in the rule's selectorList selectors (0-based)

*property of type*
- [CSS.InheritedStyleEntry]
- [CSS.PseudoElementMatches]

*returned from command*
- [CSS.getMatchedStylesForNode]

---


#### type: CSS.Value

Data for a simple selector (these are delimited by commas in a selector list).

*base type*
- **object**

*properties*
-  `text` <[string]> Value text
- *optional* `range` <[CSS.SourceRange]> Value range in the underlying resource (if available)

*property of type*
- [CSS.CSSKeyframeRule]
- [CSS.CSSKeyframesRule]
- [CSS.SelectorList]

*returned from command*
- [CSS.setKeyframeKey]

---


#### type: CSS.SelectorList

Selector list data.

*base type*
- **object**

*properties*
-  `selectors` <array of [CSS.Value]> Selectors in the list
-  `text` <[string]> Rule selector text

*property of type*
- [CSS.CSSRule]

*returned from command*
- [CSS.setRuleSelector]

---


#### type: CSS.CSSStyleSheetHeader

CSS stylesheet metainformation.

*base type*
- **object**

*properties*
-  `styleSheetId` <[CSS.StyleSheetId]> The stylesheet identifier
-  `frameId` <[Page.FrameId]> Owner frame identifier
-  `sourceURL` <[string]> Stylesheet resource URL
- *optional* `sourceMapURL` <[string]> URL of source map associated with the stylesheet (if any)
-  `origin` <[CSS.StyleSheetOrigin]> Stylesheet origin
-  `title` <[string]> Stylesheet title
- *optional* `ownerNode` <[DOM.BackendNodeId]> The backend id for the owner node of the stylesheet
-  `disabled` <[boolean]> Denotes whether the stylesheet is disabled
- *optional* `hasSourceURL` <[boolean]> Whether the sourceURL field value comes from the sourceURL comment
-  `isInline` <[boolean]> Whether this stylesheet is created for STYLE tag by parser. This flag is not set for
document.written STYLE tags
-  `startLine` <[number]> Line offset of the stylesheet within the resource (zero based)
-  `startColumn` <[number]> Column offset of the stylesheet within the resource (zero based)
-  `length` <[number]> Size of the content (in characters)

*parameter in event*
- [CSS.styleSheetAdded]

---


#### type: CSS.CSSRule

CSS rule representation.

*base type*
- **object**

*properties*
- *optional* `styleSheetId` <[CSS.StyleSheetId]> The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from
-  `selectorList` <[CSS.SelectorList]> Rule selector data
-  `origin` <[CSS.StyleSheetOrigin]> Parent stylesheet's origin
-  `style` <[CSS.CSSStyle]> Associated style declaration
- *optional* `media` <array of [CSS.CSSMedia]> Media list array (for rules involving media queries). The array enumerates media queries
starting with the innermost one, going outwards

*property of type*
- [CSS.RuleMatch]

*returned from command*
- [CSS.addRule]

---


#### type: CSS.RuleUsage

CSS coverage information.

*base type*
- **object**

*properties*
-  `styleSheetId` <[CSS.StyleSheetId]> The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from
-  `startOffset` <[number]> Offset of the start of the rule (including selector) from the beginning of the stylesheet
-  `endOffset` <[number]> Offset of the end of the rule body from the beginning of the stylesheet
-  `used` <[boolean]> Indicates whether the rule was actually used by some element in the page

*returned from command*
- [CSS.stopRuleUsageTracking]
- [CSS.takeCoverageDelta]

---


#### type: CSS.SourceRange

Text range within a resource. All numbers are zero-based.

*base type*
- **object**

*properties*
-  `startLine` <[integer]> Start line of range
-  `startColumn` <[integer]> Start column of range (inclusive)
-  `endLine` <[integer]> End line of range
-  `endColumn` <[integer]> End column of range (exclusive)

*property of type*
- [CSS.CSSMedia]
- [CSS.CSSProperty]
- [CSS.CSSStyle]
- [CSS.MediaQueryExpression]
- [CSS.StyleDeclarationEdit]
- [CSS.Value]

*accepted by command*
- [CSS.addRule]
- [CSS.setKeyframeKey]
- [CSS.setMediaText]
- [CSS.setRuleSelector]

---


#### type: CSS.ShorthandEntry

*base type*
- **object**

*properties*
-  `name` <[string]> Shorthand name
-  `value` <[string]> Shorthand value
- *optional* `important` <[boolean]> Whether the property has "!important" annotation (implies `false` if absent)

*property of type*
- [CSS.CSSStyle]

---


#### type: CSS.CSSComputedStyleProperty

*base type*
- **object**

*properties*
-  `name` <[string]> Computed style property name
-  `value` <[string]> Computed style property value

*returned from command*
- [CSS.getComputedStyleForNode]

---


#### type: CSS.CSSStyle

CSS style representation.

*base type*
- **object**

*properties*
- *optional* `styleSheetId` <[CSS.StyleSheetId]> The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from
-  `cssProperties` <array of [CSS.CSSProperty]> CSS properties in the style
-  `shorthandEntries` <array of [CSS.ShorthandEntry]> Computed values for all shorthands found in the style
- *optional* `cssText` <[string]> Style declaration text (if available)
- *optional* `range` <[CSS.SourceRange]> Style declaration range in the enclosing stylesheet (if available)

*property of type*
- [CSS.CSSKeyframeRule]
- [CSS.CSSRule]
- [CSS.InheritedStyleEntry]

*returned from command*
- [CSS.getInlineStylesForNode]
- [CSS.getMatchedStylesForNode]
- [CSS.setStyleTexts]

---


#### type: CSS.CSSProperty

CSS property declaration data.

*base type*
- **object**

*properties*
-  `name` <[string]> The property name
-  `value` <[string]> The property value
- *optional* `important` <[boolean]> Whether the property has "!important" annotation (implies `false` if absent)
- *optional* `implicit` <[boolean]> Whether the property is implicit (implies `false` if absent)
- *optional* `text` <[string]> The full property text as specified in the style
- *optional* `parsedOk` <[boolean]> Whether the property is understood by the browser (implies `true` if absent)
- *optional* `disabled` <[boolean]> Whether the property is disabled by the user (present for source-based properties only)
- *optional* `range` <[CSS.SourceRange]> The entire property range in the enclosing style declaration (if available)

*property of type*
- [CSS.CSSStyle]

---


#### type: CSS.CSSMedia

CSS media rule descriptor.

*base type*
- **object**

*properties*
-  `text` <[string]> Media query text
-  `source` <[string]> Source of the media query: "mediaRule" if specified by a @media rule, "importRule" if
specified by an @import rule, "linkedSheet" if specified by a "media" attribute in a linked
stylesheet's LINK tag, "inlineSheet" if specified by a "media" attribute in an inline
stylesheet's STYLE tag
- *optional* `sourceURL` <[string]> URL of the document containing the media query description
- *optional* `range` <[CSS.SourceRange]> The associated rule (@media or @import) header range in the enclosing stylesheet (if
available)
- *optional* `styleSheetId` <[CSS.StyleSheetId]> Identifier of the stylesheet containing this object (if exists)
- *optional* `mediaList` <array of [CSS.MediaQuery]> Array of media queries

*property of type*
- [CSS.CSSRule]

*returned from command*
- [CSS.getMediaQueries]
- [CSS.setMediaText]

---


#### type: CSS.MediaQuery

Media query descriptor.

*base type*
- **object**

*properties*
-  `expressions` <array of [CSS.MediaQueryExpression]> Array of media query expressions
-  `active` <[boolean]> Whether the media query condition is satisfied

*property of type*
- [CSS.CSSMedia]

---


#### type: CSS.MediaQueryExpression

Media query expression descriptor.

*base type*
- **object**

*properties*
-  `value` <[number]> Media query expression value
-  `unit` <[string]> Media query expression units
-  `feature` <[string]> Media query expression feature
- *optional* `valueRange` <[CSS.SourceRange]> The associated range of the value text in the enclosing stylesheet (if available)
- *optional* `computedLength` <[number]> Computed length of media query expression (if applicable)

*property of type*
- [CSS.MediaQuery]

---


#### type: CSS.PlatformFontUsage

Information about amount of glyphs that were rendered with given font.

*base type*
- **object**

*properties*
-  `familyName` <[string]> Font's family name reported by platform
-  `isCustomFont` <[boolean]> Indicates if the font was downloaded or resolved locally
-  `glyphCount` <[number]> Amount of glyphs that were rendered with this font

*returned from command*
- [CSS.getPlatformFontsForNode]

---


#### type: CSS.CSSKeyframesRule

CSS keyframes rule representation.

*base type*
- **object**

*properties*
-  `animationName` <[CSS.Value]> Animation name
-  `keyframes` <array of [CSS.CSSKeyframeRule]> List of keyframes

*returned from command*
- [CSS.getMatchedStylesForNode]

---


#### type: CSS.CSSKeyframeRule

CSS keyframe rule representation.

*base type*
- **object**

*properties*
- *optional* `styleSheetId` <[CSS.StyleSheetId]> The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from
-  `origin` <[CSS.StyleSheetOrigin]> Parent stylesheet's origin
-  `keyText` <[CSS.Value]> Associated key text
-  `style` <[CSS.CSSStyle]> Associated style declaration

*property of type*
- [CSS.CSSKeyframesRule]

---


#### type: CSS.StyleDeclarationEdit

A descriptor of operation to mutate style declaration text.

*base type*
- **object**

*properties*
-  `styleSheetId` <[CSS.StyleSheetId]> The css style sheet identifier
-  `range` <[CSS.SourceRange]> The range of the style text in the enclosing stylesheet
-  `text` <[string]> New style text

*accepted by command*
- [CSS.setStyleTexts]

[CSS.CSSKeyframeRule]: css.md#type-csscsskeyframerule "CSS.CSSKeyframeRule"
[CSS.CSSMedia]: css.md#type-csscssmedia "CSS.CSSMedia"
[CSS.CSSRule]: css.md#type-csscssrule "CSS.CSSRule"
[CSS.CSSStyle]: css.md#type-csscssstyle "CSS.CSSStyle"
[CSS.CSSStyleSheetHeader]: css.md#type-csscssstylesheetheader "CSS.CSSStyleSheetHeader"
[CSS.RuleUsage]: css.md#type-cssruleusage "CSS.RuleUsage"
[CSS.StyleDeclarationEdit]: css.md#type-cssstyledeclarationedit "CSS.StyleDeclarationEdit"
[CSS.addRule]: css.md#command-cssaddrule "CSS.addRule"
[CSS.collectClassNames]: css.md#command-csscollectclassnames "CSS.collectClassNames"
[CSS.getStyleSheetText]: css.md#command-cssgetstylesheettext "CSS.getStyleSheetText"
[CSS.setKeyframeKey]: css.md#command-csssetkeyframekey "CSS.setKeyframeKey"
[CSS.setMediaText]: css.md#command-csssetmediatext "CSS.setMediaText"
[CSS.setRuleSelector]: css.md#command-csssetruleselector "CSS.setRuleSelector"
[CSS.setStyleSheetText]: css.md#command-csssetstylesheettext "CSS.setStyleSheetText"
[CSS.createStyleSheet]: css.md#command-csscreatestylesheet "CSS.createStyleSheet"
[CSS.styleSheetChanged]: css.md#event-cssstylesheetchanged "CSS.styleSheetChanged"
[CSS.styleSheetRemoved]: css.md#event-cssstylesheetremoved "CSS.styleSheetRemoved"
[CSS.CSSKeyframeRule]: css.md#type-csscsskeyframerule "CSS.CSSKeyframeRule"
[CSS.CSSRule]: css.md#type-csscssrule "CSS.CSSRule"
[CSS.CSSStyleSheetHeader]: css.md#type-csscssstylesheetheader "CSS.CSSStyleSheetHeader"
[CSS.getMatchedStylesForNode]: css.md#command-cssgetmatchedstylesfornode "CSS.getMatchedStylesForNode"
[CSS.getMatchedStylesForNode]: css.md#command-cssgetmatchedstylesfornode "CSS.getMatchedStylesForNode"
[CSS.InheritedStyleEntry]: css.md#type-cssinheritedstyleentry "CSS.InheritedStyleEntry"
[CSS.PseudoElementMatches]: css.md#type-csspseudoelementmatches "CSS.PseudoElementMatches"
[CSS.getMatchedStylesForNode]: css.md#command-cssgetmatchedstylesfornode "CSS.getMatchedStylesForNode"
[CSS.CSSKeyframeRule]: css.md#type-csscsskeyframerule "CSS.CSSKeyframeRule"
[CSS.CSSKeyframesRule]: css.md#type-csscsskeyframesrule "CSS.CSSKeyframesRule"
[CSS.SelectorList]: css.md#type-cssselectorlist "CSS.SelectorList"
[CSS.setKeyframeKey]: css.md#command-csssetkeyframekey "CSS.setKeyframeKey"
[CSS.CSSRule]: css.md#type-csscssrule "CSS.CSSRule"
[CSS.setRuleSelector]: css.md#command-csssetruleselector "CSS.setRuleSelector"
[CSS.styleSheetAdded]: css.md#event-cssstylesheetadded "CSS.styleSheetAdded"
[CSS.RuleMatch]: css.md#type-cssrulematch "CSS.RuleMatch"
[CSS.addRule]: css.md#command-cssaddrule "CSS.addRule"
[CSS.stopRuleUsageTracking]: css.md#command-cssstopruleusagetracking "CSS.stopRuleUsageTracking"
[CSS.takeCoverageDelta]: css.md#command-csstakecoveragedelta "CSS.takeCoverageDelta"
[CSS.CSSMedia]: css.md#type-csscssmedia "CSS.CSSMedia"
[CSS.CSSProperty]: css.md#type-csscssproperty "CSS.CSSProperty"
[CSS.CSSStyle]: css.md#type-csscssstyle "CSS.CSSStyle"
[CSS.MediaQueryExpression]: css.md#type-cssmediaqueryexpression "CSS.MediaQueryExpression"
[CSS.StyleDeclarationEdit]: css.md#type-cssstyledeclarationedit "CSS.StyleDeclarationEdit"
[CSS.Value]: css.md#type-cssvalue "CSS.Value"
[CSS.addRule]: css.md#command-cssaddrule "CSS.addRule"
[CSS.setKeyframeKey]: css.md#command-csssetkeyframekey "CSS.setKeyframeKey"
[CSS.setMediaText]: css.md#command-csssetmediatext "CSS.setMediaText"
[CSS.setRuleSelector]: css.md#command-csssetruleselector "CSS.setRuleSelector"
[CSS.CSSStyle]: css.md#type-csscssstyle "CSS.CSSStyle"
[CSS.getComputedStyleForNode]: css.md#command-cssgetcomputedstylefornode "CSS.getComputedStyleForNode"
[CSS.CSSKeyframeRule]: css.md#type-csscsskeyframerule "CSS.CSSKeyframeRule"
[CSS.CSSRule]: css.md#type-csscssrule "CSS.CSSRule"
[CSS.InheritedStyleEntry]: css.md#type-cssinheritedstyleentry "CSS.InheritedStyleEntry"
[CSS.getInlineStylesForNode]: css.md#command-cssgetinlinestylesfornode "CSS.getInlineStylesForNode"
[CSS.getMatchedStylesForNode]: css.md#command-cssgetmatchedstylesfornode "CSS.getMatchedStylesForNode"
[CSS.setStyleTexts]: css.md#command-csssetstyletexts "CSS.setStyleTexts"
[CSS.CSSStyle]: css.md#type-csscssstyle "CSS.CSSStyle"
[CSS.CSSRule]: css.md#type-csscssrule "CSS.CSSRule"
[CSS.getMediaQueries]: css.md#command-cssgetmediaqueries "CSS.getMediaQueries"
[CSS.setMediaText]: css.md#command-csssetmediatext "CSS.setMediaText"
[CSS.CSSMedia]: css.md#type-csscssmedia "CSS.CSSMedia"
[CSS.MediaQuery]: css.md#type-cssmediaquery "CSS.MediaQuery"
[CSS.getPlatformFontsForNode]: css.md#command-cssgetplatformfontsfornode "CSS.getPlatformFontsForNode"
[CSS.getMatchedStylesForNode]: css.md#command-cssgetmatchedstylesfornode "CSS.getMatchedStylesForNode"
[CSS.CSSKeyframesRule]: css.md#type-csscsskeyframesrule "CSS.CSSKeyframesRule"
[CSS.setStyleTexts]: css.md#command-csssetstyletexts "CSS.setStyleTexts"
[DOM.PseudoType]: dom.md#type-dompseudotype "DOM.PseudoType"
[CSS.RuleMatch]: css.md#type-cssrulematch "CSS.RuleMatch"
[CSS.CSSStyle]: css.md#type-csscssstyle "CSS.CSSStyle"
[CSS.RuleMatch]: css.md#type-cssrulematch "CSS.RuleMatch"
[CSS.CSSRule]: css.md#type-csscssrule "CSS.CSSRule"
[CSS.SourceRange]: css.md#type-csssourcerange "CSS.SourceRange"
[CSS.Value]: css.md#type-cssvalue "CSS.Value"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[Page.FrameId]: page.md#type-pageframeid "Page.FrameId"
[CSS.StyleSheetOrigin]: css.md#type-cssstylesheetorigin "CSS.StyleSheetOrigin"
[DOM.BackendNodeId]: dom.md#type-dombackendnodeid "DOM.BackendNodeId"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[CSS.SelectorList]: css.md#type-cssselectorlist "CSS.SelectorList"
[CSS.StyleSheetOrigin]: css.md#type-cssstylesheetorigin "CSS.StyleSheetOrigin"
[CSS.CSSStyle]: css.md#type-csscssstyle "CSS.CSSStyle"
[CSS.CSSMedia]: css.md#type-csscssmedia "CSS.CSSMedia"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[CSS.CSSProperty]: css.md#type-csscssproperty "CSS.CSSProperty"
[CSS.ShorthandEntry]: css.md#type-cssshorthandentry "CSS.ShorthandEntry"
[CSS.SourceRange]: css.md#type-csssourcerange "CSS.SourceRange"
[CSS.SourceRange]: css.md#type-csssourcerange "CSS.SourceRange"
[CSS.SourceRange]: css.md#type-csssourcerange "CSS.SourceRange"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[CSS.MediaQuery]: css.md#type-cssmediaquery "CSS.MediaQuery"
[CSS.MediaQueryExpression]: css.md#type-cssmediaqueryexpression "CSS.MediaQueryExpression"
[CSS.SourceRange]: css.md#type-csssourcerange "CSS.SourceRange"
[CSS.Value]: css.md#type-cssvalue "CSS.Value"
[CSS.CSSKeyframeRule]: css.md#type-csscsskeyframerule "CSS.CSSKeyframeRule"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[CSS.StyleSheetOrigin]: css.md#type-cssstylesheetorigin "CSS.StyleSheetOrigin"
[CSS.Value]: css.md#type-cssvalue "CSS.Value"
[CSS.CSSStyle]: css.md#type-csscssstyle "CSS.CSSStyle"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[CSS.SourceRange]: css.md#type-csssourcerange "CSS.SourceRange"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[CSS.SourceRange]: css.md#type-csssourcerange "CSS.SourceRange"
[CSS.CSSRule]: css.md#type-csscssrule "CSS.CSSRule"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[Page.FrameId]: page.md#type-pageframeid "Page.FrameId"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[DOM.NodeId]: dom.md#type-domnodeid "DOM.NodeId"
[DOM.NodeId]: dom.md#type-domnodeid "DOM.NodeId"
[DOM.NodeId]: dom.md#type-domnodeid "DOM.NodeId"
[CSS.CSSComputedStyleProperty]: css.md#type-csscsscomputedstyleproperty "CSS.CSSComputedStyleProperty"
[DOM.NodeId]: dom.md#type-domnodeid "DOM.NodeId"
[CSS.CSSStyle]: css.md#type-csscssstyle "CSS.CSSStyle"
[DOM.NodeId]: dom.md#type-domnodeid "DOM.NodeId"
[CSS.CSSStyle]: css.md#type-csscssstyle "CSS.CSSStyle"
[CSS.RuleMatch]: css.md#type-cssrulematch "CSS.RuleMatch"
[CSS.PseudoElementMatches]: css.md#type-csspseudoelementmatches "CSS.PseudoElementMatches"
[CSS.InheritedStyleEntry]: css.md#type-cssinheritedstyleentry "CSS.InheritedStyleEntry"
[CSS.CSSKeyframesRule]: css.md#type-csscsskeyframesrule "CSS.CSSKeyframesRule"
[CSS.CSSMedia]: css.md#type-csscssmedia "CSS.CSSMedia"
[DOM.NodeId]: dom.md#type-domnodeid "DOM.NodeId"
[CSS.PlatformFontUsage]: css.md#type-cssplatformfontusage "CSS.PlatformFontUsage"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[DOM.NodeId]: dom.md#type-domnodeid "DOM.NodeId"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[CSS.SourceRange]: css.md#type-csssourcerange "CSS.SourceRange"
[CSS.Value]: css.md#type-cssvalue "CSS.Value"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[CSS.SourceRange]: css.md#type-csssourcerange "CSS.SourceRange"
[CSS.CSSMedia]: css.md#type-csscssmedia "CSS.CSSMedia"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[CSS.SourceRange]: css.md#type-csssourcerange "CSS.SourceRange"
[CSS.SelectorList]: css.md#type-cssselectorlist "CSS.SelectorList"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[CSS.StyleDeclarationEdit]: css.md#type-cssstyledeclarationedit "CSS.StyleDeclarationEdit"
[CSS.CSSStyle]: css.md#type-csscssstyle "CSS.CSSStyle"
[CSS.RuleUsage]: css.md#type-cssruleusage "CSS.RuleUsage"
[CSS.RuleUsage]: css.md#type-cssruleusage "CSS.RuleUsage"
[CSS.CSSStyleSheetHeader]: css.md#type-csscssstylesheetheader "CSS.CSSStyleSheetHeader"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[CSS.StyleSheetId]: css.md#type-cssstylesheetid "CSS.StyleSheetId"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"