
### domain: Console

This domain is deprecated - use Runtime or Log instead.

#### Console.clearMessages()

Does nothing.

#### Console.disable()

Disables console domain, prevents further console messages from being reported to the client.

#### Console.enable()

Enables console domain, sends the messages collected so far to the client by means of the
`messageAdded` notification.

#### event: Console.messageAdded
- `message` <ConsoleMessage> Console message that has been added

Issued when new console message is added.

---

### domain: Debugger

Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing
breakpoints, stepping through execution, exploring stack traces, etc.

#### Debugger.continueToLocation()
- parameters
  - `location` <Location> Location to continue to
  - `targetCallFrames` <[string]> 

Continues execution until specific location is reached.

#### Debugger.disable()

Disables debugger for given page.

#### Debugger.enable()
- returns
  - `debuggerId` <Runtime.UniqueDebuggerId> Unique identifier of the debugger

Enables debugger for the given page. Clients should not assume that the debugging has been
enabled until the result for this command is received.

#### Debugger.evaluateOnCallFrame()
- parameters
  - `callFrameId` <CallFrameId> Call frame identifier to evaluate on
  - `expression` <[string]> Expression to evaluate
  - `objectGroup` <[string]> String object group name to put result into (allows rapid releasing resulting object handles
using `releaseObjectGroup`)
  - `includeCommandLineAPI` <[boolean]> Specifies whether command line API should be available to the evaluated expression, defaults
to false
  - `silent` <[boolean]> In silent mode exceptions thrown during evaluation are not reported and do not pause
execution. Overrides `setPauseOnException` state
  - `returnByValue` <[boolean]> Whether the result is expected to be a JSON object that should be sent by value
  - `generatePreview` <[boolean]> Whether preview should be generated for the result
  - `throwOnSideEffect` <[boolean]> Whether to throw an exception if side effect cannot be ruled out during evaluation
- returns
  - `result` <Runtime.RemoteObject> Object wrapper for the evaluation result
  - `exceptionDetails` <Runtime.ExceptionDetails> Exception details

Evaluates expression on a given call frame.

#### Debugger.getPossibleBreakpoints()
- parameters
  - `start` <Location> Start of range to search possible breakpoint locations in
  - `end` <Location> End of range to search possible breakpoint locations in (excluding). When not specified, end
of scripts is used as end of range
  - `restrictToFunction` <[boolean]> Only consider locations which are in the same (non-nested) function as start
- returns
  - `locations` array of <BreakLocation> List of the possible breakpoint locations

Returns possible locations for breakpoint. scriptId in start and end range locations should be
the same.

#### Debugger.getScriptSource()
- parameters
  - `scriptId` <Runtime.ScriptId> Id of the script to get source for
- returns
  - `scriptSource` <[string]> Script source

Returns source for the script with given id.

#### Debugger.getStackTrace()
- parameters
  - `stackTraceId` <Runtime.StackTraceId> 
- returns
  - `stackTrace` <Runtime.StackTrace> 

Returns stack trace with given `stackTraceId`.

#### Debugger.pause()

Stops on the next JavaScript statement.

#### Debugger.pauseOnAsyncCall()
- parameters
  - `parentStackTraceId` <Runtime.StackTraceId> Debugger will pause when async call with given stack trace is started

#### Debugger.removeBreakpoint()
- parameters
  - `breakpointId` <BreakpointId> 

Removes JavaScript breakpoint.

#### Debugger.restartFrame()
- parameters
  - `callFrameId` <CallFrameId> Call frame identifier to evaluate on
- returns
  - `callFrames` array of <CallFrame> New stack trace
  - `asyncStackTrace` <Runtime.StackTrace> Async stack trace, if any
  - `asyncStackTraceId` <Runtime.StackTraceId> Async stack trace, if any

Restarts particular call frame from the beginning.

#### Debugger.resume()

Resumes JavaScript execution.

#### Debugger.scheduleStepIntoAsync()

