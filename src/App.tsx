
import './App.css';
import { useState } from 'react';

function App() {
  let [counter, add] = useState(0);
  function clickMe(){
      add(counter+1)
      console.log(counter)
    }


  return (
    <>
     <> 

    <button onClick={clickMe}>current count: {counter}</button>
    </>
    <div></div>  
    </>
   
  )
  
}

export default App
