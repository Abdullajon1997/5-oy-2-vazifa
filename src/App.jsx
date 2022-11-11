import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./Companents/Header/Header"
import Section from "./Companents/Section/Section"
import Footer from "./Companents/Footer/Footer"
// import "./Companents/Ul/Button"
// import "./Companents/Ul/Card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header/>
    <Section/>
    <Footer/>

    </>
  )
}

export default App
