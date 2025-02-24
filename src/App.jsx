import React from 'react'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer' 
 import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className='overflow-x-hidden '>
     <Navbar/>
     <Hero />
     <Header/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
