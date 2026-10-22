// Rebuild with d3-geo, topojson-client, and world-atlas installed in a temporary
// dependency directory. Usage: node _scripts/generate-travel-map.mjs <deps-dir>
// Basemap: Natural Earth public-domain data, distributed by world-atlas (ISC).
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const require = createRequire(resolve(process.argv[2], 'package.json'));
const { geoNaturalEarth1, geoPath, geoGraticule10 } = await import(pathToFileURL(require.resolve('d3-geo')).href);
const { feature } = require('topojson-client');
const world = JSON.parse(readFileSync(require.resolve('world-atlas/land-110m.json'), 'utf8'));
const projection = geoNaturalEarth1().fitExtent([[16, 16], [984, 484]], { type: 'Sphere' });
const path = geoPath(projection);
const land = feature(world, world.objects.land);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" role="img" aria-labelledby="title desc">
<title id="title">World map</title><desc id="desc">Natural Earth land outlines in the Natural Earth projection. Travel markers use the same projection.</desc>
<path d="${path(geoGraticule10())}" fill="none" stroke="#93bdc5" stroke-opacity=".18" stroke-width=".7"/>
<path d="${path(land)}" fill="#86b4b8" fill-opacity=".65" stroke="#badbd9" stroke-opacity=".45" stroke-width=".5"/>
</svg>\n`;
writeFileSync(new URL('../assets/img/travel-world.svg', import.meta.url), svg);

// Representative country/region locations, not a record of specific cities.
const places = [
  ['Singapore',103.82,1.35], ['Israel',35,31.5], ['Thailand',101,15],
  ['Malaysia',102,4], ['Taiwan',121,23.7], ['South Korea',127.8,36.3],
  ['Indonesia',118,-3], ['Japan',138,37], ['Turkey',35,39],
  ['Netherlands',5.3,52.2], ['Finland',26,64], ['Ukraine',31.5,49],
  ['France',2.5,46.5], ['Italy',12.5,42.5], ['Spain',-3.7,40],
  ['United States',-99,39], ['Canada',-106,56], ['Australia',134,-25],
  ['New Zealand',172.5,-41]
];
console.log(places.map(([name,lon,lat]) => { const [x,y] = projection([lon,lat]); return { name, x: +(x/10).toFixed(2), y: +(y/5).toFixed(2) }; }));
