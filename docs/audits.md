
### domain: Audits 🌱

Audits domain allows investigation of page violations and possible improvements.

---


#### command: Audits.getEncodedResponse

Returns the response body and size if it were re-encoded with the specified settings. Only
applies to images.

*parameters*
-  `requestId` <[Network.RequestId]> Identifier of the network request to get content for
-  `encoding` <[string]> The encoding to use
- *optional* `quality` <[number]> The quality of the encoding (0-1). (defaults to 1)
- *optional* `sizeOnly` <[boolean]> Whether to only return the size information (defaults to false)

*returns*
- *optional* `body` <[string]> The encoded body as a base64 string. Omitted if sizeOnly is true
-  `originalSize` <[integer]> Size before re-encoding
-  `encodedSize` <[integer]> Size after re-encoding

[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"