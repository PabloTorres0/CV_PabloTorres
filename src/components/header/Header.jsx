import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/pablo9.png'
import HeaderSocial from './HeaderSocial'

const header = (props) => {
  const idiom = props.idiom
  return (
    <header id='header'> 
      <div className="container header__container">
        <h5>{idiom?'Hi, My Name Is...':'Hola, Mi Nombre Es...'}</h5>
        <h1>Pablo Torres</h1>
        <h5 className="text-light">{idiom?'FrontEnd Developer':'Desarrollador FrontEnd'}</h5>
        <CTA idiom={idiom} handleHover={props.handleHover}/> 
        <HeaderSocial idiom={idiom} handleHover={props.handleHover}/>
      <div className="me">
          <img className='me-image' src={Me} alt="me" />
      </div>

        <a href="#contact" className='scroll__down' onClick={()=>props.handleHover(3)} onMouseEnter={()=>props.handleHover(4)}>{idiom?'Scroll Down':'Ir al Final'}</a>
        
      </div>

     
        
    </header>
  )
}

export default header