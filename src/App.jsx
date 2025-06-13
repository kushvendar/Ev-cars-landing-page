import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Background from './Components/Background'
import { useState } from 'react'
function App() {
  let heroData=[
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"}
  ]
  const [heroCount,setHerocount]=useState(2)
  const[playStatus,setPlaystatus]=useState(false)
  return <div className='overflow-hidden'>
    <Background heroCount={heroCount} playStatus={playStatus}/>
    <Navbar/>
    <Hero
    heroData={heroData[heroCount]}
    heroCount={heroCount}
    setPlaystatus={setPlaystatus}
    setHerocount={setHerocount}
    playStatus={playStatus}/>
  </div>

}
export default App
