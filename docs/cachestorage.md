
### domain: CacheStorage

#### CacheStorage.deleteCache()
- parameters
  - `cacheId` <CacheId> Id of cache for deletion

Deletes a cache.

#### CacheStorage.deleteEntry()
- parameters
  - `cacheId` <CacheId> Id of cache where the entry will be deleted
  - `request` <[string]> URL spec of the request

Deletes a cache entry.

#### CacheStorage.requestCacheNames()
- parameters
  - `securityOrigin` <[string]> Security origin
- returns
  - `caches` array of <Cache> Caches for the security origin

Requests cache names.

#### CacheStorage.requestCachedResponse()
- parameters
  - `cacheId` <CacheId> Id of cache that contains the enty
  - `requestURL` <[string]> URL spec of the request
- returns
  - `response` <CachedResponse> Response read from the cache

Fetches cache entry.

#### CacheStorage.requestEntries()
- parameters
  - `cacheId` <CacheId> ID of cache to get entries from
  - `skipCount` <[integer]> Number of records to skip
  - `pageSize` <[integer]> Number of records to fetch
- returns
  - `cacheDataEntries` array of <DataEntry> Array of object store data entries
  - `hasMore` <[boolean]> If true, there are more entries to fetch in the given range

Requests data from cache.