import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./Screens/About";
import Contacts from './Screens/Contacts';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <About/>
      <Contacts/>
    </>
  )
}

export default App
