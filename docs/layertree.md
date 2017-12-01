
### domain: LayerTree 🌱

---


#### command: LayerTree.compositingReasons

Provides the reasons why the given layer was composited.

*parameters*
-  `layerId` <[LayerTree.LayerId]> The id of the layer for which we want to get the reasons it was composited

*returns*
-  `compositingReasons` <array of [string]> A list of strings specifying reasons for the given layer to become composited

---


#### command: LayerTree.disable

Disables compositing tree inspection.

---


#### command: LayerTree.enable

Enables compositing tree inspection.

---


#### command: LayerTree.loadSnapshot

Returns the snapshot identifier.

*parameters*
-  `tiles` <array of [LayerTree.PictureTile]> An array of tiles composing the snapshot

*returns*
-  `snapshotId` <[LayerTree.SnapshotId]> The id of the snapshot

---


#### command: LayerTree.makeSnapshot

Returns the layer snapshot identifier.

*parameters*
-  `layerId` <[LayerTree.LayerId]> The id of the layer

*returns*
-  `snapshotId` <[LayerTree.SnapshotId]> The id of the layer snapshot

---


#### command: LayerTree.profileSnapshot

*parameters*
-  `snapshotId` <[LayerTree.SnapshotId]> The id of the layer snapshot
- *optional* `minRepeatCount` <[integer]> The maximum number of times to replay the snapshot (1, if not specified)
- *optional* `minDuration` <[number]> The minimum duration (in seconds) to replay the snapshot
- *optional* `clipRect` <[DOM.Rect]> The clip rectangle to apply when replaying the snapshot

*returns*
-  `timings` <array of [LayerTree.PaintProfile]> The array of paint profiles, one per run

---


#### command: LayerTree.releaseSnapshot

Releases layer snapshot captured by the back-end.

*parameters*
-  `snapshotId` <[LayerTree.SnapshotId]> The id of the layer snapshot

---


#### command: LayerTree.replaySnapshot

Replays the layer snapshot and returns the resulting bitmap.

*parameters*
-  `snapshotId` <[LayerTree.SnapshotId]> The id of the layer snapshot
- *optional* `fromStep` <[integer]> The first step to replay from (replay from the very start if not specified)
- *optional* `toStep` <[integer]> The last step to replay to (replay till the end if not specified)
- *optional* `scale` <[number]> The scale to apply while replaying (defaults to 1)

*returns*
-  `dataURL` <[string]> A data: URL for resulting image

---


#### command: LayerTree.snapshotCommandLog

Replays the layer snapshot and returns canvas log.

*parameters*
-  `snapshotId` <[LayerTree.SnapshotId]> The id of the layer snapshot

*returns*
-  `commandLog` <array of [object]> The array of canvas function calls

---


#### event: LayerTree.layerPainted

*parameters*
-  `layerId` <[LayerTree.LayerId]> The id of the painted layer
-  `clip` <[DOM.Rect]> Clip rectangle

---


#### event: LayerTree.layerTreeDidChange

*parameters*
- *optional* `layers` <array of [LayerTree.Layer]> Layer tree, absent if not in the comspositing mode

---


#### type: LayerTree.LayerId

Unique Layer identifier.

*base type*
- **string**

*property of type*
- [LayerTree.Layer]
- [LayerTree.StickyPositionConstraint]

*accepted by command*
- [LayerTree.compositingReasons]
- [LayerTree.makeSnapshot]

*parameter in event*
- [LayerTree.layerPainted]

---


#### type: LayerTree.SnapshotId

Unique snapshot identifier.

*base type*
- **string**

*returned from command*
- [LayerTree.loadSnapshot]
- [LayerTree.makeSnapshot]

*accepted by command*
- [LayerTree.profileSnapshot]
- [LayerTree.releaseSnapshot]
- [LayerTree.replaySnapshot]
- [LayerTree.snapshotCommandLog]

---


#### type: LayerTree.ScrollRect

Rectangle where scrolling happens on the main thread.

*base type*
- **object**

*properties*
-  `rect` <[DOM.Rect]> Rectangle itself
-  `type` <[string]> Reason for rectangle to force scrolling on the main thread

*property of type*
- [LayerTree.Layer]

---


#### type: LayerTree.StickyPositionConstraint

Sticky position constraints.

*base type*
- **object**

*properties*
-  `stickyBoxRect` <[DOM.Rect]> Layout rectangle of the sticky element before being shifted
-  `containingBlockRect` <[DOM.Rect]> Layout rectangle of the containing block of the sticky element
- *optional* `nearestLayerShiftingStickyBox` <[LayerTree.LayerId]> The nearest sticky layer that shifts the sticky box
- *optional* `nearestLayerShiftingContainingBlock` <[LayerTree.LayerId]> The nearest sticky layer that shifts the containing block

*property of type*
- [LayerTree.Layer]

---


#### type: LayerTree.PictureTile

Serialized fragment of layer picture along with its offset within the layer.

*base type*
- **object**

*properties*
-  `x` <[number]> Offset from owning layer left boundary
-  `y` <[number]> Offset from owning layer top boundary
-  `picture` <[string]> Base64-encoded snapshot data

*accepted by command*
- [LayerTree.loadSnapshot]

---


#### type: LayerTree.Layer

Information about a compositing layer.

*base type*
- **object**

