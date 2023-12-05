import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = (props) => {
  return (
    <div className='header__socials'>
        <a href="/" target='_blank' onClick={()=>props.handleHover(3)} onMouseEnter={()=>props.handleHover(4)}><BsLinkedin/></a>
        <a href="/" target='_blank' onClick={()=>props.handleHover(3)} onMouseEnter={()=>props.handleHover(4)}><FaGithub/></a>
    
    </div>
  )
}

export default HeaderSocial