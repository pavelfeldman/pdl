
### domain: SystemInfo

The SystemInfo domain defines methods and events for querying low-level system information.

#### SystemInfo.getInfo()
- returns
  - `gpu` <GPUInfo> Information about the GPUs on the system
  - `modelName` <[string]> A platform-dependent description of the model of the machine. On Mac OS, this is, for
example, 'MacBookPro'. Will be the empty string if not supported
  - `modelVersion` <[string]> A platform-dependent description of the version of the machine. On Mac OS, this is, for
example, '10.1'. Will be the empty string if not supported
  - `commandLine` <[string]> The command line string used to launch the browser. Will be the empty string if not
supported

Returns information about the system.