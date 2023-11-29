import React from 'react'
import './mainNav.css'
import { WiAlien } from "react-icons/wi";
  import useSound from 'use-sound';
  import hoverSound from '../../assets/laser2.mp3';



const MainNav = () => {
const soundUrl = hoverSound;
const [isButtonHovered, setIsButtonHovered] = React.useState(false);
const [play] = useSound(soundUrl, { volume: 0.8 });

const handleHover = () => {
    if (isButtonHovered===false) { 
        setIsButtonHovered(true)
        play();
        setTimeout(()=>{
            setIsButtonHovered(false)
        },1500)
    }
  };

    
  return (
    <div className='container__mainNav' onMouseEnter={()=>handleHover()}>
        <WiAlien  size={30}/>
    </div>
  )
}

export default MainNav