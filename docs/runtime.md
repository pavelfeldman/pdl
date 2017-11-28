
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
-  `type` <[string]> Object type
- *optional* `subtype` <[string]> Object subtype hint. Specified for `object` type values only
- *optional* `className` <[string]> Object class (constructor) name. Specified for `object` type values only
- *optional* `value` <[any]> Remote object value in case of primitive values or JSON values (if it was requested)
- *optional* `unserializableValue` <[Runtime.UnserializableValue]> Primitive value which can not be JSON-stringified does not have `value`, but gets this
property
- *optional* `description` <[string]> String representation of the object
- *optional* `objectId` <[Runtime.RemoteObjectId]> Unique object identifier (for non-primitive values)
- *optional* `preview` <[Runtime.ObjectPreview]> 🌱 Preview containing abbreviated property values. Specified for `object` type values only
- *optional* `customPreview` <[Runtime.CustomPreview]> 🌱 


#### type: Runtime.CustomPreview = object

*properties*
-  `header` <[string]> 
-  `hasBody` <[boolean]> 
-  `formatterObjectId` <[Runtime.RemoteObjectId]> 
-  `bindRemoteObjectFunctionId` <[Runtime.RemoteObjectId]> 
- *optional* `configObjectId` <[Runtime.RemoteObjectId]> 


#### type: Runtime.ObjectPreview = object

Object containing abbreviated remote object value.

*properties*
-  `type` <[string]> Object type
- *optional* `subtype` <[string]> Object subtype hint. Specified for `object` type values only
- *optional* `description` <[string]> String representation of the object
-  `overflow` <[boolean]> True iff some of the properties or entries of the original object did not fit
-  `properties` <array of [Runtime.PropertyPreview]> List of the properties
- *optional* `entries` <array of [Runtime.EntryPreview]> List of the entries. Specified for `map` and `set` subtype values only


#### type: Runtime.PropertyPreview = object

*properties*
-  `name` <[string]> Property name
-  `type` <[string]> Object type. Accessor means that the property itself is an accessor property
- *optional* `value` <[string]> User-friendly property value string
- *optional* `valuePreview` <[Runtime.ObjectPreview]> Nested value preview
- *optional* `subtype` <[string]> Object subtype hint. Specified for `object` type values only


#### type: Runtime.EntryPreview = object

*properties*
- *optional* `key` <[Runtime.ObjectPreview]> Preview of the key. Specified for map-like collection entries
-  `value` <[Runtime.ObjectPreview]> Preview of the value


#### type: Runtime.PropertyDescriptor = object

Object property descriptor.

*properties*
-  `name` <[string]> Property name or symbol description
- *optional* `value` <[Runtime.RemoteObject]> The value associated with the property
- *optional* `writable` <[boolean]> True if the value associated with the property may be changed (data descriptors only)
- *optional* `get` <[Runtime.RemoteObject]> A function which serves as a getter for the property, or `undefined` if there is no getter
(accessor descriptors only)
- *optional* `set` <[Runtime.RemoteObject]> A function which serves as a setter for the property, or `undefined` if there is no setter
(accessor descriptors only)
-  `configurable` <[boolean]> True if the type of this property descriptor may be changed and if the property may be
deleted from the corresponding object
-  `enumerable` <[boolean]> True if this property shows up during enumeration of the properties on the corresponding
object
- *optional* `wasThrown` <[boolean]> True if the result was thrown during the evaluation
- *optional* `isOwn` <[boolean]> True if the property is owned for the object
- *optional* `symbol` <[Runtime.RemoteObject]> Property symbol object, if the property is of the `symbol` type


#### type: Runtime.InternalPropertyDescriptor = object

Object internal property descriptor. This property isn't normally visible in JavaScript code.

*properties*
-  `name` <[string]> Conventional property name
- *optional* `value` <[Runtime.RemoteObject]> The value associated with the property


#### type: Runtime.CallArgument = object

Represents function call argument. Either remote object id `objectId`, primitive `value`,
unserializable primitive value or neither of (for undefined) them should be specified.

*properties*
- *optional* `value` <[any]> Primitive value or serializable javascript object
- *optional* `unserializableValue` <[Runtime.UnserializableValue]> Primitive value which can not be JSON-stringified
- *optional* `objectId` <[Runtime.RemoteObjectId]> Remote object handle


#### type: Runtime.ExecutionContextId = integer

Id of an execution context.


#### type: Runtime.ExecutionContextDescription = object

Description of an isolated world.

