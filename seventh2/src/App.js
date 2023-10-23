
import { useState } from 'react';
import './App.css';
import Axios from 'axios'
// This exercise has been completed but the api link is not working

function App() {
  const [excuse, setExcuse] = useState("");

  function fetchExcuse(data){
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${data}/`).then((res)=>{
        setExcuse(res.data[0].excuse);
    })
  }

  
  return (
    <>
    <h1>Excuse</h1>
    <button
    onClick={()=>{
      fetchExcuse("party");
    }}
    >party</button>
    <button
    onClick={()=>{
      fetchExcuse("family");
    }}
    >family</button>
    <button
    onClick={()=>{
      fetchExcuse("office");
    }}
    >office</button>
    <p>{excuse}</p>
    </>
  );
}

export default App;
