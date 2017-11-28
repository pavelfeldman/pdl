
### domain: Network

Network domain allows tracking network activities of the page. It exposes information about http,
file, data and other requests and responses, their headers, bodies, timing, etc.

#### type: Network.LoaderId = string

Unique loader identifier.

#### type: Network.RequestId = string

Unique request identifier.

#### type: Network.InterceptionId = string

Unique intercepted request identifier.

#### type: Network.ErrorReason = string

Network level fetch failure reason.

#### type: Network.TimeSinceEpoch = number

UTC time in seconds, counted from January 1, 1970.

#### type: Network.MonotonicTime = number

Monotonically increasing time in seconds since an arbitrary point in the past.

#### type: Network.Headers = object

Request / response headers as keys / values of JSON object.

#### type: Network.ConnectionType = string

The underlying connection technology that the browser is supposedly using.

#### type: Network.CookieSameSite = string

Represents the cookie's 'SameSite' status:
https://tools.ietf.org/html/draft-west-first-party-cookies

#### type: Network.ResourceTiming = object

Timing information for the request.

*properties*
  - `requestTime` <number]> Timing's requestTime is a baseline in seconds, while the other numbers are ticks in
milliseconds relatively to this requestTime
  - `proxyStart` <number]> Started resolving proxy
  - `proxyEnd` <number]> Finished resolving proxy
  - `dnsStart` <number]> Started DNS address resolve
  - `dnsEnd` <number]> Finished DNS address resolve
  - `connectStart` <number]> Started connecting to the remote host
  - `connectEnd` <number]> Connected to the remote host
  - `sslStart` <number]> Started SSL handshake
  - `sslEnd` <number]> Finished SSL handshake
  - `workerStart` <number]> Started running ServiceWorker
  - `workerReady` <number]> Finished Starting ServiceWorker
  - `sendStart` <number]> Started sending request
  - `sendEnd` <number]> Finished sending request
  - `pushStart` <number]> Time the server started pushing request
  - `pushEnd` <number]> Time the server finished pushing request
  - `receiveHeadersEnd` <number]> Finished receiving response headers

#### type: Network.ResourcePriority = string

Loading priority of a resource request.

#### type: Network.Request = object

HTTP request data.

*properties*
  - `url` <string]> Request URL
  - `method` <string]> HTTP request method
  - `headers` <[Network.Headers]]> HTTP request headers
  - `postData` <string]> HTTP POST request data
  - `mixedContentType` <[Security.MixedContentType]]> The mixed content type of the request
  - `initialPriority` <[Network.ResourcePriority]]> Priority of the resource request at the time request is sent
  - `referrerPolicy` <string]> The referrer policy of the request, as defined in https://www.w3.org/TR/referrer-policy/
  - `isLinkPreload` <boolean]> Whether is loaded via link preload

#### type: Network.SignedCertificateTimestamp = object

Details of a signed certificate timestamp (SCT).

*properties*
  - `status` <string]> Validation status
  - `origin` <string]> Origin
  - `logDescription` <string]> Log name / description
  - `logId` <string]> Log ID
  - `timestamp` <[Network.TimeSinceEpoch]]> Issuance date
  - `hashAlgorithm` <string]> Hash algorithm
  - `signatureAlgorithm` <string]> Signature algorithm
  - `signatureData` <string]> Signature data

#### type: Network.SecurityDetails = object

Security details about a request.

*properties*
  - `protocol` <string]> Protocol name (e.g. "TLS 1.2" or "QUIC")
  - `keyExchange` <string]> Key Exchange used by the connection, or the empty string if not applicable
  - `keyExchangeGroup` <string]> (EC)DH group used by the connection, if applicable
  - `cipher` <string]> Cipher name
  - `mac` <string]> TLS MAC. Note that AEAD ciphers do not have separate MACs
  - `certificateId` <[Security.CertificateId]]> Certificate ID value
  - `subjectName` <string]> Certificate subject name
  - `sanList` <array of string> Subject Alternative Name (SAN) DNS names and IP addresses
  - `issuer` <string]> Name of the issuing CA
  - `validFrom` <[Network.TimeSinceEpoch]]> Certificate valid from date
  - `validTo` <[Network.TimeSinceEpoch]]> Certificate valid to (expiration) date
  - `signedCertificateTimestampList` <array of [Network.SignedCertificateTimestamp]> List of signed certificate timestamps (SCTs)

