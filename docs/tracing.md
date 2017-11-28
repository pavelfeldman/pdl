
### domain: Tracing

#### Tracing.end()

Stop trace events collection.

#### Tracing.getCategories()
- returns
  - `categories` array of <[string]> A list of supported tracing categories

Gets supported tracing categories.

#### Tracing.recordClockSyncMarker()
- parameters
  - `syncId` <[string]> The ID of this clock sync marker

Record a clock sync marker in the trace.

#### Tracing.requestMemoryDump()
- returns
  - `dumpGuid` <[string]> GUID of the resulting global memory dump
  - `success` <[boolean]> True iff the global memory dump succeeded

Request a global memory dump.

#### Tracing.start()
- parameters
  - `categories` <[string]> Category/tag filter
  - `options` <[string]> Tracing options
  - `bufferUsageReportingInterval` <[number]> If set, the agent will issue bufferUsage events at this interval, specified in milliseconds
  - `transferMode` <[string]> Whether to report trace events as series of dataCollected events or to save trace to a
stream (defaults to `ReportEvents`)
  - `traceConfig` <TraceConfig> 

Start trace events collection.

#### event: Tracing.bufferUsage
- `percentFull` <[number]> A number in range [0..1] that indicates the used size of event buffer as a fraction of its
total size
- `eventCount` <[number]> An approximate number of events in the trace log
- `value` <[number]> A number in range [0..1] that indicates the used size of event buffer as a fraction of its
total size

#### event: Tracing.dataCollected
- `value` array of <[object]> 

Contains an bucket of collected trace events. When tracing is stopped collected events will be
send as a sequence of dataCollected events followed by tracingComplete event.

#### event: Tracing.tracingComplete
- `stream` <IO.StreamHandle> A handle of the stream that holds resulting trace data

Signals that tracing is stopped and there is no trace buffers pending flush, all data were
delivered via dataCollected events.