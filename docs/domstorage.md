
### domain: DOMStorage

Query and modify DOM storage.

#### type: DOMStorage.StorageId = object

DOM Storage identifier.

*properties*
  - `securityOrigin` <string]> Security origin for the storage
  - `isLocalStorage` <boolean]> Whether the storage is local storage (not session storage)

#### type: DOMStorage.Item = array

DOM Storage item.

#### command: DOMStorage.clear()

*parameters*
- `storageId` <[DOMStorage.StorageId]]> 

#### command: DOMStorage.disable()

Disables storage tracking, prevents storage events from being sent to the client.

#### command: DOMStorage.enable()

Enables storage tracking, storage events will now be delivered to the client.

#### command: DOMStorage.getDOMStorageItems()

*parameters*
- `storageId` <[DOMStorage.StorageId]]> 

*returns*
- `entries` <array of [DOMStorage.Item]> 

#### command: DOMStorage.removeDOMStorageItem()

*parameters*
- `storageId` <[DOMStorage.StorageId]]> 
- `key` <string]> 

#### command: DOMStorage.setDOMStorageItem()

*parameters*
- `storageId` <[DOMStorage.StorageId]]> 
- `key` <string]> 
- `value` <string]> 

#### event: DOMStorage.domStorageItemAdded

*returns*
- `storageId` <[DOMStorage.StorageId]]> 
- `key` <string]> 
- `newValue` <string]> 

#### event: DOMStorage.domStorageItemRemoved

*returns*
- `storageId` <[DOMStorage.StorageId]]> 
- `key` <string]> 

#### event: DOMStorage.domStorageItemUpdated

*returns*
- `storageId` <[DOMStorage.StorageId]]> 
- `key` <string]> 
- `oldValue` <string]> 
- `newValue` <string]> 

#### event: DOMStorage.domStorageItemsCleared

*returns*
- `storageId` <[DOMStorage.StorageId]]> 

[DOMStorage.StorageId]: domstorage.md#domstoragestorageid
[DOMStorage.Item]: domstorage.md#domstorageitem