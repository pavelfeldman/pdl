
### domain: Profiler

#### Profiler.disable()

#### Profiler.enable()

#### Profiler.getBestEffortCoverage()
- returns
  - `result` array of <ScriptCoverage> Coverage data for the current isolate

Collect coverage data for the current isolate. The coverage data may be incomplete due to
garbage collection.

#### Profiler.setSamplingInterval()
- parameters
  - `interval` <[integer]> New sampling interval in microseconds

Changes CPU profiler sampling interval. Must be called before CPU profiles recording started.

#### Profiler.start()

#### Profiler.startPreciseCoverage()
- parameters
  - `callCount` <[boolean]> Collect accurate call counts beyond simple 'covered' or 'not covered'
  - `detailed` <[boolean]> Collect block-based coverage

Enable precise code coverage. Coverage data for JavaScript executed before enabling precise code
coverage may be incomplete. Enabling prevents running optimized code and resets execution
counters.

#### Profiler.startTypeProfile()

Enable type profile.

#### Profiler.stop()
- returns
  - `profile` <Profile> Recorded profile

#### Profiler.stopPreciseCoverage()

Disable precise code coverage. Disabling releases unnecessary execution count records and allows
executing optimized code.

#### Profiler.stopTypeProfile()

Disable type profile. Disabling releases type profile data collected so far.

#### Profiler.takePreciseCoverage()
- returns
  - `result` array of <ScriptCoverage> Coverage data for the current isolate

Collect coverage data for the current isolate, and resets execution counters. Precise code
coverage needs to have started.

#### Profiler.takeTypeProfile()
- returns
  - `result` array of <ScriptTypeProfile> Type profile for all scripts since startTypeProfile() was turned on

Collect type profile.

#### event: Profiler.consoleProfileFinished
- `id` <[string]> 
- `location` <Debugger.Location> Location of console.profileEnd()
- `profile` <Profile> 
- `title` <[string]> Profile title passed as an argument to console.profile()

#### event: Profiler.consoleProfileStarted
- `id` <[string]> 
- `location` <Debugger.Location> Location of console.profile()
- `title` <[string]> Profile title passed as an argument to console.profile()

Sent when new profile recording is started using console.profile() call.