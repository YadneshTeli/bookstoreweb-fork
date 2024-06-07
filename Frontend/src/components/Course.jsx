import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

function Course() {
  return (
    <>
       <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 dark:bg-black'>
          <div className='dark:bg-black pt-28 items-center text-center justify-centre  '>
            <h1 className='text-2xl font-semibold md:text-4xl'>
              We're delighted to have you here{' '} 
              <span className='text-red-600'>
                Babe! 
              </span>
            </h1>        
            <p className='mt-20'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea et quidem obcaecati voluptates ad natus quod minus quae, quibusdam ipsam vel hic! Fugiat et maxime praesentium, animi beatae sed porro dolorem impedit minus rem consequatur repellendus illo fuga. Voluptas, est adipisci quo tempora non aperiam beatae exercitationem consequuntur aut explicabo ratione quod autem, earum fugiat mollitia distinctio pariatur error rem ipsam cum tempore quae nemo maiores. 
              </p>
              <Link to='/'>
              <button className='bg-red-600 text-white px-5 py-3 rounded-full hover:bg-black hover:text-white mt-6 hover:duration-500'>
                Back
              </button>
              </Link>
          </div>
       </div>
       <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
       </div>
    </>
  )
}

export default Course
