
### domain: Database 🌱


#### type: Database.DatabaseId = string

Unique identifier of Database object.


#### type: Database.Database = object

Database object.

*properties*
-  `id` <[Database.DatabaseId]> Database ID
-  `domain` <[string]> Database domain
-  `name` <[string]> Database name
-  `version` <[string]> Database version


#### type: Database.Error = object

Database error.

*properties*
-  `message` <[string]> Error message
-  `code` <[integer]> Error code


#### command: Database.disable()

Disables database tracking, prevents database events from being sent to the client.


#### command: Database.enable()

Enables database tracking, database events will now be delivered to the client.


#### command: Database.executeSQL()

*parameters*
-  `databaseId` <[Database.DatabaseId]> 
-  `query` <[string]> 

*returns*
- *optional* `columnNames` <array of [string]> 
- *optional* `values` <array of [any]> 
- *optional* `sqlError` <[Database.Error]> 


#### command: Database.getDatabaseTableNames()

*parameters*
-  `databaseId` <[Database.DatabaseId]> 

*returns*
-  `tableNames` <array of [string]> 


#### event: Database.addDatabase

*parameters*
-  `database` <[Database.Database]> 

[Database.DatabaseId]: database.md#type-databasedatabaseid--string "Database.DatabaseId"
[Database.Error]: database.md#type-databaseerror--object "Database.Error"
[Database.Database]: database.md#type-databasedatabase--object "Database.Database"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"