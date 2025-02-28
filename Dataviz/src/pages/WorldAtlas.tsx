import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
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
      
        <Marks
          data={data}
          
        />

    </svg>
  );
};