#### type: Network.BlockedReason = string

The reason why request was blocked.

#### type: Network.Response = object

HTTP response data.

*properties*
  - `url` <string]> Response URL. This URL can be different from CachedResource.url in case of redirect
  - `status` <integer]> HTTP response status code
  - `statusText` <string]> HTTP response status text
  - `headers` <[Network.Headers]]> HTTP response headers
  - `headersText` <string]> HTTP response headers text
  - `mimeType` <string]> Resource mimeType as determined by the browser
  - `requestHeaders` <[Network.Headers]]> Refined HTTP request headers that were actually transmitted over the network
  - `requestHeadersText` <string]> HTTP request headers text
  - `connectionReused` <boolean]> Specifies whether physical connection was actually reused for this request
  - `connectionId` <number]> Physical connection id that was actually used for this request
  - `remoteIPAddress` <string]> Remote IP address
  - `remotePort` <integer]> Remote port
  - `fromDiskCache` <boolean]> Specifies that the request was served from the disk cache
  - `fromServiceWorker` <boolean]> Specifies that the request was served from the ServiceWorker
  - `encodedDataLength` <number]> Total number of bytes received for this request so far
  - `timing` <[Network.ResourceTiming]]> Timing information for the given request
  - `protocol` <string]> Protocol used to fetch this request
  - `securityState` <[Security.SecurityState]]> Security state of the request resource
  - `securityDetails` <[Network.SecurityDetails]]> Security details for the request

#### type: Network.WebSocketRequest = object

WebSocket request data.

*properties*
  - `headers` <[Network.Headers]]> HTTP request headers

#### type: Network.WebSocketResponse = object

WebSocket response data.

*properties*
  - `status` <integer]> HTTP response status code
  - `statusText` <string]> HTTP response status text
  - `headers` <[Network.Headers]]> HTTP response headers
  - `headersText` <string]> HTTP response headers text
  - `requestHeaders` <[Network.Headers]]> HTTP request headers
  - `requestHeadersText` <string]> HTTP request headers text

#### type: Network.WebSocketFrame = object

WebSocket frame data.

*properties*
  - `opcode` <number]> WebSocket frame opcode
  - `mask` <boolean]> WebSocke frame mask
  - `payloadData` <string]> WebSocke frame payload data

#### type: Network.CachedResource = object

Information about the cached resource.

*properties*
  - `url` <string]> Resource URL. This is the url of the original network request
  - `type` <[Page.ResourceType]]> Type of this resource
  - `response` <[Network.Response]]> Cached response data
  - `bodySize` <number]> Cached response body size

#### type: Network.Initiator = object

Information about the request initiator.

*properties*
  - `type` <string]> Type of this initiator
  - `stack` <[Runtime.StackTrace]]> Initiator JavaScript stack trace, set for Script only
  - `url` <string]> Initiator URL, set for Parser type or for Script type (when script is importing module)
  - `lineNumber` <number]> Initiator line number, set for Parser type or for Script type (when script is importing
module) (0-based)

#### type: Network.Cookie = object

Cookie object

*properties*
  - `name` <string]> Cookie name
  - `value` <string]> Cookie value
  - `domain` <string]> Cookie domain
  - `path` <string]> Cookie path
  - `expires` <number]> Cookie expiration date as the number of seconds since the UNIX epoch
  - `size` <integer]> Cookie size
  - `httpOnly` <boolean]> True if cookie is http-only
  - `secure` <boolean]> True if cookie is secure
  - `session` <boolean]> True in case of session cookie
  - `sameSite` <[Network.CookieSameSite]]> Cookie SameSite type

#### type: Network.CookieParam = object

Cookie parameter object

*properties*
  - `name` <string]> Cookie name
  - `value` <string]> Cookie value
  - `url` <string]> The request-URI to associate with the setting of the cookie. This value can affect the
default domain and path values of the created cookie
  - `domain` <string]> Cookie domain
  - `path` <string]> Cookie path
  - `secure` <boolean]> True if cookie is secure
  - `httpOnly` <boolean]> True if cookie is http-only
  - `sameSite` <[Network.CookieSameSite]]> Cookie SameSite type
  - `expires` <[Network.TimeSinceEpoch]]> Cookie expiration date, session cookie if not set

#### type: Network.AuthChallenge = object