*properties*
-  `id` <[Runtime.ExecutionContextId]> Unique id of the execution context. It can be used to specify in which execution context
script evaluation should be performed
-  `origin` <[string]> Execution context origin
-  `name` <[string]> Human readable name describing given context
- *optional* `auxData` <[object]> Embedder-specific auxiliary data


#### type: Runtime.ExceptionDetails = object

Detailed information about exception (or error) that was thrown during script compilation or
execution.

*properties*
-  `exceptionId` <[integer]> Exception id
-  `text` <[string]> Exception text, which should be used together with exception object when available
-  `lineNumber` <[integer]> Line number of the exception location (0-based)
-  `columnNumber` <[integer]> Column number of the exception location (0-based)
- *optional* `scriptId` <[Runtime.ScriptId]> Script ID of the exception location
- *optional* `url` <[string]> URL of the exception location, to be used when the script was not reported
- *optional* `stackTrace` <[Runtime.StackTrace]> JavaScript stack trace if available
- *optional* `exception` <[Runtime.RemoteObject]> Exception object if available
- *optional* `executionContextId` <[Runtime.ExecutionContextId]> Identifier of the context where exception happened


#### type: Runtime.Timestamp = number

Number of milliseconds since epoch.


#### type: Runtime.CallFrame = object

Stack entry for runtime errors and assertions.

*properties*
-  `functionName` <[string]> JavaScript function name
-  `scriptId` <[Runtime.ScriptId]> JavaScript script id
-  `url` <[string]> JavaScript script name or url
-  `lineNumber` <[integer]> JavaScript script line number (0-based)
-  `columnNumber` <[integer]> JavaScript script column number (0-based)


#### type: Runtime.StackTrace = object

Call frames for assertions or error messages.

*properties*
- *optional* `description` <[string]> String label of this stack trace. For async traces this may be a name of the function that
initiated the async call
-  `callFrames` <array of [Runtime.CallFrame]> JavaScript function name
- *optional* `parent` <[Runtime.StackTrace]> Asynchronous JavaScript stack trace that preceded this stack, if available
- *optional* `parentId` <[Runtime.StackTraceId]> 🌱 Asynchronous JavaScript stack trace that preceded this stack, if available


#### type: Runtime.UniqueDebuggerId = string

Unique identifier of current debugger.


#### type: Runtime.StackTraceId = object

If `debuggerId` is set stack trace comes from another debugger and can be resolved there. This
allows to track cross-debugger calls. See `Runtime.StackTrace` and `Debugger.paused` for usages.

*properties*
-  `id` <[string]> 
- *optional* `debuggerId` <[Runtime.UniqueDebuggerId]> 


#### command: Runtime.awaitPromise()

Add handler to promise with given promise object id.

*parameters*
-  `promiseObjectId` <[Runtime.RemoteObjectId]> Identifier of the promise
- *optional* `returnByValue` <[boolean]> Whether the result is expected to be a JSON object that should be sent by value
- *optional* `generatePreview` <[boolean]> Whether preview should be generated for the result

*returns*
-  `result` <[Runtime.RemoteObject]> Promise result. Will contain rejected value if promise was rejected
- *optional* `exceptionDetails` <[Runtime.ExceptionDetails]> Exception details if stack strace is available


#### command: Runtime.callFunctionOn()

Calls function with given declaration on the given object. Object group of the result is
inherited from the target object.

*parameters*
-  `functionDeclaration` <[string]> Declaration of the function to call
- *optional* `objectId` <[Runtime.RemoteObjectId]> Identifier of the object to call function on. Either objectId or executionContextId should
be specified
- *optional* `arguments` <array of [Runtime.CallArgument]> Call arguments. All call arguments must belong to the same JavaScript world as the target
object
- *optional* `silent` <[boolean]> In silent mode exceptions thrown during evaluation are not reported and do not pause
execution. Overrides `setPauseOnException` state
- *optional* `returnByValue` <[boolean]> Whether the result is expected to be a JSON object which should be sent by value
- *optional* `generatePreview` <[boolean]> 🌱 Whether preview should be generated for the result
- *optional* `userGesture` <[boolean]> Whether execution should be treated as initiated by user in the UI
- *optional* `awaitPromise` <[boolean]> Whether execution should `await` for resulting value and return once awaited promise is
resolved
- *optional* `executionContextId` <[Runtime.ExecutionContextId]> Specifies execution context which global object will be used to call function on. Either
executionContextId or objectId should be specified
- *optional* `objectGroup` <[string]> Symbolic group name that can be used to release multiple objects. If objectGroup is not
specified and objectId is, objectGroup will be inherited from object

*returns*
-  `result` <[Runtime.RemoteObject]> Call result
- *optional* `exceptionDetails` <[Runtime.ExceptionDetails]> Exception details


#### command: Runtime.compileScript()

Compiles expression.

*parameters*
-  `expression` <[string]> Expression to compile
-  `sourceURL` <[string]> Source url to be set for the script
-  `persistScript` <[boolean]> Specifies whether the compiled script should be persisted
- *optional* `executionContextId` <[Runtime.ExecutionContextId]> Specifies in which execution context to perform script run. If the parameter is omitted the
evaluation will be performed in the context of the inspected page

*returns*
- *optional* `scriptId` <[Runtime.ScriptId]> Id of the script
- *optional* `exceptionDetails` <[Runtime.ExceptionDetails]> Exception details


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
-  `expression` <[string]> Expression to evaluate
- *optional* `objectGroup` <[string]> Symbolic group name that can be used to release multiple objects
- *optional* `includeCommandLineAPI` <[boolean]> Determines whether Command Line API should be available during the evaluation
- *optional* `silent` <[boolean]> In silent mode exceptions thrown during evaluation are not reported and do not pause
execution. Overrides `setPauseOnException` state
- *optional* `contextId` <[Runtime.ExecutionContextId]> Specifies in which execution context to perform evaluation. If the parameter is omitted the
evaluation will be performed in the context of the inspected page
- *optional* `returnByValue` <[boolean]> Whether the result is expected to be a JSON object that should be sent by value
- *optional* `generatePreview` <[boolean]> 🌱 Whether preview should be generated for the result
- *optional* `userGesture` <[boolean]> Whether execution should be treated as initiated by user in the UI
- *optional* `awaitPromise` <[boolean]> Whether execution should `await` for resulting value and return once awaited promise is
resolved

*returns*
-  `result` <[Runtime.RemoteObject]> Evaluation result
- *optional* `exceptionDetails` <[Runtime.ExceptionDetails]> Exception details


#### command: Runtime.getProperties()

Returns properties of a given object. Object group of the result is inherited from the target
object.

*parameters*
-  `objectId` <[Runtime.RemoteObjectId]> Identifier of the object to return properties for
- *optional* `ownProperties` <[boolean]> If true, returns properties belonging only to the element itself, not to its prototype
chain
- *optional* `accessorPropertiesOnly` <[boolean]> 🌱 If true, returns accessor properties (with getter/setter) only; internal properties are not
returned either
- *optional* `generatePreview` <[boolean]> 🌱 Whether preview should be generated for the results

*returns*
-  `result` <array of [Runtime.PropertyDescriptor]> Object properties
- *optional* `internalProperties` <array of [Runtime.InternalPropertyDescriptor]> Internal object properties (only of the element itself)
- *optional* `exceptionDetails` <[Runtime.ExceptionDetails]> Exception details


#### command: Runtime.globalLexicalScopeNames()

Returns all let, const and class variables from global scope.

*parameters*
- *optional* `executionContextId` <[Runtime.ExecutionContextId]> Specifies in which execution context to lookup global scope variables

*returns*
-  `names` <array of [string]> 


#### command: Runtime.queryObjects()

*parameters*
-  `prototypeObjectId` <[Runtime.RemoteObjectId]> Identifier of the prototype to return objects for

*returns*
-  `objects` <[Runtime.RemoteObject]> Array with objects


#### command: Runtime.releaseObject()

Releases remote object with given id.

*parameters*
-  `objectId` <[Runtime.RemoteObjectId]> Identifier of the object to release


#### command: Runtime.releaseObjectGroup()

Releases all remote objects that belong to a given group.

*parameters*
-  `objectGroup` <[string]> Symbolic object group name


#### command: Runtime.runIfWaitingForDebugger()

Tells inspected instance to run if it was waiting for debugger to attach.


#### command: Runtime.runScript()

Runs script with given id in a given context.

*parameters*
-  `scriptId` <[Runtime.ScriptId]> Id of the script to run
- *optional* `executionContextId` <[Runtime.ExecutionContextId]> Specifies in which execution context to perform script run. If the parameter is omitted the
evaluation will be performed in the context of the inspected page
- *optional* `objectGroup` <[string]> Symbolic group name that can be used to release multiple objects
- *optional* `silent` <[boolean]> In silent mode exceptions thrown during evaluation are not reported and do not pause
execution. Overrides `setPauseOnException` state
- *optional* `includeCommandLineAPI` <[boolean]> Determines whether Command Line API should be available during the evaluation
- *optional* `returnByValue` <[boolean]> Whether the result is expected to be a JSON object which should be sent by value
- *optional* `generatePreview` <[boolean]> Whether preview should be generated for the result
- *optional* `awaitPromise` <[boolean]> Whether execution should `await` for resulting value and return once awaited promise is
resolved

*returns*
-  `result` <[Runtime.RemoteObject]> Run result
- *optional* `exceptionDetails` <[Runtime.ExceptionDetails]> Exception details


#### command: Runtime.setCustomObjectFormatterEnabled() 🌱

*parameters*
-  `enabled` <[boolean]> 


#### event: Runtime.consoleAPICalled

Issued when console API was called.

*parameters*
-  `type` <[string]> Type of the call
-  `args` <array of [Runtime.RemoteObject]> Call arguments
-  `executionContextId` <[Runtime.ExecutionContextId]> Identifier of the context where the call was made
-  `timestamp` <[Runtime.Timestamp]> Call timestamp
- *optional* `stackTrace` <[Runtime.StackTrace]> Stack trace captured when the call was made
- *optional* `context` <[string]> 🌱 Console context descriptor for calls on non-default console context (not console.*):
'anonymous#unique-logger-id' for call on unnamed context, 'name#unique-logger-id' for call
on named context


#### event: Runtime.exceptionRevoked

Issued when unhandled exception was revoked.

*parameters*
-  `reason` <[string]> Reason describing why exception was revoked
-  `exceptionId` <[integer]> The id of revoked exception, as reported in `exceptionThrown`


#### event: Runtime.exceptionThrown

Issued when exception was thrown and unhandled.

*parameters*
-  `timestamp` <[Runtime.Timestamp]> Timestamp of the exception
-  `exceptionDetails` <[Runtime.ExceptionDetails]> 


#### event: Runtime.executionContextCreated

Issued when new execution context is created.

*parameters*
-  `context` <[Runtime.ExecutionContextDescription]> A newly created execution context


#### event: Runtime.executionContextDestroyed

Issued when execution context is destroyed.

*parameters*
-  `executionContextId` <[Runtime.ExecutionContextId]> Id of the destroyed context


#### event: Runtime.executionContextsCleared

Issued when all executionContexts were cleared in browser


#### event: Runtime.inspectRequested

Issued when object should be inspected (for example, as a result of inspect() command line API
call).

*parameters*
-  `object` <[Runtime.RemoteObject]> 
-  `hints` <[object]> 

[Runtime.UnserializableValue]: runtime.md#type-runtimeunserializablevalue--string "Runtime.UnserializableValue"
[Runtime.RemoteObjectId]: runtime.md#type-runtimeremoteobjectid--string "Runtime.RemoteObjectId"
[Runtime.ObjectPreview]: runtime.md#type-runtimeobjectpreview--object "Runtime.ObjectPreview"
[Runtime.CustomPreview]: runtime.md#type-runtimecustompreview--object "Runtime.CustomPreview"
[Runtime.PropertyPreview]: runtime.md#type-runtimepropertypreview--object "Runtime.PropertyPreview"
[Runtime.EntryPreview]: runtime.md#type-runtimeentrypreview--object "Runtime.EntryPreview"
[Runtime.RemoteObject]: runtime.md#type-runtimeremoteobject--object "Runtime.RemoteObject"
[Runtime.ExecutionContextId]: runtime.md#type-runtimeexecutioncontextid--integer "Runtime.ExecutionContextId"
[Runtime.ScriptId]: runtime.md#type-runtimescriptid--string "Runtime.ScriptId"
[Runtime.StackTrace]: runtime.md#type-runtimestacktrace--object "Runtime.StackTrace"
[Runtime.CallFrame]: runtime.md#type-runtimecallframe--object "Runtime.CallFrame"
[Runtime.StackTraceId]: runtime.md#type-runtimestacktraceid--object "Runtime.StackTraceId"
[Runtime.UniqueDebuggerId]: runtime.md#type-runtimeuniquedebuggerid--string "Runtime.UniqueDebuggerId"
[Runtime.ExceptionDetails]: runtime.md#type-runtimeexceptiondetails--object "Runtime.ExceptionDetails"
[Runtime.CallArgument]: runtime.md#type-runtimecallargument--object "Runtime.CallArgument"
[Runtime.PropertyDescriptor]: runtime.md#type-runtimepropertydescriptor--object "Runtime.PropertyDescriptor"
[Runtime.InternalPropertyDescriptor]: runtime.md#type-runtimeinternalpropertydescriptor--object "Runtime.InternalPropertyDescriptor"
[Runtime.Timestamp]: runtime.md#type-runtimetimestamp--number "Runtime.Timestamp"
[Runtime.ExecutionContextDescription]: runtime.md#type-runtimeexecutioncontextdescription--object "Runtime.ExecutionContextDescription"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"