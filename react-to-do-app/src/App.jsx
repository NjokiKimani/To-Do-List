import React, { useState } from 'react'
import './App.css'

//custom components imports
import MainPage from './Components/MainPage'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="text-center">Task Manager</h1>
      </header>
      <main className='flex flex-row flex-wrap gap-x-40'>
        <Sidebar />
        <MainPage />
      </main>
    </div>
  );
}

export default App
