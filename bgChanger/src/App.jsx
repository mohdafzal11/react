import BgChanger from './components/BgChanger'
import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor]= useState("black")
  const colorHandler=(color)=>{
    setColor(color)
  }
  return (
    <div style={{backgroundColor:color}} className='w-full h-screen ' >
    <BgChanger colorHandler={colorHandler}></BgChanger>
    </div>
  )
}

export default App
