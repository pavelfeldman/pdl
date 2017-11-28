
### domain: Network

Network domain allows tracking network activities of the page. It exposes information about http,
file, data and other requests and responses, their headers, bodies, timing, etc.

#### Network.canClearBrowserCache()
- returns
  - `result` <[boolean]> True if browser cache can be cleared

Tells whether clearing browser cache is supported.

#### Network.canClearBrowserCookies()
- returns
  - `result` <[boolean]> True if browser cookies can be cleared

Tells whether clearing browser cookies is supported.

#### Network.canEmulateNetworkConditions()
- returns
  - `result` <[boolean]> True if emulation of network conditions is supported

Tells whether emulation of network conditions is supported.

#### Network.clearBrowserCache()

Clears browser cache.

#### Network.clearBrowserCookies()

Clears browser cookies.

#### Network.continueInterceptedRequest()
- parameters
  - `interceptionId` <InterceptionId> 
  - `errorReason` <ErrorReason> If set this causes the request to fail with the given reason. Passing `Aborted` for requests
marked with `isNavigationRequest` also cancels the navigation. Must not be set in response
to an authChallenge
  - `rawResponse` <[string]> If set the requests completes using with the provided base64 encoded raw response, including
HTTP status line and headers etc... Must not be set in response to an authChallenge
  - `url` <[string]> If set the request url will be modified in a way that's not observable by page. Must not be
set in response to an authChallenge
  - `method` <[string]> If set this allows the request method to be overridden. Must not be set in response to an
authChallenge
  - `postData` <[string]> If set this allows postData to be set. Must not be set in response to an authChallenge
  - `headers` <Headers> If set this allows the request headers to be changed. Must not be set in response to an
authChallenge
  - `authChallengeResponse` <AuthChallengeResponse> Response to a requestIntercepted with an authChallenge. Must not be set otherwise

Response to Network.requestIntercepted which either modifies the request to continue with any
modifications, or blocks it, or completes it with the provided response bytes. If a network
fetch occurs as a result which encounters a redirect an additional Network.requestIntercepted
event will be sent with the same InterceptionId.

#### Network.deleteCookies()
- parameters
  - `name` <[string]> Name of the cookies to remove
  - `url` <[string]> If specified, deletes all the cookies with the given name where domain and path match
provided URL
  - `domain` <[string]> If specified, deletes only cookies with the exact domain
  - `path` <[string]> If specified, deletes only cookies with the exact path

Deletes browser cookies with matching name and url or domain/path pair.

#### Network.disable()

Disables network tracking, prevents network events from being sent to the client.

#### Network.emulateNetworkConditions()
- parameters
  - `offline` <[boolean]> True to emulate internet disconnection
  - `latency` <[number]> Minimum latency from request sent to response headers received (ms)
  - `downloadThroughput` <[number]> Maximal aggregated download throughput (bytes/sec). -1 disables download throttling
  - `uploadThroughput` <[number]> Maximal aggregated upload throughput (bytes/sec).  -1 disables upload throttling
  - `connectionType` <ConnectionType> Connection type if known

Activates emulation of network conditions.

#### Network.enable()
- parameters
  - `maxTotalBufferSize` <[integer]> Buffer size in bytes to use when preserving network payloads (XHRs, etc)
  - `maxResourceBufferSize` <[integer]> Per-resource buffer size in bytes to use when preserving network payloads (XHRs, etc)

Enables network tracking, network events will now be delivered to the client.

#### Network.getAllCookies()
- returns
  - `cookies` array of <Cookie> Array of cookie objects

Returns all browser cookies. Depending on the backend support, will return detailed cookie
information in the `cookies` field.

#### Network.getCertificate()
- parameters
  - `origin` <[string]> Origin to get certificate for
- returns
  - `tableNames` array of <[string]> 

Returns the DER-encoded certificate.

#### Network.getCookies()
- parameters
  - `urls` array of <[string]> The list of URLs for which applicable cookies will be fetched
- returns
  - `cookies` array of <Cookie> Array of cookie objects

