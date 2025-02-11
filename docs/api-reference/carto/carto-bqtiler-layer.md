# CartoBQTilerLayer
>CartoBQTilerLayer will be deprecated in future versions. Use CartoLayer instead.  If you have existing code using this layer, check [the migration steps](#migration-to-cartolayer).

`CartoBQTilerLayer` is a layer to visualize large datasets (millions or billions of rows) directly from [Google BigQuery](https://cloud.google.com/bigquery) without having to move data outside of BigQuery.

First you need to generate a tileset of your dataset in your BigQuery account using CARTO BigQuery Tiler. For more info click [here](https://carto.com/bigquery-tiler/).
 
```js
import DeckGL from '@deck.gl/react';
import {CartoBQTilerLayer} from '@deck.gl/carto';

function App({viewState}) {
  const layer = new CartoBQTilerLayer({
    data: 'cartobq.maps.nyc_taxi_points_demo_id',
    getLineColor: [255, 255, 255],
    getFillColor: [238, 77, 90],
    pointRadiusMinPixels: 2,
    lineWidthMinPixels: 1
  });

  return <DeckGL viewState={viewState} layers={[layer]} />;
}
```

## Migration to CartoLayer

To migrate from `CartoBQTilerLayer` to `CartoLayer` you only need to change the layer name and set `type` property to `MAP_TYPES.TILESET`:

```js
import DeckGL from '@deck.gl/react';
import {CartoLayer, MAP_TYPES} from '@deck.gl/carto';

function App({viewState}) {
  const layer = new CartoLayer({
    type: MAP_TYPES.TILESET,
    data: 'cartobq.maps.nyc_taxi_points_demo_id',
    getLineColor: [255, 255, 255],
    getFillColor: [238, 77, 90],
    pointRadiusMinPixels: 2,
    lineWidthMinPixels: 1
  });

  return <DeckGL viewState={viewState} layers={[layer]} />;
}
```

## Installation

To install the dependencies from NPM:

```bash
npm install deck.gl
# or
npm install @deck.gl/core @deck.gl/layers @deck.gl/carto
```

```js
import {CartoBQTilerLayer} from '@deck.gl/carto';
new CartoBQTilerLayer({});
```

To use pre-bundled scripts:

```html
<script src="https://unpkg.com/deck.gl@^8.5.0/dist.min.js"></script>
<script src="https://unpkg.com/@deck.gl/carto@^8.5.0/dist.min.js"></script>

<!-- or -->
<script src="https://unpkg.com/@deck.gl/core@^8.5.0/dist.min.js"></script>
<script src="https://unpkg.com/@deck.gl/layers@^8.5.0/dist.min.js"></script>
<script src="https://unpkg.com/@deck.gl/geo-layers@^8.5.0/dist.min.js"></script>
<script src="https://unpkg.com/@deck.gl/carto@^8.5.0/dist.min.js"></script>
```

```js
new deck.carto.CartoBQTilerLayer({});
```


## Properties

Inherits all properties from [`MVTLayer`](/docs/api-reference/geo-layers/mvt-layer.md).


##### `data` (String)

Required. Tileset id

##### `uniqueIdProperty` (String)

* Default: `id`

Optional. Needed for highlighting a feature split across two or more tiles if no [feature id](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#42-features) is provided.

A string pointing to a tile attribute containing a unique identifier for features across tiles.

##### `credentials` (Object)

Optional. Overrides the configuration to connect with CARTO. Check the parameters [here](overview#carto-credentials).

### Callbacks

#### `onDataLoad` (Function, optional)

`onDataLoad` is called when the request to the CARTO tiler was completed successfully.

- Default: `tilejson => {}`

Receives arguments:

- `tilejson` (Object) - the response from the tiler service

##### `onDataError` (Function, optional)

`onDataError` is called when the request to the CARTO tiler failed. By default the Error is thrown.

- Default: `null`

Receives arguments:

- `error` (`Error`)


## Source

[modules/carto/src/layers/carto-bqtiler-layer.js](https://github.com/visgl/deck.gl/tree/8.6-release/modules/carto/src/layers/carto-bqtiler-layer.js)
