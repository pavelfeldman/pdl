
### domain: Storage 🌱


#### type: Storage.StorageType = string

Enum of possible storage types.


#### type: Storage.UsageForType = object

Usage for a storage type.

*properties*
-  `storageType` <[Storage.StorageType]> Name of storage type
-  `usage` <[number]> Storage usage (bytes)


#### command: Storage.clearDataForOrigin()

Clears storage for origin.

*parameters*
-  `origin` <[string]> Security origin
-  `storageTypes` <[string]> Comma separated origin names


#### command: Storage.getUsageAndQuota()

Returns usage and quota in bytes.

*parameters*
-  `origin` <[string]> Security origin

*returns*
-  `usage` <[number]> Storage usage (bytes)
-  `quota` <[number]> Storage quota (bytes)
-  `usageBreakdown` <array of [Storage.UsageForType]> Storage usage per type (bytes)


#### command: Storage.trackCacheStorageForOrigin()

Registers origin to be notified when an update occurs to its cache storage list.

*parameters*
-  `origin` <[string]> Security origin


#### command: Storage.trackIndexedDBForOrigin()

Registers origin to be notified when an update occurs to its IndexedDB.

*parameters*
-  `origin` <[string]> Security origin


#### command: Storage.untrackCacheStorageForOrigin()

Unregisters origin from receiving notifications for cache storage.

*parameters*
-  `origin` <[string]> Security origin


#### command: Storage.untrackIndexedDBForOrigin()

Unregisters origin from receiving notifications for IndexedDB.

*parameters*
-  `origin` <[string]> Security origin


#### event: Storage.cacheStorageContentUpdated

A cache's contents have been modified.

*parameters*
-  `origin` <[string]> Origin to update
-  `cacheName` <[string]> Name of cache in origin


#### event: Storage.cacheStorageListUpdated

A cache has been added/deleted.

*parameters*
-  `origin` <[string]> Origin to update


#### event: Storage.indexedDBContentUpdated

The origin's IndexedDB object store has been modified.

*parameters*
-  `origin` <[string]> Origin to update
-  `databaseName` <[string]> Database to update
-  `objectStoreName` <[string]> ObjectStore to update


#### event: Storage.indexedDBListUpdated

The origin's IndexedDB database list has been modified.

*parameters*
-  `origin` <[string]> Origin to update

[Storage.StorageType]: storage.md#type-storagestoragetype--string "Storage.StorageType"
[Storage.UsageForType]: storage.md#type-storageusagefortype--object "Storage.UsageForType"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"