This method is deprecated - use Debugger.stepInto with breakOnAsyncCall and
Debugger.pauseOnAsyncTask instead. Steps into next scheduled async task if any is scheduled
before next pause. Returns success when async task is actually scheduled, returns error if no
task were scheduled or another scheduleStepIntoAsync was called.

#### Debugger.searchInContent()
- parameters
  - `scriptId` <Runtime.ScriptId> Id of the script to search in
  - `query` <[string]> String to search for
  - `caseSensitive` <[boolean]> If true, search is case sensitive
  - `isRegex` <[boolean]> If true, treats string parameter as regex
- returns
  - `result` array of <SearchMatch> List of search matches

Searches for given string in script content.

#### Debugger.setAsyncCallStackDepth()
- parameters
  - `maxDepth` <[integer]> Maximum depth of async call stacks. Setting to `0` will effectively disable collecting async
call stacks (default)

Enables or disables async call stacks tracking.

#### Debugger.setBlackboxPatterns()
- parameters
  - `patterns` array of <[string]> Array of regexps that will be used to check script url for blackbox state

Replace previous blackbox patterns with passed ones. Forces backend to skip stepping/pausing in
scripts with url matching one of the patterns. VM will try to leave blackboxed script by
performing 'step in' several times, finally resorting to 'step out' if unsuccessful.

#### Debugger.setBlackboxedRanges()
- parameters
  - `scriptId` <Runtime.ScriptId> Id of the script
  - `positions` array of <ScriptPosition> 

Makes backend skip steps in the script in blackboxed ranges. VM will try leave blacklisted
scripts by performing 'step in' several times, finally resorting to 'step out' if unsuccessful.
Positions array contains positions where blackbox state is changed. First interval isn't
blackboxed. Array should be sorted.

#### Debugger.setBreakpoint()
- parameters
  - `location` <Location> Location to set breakpoint in
  - `condition` <[string]> Expression to use as a breakpoint condition. When specified, debugger will only stop on the
breakpoint if this expression evaluates to true
- returns
  - `breakpointId` <BreakpointId> Id of the created breakpoint for further reference
  - `actualLocation` <Location> Location this breakpoint resolved into

Sets JavaScript breakpoint at a given location.

#### Debugger.setBreakpointByUrl()
- parameters
  - `lineNumber` <[integer]> Line number to set breakpoint at
  - `url` <[string]> URL of the resources to set breakpoint on
  - `urlRegex` <[string]> Regex pattern for the URLs of the resources to set breakpoints on. Either `url` or
`urlRegex` must be specified
  - `scriptHash` <[string]> Script hash of the resources to set breakpoint on
  - `columnNumber` <[integer]> Offset in the line to set breakpoint at
  - `condition` <[string]> Expression to use as a breakpoint condition. When specified, debugger will only stop on the
breakpoint if this expression evaluates to true
- returns
  - `breakpointId` <BreakpointId> Id of the created breakpoint for further reference
  - `locations` array of <Location> List of the locations this breakpoint resolved into upon addition

Sets JavaScript breakpoint at given location specified either by URL or URL regex. Once this
command is issued, all existing parsed scripts will have breakpoints resolved and returned in
`locations` property. Further matching script parsing will result in subsequent
`breakpointResolved` events issued. This logical breakpoint will survive page reloads.

#### Debugger.setBreakpointsActive()
- parameters
  - `active` <[boolean]> New value for breakpoints active state

Activates / deactivates all breakpoints on the page.

#### Debugger.setPauseOnExceptions()
- parameters
  - `state` <[string]> Pause on exceptions mode

Defines pause on exceptions state. Can be set to stop on all exceptions, uncaught exceptions or
no exceptions. Initial pause on exceptions state is `none`.

#### Debugger.setReturnValue()
- parameters
  - `newValue` <Runtime.CallArgument> New return value

Changes return value in top frame. Available only at return break position.

