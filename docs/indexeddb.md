
### domain: IndexedDB 🌱


#### type: IndexedDB.DatabaseWithObjectStores = object

Database with an array of object stores.

*properties*
-  `name` <[string]> Database name
-  `version` <[integer]> Database version
-  `objectStores` <array of [IndexedDB.ObjectStore]> Object stores in this database


#### type: IndexedDB.ObjectStore = object

Object store.

*properties*
-  `name` <[string]> Object store name
-  `keyPath` <[IndexedDB.KeyPath]> Object store key path
-  `autoIncrement` <[boolean]> If true, object store has auto increment flag set
-  `indexes` <array of [IndexedDB.ObjectStoreIndex]> Indexes in this object store


#### type: IndexedDB.ObjectStoreIndex = object

Object store index.

*properties*
-  `name` <[string]> Index name
-  `keyPath` <[IndexedDB.KeyPath]> Index key path
-  `unique` <[boolean]> If true, index is unique
-  `multiEntry` <[boolean]> If true, index allows multiple entries for a key


#### type: IndexedDB.Key = object

Key.

*properties*
-  `type` <[string]> Key type
- *optional* `number` <[number]> Number value
- *optional* `string` <[string]> String value
- *optional* `date` <[number]> Date value
- *optional* `array` <array of [IndexedDB.Key]> Array value


#### type: IndexedDB.KeyRange = object

Key range.

*properties*
- *optional* `lower` <[IndexedDB.Key]> Lower bound
- *optional* `upper` <[IndexedDB.Key]> Upper bound
-  `lowerOpen` <[boolean]> If true lower bound is open
-  `upperOpen` <[boolean]> If true upper bound is open


#### type: IndexedDB.DataEntry = object

Data entry.

*properties*
-  `key` <[Runtime.RemoteObject]> Key object
-  `primaryKey` <[Runtime.RemoteObject]> Primary key object
-  `value` <[Runtime.RemoteObject]> Value object


#### type: IndexedDB.KeyPath = object

Key path.

*properties*
-  `type` <[string]> Key path type
- *optional* `string` <[string]> String value
- *optional* `array` <array of [string]> Array value


#### command: IndexedDB.clearObjectStore()

Clears all entries from an object store.

*parameters*
-  `securityOrigin` <[string]> Security origin
-  `databaseName` <[string]> Database name
-  `objectStoreName` <[string]> Object store name


#### command: IndexedDB.deleteDatabase()

Deletes a database.

*parameters*
-  `securityOrigin` <[string]> Security origin
-  `databaseName` <[string]> Database name


#### command: IndexedDB.disable()

Disables events from backend.


#### command: IndexedDB.enable()

Enables events from backend.


#### command: IndexedDB.requestData()

Requests data from object store or index.

*parameters*
-  `securityOrigin` <[string]> Security origin
-  `databaseName` <[string]> Database name
-  `objectStoreName` <[string]> Object store name
-  `indexName` <[string]> Index name, empty string for object store data requests
-  `skipCount` <[integer]> Number of records to skip
-  `pageSize` <[integer]> Number of records to fetch
- *optional* `keyRange` <[IndexedDB.KeyRange]> Key range

*returns*
-  `objectStoreDataEntries` <array of [IndexedDB.DataEntry]> Array of object store data entries
-  `hasMore` <[boolean]> If true, there are more entries to fetch in the given range


#### command: IndexedDB.requestDatabase()

Requests database with given name in given frame.

*parameters*
-  `securityOrigin` <[string]> Security origin
-  `databaseName` <[string]> Database name

*returns*
-  `databaseWithObjectStores` <[IndexedDB.DatabaseWithObjectStores]> Database with an array of object stores


#### command: IndexedDB.requestDatabaseNames()

Requests database names for given security origin.

*parameters*
-  `securityOrigin` <[string]> Security origin

*returns*
-  `databaseNames` <array of [string]> Database names for origin

[IndexedDB.ObjectStore]: indexeddb.md#type-indexeddbobjectstore--object "IndexedDB.ObjectStore"
[IndexedDB.KeyPath]: indexeddb.md#type-indexeddbkeypath--object "IndexedDB.KeyPath"
[IndexedDB.ObjectStoreIndex]: indexeddb.md#type-indexeddbobjectstoreindex--object "IndexedDB.ObjectStoreIndex"
[IndexedDB.Key]: indexeddb.md#type-indexeddbkey--object "IndexedDB.Key"
[Runtime.RemoteObject]: runtime.md#type-runtimeremoteobject--object "Runtime.RemoteObject"
[IndexedDB.KeyRange]: indexeddb.md#type-indexeddbkeyrange--object "IndexedDB.KeyRange"
[IndexedDB.DataEntry]: indexeddb.md#type-indexeddbdataentry--object "IndexedDB.DataEntry"
[IndexedDB.DatabaseWithObjectStores]: indexeddb.md#type-indexeddbdatabasewithobjectstores--object "IndexedDB.DatabaseWithObjectStores"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"