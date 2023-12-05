import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = (props) => {
  const handleHover = props.handleHover
  const idiom = props.idiom
  return (
    <footer>
      <a href="#heater" className='footer__logo'>PabloTorres</a>
      <ul className='permalinks'>
          <li><a href="#header" onMouseEnter={()=>handleHover(4)} onClick={()=>handleHover(3)}>{idiom ? 'Inicio' : 'Home'}</a></li>
          <li><a href="#about" onMouseEnter={()=>handleHover(4)} onClick={()=>handleHover(3)}>{idiom? 'Acerca' : 'About'}</a></li>
          <li><a href="#university" onMouseEnter={()=>handleHover(4)} onClick={()=>handleHover(3)}>{idiom ? 'Estudios' : 'Studies'}</a></li>
          <li><a href="#works" onMouseEnter={()=>handleHover(4)} onClick={()=>handleHover(3)}>{idiom ? 'Experiencia' :'Experience'}</a></li>
          <li><a href="#experience" onMouseEnter={()=>handleHover(4)} onClick={()=>handleHover(3)}>{idiom ? 'Conocimientos' : 'Knowledges'}</a></li>
          <li><a href="#contact" onMouseEnter={()=>handleHover(4)} onClick={()=>handleHover(3)}>{idiom ? 'Contacto' : 'Contact'}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="httpa://facebook.com" onMouseEnter={()=>handleHover(2)} onClick={()=>handleHover(3)}><FaFacebook/></a>
        <a href="httpa://instagram.com" onMouseEnter={()=>handleHover(2)} onClick={()=>handleHover(3)}><FiInstagram/></a>
        <a href="httpa://twiter.com" onMouseEnter={()=>handleHover(2)} onClick={()=>handleHover(3)}><IoLogoTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; Pablo Torres
        </small>
      </div>
      
    </footer>
  )
}

export default Footer