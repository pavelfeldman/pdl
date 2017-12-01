
### domain: ServiceWorker 🌱

---


#### command: ServiceWorker.deliverPushMessage

*parameters*
-  `origin` <[string]> 
-  `registrationId` <[string]> 
-  `data` <[string]> 

---


#### command: ServiceWorker.disable

---


#### command: ServiceWorker.dispatchSyncEvent

*parameters*
-  `origin` <[string]> 
-  `registrationId` <[string]> 
-  `tag` <[string]> 
-  `lastChance` <[boolean]> 

---


#### command: ServiceWorker.enable

---


#### command: ServiceWorker.inspectWorker

*parameters*
-  `versionId` <[string]> 

---


#### command: ServiceWorker.setForceUpdateOnPageLoad

*parameters*
-  `forceUpdateOnPageLoad` <[boolean]> 

---


#### command: ServiceWorker.skipWaiting

*parameters*
-  `scopeURL` <[string]> 

---


#### command: ServiceWorker.startWorker

*parameters*
-  `scopeURL` <[string]> 

---


#### command: ServiceWorker.stopAllWorkers

---


#### command: ServiceWorker.stopWorker

*parameters*
-  `versionId` <[string]> 

---


#### command: ServiceWorker.unregister

*parameters*
-  `scopeURL` <[string]> 

---


#### command: ServiceWorker.updateRegistration

*parameters*
-  `scopeURL` <[string]> 

---


#### event: ServiceWorker.workerErrorReported

*parameters*
-  `errorMessage` <[ServiceWorker.ServiceWorkerErrorMessage]> 

---


#### event: ServiceWorker.workerRegistrationUpdated

*parameters*
-  `registrations` <array of [ServiceWorker.ServiceWorkerRegistration]> 

---


#### event: ServiceWorker.workerVersionUpdated

*parameters*
-  `versions` <array of [ServiceWorker.ServiceWorkerVersion]> 

---


#### type: ServiceWorker.ServiceWorkerRegistration

ServiceWorker registration.

*base type*
- **object**

*properties*
-  `registrationId` <[string]> 
-  `scopeURL` <[string]> 
-  `isDeleted` <[boolean]> 

*parameter in event*
- [ServiceWorker.workerRegistrationUpdated]

---


#### type: ServiceWorker.ServiceWorkerVersionRunningStatus

*base type*
- **string**

*property of type*
- [ServiceWorker.ServiceWorkerVersion]

---


#### type: ServiceWorker.ServiceWorkerVersionStatus

*base type*
- **string**

*property of type*
- [ServiceWorker.ServiceWorkerVersion]

---


#### type: ServiceWorker.ServiceWorkerVersion

ServiceWorker version.

*base type*
- **object**

*properties*
-  `versionId` <[string]> 
-  `registrationId` <[string]> 
-  `scriptURL` <[string]> 
-  `runningStatus` <[ServiceWorker.ServiceWorkerVersionRunningStatus]> 
-  `status` <[ServiceWorker.ServiceWorkerVersionStatus]> 
- *optional* `scriptLastModified` <[number]> The Last-Modified header value of the main script
- *optional* `scriptResponseTime` <[number]> The time at which the response headers of the main script were received from the server.
For cached script it is the last time the cache entry was validated
- *optional* `controlledClients` <array of [Target.TargetID]> 
- *optional* `targetId` <[Target.TargetID]> 

*parameter in event*
- [ServiceWorker.workerVersionUpdated]

---


#### type: ServiceWorker.ServiceWorkerErrorMessage

ServiceWorker error message.

*base type*
- **object**

*properties*
-  `errorMessage` <[string]> 
-  `registrationId` <[string]> 
-  `versionId` <[string]> 
-  `sourceURL` <[string]> 
-  `lineNumber` <[integer]> 
-  `columnNumber` <[integer]> 

*parameter in event*
- [ServiceWorker.workerErrorReported]

[ServiceWorker.workerRegistrationUpdated]: serviceworker.md#event-serviceworkerworkerregistrationupdated "ServiceWorker.workerRegistrationUpdated"
[ServiceWorker.ServiceWorkerVersion]: serviceworker.md#type-serviceworkerserviceworkerversion "ServiceWorker.ServiceWorkerVersion"
[ServiceWorker.ServiceWorkerVersion]: serviceworker.md#type-serviceworkerserviceworkerversion "ServiceWorker.ServiceWorkerVersion"
[ServiceWorker.workerVersionUpdated]: serviceworker.md#event-serviceworkerworkerversionupdated "ServiceWorker.workerVersionUpdated"
[ServiceWorker.workerErrorReported]: serviceworker.md#event-serviceworkerworkererrorreported "ServiceWorker.workerErrorReported"
[ServiceWorker.ServiceWorkerVersionRunningStatus]: serviceworker.md#type-serviceworkerserviceworkerversionrunningstatus "ServiceWorker.ServiceWorkerVersionRunningStatus"
[ServiceWorker.ServiceWorkerVersionStatus]: serviceworker.md#type-serviceworkerserviceworkerversionstatus "ServiceWorker.ServiceWorkerVersionStatus"
[Target.TargetID]: target.md#type-targettargetid "Target.TargetID"
[ServiceWorker.ServiceWorkerErrorMessage]: serviceworker.md#type-serviceworkerserviceworkererrormessage "ServiceWorker.ServiceWorkerErrorMessage"
[ServiceWorker.ServiceWorkerRegistration]: serviceworker.md#type-serviceworkerserviceworkerregistration "ServiceWorker.ServiceWorkerRegistration"
[ServiceWorker.ServiceWorkerVersion]: serviceworker.md#type-serviceworkerserviceworkerversion "ServiceWorker.ServiceWorkerVersion"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"