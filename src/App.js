import { useEffect, useState } from "react";

function App() {

  const[solution, setSolution] =useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(json => {
        // grab random int between 0 & 5756 from json array
      const randomSolution = json[Math.floor(Math.random()*json.length)]
      setSolution(randomSolution.word)
})
  }, [setSolution])


  return (
   <div className="App">  
      <h1>Wordle</h1>
      {solution && <div> Solution is: {solution}</div>}
    </div>
  );
}

export default App;


