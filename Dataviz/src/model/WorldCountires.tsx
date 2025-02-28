import { FeatureCollection, MultiLineString } from "geojson";

export interface WorldCountires  {
    lands: FeatureCollection | null
    borders: MultiLineString | null

}