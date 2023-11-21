import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Idiom from './components/idiom/Idiom'

const App = () => {
  
  const[idiom, setIdiom] = React.useState(null)
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
      <Experience idiom={idiom}/>
      
      <Contact idiom={idiom}/>
      <Footer idiom={idiom}/>
    </div>  
    </>
  )
}

export default App