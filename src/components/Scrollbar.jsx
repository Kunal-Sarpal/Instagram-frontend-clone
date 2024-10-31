import React, { useState } from 'react';

const Scrollbar = () => {
    // const [name, setName] = useState("kunal_sarpalis");

    // Define an array with data for each item
    const items = [
        { id: 1, img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "jaspreet_sarpalis" },
        { id: 2, img: "https://plus.unsplash.com/premium_photo-1675129522693-bd62ffe5e015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D", name: "papu_sarpalis" },
        { id: 3, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"kunal_sarpalis" },
        { id: 4, img: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"kunal_sarpalis" },
        { id: 5, img: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"kunal_sarpalis" },
        { id: 6, img: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"kunal_sarpalis" },
        { id: 7, img: "https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"kunal_sarpalis" },
        { id: 8, img: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"kunal_sarpalis" },
        { id: 9, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"kunal_sarpalis" },
        { id: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&s",name:"kunal_sarpalis" },
    ];

    return (
        <div className="md:mt-10 text-white border border-[#262525] md:border-none flex gap-3 w-full max-w-2xl overflow-x-scroll scrollbar-hide scrool-bar ">
            {items.map((item, index) => (
                <div key={item.id} className="text-xs flex justify-center items-center flex-col">
                    <div className={` story-border border-2 w-16 h-16 flex justify-center items-center p-[1px] border-[#1B1B1B] rounded-full ${item.borderClass || ''}`}>
                        <img src={item.img} className=" border-2 border-black w-full h-full rounded-full object-cover" alt="" />
                    </div>
                    <h2 className="m-1 pb-1 font-normal tracking-tight text-white">
                        {item.name.length > 10 ? item.name.slice(0, 10) + "..." : item.name}
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default Scrollbar;
