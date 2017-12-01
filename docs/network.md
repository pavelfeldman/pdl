
### domain: Network

Network domain allows tracking network activities of the page. It exposes information about http,
file, data and other requests and responses, their headers, bodies, timing, etc.

---


#### command: Network.canClearBrowserCache 🍂

Tells whether clearing browser cache is supported.

*returns*
-  `result` <[boolean]> True if browser cache can be cleared

---


#### command: Network.canClearBrowserCookies 🍂

Tells whether clearing browser cookies is supported.

*returns*
-  `result` <[boolean]> True if browser cookies can be cleared

---


#### command: Network.canEmulateNetworkConditions 🍂

Tells whether emulation of network conditions is supported.

*returns*
-  `result` <[boolean]> True if emulation of network conditions is supported

---


#### command: Network.clearBrowserCache

Clears browser cache.

---


#### command: Network.clearBrowserCookies

Clears browser cookies.

---


#### command: Network.continueInterceptedRequest 🌱

Response to Network.requestIntercepted which either modifies the request to continue with any
modifications, or blocks it, or completes it with the provided response bytes. If a network
fetch occurs as a result which encounters a redirect an additional Network.requestIntercepted
event will be sent with the same InterceptionId.

*parameters*
-  `interceptionId` <[Network.InterceptionId]> 
- *optional* `errorReason` <[Network.ErrorReason]> If set this causes the request to fail with the given reason. Passing `Aborted` for requests
marked with `isNavigationRequest` also cancels the navigation. Must not be set in response
to an authChallenge
- *optional* `rawResponse` <[string]> If set the requests completes using with the provided base64 encoded raw response, including
HTTP status line and headers etc... Must not be set in response to an authChallenge
- *optional* `url` <[string]> If set the request url will be modified in a way that's not observable by page. Must not be
set in response to an authChallenge
- *optional* `method` <[string]> If set this allows the request method to be overridden. Must not be set in response to an
authChallenge
- *optional* `postData` <[string]> If set this allows postData to be set. Must not be set in response to an authChallenge
- *optional* `headers` <[Network.Headers]> If set this allows the request headers to be changed. Must not be set in response to an
authChallenge
- *optional* `authChallengeResponse` <[Network.AuthChallengeResponse]> Response to a requestIntercepted with an authChallenge. Must not be set otherwise

---


#### command: Network.deleteCookies

Deletes browser cookies with matching name and url or domain/path pair.

*parameters*
-  `name` <[string]> Name of the cookies to remove
- *optional* `url` <[string]> If specified, deletes all the cookies with the given name where domain and path match
provided URL
- *optional* `domain` <[string]> If specified, deletes only cookies with the exact domain
- *optional* `path` <[string]> If specified, deletes only cookies with the exact path

---


#### command: Network.disable

Disables network tracking, prevents network events from being sent to the client.

---


#### command: Network.emulateNetworkConditions

Activates emulation of network conditions.

*parameters*
-  `offline` <[boolean]> True to emulate internet disconnection
-  `latency` <[number]> Minimum latency from request sent to response headers received (ms)
-  `downloadThroughput` <[number]> Maximal aggregated download throughput (bytes/sec). -1 disables download throttling
-  `uploadThroughput` <[number]> Maximal aggregated upload throughput (bytes/sec).  -1 disables upload throttling
- *optional* `connectionType` <[Network.ConnectionType]> Connection type if known

---


#### command: Network.enable

Enables network tracking, network events will now be delivered to the client.

*parameters*
- *optional* `maxTotalBufferSize` <[integer]> 🌱 Buffer size in bytes to use when preserving network payloads (XHRs, etc)
- *optional* `maxResourceBufferSize` <[integer]> 🌱 Per-resource buffer size in bytes to use when preserving network payloads (XHRs, etc)

---


#### command: Network.getAllCookies

Returns all browser cookies. Depending on the backend support, will return detailed cookie
information in the `cookies` field.

*returns*
-  `cookies` <array of [Network.Cookie]> Array of cookie objects

---


#### command: Network.getCertificate 🌱

Returns the DER-encoded certificate.

*parameters*
-  `origin` <[string]> Origin to get certificate for

*returns*
-  `tableNames` <array of [string]> 

---


#### command: Network.getCookies

Returns all browser cookies for the current URL. Depending on the backend support, will return
detailed cookie information in the `cookies` field.

*parameters*
- *optional* `urls` <array of [string]> The list of URLs for which applicable cookies will be fetched

*returns*
-  `cookies` <array of [Network.Cookie]> Array of cookie objects

---


#### command: Network.getResponseBody

Returns content served for the given request.

*parameters*
-  `requestId` <[Network.RequestId]> Identifier of the network request to get content for

*returns*
-  `body` <[string]> Response body
-  `base64Encoded` <[boolean]> True, if content was sent as base64

---


#### command: Network.getResponseBodyForInterception 🌱

Returns content served for the given currently intercepted request.

*parameters*
-  `interceptionId` <[Network.InterceptionId]> Identifier for the intercepted request to get body for

*returns*
-  `body` <[string]> Response body
-  `base64Encoded` <[boolean]> True, if content was sent as base64

---


#### command: Network.replayXHR 🌱

This method sends a new XMLHttpRequest which is identical to the original one. The following
parameters should be identical: method, url, async, request body, extra headers, withCredentials
attribute, user, password.

*parameters*
-  `requestId` <[Network.RequestId]> Identifier of XHR to replay

---


#### command: Network.searchInResponseBody 🌱

Searches for given string in response content.

*parameters*
-  `requestId` <[Network.RequestId]> Identifier of the network response to search
-  `query` <[string]> String to search for
- *optional* `caseSensitive` <[boolean]> If true, search is case sensitive
- *optional* `isRegex` <[boolean]> If true, treats string parameter as regex

