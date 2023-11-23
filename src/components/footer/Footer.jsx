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
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#university">Studies</a></li>
          <li><a href="#works">Experience</a></li>
          <li><a href="#experience">Knowledges</a></li>
          <li><a href="#contact">Contact</a></li>
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