#### Debugger.setScriptSource()
- parameters
  - `scriptId` <Runtime.ScriptId> Id of the script to edit
  - `scriptSource` <[string]> New content of the script
  - `dryRun` <[boolean]> If true the change will not actually be applied. Dry run may be used to get result
description without actually modifying the code
- returns
  - `callFrames` array of <CallFrame> New stack trace in case editing has happened while VM was stopped
  - `stackChanged` <[boolean]> Whether current call stack  was modified after applying the changes
  - `asyncStackTrace` <Runtime.StackTrace> Async stack trace, if any
  - `asyncStackTraceId` <Runtime.StackTraceId> Async stack trace, if any
  - `exceptionDetails` <Runtime.ExceptionDetails> Exception details if any

Edits JavaScript source live.

#### Debugger.setSkipAllPauses()
- parameters
  - `skip` <[boolean]> New value for skip pauses state

Makes page not interrupt on any pauses (breakpoint, exception, dom exception etc).

#### Debugger.setVariableValue()
- parameters
  - `scopeNumber` <[integer]> 0-based number of scope as was listed in scope chain. Only 'local', 'closure' and 'catch'
scope types are allowed. Other scopes could be manipulated manually
  - `variableName` <[string]> Variable name
  - `newValue` <Runtime.CallArgument> New variable value
  - `callFrameId` <CallFrameId> Id of callframe that holds variable

Changes value of variable in a callframe. Object-based scopes are not supported and must be
mutated manually.

#### Debugger.stepInto()
- parameters
  - `breakOnAsyncCall` <[boolean]> Debugger will issue additional Debugger.paused notification if any async task is scheduled
before next pause

Steps into the function call.

#### Debugger.stepOut()

Steps out of the function call.

#### Debugger.stepOver()

Steps over the statement.

#### event: Debugger.breakpointResolved
- `breakpointId` <BreakpointId> Breakpoint unique identifier
- `location` <Location> Actual breakpoint location

Fired when breakpoint is resolved to an actual script and location.

#### event: Debugger.paused
- `callFrames` array of <CallFrame> Call stack the virtual machine stopped on
- `reason` <[string]> Pause reason
- `data` <[object]> Object containing break-specific auxiliary properties
- `hitBreakpoints` array of <[string]> Hit breakpoints IDs
- `asyncStackTrace` <Runtime.StackTrace> Async stack trace, if any
- `asyncStackTraceId` <Runtime.StackTraceId> Async stack trace, if any
- `asyncCallStackTraceId` <Runtime.StackTraceId> Just scheduled async call will have this stack trace as parent stack during async execution.
This field is available only after `Debugger.stepInto` call with `breakOnAsynCall` flag

Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria.

#### event: Debugger.resumed

Fired when the virtual machine resumed execution.

#### event: Debugger.scriptFailedToParse
- `scriptId` <Runtime.ScriptId> Identifier of the script parsed
- `url` <[string]> URL or name of the script parsed (if any)
- `startLine` <[integer]> Line offset of the script within the resource with given URL (for script tags)
- `startColumn` <[integer]> Column offset of the script within the resource with given URL
- `endLine` <[integer]> Last line of the script
- `endColumn` <[integer]> Length of the last line of the script
- `executionContextId` <Runtime.ExecutionContextId> Specifies script creation context
- `hash` <[string]> Content hash of the script
- `executionContextAuxData` <[object]> Embedder-specific auxiliary data
- `sourceMapURL` <[string]> URL of source map associated with script (if any)
- `hasSourceURL` <[boolean]> True, if this script has sourceURL
- `isModule` <[boolean]> True, if this script is ES6 module
- `length` <[integer]> This script length
- `stackTrace` <Runtime.StackTrace> JavaScript top stack frame of where the script parsed event was triggered if available

Fired when virtual machine fails to parse the script.

