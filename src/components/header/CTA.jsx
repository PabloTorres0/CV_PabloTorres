import React from 'react'
import CV from '../../assets/cv.pdf'
import './cta.css'


const CTA = (props) => {
  const idiom = props.idiom
  return (
    <div>
        <a href={CV} download className='btn aling'>{idiom ? 'Download CV' : 'Descargar CV'}</a>
        <a href="#contact" className='btn btn-primary aling'>{idiom ? 'Contact Me' : 'Contactame'}</a>
    </div>
  )
}

export default CTA