Authorization challenge for HTTP status code 401 or 407.

*properties*
  - `source` <string]> Source of the authentication challenge
  - `origin` <string]> Origin of the challenger
  - `scheme` <string]> The authentication scheme used, such as basic or digest
  - `realm` <string]> The realm of the challenge. May be empty

#### type: Network.AuthChallengeResponse = object

Response to an AuthChallenge.

*properties*
  - `response` <string]> The decision on what to do in response to the authorization challenge.  Default means
deferring to the default behavior of the net stack, which will likely either the Cancel
authentication or display a popup dialog box
  - `username` <string]> The username to provide, possibly empty. Should only be set if response is
ProvideCredentials
  - `password` <string]> The password to provide, possibly empty. Should only be set if response is
ProvideCredentials

#### type: Network.InterceptionStage = string

Stages of the interception to begin intercepting. Request will intercept before the request is
sent. Response will intercept after the response is received.

#### type: Network.RequestPattern = object

Request pattern for interception.

*properties*
  - `urlPattern` <string]> Wildcards ('*' -> zero or more, '?' -> exactly one) are allowed. Escape character is
backslash. Omitting is equivalent to "*"
  - `resourceType` <[Page.ResourceType]]> If set, only requests for matching resource types will be intercepted
  - `interceptionStage` <[Network.InterceptionStage]]> Stage at wich to begin intercepting requests. Default is Request

#### command: Network.canClearBrowserCache()

Tells whether clearing browser cache is supported.

*returns*
- `result` <boolean]> True if browser cache can be cleared

#### command: Network.canClearBrowserCookies()

Tells whether clearing browser cookies is supported.

*returns*
- `result` <boolean]> True if browser cookies can be cleared

#### command: Network.canEmulateNetworkConditions()

Tells whether emulation of network conditions is supported.

*returns*
- `result` <boolean]> True if emulation of network conditions is supported

#### command: Network.clearBrowserCache()

Clears browser cache.

#### command: Network.clearBrowserCookies()

Clears browser cookies.

#### command: Network.continueInterceptedRequest()

Response to Network.requestIntercepted which either modifies the request to continue with any
modifications, or blocks it, or completes it with the provided response bytes. If a network
fetch occurs as a result which encounters a redirect an additional Network.requestIntercepted
event will be sent with the same InterceptionId.

*parameters*
- `interceptionId` <[Network.InterceptionId]]> 
- `errorReason` <[Network.ErrorReason]]> If set this causes the request to fail with the given reason. Passing `Aborted` for requests
marked with `isNavigationRequest` also cancels the navigation. Must not be set in response
to an authChallenge
- `rawResponse` <string]> If set the requests completes using with the provided base64 encoded raw response, including
HTTP status line and headers etc... Must not be set in response to an authChallenge
- `url` <string]> If set the request url will be modified in a way that's not observable by page. Must not be
set in response to an authChallenge
- `method` <string]> If set this allows the request method to be overridden. Must not be set in response to an
authChallenge
- `postData` <string]> If set this allows postData to be set. Must not be set in response to an authChallenge
- `headers` <[Network.Headers]]> If set this allows the request headers to be changed. Must not be set in response to an
authChallenge
- `authChallengeResponse` <[Network.AuthChallengeResponse]]> Response to a requestIntercepted with an authChallenge. Must not be set otherwise

#### command: Network.deleteCookies()

Deletes browser cookies with matching name and url or domain/path pair.

*parameters*
- `name` <string]> Name of the cookies to remove
- `url` <string]> If specified, deletes all the cookies with the given name where domain and path match
provided URL
- `domain` <string]> If specified, deletes only cookies with the exact domain
- `path` <string]> If specified, deletes only cookies with the exact path

#### command: Network.disable()

Disables network tracking, prevents network events from being sent to the client.

#### command: Network.emulateNetworkConditions()

Activates emulation of network conditions.

*parameters*
- `offline` <boolean]> True to emulate internet disconnection
- `latency` <number]> Minimum latency from request sent to response headers received (ms)
- `downloadThroughput` <number]> Maximal aggregated download throughput (bytes/sec). -1 disables download throttling
- `uploadThroughput` <number]> Maximal aggregated upload throughput (bytes/sec).  -1 disables upload throttling
- `connectionType` <[Network.ConnectionType]]> Connection type if known

#### command: Network.enable()

