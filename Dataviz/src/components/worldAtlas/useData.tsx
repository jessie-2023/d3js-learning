import { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature } from 'topojson'
import { Feature, FeatureCollection} from "geojson";
import { Topology } from 'topojson-specification'

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

export const useData = () => {
  const [data, setData] = useState<Feature | FeatureCollection | null>(null);

  useEffect(() => {
    json<Topology>(jsonUrl).then((topology) => {

        setData(feature(topology!, topology!.objects.countries))
  });
  }, []);
  
  return data;
}