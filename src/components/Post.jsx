import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { MdBookmarkBorder } from "react-icons/md";

import { RiSendPlaneLine } from "react-icons/ri";




const Post = () => {
  return (
      <div className=' max-w-lg h-fit border-[#262525] border-[1px] mt-10'>
        {/* Top image */}
        <div className='w-full flex justify-between items-center px-[16px] p-4'>
            <div className='flex gap-3 items-center'>
                <div className='w-9 h-9 rounded-full border-[1px]'></div>
                <div className='text-sm'>nytimes</div>
            </div>
            <div className='tracking-widest flex flex-col items-center justify-center'>...</div>
        </div>
        {/* middleIMage */}
        <div className='w-full bg-green-700 h-96'>
              <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1725022935609-585e3f42b992?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        {/* Bottom Part */}
        <BottomImage/>

    </div>
  )
}

export default Post


function BottomImage(){
    return (
        
        <div className='px-[16px] mt-3'>
            {/* Like Share Comment Section */}

            <div className='flex justify-between mb-3 text-2xl font-semibold'>
                <div className='flex  gap-5 '>
                    <div><FaRegHeart /></div>
                    <div><FaRegComment /></div>
                    <div><RiSendPlaneLine /></div>

                    
                </div>
                <div><MdBookmarkBorder />
</div>

            </div>
            <div className='font-light text-sm'>Liked by <span className='font-semibold'>kunal_sarp... </span>and others</div>
            {/* Description of post */}
            <div className='text-sm mt-[5px]'>
                <span>nytimes</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores in porro qui est! Excepturi voluptate...<span className=' text-[#b7b7b7]'> more</span>
            </div>
            <div className='text-[#b7b7b7] text-sm mt-[5px]'>
            View all 5,433 comments
            </div>
        </div>
        
    )
}