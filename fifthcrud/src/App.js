import {useState} from "react";
import './App.css';
import Task from './Task.js';

function App() {
  const [inputdata , setInputData] = useState();
  const [task , setTask] = useState([]);
  

  const updateInputData = (event)=>{
        setInputData(event.target.value);
  }
  const addNewTask = ()=>{
    const newTask = {
      id : task.length===0 ? 1 : task[task.length-1].id+1,
      name : inputdata,
      completed : false
    }
    const newTaskList = [...task , newTask];
    setTask(newTaskList);
    
  }
  const deleteTask = (id)=>{
    setTask(task.filter((seperateTask)=>{return  seperateTask.id!==id }))
  }
  
  const completeTask = (id)=>{

    setTask(
      task.map((t)=>{
        if(t.id===id){
          return {...t , completed:true};
        }
        else{
          return t;
        }
      })
    )

  }
 
     
  
  return (
    <>
    <div>
      <input onChange={updateInputData} ></input>
      <button  onClick={addNewTask}  >Add Task</button>
      {/* {inputdata} */}
      
    </div>
    <div>
    {task.map((task)=>{
        return <>
          <Task 
          name = {task.name}
          id  = {task.id}
          completed = {task.completed}
          deleteTask = {deleteTask}
          completeTask = {completeTask}
          
          
          />
        </>
    })}

    </div>
    
    </>
  );
}

export default App;
