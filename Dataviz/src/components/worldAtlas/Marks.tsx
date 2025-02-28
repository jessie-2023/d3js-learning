import { geoEqualEarth, geoPath } from 'd3';
import { Feature, FeatureCollection } from "geojson";


const projection = geoEqualEarth();
const path = geoPath(projection);

export const Marks = ({ data } : {data : FeatureCollection }) => (
  <g className="marks">
    {data.features.map((feature: Feature) => (
        <path key={feature.properties!.name} d={path(feature) as string} /> // id could be missing / dup ? need to use name as key
    ))}
  </g>
  
);
