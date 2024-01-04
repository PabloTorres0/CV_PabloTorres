import React from 'react'

import cvEsp from '../../assets/CV_Pablo_Javier_Torres_Martinez_español.pdf'
import cvEng from '../../assets/CV_Pablo_Javier_Torres_Martinez_english.pdf'
import './cta.css'


const CTA = (props) => {
  const idiom = props.idiom
  return (
    <div>
        <a href={idiom ? cvEng : cvEsp} download className='btn aling' onMouseEnter={()=>props.handleHover(4)}>{idiom ? 'Download CV' : 'Descargar CV'}</a>
        <a href="#contact" className='btn btn-primary aling' onMouseEnter={()=>props.handleHover(4)}>{idiom ? 'Contact Me' : 'Contactame'}</a>
    </div>
  )
}

export default CTA