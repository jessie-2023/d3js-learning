import React from 'react';
import ReactDOM from 'react-dom/client';
import { arc, line } from 'd3';

const width = 1000;
const height = 1000;
const centerXa = width * 0.25;
const centerYa = height * 0.25;
const centerXb = width * 0.75;
const centerYb = height * 0.75;
const strokeWidth = 5;
const radius = centerXa * 0.7 - strokeWidth * 0.5;

const eyeOffsetX = 60;
const eyeOffsetY = 60;
const eyeRadius = 25;
const mouthRadius = 80;
const mouthWidth = 5;

const arcGenerator = (start: number, end: number) => arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(start)
  .endAngle(end);

const lineGenerator = line<{x: number; y: number}>()
  .x(d => d.x)
  .y(d => d.y)

const eyeLine = [
  {x: eyeOffsetX - eyeRadius,  y: -eyeOffsetY - eyeRadius / 4},
  {x: eyeOffsetX + eyeRadius,  y: -eyeOffsetY + eyeRadius / 4},
]

const noseLine = [
  {x: 0,  y: eyeRadius - eyeOffsetY},
  {x: - eyeOffsetX + eyeRadius,  y: eyeOffsetY},
  {x: eyeOffsetX - eyeRadius,  y: eyeOffsetY + eyeRadius / 4},
]


const App = () => (
    <svg width={width} height={height}>
      <g transform={`translate(${centerXa}, ${centerYa})`}>
        <circle
          r={radius}
          fill='yellow'
          stroke='black'
          strokeWidth={strokeWidth}
        />
        <circle 
              cx={-eyeOffsetX} 
              cy={-eyeOffsetY}  
              r={eyeRadius}            
          />
        <circle 
            cx={eyeOffsetX} 
            cy={-eyeOffsetY}  
            r={eyeRadius}            
        />
        <path d={arcGenerator(Math.PI * 0.5, Math.PI * 1.5)(undefined as never) as string}/>
      </g>
      <g transform={`translate(${centerXb}, ${centerYa})`}>
        <circle
          r={radius}
          fill='green'
          stroke='black'
          strokeWidth={strokeWidth}
        />
        <circle 
              cx={-eyeOffsetX} 
              cy={-eyeOffsetY}  
              r={eyeRadius}            
          />
        <path 
          d={lineGenerator(eyeLine) as string}
          stroke='black'
          strokeWidth={strokeWidth}
          fill='none'
        />
        <path d={arcGenerator(Math.PI * 0.5, Math.PI * 1.1)(undefined as never) as string}/>
      </g>
      <g transform={`translate(${centerXa}, ${centerYb})`}>
        <circle
          r={radius}
          fill='pink'
          stroke='black'
          strokeWidth={strokeWidth}
        />
        <circle 
              cx={-eyeOffsetX} 
              cy={-eyeOffsetY}  
              r={eyeRadius}            
          />
        <circle 
            cx={eyeOffsetX} 
            cy={-eyeOffsetY}  
            r={eyeRadius}            
        />
        <path 
          d={lineGenerator(noseLine) as string}
          stroke='black'
          strokeWidth={strokeWidth}
          fill='none'
        />
      </g>
    </svg>
);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);
root.render(<App />);

