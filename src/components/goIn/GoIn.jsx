import React from 'react'
import './goIn.css'

import useSound from 'use-sound';
import hoverSound from '../../assets/laser.mp3';

const GoIn = (props) => {
  //sound
  const [goInTransition, setGoInTransition] = React.useState(false)
  const soundUrl = hoverSound;
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);
  const [play] = useSound(soundUrl, { volume: 0.8 });

  const handleHover = () => {
      if (isButtonHovered===false) { 
          setIsButtonHovered(true)
          play();
          setTimeout(()=>{
              setIsButtonHovered(false)
          },300)
      }
    };

///
  return (
    <div className={goInTransition ? 'container__goIn-next' : 'container__goIn'}>
      
        <a onClick={()=>{
          props.goInFunction(true)
          handleHover()
          }}>
            Go In
        </a>
    </div>
  )
}

export default GoIn