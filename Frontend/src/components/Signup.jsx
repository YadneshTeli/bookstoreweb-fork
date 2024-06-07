  import React from 'react';
  import { Link } from 'react-router-dom';
  import Login from '../components/Login';
  import { useForm } from "react-hook-form"


  function Signup() {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)



    return (
      <div className='flex h-screen items-center justify-center'>
        <div className='model-box relative'>
          <div className="dark:bg-black dark:text-white dark:shadow-gray-500 dark:shadow-lg
          border-[2px] dark:border-gray-400 p-5 rounded-3xl shadow-xl relative">
            
            <form onSubmit={handleSubmit(onSubmit)} >
              <form method="dialog">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">✕</Link>
              </form>
             
          
            <h3 className="font-bold text-xl">Sign up</h3>

            <div className='mt-4 space-y-4'>
              <span>Name</span><br />
              <input 
                type='name' 
                placeholder='Enter your name' 
                className='w-80 px-6 py-1 border rounded-md outline-none'
                {...register("name", { required: true })}
              /><br />
        {errors.name && <span className='text-sm text-red-600 ml-1'>This field is required</span>}
            </div>


            <div className='mt-4 space-y-2'>
              <span>Email</span><br />
              <input 
                type='email' 
                placeholder='Enter your email' 
                className='w-80 px-5 py-1 border rounded-md outline-none'
                {...register("email", { required: true })}
              /><br />
               {errors.email && 
               <span className='text-sm text-red-600 ml-1'>This field is required
               </span>}
            </div><br/>


            <div>
              <span>Password</span><br />
              <input 
                type='password' 
                placeholder='Enter your password' 
                className='w-80 px-5 py-1 border rounded-md outline-none'
                {...register("password", { required: true })}
              /><br/>
              {errors.password && 
               <span className='text-sm text-red-600 ml-1'>This field is required
               </span>}
            </div>

            <div className='flex justify-around mt-7'>
              <button className='bg-red-600 text-white px-10 py-2 rounded-full hover:cursor-pointer hover:transition-200 hover:bg-black hover:duration-500 
              hover:dark:bg-white hover:dark:text-black'>Sign up</button>
              <p className='mt-2 ml-3'>
                Already have an account?{" "}

                <button className='text-red-600 cursor-pointer underline'
                    onClick={()=>document.getElementById("my_modal_3").showModal()
                  }>
                  Login
                </button>
                <Login/>

              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

export default Signup;
