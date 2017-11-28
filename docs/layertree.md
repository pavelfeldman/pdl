
### domain: LayerTree

#### type: LayerTree.LayerId = string

Unique Layer identifier.

#### type: LayerTree.SnapshotId = string

Unique snapshot identifier.

#### type: LayerTree.ScrollRect = object

Rectangle where scrolling happens on the main thread.

*properties*
  - `rect` <[DOM.Rect]]> Rectangle itself
  - `type` <string]> Reason for rectangle to force scrolling on the main thread

#### type: LayerTree.StickyPositionConstraint = object

Sticky position constraints.

*properties*
  - `stickyBoxRect` <[DOM.Rect]]> Layout rectangle of the sticky element before being shifted
  - `containingBlockRect` <[DOM.Rect]]> Layout rectangle of the containing block of the sticky element
  - `nearestLayerShiftingStickyBox` <[LayerTree.LayerId]]> The nearest sticky layer that shifts the sticky box
  - `nearestLayerShiftingContainingBlock` <[LayerTree.LayerId]]> The nearest sticky layer that shifts the containing block

#### type: LayerTree.PictureTile = object

Serialized fragment of layer picture along with its offset within the layer.

*properties*
  - `x` <number]> Offset from owning layer left boundary
  - `y` <number]> Offset from owning layer top boundary
  - `picture` <string]> Base64-encoded snapshot data

#### type: LayerTree.Layer = object

Information about a compositing layer.

*properties*
  - `layerId` <[LayerTree.LayerId]]> The unique id for this layer
  - `parentLayerId` <[LayerTree.LayerId]]> The id of parent (not present for root)
  - `backendNodeId` <[DOM.BackendNodeId]]> The backend id for the node associated with this layer
  - `offsetX` <number]> Offset from parent layer, X coordinate
  - `offsetY` <number]> Offset from parent layer, Y coordinate
  - `width` <number]> Layer width
  - `height` <number]> Layer height
  - `transform` <array of number> Transformation matrix for layer, default is identity matrix
  - `anchorX` <number]> Transform anchor point X, absent if no transform specified
  - `anchorY` <number]> Transform anchor point Y, absent if no transform specified
  - `anchorZ` <number]> Transform anchor point Z, absent if no transform specified
  - `paintCount` <integer]> Indicates how many time this layer has painted
  - `drawsContent` <boolean]> Indicates whether this layer hosts any content, rather than being used for
transform/scrolling purposes only
  - `invisible` <boolean]> Set if layer is not visible
  - `scrollRects` <array of [LayerTree.ScrollRect]> Rectangles scrolling on main thread only
  - `stickyPositionConstraint` <[LayerTree.StickyPositionConstraint]]> Sticky position constraint information

#### type: LayerTree.PaintProfile = array

Array of timings, one per paint step.

#### command: LayerTree.compositingReasons()

Provides the reasons why the given layer was composited.

*parameters*
- `layerId` <[LayerTree.LayerId]]> The id of the layer for which we want to get the reasons it was composited

*returns*
- `compositingReasons` <array of string> A list of strings specifying reasons for the given layer to become composited

#### command: LayerTree.disable()

Disables compositing tree inspection.

#### command: LayerTree.enable()

Enables compositing tree inspection.

#### command: LayerTree.loadSnapshot()

Returns the snapshot identifier.

*parameters*
- `tiles` <array of [LayerTree.PictureTile]> An array of tiles composing the snapshot

*returns*
- `snapshotId` <[LayerTree.SnapshotId]]> The id of the snapshot

#### command: LayerTree.makeSnapshot()

Returns the layer snapshot identifier.

*parameters*
- `layerId` <[LayerTree.LayerId]]> The id of the layer

*returns*
- `snapshotId` <[LayerTree.SnapshotId]]> The id of the layer snapshot

#### command: LayerTree.profileSnapshot()

*parameters*
- `snapshotId` <[LayerTree.SnapshotId]]> The id of the layer snapshot
- `minRepeatCount` <integer]> The maximum number of times to replay the snapshot (1, if not specified)
- `minDuration` <number]> The minimum duration (in seconds) to replay the snapshot
- `clipRect` <[DOM.Rect]]> The clip rectangle to apply when replaying the snapshot

*returns*
- `timings` <array of [LayerTree.PaintProfile]> The array of paint profiles, one per run

#### command: LayerTree.releaseSnapshot()

Releases layer snapshot captured by the back-end.

*parameters*
- `snapshotId` <[LayerTree.SnapshotId]]> The id of the layer snapshot

#### command: LayerTree.replaySnapshot()

Replays the layer snapshot and returns the resulting bitmap.

*parameters*
- `snapshotId` <[LayerTree.SnapshotId]]> The id of the layer snapshot
- `fromStep` <integer]> The first step to replay from (replay from the very start if not specified)
- `toStep` <integer]> The last step to replay to (replay till the end if not specified)
- `scale` <number]> The scale to apply while replaying (defaults to 1)

*returns*
- `dataURL` <string]> A data: URL for resulting image

#### command: LayerTree.snapshotCommandLog()

Replays the layer snapshot and returns canvas log.

*parameters*
- `snapshotId` <[LayerTree.SnapshotId]]> The id of the layer snapshot

*returns*
- `commandLog` <array of object> The array of canvas function calls

#### event: LayerTree.layerPainted

*returns*
- `layerId` <[LayerTree.LayerId]]> The id of the painted layer
- `clip` <[DOM.Rect]]> Clip rectangle

#### event: LayerTree.layerTreeDidChange

*returns*
- `layers` <array of [LayerTree.Layer]> Layer tree, absent if not in the comspositing mode

[DOM.Rect]: layertree.md#domrect
[LayerTree.LayerId]: layertree.md#layertreelayerid
[DOM.BackendNodeId]: layertree.md#dombackendnodeid
[LayerTree.ScrollRect]: layertree.md#layertreescrollrect
[LayerTree.StickyPositionConstraint]: layertree.md#layertreestickypositionconstraint
[LayerTree.PictureTile]: layertree.md#layertreepicturetile
[LayerTree.SnapshotId]: layertree.md#layertreesnapshotid
[LayerTree.PaintProfile]: layertree.md#layertreepaintprofile
[LayerTree.Layer]: layertree.md#layertreelayer