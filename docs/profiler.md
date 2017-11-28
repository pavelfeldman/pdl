
### domain: Profiler

#### type: Profiler.ProfileNode = object

Profile node. Holds callsite information, execution statistics and child nodes.

*properties*
  - `id` <integer]> Unique id of the node
  - `callFrame` <[Runtime.CallFrame]]> Function location
  - `hitCount` <integer]> Number of samples where this node was on top of the call stack
  - `children` <array of integer> Child node ids
  - `deoptReason` <string]> The reason of being not optimized. The function may be deoptimized or marked as don't
optimize
  - `positionTicks` <array of [Profiler.PositionTickInfo]> An array of source position ticks

#### type: Profiler.Profile = object

Profile.

*properties*
  - `nodes` <array of [Profiler.ProfileNode]> The list of profile nodes. First item is the root node
  - `startTime` <number]> Profiling start timestamp in microseconds
  - `endTime` <number]> Profiling end timestamp in microseconds
  - `samples` <array of integer> Ids of samples top nodes
  - `timeDeltas` <array of integer> Time intervals between adjacent samples in microseconds. The first delta is relative to the
profile startTime

#### type: Profiler.PositionTickInfo = object

Specifies a number of samples attributed to a certain source position.

*properties*
  - `line` <integer]> Source line number (1-based)
  - `ticks` <integer]> Number of samples attributed to the source line

#### type: Profiler.CoverageRange = object

Coverage data for a source range.

*properties*
  - `startOffset` <integer]> JavaScript script source offset for the range start
  - `endOffset` <integer]> JavaScript script source offset for the range end
  - `count` <integer]> Collected execution count of the source range

#### type: Profiler.FunctionCoverage = object

Coverage data for a JavaScript function.

*properties*
  - `functionName` <string]> JavaScript function name
  - `ranges` <array of [Profiler.CoverageRange]> Source ranges inside the function with coverage data
  - `isBlockCoverage` <boolean]> Whether coverage data for this function has block granularity

#### type: Profiler.ScriptCoverage = object

Coverage data for a JavaScript script.

*properties*
  - `scriptId` <[Runtime.ScriptId]]> JavaScript script id
  - `url` <string]> JavaScript script name or url
  - `functions` <array of [Profiler.FunctionCoverage]> Functions contained in the script that has coverage data

#### type: Profiler.TypeObject = object

Describes a type collected during runtime.

*properties*
  - `name` <string]> Name of a type collected with type profiling

#### type: Profiler.TypeProfileEntry = object

Source offset and types for a parameter or return value.

*properties*
  - `offset` <integer]> Source offset of the parameter or end of function for return values
  - `types` <array of [Profiler.TypeObject]> The types for this parameter or return value

#### type: Profiler.ScriptTypeProfile = object

Type profile data collected during runtime for a JavaScript script.

*properties*
  - `scriptId` <[Runtime.ScriptId]]> JavaScript script id
  - `url` <string]> JavaScript script name or url
  - `entries` <array of [Profiler.TypeProfileEntry]> Type profile entries for parameters and return values of the functions in the script

#### command: Profiler.disable()

#### command: Profiler.enable()

#### command: Profiler.getBestEffortCoverage()

Collect coverage data for the current isolate. The coverage data may be incomplete due to
garbage collection.

*returns*
- `result` <array of [Profiler.ScriptCoverage]> Coverage data for the current isolate

#### command: Profiler.setSamplingInterval()

Changes CPU profiler sampling interval. Must be called before CPU profiles recording started.

*parameters*
- `interval` <integer]> New sampling interval in microseconds

#### command: Profiler.start()

#### command: Profiler.startPreciseCoverage()

Enable precise code coverage. Coverage data for JavaScript executed before enabling precise code
coverage may be incomplete. Enabling prevents running optimized code and resets execution
counters.

*parameters*
- `callCount` <boolean]> Collect accurate call counts beyond simple 'covered' or 'not covered'
- `detailed` <boolean]> Collect block-based coverage

#### command: Profiler.startTypeProfile()

Enable type profile.

#### command: Profiler.stop()

*returns*
- `profile` <[Profiler.Profile]]> Recorded profile

#### command: Profiler.stopPreciseCoverage()

Disable precise code coverage. Disabling releases unnecessary execution count records and allows
executing optimized code.

#### command: Profiler.stopTypeProfile()

Disable type profile. Disabling releases type profile data collected so far.

#### command: Profiler.takePreciseCoverage()

Collect coverage data for the current isolate, and resets execution counters. Precise code
coverage needs to have started.

*returns*
- `result` <array of [Profiler.ScriptCoverage]> Coverage data for the current isolate

#### command: Profiler.takeTypeProfile()

Collect type profile.

*returns*
- `result` <array of [Profiler.ScriptTypeProfile]> Type profile for all scripts since startTypeProfile() was turned on

#### event: Profiler.consoleProfileFinished

*returns*
- `id` <string]> 
- `location` <[Debugger.Location]]> Location of console.profileEnd()
- `profile` <[Profiler.Profile]]> 
- `title` <string]> Profile title passed as an argument to console.profile()

#### event: Profiler.consoleProfileStarted

Sent when new profile recording is started using console.profile() call.

*returns*
- `id` <string]> 
- `location` <[Debugger.Location]]> Location of console.profile()
- `title` <string]> Profile title passed as an argument to console.profile()

[Runtime.CallFrame]: profiler.md#runtimecallframe
[Profiler.PositionTickInfo]: profiler.md#profilerpositiontickinfo
[Profiler.ProfileNode]: profiler.md#profilerprofilenode
[Profiler.CoverageRange]: profiler.md#profilercoveragerange
[Runtime.ScriptId]: profiler.md#runtimescriptid
[Profiler.FunctionCoverage]: profiler.md#profilerfunctioncoverage
[Profiler.TypeObject]: profiler.md#profilertypeobject
[Profiler.TypeProfileEntry]: profiler.md#profilertypeprofileentry
[Profiler.ScriptCoverage]: profiler.md#profilerscriptcoverage
[Profiler.Profile]: profiler.md#profilerprofile
[Profiler.ScriptTypeProfile]: profiler.md#profilerscripttypeprofile
[Debugger.Location]: profiler.md#debuggerlocation