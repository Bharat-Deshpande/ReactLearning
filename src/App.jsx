import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./Screens/About";
import Contacts from './Screens/Contacts';
import RegisterScreen from './Screens/Register';
import Register from './Screens/Register';
import UserList from './Screens/UserList';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <About/> */}
      {/* <Contacts/>
      <About/> */}
      {/* <Register/> */}
      <UserList/>
    </>
  )
}

export default App
