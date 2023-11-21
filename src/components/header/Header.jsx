import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const header = (props) => {
  const idiom = props.idiom
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>{idiom?'Hi, My Name Is Pablo...!!!':'Hola, Mi Nombre Es Pablo...!!!'}</h5>
        <h1>Pablo Torres</h1>
        <h5 className="text-light">{idiom?'FrontEnd Developer':'Desarrollador FrontEnd'}</h5>
        <CTA idiom={idiom}/> 
        <HeaderSocial idiom={idiom}/>
      <div className="me">
          <img src={Me} alt="me" />
      </div>

        <a href="#contact" className='scroll__down'>{idiom?'Scroll Down':'Scroll al Final'}</a>
        
      </div>

     
        
    </header>
  )
}

export default header