*returns*
-  `result` <array of [Debugger.SearchMatch]> List of search matches

---


#### command: Network.setBlockedURLs 🌱

Blocks URLs from loading.

*parameters*
-  `urls` <array of [string]> URL patterns to block. Wildcards ('*') are allowed

---


#### command: Network.setBypassServiceWorker 🌱

Toggles ignoring of service worker for each request.

*parameters*
-  `bypass` <[boolean]> Bypass service worker and load from network

---


#### command: Network.setCacheDisabled

Toggles ignoring cache for each request. If `true`, cache will not be used.

*parameters*
-  `cacheDisabled` <[boolean]> Cache disabled state

---


#### command: Network.setCookie

Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.

*parameters*
-  `name` <[string]> Cookie name
-  `value` <[string]> Cookie value
- *optional* `url` <[string]> The request-URI to associate with the setting of the cookie. This value can affect the
default domain and path values of the created cookie
- *optional* `domain` <[string]> Cookie domain
- *optional* `path` <[string]> Cookie path
- *optional* `secure` <[boolean]> True if cookie is secure
- *optional* `httpOnly` <[boolean]> True if cookie is http-only
- *optional* `sameSite` <[Network.CookieSameSite]> Cookie SameSite type
- *optional* `expires` <[Network.TimeSinceEpoch]> Cookie expiration date, session cookie if not set

*returns*
-  `success` <[boolean]> True if successfully set cookie

---


#### command: Network.setCookies

Sets given cookies.

*parameters*
-  `cookies` <array of [Network.CookieParam]> Cookies to be set

---


#### command: Network.setDataSizeLimitsForTest 🌱

For testing.

*parameters*
-  `maxTotalSize` <[integer]> Maximum total buffer size
-  `maxResourceSize` <[integer]> Maximum per-resource size

---


#### command: Network.setExtraHTTPHeaders

Specifies whether to always send extra HTTP headers with the requests from this page.

*parameters*
-  `headers` <[Network.Headers]> Map with extra HTTP headers

---


#### command: Network.setRequestInterception 🌱

Sets the requests to intercept that match a the provided patterns and optionally resource types.

*parameters*
-  `patterns` <array of [Network.RequestPattern]> Requests matching any of these patterns will be forwarded and wait for the corresponding
continueInterceptedRequest call

---


#### command: Network.setUserAgentOverride

Allows overriding user agent with the given string.

*parameters*
-  `userAgent` <[string]> User agent to use

---


#### event: Network.dataReceived

Fired when data chunk was received over the network.

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier
-  `timestamp` <[Network.MonotonicTime]> Timestamp
-  `dataLength` <[integer]> Data chunk length
-  `encodedDataLength` <[integer]> Actual bytes received (might be less than dataLength for compressed encodings)

---


#### event: Network.eventSourceMessageReceived

Fired when EventSource message is received.

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier
-  `timestamp` <[Network.MonotonicTime]> Timestamp
-  `eventName` <[string]> Message type
-  `eventId` <[string]> Message identifier
-  `data` <[string]> Message content

---


#### event: Network.loadingFailed

Fired when HTTP request has failed to load.

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier
-  `timestamp` <[Network.MonotonicTime]> Timestamp
-  `type` <[Page.ResourceType]> Resource type
-  `errorText` <[string]> User friendly error message
- *optional* `canceled` <[boolean]> True if loading was canceled
- *optional* `blockedReason` <[Network.BlockedReason]> The reason why loading was blocked, if any

---


#### event: Network.loadingFinished

Fired when HTTP request has finished loading.

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier
-  `timestamp` <[Network.MonotonicTime]> Timestamp
-  `encodedDataLength` <[number]> Total number of bytes received for this request

---


#### event: Network.requestIntercepted 🌱

Details of an intercepted HTTP request, which must be either allowed, blocked, modified or
mocked.

*parameters*
-  `interceptionId` <[Network.InterceptionId]> Each request the page makes will have a unique id, however if any redirects are encountered
while processing that fetch, they will be reported with the same id as the original fetch.
Likewise if HTTP authentication is needed then the same fetch id will be used
-  `request` <[Network.Request]> 
-  `frameId` <[Page.FrameId]> The id of the frame that initiated the request
-  `resourceType` <[Page.ResourceType]> How the requested resource will be used
-  `isNavigationRequest` <[boolean]> Whether this is a navigation request, which can abort the navigation completely
- *optional* `redirectUrl` <[string]> Redirect location, only sent if a redirect was intercepted
- *optional* `authChallenge` <[Network.AuthChallenge]> Details of the Authorization Challenge encountered. If this is set then
continueInterceptedRequest must contain an authChallengeResponse
- *optional* `responseErrorReason` <[Network.ErrorReason]> Response error if intercepted at response stage or if redirect occurred while intercepting
request
- *optional* `responseStatusCode` <[integer]> Response code if intercepted at response stage or if redirect occurred while intercepting
request or auth retry occurred
- *optional* `responseHeaders` <[Network.Headers]> Response headers if intercepted at the response stage or if redirect occurred while
intercepting request or auth retry occurred

---


#### event: Network.requestServedFromCache

Fired if request ended up loading from cache.

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier

---


#### event: Network.requestWillBeSent

Fired when page is about to send HTTP request.

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier
-  `loaderId` <[Network.LoaderId]> Loader identifier. Empty string if the request is fetched from worker
-  `documentURL` <[string]> URL of the document this request is loaded for
-  `request` <[Network.Request]> Request data
-  `timestamp` <[Network.MonotonicTime]> Timestamp
-  `wallTime` <[Network.TimeSinceEpoch]> Timestamp
-  `initiator` <[Network.Initiator]> Request initiator
- *optional* `redirectResponse` <[Network.Response]> Redirect response data
- *optional* `type` <[Page.ResourceType]> Type of this resource
- *optional* `frameId` <[Page.FrameId]> Frame identifier

