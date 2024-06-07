import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  

  return (
  <div>
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box dark:bg-black dark:text-white">
 
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
           <div method="model">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">✕</button>
            </div>

        <h3 className="font-bold text-xl">Login</h3>
        <div className='mt-4 space-y-2'>
        <span>Email </span><br/> 
        <input 
        type='email'
        placeholder='Enter your email'
        className='w-80 px-5 py-1 border rounded-md outline-none'
        {...register("email", { required: true })}>
        </input><br/>
        {errors.email && <span className='text-sm text-red-600 ml-1'>This field is required</span>}<br/><br/>
        </div>

        <div>
        <span>Password </span><br/>
        <input 
        type='password' 
        placeholder='Enter your password'
        className='w-80 px-5 py-1 border rounded-md outline-none'
        {...register("password", { required: true })}>
        </input><br/>
        {errors.password && <span className='text-sm text-red-600 ml-1'>This field is required</span>}
       </div>

      <div className='flex justify-around mt-7'>
      <button className='bg-red-600 text-white h-10 w-20 rounded-full hover:cursor-pointer hover:transition-200 hover:bg-black hover:duration-500'>Login</button>{" "}
      <p className='mt-2'>Not registered yet? 
      <Link to="/signup" className= 'text-red-600 cursor-pointer underline '>
        Signup
      </Link>{" "}
      </p>
      </div>
      </form>
      </div>
    </dialog>
  </div>



  );
}

export default Login
