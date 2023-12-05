import React from 'react'
import './idiom.css'

const Idiom = (props) => {

    const idiom = props.idiom
    const goIn = props.goIn

  return (
    <div className={goIn ? 'container idioms idiom__go-in-of' : 'container idioms idiom__go-in-on'}>
        <a onClick={()=>{props.idiomSelect(!idiom); props.handleHover(3)}} onMouseEnter={()=>props.handleHover(4)} >{idiom ? 'Español':'English'} </a>       
    </div>
  )
}

export default Idiom