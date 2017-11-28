
### domain: LayerTree

#### LayerTree.compositingReasons()
- parameters
  - `layerId` <LayerId> The id of the layer for which we want to get the reasons it was composited
- returns
  - `compositingReasons` array of <[string]> A list of strings specifying reasons for the given layer to become composited

Provides the reasons why the given layer was composited.

#### LayerTree.disable()

Disables compositing tree inspection.

#### LayerTree.enable()

Enables compositing tree inspection.

#### LayerTree.loadSnapshot()
- parameters
  - `tiles` array of <PictureTile> An array of tiles composing the snapshot
- returns
  - `snapshotId` <SnapshotId> The id of the snapshot

Returns the snapshot identifier.

#### LayerTree.makeSnapshot()
- parameters
  - `layerId` <LayerId> The id of the layer
- returns
  - `snapshotId` <SnapshotId> The id of the layer snapshot

Returns the layer snapshot identifier.

#### LayerTree.profileSnapshot()
- parameters
  - `snapshotId` <SnapshotId> The id of the layer snapshot
  - `minRepeatCount` <[integer]> The maximum number of times to replay the snapshot (1, if not specified)
  - `minDuration` <[number]> The minimum duration (in seconds) to replay the snapshot
  - `clipRect` <DOM.Rect> The clip rectangle to apply when replaying the snapshot
- returns
  - `timings` array of <PaintProfile> The array of paint profiles, one per run

#### LayerTree.releaseSnapshot()
- parameters
  - `snapshotId` <SnapshotId> The id of the layer snapshot

Releases layer snapshot captured by the back-end.

#### LayerTree.replaySnapshot()
- parameters
  - `snapshotId` <SnapshotId> The id of the layer snapshot
  - `fromStep` <[integer]> The first step to replay from (replay from the very start if not specified)
  - `toStep` <[integer]> The last step to replay to (replay till the end if not specified)
  - `scale` <[number]> The scale to apply while replaying (defaults to 1)
- returns
  - `dataURL` <[string]> A data: URL for resulting image

Replays the layer snapshot and returns the resulting bitmap.

#### LayerTree.snapshotCommandLog()
- parameters
  - `snapshotId` <SnapshotId> The id of the layer snapshot
- returns
  - `commandLog` array of <[object]> The array of canvas function calls

Replays the layer snapshot and returns canvas log.

#### event: LayerTree.layerPainted
- `layerId` <LayerId> The id of the painted layer
- `clip` <DOM.Rect> Clip rectangle

#### event: LayerTree.layerTreeDidChange
- `layers` array of <Layer> Layer tree, absent if not in the comspositing mode