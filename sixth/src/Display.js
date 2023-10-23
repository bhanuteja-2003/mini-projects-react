import React, { useState ,useEffect} from 'react'

const Display = () => {
    const [inputText, setinputText] = useState("")
    useEffect( ()=>{
        console.log("useEffect Hook triggered");
      } )

    const textDisplay = (event) =>{
            setinputText(event.target.value);
    } 
  return (
    <>
    <input type="text"  onChange={(event)=>{
        textDisplay(event);
    }} ></input>
    {inputText}
    </>
  )
}

export default Display