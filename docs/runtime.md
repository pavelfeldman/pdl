
### domain: Runtime

Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects.
Evaluation results are returned as mirror object that expose object type, string representation
and unique identifier that can be used for further object reference. Original objects are
maintained in memory unless they are either explicitly released or are released along with the
other objects in their object group.

#### type: Runtime.ScriptId = string

Unique script identifier.

#### type: Runtime.RemoteObjectId = string

Unique object identifier.

#### type: Runtime.UnserializableValue = string

Primitive value which cannot be JSON-stringified.

#### type: Runtime.RemoteObject = object

Mirror object referencing original JavaScript object.

*properties*
  - `type` <string]> Object type
  - `subtype` <string]> Object subtype hint. Specified for `object` type values only
  - `className` <string]> Object class (constructor) name. Specified for `object` type values only
  - `value` <any]> Remote object value in case of primitive values or JSON values (if it was requested)
  - `unserializableValue` <[Runtime.UnserializableValue]]> Primitive value which can not be JSON-stringified does not have `value`, but gets this
property
  - `description` <string]> String representation of the object
  - `objectId` <[Runtime.RemoteObjectId]]> Unique object identifier (for non-primitive values)
  - `preview` <[Runtime.ObjectPreview]]> Preview containing abbreviated property values. Specified for `object` type values only
  - `customPreview` <[Runtime.CustomPreview]]> 

#### type: Runtime.CustomPreview = object

*properties*
  - `header` <string]> 
  - `hasBody` <boolean]> 
  - `formatterObjectId` <[Runtime.RemoteObjectId]]> 
  - `bindRemoteObjectFunctionId` <[Runtime.RemoteObjectId]]> 
  - `configObjectId` <[Runtime.RemoteObjectId]]> 

#### type: Runtime.ObjectPreview = object

Object containing abbreviated remote object value.

*properties*
  - `type` <string]> Object type
  - `subtype` <string]> Object subtype hint. Specified for `object` type values only
  - `description` <string]> String representation of the object
  - `overflow` <boolean]> True iff some of the properties or entries of the original object did not fit
  - `properties` <array of [Runtime.PropertyPreview]> List of the properties
  - `entries` <array of [Runtime.EntryPreview]> List of the entries. Specified for `map` and `set` subtype values only

#### type: Runtime.PropertyPreview = object

*properties*
  - `name` <string]> Property name
  - `type` <string]> Object type. Accessor means that the property itself is an accessor property
  - `value` <string]> User-friendly property value string
  - `valuePreview` <[Runtime.ObjectPreview]]> Nested value preview
  - `subtype` <string]> Object subtype hint. Specified for `object` type values only

#### type: Runtime.EntryPreview = object

*properties*
  - `key` <[Runtime.ObjectPreview]]> Preview of the key. Specified for map-like collection entries
  - `value` <[Runtime.ObjectPreview]]> Preview of the value

#### type: Runtime.PropertyDescriptor = object

Object property descriptor.

*properties*
  - `name` <string]> Property name or symbol description
  - `value` <[Runtime.RemoteObject]]> The value associated with the property
  - `writable` <boolean]> True if the value associated with the property may be changed (data descriptors only)
  - `get` <[Runtime.RemoteObject]]> A function which serves as a getter for the property, or `undefined` if there is no getter
(accessor descriptors only)
  - `set` <[Runtime.RemoteObject]]> A function which serves as a setter for the property, or `undefined` if there is no setter
(accessor descriptors only)
  - `configurable` <boolean]> True if the type of this property descriptor may be changed and if the property may be
deleted from the corresponding object
  - `enumerable` <boolean]> True if this property shows up during enumeration of the properties on the corresponding
object
  - `wasThrown` <boolean]> True if the result was thrown during the evaluation
  - `isOwn` <boolean]> True if the property is owned for the object
  - `symbol` <[Runtime.RemoteObject]]> Property symbol object, if the property is of the `symbol` type

#### type: Runtime.InternalPropertyDescriptor = object

Object internal property descriptor. This property isn't normally visible in JavaScript code.

*properties*
  - `name` <string]> Conventional property name
  - `value` <[Runtime.RemoteObject]]> The value associated with the property

#### type: Runtime.CallArgument = object

Represents function call argument. Either remote object id `objectId`, primitive `value`,
unserializable primitive value or neither of (for undefined) them should be specified.

