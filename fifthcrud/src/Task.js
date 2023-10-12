import React from 'react'
// import App from './App'

const Task = ({name , id , completed, deleteTask , completeTask}) => {
  return (
    <>
    <h1 style={{color : completed ? "green" : "red"}} >{name}</h1>
        <button onClick={()=>{
          deleteTask(id)
        }} >delete</button>
        <button onClick={()=>{
            completeTask(id)
        }} >complete</button>
        
    </>
  )
}

export default Task