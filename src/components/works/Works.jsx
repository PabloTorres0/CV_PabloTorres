import React from 'react'
import './works.css'
import { VscGear } from "react-icons/vsc";
import { GiCloverSpiked } from "react-icons/gi";




const Works = () => {
  return (
    <section id='works' className='container'>
      <h5>Work</h5>
      <h2>Work Experience</h2>
      <div className="works__container">
        <div className="works__item">
            <div className="item__grup"> 
                <VscGear className='works__icon'/>
                <h5>HALER TECHNOLOGICAL DEVELOPMENT S.A. DE C.V.</h5>
            </div> 
            <h2>INGENIERO DE DESARROLLO DE PROYECTO</h2>
            <h5>2018 - 2019</h5>
            <div className="item__grup">
              <GiCloverSpiked className='works__icon'/>
              <p>Desarrollo de dispositivos tecnológicos a requerimientos de cliente. </p>
            </div>
            <div className="item__grup">
              <GiCloverSpiked className='works__icon'/>
              <p>Responsable del apartado de software, esto englobaba la programación de los microcontroladores y la interfaz de usuario, además de la comunicación con el hardware. </p>
            </div>
            <div className="item__grup">
              <GiCloverSpiked className='works__icon'/>
              <p>Procesamiento de datos en Python y Matlab.  </p>
            </div>
        </div>  

        <div className="works__item">
            <div className="item__grup"> 
                <VscGear className='works__icon'/>
                <h5>AQUASTEAM SAUNAS Y GENERADORES DE VAPOR.</h5>
            </div> 
            <h2>DESARROLLADOR FRONTEND</h2>
            <h5>2019 - ACTUAL</h5>
            <div className="item__grup">
              <GiCloverSpiked className='works__icon'/>
              <p>Scrum master en el proyecto de IoT aplicado a generadores de vapor. Desarrolle la arquitectura entre fronted y backed en IoT para activación y monitoreo remoto de las máquinas de vapor, aplicando herramientas como: Firestore, Pubsub, Cloud Functions, IoT Core, Big Query.</p>
            </div>
            <div className="item__grup">
              <GiCloverSpiked className='works__icon'/>
              <p>Desarrolle el frimware del microcontrolador para activar las funciones de los equipos de vapor y la comunicación con la arquitectura backend haciendo uso de Jest, Typescript. </p>
            </div>
            <div className="item__grup">
              <GiCloverSpiked className='works__icon'/>
              <p>Cree la aplicación web usando React, Bootstrap, ANT Design, Next. </p>
            </div>
            <div className="item__grup">
              <GiCloverSpiked className='works__icon'/>
              <p>Soy el responsable de dar mantenimiento y actualizaciones al frontend de la aplicación web. </p>
            </div>
        </div>  


      </div>
    </section>
  )
}

export default Works