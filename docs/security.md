
### domain: Security

Security

---


#### command: Security.disable

Disables tracking security state changes.

---


#### command: Security.enable

Enables tracking security state changes.

---


#### command: Security.handleCertificateError

Handles a certificate error that fired a certificateError event.

*parameters*
-  `eventId` <[integer]> The ID of the event
-  `action` <[Security.CertificateErrorAction]> The action to take on the certificate error

---


#### command: Security.setOverrideCertificateErrors

Enable/disable overriding certificate errors. If enabled, all certificate error events need to
be handled by the DevTools client and should be answered with handleCertificateError commands.

*parameters*
-  `override` <[boolean]> If true, certificate errors will be overridden

---


#### event: Security.certificateError

There is a certificate error. If overriding certificate errors is enabled, then it should be
handled with the handleCertificateError command. Note: this event does not fire if the
certificate error has been allowed internally.

*parameters*
-  `eventId` <[integer]> The ID of the event
-  `errorType` <[string]> The type of the error
-  `requestURL` <[string]> The url that was requested

---


#### event: Security.securityStateChanged

The security state of the page changed.

*parameters*
-  `securityState` <[Security.SecurityState]> Security state
-  `schemeIsCryptographic` <[boolean]> True if the page was loaded over cryptographic transport such as HTTPS
-  `explanations` <array of [Security.SecurityStateExplanation]> List of explanations for the security state. If the overall security state is `insecure` or
`warning`, at least one corresponding explanation should be included
-  `insecureContentStatus` <[Security.InsecureContentStatus]> Information about insecure content on the page
- *optional* `summary` <[string]> Overrides user-visible description of the state

---


#### type: Security.CertificateId

An internal certificate ID value.

*base type*
- **integer**

*property of type*
- [Network.SecurityDetails]

---


#### type: Security.MixedContentType

A description of mixed content (HTTP resources on HTTPS pages), as defined by
https://www.w3.org/TR/mixed-content/#categories

*base type*
- **string**

*property of type*
- [Network.Request]
- [Security.SecurityStateExplanation]

---


#### type: Security.SecurityState

The security level of a page or resource.

*base type*
- **string**

*property of type*
- [Security.InsecureContentStatus]
- [Network.Response]
- [Security.SecurityStateExplanation]

*parameter in event*
- [Security.securityStateChanged]

---


#### type: Security.SecurityStateExplanation

An explanation of an factor contributing to the security state.

*base type*
- **object**

*properties*
-  `securityState` <[Security.SecurityState]> Security state representing the severity of the factor being explained
-  `summary` <[string]> Short phrase describing the type of factor
-  `description` <[string]> Full text explanation of the factor
-  `mixedContentType` <[Security.MixedContentType]> The type of mixed content described by the explanation
-  `certificate` <array of [string]> Page certificate

*parameter in event*
- [Security.securityStateChanged]

---


#### type: Security.InsecureContentStatus

Information about insecure content on the page.

*base type*
- **object**

*properties*
-  `ranMixedContent` <[boolean]> True if the page was loaded over HTTPS and ran mixed (HTTP) content such as scripts
-  `displayedMixedContent` <[boolean]> True if the page was loaded over HTTPS and displayed mixed (HTTP) content such as images
-  `containedMixedForm` <[boolean]> True if the page was loaded over HTTPS and contained a form targeting an insecure url
-  `ranContentWithCertErrors` <[boolean]> True if the page was loaded over HTTPS without certificate errors, and ran content such as
scripts that were loaded with certificate errors
-  `displayedContentWithCertErrors` <[boolean]> True if the page was loaded over HTTPS without certificate errors, and displayed content
such as images that were loaded with certificate errors
-  `ranInsecureContentStyle` <[Security.SecurityState]> Security state representing a page that ran insecure content
-  `displayedInsecureContentStyle` <[Security.SecurityState]> Security state representing a page that displayed insecure content

*parameter in event*
- [Security.securityStateChanged]

---


#### type: Security.CertificateErrorAction

The action to take when a certificate error occurs. continue will continue processing the
request and cancel will cancel the request.

*base type*
- **string**

*accepted by command*
- [Security.handleCertificateError]

[Network.SecurityDetails]: network.md#type-networksecuritydetails "Network.SecurityDetails"
[Network.Request]: network.md#type-networkrequest "Network.Request"
[Security.SecurityStateExplanation]: security.md#type-securitysecuritystateexplanation "Security.SecurityStateExplanation"
[Security.InsecureContentStatus]: security.md#type-securityinsecurecontentstatus "Security.InsecureContentStatus"
[Network.Response]: network.md#type-networkresponse "Network.Response"
[Security.SecurityStateExplanation]: security.md#type-securitysecuritystateexplanation "Security.SecurityStateExplanation"
[Security.securityStateChanged]: security.md#event-securitysecuritystatechanged "Security.securityStateChanged"
[Security.securityStateChanged]: security.md#event-securitysecuritystatechanged "Security.securityStateChanged"
[Security.securityStateChanged]: security.md#event-securitysecuritystatechanged "Security.securityStateChanged"
[Security.handleCertificateError]: security.md#command-securityhandlecertificateerror "Security.handleCertificateError"
[Security.SecurityState]: security.md#type-securitysecuritystate "Security.SecurityState"
[Security.MixedContentType]: security.md#type-securitymixedcontenttype "Security.MixedContentType"
[Security.SecurityState]: security.md#type-securitysecuritystate "Security.SecurityState"
[Security.CertificateErrorAction]: security.md#type-securitycertificateerroraction "Security.CertificateErrorAction"
[Security.SecurityState]: security.md#type-securitysecuritystate "Security.SecurityState"
[Security.SecurityStateExplanation]: security.md#type-securitysecuritystateexplanation "Security.SecurityStateExplanation"
[Security.InsecureContentStatus]: security.md#type-securityinsecurecontentstatus "Security.InsecureContentStatus"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"