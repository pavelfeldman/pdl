
### domain: Profiler

---


#### command: Profiler.disable

---


#### command: Profiler.enable

---


#### command: Profiler.getBestEffortCoverage

Collect coverage data for the current isolate. The coverage data may be incomplete due to
garbage collection.

*returns*
-  `result` <array of [Profiler.ScriptCoverage]> Coverage data for the current isolate

---


#### command: Profiler.setSamplingInterval

Changes CPU profiler sampling interval. Must be called before CPU profiles recording started.

*parameters*
-  `interval` <[integer]> New sampling interval in microseconds

---


#### command: Profiler.start

---


#### command: Profiler.startPreciseCoverage

Enable precise code coverage. Coverage data for JavaScript executed before enabling precise code
coverage may be incomplete. Enabling prevents running optimized code and resets execution
counters.

*parameters*
- *optional* `callCount` <[boolean]> Collect accurate call counts beyond simple 'covered' or 'not covered'
- *optional* `detailed` <[boolean]> Collect block-based coverage

---


#### command: Profiler.startTypeProfile 🌱

Enable type profile.

---


#### command: Profiler.stop

*returns*
-  `profile` <[Profiler.Profile]> Recorded profile

---


#### command: Profiler.stopPreciseCoverage

Disable precise code coverage. Disabling releases unnecessary execution count records and allows
executing optimized code.

---


#### command: Profiler.stopTypeProfile 🌱

Disable type profile. Disabling releases type profile data collected so far.

---


#### command: Profiler.takePreciseCoverage

Collect coverage data for the current isolate, and resets execution counters. Precise code
coverage needs to have started.

*returns*
-  `result` <array of [Profiler.ScriptCoverage]> Coverage data for the current isolate

---


#### command: Profiler.takeTypeProfile 🌱

Collect type profile.

*returns*
-  `result` <array of [Profiler.ScriptTypeProfile]> Type profile for all scripts since startTypeProfile() was turned on

---


#### event: Profiler.consoleProfileFinished

*parameters*
-  `id` <[string]> 
-  `location` <[Debugger.Location]> Location of console.profileEnd()
-  `profile` <[Profiler.Profile]> 
- *optional* `title` <[string]> Profile title passed as an argument to console.profile()

---


#### event: Profiler.consoleProfileStarted

Sent when new profile recording is started using console.profile() call.

*parameters*
-  `id` <[string]> 
-  `location` <[Debugger.Location]> Location of console.profile()
- *optional* `title` <[string]> Profile title passed as an argument to console.profile()

---


#### type: Profiler.ProfileNode

Profile node. Holds callsite information, execution statistics and child nodes.

*base type*
- **object**

*properties*
-  `id` <[integer]> Unique id of the node
-  `callFrame` <[Runtime.CallFrame]> Function location
- *optional* `hitCount` <[integer]> Number of samples where this node was on top of the call stack
- *optional* `children` <array of [integer]> Child node ids
- *optional* `deoptReason` <[string]> The reason of being not optimized. The function may be deoptimized or marked as don't
optimize
- *optional* `positionTicks` <array of [Profiler.PositionTickInfo]> An array of source position ticks

*property of type*
- [Profiler.Profile]

---


#### type: Profiler.Profile

Profile.

*base type*
- **object**

*properties*
-  `nodes` <array of [Profiler.ProfileNode]> The list of profile nodes. First item is the root node
-  `startTime` <[number]> Profiling start timestamp in microseconds
-  `endTime` <[number]> Profiling end timestamp in microseconds
- *optional* `samples` <array of [integer]> Ids of samples top nodes
- *optional* `timeDeltas` <array of [integer]> Time intervals between adjacent samples in microseconds. The first delta is relative to the
profile startTime

*returned from command*
- [Profiler.stop]

*parameter in event*
- [Profiler.consoleProfileFinished]

---


#### type: Profiler.PositionTickInfo

Specifies a number of samples attributed to a certain source position.

*base type*
- **object**

*properties*
-  `line` <[integer]> Source line number (1-based)
-  `ticks` <[integer]> Number of samples attributed to the source line

*property of type*
- [Profiler.ProfileNode]

---


#### type: Profiler.CoverageRange

Coverage data for a source range.

*base type*
- **object**

*properties*
-  `startOffset` <[integer]> JavaScript script source offset for the range start
-  `endOffset` <[integer]> JavaScript script source offset for the range end
-  `count` <[integer]> Collected execution count of the source range

*property of type*
- [Profiler.FunctionCoverage]

---


#### type: Profiler.FunctionCoverage

Coverage data for a JavaScript function.

*base type*
- **object**

*properties*
-  `functionName` <[string]> JavaScript function name
-  `ranges` <array of [Profiler.CoverageRange]> Source ranges inside the function with coverage data
-  `isBlockCoverage` <[boolean]> Whether coverage data for this function has block granularity

