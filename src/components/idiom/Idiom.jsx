import React from 'react'
import './idiom.css'

const Idiom = (props) => {

    const idiom = props.idiom

  return (
    <div className='container idioms'>
        <a  onClick={()=>props.idiomSelect(null)} >{idiom? 'Spanish':'Español'} </a>
        /
        <a  onClick={()=>props.idiomSelect(true)}> {idiom? 'English':'Ingles'}</a>
    </div>
  )
}

export default Idiom