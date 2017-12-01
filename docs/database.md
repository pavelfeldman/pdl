
### domain: Database 🌱

---


#### command: Database.disable

Disables database tracking, prevents database events from being sent to the client.

---


#### command: Database.enable

Enables database tracking, database events will now be delivered to the client.

---


#### command: Database.executeSQL

*parameters*
-  `databaseId` <[Database.DatabaseId]> 
-  `query` <[string]> 

*returns*
- *optional* `columnNames` <array of [string]> 
- *optional* `values` <array of [any]> 
- *optional* `sqlError` <[Database.Error]> 

---


#### command: Database.getDatabaseTableNames

*parameters*
-  `databaseId` <[Database.DatabaseId]> 

*returns*
-  `tableNames` <array of [string]> 

---


#### event: Database.addDatabase

*parameters*
-  `database` <[Database.Database]> 

---


#### type: Database.DatabaseId

Unique identifier of Database object.

*base type*
- **string**

*property of type*
- [Database.Database]

*accepted by command*
- [Database.executeSQL]
- [Database.getDatabaseTableNames]

---


#### type: Database.Database

Database object.

*base type*
- **object**

*properties*
-  `id` <[Database.DatabaseId]> Database ID
-  `domain` <[string]> Database domain
-  `name` <[string]> Database name
-  `version` <[string]> Database version

*parameter in event*
- [Database.addDatabase]

---


#### type: Database.Error

Database error.

*base type*
- **object**

*properties*
-  `message` <[string]> Error message
-  `code` <[integer]> Error code

*returned from command*
- [Database.executeSQL]

[Database.Database]: database.md#type-databasedatabase "Database.Database"
[Database.executeSQL]: database.md#command-databaseexecutesql "Database.executeSQL"
[Database.getDatabaseTableNames]: database.md#command-databasegetdatabasetablenames "Database.getDatabaseTableNames"
[Database.addDatabase]: database.md#event-databaseadddatabase "Database.addDatabase"
[Database.executeSQL]: database.md#command-databaseexecutesql "Database.executeSQL"
[Database.DatabaseId]: database.md#type-databasedatabaseid "Database.DatabaseId"
[Database.DatabaseId]: database.md#type-databasedatabaseid "Database.DatabaseId"
[Database.Error]: database.md#type-databaseerror "Database.Error"
[Database.DatabaseId]: database.md#type-databasedatabaseid "Database.DatabaseId"
[Database.Database]: database.md#type-databasedatabase "Database.Database"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"