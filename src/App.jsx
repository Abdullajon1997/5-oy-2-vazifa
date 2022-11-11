import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./Companents/Header/Header"
import Section from "./Companents/Section/Section"
import Footer from "./Companents/Footer/Footer"
import Card from "./Companents/Ul/Card/Card"
// import "./Companents/Ul/Card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header/>
    <main>
    <Section/>
    </main>
    <Footer/>

    </>
  )
}

export default App
