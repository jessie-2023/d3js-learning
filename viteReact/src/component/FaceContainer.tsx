import { ReactNode } from "react";

interface FaceContainerProps {
    children: ReactNode,
    centerX: number,
    centerY: number,
}

export const FaceContainer = ({children, centerX, centerY}: FaceContainerProps) => (
  <g transform={`translate(${centerX}, ${centerY})`}>    
        {children}      
  </g>
)
