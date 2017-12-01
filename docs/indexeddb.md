
### domain: IndexedDB 🌱

---


#### command: IndexedDB.clearObjectStore

Clears all entries from an object store.

*parameters*
-  `securityOrigin` <[string]> Security origin
-  `databaseName` <[string]> Database name
-  `objectStoreName` <[string]> Object store name

---


#### command: IndexedDB.deleteDatabase

Deletes a database.

*parameters*
-  `securityOrigin` <[string]> Security origin
-  `databaseName` <[string]> Database name

---


#### command: IndexedDB.disable

Disables events from backend.

---


#### command: IndexedDB.enable

Enables events from backend.

---


#### command: IndexedDB.requestData

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

---


#### command: IndexedDB.requestDatabase

Requests database with given name in given frame.

*parameters*
-  `securityOrigin` <[string]> Security origin
-  `databaseName` <[string]> Database name

*returns*
-  `databaseWithObjectStores` <[IndexedDB.DatabaseWithObjectStores]> Database with an array of object stores

---


#### command: IndexedDB.requestDatabaseNames

Requests database names for given security origin.

*parameters*
-  `securityOrigin` <[string]> Security origin

*returns*
-  `databaseNames` <array of [string]> Database names for origin

---


#### type: IndexedDB.DatabaseWithObjectStores

Database with an array of object stores.

*base type*
- **object**

*properties*
-  `name` <[string]> Database name
-  `version` <[integer]> Database version
-  `objectStores` <array of [IndexedDB.ObjectStore]> Object stores in this database

*returned from command*
- [IndexedDB.requestDatabase]

---


#### type: IndexedDB.ObjectStore

Object store.

*base type*
- **object**

*properties*
-  `name` <[string]> Object store name
-  `keyPath` <[IndexedDB.KeyPath]> Object store key path
-  `autoIncrement` <[boolean]> If true, object store has auto increment flag set
-  `indexes` <array of [IndexedDB.ObjectStoreIndex]> Indexes in this object store

*property of type*
- [IndexedDB.DatabaseWithObjectStores]

---


#### type: IndexedDB.ObjectStoreIndex

Object store index.

*base type*
- **object**

*properties*
-  `name` <[string]> Index name
-  `keyPath` <[IndexedDB.KeyPath]> Index key path
-  `unique` <[boolean]> If true, index is unique
-  `multiEntry` <[boolean]> If true, index allows multiple entries for a key

*property of type*
- [IndexedDB.ObjectStore]

---


#### type: IndexedDB.Key

Key.

*base type*
- **object**

*properties*
-  `type` <[string]> Key type
- *optional* `number` <[number]> Number value
- *optional* `string` <[string]> String value
- *optional* `date` <[number]> Date value
- *optional* `array` <array of [IndexedDB.Key]> Array value

*property of type*
- [IndexedDB.Key]
- [IndexedDB.KeyRange]

---


#### type: IndexedDB.KeyRange

Key range.

*base type*
- **object**

*properties*
- *optional* `lower` <[IndexedDB.Key]> Lower bound
- *optional* `upper` <[IndexedDB.Key]> Upper bound
-  `lowerOpen` <[boolean]> If true lower bound is open
-  `upperOpen` <[boolean]> If true upper bound is open

*accepted by command*
- [IndexedDB.requestData]

---


#### type: IndexedDB.DataEntry

Data entry.

*base type*
- **object**

*properties*
-  `key` <[Runtime.RemoteObject]> Key object
-  `primaryKey` <[Runtime.RemoteObject]> Primary key object
-  `value` <[Runtime.RemoteObject]> Value object

*returned from command*
- [IndexedDB.requestData]

---


#### type: IndexedDB.KeyPath

Key path.

*base type*
- **object**

*properties*
-  `type` <[string]> Key path type
- *optional* `string` <[string]> String value
- *optional* `array` <array of [string]> Array value

*property of type*
- [IndexedDB.ObjectStore]
- [IndexedDB.ObjectStoreIndex]

[IndexedDB.requestDatabase]: indexeddb.md#command-indexeddbrequestdatabase "IndexedDB.requestDatabase"
[IndexedDB.DatabaseWithObjectStores]: indexeddb.md#type-indexeddbdatabasewithobjectstores "IndexedDB.DatabaseWithObjectStores"
[IndexedDB.ObjectStore]: indexeddb.md#type-indexeddbobjectstore "IndexedDB.ObjectStore"
[IndexedDB.Key]: indexeddb.md#type-indexeddbkey "IndexedDB.Key"
[IndexedDB.KeyRange]: indexeddb.md#type-indexeddbkeyrange "IndexedDB.KeyRange"
[IndexedDB.requestData]: indexeddb.md#command-indexeddbrequestdata "IndexedDB.requestData"
[IndexedDB.requestData]: indexeddb.md#command-indexeddbrequestdata "IndexedDB.requestData"
[IndexedDB.ObjectStore]: indexeddb.md#type-indexeddbobjectstore "IndexedDB.ObjectStore"
[IndexedDB.ObjectStoreIndex]: indexeddb.md#type-indexeddbobjectstoreindex "IndexedDB.ObjectStoreIndex"
[IndexedDB.ObjectStore]: indexeddb.md#type-indexeddbobjectstore "IndexedDB.ObjectStore"
[IndexedDB.KeyPath]: indexeddb.md#type-indexeddbkeypath "IndexedDB.KeyPath"
[IndexedDB.ObjectStoreIndex]: indexeddb.md#type-indexeddbobjectstoreindex "IndexedDB.ObjectStoreIndex"
[IndexedDB.KeyPath]: indexeddb.md#type-indexeddbkeypath "IndexedDB.KeyPath"
[IndexedDB.Key]: indexeddb.md#type-indexeddbkey "IndexedDB.Key"
[IndexedDB.Key]: indexeddb.md#type-indexeddbkey "IndexedDB.Key"
[Runtime.RemoteObject]: runtime.md#type-runtimeremoteobject "Runtime.RemoteObject"
[IndexedDB.KeyRange]: indexeddb.md#type-indexeddbkeyrange "IndexedDB.KeyRange"
[IndexedDB.DataEntry]: indexeddb.md#type-indexeddbdataentry "IndexedDB.DataEntry"
[IndexedDB.DatabaseWithObjectStores]: indexeddb.md#type-indexeddbdatabasewithobjectstores "IndexedDB.DatabaseWithObjectStores"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"