interface EyeCircleProps {
    x: number,
    y: number,
    r: number,
}
export const EyeCircle = ({x, y, r}: EyeCircleProps) => (
    <circle 
              cx={x} 
              cy={y}  
              r={r}            
    />
)