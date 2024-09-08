

import React from 'react'
import Template from '../component/Template'

export default function Signup({setIsLogggedIn}) {
  return (
    <div>
    <Template
         title = "Welcome back"
         desc1= ""
         desc2= ""
         formtype= "signup"
         setIsLoggedIn={setIsLogggedIn}
    />
    </div>
  )
}
