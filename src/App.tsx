
import './App.css';
import { useState } from 'react';
import clsx from 'clsx';

function App() {
  let [counter, add] = useState(0);
  function clickMe(){
      add(counter+1)
      console.log(counter)
  }

  // const kitty = {
  //   name: "Milly",
  //   gender: "F"
  // }

let [clicked, setState] = useState(false) 

  function handleClick(){
    setState(clicked = true)
  }

  return (
    <>
    <button onClick={clickMe}>current count: {counter}</button>
    <div></div>  

    <button className={'box' + ' ' + clsx(clicked ? "milly" : null)} onClick={handleClick} value={"Milly"}>Milly</button>
    <button className={'box' + ' ' + clsx(clicked ? "merlino" : null)} onClick={handleClick} value={"Merlino"}>Merlino</button>
    <button className={'box' + ' ' + clsx(clicked ? "miffie" : null)} onClick={handleClick} value={"Miffie"}>Miffie</button>
    </>
  )
  
}

export default App
