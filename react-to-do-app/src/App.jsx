import React, { useState } from 'react'
import './App.css'

//custom components imports
import MainPage from './Components/MainPage'
import Sidebar from './Components/Sidebar'
import TaskList from './Components/TaskList'

function App() {

  const [tasks, setTasks] = useState([])

const addTask = (task) => {
  setTasks(prevState => [...prevState, task])
  console.log(task)
}



  return (
    <div className="container">
      <header>
        <h1 className="text-center">Task Manager</h1>
      </header>
      <main className='flex flex-row flex-wrap gap-x-40'>
        <Sidebar />
        <MainPage addTask={addTask}/>
      </main>
      {tasks && <TaskList tasks={tasks}/>}
    </div>
  );
}

export default App