Returns all browser cookies for the current URL. Depending on the backend support, will return
detailed cookie information in the `cookies` field.

#### Network.getResponseBody()
- parameters
  - `requestId` <RequestId> Identifier of the network request to get content for
- returns
  - `body` <[string]> Response body
  - `base64Encoded` <[boolean]> True, if content was sent as base64

Returns content served for the given request.

#### Network.getResponseBodyForInterception()
- parameters
  - `interceptionId` <InterceptionId> Identifier for the intercepted request to get body for
- returns
  - `body` <[string]> Response body
  - `base64Encoded` <[boolean]> True, if content was sent as base64

Returns content served for the given currently intercepted request.

#### Network.replayXHR()
- parameters
  - `requestId` <RequestId> Identifier of XHR to replay

This method sends a new XMLHttpRequest which is identical to the original one. The following
parameters should be identical: method, url, async, request body, extra headers, withCredentials
attribute, user, password.

#### Network.searchInResponseBody()
- parameters
  - `requestId` <RequestId> Identifier of the network response to search
  - `query` <[string]> String to search for
  - `caseSensitive` <[boolean]> If true, search is case sensitive
  - `isRegex` <[boolean]> If true, treats string parameter as regex
- returns
  - `result` array of <Debugger.SearchMatch> List of search matches

Searches for given string in response content.

#### Network.setBlockedURLs()
- parameters
  - `urls` array of <[string]> URL patterns to block. Wildcards ('*') are allowed

Blocks URLs from loading.

#### Network.setBypassServiceWorker()
- parameters
  - `bypass` <[boolean]> Bypass service worker and load from network

Toggles ignoring of service worker for each request.

#### Network.setCacheDisabled()
- parameters
  - `cacheDisabled` <[boolean]> Cache disabled state

Toggles ignoring cache for each request. If `true`, cache will not be used.

#### Network.setCookie()
- parameters
  - `name` <[string]> Cookie name
  - `value` <[string]> Cookie value
  - `url` <[string]> The request-URI to associate with the setting of the cookie. This value can affect the
default domain and path values of the created cookie
  - `domain` <[string]> Cookie domain
  - `path` <[string]> Cookie path
  - `secure` <[boolean]> True if cookie is secure
  - `httpOnly` <[boolean]> True if cookie is http-only
  - `sameSite` <CookieSameSite> Cookie SameSite type
  - `expires` <TimeSinceEpoch> Cookie expiration date, session cookie if not set
- returns
  - `success` <[boolean]> True if successfully set cookie

Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.

#### Network.setCookies()
- parameters
  - `cookies` array of <CookieParam> Cookies to be set

Sets given cookies.

#### Network.setDataSizeLimitsForTest()
- parameters
  - `maxTotalSize` <[integer]> Maximum total buffer size
  - `maxResourceSize` <[integer]> Maximum per-resource size

For testing.

#### Network.setExtraHTTPHeaders()
- parameters
  - `headers` <Headers> Map with extra HTTP headers

Specifies whether to always send extra HTTP headers with the requests from this page.

#### Network.setRequestInterception()
- parameters
  - `patterns` array of <RequestPattern> Requests matching any of these patterns will be forwarded and wait for the corresponding
continueInterceptedRequest call

Sets the requests to intercept that match a the provided patterns and optionally resource types.

#### Network.setUserAgentOverride()
- parameters
  - `userAgent` <[string]> User agent to use

Allows overriding user agent with the given string.

#### event: Network.dataReceived
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `dataLength` <[integer]> Data chunk length
- `encodedDataLength` <[integer]> Actual bytes received (might be less than dataLength for compressed encodings)

Fired when data chunk was received over the network.

#### event: Network.eventSourceMessageReceived
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `eventName` <[string]> Message type
- `eventId` <[string]> Message identifier
- `data` <[string]> Message content

Fired when EventSource message is received.

#### event: Network.loadingFailed
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `type` <Page.ResourceType> Resource type
- `errorText` <[string]> User friendly error message
- `canceled` <[boolean]> True if loading was canceled
- `blockedReason` <BlockedReason> The reason why loading was blocked, if any

