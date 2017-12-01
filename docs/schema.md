
### domain: Schema 🍂

This domain is deprecated.

---


#### command: Schema.getDomains

Returns supported domains.

*returns*
-  `domains` <array of [Schema.Domain]> List of supported domains

---


#### type: Schema.Domain

Description of the protocol domain.

*base type*
- **object**

*properties*
-  `name` <[string]> Domain name
-  `version` <[string]> Domain version

*returned from command*
- [Schema.getDomains]

[Schema.getDomains]: schema.md#command-schemagetdomains "Schema.getDomains"
[Schema.Domain]: schema.md#type-schemadomain "Schema.Domain"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"