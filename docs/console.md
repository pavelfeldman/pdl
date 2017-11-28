
### domain: Console

This domain is deprecated - use Runtime or Log instead.

#### Console.clearMessages()

Does nothing.

#### Console.disable()

Disables console domain, prevents further console messages from being reported to the client.

#### Console.enable()

Enables console domain, sends the messages collected so far to the client by means of the
`messageAdded` notification.

#### event: Console.messageAdded
- `message` <ConsoleMessage> Console message that has been added

Issued when new console message is added.