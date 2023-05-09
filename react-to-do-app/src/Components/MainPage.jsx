import React, { useState} from 'react'
import './MainPage.css'
import TaskList from './TaskList'

//SVG & Icons imports
import { PlusIcon } from "@heroicons/react/24/solid"


const MainPage = ({addTask}) => {

const [task, setTask] = useState("")

  const [tasks, setTasks] = useState([]);



  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };



const handleFormSubmit =(e) =>{
    e.preventDefault();
    addTask({
        name: task,
        checked: false,
        id: Date.now(),
    })
    setTask("")
}


  return (
    <div className="mainPage flex gap-1 mt-3">
      <button className="btn p-0 h-6 rounded-none bg-transparent">
        <PlusIcon className="h-6 w-6 text-blue-500" />
      </button>
      <form className="toDo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="task"
            className="input"
            required
            autoFocus
            placeholder="Enter task"
            maxLength={75}
            value={task}
            onInput={(e) => setTask(e.target.value)}
          />
          <label htmlFor=""></label>
        </div>
      </form>
          {tasks && (<TaskList tasks ={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />)}
    </div>
  );
}

export default MainPage