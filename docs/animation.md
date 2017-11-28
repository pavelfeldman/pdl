
### domain: Animation

#### type: Animation.Animation = object

Animation instance.

*properties*
  - `id` <string]> `Animation`'s id
  - `name` <string]> `Animation`'s name
  - `pausedState` <boolean]> `Animation`'s internal paused state
  - `playState` <string]> `Animation`'s play state
  - `playbackRate` <number]> `Animation`'s playback rate
  - `startTime` <number]> `Animation`'s start time
  - `currentTime` <number]> `Animation`'s current time
  - `type` <string]> Animation type of `Animation`
  - `source` <[Animation.AnimationEffect]]> `Animation`'s source animation node
  - `cssId` <string]> A unique ID for `Animation` representing the sources that triggered this CSS
animation/transition

#### type: Animation.AnimationEffect = object

AnimationEffect instance

*properties*
  - `delay` <number]> `AnimationEffect`'s delay
  - `endDelay` <number]> `AnimationEffect`'s end delay
  - `iterationStart` <number]> `AnimationEffect`'s iteration start
  - `iterations` <number]> `AnimationEffect`'s iterations
  - `duration` <number]> `AnimationEffect`'s iteration duration
  - `direction` <string]> `AnimationEffect`'s playback direction
  - `fill` <string]> `AnimationEffect`'s fill mode
  - `backendNodeId` <[DOM.BackendNodeId]]> `AnimationEffect`'s target node
  - `keyframesRule` <[Animation.KeyframesRule]]> `AnimationEffect`'s keyframes
  - `easing` <string]> `AnimationEffect`'s timing function

#### type: Animation.KeyframesRule = object

Keyframes Rule

*properties*
  - `name` <string]> CSS keyframed animation's name
  - `keyframes` <array of [Animation.KeyframeStyle]> List of animation keyframes

#### type: Animation.KeyframeStyle = object

Keyframe Style

*properties*
  - `offset` <string]> Keyframe's time offset
  - `easing` <string]> `AnimationEffect`'s timing function

#### command: Animation.disable()

Disables animation domain notifications.

#### command: Animation.enable()

Enables animation domain notifications.

#### command: Animation.getCurrentTime()

Returns the current time of the an animation.

*parameters*
- `id` <string]> Id of animation

*returns*
- `currentTime` <number]> Current time of the page

#### command: Animation.getPlaybackRate()

Gets the playback rate of the document timeline.

*returns*
- `playbackRate` <number]> Playback rate for animations on page

#### command: Animation.releaseAnimations()

Releases a set of animations to no longer be manipulated.

*parameters*
- `animations` <array of string> List of animation ids to seek

#### command: Animation.resolveAnimation()

Gets the remote object of the Animation.

*parameters*
- `animationId` <string]> Animation id

*returns*
- `remoteObject` <[Runtime.RemoteObject]]> Corresponding remote object

#### command: Animation.seekAnimations()

Seek a set of animations to a particular time within each animation.

*parameters*
- `animations` <array of string> List of animation ids to seek
- `currentTime` <number]> Set the current time of each animation

#### command: Animation.setPaused()

Sets the paused state of a set of animations.

*parameters*
- `animations` <array of string> Animations to set the pause state of
- `paused` <boolean]> Paused state to set to

#### command: Animation.setPlaybackRate()

Sets the playback rate of the document timeline.

*parameters*
- `playbackRate` <number]> Playback rate for animations on page

#### command: Animation.setTiming()

Sets the timing of an animation node.

*parameters*
- `animationId` <string]> Animation id
- `duration` <number]> Duration of the animation
- `delay` <number]> Delay of the animation

#### event: Animation.animationCanceled

Event for when an animation has been cancelled.

*returns*
- `id` <string]> Id of the animation that was cancelled

#### event: Animation.animationCreated

Event for each animation that has been created.

*returns*
- `id` <string]> Id of the animation that was created

#### event: Animation.animationStarted

Event for animation that has been started.

*returns*
- `animation` <[Animation.Animation]]> Animation that was started

[Animation.AnimationEffect]: animation.md#animationanimationeffect
[DOM.BackendNodeId]: animation.md#dombackendnodeid
[Animation.KeyframesRule]: animation.md#animationkeyframesrule
[Animation.KeyframeStyle]: animation.md#animationkeyframestyle
[Runtime.RemoteObject]: animation.md#runtimeremoteobject
[Animation.Animation]: animation.md#animationanimation