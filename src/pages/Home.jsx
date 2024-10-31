import React from 'react'
import Topbar from '../components/Topbar'
import Scrollbar from '../components/Scrollbar'
import Post from '../components/Post'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
      <div className='bg-black w-full h-fit text-white flex justify-center flex-col items-center z-50'>
          
            <Topbar />
            <Scrollbar />
            <Post />
            <Post />

      </div>
  )
}

export default Home