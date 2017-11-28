
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