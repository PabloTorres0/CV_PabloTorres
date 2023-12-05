import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Idiom from './components/idiom/Idiom'
import UniversityList from './components/university/UniversityList'
import Works from './components/works/Works'
import MainNav from './components/mainNav/MainNav'
import GoIn from './components/goIn/GoIn'
import useSound from 'use-sound';
import soundUrl from './assets/laser.mp3'
import soundUrl2 from './assets/tr2.mp3'
import soundUrl3 from './assets/button-click.mp3'
import soundUrl4 from './assets/tr4.mp3'
import { useRef } from 'react';



const App = () => {
  
  const[idiom, setIdiom] = React.useState(false)
  const[goIn, setGoIn] = React.useState(false)
 
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);
  const [play1] = useSound(soundUrl, { volume: 0.1 });
  const [play2] = useSound(soundUrl2, { volume: .15 });
  const [play3] = useSound(soundUrl3, { volume: 0.3 });
  const [play4] = useSound(soundUrl4, { volume: .05 });

  const idiomSelect = (selected) =>{
    setIdiom(selected)
  }
  const goInFunction = (selected) =>{
    setGoIn(selected)
  }
  const nodeRef = useRef(null);

  const  handleHover = (sound) => {
    
    if (isButtonHovered===false) { 
        setIsButtonHovered(true)
        if (sound===1){
        play1()}
        else if (sound===2){
        play2()
        }
        else if (sound===3){
        play3()
        }
        else if (sound===4){
          play4()
          }
        else{play1();}
        setTimeout(()=>{
            setIsButtonHovered(false)
        },150)
    }
  }


  return (
    <>
   
    <Idiom idiomSelect={idiomSelect} idiom={idiom} handleHover={handleHover} goIn={goIn}/>
    {
      goIn ? (<div>  
      <MainNav handleHover={handleHover} goIn={goIn}/>   
      <Header idiom={idiom} handleHover={handleHover}/>
      <Nav idiom={idiom} handleHover={handleHover}/>
      <About idiom={idiom}handleHover={handleHover}/>
      <UniversityList idiom={idiom}handleHover={handleHover}/>
      <Works idiom={idiom}handleHover={handleHover}/>
      <Experience idiom={idiom}handleHover={handleHover}/>
      <Contact idiom={idiom}handleHover={handleHover}/>
      <Footer idiom={idiom} handleHover={handleHover}/></div>): 
      
      (
        
            <GoIn nodeRef={nodeRef} timeout={300} goInFunction={goInFunction} idiom={idiom} handleHover={handleHover}/>
      )
}    </>
  )
}

export default App