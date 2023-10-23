
import { useEffect,useState} from 'react'
import './App.css';
import Display from './Display.js';

function App() {
  const [toggle, setToggle] = useState(false);
  useEffect(()=>{
    console.log("inside app.js");
  }  ,[])
  
  return (
    <>
    <button onClick={()=>{
        setToggle( (toggle)=>{ return !toggle}  )
    }} >click here</button>
    {toggle && <Display />}
    </>
  );
}

export default App;
