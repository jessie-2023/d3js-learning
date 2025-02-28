*** learning notes for D3.js: https://www.youtube.com/watch?v=2LhoCfjm8R4 (taught by Curran Kelleher)

# SmileyFace_plain.html
half way to draw a smiley face with plain html 
introducing <svg>

# SmileyFace_failedSelfBundle_with_Rollup
- import React via CDN (content delivery network) https://www.unpkg.com/
- tried to start with Module Bundle (Rollup)
- difficult to config and replicate the setup as in tutorial
## Low level --> higher level
- Module Bundler (Rollup: manual setup, full control, performance optimizations, build process only
- Build Tool / Advanced Module Bulder (Vite: using Rollup internally, JSX handling, instant HMR
- Full Framework (Next.js: routing, backend, server-side rendering, API endpoints

# SmileyFace_ViteReact
- using vite for quick start and dev experience
- 1. replicate the half smiley face as in plain html, SVG + JSX
- 2. full smiley face with mouth: d3-shape for the arc
--- <path>, but no (x, y) for Arc
--- svg group element  <g>
- 3. refactor, reuse, nesting React component