import React from 'react'
import './mainNav.css'
import { WiAlien } from "react-icons/wi";

const MainNav = (props) => {
    
  return (
    <div className='container__mainNav' id='mainNav' onMouseEnter={()=>props.handleHover(2)}>
        <WiAlien  size={30}/>
    </div>
  )
}

export default MainNav