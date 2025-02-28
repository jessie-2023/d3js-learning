import { geoEqualEarth, geoPath } from 'd3';
import { Feature } from "geojson";
import { WorldCountires } from '../../model/WorldCountires';


const projection = geoEqualEarth();
const pathGeo = geoPath(projection);

export const Marks = ({ data: {lands, borders} }: {data: WorldCountires}) => (
  <g className="marks">
    <path className="sphere" d={pathGeo({type: 'Sphere'}) as string} /> 
    {lands!.features.map((feature: Feature) => {
      // console.log(feature.id);
      // console.log(feature.properties!.name);
      
      return (
        <path 
          key={feature.properties!.name} 
          d={pathGeo(feature) as string} 
          stroke={feature.id === '156' ? 'blue' : 'none'} // Default stroke is none
          fill={feature.id === '156' ? 'red' : '#137B80'} // Default fill
        /> // id could be missing / dup ? need to use name as key
    )})}
    <path className="interiors" d={pathGeo(borders!) as string} />
  </g>
  
);
