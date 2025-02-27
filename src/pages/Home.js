
import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from '../component/Spinner';
import Product from '../component/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProduct() {
    setLoading(true)
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      //  data array ke andr object ki form me h
      setPosts(data);
    }

    catch (error) {
      console.log("Erorr aagya");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProduct();
  }, [])

  return (
    <div>
      {
        loading ? <Spinner /> :
          posts.length > 0 ?
            (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
              {
              posts.map( (post) => (
                <Product key = {post.id} post = {post} />
              ))
            }
              </div>):

              <div className='flex justify-center items-center'>
                <p>No Data Found</p>
                </div>
             
     }

    </div >
  )
}

export default Home
