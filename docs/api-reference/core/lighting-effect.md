# LightingEffect

The `LightingEffect` applies ambient, point and directional lighting to layers which support material property.

<div style="position:relative;height:450px"></div>
<div style="position:absolute;transform:translateY(-450px);padding-left:inherit;padding-right:inherit;left:0;right:0">
  <iframe height="450" width="100%" scrolling="no" title="deck.gl LightingEffect Demo" src="https://codepen.io/vis-gl/embed/ZZwrZz/?height=450&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href='https://codepen.io/vis-gl/pen/ZZwrZz/'>deck.gl LightingEffect Demo</a> by vis.gl
    (<a href='https://codepen.io/vis-gl'>@vis-gl</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>
</div>

## Constructor

```js
new LightingEffect({light0, light1, light2, ...});
```

Parameters:
* `lights`(Object) - a collection of light sources. Keys can be any arbitrary name and values.

## Members

### Light Sources

##### `ambientLight` (Object, optional)

An [AmbientLight](/docs/api-reference/core/ambient-light.md) source which illuminates all the objects equally.

* Default: ambient light source with color = `[255, 255, 255]` and intensity = `1.0`

##### `directionalLights` (Array, optional)

Array of [DirectionalLight](/docs/api-reference/core/directional-light.md) source which emits from a specific directions.

* Default: two directional light sources

| Light Source |      Color      | Intensity |   Direction  |  _shadow  |
|:------------:|:---------------:|:---------:|:------------:|:--------:|
| 1            | [255, 255, 255] | 1.0       | [-1, -3, -1] |   false  |
| 2            | [255, 255, 255] | 0.9       | [1, 8, -2.5] |   false  |

* For rendering experimental shadow effect, `_shadow` prop of [DirectionalLight](/docs/api-reference/core/directional-light.md) must be set to `true`. The effect can be toggled on and off for a layer by setting layer's `shadowEnabled` prop.

##### `pointLights` (Array, optional)

Array of [PointLight](/docs/api-reference/core/point-light.md) source which emits from a point in all directions.

* Default: `[]`


## Remarks

* Only one ambient light is supported.
* Point light position uses the same coordinate system as view state.

## Source

[/modules/core/src/effects/lighting/lighting-effect.js](https://github.com/visgl/deck.gl/tree/8.6-release/modules/core/src/effects/lighting/lighting-effect.js)