---


#### event: Network.resourceChangedPriority 🌱

Fired when resource loading priority is changed

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier
-  `newPriority` <[Network.ResourcePriority]> New priority
-  `timestamp` <[Network.MonotonicTime]> Timestamp

---


#### event: Network.responseReceived

Fired when HTTP response is available.

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier
-  `loaderId` <[Network.LoaderId]> Loader identifier. Empty string if the request is fetched from worker
-  `timestamp` <[Network.MonotonicTime]> Timestamp
-  `type` <[Page.ResourceType]> Resource type
-  `response` <[Network.Response]> Response data
- *optional* `frameId` <[Page.FrameId]> Frame identifier

---


#### event: Network.webSocketClosed

Fired when WebSocket is closed.

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier
-  `timestamp` <[Network.MonotonicTime]> Timestamp

---


#### event: Network.webSocketCreated

Fired upon WebSocket creation.

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier
-  `url` <[string]> WebSocket request URL
- *optional* `initiator` <[Network.Initiator]> Request initiator

---


#### event: Network.webSocketFrameError

Fired when WebSocket frame error occurs.

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier
-  `timestamp` <[Network.MonotonicTime]> Timestamp
-  `errorMessage` <[string]> WebSocket frame error message

---


#### event: Network.webSocketFrameReceived

Fired when WebSocket frame is received.

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier
-  `timestamp` <[Network.MonotonicTime]> Timestamp
-  `response` <[Network.WebSocketFrame]> WebSocket response data

---


#### event: Network.webSocketFrameSent

Fired when WebSocket frame is sent.

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier
-  `timestamp` <[Network.MonotonicTime]> Timestamp
-  `response` <[Network.WebSocketFrame]> WebSocket response data

---


#### event: Network.webSocketHandshakeResponseReceived

Fired when WebSocket handshake response becomes available.

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier
-  `timestamp` <[Network.MonotonicTime]> Timestamp
-  `response` <[Network.WebSocketResponse]> WebSocket response data

---


#### event: Network.webSocketWillSendHandshakeRequest

Fired when WebSocket is about to initiate handshake.

*parameters*
-  `requestId` <[Network.RequestId]> Request identifier
-  `timestamp` <[Network.MonotonicTime]> Timestamp
-  `wallTime` <[Network.TimeSinceEpoch]> UTC Timestamp
-  `request` <[Network.WebSocketRequest]> WebSocket request data

---


#### type: Network.LoaderId

Unique loader identifier.

*base type*
- **string**

*parameter in event*
- [Page.lifecycleEvent]
- [Network.requestWillBeSent]
- [Network.responseReceived]

*property of type*
- [Page.Frame]

*returned from command*
- [Page.navigate]

---


#### type: Network.RequestId

Unique request identifier.

*base type*
- **string**

*accepted by command*
- [Audits.getEncodedResponse]
- [Network.getResponseBody]
- [Network.replayXHR]
- [Network.searchInResponseBody]

*property of type*
- [Log.LogEntry]

*parameter in event*
- [Network.dataReceived]
- [Network.eventSourceMessageReceived]
- [Network.loadingFailed]
- [Network.loadingFinished]
- [Network.requestServedFromCache]
- [Network.requestWillBeSent]
- [Network.resourceChangedPriority]
- [Network.responseReceived]
- [Network.webSocketClosed]
- [Network.webSocketCreated]
- [Network.webSocketFrameError]
- [Network.webSocketFrameReceived]
- [Network.webSocketFrameSent]
- [Network.webSocketHandshakeResponseReceived]
- [Network.webSocketWillSendHandshakeRequest]

---


#### type: Network.InterceptionId

Unique intercepted request identifier.

*base type*
- **string**

*accepted by command*
- [Network.continueInterceptedRequest]
- [Network.getResponseBodyForInterception]

*parameter in event*
- [Network.requestIntercepted]

---


#### type: Network.ErrorReason

Network level fetch failure reason.

*base type*
- **string**

*accepted by command*
- [Network.continueInterceptedRequest]

*parameter in event*
- [Network.requestIntercepted]

---


#### type: Network.TimeSinceEpoch

UTC time in seconds, counted from January 1, 1970.

*base type*
- **number**

*property of type*
- [Network.CookieParam]
- [Page.FrameResource]
- [Page.ScreencastFrameMetadata]
- [Network.SecurityDetails]
- [Network.SignedCertificateTimestamp]

*accepted by command*
- [Network.setCookie]

*parameter in event*
- [Network.requestWillBeSent]
- [Network.webSocketWillSendHandshakeRequest]

---


#### type: Network.MonotonicTime

Monotonically increasing time in seconds since an arbitrary point in the past.

*base type*
- **number**

*parameter in event*
- [Network.dataReceived]
- [Page.domContentEventFired]
- [Network.eventSourceMessageReceived]
- [Page.lifecycleEvent]
- [Page.loadEventFired]
- [Network.loadingFailed]
- [Network.loadingFinished]
- [Network.requestWillBeSent]
- [Network.resourceChangedPriority]
- [Network.responseReceived]
- [Network.webSocketClosed]
- [Network.webSocketFrameError]
- [Network.webSocketFrameReceived]
- [Network.webSocketFrameSent]
- [Network.webSocketHandshakeResponseReceived]
- [Network.webSocketWillSendHandshakeRequest]

---


#### type: Network.Headers

Request / response headers as keys / values of JSON object.

*base type*
- **object**

