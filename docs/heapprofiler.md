
### domain: HeapProfiler

#### HeapProfiler.addInspectedHeapObject()
- parameters
  - `heapObjectId` <HeapSnapshotObjectId> Heap snapshot object id to be accessible by means of $x command line API

Enables console to refer to the node with given id via $x (see Command Line API for more details
$x functions).

#### HeapProfiler.collectGarbage()

#### HeapProfiler.disable()

#### HeapProfiler.enable()

#### HeapProfiler.getHeapObjectId()
- parameters
  - `objectId` <Runtime.RemoteObjectId> Identifier of the object to get heap object id for
- returns
  - `heapSnapshotObjectId` <HeapSnapshotObjectId> Id of the heap snapshot object corresponding to the passed remote object id

#### HeapProfiler.getObjectByHeapObjectId()
- parameters
  - `objectId` <HeapSnapshotObjectId> 
  - `objectGroup` <[string]> Symbolic group name that can be used to release multiple objects
- returns
  - `result` <Runtime.RemoteObject> Evaluation result

#### HeapProfiler.getSamplingProfile()
- returns
  - `profile` <SamplingHeapProfile> Return the sampling profile being collected

#### HeapProfiler.startSampling()
- parameters
  - `samplingInterval` <[number]> Average sample interval in bytes. Poisson distribution is used for the intervals. The
default value is 32768 bytes

#### HeapProfiler.startTrackingHeapObjects()
- parameters
  - `trackAllocations` <[boolean]> 

#### HeapProfiler.stopSampling()
- returns
  - `profile` <SamplingHeapProfile> Recorded sampling heap profile

#### HeapProfiler.stopTrackingHeapObjects()
- parameters
  - `reportProgress` <[boolean]> If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken
when the tracking is stopped

#### HeapProfiler.takeHeapSnapshot()
- parameters
  - `reportProgress` <[boolean]> If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken

#### event: HeapProfiler.addHeapSnapshotChunk
- `chunk` <[string]> 

#### event: HeapProfiler.heapStatsUpdate
- `statsUpdate` array of <[integer]> An array of triplets. Each triplet describes a fragment. The first integer is the fragment
index, the second integer is a total count of objects for the fragment, the third integer is
a total size of the objects for the fragment

If heap objects tracking has been started then backend may send update for one or more fragments

#### event: HeapProfiler.lastSeenObjectId
- `lastSeenObjectId` <[integer]> 
- `timestamp` <[number]> 

If heap objects tracking has been started then backend regularly sends a current value for last
seen object id and corresponding timestamp. If the were changes in the heap since last event
then one or more heapStatsUpdate events will be sent before a new lastSeenObjectId event.

#### event: HeapProfiler.reportHeapSnapshotProgress
- `done` <[integer]> 
- `total` <[integer]> 
- `finished` <[boolean]> 

#### event: HeapProfiler.resetProfiles