#### event: Debugger.scriptParsed
- `scriptId` <Runtime.ScriptId> Identifier of the script parsed
- `url` <[string]> URL or name of the script parsed (if any)
- `startLine` <[integer]> Line offset of the script within the resource with given URL (for script tags)
- `startColumn` <[integer]> Column offset of the script within the resource with given URL
- `endLine` <[integer]> Last line of the script
- `endColumn` <[integer]> Length of the last line of the script
- `executionContextId` <Runtime.ExecutionContextId> Specifies script creation context
- `hash` <[string]> Content hash of the script
- `executionContextAuxData` <[object]> Embedder-specific auxiliary data
- `isLiveEdit` <[boolean]> True, if this script is generated as a result of the live edit operation
- `sourceMapURL` <[string]> URL of source map associated with script (if any)
- `hasSourceURL` <[boolean]> True, if this script has sourceURL
- `isModule` <[boolean]> True, if this script is ES6 module
- `length` <[integer]> This script length
- `stackTrace` <Runtime.StackTrace> JavaScript top stack frame of where the script parsed event was triggered if available

Fired when virtual machine parses script. This event is also fired for all known and uncollected
scripts upon enabling debugger.

---

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

---

### domain: Profiler

#### Profiler.disable()

#### Profiler.enable()

#### Profiler.getBestEffortCoverage()
- returns
  - `result` array of <ScriptCoverage> Coverage data for the current isolate

Collect coverage data for the current isolate. The coverage data may be incomplete due to
garbage collection.

#### Profiler.setSamplingInterval()
- parameters
  - `interval` <[integer]> New sampling interval in microseconds

Changes CPU profiler sampling interval. Must be called before CPU profiles recording started.

#### Profiler.start()

#### Profiler.startPreciseCoverage()
- parameters
  - `callCount` <[boolean]> Collect accurate call counts beyond simple 'covered' or 'not covered'
  - `detailed` <[boolean]> Collect block-based coverage

Enable precise code coverage. Coverage data for JavaScript executed before enabling precise code
coverage may be incomplete. Enabling prevents running optimized code and resets execution
counters.

#### Profiler.startTypeProfile()

Enable type profile.

#### Profiler.stop()
- returns
  - `profile` <Profile> Recorded profile

#### Profiler.stopPreciseCoverage()

Disable precise code coverage. Disabling releases unnecessary execution count records and allows
executing optimized code.

#### Profiler.stopTypeProfile()

Disable type profile. Disabling releases type profile data collected so far.

#### Profiler.takePreciseCoverage()
- returns
  - `result` array of <ScriptCoverage> Coverage data for the current isolate

Collect coverage data for the current isolate, and resets execution counters. Precise code
coverage needs to have started.

#### Profiler.takeTypeProfile()
- returns
  - `result` array of <ScriptTypeProfile> Type profile for all scripts since startTypeProfile() was turned on

Collect type profile.

#### event: Profiler.consoleProfileFinished
- `id` <[string]> 
- `location` <Debugger.Location> Location of console.profileEnd()
- `profile` <Profile> 
- `title` <[string]> Profile title passed as an argument to console.profile()

#### event: Profiler.consoleProfileStarted
- `id` <[string]> 
- `location` <Debugger.Location> Location of console.profile()
- `title` <[string]> Profile title passed as an argument to console.profile()

Sent when new profile recording is started using console.profile() call.

---

### domain: Runtime

Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects.
Evaluation results are returned as mirror object that expose object type, string representation
and unique identifier that can be used for further object reference. Original objects are
maintained in memory unless they are either explicitly released or are released along with the
other objects in their object group.

#### Runtime.awaitPromise()
- parameters
  - `promiseObjectId` <RemoteObjectId> Identifier of the promise
  - `returnByValue` <[boolean]> Whether the result is expected to be a JSON object that should be sent by value
  - `generatePreview` <[boolean]> Whether preview should be generated for the result
- returns
  - `result` <RemoteObject> Promise result. Will contain rejected value if promise was rejected
  - `exceptionDetails` <ExceptionDetails> Exception details if stack strace is available

