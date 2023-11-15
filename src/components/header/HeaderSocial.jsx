import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="/" target='_blank'><BsLinkedin/></a>
        <a href="/" target='_blank'><FaGithub/></a>
    
    </div>
  )
}

export default HeaderSocial