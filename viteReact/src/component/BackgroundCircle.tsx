interface BackgroundCircleProps {
  r: number,
  strokeWidth: number,
  color: string,
}

export const BackgroundCircle = ({ r, strokeWidth, color }: BackgroundCircleProps) => (
  <circle
          r={r}
          fill={color}
          stroke='black'
          strokeWidth={strokeWidth}
  />
)