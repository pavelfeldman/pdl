
### domain: Console 🍂

This domain is deprecated - use Runtime or Log instead.

---


#### command: Console.clearMessages

Does nothing.

---


#### command: Console.disable

Disables console domain, prevents further console messages from being reported to the client.

---


#### command: Console.enable

Enables console domain, sends the messages collected so far to the client by means of the
`messageAdded` notification.

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