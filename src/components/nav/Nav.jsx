import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { IoIosBriefcase } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";


const Nav = (props) => {
  const [activeNav, setActiveNav]= React.useState('#')
  const handleHover = props.handleHover
    
  const changeActiveState = (state)=>{
      setActiveNav(state);
    }

  return (
    <nav>
      <a href="#mainNav" onClick={()=>{changeActiveState("#mainNav"); handleHover(3) }} onMouseEnter={()=>handleHover(4)} className={activeNav==="#" ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{changeActiveState("#about"); handleHover(3)}} onMouseEnter={()=>handleHover(4)} className={activeNav==="#about" ? 'active': ''}><AiOutlineUser/></a>
      <a href="#university" onClick={()=>{changeActiveState("#university"); handleHover(3)}} onMouseEnter={()=>handleHover(4)} className={activeNav==="#university" ? 'active': ''}><IoMdSchool/></a>
      <a href="#works" onClick={()=>{changeActiveState("#works"); handleHover(3)}} onMouseEnter={()=>handleHover(4)} className={activeNav==="#works" ? 'active': ''}><IoIosBriefcase/></a>
      <a href="#experience" onClick={()=>{changeActiveState("#experience"); handleHover(3)}} onMouseEnter={()=>handleHover(4)} className={activeNav==="#experience" ? 'active': ''}><BiBook/></a>
      <a href="#contact" onClick={()=>{changeActiveState("#contact"); handleHover(3)}} onMouseEnter={()=>handleHover(4)} className={activeNav==="#contact" ? 'active': ''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav