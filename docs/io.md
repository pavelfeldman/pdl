
### domain: IO

Input/Output operations for streams produced by DevTools.

---


#### command: IO.close

Close the stream, discard any temporary backing storage.

*parameters*
-  `handle` <[IO.StreamHandle]> Handle of the stream to close

---


#### command: IO.read

Read a chunk of the stream

*parameters*
-  `handle` <[IO.StreamHandle]> Handle of the stream to read
- *optional* `offset` <[integer]> Seek to the specified offset before reading (if not specificed, proceed with offset
following the last read)
- *optional* `size` <[integer]> Maximum number of bytes to read (left upon the agent discretion if not specified)

*returns*
- *optional* `base64Encoded` <[boolean]> Set if the data is base64-encoded
-  `data` <[string]> Data that were read
-  `eof` <[boolean]> Set if the end-of-file condition occured while reading

---


#### command: IO.resolveBlob

Return UUID of Blob object specified by a remote object id.

*parameters*
-  `objectId` <[Runtime.RemoteObjectId]> Object id of a Blob object wrapper

*returns*
-  `uuid` <[string]> UUID of the specified Blob

---


#### type: IO.StreamHandle

This is either obtained from another method or specifed as `blob:&lt;uuid&gt;` where
`&lt;uuid&gt` is an UUID of a Blob.

*base type*
- **string**

*accepted by command*
- [IO.close]
- [IO.read]

*parameter in event*
- [Tracing.tracingComplete]

[IO.close]: io.md#command-ioclose "IO.close"
[IO.read]: io.md#command-ioread "IO.read"
[Tracing.tracingComplete]: tracing.md#event-tracingtracingcomplete "Tracing.tracingComplete"
[IO.StreamHandle]: io.md#type-iostreamhandle "IO.StreamHandle"
[IO.StreamHandle]: io.md#type-iostreamhandle "IO.StreamHandle"
[Runtime.RemoteObjectId]: runtime.md#type-runtimeremoteobjectid "Runtime.RemoteObjectId"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"