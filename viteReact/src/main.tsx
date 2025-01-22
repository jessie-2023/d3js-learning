import React from 'react';
import ReactDOM from 'react-dom/client';
import {BackgroundCircle} from './component/BackgroundCircle';
import { EyeCircle } from './component/EyeCircle';
import { ArcPath } from './component/ArcPath';
import { LinePath } from './component/LinePath';

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
        <BackgroundCircle 
          r={radius} 
          strokeWidth={strokeWidth}
          color='yellow'
        />
        <EyeCircle 
          x={-eyeOffsetX} 
          y={-eyeOffsetY}  
          r={eyeRadius}            
        />
        <EyeCircle 
            x={eyeOffsetX} 
            y={-eyeOffsetY}  
            r={eyeRadius}            
        />
        <ArcPath 
          innerR={mouthRadius - mouthWidth}
          outerR={mouthRadius}
          start={Math.PI * 0.5}
          end={Math.PI * 1.5}
        />
      </g>
      <g transform={`translate(${centerXb}, ${centerYa})`}>
        <BackgroundCircle 
          r={radius} 
          strokeWidth={strokeWidth}
          color='grey'
        />
        <ArcPath 
          innerR={eyeOffsetX * 2 - eyeRadius}
          outerR={eyeOffsetX * 2}
          start={Math.PI * 1.6}
          end={Math.PI * 1.85}
        />
        <EyeCircle 
              x={-eyeOffsetX} 
              y={-eyeOffsetY}  
              r={eyeRadius}            
          />
        <LinePath
          width={eyeRadius}
          data={eyeLine}
        />
        <ArcPath 
          innerR={mouthRadius - mouthWidth * 2}
          outerR={mouthRadius}
          start={Math.PI * 0.5}
          end={Math.PI * 1.05}
        />
      </g>
      <g transform={`translate(${centerXa}, ${centerYb})`}>
        <BackgroundCircle 
            r={radius} 
            strokeWidth={strokeWidth}
            color='pink'
        />
        <EyeCircle 
          x={-eyeOffsetX} 
          y={-eyeOffsetY}  
          r={eyeRadius}            
        />
        <EyeCircle 
            x={eyeOffsetX} 
            y={-eyeOffsetY}  
            r={eyeRadius}            
        />
        <LinePath
          width={eyeRadius * 0.5}
          data={noseLine}
        />
      </g>
    </svg>
);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);
root.render(<App />);

