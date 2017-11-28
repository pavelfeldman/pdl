
### domain: DOMStorage

Query and modify DOM storage.

#### DOMStorage.clear()
- parameters
  - `storageId` <StorageId> 

#### DOMStorage.disable()

Disables storage tracking, prevents storage events from being sent to the client.

#### DOMStorage.enable()

Enables storage tracking, storage events will now be delivered to the client.

#### DOMStorage.getDOMStorageItems()
- parameters
  - `storageId` <StorageId> 
- returns
  - `entries` array of <Item> 

#### DOMStorage.removeDOMStorageItem()
- parameters
  - `storageId` <StorageId> 
  - `key` <[string]> 

#### DOMStorage.setDOMStorageItem()
- parameters
  - `storageId` <StorageId> 
  - `key` <[string]> 
  - `value` <[string]> 

#### event: DOMStorage.domStorageItemAdded
- `storageId` <StorageId> 
- `key` <[string]> 
- `newValue` <[string]> 

#### event: DOMStorage.domStorageItemRemoved
- `storageId` <StorageId> 
- `key` <[string]> 

#### event: DOMStorage.domStorageItemUpdated
- `storageId` <StorageId> 
- `key` <[string]> 
- `oldValue` <[string]> 
- `newValue` <[string]> 

#### event: DOMStorage.domStorageItemsCleared
- `storageId` <StorageId> 