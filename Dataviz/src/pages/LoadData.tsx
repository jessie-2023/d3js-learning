import {csv, csvFormat, csvParse} from 'd3'
import { useState } from 'react';

const colorUrl = 'https://gist.githubusercontent.com/jessie-2023/977d5dc2b9589b7bdc0214a12d5bb0df/raw/cssNamedColors.csv'
const width = 960;
const height = 500;

const message = data => {
  let message = '';
  message = message + Math.round(csvFormat(data).length / 1024) + 'kB\n';
  message = message + data.columns.length + 'columns\n';
  message = message + data.length + 'row';
  return message;
}

export const LoadData = () => {
  const [data, setData] = useState(null);
  
  csv(colorUrl).then(data => {
    setData(data);
  })

/**  Parsing data with D3
  csv(colorUrl) // take in a URL, return a promise
  .then(data => {
    let message = 'The csv file is of ';
    message = message + Math.round(csvFormat(data).length / 1024) + ' kB, ';
    message = message + data.columns.length + ' columns, ';
    message = message + data.length + ' row';
    document.body.textContent = message; // DOM
  })
*/ 

/** With fetch, async, and await
  // declare an async version of fetch, which return a promise
  const fetchText = async (url:string) => {
    const response = await fetch(url); //await replace .then()
    return await response.text(); //await replace .then()
  }

  fetchText(colorUrl).then(text => { 
    const data = csvParse(text); //cast into Array
    let message = '';
    message = message + Math.round(text.length / 1024) + 'kB\n';
    message = message + data.columns.length + 'columns\n';
    message = message + data.length + 'row';
    document.body.textContent = message;
  }); */

/** Pyramid of doom 
  fetch(colorUrl).then(response => {
    response.text().then(text => {
      console.log(text)
    })   
  })  */ 
      
  return (<pre>{data ? message(data) : 'Loading'}</pre>)  
}