Enables network tracking, network events will now be delivered to the client.

*parameters*
- `maxTotalBufferSize` <integer]> Buffer size in bytes to use when preserving network payloads (XHRs, etc)
- `maxResourceBufferSize` <integer]> Per-resource buffer size in bytes to use when preserving network payloads (XHRs, etc)

#### command: Network.getAllCookies()

Returns all browser cookies. Depending on the backend support, will return detailed cookie
information in the `cookies` field.

*returns*
- `cookies` <array of [Network.Cookie]> Array of cookie objects

#### command: Network.getCertificate()

Returns the DER-encoded certificate.

*parameters*
- `origin` <string]> Origin to get certificate for

*returns*
- `tableNames` <array of string> 

#### command: Network.getCookies()

Returns all browser cookies for the current URL. Depending on the backend support, will return
detailed cookie information in the `cookies` field.

*parameters*
- `urls` <array of string> The list of URLs for which applicable cookies will be fetched

*returns*
- `cookies` <array of [Network.Cookie]> Array of cookie objects

#### command: Network.getResponseBody()

Returns content served for the given request.

*parameters*
- `requestId` <[Network.RequestId]]> Identifier of the network request to get content for

*returns*
- `body` <string]> Response body
- `base64Encoded` <boolean]> True, if content was sent as base64

#### command: Network.getResponseBodyForInterception()

Returns content served for the given currently intercepted request.

*parameters*
- `interceptionId` <[Network.InterceptionId]]> Identifier for the intercepted request to get body for

*returns*
- `body` <string]> Response body
- `base64Encoded` <boolean]> True, if content was sent as base64

#### command: Network.replayXHR()

This method sends a new XMLHttpRequest which is identical to the original one. The following
parameters should be identical: method, url, async, request body, extra headers, withCredentials
attribute, user, password.

*parameters*
- `requestId` <[Network.RequestId]]> Identifier of XHR to replay

#### command: Network.searchInResponseBody()

Searches for given string in response content.

*parameters*
- `requestId` <[Network.RequestId]]> Identifier of the network response to search
- `query` <string]> String to search for
- `caseSensitive` <boolean]> If true, search is case sensitive
- `isRegex` <boolean]> If true, treats string parameter as regex

*returns*
- `result` <array of [Debugger.SearchMatch]> List of search matches

#### command: Network.setBlockedURLs()

Blocks URLs from loading.

*parameters*
- `urls` <array of string> URL patterns to block. Wildcards ('*') are allowed

#### command: Network.setBypassServiceWorker()

Toggles ignoring of service worker for each request.

*parameters*
- `bypass` <boolean]> Bypass service worker and load from network

#### command: Network.setCacheDisabled()

Toggles ignoring cache for each request. If `true`, cache will not be used.

*parameters*
- `cacheDisabled` <boolean]> Cache disabled state

#### command: Network.setCookie()

Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.

*parameters*
- `name` <string]> Cookie name
- `value` <string]> Cookie value
- `url` <string]> The request-URI to associate with the setting of the cookie. This value can affect the
default domain and path values of the created cookie
- `domain` <string]> Cookie domain
- `path` <string]> Cookie path
- `secure` <boolean]> True if cookie is secure
- `httpOnly` <boolean]> True if cookie is http-only
- `sameSite` <[Network.CookieSameSite]]> Cookie SameSite type
- `expires` <[Network.TimeSinceEpoch]]> Cookie expiration date, session cookie if not set

*returns*
- `success` <boolean]> True if successfully set cookie

#### command: Network.setCookies()

Sets given cookies.

*parameters*
- `cookies` <array of [Network.CookieParam]> Cookies to be set

#### command: Network.setDataSizeLimitsForTest()

For testing.

*parameters*
- `maxTotalSize` <integer]> Maximum total buffer size
- `maxResourceSize` <integer]> Maximum per-resource size

#### command: Network.setExtraHTTPHeaders()

Specifies whether to always send extra HTTP headers with the requests from this page.

*parameters*
- `headers` <[Network.Headers]]> Map with extra HTTP headers

#### command: Network.setRequestInterception()

Sets the requests to intercept that match a the provided patterns and optionally resource types.

*parameters*
- `patterns` <array of [Network.RequestPattern]> Requests matching any of these patterns will be forwarded and wait for the corresponding
continueInterceptedRequest call

#### command: Network.setUserAgentOverride()

