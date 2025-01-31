import * as vl from "vega-lite-api";

// Graph with chainable method using vega-lite-api
export const VegaLiteApi = vl.markCircle({
  size: 300,
  opacity: 0.2
})
  .encode(
    vl.x().fieldQ("weight").scale({ zero: false }),
    vl.y().fieldQ("horsepower").scale({ zero: false }),
    vl.color().fieldN("origin"),
    vl.size().fieldQ("mpg"),
    vl.tooltip().fieldN("name")
  ) 



