import React from 'react'
import './works.css'
import { VscGear } from "react-icons/vsc";
import { GiCloverSpiked } from "react-icons/gi";




const Works = (props) => {
  const idiom = props.idiom
  return (
    <section id='works' className='container'>
      <h5>{idiom ? 'Work' : 'Trabajo'}</h5>
      <h2>{idiom ? 'Work Experience' : 'Experiencia De Trabajo'}</h2>
      <div className="works__container">
        <div className="works__item" onMouseEnter={()=>props.handleHover(2)}>
            <div className="item__grup"> 
                <VscGear className='works__icon'/>
                <h5>HALER TECHNOLOGICAL DEVELOPMENT S.A. DE C.V.</h5>
            </div> 
            <h2>{idiom ? 'PROJECT DEVELOPMENT ENGINEER' : 'INGENIERO DE DESARROLLO DE PROYECTO'}</h2>
            <h5>2018 - 2019</h5>
            <div className="item__grup">
              <GiCloverSpiked className='works__icon'/>
              <p>{idiom ? 'Development of technological devices according to customer requirements.' : 'Desarrollo de dispositivos tecnológicos a requerimientos de cliente.'} </p>
            </div>
            <div className="item__grup">
              <GiCloverSpiked className='works__icon'/>
              <p>{idiom ? 'In charge of software development, this encompassed the programming of the microcontrollers and the user interface, as well as the communication with the hardware.' : 'Responsable del apartado de software, esto englobaba la programación de los microcontroladores y la interfaz de usuario, además de la comunicación con el hardware. '}</p>
            </div>
            <div className="item__grup">
              <GiCloverSpiked className='works__icon'/>
              <p>{idiom ? 'Data processing in Python and Matlab.' : 'Procesamiento de datos en Python y Matlab. '} </p>
            </div>
        </div>  

        <div className="works__item" onMouseEnter={()=>props.handleHover(2)}>
            <div className="item__grup"> 
                <VscGear className='works__icon'/>
                <h5>AQUASTEAM SAUNAS Y GENERADORES DE VAPOR.</h5>
            </div> 
            <h2>{idiom ? 'FRONTEND DEVELOPER' : 'DESARROLLADOR FRONTEND'}</h2>
            <h5>{idiom ? '2019 - CURRENT' : '2019 - ACTUAL'}</h5>
            <div className="item__grup">
              <GiCloverSpiked className='works__icon'/>
              <p>{idiom ? 'Scrum master in the IoT project applied to steam generators.' : 'Scrum master en el proyecto de IoT aplicado a generadores de vapor. '}</p>
            </div>
            <div className="item__grup">
            <GiCloverSpiked className='works__icon'/>
              <p>{idiom ? 'I developed the architecture between fronted and backed in IoT for remote activation and monitoring of the steam generators, applying tools such as: Firestore, Pubsub, Cloud Functions, IoT Core, Big Query.' : 'Desarrolle la arquitectura entre fronted y backed en IoT para activación y monitoreo remoto de las máquinas de vapor, aplicando herramientas como: Firestore, Pubsub, Cloud Functions, IoT Core, Big Query.'}</p>
            </div>
            <div className="item__grup">
              <GiCloverSpiked className='works__icon'/>
              <p>{idiom ? 'Develop microcontroller firmware to enable steam equipment functions and communication with the backend architecture using Jest, Typescript.' : 'Desarrolle el frimware del microcontrolador para activar las funciones de los equipos de vapor y la comunicación con la arquitectura backend haciendo uso de Jest, Typescript.'} </p>
            </div>
            <div className="item__grup">
              <GiCloverSpiked className='works__icon'/>
              <p>{idiom ? 'Create the web application using React, Bootstrap, ANT Design, Next.' : 'Cree la aplicación web usando React, Bootstrap, ANT Design, Next. '}</p>
            </div>
            <div className="item__grup">
              <GiCloverSpiked className='works__icon'/>
              <p>{idiom ? 'I was responsible for maintaining and updating the frontend of the web application.' : 'Soy el responsable de dar mantenimiento y actualizaciones al frontend de la aplicación web. '}</p>
            </div>
        </div>  


      </div>
    </section>
  )
}

export default Works