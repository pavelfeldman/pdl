
### domain: Security

Security

#### Security.disable()

Disables tracking security state changes.

#### Security.enable()

Enables tracking security state changes.

#### Security.handleCertificateError()
- parameters
  - `eventId` <[integer]> The ID of the event
  - `action` <CertificateErrorAction> The action to take on the certificate error

Handles a certificate error that fired a certificateError event.

#### Security.setOverrideCertificateErrors()
- parameters
  - `override` <[boolean]> If true, certificate errors will be overridden

Enable/disable overriding certificate errors. If enabled, all certificate error events need to
be handled by the DevTools client and should be answered with handleCertificateError commands.

#### event: Security.certificateError
- `eventId` <[integer]> The ID of the event
- `errorType` <[string]> The type of the error
- `requestURL` <[string]> The url that was requested

There is a certificate error. If overriding certificate errors is enabled, then it should be
handled with the handleCertificateError command. Note: this event does not fire if the
certificate error has been allowed internally.

#### event: Security.securityStateChanged
- `securityState` <SecurityState> Security state
- `schemeIsCryptographic` <[boolean]> True if the page was loaded over cryptographic transport such as HTTPS
- `explanations` array of <SecurityStateExplanation> List of explanations for the security state. If the overall security state is `insecure` or
`warning`, at least one corresponding explanation should be included
- `insecureContentStatus` <InsecureContentStatus> Information about insecure content on the page
- `summary` <[string]> Overrides user-visible description of the state

The security state of the page changed.