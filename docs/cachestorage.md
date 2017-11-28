
### domain: CacheStorage

#### type: CacheStorage.CacheId = string

Unique identifier of the Cache object.

#### type: CacheStorage.DataEntry = object

Data entry.

*properties*
  - `requestURL` <string]> Request URL
  - `requestMethod` <string]> Request method
  - `requestHeaders` <array of [CacheStorage.Header]> Request headers
  - `responseTime` <number]> Number of seconds since epoch
  - `responseStatus` <integer]> HTTP response status code
  - `responseStatusText` <string]> HTTP response status text
  - `responseHeaders` <array of [CacheStorage.Header]> Response headers

#### type: CacheStorage.Cache = object

Cache identifier.

*properties*
  - `cacheId` <[CacheStorage.CacheId]]> An opaque unique id of the cache
  - `securityOrigin` <string]> Security origin of the cache
  - `cacheName` <string]> The name of the cache

#### type: CacheStorage.Header = object

*properties*
  - `name` <string]> 
  - `value` <string]> 

#### type: CacheStorage.CachedResponse = object

Cached response

*properties*
  - `body` <string]> Entry content, base64-encoded

#### command: CacheStorage.deleteCache()

Deletes a cache.

*parameters*
- `cacheId` <[CacheStorage.CacheId]]> Id of cache for deletion

#### command: CacheStorage.deleteEntry()

Deletes a cache entry.

*parameters*
- `cacheId` <[CacheStorage.CacheId]]> Id of cache where the entry will be deleted
- `request` <string]> URL spec of the request

#### command: CacheStorage.requestCacheNames()

Requests cache names.

*parameters*
- `securityOrigin` <string]> Security origin

*returns*
- `caches` <array of [CacheStorage.Cache]> Caches for the security origin

#### command: CacheStorage.requestCachedResponse()

Fetches cache entry.

*parameters*
- `cacheId` <[CacheStorage.CacheId]]> Id of cache that contains the enty
- `requestURL` <string]> URL spec of the request

*returns*
- `response` <[CacheStorage.CachedResponse]]> Response read from the cache

#### command: CacheStorage.requestEntries()

Requests data from cache.

*parameters*
- `cacheId` <[CacheStorage.CacheId]]> ID of cache to get entries from
- `skipCount` <integer]> Number of records to skip
- `pageSize` <integer]> Number of records to fetch

*returns*
- `cacheDataEntries` <array of [CacheStorage.DataEntry]> Array of object store data entries
- `hasMore` <boolean]> If true, there are more entries to fetch in the given range

[CacheStorage.Header]: cachestorage.md#cachestorageheader
[CacheStorage.CacheId]: cachestorage.md#cachestoragecacheid
[CacheStorage.Cache]: cachestorage.md#cachestoragecache
[CacheStorage.CachedResponse]: cachestorage.md#cachestoragecachedresponse
[CacheStorage.DataEntry]: cachestorage.md#cachestoragedataentry