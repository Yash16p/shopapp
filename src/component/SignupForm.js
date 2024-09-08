


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";

// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


export default function SignupForm({ setIsLoggedIn }) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    setpassword: "",
    confirmpassword: ""
  })

  const[showPassword, setShowPassword] = useState(false)
  const [confirmpassword, setConfirmPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }

    ))
  }


  function submitHandler(event) {
    event.preventDefault();
    
   if(formData.setpassword != formData.confirmpassword){
    // toast.error("password doesn't match")
    return;
   }
   
    setIsLoggedIn(true);
    // toast.success("Account created")
   
    navigate("/")
   
    
  }


  return (
    <form onSubmit={submitHandler}>
    {/* first anme and last name */}

    <div className='flex gap-x-5 mt-[20px]'>
      <label className='w-full'>
        <p className='text-richblack-5  leading-[1.375rem] text-[0.875rem]'>First Name
        <sup  className='text-pink-200'>*</sup>
        </p>

        <input
          required
          type='text'
          name='firstName'
          placeholder='Enter your first name'
          onChange={changeHandler}
          value={FormData.firstName}
          className='bg-blue-100 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-2 border-black'
        />
      </label>

      <label className='w-full'>
        <p className='text-richblack-5  leading-[1.375rem] text-[0.875rem]'>Last Name 
        <sup  className='text-pink-200'>*</sup>
        </p>

        <input
          required
          type='text'
          name='lastName'
          placeholder='Enter your last name'
          onChange={changeHandler}
          value={FormData.lastName}
          className='bg-blue-100 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-2 border-black'
        />
      </label>
    </div>

    {/* email add */}
    <div className='mt-[20px]'>
    <label className='w-full'>
      <p className='text-richblack-5  leading-[1.375rem] text-[0.875rem]'>Email Address
      <sup  className='text-pink-200'>*</sup>
      </p>

      <input
        required
        type='email'
        name='email'
        placeholder='Enter your email'
        onChange={changeHandler}
        value={FormData.email}
        className='bg-blue-100 rounded-[0.5rem] text-richblack-5 w-1/2 p-[12px] border-2 border-black'
      />
    </label>
    </div>
   

    {/* confirm and create pass */}

    <div className='flex gap-x-5 w-full mt-[20px]'>
    <label className='w-full relative'>
      <p className='text-richblack-5  leading-[1.375rem] text-[0.875rem]'>Create Password
      <sup  className='text-pink-200'>*</sup>
      </p>

      <input
        required
        type={showPassword ? ("password") : ("text") }
        name='password'
        placeholder='Enter your password'
        onChange={changeHandler}
        value={FormData.password}
        className='bg-blue-100 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-2 border-black'
      />
      <span
        className='absolute right-3 top-[38px] cursor-pointer'
      onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? 
         (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>)
         : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
      </span>
    </label>


    <label className='w-full relative'>
      <p className='text-richblack-5  leading-[1.375rem] text-[0.875rem]'>Confirm Password
      <sup  className='text-pink-200'>*</sup>
      </p>

      <input
        required
        type={confirmpassword ? ("password") : ("text") }
        name='confirmPassword'
        placeholder='confirm password'
        onChange={changeHandler}
        value={FormData.confirmPassword}
        className='bg-blue-100 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-black border-2'
      />
      <span 
        className='absolute right-3 top-[38px] cursor-pointer'
      onClick={() => setConfirmPassword((prev) => !prev)}>
        {confirmpassword ?
         (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
          (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
      </span>
    </label>
    </div>

    <button className='bg-yellow-500 w-1/2 rounded-[10px] mt-[40px] p-[8px] font-medium text-[1.2rem]'>
    Create Account
  </button>
  </form>

  )
}

