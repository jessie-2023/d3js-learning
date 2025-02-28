import { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature, mesh } from 'topojson' // input TopoJSON output GeoJSON
import { Topology, GeometryObject } from 'topojson-specification'
import { WorldCountires } from '../../model/WorldCountires';

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

export const useData = () => {
  const [data, setData] = useState<WorldCountires>();
  console.log(data)

  useEffect(() => {
    json<Topology>(jsonUrl).then((topology) => {
        
        const geoLands = feature(topology!, topology!.objects.countries)
        if (geoLands.type === "Feature") {
          return "World map data error";
        }

        setData({
          lands: geoLands,
          borders: mesh(topology!, topology!.objects.countries as GeometryObject, (a, b) => a !== b)
        })
    })
  }, []);
  
  return data;
}
