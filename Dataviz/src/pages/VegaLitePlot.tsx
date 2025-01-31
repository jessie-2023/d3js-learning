import { useEffect, useState } from "react";
import { VegaLite } from "react-vega";
import { getData } from "../vegaLiteParts/getData";
import { VegaLiteApi } from "../vegaLiteParts/VegaLiteApi";
import { vegaConfig } from "../vegaLiteParts/vegaConfig";
import { DSVRowArray } from "d3";

export const VegaLitePlot = () => {
    const [data, setData] = useState<DSVRowArray<string> | null>(null);

    useEffect(() => {
        getData().then(setData);
    }, []);

    const vlToSpec = () => {
        return VegaLiteApi
          .data({ values: data })  // Pass data here
          .width(window.innerWidth * 0.8)  // Adjust for responsiveness
          .height(window.innerHeight * 0.8)
          .autosize({ type: "fit", contains: "padding" })
          .config(vegaConfig)
          .toSpec();
      };
    
    return (<>
        <div>
          {data ? <VegaLite spec={vlToSpec()} /> : <p>Loading chart...</p>}
        </div>
        <h1>Love vega-lite-api! Why no react wrapper!</h1>
    </>);
};
