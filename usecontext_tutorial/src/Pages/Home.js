import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

const Home = () => {
  const {counter} = useContext(AppContext);
  return (
    <>
    <h1>Home Page</h1>
    <p>{counter}</p>
    </>
  )
}

export default Home