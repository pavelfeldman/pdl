
### domain: HeapProfiler

#### type: HeapProfiler.HeapSnapshotObjectId = string

Heap snapshot object id.

#### type: HeapProfiler.SamplingHeapProfileNode = object

Sampling Heap Profile node. Holds callsite information, allocation statistics and child nodes.

*properties*
  - `callFrame` <[Runtime.CallFrame]]> Function location
  - `selfSize` <number]> Allocations size in bytes for the node excluding children
  - `children` <array of [HeapProfiler.SamplingHeapProfileNode]> Child nodes

#### type: HeapProfiler.SamplingHeapProfile = object

Profile.

*properties*
  - `head` <[HeapProfiler.SamplingHeapProfileNode]]> 

#### command: HeapProfiler.addInspectedHeapObject()

Enables console to refer to the node with given id via $x (see Command Line API for more details
$x functions).

*parameters*
- `heapObjectId` <[HeapProfiler.HeapSnapshotObjectId]]> Heap snapshot object id to be accessible by means of $x command line API

#### command: HeapProfiler.collectGarbage()

#### command: HeapProfiler.disable()

#### command: HeapProfiler.enable()

#### command: HeapProfiler.getHeapObjectId()

*parameters*
- `objectId` <[Runtime.RemoteObjectId]]> Identifier of the object to get heap object id for

*returns*
- `heapSnapshotObjectId` <[HeapProfiler.HeapSnapshotObjectId]]> Id of the heap snapshot object corresponding to the passed remote object id

#### command: HeapProfiler.getObjectByHeapObjectId()

*parameters*
- `objectId` <[HeapProfiler.HeapSnapshotObjectId]]> 
- `objectGroup` <string]> Symbolic group name that can be used to release multiple objects

*returns*
- `result` <[Runtime.RemoteObject]]> Evaluation result

#### command: HeapProfiler.getSamplingProfile()

*returns*
- `profile` <[HeapProfiler.SamplingHeapProfile]]> Return the sampling profile being collected

#### command: HeapProfiler.startSampling()

*parameters*
- `samplingInterval` <number]> Average sample interval in bytes. Poisson distribution is used for the intervals. The
default value is 32768 bytes

#### command: HeapProfiler.startTrackingHeapObjects()

*parameters*
- `trackAllocations` <boolean]> 

#### command: HeapProfiler.stopSampling()

*returns*
- `profile` <[HeapProfiler.SamplingHeapProfile]]> Recorded sampling heap profile

#### command: HeapProfiler.stopTrackingHeapObjects()

*parameters*
- `reportProgress` <boolean]> If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken
when the tracking is stopped

#### command: HeapProfiler.takeHeapSnapshot()

*parameters*
- `reportProgress` <boolean]> If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken

#### event: HeapProfiler.addHeapSnapshotChunk

*returns*
- `chunk` <string]> 

#### event: HeapProfiler.heapStatsUpdate

If heap objects tracking has been started then backend may send update for one or more fragments

*returns*
- `statsUpdate` <array of integer> An array of triplets. Each triplet describes a fragment. The first integer is the fragment
index, the second integer is a total count of objects for the fragment, the third integer is
a total size of the objects for the fragment

#### event: HeapProfiler.lastSeenObjectId

If heap objects tracking has been started then backend regularly sends a current value for last
seen object id and corresponding timestamp. If the were changes in the heap since last event
then one or more heapStatsUpdate events will be sent before a new lastSeenObjectId event.

*returns*
- `lastSeenObjectId` <integer]> 
- `timestamp` <number]> 

#### event: HeapProfiler.reportHeapSnapshotProgress

*returns*
- `done` <integer]> 
- `total` <integer]> 
- `finished` <boolean]> 

#### event: HeapProfiler.resetProfiles

[Runtime.CallFrame]: heapprofiler.md#runtimecallframe
[HeapProfiler.SamplingHeapProfileNode]: heapprofiler.md#heapprofilersamplingheapprofilenode
[HeapProfiler.HeapSnapshotObjectId]: heapprofiler.md#heapprofilerheapsnapshotobjectid
[Runtime.RemoteObjectId]: heapprofiler.md#runtimeremoteobjectid
[Runtime.RemoteObject]: heapprofiler.md#runtimeremoteobject
[HeapProfiler.SamplingHeapProfile]: heapprofiler.md#heapprofilersamplingheapprofile