*properties*
  - `value` <any]> Primitive value or serializable javascript object
  - `unserializableValue` <[Runtime.UnserializableValue]]> Primitive value which can not be JSON-stringified
  - `objectId` <[Runtime.RemoteObjectId]]> Remote object handle

#### type: Runtime.ExecutionContextId = integer

Id of an execution context.

#### type: Runtime.ExecutionContextDescription = object

Description of an isolated world.

*properties*
  - `id` <[Runtime.ExecutionContextId]]> Unique id of the execution context. It can be used to specify in which execution context
script evaluation should be performed
  - `origin` <string]> Execution context origin
  - `name` <string]> Human readable name describing given context
  - `auxData` <object]> Embedder-specific auxiliary data

#### type: Runtime.ExceptionDetails = object

Detailed information about exception (or error) that was thrown during script compilation or
execution.

*properties*
  - `exceptionId` <integer]> Exception id
  - `text` <string]> Exception text, which should be used together with exception object when available
  - `lineNumber` <integer]> Line number of the exception location (0-based)
  - `columnNumber` <integer]> Column number of the exception location (0-based)
  - `scriptId` <[Runtime.ScriptId]]> Script ID of the exception location
  - `url` <string]> URL of the exception location, to be used when the script was not reported
  - `stackTrace` <[Runtime.StackTrace]]> JavaScript stack trace if available
  - `exception` <[Runtime.RemoteObject]]> Exception object if available
  - `executionContextId` <[Runtime.ExecutionContextId]]> Identifier of the context where exception happened

#### type: Runtime.Timestamp = number

Number of milliseconds since epoch.

#### type: Runtime.CallFrame = object

Stack entry for runtime errors and assertions.

*properties*
  - `functionName` <string]> JavaScript function name
  - `scriptId` <[Runtime.ScriptId]]> JavaScript script id
  - `url` <string]> JavaScript script name or url
  - `lineNumber` <integer]> JavaScript script line number (0-based)
  - `columnNumber` <integer]> JavaScript script column number (0-based)

#### type: Runtime.StackTrace = object

Call frames for assertions or error messages.

*properties*
  - `description` <string]> String label of this stack trace. For async traces this may be a name of the function that
initiated the async call
  - `callFrames` <array of [Runtime.CallFrame]> JavaScript function name
  - `parent` <[Runtime.StackTrace]]> Asynchronous JavaScript stack trace that preceded this stack, if available
  - `parentId` <[Runtime.StackTraceId]]> Asynchronous JavaScript stack trace that preceded this stack, if available

#### type: Runtime.UniqueDebuggerId = string

Unique identifier of current debugger.

#### type: Runtime.StackTraceId = object

If `debuggerId` is set stack trace comes from another debugger and can be resolved there. This
allows to track cross-debugger calls. See `Runtime.StackTrace` and `Debugger.paused` for usages.

*properties*
  - `id` <string]> 
  - `debuggerId` <[Runtime.UniqueDebuggerId]]> 

#### command: Runtime.awaitPromise()

Add handler to promise with given promise object id.

*parameters*
- `promiseObjectId` <[Runtime.RemoteObjectId]]> Identifier of the promise
- `returnByValue` <boolean]> Whether the result is expected to be a JSON object that should be sent by value
- `generatePreview` <boolean]> Whether preview should be generated for the result

*returns*
- `result` <[Runtime.RemoteObject]]> Promise result. Will contain rejected value if promise was rejected
- `exceptionDetails` <[Runtime.ExceptionDetails]]> Exception details if stack strace is available

#### command: Runtime.callFunctionOn()

Calls function with given declaration on the given object. Object group of the result is
inherited from the target object.

*parameters*
- `functionDeclaration` <string]> Declaration of the function to call
- `objectId` <[Runtime.RemoteObjectId]]> Identifier of the object to call function on. Either objectId or executionContextId should
be specified
- `arguments` <array of [Runtime.CallArgument]> Call arguments. All call arguments must belong to the same JavaScript world as the target
object
- `silent` <boolean]> In silent mode exceptions thrown during evaluation are not reported and do not pause
execution. Overrides `setPauseOnException` state
- `returnByValue` <boolean]> Whether the result is expected to be a JSON object which should be sent by value
- `generatePreview` <boolean]> Whether preview should be generated for the result
- `userGesture` <boolean]> Whether execution should be treated as initiated by user in the UI
- `awaitPromise` <boolean]> Whether execution should `await` for resulting value and return once awaited promise is
resolved
- `executionContextId` <[Runtime.ExecutionContextId]]> Specifies execution context which global object will be used to call function on. Either
executionContextId or objectId should be specified
- `objectGroup` <string]> Symbolic group name that can be used to release multiple objects. If objectGroup is not
specified and objectId is, objectGroup will be inherited from object

