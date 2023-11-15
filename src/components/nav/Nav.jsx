import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
const Nav = () => {
  const [activeNav, setActiveNav]= React.useState('#')
    
  const changeActiveState = (state)=>{
      setActiveNav(state);
    }

  return (
    <nav>
      <a href="#" onClick={()=>changeActiveState("#")} className={activeNav==="#" ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>changeActiveState("#about")} className={activeNav==="#about" ? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>changeActiveState("#experience")} className={activeNav==="#experience" ? 'active': ''}><BiBook/></a>
      <a href="#services" onClick={()=>changeActiveState("#services")} className={activeNav==="#services" ? 'active': ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>changeActiveState("#contact")} className={activeNav==="#contact" ? 'active': ''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav