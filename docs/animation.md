
### domain: Animation

#### Animation.disable()

Disables animation domain notifications.

#### Animation.enable()

Enables animation domain notifications.

#### Animation.getCurrentTime()
- parameters
  - `id` <[string]> Id of animation
- returns
  - `currentTime` <[number]> Current time of the page

Returns the current time of the an animation.

#### Animation.getPlaybackRate()
- returns
  - `playbackRate` <[number]> Playback rate for animations on page

Gets the playback rate of the document timeline.

#### Animation.releaseAnimations()
- parameters
  - `animations` array of <[string]> List of animation ids to seek

Releases a set of animations to no longer be manipulated.

#### Animation.resolveAnimation()
- parameters
  - `animationId` <[string]> Animation id
- returns
  - `remoteObject` <Runtime.RemoteObject> Corresponding remote object

Gets the remote object of the Animation.

#### Animation.seekAnimations()
- parameters
  - `animations` array of <[string]> List of animation ids to seek
  - `currentTime` <[number]> Set the current time of each animation

Seek a set of animations to a particular time within each animation.

#### Animation.setPaused()
- parameters
  - `animations` array of <[string]> Animations to set the pause state of
  - `paused` <[boolean]> Paused state to set to

Sets the paused state of a set of animations.

#### Animation.setPlaybackRate()
- parameters
  - `playbackRate` <[number]> Playback rate for animations on page

Sets the playback rate of the document timeline.

#### Animation.setTiming()
- parameters
  - `animationId` <[string]> Animation id
  - `duration` <[number]> Duration of the animation
  - `delay` <[number]> Delay of the animation

Sets the timing of an animation node.

#### event: Animation.animationCanceled
- `id` <[string]> Id of the animation that was cancelled

Event for when an animation has been cancelled.

#### event: Animation.animationCreated
- `id` <[string]> Id of the animation that was created

Event for each animation that has been created.

#### event: Animation.animationStarted
- `animation` <Animation> Animation that was started

Event for animation that has been started.