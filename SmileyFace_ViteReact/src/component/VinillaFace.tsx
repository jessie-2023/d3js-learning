import { ArcPath } from "./ArcPath";
import { BackgroundCircle } from "./BackgroundCircle";
import { EyeCircle } from "./EyeCircle";

interface VanillaProps {
    radius: number,
    strokeWidth: number,
    eyeOffsetX: number,
    eyeOffsetY: number,
    eyeRadius: number,
    innerR: number,
    outerR: number,
    start: number,
    end: number,
    color: string,
}

export const VanillaFace = ({radius, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, innerR, outerR, start, end, color}: VanillaProps) => (<>
    <BackgroundCircle
        r={radius} 
        strokeWidth={strokeWidth}
        color={color}
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
        innerR={innerR}
        outerR={outerR}
        start={start}
        end={end}
    />
</>)