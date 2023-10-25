import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
const ProfileChange = () => {
    const {counter ,setCounter} = useContext(AppContext);
  return (
    <>
    <p>Hello there!! the counter {counter}</p>
    <button onClick={()=>{
        setCounter(counter+1)
    }} >click</button>
    </>
  )
}

export default ProfileChange