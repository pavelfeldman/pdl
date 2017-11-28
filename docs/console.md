
### domain: Console

This domain is deprecated - use Runtime or Log instead.

#### type: Console.ConsoleMessage = object

Console message.

*properties*
  - `source` <string]> Message source
  - `level` <string]> Message severity
  - `text` <string]> Message text
  - `url` <string]> URL of the message origin
  - `line` <integer]> Line number in the resource that generated this message (1-based)
  - `column` <integer]> Column number in the resource that generated this message (1-based)

#### command: Console.clearMessages()

Does nothing.

#### command: Console.disable()

Disables console domain, prevents further console messages from being reported to the client.

#### command: Console.enable()

Enables console domain, sends the messages collected so far to the client by means of the
`messageAdded` notification.

#### event: Console.messageAdded

Issued when new console message is added.

*returns*
- `message` <[Console.ConsoleMessage]]> Console message that has been added

[Console.ConsoleMessage]: console.md#consoleconsolemessage