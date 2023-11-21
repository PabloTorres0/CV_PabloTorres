import React from 'react'
import './idiom.css'

const Idiom = (props) => {

    const idiom = props.idiom

  return (
    <div className='container idioms'>
        <a onClick={()=>props.idiomSelect(!idiom)} >{idiom ? 'Español':'English'} </a>       
    </div>
  )
}

export default Idiom