
### domain: Performance

#### type: Performance.Metric = object

Run-time execution metric.

*properties*
  - `name` <string]> Metric name
  - `value` <number]> Metric value

#### command: Performance.disable()

Disable collecting and reporting metrics.

#### command: Performance.enable()

Enable collecting and reporting metrics.

#### command: Performance.getMetrics()

Retrieve current values of run-time metrics.

*returns*
- `metrics` <array of [Performance.Metric]> Current values for run-time metrics

#### event: Performance.metrics

Current values of the metrics.

*returns*
- `metrics` <array of [Performance.Metric]> Current values of the metrics
- `title` <string]> Timestamp title

[Performance.Metric]: performance.md#performancemetric