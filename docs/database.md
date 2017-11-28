
### domain: Database

#### type: Database.DatabaseId = string

Unique identifier of Database object.

#### type: Database.Database = object

Database object.

*properties*
  - `id` <[Database.DatabaseId]]> Database ID
  - `domain` <string]> Database domain
  - `name` <string]> Database name
  - `version` <string]> Database version

#### type: Database.Error = object

Database error.

*properties*
  - `message` <string]> Error message
  - `code` <integer]> Error code

#### command: Database.disable()

Disables database tracking, prevents database events from being sent to the client.

#### command: Database.enable()

Enables database tracking, database events will now be delivered to the client.

#### command: Database.executeSQL()

*parameters*
- `databaseId` <[Database.DatabaseId]]> 
- `query` <string]> 

*returns*
- `columnNames` <array of string> 
- `values` <array of any> 
- `sqlError` <[Database.Error]]> 

#### command: Database.getDatabaseTableNames()

*parameters*
- `databaseId` <[Database.DatabaseId]]> 

*returns*
- `tableNames` <array of string> 

#### event: Database.addDatabase

*returns*
- `database` <[Database.Database]]> 

[Database.DatabaseId]: database.md#databasedatabaseid
[Database.Error]: database.md#databaseerror
[Database.Database]: database.md#databasedatabase