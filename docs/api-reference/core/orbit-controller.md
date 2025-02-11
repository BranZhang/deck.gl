# OrbitController

Inherits from [Base Controller](/docs/api-reference/core/controller.md).

The `OrbitController` class can be passed to either the `Deck` class's [controller](/docs/api-reference/core/deck.md#controller) prop or a `View` class's [controller](/docs/api-reference/core/view.md#controller) prop to specify that viewport interaction should be enabled.

`OrbitController` is the default controller for [OrbitView](/docs/api-reference/core/orbit-view.md).

## Usage

Use with the default view:

```js
import {Deck, OrbitView} from '@deck.gl/core';

new Deck({
  views: new OrbitView(),
  controller: {dragPan: false, inertia: true},
  initialViewState: viewState
});
```

is equivalent to:

```js
import {Deck, OrbitView} from '@deck.gl/core';

new Deck({
  views: new OrbitView({
    controller: {dragPan: false,  inertia: true}
  }),
  initialViewState: viewState
})
```

## Options

Supports all [Controller options](/docs/api-reference/core/controller.md#options) with the following default behavior:

- `dragMode`: default `'rotate'` (drag to rotate, shift/ctrl + drag to pan)
- `keyboard`: arrow keys to pan, arrow keys with shift/ctrl down to rotate, +/- to zoom

## Custom OrbitController

You can further customize the `OrbitController`'s behavior by extending the class:

```js
import {Deck, OrbitView, OrbitController} from '@deck.gl/core';

class MyOrbitController extends OrbitController {

  handleEvent(event) {
    if (event.type === 'pan') {
      // do something
    } else {
      super.handleEvent(event);
    }
  }
}

new Deck({
  views: new OrbitView(),
  controller: {type: MyOrbitController},
  initialViewState: viewState
})
```

See the `Controller` class [documentation](/docs/api-reference/core/controller.md#methods) for the methods that you can use and/or override.


## Source

[modules/core/src/controllers/orbit-controller.js](https://github.com/visgl/deck.gl/tree/8.6-release/modules/core/src/controllers/orbit-controller.js)