*returns*
- `result` <[Runtime.RemoteObject]]> Call result
- `exceptionDetails` <[Runtime.ExceptionDetails]]> Exception details

#### command: Runtime.compileScript()

Compiles expression.

*parameters*
- `expression` <string]> Expression to compile
- `sourceURL` <string]> Source url to be set for the script
- `persistScript` <boolean]> Specifies whether the compiled script should be persisted
- `executionContextId` <[Runtime.ExecutionContextId]]> Specifies in which execution context to perform script run. If the parameter is omitted the
evaluation will be performed in the context of the inspected page

*returns*
- `scriptId` <[Runtime.ScriptId]]> Id of the script
- `exceptionDetails` <[Runtime.ExceptionDetails]]> Exception details

#### command: Runtime.disable()

Disables reporting of execution contexts creation.

#### command: Runtime.discardConsoleEntries()

Discards collected exceptions and console API calls.

#### command: Runtime.enable()

Enables reporting of execution contexts creation by means of `executionContextCreated` event.
When the reporting gets enabled the event will be sent immediately for each existing execution
context.

#### command: Runtime.evaluate()

Evaluates expression on global object.

*parameters*
- `expression` <string]> Expression to evaluate
- `objectGroup` <string]> Symbolic group name that can be used to release multiple objects
- `includeCommandLineAPI` <boolean]> Determines whether Command Line API should be available during the evaluation
- `silent` <boolean]> In silent mode exceptions thrown during evaluation are not reported and do not pause
execution. Overrides `setPauseOnException` state
- `contextId` <[Runtime.ExecutionContextId]]> Specifies in which execution context to perform evaluation. If the parameter is omitted the
evaluation will be performed in the context of the inspected page
- `returnByValue` <boolean]> Whether the result is expected to be a JSON object that should be sent by value
- `generatePreview` <boolean]> Whether preview should be generated for the result
- `userGesture` <boolean]> Whether execution should be treated as initiated by user in the UI
- `awaitPromise` <boolean]> Whether execution should `await` for resulting value and return once awaited promise is
resolved

*returns*
- `result` <[Runtime.RemoteObject]]> Evaluation result
- `exceptionDetails` <[Runtime.ExceptionDetails]]> Exception details

#### command: Runtime.getProperties()

Returns properties of a given object. Object group of the result is inherited from the target
object.

*parameters*
- `objectId` <[Runtime.RemoteObjectId]]> Identifier of the object to return properties for
- `ownProperties` <boolean]> If true, returns properties belonging only to the element itself, not to its prototype
chain
- `accessorPropertiesOnly` <boolean]> If true, returns accessor properties (with getter/setter) only; internal properties are not
returned either
- `generatePreview` <boolean]> Whether preview should be generated for the results

*returns*
- `result` <array of [Runtime.PropertyDescriptor]> Object properties
- `internalProperties` <array of [Runtime.InternalPropertyDescriptor]> Internal object properties (only of the element itself)
- `exceptionDetails` <[Runtime.ExceptionDetails]]> Exception details

#### command: Runtime.globalLexicalScopeNames()

Returns all let, const and class variables from global scope.

*parameters*
- `executionContextId` <[Runtime.ExecutionContextId]]> Specifies in which execution context to lookup global scope variables

*returns*
- `names` <array of string> 

#### command: Runtime.queryObjects()

*parameters*
- `prototypeObjectId` <[Runtime.RemoteObjectId]]> Identifier of the prototype to return objects for

*returns*
- `objects` <[Runtime.RemoteObject]]> Array with objects

#### command: Runtime.releaseObject()

Releases remote object with given id.

*parameters*
- `objectId` <[Runtime.RemoteObjectId]]> Identifier of the object to release

#### command: Runtime.releaseObjectGroup()

Releases all remote objects that belong to a given group.

*parameters*
- `objectGroup` <string]> Symbolic object group name

#### command: Runtime.runIfWaitingForDebugger()

Tells inspected instance to run if it was waiting for debugger to attach.

#### command: Runtime.runScript()

Runs script with given id in a given context.

