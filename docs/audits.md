
### domain: Audits

Audits domain allows investigation of page violations and possible improvements.

#### command: Audits.getEncodedResponse()

Returns the response body and size if it were re-encoded with the specified settings. Only
applies to images.

*parameters*
- `requestId` <[Network.RequestId]]> Identifier of the network request to get content for
- `encoding` <string]> The encoding to use
- `quality` <number]> The quality of the encoding (0-1). (defaults to 1)
- `sizeOnly` <boolean]> Whether to only return the size information (defaults to false)

*returns*
- `body` <string]> The encoded body as a base64 string. Omitted if sizeOnly is true
- `originalSize` <integer]> Size before re-encoding
- `encodedSize` <integer]> Size after re-encoding

[Network.RequestId]: audits.md#networkrequestid