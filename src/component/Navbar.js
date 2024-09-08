import { FaShoppingCart } from "react-icons/fa";
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn
  let setIsLoggedIn = props.setIsLoggedIn
  const { cart } = useSelector((state) => state)

  return (
    <div className="sticky top-0">

      <div className='flex flex-row justify-evenly h-20 items-center mx-auto max-w-6xl '>
        <NavLink to='/'>
          <div className="ml-5">
            <img src="../logo.png" className="h-14" />

          </div>
        </NavLink>

        <div className="flex justify-evenly gap-x-5">
          <NavLink to='/'>
            <p className="text-slate-100 text-xl space-x-6 items-center mr-5">Home</p>
          </NavLink>

          {!isLoggedIn &&
                  <Link to="/login">
                    <button className="text-slate-100 text-xl space-x-6 mr-5">
                      Login
                    </button>
                  </Link>
                }

                {!isLoggedIn &&
                  <Link to="/signup">
                    <button className="text-slate-100 text-xl space-x-6 mr-5">
                      Sign up
                    </button>
                  </Link>
                }

                {isLoggedIn &&
                  <Link to="/">
                    <button 
                    className="text-slate-100 text-xl space-x-6 mr-5"
                    onClick={() => {
                      setIsLoggedIn(false)

                      // toast.success("Logged out")
                    }}>
                      Log out
                    </button>
                  </Link>
                }

                {/* {isLoggedIn &&
                  <Link to="/Dashboard">
                    <button className="text-slate-100 text-xl space-x-6 mr-5">
                      Dashboard
                    </button>
                  </Link>
                } */}

          <NavLink to='/cart'>
            <div className="relative text-slate-100 ">
              <FaShoppingCart className="text-2xl" />
              {
                cart.length > 0 &&
                <span className=" absolute -top-1 -right-2 text-xs bg-green-600 w-5 h-5 flex
                justify-center text-white items-center animate-bounce rounded-full">

                  {cart.length}</span>
              }

              
               
             
            </div>


          </NavLink>

        </div>

      </div>
    </div>
  )
}

export default Navbar
