
### domain: DOMStorage 🌱

Query and modify DOM storage.

---


#### command: DOMStorage.clear

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 

---


#### command: DOMStorage.disable

Disables storage tracking, prevents storage events from being sent to the client.

---


#### command: DOMStorage.enable

Enables storage tracking, storage events will now be delivered to the client.

---


#### command: DOMStorage.getDOMStorageItems

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 

*returns*
-  `entries` <array of [DOMStorage.Item]> 

---


#### command: DOMStorage.removeDOMStorageItem

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 
-  `key` <[string]> 

---


#### command: DOMStorage.setDOMStorageItem

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 
-  `key` <[string]> 
-  `value` <[string]> 

---


#### event: DOMStorage.domStorageItemAdded

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 
-  `key` <[string]> 
-  `newValue` <[string]> 

---


#### event: DOMStorage.domStorageItemRemoved

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 
-  `key` <[string]> 

---


#### event: DOMStorage.domStorageItemUpdated

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 
-  `key` <[string]> 
-  `oldValue` <[string]> 
-  `newValue` <[string]> 

---


#### event: DOMStorage.domStorageItemsCleared

*parameters*
-  `storageId` <[DOMStorage.StorageId]> 

---


#### type: DOMStorage.StorageId

DOM Storage identifier.

*base type*
- **object**

*properties*
-  `securityOrigin` <[string]> Security origin for the storage
-  `isLocalStorage` <[boolean]> Whether the storage is local storage (not session storage)

*accepted by command*
- [DOMStorage.clear]
- [DOMStorage.getDOMStorageItems]
- [DOMStorage.removeDOMStorageItem]
- [DOMStorage.setDOMStorageItem]

*parameter in event*
- [DOMStorage.domStorageItemAdded]
- [DOMStorage.domStorageItemRemoved]
- [DOMStorage.domStorageItemUpdated]
- [DOMStorage.domStorageItemsCleared]

---


#### type: DOMStorage.Item

DOM Storage item.

*base type*
- **array**

*returned from command*
- [DOMStorage.getDOMStorageItems]

[DOMStorage.clear]: domstorage.md#command-domstorageclear "DOMStorage.clear"
[DOMStorage.getDOMStorageItems]: domstorage.md#command-domstoragegetdomstorageitems "DOMStorage.getDOMStorageItems"
[DOMStorage.removeDOMStorageItem]: domstorage.md#command-domstorageremovedomstorageitem "DOMStorage.removeDOMStorageItem"
[DOMStorage.setDOMStorageItem]: domstorage.md#command-domstoragesetdomstorageitem "DOMStorage.setDOMStorageItem"
[DOMStorage.domStorageItemAdded]: domstorage.md#event-domstoragedomstorageitemadded "DOMStorage.domStorageItemAdded"
[DOMStorage.domStorageItemRemoved]: domstorage.md#event-domstoragedomstorageitemremoved "DOMStorage.domStorageItemRemoved"
[DOMStorage.domStorageItemUpdated]: domstorage.md#event-domstoragedomstorageitemupdated "DOMStorage.domStorageItemUpdated"
[DOMStorage.domStorageItemsCleared]: domstorage.md#event-domstoragedomstorageitemscleared "DOMStorage.domStorageItemsCleared"
[DOMStorage.getDOMStorageItems]: domstorage.md#command-domstoragegetdomstorageitems "DOMStorage.getDOMStorageItems"
[DOMStorage.StorageId]: domstorage.md#type-domstoragestorageid "DOMStorage.StorageId"
[DOMStorage.StorageId]: domstorage.md#type-domstoragestorageid "DOMStorage.StorageId"
[DOMStorage.Item]: domstorage.md#type-domstorageitem "DOMStorage.Item"
[DOMStorage.StorageId]: domstorage.md#type-domstoragestorageid "DOMStorage.StorageId"
[DOMStorage.StorageId]: domstorage.md#type-domstoragestorageid "DOMStorage.StorageId"
[DOMStorage.StorageId]: domstorage.md#type-domstoragestorageid "DOMStorage.StorageId"
[DOMStorage.StorageId]: domstorage.md#type-domstoragestorageid "DOMStorage.StorageId"
[DOMStorage.StorageId]: domstorage.md#type-domstoragestorageid "DOMStorage.StorageId"
[DOMStorage.StorageId]: domstorage.md#type-domstoragestorageid "DOMStorage.StorageId"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"