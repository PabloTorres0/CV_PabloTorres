import React from 'react'
import './goIn.css'


const GoIn = (props) => {
  return (
    <div className={ 'container__goIn'}>
      
        <a href='#mainNav' onClick={()=>{
          props.goInFunction(true)
          props.handleHover(1)
          }
        }
        onMouseEnter={()=>{props.handleHover(2)}}
          >
            {props.idiom ? 'Go In' :'Entrar'}
        </a>
    </div>
  )
}

export default GoIn