import React from 'react'
import Bannerr from '../assets/images/Banner.gif'

function Banner() {
  return <>
    <div className='max-w-screen-2x1 container mx-auto md:px-19 px-10 flex flex-col md:flex-row my-10'>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32 '>
            <div className='space-y-10'>
            <h1 className='text-4xl font-bold'>
              Hello, welcome to learn <span className='text-red-600'>something new today!!</span></h1>
            <p>
            Welcome to BookStore, your gateway to an endless world of stories. Whether you're a fan of timeless classics or the latest bestsellers, we have something for every book lover. Dive into our carefully curated collection and embark on a literary adventure today!
            </p>
            
            <label className="input input-bordered flex items-center gap-3 w-80">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow" placeholder="Email" />
            </label>
            </div>
            <button className="btn mt-6 mb-2 bg-red-600 text-white hover:bg-black py-3">Subscribe</button>
        </div>
        <div className='order-1 w-full px-2 py-14 md:px-8 md:py-28 md:w-1/2'>
          <img src={Bannerr} className='w-full h-auto rounded-3xl '/>
        </div>
    </div>
  </>
}

export default Banner
