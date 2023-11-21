import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#heater" className='footer__logo'>PabloTorres</a>
      <ul className='permalinks'>
          <li><a href="#heater">Home</a></li>
          <li><a href="#about">Abour</a></li>
          <li><a href="#experience">Esperience</a></li>
          <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="httpa://facebook.com"><FaFacebook/></a>
        <a href="httpa://instagram.com"><FiInstagram/></a>
        <a href="httpa://twiter.com"><IoLogoTwitter/></a>
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