*parameters*
- `scriptId` <[Runtime.ScriptId]]> Id of the script to run
- `executionContextId` <[Runtime.ExecutionContextId]]> Specifies in which execution context to perform script run. If the parameter is omitted the
evaluation will be performed in the context of the inspected page
- `objectGroup` <string]> Symbolic group name that can be used to release multiple objects
- `silent` <boolean]> In silent mode exceptions thrown during evaluation are not reported and do not pause
execution. Overrides `setPauseOnException` state
- `includeCommandLineAPI` <boolean]> Determines whether Command Line API should be available during the evaluation
- `returnByValue` <boolean]> Whether the result is expected to be a JSON object which should be sent by value
- `generatePreview` <boolean]> Whether preview should be generated for the result
- `awaitPromise` <boolean]> Whether execution should `await` for resulting value and return once awaited promise is
resolved

*returns*
- `result` <[Runtime.RemoteObject]]> Run result
- `exceptionDetails` <[Runtime.ExceptionDetails]]> Exception details

#### command: Runtime.setCustomObjectFormatterEnabled()

*parameters*
- `enabled` <boolean]> 

#### event: Runtime.consoleAPICalled

Issued when console API was called.

*returns*
- `type` <string]> Type of the call
- `args` <array of [Runtime.RemoteObject]> Call arguments
- `executionContextId` <[Runtime.ExecutionContextId]]> Identifier of the context where the call was made
- `timestamp` <[Runtime.Timestamp]]> Call timestamp
- `stackTrace` <[Runtime.StackTrace]]> Stack trace captured when the call was made
- `context` <string]> Console context descriptor for calls on non-default console context (not console.*):
'anonymous#unique-logger-id' for call on unnamed context, 'name#unique-logger-id' for call
on named context

#### event: Runtime.exceptionRevoked

Issued when unhandled exception was revoked.

*returns*
- `reason` <string]> Reason describing why exception was revoked
- `exceptionId` <integer]> The id of revoked exception, as reported in `exceptionThrown`

#### event: Runtime.exceptionThrown

Issued when exception was thrown and unhandled.

*returns*
- `timestamp` <[Runtime.Timestamp]]> Timestamp of the exception
- `exceptionDetails` <[Runtime.ExceptionDetails]]> 

#### event: Runtime.executionContextCreated

Issued when new execution context is created.

*returns*
- `context` <[Runtime.ExecutionContextDescription]]> A newly created execution context

#### event: Runtime.executionContextDestroyed

Issued when execution context is destroyed.

*returns*
- `executionContextId` <[Runtime.ExecutionContextId]]> Id of the destroyed context

#### event: Runtime.executionContextsCleared

Issued when all executionContexts were cleared in browser

#### event: Runtime.inspectRequested

Issued when object should be inspected (for example, as a result of inspect() command line API
call).

*returns*
- `object` <[Runtime.RemoteObject]]> 
- `hints` <object]> 

[Runtime.UnserializableValue]: runtime.md#runtimeunserializablevalue
[Runtime.RemoteObjectId]: runtime.md#runtimeremoteobjectid
[Runtime.ObjectPreview]: runtime.md#runtimeobjectpreview
[Runtime.CustomPreview]: runtime.md#runtimecustompreview
[Runtime.PropertyPreview]: runtime.md#runtimepropertypreview
[Runtime.EntryPreview]: runtime.md#runtimeentrypreview
[Runtime.RemoteObject]: runtime.md#runtimeremoteobject
[Runtime.ExecutionContextId]: runtime.md#runtimeexecutioncontextid
[Runtime.ScriptId]: runtime.md#runtimescriptid
[Runtime.StackTrace]: runtime.md#runtimestacktrace
[Runtime.CallFrame]: runtime.md#runtimecallframe
[Runtime.StackTraceId]: runtime.md#runtimestacktraceid
[Runtime.UniqueDebuggerId]: runtime.md#runtimeuniquedebuggerid
[Runtime.ExceptionDetails]: runtime.md#runtimeexceptiondetails
[Runtime.CallArgument]: runtime.md#runtimecallargument
[Runtime.PropertyDescriptor]: runtime.md#runtimepropertydescriptor
[Runtime.InternalPropertyDescriptor]: runtime.md#runtimeinternalpropertydescriptor
[Runtime.Timestamp]: runtime.md#runtimetimestamp
[Runtime.ExecutionContextDescription]: runtime.md#runtimeexecutioncontextdescription