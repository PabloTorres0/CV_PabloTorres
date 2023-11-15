import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola, mi nombre es</h5>
        <h1>Pablo Torres</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA/> 
        <HeaderSocial/>
      <div className="me">
          <img src={Me} alt="me" />
      </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>

     
        
    </header>
  )
}

export default header