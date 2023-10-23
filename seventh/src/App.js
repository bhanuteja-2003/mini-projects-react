import Axios from "axios";
import { useState ,useEffect} from "react";


function App() {
  const [catFact, setCatFact] = useState("")

  const getCatFact = ()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact);
    })
  }

  useEffect(() => {
    getCatFact()
  }, [])
  

  

  return (
    <>
    <button 
    onClick={()=>{
      getCatFact()
    }}
    >click</button>
    <p>{catFact}</p>
    
    </>
  );
}

export default App;
