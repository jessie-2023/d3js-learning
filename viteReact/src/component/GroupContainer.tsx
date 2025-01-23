import { ReactNode } from "react";

interface GroupProps {
    children: ReactNode,
    width: number,
    height: number,
}

export const GroupContainer = ({children, width, height}: GroupProps) => (
  <svg width={width} height={height}>      
        {children}      
  </svg>
)
