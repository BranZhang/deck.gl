import mapboxgl from 'mapbox-gl';
import {Deck} from '@deck.gl/core';
import {fetchMap} from '@deck.gl/carto';

const cartoMapId = '52dcbaa4-f84c-4fc8-93a9-628ed859f937';
const appClient = 'deck-gl-pure-js-carto';

// Get map info from CARTO and update deck
fetchMap({cartoMapId, client: appClient}).then(({initialViewState, mapStyle, layers}) => {
  const deck = new Deck({canvas: 'deck-canvas', controller: true, initialViewState, layers});

  // Add Mapbox GL for the basemap. It's not a requirement if you don't need a basemap.
  const MAP_STYLE = `https://basemaps.cartocdn.com/gl/${mapStyle.styleType}-gl-style/style.json`;
  const map = new mapboxgl.Map({container: 'map', style: MAP_STYLE, interactive: false});
  deck.setProps({
    onViewStateChange: ({viewState}) => {
      const {longitude, latitude, ...rest} = viewState;
      map.jumpTo({center: [longitude, latitude], ...rest});
    }
  });
});
