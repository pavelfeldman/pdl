
### domain: Tethering 🌱

The Tethering domain defines methods and events for browser port binding.


#### command: Tethering.bind()

Request browser port binding.

*parameters*
-  `port` <[integer]> Port number to bind


#### command: Tethering.unbind()

Request browser port unbinding.

*parameters*
-  `port` <[integer]> Port number to unbind


#### event: Tethering.accepted

Informs that port was successfully bound and got a specified connection id.

*parameters*
-  `port` <[integer]> Port number that was successfully bound
-  `connectionId` <[string]> Connection id to be used

[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"