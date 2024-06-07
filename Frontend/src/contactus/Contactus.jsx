import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
function Contactus() {
  return (
    <>
        <Navbar/>
          <div className='min-h-screen dark:bg-black dark:text-white '>
        <Contact/>
          </div>
        <Footer/>
    </>
  )
}

export default Contactus