Fired when HTTP request has failed to load.

#### event: Network.loadingFinished
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `encodedDataLength` <[number]> Total number of bytes received for this request

Fired when HTTP request has finished loading.

#### event: Network.requestIntercepted
- `interceptionId` <InterceptionId> Each request the page makes will have a unique id, however if any redirects are encountered
while processing that fetch, they will be reported with the same id as the original fetch.
Likewise if HTTP authentication is needed then the same fetch id will be used
- `request` <Request> 
- `frameId` <Page.FrameId> The id of the frame that initiated the request
- `resourceType` <Page.ResourceType> How the requested resource will be used
- `isNavigationRequest` <[boolean]> Whether this is a navigation request, which can abort the navigation completely
- `redirectUrl` <[string]> Redirect location, only sent if a redirect was intercepted
- `authChallenge` <AuthChallenge> Details of the Authorization Challenge encountered. If this is set then
continueInterceptedRequest must contain an authChallengeResponse
- `responseErrorReason` <ErrorReason> Response error if intercepted at response stage or if redirect occurred while intercepting
request
- `responseStatusCode` <[integer]> Response code if intercepted at response stage or if redirect occurred while intercepting
request or auth retry occurred
- `responseHeaders` <Headers> Response headers if intercepted at the response stage or if redirect occurred while
intercepting request or auth retry occurred

Details of an intercepted HTTP request, which must be either allowed, blocked, modified or
mocked.

#### event: Network.requestServedFromCache
- `requestId` <RequestId> Request identifier

Fired if request ended up loading from cache.

#### event: Network.requestWillBeSent
- `requestId` <RequestId> Request identifier
- `loaderId` <LoaderId> Loader identifier. Empty string if the request is fetched from worker
- `documentURL` <[string]> URL of the document this request is loaded for
- `request` <Request> Request data
- `timestamp` <MonotonicTime> Timestamp
- `wallTime` <TimeSinceEpoch> Timestamp
- `initiator` <Initiator> Request initiator
- `redirectResponse` <Response> Redirect response data
- `type` <Page.ResourceType> Type of this resource
- `frameId` <Page.FrameId> Frame identifier

Fired when page is about to send HTTP request.

#### event: Network.resourceChangedPriority
- `requestId` <RequestId> Request identifier
- `newPriority` <ResourcePriority> New priority
- `timestamp` <MonotonicTime> Timestamp

Fired when resource loading priority is changed

#### event: Network.responseReceived
- `requestId` <RequestId> Request identifier
- `loaderId` <LoaderId> Loader identifier. Empty string if the request is fetched from worker
- `timestamp` <MonotonicTime> Timestamp
- `type` <Page.ResourceType> Resource type
- `response` <Response> Response data
- `frameId` <Page.FrameId> Frame identifier

Fired when HTTP response is available.

#### event: Network.webSocketClosed
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp

Fired when WebSocket is closed.

#### event: Network.webSocketCreated
- `requestId` <RequestId> Request identifier
- `url` <[string]> WebSocket request URL
- `initiator` <Initiator> Request initiator

Fired upon WebSocket creation.

#### event: Network.webSocketFrameError
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `errorMessage` <[string]> WebSocket frame error message

Fired when WebSocket frame error occurs.

#### event: Network.webSocketFrameReceived
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `response` <WebSocketFrame> WebSocket response data

Fired when WebSocket frame is received.

#### event: Network.webSocketFrameSent
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `response` <WebSocketFrame> WebSocket response data

Fired when WebSocket frame is sent.

#### event: Network.webSocketHandshakeResponseReceived
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `response` <WebSocketResponse> WebSocket response data

Fired when WebSocket handshake response becomes available.

#### event: Network.webSocketWillSendHandshakeRequest
- `requestId` <RequestId> Request identifier
- `timestamp` <MonotonicTime> Timestamp
- `wallTime` <TimeSinceEpoch> UTC Timestamp
- `request` <WebSocketRequest> WebSocket request data

Fired when WebSocket is about to initiate handshake.