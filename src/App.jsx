import React from 'react'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Education from './Components/Education/Education'
import Contact from './Components/Contact/Contact'
import Blurbolb from './Blurbolb'


const App = () => {
  return (
    <div className='bg-[#050414]' >
        
        <Blurbolb position={{top:'35%', left:'20%'}} size={{width:'30%',height:'40%'}}/>
         
        
        
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'> </div>
        <div className='bg-[#050414]relative pt-20'>
         <Navbar/>
        <About/>
        <Skills/>
        <Blurbolb position={{bottom:'20%', left:'80%'}} size={{width:'20%',height:'40%'}}/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
