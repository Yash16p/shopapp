
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add, remove } from '../redux/slice/CartSlice';

const Product = ({post}) => {

 const {cart} = useSelector((state) => state);
 const dispatch = useDispatch();

 const addtoCart = () => {
  dispatch(add(post));
  
 }

  const removeFromCart = () => {
  dispatch(remove(post.id))
  }
  return (

    <div className='flex flex-col items-center justify-between border shadow-lg 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-6 rounded-xl'>
     <div className='text-lg font-semibold text-gray-700 text-left truncate w-40 mt-1'>
      <p>{post.title}</p>
     </div>
     <div className='font-lg w-40 text-gray-400 text-[1p5x] text-left'>
      <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
     </div>
     <div className='w-40 h-42 flex justify-center items-center'>
     <img src={post.image} className='h-full w-full'
      />
     </div>

     <div className='flex justify-between gap-12 items-center'>
     <div>
      <p className='text-green-600 font-medium'>${post.price}</p>
     </div>
     
 {
     cart.some( (p) => p.id === post.id) ?
     (<button
     className='text-gray-700 border-2 border-gray-700 rounded-full p-1 px-3 font-semibold 
     hover:bg-gray-700
     hover:text-white transition duration-300 ease-in'
     onClick={removeFromCart}>
      Remove Item
     </button>) : 
     (<button
     className='text-gray-700 border-2 border-gray-700 rounded-full p-1 px-3 font-semibold 
     hover:bg-gray-700
     hover:text-white transition duration-300 ease-in'
     onClick={addtoCart}>
      Add to Cart
     </button>)
 }
    </div>
     </div>

    
  )
}

export default Product
