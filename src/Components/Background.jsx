import React from 'react'
import Video1 from '../Assets/Video1.mp4'
import image1 from '../Assets/image1.png'
import image2 from '../Assets/image2.png'
import image3 from '../Assets/image3.png'

const Background = ({playStatus,heroCount}) => {
    if(playStatus) {
    return <video className='w-full h-full float-left fixed -z-1 object-cover' autoPlay loop muted >
      <source src={Video1} type='video/mp4' />
    </video>
    }
    else if(heroCount===0){
      return <img className='w-full h-full float-left fixed -z-1 object-cover' src={image1} alt="car" />
    }
    else if(heroCount===1){
      return <img className='w-full h-full float-left fixed -z-1 object-cover' src={image2} alt="car" />
    }
    else if(heroCount===2){
      return <img className='w-full h-full float-left fixed -z-1 object-cover' src={image3} alt="car" />
    }

    
    }

export default Background
