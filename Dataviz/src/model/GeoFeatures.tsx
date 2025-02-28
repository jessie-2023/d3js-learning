import { Feature, FeatureCollection, Geometry } from "geojson";

export interface GeoFeature = Feature<Geometry, {properties: {name: string}}>