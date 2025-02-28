import { arc } from "d3";

interface ArcProps {
    innerR: number,
    outerR: number,
    start: number,
    end: number,
}

export const ArcPath = ({innerR, outerR, start, end}: ArcProps) => {

    const arcGenerator = (innerR: number, outerR: number, start: number, end: number) => arc()
      .innerRadius(innerR)
      .outerRadius(outerR)
      .startAngle(start)
      .endAngle(end);
    
    return (
        <path 
            d={arcGenerator(innerR, outerR, start, end)(undefined as never) as string}
        />)
}

      