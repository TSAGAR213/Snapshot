import { useState } from 'react';
import './App.css';
import Main from './components/Main/main';


function App() {
  const [searchnoun, setSearchnoun] = useState("");
 function changeHandle(value)
 {
  setSearchnoun(value)
 }
  return <>
      <Main noun={searchnoun} change={changeHandle}/>
  </>
   
  
}

export default App;
