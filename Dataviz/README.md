# "/load-data"
- Loading data with fetch, async, and await
- Parsing CSV data with D3
- Counting rows & columns
- Estimating data size
- Constructing & displaying text with D3 & CSS
- Using d3.csv, csvParse & csvFormat 

# "/interact-with-react"
A program that follows your mouse with a circle
- Mouse events
- Unidirectional data flow
- The notion of "State"
- React's useState hook

# "/world-atlas"
- d3.json to receive to TopoJSON from WorldAtlas project
- topojson.feature to convert TopoJSON geometries to GeoJSON geometries
- topojson.mesh to avoid the double rendering of shared arcs, the optional filter function to further remove the specified arcs
- d3.geoEquanEarch (or others) to project [lon, lat] to SVG coordinates
- d3.geoPath to convert GeoJSON features into SVG path strings
- *use country name as key, because country id could be missing or dup in this dataset

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
