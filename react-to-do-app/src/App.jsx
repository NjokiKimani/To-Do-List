import React, { useState } from 'react'
import './App.css'

//custom components imports
import MainPage from './Components/MainPage'
import Sidebar from './Components/Sidebar'

function App() {

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
    console.log(task);
  };

  return (
    <div className="container">
      <header>
        <h1 className="text-center">Task Manager</h1>
      </header>
      <main className=''>
        <Sidebar />
        <MainPage addTask={addTask}/>
      </main>
    </div>
  );
}

export default App