*property of type*
- [Network.Request]
- [Network.Response]
- [Network.WebSocketRequest]
- [Network.WebSocketResponse]

*accepted by command*
- [Network.continueInterceptedRequest]
- [Network.setExtraHTTPHeaders]

*parameter in event*
- [Network.requestIntercepted]

---


#### type: Network.ConnectionType

The underlying connection technology that the browser is supposedly using.

*base type*
- **string**

*accepted by command*
- [Network.emulateNetworkConditions]

---


#### type: Network.CookieSameSite

Represents the cookie's 'SameSite' status:
https://tools.ietf.org/html/draft-west-first-party-cookies

*base type*
- **string**

*property of type*
- [Network.Cookie]
- [Network.CookieParam]

*accepted by command*
- [Network.setCookie]

---


#### type: Network.ResourceTiming

Timing information for the request.

*base type*
- **object**

*properties*
-  `requestTime` <[number]> Timing's requestTime is a baseline in seconds, while the other numbers are ticks in
milliseconds relatively to this requestTime
-  `proxyStart` <[number]> Started resolving proxy
-  `proxyEnd` <[number]> Finished resolving proxy
-  `dnsStart` <[number]> Started DNS address resolve
-  `dnsEnd` <[number]> Finished DNS address resolve
-  `connectStart` <[number]> Started connecting to the remote host
-  `connectEnd` <[number]> Connected to the remote host
-  `sslStart` <[number]> Started SSL handshake
-  `sslEnd` <[number]> Finished SSL handshake
-  `workerStart` <[number]> 🌱 Started running ServiceWorker
-  `workerReady` <[number]> 🌱 Finished Starting ServiceWorker
-  `sendStart` <[number]> Started sending request
-  `sendEnd` <[number]> Finished sending request
-  `pushStart` <[number]> 🌱 Time the server started pushing request
-  `pushEnd` <[number]> 🌱 Time the server finished pushing request
-  `receiveHeadersEnd` <[number]> Finished receiving response headers

*property of type*
- [Network.Response]

---


#### type: Network.ResourcePriority

Loading priority of a resource request.

*base type*
- **string**

*property of type*
- [Network.Request]

*parameter in event*
- [Network.resourceChangedPriority]

---


#### type: Network.Request

HTTP request data.

*base type*
- **object**

*properties*
-  `url` <[string]> Request URL
-  `method` <[string]> HTTP request method
-  `headers` <[Network.Headers]> HTTP request headers
- *optional* `postData` <[string]> HTTP POST request data
- *optional* `mixedContentType` <[Security.MixedContentType]> The mixed content type of the request
-  `initialPriority` <[Network.ResourcePriority]> Priority of the resource request at the time request is sent
-  `referrerPolicy` <[string]> The referrer policy of the request, as defined in https://www.w3.org/TR/referrer-policy/
- *optional* `isLinkPreload` <[boolean]> Whether is loaded via link preload

*parameter in event*
- [Network.requestIntercepted]
- [Network.requestWillBeSent]

---


#### type: Network.SignedCertificateTimestamp

Details of a signed certificate timestamp (SCT).

*base type*
- **object**

*properties*
-  `status` <[string]> Validation status
-  `origin` <[string]> Origin
-  `logDescription` <[string]> Log name / description
-  `logId` <[string]> Log ID
-  `timestamp` <[Network.TimeSinceEpoch]> Issuance date
-  `hashAlgorithm` <[string]> Hash algorithm
-  `signatureAlgorithm` <[string]> Signature algorithm
-  `signatureData` <[string]> Signature data

*property of type*
- [Network.SecurityDetails]

---


#### type: Network.SecurityDetails

Security details about a request.

*base type*
- **object**

*properties*
-  `protocol` <[string]> Protocol name (e.g. "TLS 1.2" or "QUIC")
-  `keyExchange` <[string]> Key Exchange used by the connection, or the empty string if not applicable
- *optional* `keyExchangeGroup` <[string]> (EC)DH group used by the connection, if applicable
-  `cipher` <[string]> Cipher name
- *optional* `mac` <[string]> TLS MAC. Note that AEAD ciphers do not have separate MACs
-  `certificateId` <[Security.CertificateId]> Certificate ID value
-  `subjectName` <[string]> Certificate subject name
-  `sanList` <array of [string]> Subject Alternative Name (SAN) DNS names and IP addresses
-  `issuer` <[string]> Name of the issuing CA
-  `validFrom` <[Network.TimeSinceEpoch]> Certificate valid from date
-  `validTo` <[Network.TimeSinceEpoch]> Certificate valid to (expiration) date
-  `signedCertificateTimestampList` <array of [Network.SignedCertificateTimestamp]> List of signed certificate timestamps (SCTs)

*property of type*
- [Network.Response]

---


#### type: Network.BlockedReason

The reason why request was blocked.

*base type*
- **string**

*parameter in event*
- [Network.loadingFailed]

---


#### type: Network.Response

HTTP response data.

*base type*
- **object**

*properties*
-  `url` <[string]> Response URL. This URL can be different from CachedResource.url in case of redirect
-  `status` <[integer]> HTTP response status code
-  `statusText` <[string]> HTTP response status text
-  `headers` <[Network.Headers]> HTTP response headers
- *optional* `headersText` <[string]> HTTP response headers text
-  `mimeType` <[string]> Resource mimeType as determined by the browser
- *optional* `requestHeaders` <[Network.Headers]> Refined HTTP request headers that were actually transmitted over the network
- *optional* `requestHeadersText` <[string]> HTTP request headers text
-  `connectionReused` <[boolean]> Specifies whether physical connection was actually reused for this request
-  `connectionId` <[number]> Physical connection id that was actually used for this request
- *optional* `remoteIPAddress` <[string]> Remote IP address
- *optional* `remotePort` <[integer]> Remote port
- *optional* `fromDiskCache` <[boolean]> Specifies that the request was served from the disk cache
- *optional* `fromServiceWorker` <[boolean]> Specifies that the request was served from the ServiceWorker
-  `encodedDataLength` <[number]> Total number of bytes received for this request so far
- *optional* `timing` <[Network.ResourceTiming]> Timing information for the given request
- *optional* `protocol` <[string]> Protocol used to fetch this request
-  `securityState` <[Security.SecurityState]> Security state of the request resource
- *optional* `securityDetails` <[Network.SecurityDetails]> Security details for the request

