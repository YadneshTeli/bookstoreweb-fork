import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
function Aboutus() {
  return (
    <>
        <Navbar/>
          <div className='min-h-screen dark:bg-black dark:text-white '>
        <About/>
          </div>
        <Footer/>
    </>
  )
}

export default Aboutus
