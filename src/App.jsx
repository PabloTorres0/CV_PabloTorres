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
const App = () => {
  
  const[idiom, setIdiom] = React.useState(false)
  const idiomSelect = (selected) =>{
    setIdiom(selected)
    console.log(selected)
  }

  return (
    <>
    <div>
      <Idiom idiomSelect={idiomSelect} idiom={idiom} />
      <Header idiom={idiom}/>
      <Nav idiom={idiom}/>
      <About idiom={idiom}/>
      <UniversityList idiom={idiom}/>
      <Works idiom={idiom}/>
      <Experience idiom={idiom}/>
      <Contact idiom={idiom}/>
      <Footer idiom={idiom}/>
    </div>  
    </>
  )
}

export default App