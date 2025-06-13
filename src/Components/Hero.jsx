import React from 'react'
import arrow_btn from '../Assets/arrow_btn.png'
import play_icon from '../Assets/play_icon.png'
import pause_icon from '../Assets/pause_icon.png'

const Hero = ({heroData,heroCount,setPlaystatus,setHerocount,playStatus}) => {
  return (
    <div className='ml-[120px] mr-[120px] mt-[170px] '>
      <div className='text-white text-[110px] font-medium leading-[130px]'>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className='flex items-center bg-white rounded-[60px] gap-[50px] w-fit pb-[5px] pt-[5px] pr-[8px] pl-[30px] mt-[70px] cursor-pointer'>
        <p className='text=[#292929] text-[20px] font-medium '>Explore the features</p>
        <img src={arrow_btn} alt="button" />
      </div>
      <div className='mt-[47px] flex justify-between'>
        <ul className='flex items-center gap-[23px]'>
        <li onClick={()=>{setHerocount(0)}} className={heroCount===0?'w-[15px] h-[15px]bg-white rounded-[7.5px] cursor-pointer ':'w-[15px] h-[15px]bg-white rounded-[7.5px] cursor-pointer bg-orange-600 '}></li>
        <li onClick={()=>{setHerocount(1)}} className={heroCount===1?'w-[15px] h-[15px]bg-white rounded-[7.5px] cursor-pointer ':'w-[15px] h-[15px]bg-white rounded-[7.5px] cursor-pointer bg-orange-600 '}></li>
        <li onClick={()=>{setHerocount(2)}} className={heroCount===2?'w-[15px] h-[15px]bg-white rounded-[7.5px] cursor-pointer ':'w-[15px] h-[15px]bg-white rounded-[7.5px] cursor-pointer bg-orange-600 '}></li>
        </ul>
        <div className='flex items-center gap-[30px]'>
          <img className='mb-[8px]' onClick={()=>{setPlaystatus(!playStatus)}} src={playStatus?pause_icon:play_icon} alt="button" />
          <p className='text-white text-[19px]'>See the video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
