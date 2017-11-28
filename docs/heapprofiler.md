
### domain: HeapProfiler 🌱


#### type: HeapProfiler.HeapSnapshotObjectId = string

Heap snapshot object id.


#### type: HeapProfiler.SamplingHeapProfileNode = object

Sampling Heap Profile node. Holds callsite information, allocation statistics and child nodes.

*properties*
-  `callFrame` <[Runtime.CallFrame]> Function location
-  `selfSize` <[number]> Allocations size in bytes for the node excluding children
-  `children` <array of [HeapProfiler.SamplingHeapProfileNode]> Child nodes


#### type: HeapProfiler.SamplingHeapProfile = object

Profile.

*properties*
-  `head` <[HeapProfiler.SamplingHeapProfileNode]> 


#### command: HeapProfiler.addInspectedHeapObject()

Enables console to refer to the node with given id via $x (see Command Line API for more details
$x functions).

*parameters*
-  `heapObjectId` <[HeapProfiler.HeapSnapshotObjectId]> Heap snapshot object id to be accessible by means of $x command line API


#### command: HeapProfiler.collectGarbage()


#### command: HeapProfiler.disable()


#### command: HeapProfiler.enable()


#### command: HeapProfiler.getHeapObjectId()

*parameters*
-  `objectId` <[Runtime.RemoteObjectId]> Identifier of the object to get heap object id for

*returns*
-  `heapSnapshotObjectId` <[HeapProfiler.HeapSnapshotObjectId]> Id of the heap snapshot object corresponding to the passed remote object id


#### command: HeapProfiler.getObjectByHeapObjectId()

*parameters*
-  `objectId` <[HeapProfiler.HeapSnapshotObjectId]> 
- *optional* `objectGroup` <[string]> Symbolic group name that can be used to release multiple objects

*returns*
-  `result` <[Runtime.RemoteObject]> Evaluation result


#### command: HeapProfiler.getSamplingProfile()

*returns*
-  `profile` <[HeapProfiler.SamplingHeapProfile]> Return the sampling profile being collected


#### command: HeapProfiler.startSampling()

*parameters*
- *optional* `samplingInterval` <[number]> Average sample interval in bytes. Poisson distribution is used for the intervals. The
default value is 32768 bytes


#### command: HeapProfiler.startTrackingHeapObjects()

*parameters*
- *optional* `trackAllocations` <[boolean]> 


#### command: HeapProfiler.stopSampling()

*returns*
-  `profile` <[HeapProfiler.SamplingHeapProfile]> Recorded sampling heap profile


#### command: HeapProfiler.stopTrackingHeapObjects()

*parameters*
- *optional* `reportProgress` <[boolean]> If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken
when the tracking is stopped


#### command: HeapProfiler.takeHeapSnapshot()

*parameters*
- *optional* `reportProgress` <[boolean]> If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken


#### event: HeapProfiler.addHeapSnapshotChunk

*parameters*
-  `chunk` <[string]> 


#### event: HeapProfiler.heapStatsUpdate

If heap objects tracking has been started then backend may send update for one or more fragments

*parameters*
-  `statsUpdate` <array of [integer]> An array of triplets. Each triplet describes a fragment. The first integer is the fragment
index, the second integer is a total count of objects for the fragment, the third integer is
a total size of the objects for the fragment


#### event: HeapProfiler.lastSeenObjectId

If heap objects tracking has been started then backend regularly sends a current value for last
seen object id and corresponding timestamp. If the were changes in the heap since last event
then one or more heapStatsUpdate events will be sent before a new lastSeenObjectId event.

*parameters*
-  `lastSeenObjectId` <[integer]> 
-  `timestamp` <[number]> 


#### event: HeapProfiler.reportHeapSnapshotProgress

*parameters*
-  `done` <[integer]> 
-  `total` <[integer]> 
- *optional* `finished` <[boolean]> 


#### event: HeapProfiler.resetProfiles

[Runtime.CallFrame]: runtime.md#type-runtimecallframe--object "Runtime.CallFrame"
[HeapProfiler.SamplingHeapProfileNode]: heapprofiler.md#type-heapprofilersamplingheapprofilenode--object "HeapProfiler.SamplingHeapProfileNode"
[HeapProfiler.HeapSnapshotObjectId]: heapprofiler.md#type-heapprofilerheapsnapshotobjectid--string "HeapProfiler.HeapSnapshotObjectId"
[Runtime.RemoteObjectId]: runtime.md#type-runtimeremoteobjectid--string "Runtime.RemoteObjectId"
[Runtime.RemoteObject]: runtime.md#type-runtimeremoteobject--object "Runtime.RemoteObject"
[HeapProfiler.SamplingHeapProfile]: heapprofiler.md#type-heapprofilersamplingheapprofile--object "HeapProfiler.SamplingHeapProfile"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"