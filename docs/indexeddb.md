
### domain: IndexedDB

#### IndexedDB.clearObjectStore()
- parameters
  - `securityOrigin` <[string]> Security origin
  - `databaseName` <[string]> Database name
  - `objectStoreName` <[string]> Object store name

Clears all entries from an object store.

#### IndexedDB.deleteDatabase()
- parameters
  - `securityOrigin` <[string]> Security origin
  - `databaseName` <[string]> Database name

Deletes a database.

#### IndexedDB.disable()

Disables events from backend.

#### IndexedDB.enable()

Enables events from backend.

#### IndexedDB.requestData()
- parameters
  - `securityOrigin` <[string]> Security origin
  - `databaseName` <[string]> Database name
  - `objectStoreName` <[string]> Object store name
  - `indexName` <[string]> Index name, empty string for object store data requests
  - `skipCount` <[integer]> Number of records to skip
  - `pageSize` <[integer]> Number of records to fetch
  - `keyRange` <KeyRange> Key range
- returns
  - `objectStoreDataEntries` array of <DataEntry> Array of object store data entries
  - `hasMore` <[boolean]> If true, there are more entries to fetch in the given range

Requests data from object store or index.

#### IndexedDB.requestDatabase()
- parameters
  - `securityOrigin` <[string]> Security origin
  - `databaseName` <[string]> Database name
- returns
  - `databaseWithObjectStores` <DatabaseWithObjectStores> Database with an array of object stores

Requests database with given name in given frame.

#### IndexedDB.requestDatabaseNames()
- parameters
  - `securityOrigin` <[string]> Security origin
- returns
  - `databaseNames` array of <[string]> Database names for origin

Requests database names for given security origin.