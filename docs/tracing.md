
### domain: Tracing 🌱

---


#### command: Tracing.end

Stop trace events collection.

---


#### command: Tracing.getCategories

Gets supported tracing categories.

*returns*
-  `categories` <array of [string]> A list of supported tracing categories

---


#### command: Tracing.recordClockSyncMarker

Record a clock sync marker in the trace.

*parameters*
-  `syncId` <[string]> The ID of this clock sync marker

---


#### command: Tracing.requestMemoryDump

Request a global memory dump.

*returns*
-  `dumpGuid` <[string]> GUID of the resulting global memory dump
-  `success` <[boolean]> True iff the global memory dump succeeded

---


#### command: Tracing.start

Start trace events collection.

*parameters*
- *optional* `categories` <[string]> 🍂 Category/tag filter
- *optional* `options` <[string]> 🍂 Tracing options
- *optional* `bufferUsageReportingInterval` <[number]> If set, the agent will issue bufferUsage events at this interval, specified in milliseconds
- *optional* `transferMode` <[string]> Whether to report trace events as series of dataCollected events or to save trace to a
stream (defaults to `ReportEvents`)
- *optional* `traceConfig` <[Tracing.TraceConfig]> 

---


#### event: Tracing.bufferUsage

*parameters*
- *optional* `percentFull` <[number]> A number in range [0..1] that indicates the used size of event buffer as a fraction of its
total size
- *optional* `eventCount` <[number]> An approximate number of events in the trace log
- *optional* `value` <[number]> A number in range [0..1] that indicates the used size of event buffer as a fraction of its
total size

---


#### event: Tracing.dataCollected

Contains an bucket of collected trace events. When tracing is stopped collected events will be
send as a sequence of dataCollected events followed by tracingComplete event.

*parameters*
-  `value` <array of [object]> 

---


#### event: Tracing.tracingComplete

Signals that tracing is stopped and there is no trace buffers pending flush, all data were
delivered via dataCollected events.

*parameters*
- *optional* `stream` <[IO.StreamHandle]> A handle of the stream that holds resulting trace data

---


#### type: Tracing.MemoryDumpConfig

Configuration for memory dump. Used only when "memory-infra" category is enabled.

*base type*
- **object**

*property of type*
- [Tracing.TraceConfig]

---


#### type: Tracing.TraceConfig

*base type*
- **object**

*properties*
- *optional* `recordMode` <[string]> Controls how the trace buffer stores data
- *optional* `enableSampling` <[boolean]> Turns on JavaScript stack sampling
- *optional* `enableSystrace` <[boolean]> Turns on system tracing
- *optional* `enableArgumentFilter` <[boolean]> Turns on argument filter
- *optional* `includedCategories` <array of [string]> Included category filters
- *optional* `excludedCategories` <array of [string]> Excluded category filters
- *optional* `syntheticDelays` <array of [string]> Configuration to synthesize the delays in tracing
- *optional* `memoryDumpConfig` <[Tracing.MemoryDumpConfig]> Configuration for memory dump triggers. Used only when "memory-infra" category is enabled

*accepted by command*
- [Tracing.start]

[Tracing.TraceConfig]: tracing.md#type-tracingtraceconfig "Tracing.TraceConfig"
[Tracing.start]: tracing.md#command-tracingstart "Tracing.start"
[Tracing.MemoryDumpConfig]: tracing.md#type-tracingmemorydumpconfig "Tracing.MemoryDumpConfig"
[Tracing.TraceConfig]: tracing.md#type-tracingtraceconfig "Tracing.TraceConfig"
[IO.StreamHandle]: io.md#type-iostreamhandle "IO.StreamHandle"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"