*property of type*
- [Profiler.ScriptCoverage]

---


#### type: Profiler.ScriptCoverage

Coverage data for a JavaScript script.

*base type*
- **object**

*properties*
-  `scriptId` <[Runtime.ScriptId]> JavaScript script id
-  `url` <[string]> JavaScript script name or url
-  `functions` <array of [Profiler.FunctionCoverage]> Functions contained in the script that has coverage data

*returned from command*
- [Profiler.getBestEffortCoverage]
- [Profiler.takePreciseCoverage]

---


#### type: Profiler.TypeObject

Describes a type collected during runtime.

*base type*
- **object**

*properties*
-  `name` <[string]> Name of a type collected with type profiling

*property of type*
- [Profiler.TypeProfileEntry]

---


#### type: Profiler.TypeProfileEntry

Source offset and types for a parameter or return value.

*base type*
- **object**

*properties*
-  `offset` <[integer]> Source offset of the parameter or end of function for return values
-  `types` <array of [Profiler.TypeObject]> The types for this parameter or return value

*property of type*
- [Profiler.ScriptTypeProfile]

---


#### type: Profiler.ScriptTypeProfile

Type profile data collected during runtime for a JavaScript script.

*base type*
- **object**

*properties*
-  `scriptId` <[Runtime.ScriptId]> JavaScript script id
-  `url` <[string]> JavaScript script name or url
-  `entries` <array of [Profiler.TypeProfileEntry]> Type profile entries for parameters and return values of the functions in the script

*returned from command*
- [Profiler.takeTypeProfile]

[Profiler.Profile]: profiler.md#type-profilerprofile "Profiler.Profile"
[Profiler.stop]: profiler.md#command-profilerstop "Profiler.stop"
[Profiler.consoleProfileFinished]: profiler.md#event-profilerconsoleprofilefinished "Profiler.consoleProfileFinished"
[Profiler.ProfileNode]: profiler.md#type-profilerprofilenode "Profiler.ProfileNode"
[Profiler.FunctionCoverage]: profiler.md#type-profilerfunctioncoverage "Profiler.FunctionCoverage"
[Profiler.ScriptCoverage]: profiler.md#type-profilerscriptcoverage "Profiler.ScriptCoverage"
[Profiler.getBestEffortCoverage]: profiler.md#command-profilergetbesteffortcoverage "Profiler.getBestEffortCoverage"
[Profiler.takePreciseCoverage]: profiler.md#command-profilertakeprecisecoverage "Profiler.takePreciseCoverage"
[Profiler.TypeProfileEntry]: profiler.md#type-profilertypeprofileentry "Profiler.TypeProfileEntry"
[Profiler.ScriptTypeProfile]: profiler.md#type-profilerscripttypeprofile "Profiler.ScriptTypeProfile"
[Profiler.takeTypeProfile]: profiler.md#command-profilertaketypeprofile "Profiler.takeTypeProfile"
[Runtime.CallFrame]: runtime.md#type-runtimecallframe "Runtime.CallFrame"
[Profiler.PositionTickInfo]: profiler.md#type-profilerpositiontickinfo "Profiler.PositionTickInfo"
[Profiler.ProfileNode]: profiler.md#type-profilerprofilenode "Profiler.ProfileNode"
[Profiler.CoverageRange]: profiler.md#type-profilercoveragerange "Profiler.CoverageRange"
[Runtime.ScriptId]: runtime.md#type-runtimescriptid "Runtime.ScriptId"
[Profiler.FunctionCoverage]: profiler.md#type-profilerfunctioncoverage "Profiler.FunctionCoverage"
[Profiler.TypeObject]: profiler.md#type-profilertypeobject "Profiler.TypeObject"
[Runtime.ScriptId]: runtime.md#type-runtimescriptid "Runtime.ScriptId"
[Profiler.TypeProfileEntry]: profiler.md#type-profilertypeprofileentry "Profiler.TypeProfileEntry"
[Profiler.ScriptCoverage]: profiler.md#type-profilerscriptcoverage "Profiler.ScriptCoverage"
[Profiler.Profile]: profiler.md#type-profilerprofile "Profiler.Profile"
[Profiler.ScriptCoverage]: profiler.md#type-profilerscriptcoverage "Profiler.ScriptCoverage"
[Profiler.ScriptTypeProfile]: profiler.md#type-profilerscripttypeprofile "Profiler.ScriptTypeProfile"
[Debugger.Location]: debugger.md#type-debuggerlocation "Debugger.Location"
[Profiler.Profile]: profiler.md#type-profilerprofile "Profiler.Profile"
[Debugger.Location]: debugger.md#type-debuggerlocation "Debugger.Location"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"