
### domain: ServiceWorker

#### type: ServiceWorker.ServiceWorkerRegistration = object

ServiceWorker registration.

*properties*
  - `registrationId` <string]> 
  - `scopeURL` <string]> 
  - `isDeleted` <boolean]> 

#### type: ServiceWorker.ServiceWorkerVersionRunningStatus = string

#### type: ServiceWorker.ServiceWorkerVersionStatus = string

#### type: ServiceWorker.ServiceWorkerVersion = object

ServiceWorker version.

*properties*
  - `versionId` <string]> 
  - `registrationId` <string]> 
  - `scriptURL` <string]> 
  - `runningStatus` <[ServiceWorker.ServiceWorkerVersionRunningStatus]]> 
  - `status` <[ServiceWorker.ServiceWorkerVersionStatus]]> 
  - `scriptLastModified` <number]> The Last-Modified header value of the main script
  - `scriptResponseTime` <number]> The time at which the response headers of the main script were received from the server.
For cached script it is the last time the cache entry was validated
  - `controlledClients` <array of [Target.TargetID]> 
  - `targetId` <[Target.TargetID]]> 

#### type: ServiceWorker.ServiceWorkerErrorMessage = object

ServiceWorker error message.

*properties*
  - `errorMessage` <string]> 
  - `registrationId` <string]> 
  - `versionId` <string]> 
  - `sourceURL` <string]> 
  - `lineNumber` <integer]> 
  - `columnNumber` <integer]> 

#### command: ServiceWorker.deliverPushMessage()

*parameters*
- `origin` <string]> 
- `registrationId` <string]> 
- `data` <string]> 

#### command: ServiceWorker.disable()

#### command: ServiceWorker.dispatchSyncEvent()

*parameters*
- `origin` <string]> 
- `registrationId` <string]> 
- `tag` <string]> 
- `lastChance` <boolean]> 

#### command: ServiceWorker.enable()

#### command: ServiceWorker.inspectWorker()

*parameters*
- `versionId` <string]> 

#### command: ServiceWorker.setForceUpdateOnPageLoad()

*parameters*
- `forceUpdateOnPageLoad` <boolean]> 

#### command: ServiceWorker.skipWaiting()

*parameters*
- `scopeURL` <string]> 

#### command: ServiceWorker.startWorker()

*parameters*
- `scopeURL` <string]> 

#### command: ServiceWorker.stopAllWorkers()

#### command: ServiceWorker.stopWorker()

*parameters*
- `versionId` <string]> 

#### command: ServiceWorker.unregister()

*parameters*
- `scopeURL` <string]> 

#### command: ServiceWorker.updateRegistration()

*parameters*
- `scopeURL` <string]> 

#### event: ServiceWorker.workerErrorReported

*returns*
- `errorMessage` <[ServiceWorker.ServiceWorkerErrorMessage]]> 

#### event: ServiceWorker.workerRegistrationUpdated

*returns*
- `registrations` <array of [ServiceWorker.ServiceWorkerRegistration]> 

#### event: ServiceWorker.workerVersionUpdated

*returns*
- `versions` <array of [ServiceWorker.ServiceWorkerVersion]> 

[ServiceWorker.ServiceWorkerVersionRunningStatus]: serviceworker.md#serviceworkerserviceworkerversionrunningstatus
[ServiceWorker.ServiceWorkerVersionStatus]: serviceworker.md#serviceworkerserviceworkerversionstatus
[Target.TargetID]: serviceworker.md#targettargetid
[ServiceWorker.ServiceWorkerErrorMessage]: serviceworker.md#serviceworkerserviceworkererrormessage
[ServiceWorker.ServiceWorkerRegistration]: serviceworker.md#serviceworkerserviceworkerregistration
[ServiceWorker.ServiceWorkerVersion]: serviceworker.md#serviceworkerserviceworkerversion