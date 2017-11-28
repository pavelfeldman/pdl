
### domain: ServiceWorker

#### ServiceWorker.deliverPushMessage()
- parameters
  - `origin` <[string]> 
  - `registrationId` <[string]> 
  - `data` <[string]> 

#### ServiceWorker.disable()

#### ServiceWorker.dispatchSyncEvent()
- parameters
  - `origin` <[string]> 
  - `registrationId` <[string]> 
  - `tag` <[string]> 
  - `lastChance` <[boolean]> 

#### ServiceWorker.enable()

#### ServiceWorker.inspectWorker()
- parameters
  - `versionId` <[string]> 

#### ServiceWorker.setForceUpdateOnPageLoad()
- parameters
  - `forceUpdateOnPageLoad` <[boolean]> 

#### ServiceWorker.skipWaiting()
- parameters
  - `scopeURL` <[string]> 

#### ServiceWorker.startWorker()
- parameters
  - `scopeURL` <[string]> 

#### ServiceWorker.stopAllWorkers()

#### ServiceWorker.stopWorker()
- parameters
  - `versionId` <[string]> 

#### ServiceWorker.unregister()
- parameters
  - `scopeURL` <[string]> 

#### ServiceWorker.updateRegistration()
- parameters
  - `scopeURL` <[string]> 

#### event: ServiceWorker.workerErrorReported
- `errorMessage` <ServiceWorkerErrorMessage> 

#### event: ServiceWorker.workerRegistrationUpdated
- `registrations` array of <ServiceWorkerRegistration> 

#### event: ServiceWorker.workerVersionUpdated
- `versions` array of <ServiceWorkerVersion> 