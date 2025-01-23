import { ReactNode } from "react";

interface FaceContainerProps {
    children: ReactNode,
    centerX: number,
    centerY: number,
    width: number,
    height: number,
}

export const MultiFacesContainer = ({children, centerX, centerY, width, height}: FaceContainerProps) => (
  <svg width={width} height={height}> 
    <g transform={`translate(${centerX}, ${centerY})`}>    
        {children}      
    </g>
  </svg>     
)
