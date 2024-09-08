

import React from 'react'
import Template from '../component/Template'

export default function Login({setIsLoggedIn}) {
  return (
    <div>
      <Template
      title = "Welcome back"
      // desc1= "Find your perfect fit for your life"
      desc2= ""
      formtype= "login"
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}