Add handler to promise with given promise object id.

#### Runtime.callFunctionOn()
- parameters
  - `functionDeclaration` <[string]> Declaration of the function to call
  - `objectId` <RemoteObjectId> Identifier of the object to call function on. Either objectId or executionContextId should
be specified
  - `arguments` array of <CallArgument> Call arguments. All call arguments must belong to the same JavaScript world as the target
object
  - `silent` <[boolean]> In silent mode exceptions thrown during evaluation are not reported and do not pause
execution. Overrides `setPauseOnException` state
  - `returnByValue` <[boolean]> Whether the result is expected to be a JSON object which should be sent by value
  - `generatePreview` <[boolean]> Whether preview should be generated for the result
  - `userGesture` <[boolean]> Whether execution should be treated as initiated by user in the UI
  - `awaitPromise` <[boolean]> Whether execution should `await` for resulting value and return once awaited promise is
resolved
  - `executionContextId` <ExecutionContextId> Specifies execution context which global object will be used to call function on. Either
executionContextId or objectId should be specified
  - `objectGroup` <[string]> Symbolic group name that can be used to release multiple objects. If objectGroup is not
specified and objectId is, objectGroup will be inherited from object
- returns
  - `result` <RemoteObject> Call result
  - `exceptionDetails` <ExceptionDetails> Exception details

Calls function with given declaration on the given object. Object group of the result is
inherited from the target object.

#### Runtime.compileScript()
- parameters
  - `expression` <[string]> Expression to compile
  - `sourceURL` <[string]> Source url to be set for the script
  - `persistScript` <[boolean]> Specifies whether the compiled script should be persisted
  - `executionContextId` <ExecutionContextId> Specifies in which execution context to perform script run. If the parameter is omitted the
evaluation will be performed in the context of the inspected page
- returns
  - `scriptId` <ScriptId> Id of the script
  - `exceptionDetails` <ExceptionDetails> Exception details

Compiles expression.

#### Runtime.disable()

Disables reporting of execution contexts creation.

#### Runtime.discardConsoleEntries()

Discards collected exceptions and console API calls.

#### Runtime.enable()

Enables reporting of execution contexts creation by means of `executionContextCreated` event.
When the reporting gets enabled the event will be sent immediately for each existing execution
context.

#### Runtime.evaluate()
- parameters
  - `expression` <[string]> Expression to evaluate
  - `objectGroup` <[string]> Symbolic group name that can be used to release multiple objects
  - `includeCommandLineAPI` <[boolean]> Determines whether Command Line API should be available during the evaluation
  - `silent` <[boolean]> In silent mode exceptions thrown during evaluation are not reported and do not pause
execution. Overrides `setPauseOnException` state
  - `contextId` <ExecutionContextId> Specifies in which execution context to perform evaluation. If the parameter is omitted the
evaluation will be performed in the context of the inspected page
  - `returnByValue` <[boolean]> Whether the result is expected to be a JSON object that should be sent by value
  - `generatePreview` <[boolean]> Whether preview should be generated for the result
  - `userGesture` <[boolean]> Whether execution should be treated as initiated by user in the UI
  - `awaitPromise` <[boolean]> Whether execution should `await` for resulting value and return once awaited promise is
resolved
- returns
  - `result` <RemoteObject> Evaluation result
  - `exceptionDetails` <ExceptionDetails> Exception details

Evaluates expression on global object.

#### Runtime.getProperties()
- parameters
  - `objectId` <RemoteObjectId> Identifier of the object to return properties for
  - `ownProperties` <[boolean]> If true, returns properties belonging only to the element itself, not to its prototype
chain
  - `accessorPropertiesOnly` <[boolean]> If true, returns accessor properties (with getter/setter) only; internal properties are not
returned either
  - `generatePreview` <[boolean]> Whether preview should be generated for the results
