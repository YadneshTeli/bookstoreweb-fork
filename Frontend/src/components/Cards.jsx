import React from 'react'

function Cards({item}) {
    console.log(item);
  return (
    <>
    <div className='mt-5 mb-3 p-3'>
    <div className="card w-70 bg-base-100 dark:shadow-neutral-800 shadow-xl hover:scale-105 duration-500 dark:bg-black dark:text-white ">
  <figure className='h-50'>
    <img src= {item.image} alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-wrap w-full">
      {item.title}
      <div className="badge badge-secondary bg-red-600">Free</div>
    </h2>
    <div className="card-actions justify-between">
      <div className="badge badge-outline mt-3">{item.gener}</div>
      <div className="hover:bg-red-600 duration-300 hover:text-white cursor-pointer px-2 py-1 rounded-full border-2 border-grey mt-1">Read now</div>
    </div>
    </div>
  </div>

</div>
    </>
  )
}

export default Cards

