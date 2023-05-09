import React, { useState} from 'react'
import './MainPage.css'

//SVG & Icons imports
import { PlusIcon } from "@heroicons/react/24/solid"


const MainPage = ({addTask}) => {

const [task, setTask] = useState("")


const handleFormSubmit =(e) =>{
    e.preventDefault();
    addTask({
        name: task,
        checked: false,
        id: Math.floor(Math.random),
    })
    setTask("")
}


  return (
    <div className='mainPage flex gap-1 mt-3'>
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
    </div>
  );
}

export default MainPage