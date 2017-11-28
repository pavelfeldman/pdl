
### domain: Storage

#### Storage.clearDataForOrigin()
- parameters
  - `origin` <[string]> Security origin
  - `storageTypes` <[string]> Comma separated origin names

Clears storage for origin.

#### Storage.getUsageAndQuota()
- parameters
  - `origin` <[string]> Security origin
- returns
  - `usage` <[number]> Storage usage (bytes)
  - `quota` <[number]> Storage quota (bytes)
  - `usageBreakdown` array of <UsageForType> Storage usage per type (bytes)

Returns usage and quota in bytes.

#### Storage.trackCacheStorageForOrigin()
- parameters
  - `origin` <[string]> Security origin

Registers origin to be notified when an update occurs to its cache storage list.

#### Storage.trackIndexedDBForOrigin()
- parameters
  - `origin` <[string]> Security origin

Registers origin to be notified when an update occurs to its IndexedDB.

#### Storage.untrackCacheStorageForOrigin()
- parameters
  - `origin` <[string]> Security origin

Unregisters origin from receiving notifications for cache storage.

#### Storage.untrackIndexedDBForOrigin()
- parameters
  - `origin` <[string]> Security origin

Unregisters origin from receiving notifications for IndexedDB.

#### event: Storage.cacheStorageContentUpdated
- `origin` <[string]> Origin to update
- `cacheName` <[string]> Name of cache in origin

A cache's contents have been modified.

#### event: Storage.cacheStorageListUpdated
- `origin` <[string]> Origin to update

A cache has been added/deleted.

#### event: Storage.indexedDBContentUpdated
- `origin` <[string]> Origin to update
- `databaseName` <[string]> Database to update
- `objectStoreName` <[string]> ObjectStore to update

The origin's IndexedDB object store has been modified.

#### event: Storage.indexedDBListUpdated
- `origin` <[string]> Origin to update

The origin's IndexedDB database list has been modified.