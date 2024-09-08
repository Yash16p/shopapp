


import React, { useState } from 'react'
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import {Link, Navigate, useNavigate} from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";



export default function LoginForm({ setIsLoggedIn }) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "", password: "",
  })

  const [showPassword, setShowPassword] = useState(false);


  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }

    ))
  }

function submitHandler(event) {
  event.preventDefault();
  setIsLoggedIn(true);
  // toast.success("Logged in")
   navigate("/")
}

  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-y-0 mt-4 w-1/2'>
      <label className='w-1/2'>
        <p className='text-richblack-5  leading-[1.375rem] text-[0.875rem] ' >
          Email Address<sup className='text-pink-800'>*</sup>
        </p>
      </label>

      <input
        required
        type='email'
        placeholder='Enter your email'
        value={FormData.email}
        onChange={changeHandler}
        name='email'
        className='bg-blue-100 border-solid border-2 rounded-[0.5rem] text-richblack-5 p-[12px] border-black '
      />

      <label className='w-full relative mt-4'>
        <p className='text-richblack-5  leading-[1.375rem] text-[0.875rem]' >
          Password<sup className='text-pink-800'>*</sup>
        </p>
        <input
          required
          type={showPassword ? ("text") : ("password")}
          placeholder='Enter your Password'
          value={FormData.password}
          onChange={changeHandler}
          name='password'
          className='bg-blue-100  border-2 border-black rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

        />

        <span
          className='absolute right-3 top-[38px] cursor-pointer'
          onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ?

            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :

            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
        </span>

        <Link to="#">
          <p className='mt-1 text-blue-600 ml-100'>
            Forgot Password
          </p>
        </Link>
      </label>

      <button className='bg-yellow-500 w-full rounded-[10px] mt-[40px] p-[8px] font-medium text-[1.2rem]'>
        Sign in
      </button>

    </form>
  )
}