*property of type*
- [Network.CachedResource]

*parameter in event*
- [Network.requestWillBeSent]
- [Network.responseReceived]

---


#### type: Network.WebSocketRequest

WebSocket request data.

*base type*
- **object**

*properties*
-  `headers` <[Network.Headers]> HTTP request headers

*parameter in event*
- [Network.webSocketWillSendHandshakeRequest]

---


#### type: Network.WebSocketResponse

WebSocket response data.

*base type*
- **object**

*properties*
-  `status` <[integer]> HTTP response status code
-  `statusText` <[string]> HTTP response status text
-  `headers` <[Network.Headers]> HTTP response headers
- *optional* `headersText` <[string]> HTTP response headers text
- *optional* `requestHeaders` <[Network.Headers]> HTTP request headers
- *optional* `requestHeadersText` <[string]> HTTP request headers text

*parameter in event*
- [Network.webSocketHandshakeResponseReceived]

---


#### type: Network.WebSocketFrame

WebSocket frame data.

*base type*
- **object**

*properties*
-  `opcode` <[number]> WebSocket frame opcode
-  `mask` <[boolean]> WebSocke frame mask
-  `payloadData` <[string]> WebSocke frame payload data

*parameter in event*
- [Network.webSocketFrameReceived]
- [Network.webSocketFrameSent]

---


#### type: Network.CachedResource

Information about the cached resource.

*base type*
- **object**

*properties*
-  `url` <[string]> Resource URL. This is the url of the original network request
-  `type` <[Page.ResourceType]> Type of this resource
- *optional* `response` <[Network.Response]> Cached response data
-  `bodySize` <[number]> Cached response body size

---


#### type: Network.Initiator

Information about the request initiator.

*base type*
- **object**

*properties*
-  `type` <[string]> Type of this initiator
- *optional* `stack` <[Runtime.StackTrace]> Initiator JavaScript stack trace, set for Script only
- *optional* `url` <[string]> Initiator URL, set for Parser type or for Script type (when script is importing module)
- *optional* `lineNumber` <[number]> Initiator line number, set for Parser type or for Script type (when script is importing
module) (0-based)

*parameter in event*
- [Network.requestWillBeSent]
- [Network.webSocketCreated]

---


#### type: Network.Cookie

Cookie object

*base type*
- **object**

*properties*
-  `name` <[string]> Cookie name
-  `value` <[string]> Cookie value
-  `domain` <[string]> Cookie domain
-  `path` <[string]> Cookie path
-  `expires` <[number]> Cookie expiration date as the number of seconds since the UNIX epoch
-  `size` <[integer]> Cookie size
-  `httpOnly` <[boolean]> True if cookie is http-only
-  `secure` <[boolean]> True if cookie is secure
-  `session` <[boolean]> True in case of session cookie
- *optional* `sameSite` <[Network.CookieSameSite]> Cookie SameSite type

*returned from command*
- [Network.getAllCookies]
- [Network.getCookies]
- [Page.getCookies]

---


#### type: Network.CookieParam

Cookie parameter object

*base type*
- **object**

*properties*
-  `name` <[string]> Cookie name
-  `value` <[string]> Cookie value
- *optional* `url` <[string]> The request-URI to associate with the setting of the cookie. This value can affect the
default domain and path values of the created cookie
- *optional* `domain` <[string]> Cookie domain
- *optional* `path` <[string]> Cookie path
- *optional* `secure` <[boolean]> True if cookie is secure
- *optional* `httpOnly` <[boolean]> True if cookie is http-only
- *optional* `sameSite` <[Network.CookieSameSite]> Cookie SameSite type
- *optional* `expires` <[Network.TimeSinceEpoch]> Cookie expiration date, session cookie if not set

*accepted by command*
- [Network.setCookies]

---


#### type: Network.AuthChallenge

Authorization challenge for HTTP status code 401 or 407.

*base type*
- **object**

*properties*
- *optional* `source` <[string]> Source of the authentication challenge
-  `origin` <[string]> Origin of the challenger
-  `scheme` <[string]> The authentication scheme used, such as basic or digest
-  `realm` <[string]> The realm of the challenge. May be empty

*parameter in event*
- [Network.requestIntercepted]

---


#### type: Network.AuthChallengeResponse

Response to an AuthChallenge.

*base type*
- **object**

*properties*
-  `response` <[string]> The decision on what to do in response to the authorization challenge.  Default means
deferring to the default behavior of the net stack, which will likely either the Cancel
authentication or display a popup dialog box
- *optional* `username` <[string]> The username to provide, possibly empty. Should only be set if response is
ProvideCredentials
- *optional* `password` <[string]> The password to provide, possibly empty. Should only be set if response is
ProvideCredentials

*accepted by command*
- [Network.continueInterceptedRequest]

---


#### type: Network.InterceptionStage

Stages of the interception to begin intercepting. Request will intercept before the request is
sent. Response will intercept after the response is received.

*base type*
- **string**

*property of type*
- [Network.RequestPattern]

---


#### type: Network.RequestPattern

Request pattern for interception.

*base type*
- **object**

