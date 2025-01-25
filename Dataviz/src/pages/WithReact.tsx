import { MouseEvent, useCallback, useState } from "react";

interface Center {
    clientX: number,
    clientY: number,
}

const width = 960;
const height = 500;
const circleRadius = 20;
const initialCenter = {
    clientX: width/2,
    clientY: height/2,
}

export const WithReact = () => {
    const [center, setCenter] = useState<Center>(initialCenter);
    
    const handleMouseMove = useCallback((event: MouseEvent) => {
        const {clientX, clientY} = event; // ES6 destructuring syntax: pull properties out of 
        setCenter({clientX, clientY}); // an object and store their values in variables of the same name       
        },[setCenter])
    
    return (<>
        <h2>The circle will always follow your mouse</h2>
        <svg width={width} height={height} onMouseMove={handleMouseMove}>
            <circle
                cx={center?.clientX}
                cy={center?.clientY}
                r={circleRadius}
            />
        </svg>
        </>)
}