import React, { useState } from 'react';
import { useData } from '../components/worldAtlas/useData';
import { Marks } from '../components/worldAtlas/Marks';

const width = 960;
const height = 500;


export const WorldAtlas = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }


  return (
    <svg width={width} height={height}>
      <defs>
        <pattern id="gridPattern" patternUnits="userSpaceOnUse" width="10" height="10">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#000" strokeWidth="1" />
        </pattern>
      </defs>

        <Marks
          data={data}
          
        />

    </svg>
  );
};

