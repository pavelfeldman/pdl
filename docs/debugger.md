
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