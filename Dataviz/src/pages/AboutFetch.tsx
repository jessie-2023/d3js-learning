export const AboutFetch = () => {
    
  // declare an async version of fetch, which return a promise
  const fetchText = async (url:string) => {
    const response = await fetch(url); //await replace .then()
    return await response.text(); //await replace .then()
  }

  const colorUrl = 'https://gist.githubusercontent.com/jessie-2023/977d5dc2b9589b7bdc0214a12d5bb0df/raw/cssNamedColors.csv'
  const theCall = fetchText(colorUrl);
  
  console.log(theCall); // a promise
  theCall.then(text => console.log(text)); // the csv context
  
/* Pyramid of doom 
  fetch(url).then(response => {
    response.text().then(text => {
      console.log(text)
    })   
  })
*/ 

  return (
    <>
      <p>Load data using fetch</p>
    </>
  )
}