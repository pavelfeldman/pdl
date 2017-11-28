
### domain: Database

#### Database.disable()

Disables database tracking, prevents database events from being sent to the client.

#### Database.enable()

Enables database tracking, database events will now be delivered to the client.

#### Database.executeSQL()
- parameters
  - `databaseId` <DatabaseId> 
  - `query` <[string]> 
- returns
  - `columnNames` array of <[string]> 
  - `values` array of <[any]> 
  - `sqlError` <Error> 

#### Database.getDatabaseTableNames()
- parameters
  - `databaseId` <DatabaseId> 
- returns
  - `tableNames` array of <[string]> 

#### event: Database.addDatabase
- `database` <Database> 