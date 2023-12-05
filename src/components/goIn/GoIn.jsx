import React from 'react'
import './goIn.css'

import useSound from 'use-sound';
import hoverSound from '../../assets/laser.mp3';

const GoIn = (props) => {
  //sound
  const [goInTransition, setGoInTransition] = React.useState(false)


///
  return (
    <div className={goInTransition ? 'container__goIn-next' : 'container__goIn'}>
      
        <a href='#mainNav' onClick={()=>{
          props.goInFunction(true)
          props.handleHover(1)
          }
        }
        onMouseEnter={()=>{props.handleHover(2)}}
          >
            {props.idiom ? 'Entrar' :' Go In'}
        </a>
    </div>
  )
}

export default GoIn