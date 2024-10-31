import React from 'react';
import { IoSettingsSharp } from "react-icons/io5";
import { BsThreads } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
const Profile = () => {
    return (
        <div className='w-full mx-auto md:mt-10 md:ml-56'>

            <div className=" max-w-4xl mx-auto h-fit bg-black text-white text-xl">
                {/* Top Navbar */}
                <div className="flex justify-between p-4 md:hidden">
                    <div><IoSettingsSharp /></div>
                    <div className="text-sm">_the_kunal_1</div>
                    <div><BsThreads /></div>
                </div>

                {/* Upper Part */}
                <UpperPart />

                {/* Bottom Part */}
                <BottomPart />
            </div>
        </div>
    );
};

export default Profile;

function UpperPart() {
    return (
        <>


<div className=' flex justify-center items-center max-w-2xl gap-5 md:justify-between'>

                <div className=' md:w-44 md:h-44 w-32 h-24 border-[1px] ml-4 border-[#DDDDDD] rounded-full'>
                     <img className='object-cover rounded-full w-full h-full' src="https://plus.unsplash.com/premium_photo-1725023402594-5dc3a4cdc3e1?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>


            <div className=' pr-5 '>
                <div className='text-xl flex gap-3 justify-start items-center'>
                        <div>_the_kunal_1</div>
                        <div><IoSettingsSharp/></div>
                </div>
                <div className='mt-3 '>
                    <div className='flex gap-2  '>
                            <button className='bg-[#363636] text-white w-1/2    py-[7px] rounded-lg text-sm  '>Edit profile</button>
                            <button className='bg-[#363636] text-white w-1/2    py-[7px] rounded-lg text-sm  '>View Archives</button>
                        
                    </div>
                        <button className='bg-[#363636] text-white w-full mt-2   py-[7px] rounded-lg text-sm  '>Ad tools</button>
                        <div className='text-sm mt-2'>20 accounts reached in last 30 days. View insights</div>
                </div>
                
            </div>
        </div>

{/* {"Description part"} */}
        <div className='px-[17px] mt-3 md:mt-10'>
            <h3 className='text-sm'>Kunal Sarpal</h3>
            
                <button className='bg-[#363636]  text-xs  text-white w-fit px-2 p-1 rounded-full  mt-1  flex items-center  '>
                    <span className='text-lg'><BsThreads /></span>_the_kunal_1</button>
                <p className='text-sm'>kunal sarpal a great guy open for work feel free to approch me..</p>
                <div className=' w-16 h-16 mt-6 flex justify-center items-center text-4xl text-gray-500 bg-[#121212] border-[1px] border-[#2a2929] rounded-full'>
                    <FiPlus/>
                   
                </div>
                <div className='text-xs ml-5 mt-1'>New</div>

                {/* {Followers and following} */}
                <div className='flex justify-around  mt-3 border-b-[1px] border-t-[1px] p-2 border-[#2a2929] w-full'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-sm'>8</div>
                        <div className='text-sm text-[#a9a8a8]'>posts</div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-sm'>131</div>
                        <div className='text-sm text-[#a9a8a8]'>followers</div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-sm'>281</div>
                        <div className='text-sm text-[#a9a8a8]'>following</div>
                    </div>
                </div>
        </div>

         </>
    );
}

function BottomPart() {
    return (
        <>
          <div className=' grid grid-cols-3 md:grid-cols-3 gap-1 mt-3'>
            <div className='w-full h-32 md:h-72  bg-green-200'></div>
            <div className='w-full h-32 md:h-72 bg-green-100'></div>
            <div className='w-full h-32 md:h-72 bg-slate-200'></div>
            <div className='w-full h-32 md:h-72 bg-green-300'></div>
            <div className='w-full h-32 md:h-72 bg-green-200'></div>
            <div className='w-full h-32 md:h-72 bg-slate-100'></div>
            <div className='w-full h-32 md:h-72 bg-green-200'></div>
            <div className='w-full h-32 md:h-72 bg-green-100'></div>
            <div className='w-full h-32 md:h-72 bg-slate-200'></div>
            <div className='w-full h-32 md:h-72 bg-green-300'></div>
            <div className='w-full h-32 md:h-72 bg-green-200'></div>
            <div className='w-full h-32 md:h-72 bg-slate-100'></div>

          </div>
        </>
    );
}
