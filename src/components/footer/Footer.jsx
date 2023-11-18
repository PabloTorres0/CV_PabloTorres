import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PabloTorres</a>
      <ul className='permalinks'>
        <li>
          <a href="#">Home</a>
          <a href="#about">Abour</a>
          <a href="#experience">Esperience</a>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="httpa://facebook.com"><FaFacebook/></a>
        <a href="httpa://instagram.com"><FiInstagram/></a>
        <a href="httpa://twiter.com"><IoLogoTwitter/></a>
      </div>
      
    </footer>
  )
}

export default Footer