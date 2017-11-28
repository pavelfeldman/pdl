
### domain: DOMStorage 🌱

Query and modify DOM storage.


#### type: DOMStorage.StorageId = object

DOM Storage identifier.

*properties*
-  `securityOrigin` <[string]> Security origin for the storage
-  `isLocalStorage` <[boolean]> Whether the storage is local storage (not session storage)


#### type: DOMStorage.Item = array

DOM Storage item.


#### command: DOMStorage.clear()

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 


#### command: DOMStorage.disable()

Disables storage tracking, prevents storage events from being sent to the client.


#### command: DOMStorage.enable()

Enables storage tracking, storage events will now be delivered to the client.


#### command: DOMStorage.getDOMStorageItems()

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 

*returns*
-  `entries` <array of [DOMStorage.Item]> 


#### command: DOMStorage.removeDOMStorageItem()

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 
-  `key` <[string]> 


#### command: DOMStorage.setDOMStorageItem()

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 
-  `key` <[string]> 
-  `value` <[string]> 


#### event: DOMStorage.domStorageItemAdded

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 
-  `key` <[string]> 
-  `newValue` <[string]> 


#### event: DOMStorage.domStorageItemRemoved

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 
-  `key` <[string]> 


#### event: DOMStorage.domStorageItemUpdated

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 
-  `key` <[string]> 
-  `oldValue` <[string]> 
-  `newValue` <[string]> 


#### event: DOMStorage.domStorageItemsCleared

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 

[DOMStorage.StorageId]: domstorage.md#type-domstoragestorageid--object "DOMStorage.StorageId"
[DOMStorage.Item]: domstorage.md#type-domstorageitem--array "DOMStorage.Item"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"