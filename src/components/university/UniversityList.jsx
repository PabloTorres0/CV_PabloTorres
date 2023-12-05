import React from 'react'
import './universityList.css'
import { IoIosBookmark } from "react-icons/io";



const UniversityList = (props) => {
  
  const idiom = props.idiom
  
  return (
    <section id='university' className='container university__container'>
        <h5>{idiom ? 'Studies' : 'Estudios'}</h5>
        <h2>{idiom ? 'University Studies' : 'Estudios Universitarios'}</h2>
        <div className="universityList__container">
          <div className="universityList__item" onMouseEnter={()=>props.handleHover(2)}>
            <div className="studies__grup">
              <IoIosBookmark/>
              <h5>UPIITA - IPN | 2013 - 2018</h5>
            </div>
            <h2 className='light'>{idiom ? 'MECHATRONICS EGINEERING' : 'INGENIERÍA EN MECATRÓNICA'}</h2>
            <p>
            {idiom ? 'Final Project: Robot of modular structure for assembly in Cartesian and linear delta configurations with tool-holder for trajectory tracking.' : 'Proyecto Terminal: Robot de estructura modular de ensamblaje en configuraciones cartesiana y delta lineal con porta-herramientas para seguimiento de trayectorias.'}
            </p>
          </div>

          <div className="universityList__item" onMouseEnter={()=>props.handleHover(2)}>
          <div className="studies__grup">
              <IoIosBookmark/>
              <h5>{idiom ? 'UPC - SPAIN | FEB - JUN 2017' : 'UPC - ESPAÑA | FEB - JUN 2017'}</h5>
          </div>
            <h2 className='light'>{idiom ? 'SMILE PROGRAM' : 'PROGRAMA SMILE'}</h2>
            <p>
            {idiom ? 'International Mobility Program (SMILE) Mechatronics Engineering.' : 'Programa de movilidad internacional SMILE Ingenieria Mecatrónica en Barcelona, España.'}
            </p>
          </div>

        </div>

        
    </section>
  )
}



export default UniversityList