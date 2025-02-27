
import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../component/CartItem'

const Cart = () => {

  const { cart } = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ?
          (<div className='flex flex-col max-w-[1200px] mx-auto md:flex-row justify-center'>
            <div className="w-[100%] md:w-[40%] flex flex-col p-2">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={item} />
                })
              }
            </div>

            <div className="w-[100%] md:w-[40%] mt-2  flex flex-col">
              <div className="flex flex-col p-5  my-1  h-[100%] justify-between">
                <div className="flex flex-col gap-4 ">
                  <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
                  <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
                  <p className="text-xl">
                    <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                  </p>
                  <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}</p>
                <button className="bg-green-700  hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-1 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">CheckOut Now</button>
                </div>

              </div>
            </div>
          </div>
          ) : (
            <div className="min-h-[80vh] flex flex-col items-center justify-center">
              <h1 className="text-gray-700 font-semibold text-xl mb-2">
                Your cart is empty!
              </h1>
              <Link to={"/"}>
                <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
                  Shop Now
                </button>
              </Link>
            </div>
          )



      }
    </div>
  )
}

export default Cart