Allows overriding user agent with the given string.

*parameters*
- `userAgent` <string]> User agent to use

#### event: Network.dataReceived

Fired when data chunk was received over the network.

*returns*
- `requestId` <[Network.RequestId]]> Request identifier
- `timestamp` <[Network.MonotonicTime]]> Timestamp
- `dataLength` <integer]> Data chunk length
- `encodedDataLength` <integer]> Actual bytes received (might be less than dataLength for compressed encodings)

#### event: Network.eventSourceMessageReceived

Fired when EventSource message is received.

*returns*
- `requestId` <[Network.RequestId]]> Request identifier
- `timestamp` <[Network.MonotonicTime]]> Timestamp
- `eventName` <string]> Message type
- `eventId` <string]> Message identifier
- `data` <string]> Message content

#### event: Network.loadingFailed

Fired when HTTP request has failed to load.

*returns*
- `requestId` <[Network.RequestId]]> Request identifier
- `timestamp` <[Network.MonotonicTime]]> Timestamp
- `type` <[Page.ResourceType]]> Resource type
- `errorText` <string]> User friendly error message
- `canceled` <boolean]> True if loading was canceled
- `blockedReason` <[Network.BlockedReason]]> The reason why loading was blocked, if any

#### event: Network.loadingFinished

Fired when HTTP request has finished loading.

*returns*
- `requestId` <[Network.RequestId]]> Request identifier
- `timestamp` <[Network.MonotonicTime]]> Timestamp
- `encodedDataLength` <number]> Total number of bytes received for this request

#### event: Network.requestIntercepted

Details of an intercepted HTTP request, which must be either allowed, blocked, modified or
mocked.

*returns*
- `interceptionId` <[Network.InterceptionId]]> Each request the page makes will have a unique id, however if any redirects are encountered
while processing that fetch, they will be reported with the same id as the original fetch.
Likewise if HTTP authentication is needed then the same fetch id will be used
- `request` <[Network.Request]]> 
- `frameId` <[Page.FrameId]]> The id of the frame that initiated the request
- `resourceType` <[Page.ResourceType]]> How the requested resource will be used
- `isNavigationRequest` <boolean]> Whether this is a navigation request, which can abort the navigation completely
- `redirectUrl` <string]> Redirect location, only sent if a redirect was intercepted
- `authChallenge` <[Network.AuthChallenge]]> Details of the Authorization Challenge encountered. If this is set then
continueInterceptedRequest must contain an authChallengeResponse
- `responseErrorReason` <[Network.ErrorReason]]> Response error if intercepted at response stage or if redirect occurred while intercepting
request
- `responseStatusCode` <integer]> Response code if intercepted at response stage or if redirect occurred while intercepting
request or auth retry occurred
- `responseHeaders` <[Network.Headers]]> Response headers if intercepted at the response stage or if redirect occurred while
intercepting request or auth retry occurred

#### event: Network.requestServedFromCache

Fired if request ended up loading from cache.

*returns*
- `requestId` <[Network.RequestId]]> Request identifier

#### event: Network.requestWillBeSent

Fired when page is about to send HTTP request.

*returns*
- `requestId` <[Network.RequestId]]> Request identifier
- `loaderId` <[Network.LoaderId]]> Loader identifier. Empty string if the request is fetched from worker
- `documentURL` <string]> URL of the document this request is loaded for
- `request` <[Network.Request]]> Request data
- `timestamp` <[Network.MonotonicTime]]> Timestamp
- `wallTime` <[Network.TimeSinceEpoch]]> Timestamp
- `initiator` <[Network.Initiator]]> Request initiator
- `redirectResponse` <[Network.Response]]> Redirect response data
- `type` <[Page.ResourceType]]> Type of this resource
- `frameId` <[Page.FrameId]]> Frame identifier

#### event: Network.resourceChangedPriority

Fired when resource loading priority is changed

*returns*
- `requestId` <[Network.RequestId]]> Request identifier
- `newPriority` <[Network.ResourcePriority]]> New priority
- `timestamp` <[Network.MonotonicTime]]> Timestamp

#### event: Network.responseReceived

Fired when HTTP response is available.

*returns*
- `requestId` <[Network.RequestId]]> Request identifier
- `loaderId` <[Network.LoaderId]]> Loader identifier. Empty string if the request is fetched from worker
- `timestamp` <[Network.MonotonicTime]]> Timestamp
- `type` <[Page.ResourceType]]> Resource type
- `response` <[Network.Response]]> Response data
- `frameId` <[Page.FrameId]]> Frame identifier

