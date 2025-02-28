import { line } from "d3";

interface LineData {
    x: number; 
    y: number;
}

interface LineProps {
    width: number;
    data: LineData[]
}

export const LinePath = ({width, data}: LineProps) => {
    const lineGenerator = line<LineData>()
        .x(d => d.x)
        .y(d => d.y)

    return (<path 
        d={lineGenerator(data) as string}
        stroke='black'
        strokeWidth={width}
        fill='none'
      />)
}