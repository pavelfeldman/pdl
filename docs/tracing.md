
### domain: Tracing

#### type: Tracing.MemoryDumpConfig = object

Configuration for memory dump. Used only when "memory-infra" category is enabled.

#### type: Tracing.TraceConfig = object

*properties*
  - `recordMode` <string]> Controls how the trace buffer stores data
  - `enableSampling` <boolean]> Turns on JavaScript stack sampling
  - `enableSystrace` <boolean]> Turns on system tracing
  - `enableArgumentFilter` <boolean]> Turns on argument filter
  - `includedCategories` <array of string> Included category filters
  - `excludedCategories` <array of string> Excluded category filters
  - `syntheticDelays` <array of string> Configuration to synthesize the delays in tracing
  - `memoryDumpConfig` <[Tracing.MemoryDumpConfig]]> Configuration for memory dump triggers. Used only when "memory-infra" category is enabled

#### command: Tracing.end()

Stop trace events collection.

#### command: Tracing.getCategories()

Gets supported tracing categories.

*returns*
- `categories` <array of string> A list of supported tracing categories

#### command: Tracing.recordClockSyncMarker()

Record a clock sync marker in the trace.

*parameters*
- `syncId` <string]> The ID of this clock sync marker

#### command: Tracing.requestMemoryDump()

Request a global memory dump.

*returns*
- `dumpGuid` <string]> GUID of the resulting global memory dump
- `success` <boolean]> True iff the global memory dump succeeded

#### command: Tracing.start()

Start trace events collection.

*parameters*
- `categories` <string]> Category/tag filter
- `options` <string]> Tracing options
- `bufferUsageReportingInterval` <number]> If set, the agent will issue bufferUsage events at this interval, specified in milliseconds
- `transferMode` <string]> Whether to report trace events as series of dataCollected events or to save trace to a
stream (defaults to `ReportEvents`)
- `traceConfig` <[Tracing.TraceConfig]]> 

#### event: Tracing.bufferUsage

*returns*
- `percentFull` <number]> A number in range [0..1] that indicates the used size of event buffer as a fraction of its
total size
- `eventCount` <number]> An approximate number of events in the trace log
- `value` <number]> A number in range [0..1] that indicates the used size of event buffer as a fraction of its
total size

#### event: Tracing.dataCollected

Contains an bucket of collected trace events. When tracing is stopped collected events will be
send as a sequence of dataCollected events followed by tracingComplete event.

*returns*
- `value` <array of object> 

#### event: Tracing.tracingComplete

Signals that tracing is stopped and there is no trace buffers pending flush, all data were
delivered via dataCollected events.

*returns*
- `stream` <[IO.StreamHandle]]> A handle of the stream that holds resulting trace data

[Tracing.MemoryDumpConfig]: tracing.md#tracingmemorydumpconfig
[Tracing.TraceConfig]: tracing.md#tracingtraceconfig
[IO.StreamHandle]: tracing.md#iostreamhandle