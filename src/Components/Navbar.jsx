import React from "react";

const Navbar=()=>{
    return <div className='flex justify-between items-center mt-[40px] mb-[30px] ml-[120px] mr-[120px] text-white'>
      <div className="font-[outfit] text-[42px] font-medium ">Ev-tron</div>  
        <ul className="flex items-center text-[18px] gap-[90px] font-[outfit]">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className="rounded-[50px] bg-white text-[#262626] pt-[10px] pb-[10px] pl-[38px] pr-[38px]">Contact</li>
        </ul>
    </div>
}

export default Navbar