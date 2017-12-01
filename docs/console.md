
### domain: Console 🍂

`Console` domain is deprecated. It was previously used for the `console.*` messages, errors and
warnings. You should now use `Runtime` domain for these instead.

---


#### command: Console.clearMessages

Does nothing.

---


#### command: Console.disable

Disables `Console` domain, prevents further console messages from being reported via
`Console.messageAdded`.

---


#### command: Console.enable

Enables `Console` domain, sends the messages collected so far to the client by means of the
`Console.messageAdded` notification.

---


#### event: Console.messageAdded

Issued when new console message is added.

*parameters*
-  `message` <[Console.ConsoleMessage]> Console message that has been added

---


#### type: Console.ConsoleMessage

Console message.

*base type*
- **object**

*properties*
-  `source` <[string]> Message source
-  `level` <[string]> Message severity
-  `text` <[string]> Message text
- *optional* `url` <[string]> URL of the message origin
- *optional* `line` <[integer]> Line number in the resource that generated this message (1-based)
- *optional* `column` <[integer]> Column number in the resource that generated this message (1-based)

*parameter in event*
- [Console.messageAdded]

[Console.messageAdded]: console.md#event-consolemessageadded "Console.messageAdded"
[Console.ConsoleMessage]: console.md#type-consoleconsolemessage "Console.ConsoleMessage"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"