*properties*
-  `layerId` <[LayerTree.LayerId]> The unique id for this layer
- *optional* `parentLayerId` <[LayerTree.LayerId]> The id of parent (not present for root)
- *optional* `backendNodeId` <[DOM.BackendNodeId]> The backend id for the node associated with this layer
-  `offsetX` <[number]> Offset from parent layer, X coordinate
-  `offsetY` <[number]> Offset from parent layer, Y coordinate
-  `width` <[number]> Layer width
-  `height` <[number]> Layer height
- *optional* `transform` <array of [number]> Transformation matrix for layer, default is identity matrix
- *optional* `anchorX` <[number]> Transform anchor point X, absent if no transform specified
- *optional* `anchorY` <[number]> Transform anchor point Y, absent if no transform specified
- *optional* `anchorZ` <[number]> Transform anchor point Z, absent if no transform specified
-  `paintCount` <[integer]> Indicates how many time this layer has painted
-  `drawsContent` <[boolean]> Indicates whether this layer hosts any content, rather than being used for
transform/scrolling purposes only
- *optional* `invisible` <[boolean]> Set if layer is not visible
- *optional* `scrollRects` <array of [LayerTree.ScrollRect]> Rectangles scrolling on main thread only
- *optional* `stickyPositionConstraint` <[LayerTree.StickyPositionConstraint]> Sticky position constraint information

*parameter in event*
- [LayerTree.layerTreeDidChange]

---


#### type: LayerTree.PaintProfile

Array of timings, one per paint step.

*base type*
- **array**

*returned from command*
- [LayerTree.profileSnapshot]

[LayerTree.Layer]: layertree.md#type-layertreelayer "LayerTree.Layer"
[LayerTree.StickyPositionConstraint]: layertree.md#type-layertreestickypositionconstraint "LayerTree.StickyPositionConstraint"
[LayerTree.compositingReasons]: layertree.md#command-layertreecompositingreasons "LayerTree.compositingReasons"
[LayerTree.makeSnapshot]: layertree.md#command-layertreemakesnapshot "LayerTree.makeSnapshot"
[LayerTree.layerPainted]: layertree.md#event-layertreelayerpainted "LayerTree.layerPainted"
[LayerTree.loadSnapshot]: layertree.md#command-layertreeloadsnapshot "LayerTree.loadSnapshot"
[LayerTree.makeSnapshot]: layertree.md#command-layertreemakesnapshot "LayerTree.makeSnapshot"
[LayerTree.profileSnapshot]: layertree.md#command-layertreeprofilesnapshot "LayerTree.profileSnapshot"
[LayerTree.releaseSnapshot]: layertree.md#command-layertreereleasesnapshot "LayerTree.releaseSnapshot"
[LayerTree.replaySnapshot]: layertree.md#command-layertreereplaysnapshot "LayerTree.replaySnapshot"
[LayerTree.snapshotCommandLog]: layertree.md#command-layertreesnapshotcommandlog "LayerTree.snapshotCommandLog"
[LayerTree.Layer]: layertree.md#type-layertreelayer "LayerTree.Layer"
[LayerTree.Layer]: layertree.md#type-layertreelayer "LayerTree.Layer"
[LayerTree.loadSnapshot]: layertree.md#command-layertreeloadsnapshot "LayerTree.loadSnapshot"
[LayerTree.layerTreeDidChange]: layertree.md#event-layertreelayertreedidchange "LayerTree.layerTreeDidChange"
[LayerTree.profileSnapshot]: layertree.md#command-layertreeprofilesnapshot "LayerTree.profileSnapshot"
[DOM.Rect]: dom.md#type-domrect "DOM.Rect"
[DOM.Rect]: dom.md#type-domrect "DOM.Rect"
[LayerTree.LayerId]: layertree.md#type-layertreelayerid "LayerTree.LayerId"
[LayerTree.LayerId]: layertree.md#type-layertreelayerid "LayerTree.LayerId"
[DOM.BackendNodeId]: dom.md#type-dombackendnodeid "DOM.BackendNodeId"
[LayerTree.ScrollRect]: layertree.md#type-layertreescrollrect "LayerTree.ScrollRect"
[LayerTree.StickyPositionConstraint]: layertree.md#type-layertreestickypositionconstraint "LayerTree.StickyPositionConstraint"
[LayerTree.LayerId]: layertree.md#type-layertreelayerid "LayerTree.LayerId"
[LayerTree.PictureTile]: layertree.md#type-layertreepicturetile "LayerTree.PictureTile"
[LayerTree.SnapshotId]: layertree.md#type-layertreesnapshotid "LayerTree.SnapshotId"
[LayerTree.LayerId]: layertree.md#type-layertreelayerid "LayerTree.LayerId"
[LayerTree.SnapshotId]: layertree.md#type-layertreesnapshotid "LayerTree.SnapshotId"
[LayerTree.SnapshotId]: layertree.md#type-layertreesnapshotid "LayerTree.SnapshotId"
[DOM.Rect]: dom.md#type-domrect "DOM.Rect"
[LayerTree.PaintProfile]: layertree.md#type-layertreepaintprofile "LayerTree.PaintProfile"
[LayerTree.SnapshotId]: layertree.md#type-layertreesnapshotid "LayerTree.SnapshotId"
[LayerTree.SnapshotId]: layertree.md#type-layertreesnapshotid "LayerTree.SnapshotId"
[LayerTree.SnapshotId]: layertree.md#type-layertreesnapshotid "LayerTree.SnapshotId"
[LayerTree.LayerId]: layertree.md#type-layertreelayerid "LayerTree.LayerId"
[DOM.Rect]: dom.md#type-domrect "DOM.Rect"
[LayerTree.Layer]: layertree.md#type-layertreelayer "LayerTree.Layer"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"