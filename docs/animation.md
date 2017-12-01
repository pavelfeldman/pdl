
### domain: Animation 🌱

---


#### command: Animation.disable

Disables animation domain notifications.

---


#### command: Animation.enable

Enables animation domain notifications.

---


#### command: Animation.getCurrentTime

Returns the current time of the an animation.

*parameters*
-  `id` <[string]> Id of animation

*returns*
-  `currentTime` <[number]> Current time of the page

---


#### command: Animation.getPlaybackRate

Gets the playback rate of the document timeline.

*returns*
-  `playbackRate` <[number]> Playback rate for animations on page

---


#### command: Animation.releaseAnimations

Releases a set of animations to no longer be manipulated.

*parameters*
-  `animations` <array of [string]> List of animation ids to seek

---


#### command: Animation.resolveAnimation

Gets the remote object of the Animation.

*parameters*
-  `animationId` <[string]> Animation id

*returns*
-  `remoteObject` <[Runtime.RemoteObject]> Corresponding remote object

---


#### command: Animation.seekAnimations

Seek a set of animations to a particular time within each animation.

*parameters*
-  `animations` <array of [string]> List of animation ids to seek
-  `currentTime` <[number]> Set the current time of each animation

---


#### command: Animation.setPaused

Sets the paused state of a set of animations.

*parameters*
-  `animations` <array of [string]> Animations to set the pause state of
-  `paused` <[boolean]> Paused state to set to

---


#### command: Animation.setPlaybackRate

Sets the playback rate of the document timeline.

*parameters*
-  `playbackRate` <[number]> Playback rate for animations on page

---


#### command: Animation.setTiming

Sets the timing of an animation node.

*parameters*
-  `animationId` <[string]> Animation id
-  `duration` <[number]> Duration of the animation
-  `delay` <[number]> Delay of the animation

---


#### event: Animation.animationCanceled

Event for when an animation has been cancelled.

*parameters*
-  `id` <[string]> Id of the animation that was cancelled

---


#### event: Animation.animationCreated

Event for each animation that has been created.

*parameters*
-  `id` <[string]> Id of the animation that was created

---


#### event: Animation.animationStarted

Event for animation that has been started.

*parameters*
-  `animation` <[Animation.Animation]> Animation that was started

---


#### type: Animation.Animation

Animation instance.

*base type*
- **object**

*properties*
-  `id` <[string]> `Animation`'s id
-  `name` <[string]> `Animation`'s name
-  `pausedState` <[boolean]> `Animation`'s internal paused state
-  `playState` <[string]> `Animation`'s play state
-  `playbackRate` <[number]> `Animation`'s playback rate
-  `startTime` <[number]> `Animation`'s start time
-  `currentTime` <[number]> `Animation`'s current time
-  `type` <[string]> Animation type of `Animation`
- *optional* `source` <[Animation.AnimationEffect]> `Animation`'s source animation node
- *optional* `cssId` <[string]> A unique ID for `Animation` representing the sources that triggered this CSS
animation/transition

*parameter in event*
- [Animation.animationStarted]

---


#### type: Animation.AnimationEffect

AnimationEffect instance

*base type*
- **object**

*properties*
-  `delay` <[number]> `AnimationEffect`'s delay
-  `endDelay` <[number]> `AnimationEffect`'s end delay
-  `iterationStart` <[number]> `AnimationEffect`'s iteration start
-  `iterations` <[number]> `AnimationEffect`'s iterations
-  `duration` <[number]> `AnimationEffect`'s iteration duration
-  `direction` <[string]> `AnimationEffect`'s playback direction
-  `fill` <[string]> `AnimationEffect`'s fill mode
- *optional* `backendNodeId` <[DOM.BackendNodeId]> `AnimationEffect`'s target node
- *optional* `keyframesRule` <[Animation.KeyframesRule]> `AnimationEffect`'s keyframes
-  `easing` <[string]> `AnimationEffect`'s timing function

*property of type*
- [Animation.Animation]

---


#### type: Animation.KeyframesRule

Keyframes Rule

*base type*
- **object**

*properties*
- *optional* `name` <[string]> CSS keyframed animation's name
-  `keyframes` <array of [Animation.KeyframeStyle]> List of animation keyframes

*property of type*
- [Animation.AnimationEffect]

---


#### type: Animation.KeyframeStyle

Keyframe Style

*base type*
- **object**

*properties*
-  `offset` <[string]> Keyframe's time offset
-  `easing` <[string]> `AnimationEffect`'s timing function

*property of type*
- [Animation.KeyframesRule]

[Animation.animationStarted]: animation.md#event-animationanimationstarted "Animation.animationStarted"
[Animation.Animation]: animation.md#type-animationanimation "Animation.Animation"
[Animation.AnimationEffect]: animation.md#type-animationanimationeffect "Animation.AnimationEffect"
[Animation.KeyframesRule]: animation.md#type-animationkeyframesrule "Animation.KeyframesRule"
[Animation.AnimationEffect]: animation.md#type-animationanimationeffect "Animation.AnimationEffect"
[DOM.BackendNodeId]: dom.md#type-dombackendnodeid "DOM.BackendNodeId"
[Animation.KeyframesRule]: animation.md#type-animationkeyframesrule "Animation.KeyframesRule"
[Animation.KeyframeStyle]: animation.md#type-animationkeyframestyle "Animation.KeyframeStyle"
[Runtime.RemoteObject]: runtime.md#type-runtimeremoteobject "Runtime.RemoteObject"
[Animation.Animation]: animation.md#type-animationanimation "Animation.Animation"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"
[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"
[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"