import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student.jsx'

function App() {
 

  return (
    <>
    <div>
      <h1>Student Management </h1>
      <p>Welcome to our student portal</p>
      <h2>Student information</h2>
      <p>Name: Gazi</p>
      <p>Roll No: 101</p>
      <p> Course :CSE</p> 
    </div>
    <Student />
    <Student />
    <Student />
    </>
  )
}

export default App