*properties*
- *optional* `urlPattern` <[string]> Wildcards ('*' -> zero or more, '?' -> exactly one) are allowed. Escape character is
backslash. Omitting is equivalent to "*"
- *optional* `resourceType` <[Page.ResourceType]> If set, only requests for matching resource types will be intercepted
- *optional* `interceptionStage` <[Network.InterceptionStage]> Stage at wich to begin intercepting requests. Default is Request

*accepted by command*
- [Network.setRequestInterception]

[Page.lifecycleEvent]: page.md#event-pagelifecycleevent "Page.lifecycleEvent"
[Network.requestWillBeSent]: network.md#event-networkrequestwillbesent "Network.requestWillBeSent"
[Network.responseReceived]: network.md#event-networkresponsereceived "Network.responseReceived"
[Page.Frame]: page.md#type-pageframe "Page.Frame"
[Page.navigate]: page.md#command-pagenavigate "Page.navigate"
[Audits.getEncodedResponse]: audits.md#command-auditsgetencodedresponse "Audits.getEncodedResponse"
[Network.getResponseBody]: network.md#command-networkgetresponsebody "Network.getResponseBody"
[Network.replayXHR]: network.md#command-networkreplayxhr "Network.replayXHR"
[Network.searchInResponseBody]: network.md#command-networksearchinresponsebody "Network.searchInResponseBody"
[Log.LogEntry]: log.md#type-loglogentry "Log.LogEntry"
[Network.dataReceived]: network.md#event-networkdatareceived "Network.dataReceived"
[Network.eventSourceMessageReceived]: network.md#event-networkeventsourcemessagereceived "Network.eventSourceMessageReceived"
[Network.loadingFailed]: network.md#event-networkloadingfailed "Network.loadingFailed"
[Network.loadingFinished]: network.md#event-networkloadingfinished "Network.loadingFinished"
[Network.requestServedFromCache]: network.md#event-networkrequestservedfromcache "Network.requestServedFromCache"
[Network.requestWillBeSent]: network.md#event-networkrequestwillbesent "Network.requestWillBeSent"
[Network.resourceChangedPriority]: network.md#event-networkresourcechangedpriority "Network.resourceChangedPriority"
[Network.responseReceived]: network.md#event-networkresponsereceived "Network.responseReceived"
[Network.webSocketClosed]: network.md#event-networkwebsocketclosed "Network.webSocketClosed"
[Network.webSocketCreated]: network.md#event-networkwebsocketcreated "Network.webSocketCreated"
[Network.webSocketFrameError]: network.md#event-networkwebsocketframeerror "Network.webSocketFrameError"
[Network.webSocketFrameReceived]: network.md#event-networkwebsocketframereceived "Network.webSocketFrameReceived"
[Network.webSocketFrameSent]: network.md#event-networkwebsocketframesent "Network.webSocketFrameSent"
[Network.webSocketHandshakeResponseReceived]: network.md#event-networkwebsockethandshakeresponsereceived "Network.webSocketHandshakeResponseReceived"
[Network.webSocketWillSendHandshakeRequest]: network.md#event-networkwebsocketwillsendhandshakerequest "Network.webSocketWillSendHandshakeRequest"
[Network.continueInterceptedRequest]: network.md#command-networkcontinueinterceptedrequest "Network.continueInterceptedRequest"
[Network.getResponseBodyForInterception]: network.md#command-networkgetresponsebodyforinterception "Network.getResponseBodyForInterception"
[Network.requestIntercepted]: network.md#event-networkrequestintercepted "Network.requestIntercepted"
[Network.continueInterceptedRequest]: network.md#command-networkcontinueinterceptedrequest "Network.continueInterceptedRequest"
[Network.requestIntercepted]: network.md#event-networkrequestintercepted "Network.requestIntercepted"
[Network.CookieParam]: network.md#type-networkcookieparam "Network.CookieParam"
[Page.FrameResource]: page.md#type-pageframeresource "Page.FrameResource"
[Page.ScreencastFrameMetadata]: page.md#type-pagescreencastframemetadata "Page.ScreencastFrameMetadata"
[Network.SecurityDetails]: network.md#type-networksecuritydetails "Network.SecurityDetails"
[Network.SignedCertificateTimestamp]: network.md#type-networksignedcertificatetimestamp "Network.SignedCertificateTimestamp"
[Network.setCookie]: network.md#command-networksetcookie "Network.setCookie"
[Network.requestWillBeSent]: network.md#event-networkrequestwillbesent "Network.requestWillBeSent"
[Network.webSocketWillSendHandshakeRequest]: network.md#event-networkwebsocketwillsendhandshakerequest "Network.webSocketWillSendHandshakeRequest"
[Network.dataReceived]: network.md#event-networkdatareceived "Network.dataReceived"
[Page.domContentEventFired]: page.md#event-pagedomcontenteventfired "Page.domContentEventFired"
[Network.eventSourceMessageReceived]: network.md#event-networkeventsourcemessagereceived "Network.eventSourceMessageReceived"
[Page.lifecycleEvent]: page.md#event-pagelifecycleevent "Page.lifecycleEvent"
[Page.loadEventFired]: page.md#event-pageloadeventfired "Page.loadEventFired"
[Network.loadingFailed]: network.md#event-networkloadingfailed "Network.loadingFailed"
[Network.loadingFinished]: network.md#event-networkloadingfinished "Network.loadingFinished"
[Network.requestWillBeSent]: network.md#event-networkrequestwillbesent "Network.requestWillBeSent"
[Network.resourceChangedPriority]: network.md#event-networkresourcechangedpriority "Network.resourceChangedPriority"
[Network.responseReceived]: network.md#event-networkresponsereceived "Network.responseReceived"
[Network.webSocketClosed]: network.md#event-networkwebsocketclosed "Network.webSocketClosed"
[Network.webSocketFrameError]: network.md#event-networkwebsocketframeerror "Network.webSocketFrameError"
[Network.webSocketFrameReceived]: network.md#event-networkwebsocketframereceived "Network.webSocketFrameReceived"
[Network.webSocketFrameSent]: network.md#event-networkwebsocketframesent "Network.webSocketFrameSent"
[Network.webSocketHandshakeResponseReceived]: network.md#event-networkwebsockethandshakeresponsereceived "Network.webSocketHandshakeResponseReceived"
[Network.webSocketWillSendHandshakeRequest]: network.md#event-networkwebsocketwillsendhandshakerequest "Network.webSocketWillSendHandshakeRequest"
[Network.Request]: network.md#type-networkrequest "Network.Request"
[Network.Response]: network.md#type-networkresponse "Network.Response"
[Network.WebSocketRequest]: network.md#type-networkwebsocketrequest "Network.WebSocketRequest"
[Network.WebSocketResponse]: network.md#type-networkwebsocketresponse "Network.WebSocketResponse"
[Network.continueInterceptedRequest]: network.md#command-networkcontinueinterceptedrequest "Network.continueInterceptedRequest"
[Network.setExtraHTTPHeaders]: network.md#command-networksetextrahttpheaders "Network.setExtraHTTPHeaders"
[Network.requestIntercepted]: network.md#event-networkrequestintercepted "Network.requestIntercepted"
[Network.emulateNetworkConditions]: network.md#command-networkemulatenetworkconditions "Network.emulateNetworkConditions"
[Network.Cookie]: network.md#type-networkcookie "Network.Cookie"
[Network.CookieParam]: network.md#type-networkcookieparam "Network.CookieParam"
[Network.setCookie]: network.md#command-networksetcookie "Network.setCookie"
[Network.Response]: network.md#type-networkresponse "Network.Response"
[Network.Request]: network.md#type-networkrequest "Network.Request"
[Network.resourceChangedPriority]: network.md#event-networkresourcechangedpriority "Network.resourceChangedPriority"
[Network.requestIntercepted]: network.md#event-networkrequestintercepted "Network.requestIntercepted"
[Network.requestWillBeSent]: network.md#event-networkrequestwillbesent "Network.requestWillBeSent"
[Network.SecurityDetails]: network.md#type-networksecuritydetails "Network.SecurityDetails"
[Network.Response]: network.md#type-networkresponse "Network.Response"
[Network.loadingFailed]: network.md#event-networkloadingfailed "Network.loadingFailed"
[Network.CachedResource]: network.md#type-networkcachedresource "Network.CachedResource"
[Network.requestWillBeSent]: network.md#event-networkrequestwillbesent "Network.requestWillBeSent"
[Network.responseReceived]: network.md#event-networkresponsereceived "Network.responseReceived"
[Network.webSocketWillSendHandshakeRequest]: network.md#event-networkwebsocketwillsendhandshakerequest "Network.webSocketWillSendHandshakeRequest"
[Network.webSocketHandshakeResponseReceived]: network.md#event-networkwebsockethandshakeresponsereceived "Network.webSocketHandshakeResponseReceived"
[Network.webSocketFrameReceived]: network.md#event-networkwebsocketframereceived "Network.webSocketFrameReceived"
[Network.webSocketFrameSent]: network.md#event-networkwebsocketframesent "Network.webSocketFrameSent"
[Network.requestWillBeSent]: network.md#event-networkrequestwillbesent "Network.requestWillBeSent"
[Network.webSocketCreated]: network.md#event-networkwebsocketcreated "Network.webSocketCreated"
[Network.getAllCookies]: network.md#command-networkgetallcookies "Network.getAllCookies"
[Network.getCookies]: network.md#command-networkgetcookies "Network.getCookies"
[Page.getCookies]: page.md#command-pagegetcookies "Page.getCookies"
[Network.setCookies]: network.md#command-networksetcookies "Network.setCookies"
[Network.requestIntercepted]: network.md#event-networkrequestintercepted "Network.requestIntercepted"
[Network.continueInterceptedRequest]: network.md#command-networkcontinueinterceptedrequest "Network.continueInterceptedRequest"
[Network.RequestPattern]: network.md#type-networkrequestpattern "Network.RequestPattern"
[Network.setRequestInterception]: network.md#command-networksetrequestinterception "Network.setRequestInterception"
[Network.Headers]: network.md#type-networkheaders "Network.Headers"
[Security.MixedContentType]: security.md#type-securitymixedcontenttype "Security.MixedContentType"
[Network.ResourcePriority]: network.md#type-networkresourcepriority "Network.ResourcePriority"
[Network.TimeSinceEpoch]: network.md#type-networktimesinceepoch "Network.TimeSinceEpoch"
[Security.CertificateId]: security.md#type-securitycertificateid "Security.CertificateId"
[Network.TimeSinceEpoch]: network.md#type-networktimesinceepoch "Network.TimeSinceEpoch"
[Network.SignedCertificateTimestamp]: network.md#type-networksignedcertificatetimestamp "Network.SignedCertificateTimestamp"
[Network.Headers]: network.md#type-networkheaders "Network.Headers"
[Network.ResourceTiming]: network.md#type-networkresourcetiming "Network.ResourceTiming"
[Security.SecurityState]: security.md#type-securitysecuritystate "Security.SecurityState"
[Network.SecurityDetails]: network.md#type-networksecuritydetails "Network.SecurityDetails"
[Network.Headers]: network.md#type-networkheaders "Network.Headers"
[Network.Headers]: network.md#type-networkheaders "Network.Headers"
[Page.ResourceType]: page.md#type-pageresourcetype "Page.ResourceType"
[Network.Response]: network.md#type-networkresponse "Network.Response"
[Runtime.StackTrace]: runtime.md#type-runtimestacktrace "Runtime.StackTrace"
[Network.CookieSameSite]: network.md#type-networkcookiesamesite "Network.CookieSameSite"
[Network.CookieSameSite]: network.md#type-networkcookiesamesite "Network.CookieSameSite"
[Network.TimeSinceEpoch]: network.md#type-networktimesinceepoch "Network.TimeSinceEpoch"
[Page.ResourceType]: page.md#type-pageresourcetype "Page.ResourceType"
[Network.InterceptionStage]: network.md#type-networkinterceptionstage "Network.InterceptionStage"
[Network.InterceptionId]: network.md#type-networkinterceptionid "Network.InterceptionId"
[Network.ErrorReason]: network.md#type-networkerrorreason "Network.ErrorReason"
[Network.Headers]: network.md#type-networkheaders "Network.Headers"
[Network.AuthChallengeResponse]: network.md#type-networkauthchallengeresponse "Network.AuthChallengeResponse"
[Network.ConnectionType]: network.md#type-networkconnectiontype "Network.ConnectionType"
[Network.Cookie]: network.md#type-networkcookie "Network.Cookie"
[Network.Cookie]: network.md#type-networkcookie "Network.Cookie"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.InterceptionId]: network.md#type-networkinterceptionid "Network.InterceptionId"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Debugger.SearchMatch]: debugger.md#type-debuggersearchmatch "Debugger.SearchMatch"
[Network.CookieSameSite]: network.md#type-networkcookiesamesite "Network.CookieSameSite"
[Network.TimeSinceEpoch]: network.md#type-networktimesinceepoch "Network.TimeSinceEpoch"
[Network.CookieParam]: network.md#type-networkcookieparam "Network.CookieParam"
[Network.Headers]: network.md#type-networkheaders "Network.Headers"
[Network.RequestPattern]: network.md#type-networkrequestpattern "Network.RequestPattern"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.MonotonicTime]: network.md#type-networkmonotonictime "Network.MonotonicTime"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.MonotonicTime]: network.md#type-networkmonotonictime "Network.MonotonicTime"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.MonotonicTime]: network.md#type-networkmonotonictime "Network.MonotonicTime"
[Page.ResourceType]: page.md#type-pageresourcetype "Page.ResourceType"
[Network.BlockedReason]: network.md#type-networkblockedreason "Network.BlockedReason"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.MonotonicTime]: network.md#type-networkmonotonictime "Network.MonotonicTime"
[Network.InterceptionId]: network.md#type-networkinterceptionid "Network.InterceptionId"
[Network.Request]: network.md#type-networkrequest "Network.Request"
[Page.FrameId]: page.md#type-pageframeid "Page.FrameId"
[Page.ResourceType]: page.md#type-pageresourcetype "Page.ResourceType"
[Network.AuthChallenge]: network.md#type-networkauthchallenge "Network.AuthChallenge"
[Network.ErrorReason]: network.md#type-networkerrorreason "Network.ErrorReason"
[Network.Headers]: network.md#type-networkheaders "Network.Headers"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.LoaderId]: network.md#type-networkloaderid "Network.LoaderId"
[Network.Request]: network.md#type-networkrequest "Network.Request"
[Network.MonotonicTime]: network.md#type-networkmonotonictime "Network.MonotonicTime"
[Network.TimeSinceEpoch]: network.md#type-networktimesinceepoch "Network.TimeSinceEpoch"
[Network.Initiator]: network.md#type-networkinitiator "Network.Initiator"
[Network.Response]: network.md#type-networkresponse "Network.Response"
[Page.ResourceType]: page.md#type-pageresourcetype "Page.ResourceType"
[Page.FrameId]: page.md#type-pageframeid "Page.FrameId"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.ResourcePriority]: network.md#type-networkresourcepriority "Network.ResourcePriority"
[Network.MonotonicTime]: network.md#type-networkmonotonictime "Network.MonotonicTime"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.LoaderId]: network.md#type-networkloaderid "Network.LoaderId"
[Network.MonotonicTime]: network.md#type-networkmonotonictime "Network.MonotonicTime"
[Page.ResourceType]: page.md#type-pageresourcetype "Page.ResourceType"
[Network.Response]: network.md#type-networkresponse "Network.Response"
[Page.FrameId]: page.md#type-pageframeid "Page.FrameId"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.MonotonicTime]: network.md#type-networkmonotonictime "Network.MonotonicTime"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.Initiator]: network.md#type-networkinitiator "Network.Initiator"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.MonotonicTime]: network.md#type-networkmonotonictime "Network.MonotonicTime"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.MonotonicTime]: network.md#type-networkmonotonictime "Network.MonotonicTime"
[Network.WebSocketFrame]: network.md#type-networkwebsocketframe "Network.WebSocketFrame"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.MonotonicTime]: network.md#type-networkmonotonictime "Network.MonotonicTime"
[Network.WebSocketFrame]: network.md#type-networkwebsocketframe "Network.WebSocketFrame"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.MonotonicTime]: network.md#type-networkmonotonictime "Network.MonotonicTime"
[Network.WebSocketResponse]: network.md#type-networkwebsocketresponse "Network.WebSocketResponse"
[Network.RequestId]: network.md#type-networkrequestid "Network.RequestId"
[Network.MonotonicTime]: network.md#type-networkmonotonictime "Network.MonotonicTime"
[Network.TimeSinceEpoch]: network.md#type-networktimesinceepoch "Network.TimeSinceEpoch"
[Network.WebSocketRequest]: network.md#type-networkwebsocketrequest "Network.WebSocketRequest"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"