import React from 'react'
import './universityList.css'
import { IoIosBookmark } from "react-icons/io";



const UniversityList = () => {
  return (
    <section id='university' className='container university__container'>
        <h5>Studies</h5>
        <h2>University Studies</h2>
        <div className="universityList__container">
          <div className="universityList__item">
            <div className="studies__grup">
              <IoIosBookmark/>
              <h5>UPIITA - IPN | 2013 - 2018</h5>
            </div>
            <h2 className='light'> INGENIERÍA EN MECATRÓNICA</h2>
            <p>
            Proyecto Terminal: Robot de estructura modular de ensamblaje en configuraciones cartesiana y delta lineal con porta-herramientas para seguimiento de trayectorias.
            </p>
          </div>

          <div className="universityList__item">
          <div className="studies__grup">
              <IoIosBookmark/>
              <h5>UPC - ESPAÑA. | FEB - JUN 2017</h5>
          </div>
            <h2 className='light'>PROGRAMA SMILE</h2>
            <p>
            Programa de movilidad internacional SMILE Ingenieria Mecatrónica en Barcelona, España.
            </p>
          </div>

        </div>

        
    </section>
  )
}



export default UniversityList