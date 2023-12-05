import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = (props) => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/pablo-javier-torres-martínez-662406173" rel='noreferrer' target='_blank' onClick={()=>props.handleHover(3)} onMouseEnter={()=>props.handleHover(4)}><BsLinkedin size={25}/></a>
        <a href="https://github.com/PabloTorres0/CV_PabloTorres.git" rel='noreferrer' target='_blank' onClick={()=>props.handleHover(3)} onMouseEnter={()=>props.handleHover(4)}><FaGithub size={25}/></a>
    
    </div>
  )
}

export default HeaderSocial