- returns
  - `result` array of <PropertyDescriptor> Object properties
  - `internalProperties` array of <InternalPropertyDescriptor> Internal object properties (only of the element itself)
  - `exceptionDetails` <ExceptionDetails> Exception details

Returns properties of a given object. Object group of the result is inherited from the target
object.

#### Runtime.globalLexicalScopeNames()
- parameters
  - `executionContextId` <ExecutionContextId> Specifies in which execution context to lookup global scope variables
- returns
  - `names` array of <[string]> 

Returns all let, const and class variables from global scope.

#### Runtime.queryObjects()
- parameters
  - `prototypeObjectId` <RemoteObjectId> Identifier of the prototype to return objects for
- returns
  - `objects` <RemoteObject> Array with objects

#### Runtime.releaseObject()
- parameters
  - `objectId` <RemoteObjectId> Identifier of the object to release

Releases remote object with given id.

#### Runtime.releaseObjectGroup()
- parameters
  - `objectGroup` <[string]> Symbolic object group name

Releases all remote objects that belong to a given group.

#### Runtime.runIfWaitingForDebugger()

Tells inspected instance to run if it was waiting for debugger to attach.

#### Runtime.runScript()
- parameters
  - `scriptId` <ScriptId> Id of the script to run
  - `executionContextId` <ExecutionContextId> Specifies in which execution context to perform script run. If the parameter is omitted the
evaluation will be performed in the context of the inspected page
  - `objectGroup` <[string]> Symbolic group name that can be used to release multiple objects
  - `silent` <[boolean]> In silent mode exceptions thrown during evaluation are not reported and do not pause
execution. Overrides `setPauseOnException` state
  - `includeCommandLineAPI` <[boolean]> Determines whether Command Line API should be available during the evaluation
  - `returnByValue` <[boolean]> Whether the result is expected to be a JSON object which should be sent by value
  - `generatePreview` <[boolean]> Whether preview should be generated for the result
  - `awaitPromise` <[boolean]> Whether execution should `await` for resulting value and return once awaited promise is
resolved
- returns
  - `result` <RemoteObject> Run result
  - `exceptionDetails` <ExceptionDetails> Exception details

Runs script with given id in a given context.

#### Runtime.setCustomObjectFormatterEnabled()
- parameters
  - `enabled` <[boolean]> 

#### event: Runtime.consoleAPICalled
- `type` <[string]> Type of the call
- `args` array of <RemoteObject> Call arguments
- `executionContextId` <ExecutionContextId> Identifier of the context where the call was made
- `timestamp` <Timestamp> Call timestamp
- `stackTrace` <StackTrace> Stack trace captured when the call was made
- `context` <[string]> Console context descriptor for calls on non-default console context (not console.*):
'anonymous#unique-logger-id' for call on unnamed context, 'name#unique-logger-id' for call
on named context

Issued when console API was called.

#### event: Runtime.exceptionRevoked
- `reason` <[string]> Reason describing why exception was revoked
- `exceptionId` <[integer]> The id of revoked exception, as reported in `exceptionThrown`

Issued when unhandled exception was revoked.

#### event: Runtime.exceptionThrown
- `timestamp` <Timestamp> Timestamp of the exception
- `exceptionDetails` <ExceptionDetails> 

Issued when exception was thrown and unhandled.

#### event: Runtime.executionContextCreated
- `context` <ExecutionContextDescription> A newly created execution context

Issued when new execution context is created.

#### event: Runtime.executionContextDestroyed
- `executionContextId` <ExecutionContextId> Id of the destroyed context

Issued when execution context is destroyed.

#### event: Runtime.executionContextsCleared

Issued when all executionContexts were cleared in browser

#### event: Runtime.inspectRequested
- `object` <RemoteObject> 
- `hints` <[object]> 

Issued when object should be inspected (for example, as a result of inspect() command line API
call).

---

### domain: Schema

This domain is deprecated.

#### Schema.getDomains()
- returns
  - `domains` array of <Domain> List of supported domains

Returns supported domains.
