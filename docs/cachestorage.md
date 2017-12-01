
### domain: CacheStorage 🌱

---


#### command: CacheStorage.deleteCache

Deletes a cache.

*parameters*
-  `cacheId` <[CacheStorage.CacheId]> Id of cache for deletion

---


#### command: CacheStorage.deleteEntry

Deletes a cache entry.

*parameters*
-  `cacheId` <[CacheStorage.CacheId]> Id of cache where the entry will be deleted
-  `request` <[string]> URL spec of the request

---


#### command: CacheStorage.requestCacheNames

Requests cache names.

*parameters*
-  `securityOrigin` <[string]> Security origin

*returns*
-  `caches` <array of [CacheStorage.Cache]> Caches for the security origin

---


#### command: CacheStorage.requestCachedResponse

Fetches cache entry.

*parameters*
-  `cacheId` <[CacheStorage.CacheId]> Id of cache that contains the enty
-  `requestURL` <[string]> URL spec of the request

*returns*
-  `response` <[CacheStorage.CachedResponse]> Response read from the cache

---


#### command: CacheStorage.requestEntries

Requests data from cache.

*parameters*
-  `cacheId` <[CacheStorage.CacheId]> ID of cache to get entries from
-  `skipCount` <[integer]> Number of records to skip
-  `pageSize` <[integer]> Number of records to fetch

*returns*
-  `cacheDataEntries` <array of [CacheStorage.DataEntry]> Array of object store data entries
-  `hasMore` <[boolean]> If true, there are more entries to fetch in the given range

---


#### type: CacheStorage.CacheId

Unique identifier of the Cache object.

*base type*
- **string**

*property of type*
- [CacheStorage.Cache]

*accepted by command*
- [CacheStorage.deleteCache]
- [CacheStorage.deleteEntry]
- [CacheStorage.requestCachedResponse]
- [CacheStorage.requestEntries]

---


#### type: CacheStorage.DataEntry

Data entry.

*base type*
- **object**

*properties*
-  `requestURL` <[string]> Request URL
-  `requestMethod` <[string]> Request method
-  `requestHeaders` <array of [CacheStorage.Header]> Request headers
-  `responseTime` <[number]> Number of seconds since epoch
-  `responseStatus` <[integer]> HTTP response status code
-  `responseStatusText` <[string]> HTTP response status text
-  `responseHeaders` <array of [CacheStorage.Header]> Response headers

*returned from command*
- [CacheStorage.requestEntries]

---


#### type: CacheStorage.Cache

Cache identifier.

*base type*
- **object**

*properties*
-  `cacheId` <[CacheStorage.CacheId]> An opaque unique id of the cache
-  `securityOrigin` <[string]> Security origin of the cache
-  `cacheName` <[string]> The name of the cache

*returned from command*
- [CacheStorage.requestCacheNames]

---


#### type: CacheStorage.Header

*base type*
- **object**

*properties*
-  `name` <[string]> 
-  `value` <[string]> 

*property of type*
- [CacheStorage.DataEntry]

---


#### type: CacheStorage.CachedResponse

Cached response

*base type*
- **object**

*properties*
-  `body` <[string]> Entry content, base64-encoded

*returned from command*
- [CacheStorage.requestCachedResponse]

[CacheStorage.Cache]: cachestorage.md#type-cachestoragecache "CacheStorage.Cache"
[CacheStorage.deleteCache]: cachestorage.md#command-cachestoragedeletecache "CacheStorage.deleteCache"
[CacheStorage.deleteEntry]: cachestorage.md#command-cachestoragedeleteentry "CacheStorage.deleteEntry"
[CacheStorage.requestCachedResponse]: cachestorage.md#command-cachestoragerequestcachedresponse "CacheStorage.requestCachedResponse"
[CacheStorage.requestEntries]: cachestorage.md#command-cachestoragerequestentries "CacheStorage.requestEntries"
[CacheStorage.requestEntries]: cachestorage.md#command-cachestoragerequestentries "CacheStorage.requestEntries"
[CacheStorage.requestCacheNames]: cachestorage.md#command-cachestoragerequestcachenames "CacheStorage.requestCacheNames"
[CacheStorage.DataEntry]: cachestorage.md#type-cachestoragedataentry "CacheStorage.DataEntry"
[CacheStorage.requestCachedResponse]: cachestorage.md#command-cachestoragerequestcachedresponse "CacheStorage.requestCachedResponse"
[CacheStorage.Header]: cachestorage.md#type-cachestorageheader "CacheStorage.Header"
[CacheStorage.CacheId]: cachestorage.md#type-cachestoragecacheid "CacheStorage.CacheId"
[CacheStorage.CacheId]: cachestorage.md#type-cachestoragecacheid "CacheStorage.CacheId"
[CacheStorage.CacheId]: cachestorage.md#type-cachestoragecacheid "CacheStorage.CacheId"
[CacheStorage.Cache]: cachestorage.md#type-cachestoragecache "CacheStorage.Cache"
[CacheStorage.CacheId]: cachestorage.md#type-cachestoragecacheid "CacheStorage.CacheId"
[CacheStorage.CachedResponse]: cachestorage.md#type-cachestoragecachedresponse "CacheStorage.CachedResponse"
[CacheStorage.CacheId]: cachestorage.md#type-cachestoragecacheid "CacheStorage.CacheId"
[CacheStorage.DataEntry]: cachestorage.md#type-cachestoragedataentry "CacheStorage.DataEntry"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"