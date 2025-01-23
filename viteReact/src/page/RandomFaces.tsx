import { range } from "d3";
import { MultiFacesContainer } from "../component/MultiFacesContainer";
import { VanillaFace } from "../component/VinillaFace";

const squareSize = 90
const origin = squareSize / 2
const faceRadius = origin * 0.9
const mouthThickness = faceRadius * 0.1
const colorArray = ['yellow', 'pink', 'grey', 'navy']

const faceArray = range(30);

export const RandomFaces = () => faceArray.map(() => (
    <MultiFacesContainer
        children={<VanillaFace 
            color={colorArray[Math.floor(Math.random()*4)]}
            radius={faceRadius}
            strokeWidth={faceRadius * 0.09}
            eyeOffsetX={faceRadius * 0.25}
            eyeOffsetY={faceRadius * 0.25}
            eyeRadius={faceRadius * (0.05 + 0.1 * Math.random())}
            innerR={faceRadius * 0.5}
            outerR={faceRadius * 0.5 + mouthThickness * Math.random()} 
            start={Math.PI * (0.5 + 0.2 * Math.random()) }
            end={Math.PI * (1.2 + 0.2 * Math.random())}
        />}
        width={squareSize}
        height={squareSize}
        centerX={origin}
        centerY={origin}
    />
))

