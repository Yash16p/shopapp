

import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FaGoogle } from "react-icons/fa";


export default function Template({ title, desc1, desc2, formtype, setIsLoggedIn }) {
  return (
   
    <div className='flex w-full  mx-auto '>

      <div className='w-full ml-10'>
        <h1 className='text-richblack-5 font-semibold text-[1.9rem] leading-[1.375]'>{title}</h1>


        <p className='text-[1.125rem] leading-[1.625rem]  '>
          <span className='text-richblack-100'>{desc1}</span>
          <br></br>
          <span className='text-richblack-100 italic'>{desc2}</span>
        </p>

        {formtype === "signup" ?
          (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
          (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
        }
        <div className='flex w-full items-center my-4 gap-x-2'>

          <div className='w-1/3 h-[1px] bg-richblack-700'></div>
          <p className='bg-richblack-700 font-medium leading-[1.375rem]'>
            OR
          </p>
          <div className='w-full h-[1px] bg-richblack-700 '></div>
        </div>



        <button className='w-2/5 flex  rounded-[8px] bg-richblack-100
       font-medium ml-35 mt-6 h-[40px]'>
         <FaGoogle />
          <p>Sign up with Google</p>
        </button>
      </div>
      </div>
  )
}