#### event: Network.webSocketClosed

Fired when WebSocket is closed.

*returns*
- `requestId` <[Network.RequestId]]> Request identifier
- `timestamp` <[Network.MonotonicTime]]> Timestamp

#### event: Network.webSocketCreated

Fired upon WebSocket creation.

*returns*
- `requestId` <[Network.RequestId]]> Request identifier
- `url` <string]> WebSocket request URL
- `initiator` <[Network.Initiator]]> Request initiator

#### event: Network.webSocketFrameError

Fired when WebSocket frame error occurs.

*returns*
- `requestId` <[Network.RequestId]]> Request identifier
- `timestamp` <[Network.MonotonicTime]]> Timestamp
- `errorMessage` <string]> WebSocket frame error message

#### event: Network.webSocketFrameReceived

Fired when WebSocket frame is received.

*returns*
- `requestId` <[Network.RequestId]]> Request identifier
- `timestamp` <[Network.MonotonicTime]]> Timestamp
- `response` <[Network.WebSocketFrame]]> WebSocket response data

#### event: Network.webSocketFrameSent

Fired when WebSocket frame is sent.

*returns*
- `requestId` <[Network.RequestId]]> Request identifier
- `timestamp` <[Network.MonotonicTime]]> Timestamp
- `response` <[Network.WebSocketFrame]]> WebSocket response data

#### event: Network.webSocketHandshakeResponseReceived

Fired when WebSocket handshake response becomes available.

*returns*
- `requestId` <[Network.RequestId]]> Request identifier
- `timestamp` <[Network.MonotonicTime]]> Timestamp
- `response` <[Network.WebSocketResponse]]> WebSocket response data

#### event: Network.webSocketWillSendHandshakeRequest

Fired when WebSocket is about to initiate handshake.

*returns*
- `requestId` <[Network.RequestId]]> Request identifier
- `timestamp` <[Network.MonotonicTime]]> Timestamp
- `wallTime` <[Network.TimeSinceEpoch]]> UTC Timestamp
- `request` <[Network.WebSocketRequest]]> WebSocket request data

[Network.Headers]: network.md#networkheaders
[Security.MixedContentType]: network.md#securitymixedcontenttype
[Network.ResourcePriority]: network.md#networkresourcepriority
[Network.TimeSinceEpoch]: network.md#networktimesinceepoch
[Security.CertificateId]: network.md#securitycertificateid
[Network.SignedCertificateTimestamp]: network.md#networksignedcertificatetimestamp
[Network.ResourceTiming]: network.md#networkresourcetiming
[Security.SecurityState]: network.md#securitysecuritystate
[Network.SecurityDetails]: network.md#networksecuritydetails
[Page.ResourceType]: network.md#pageresourcetype
[Network.Response]: network.md#networkresponse
[Runtime.StackTrace]: network.md#runtimestacktrace
[Network.CookieSameSite]: network.md#networkcookiesamesite
[Network.InterceptionStage]: network.md#networkinterceptionstage
[Network.InterceptionId]: network.md#networkinterceptionid
[Network.ErrorReason]: network.md#networkerrorreason
[Network.AuthChallengeResponse]: network.md#networkauthchallengeresponse
[Network.ConnectionType]: network.md#networkconnectiontype
[Network.Cookie]: network.md#networkcookie
[Network.RequestId]: network.md#networkrequestid
[Debugger.SearchMatch]: network.md#debuggersearchmatch
[Network.CookieParam]: network.md#networkcookieparam
[Network.RequestPattern]: network.md#networkrequestpattern
[Network.MonotonicTime]: network.md#networkmonotonictime
[Network.BlockedReason]: network.md#networkblockedreason
[Network.Request]: network.md#networkrequest
[Page.FrameId]: network.md#pageframeid
[Network.AuthChallenge]: network.md#networkauthchallenge
[Network.LoaderId]: network.md#networkloaderid
[Network.Initiator]: network.md#networkinitiator
[Network.WebSocketFrame]: network.md#networkwebsocketframe
[Network.WebSocketResponse]: network.md#networkwebsocketresponse
[Network.WebSocketRequest]: network.md#networkwebsocketrequest