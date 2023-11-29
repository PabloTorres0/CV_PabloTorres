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


import { useRef } from 'react';



const App = () => {
  
  const[idiom, setIdiom] = React.useState(false)
  const[goIn, setGoIn] = React.useState(false)


  const idiomSelect = (selected) =>{
    setIdiom(selected)
  }
  const goInFunction = (selected) =>{
    setGoIn(selected)
    console.log('click')
  }
  const nodeRef = useRef(null);


  return (
    <>
    {
      goIn ? (<div>
      
      <MainNav/>
      <Idiom idiomSelect={idiomSelect} idiom={idiom} />
      <Header idiom={idiom}/>
      <Nav idiom={idiom}/>
      <About idiom={idiom}/>
      <UniversityList idiom={idiom}/>
      <Works idiom={idiom}/>
      <Experience idiom={idiom}/>
      <Contact idiom={idiom}/>
      <Footer idiom={idiom}/></div>): <GoIn nodeRef={nodeRef} timeout={300} goInFunction={goInFunction}/>
}    </>
  )
}

export default App