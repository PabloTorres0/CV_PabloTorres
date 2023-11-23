import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { IoIosBriefcase } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";


const Nav = () => {
  const [activeNav, setActiveNav]= React.useState('#')
    
  const changeActiveState = (state)=>{
      setActiveNav(state);
    }

  return (
    <nav>
      <a href="#header" onClick={()=>changeActiveState("#")} className={activeNav==="#" ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>changeActiveState("#about")} className={activeNav==="#about" ? 'active': ''}><AiOutlineUser/></a>
      <a href="#university" onClick={()=>changeActiveState("#university")} className={activeNav==="#university" ? 'active': ''}><IoMdSchool/></a>
      <a href="#works" onClick={()=>changeActiveState("#works")} className={activeNav==="#works" ? 'active': ''}><IoIosBriefcase/></a>
      <a href="#experience" onClick={()=>changeActiveState("#experience")} className={activeNav==="#experience" ? 'active': ''}><BiBook/></a>
      <a href="#contact" onClick={()=>changeActiveState("#contact")} className={activeNav==="#contact" ? 'active': ''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav