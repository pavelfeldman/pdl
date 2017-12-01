
### domain: Performance

---


#### command: Performance.disable

Disable collecting and reporting metrics.

---


#### command: Performance.enable

Enable collecting and reporting metrics.

---


#### command: Performance.getMetrics

Retrieve current values of run-time metrics.

*returns*
-  `metrics` <array of [Performance.Metric]> Current values for run-time metrics

---


#### event: Performance.metrics

Current values of the metrics.

*parameters*
-  `metrics` <array of [Performance.Metric]> Current values of the metrics
-  `title` <[string]> Timestamp title

---


#### type: Performance.Metric

Run-time execution metric.

*base type*
- **object**

*properties*
-  `name` <[string]> Metric name
-  `value` <[number]> Metric value

*returned from command*
- [Performance.getMetrics]

*parameter in event*
- [Performance.metrics]

[Performance.getMetrics]: performance.md#command-performancegetmetrics "Performance.getMetrics"
[Performance.metrics]: performance.md#event-performancemetrics "Performance.metrics"
[Performance.Metric]: performance.md#type-performancemetric "Performance.Metric"
[Performance.Metric]: performance.md#type-performancemetric "Performance.Metric"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"