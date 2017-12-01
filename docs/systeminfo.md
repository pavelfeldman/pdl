
### domain: SystemInfo 🌱

The SystemInfo domain defines methods and events for querying low-level system information.

---


#### command: SystemInfo.getInfo

Returns information about the system.

*returns*
-  `gpu` <[SystemInfo.GPUInfo]> Information about the GPUs on the system
-  `modelName` <[string]> A platform-dependent description of the model of the machine. On Mac OS, this is, for
example, 'MacBookPro'. Will be the empty string if not supported
-  `modelVersion` <[string]> A platform-dependent description of the version of the machine. On Mac OS, this is, for
example, '10.1'. Will be the empty string if not supported
-  `commandLine` <[string]> The command line string used to launch the browser. Will be the empty string if not
supported

---


#### type: SystemInfo.GPUDevice

Describes a single graphics processor (GPU).

*base type*
- **object**

*properties*
-  `vendorId` <[number]> PCI ID of the GPU vendor, if available; 0 otherwise
-  `deviceId` <[number]> PCI ID of the GPU device, if available; 0 otherwise
-  `vendorString` <[string]> String description of the GPU vendor, if the PCI ID is not available
-  `deviceString` <[string]> String description of the GPU device, if the PCI ID is not available

*property of type*
- [SystemInfo.GPUInfo]

---


#### type: SystemInfo.GPUInfo

Provides information about the GPU(s) on the system.

*base type*
- **object**

*properties*
-  `devices` <array of [SystemInfo.GPUDevice]> The graphics devices on the system. Element 0 is the primary GPU
- *optional* `auxAttributes` <[object]> An optional dictionary of additional GPU related attributes
- *optional* `featureStatus` <[object]> An optional dictionary of graphics features and their status
-  `driverBugWorkarounds` <array of [string]> An optional array of GPU driver bug workarounds

*returned from command*
- [SystemInfo.getInfo]

[SystemInfo.GPUInfo]: systeminfo.md#type-systeminfogpuinfo "SystemInfo.GPUInfo"
[SystemInfo.getInfo]: systeminfo.md#command-systeminfogetinfo "SystemInfo.getInfo"
[SystemInfo.GPUDevice]: systeminfo.md#type-systeminfogpudevice "SystemInfo.GPUDevice"
[SystemInfo.GPUInfo]: systeminfo.md#type-systeminfogpuinfo "SystemInfo.GPUInfo"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"