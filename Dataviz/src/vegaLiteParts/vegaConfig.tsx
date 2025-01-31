// Appearance customization to improve readability
// https://vega.github.io/vega-lite/docs/

const dark = '#3e3c38';
export const vegaConfig = {
    axis: {
        domain: false,
        tickColor: 'lightgray'
    },
    style: {
        "guide-label": {
            fontsize: 20,
            fill: dark,
        },
        "guide-title": {
            fontSize: 30,
            fill: dark,
            labelLimit: 0,
        }
    }
}