
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter'
import {CounterContext} from './context/CounterContext'

// function App() {
//   // 2
//   const [count, setCount] =useState(0)
  
//   return 
//   //  3
//   <Counter count={count} setCount={setCount}/>
  
//   ;
// }


function App() {
  // 2
  const [count, setCount] =useState(0)
  
  return (
  <CounterContext.Provider value ={{count,setCount}}>
    <Counter/>
  </CounterContext.Provider>

  )
}


export default App;
