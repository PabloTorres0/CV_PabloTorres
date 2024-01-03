import React from 'react'
import './about.css'
import ME from '../../assets/pablo5.png'
import {FaAward} from 'react-icons/fa'
import { TiCog } from "react-icons/ti";



const About = (props) => {
    const handleHover= props.handleHover
    const idiom = props.idiom  
  
  return (
   <section id='about'>
    <h5>{idiom ? 'Get to Know' : 'Conoce'}</h5>
    <h2>{idiom ? 'About Me' : 'Acerca De Mí'}</h2>

    <div className='container about__container'>
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Me"  onMouseEnter={()=>handleHover(2)}/>
        </div>
      </div>

      <div className='about__content'>
          <div className="about__cards">
            <article className="about__card" onMouseEnter={()=>handleHover(2)}>
                <FaAward className='about__icon'/>
              <h5 className='text__skills'>{idiom?'Experience':'Experiencia'}</h5>
              <small>{idiom?'2 Years FrontEnd esperience':'2 Años de experiencia en FrontEnd'}</small>
            </article>

            <article className="about__card" onMouseEnter={()=>handleHover(2)}>
                <FaAward className='about__icon'/>
              <h5 className='text__skills'>{idiom?'Knowledges':'Conocimientos'}</h5>
              <small>{idiom?'Strong programming knowledge':'Solidos conocimientos en programación'}</small>
            </article>

            <article className="about__card" onMouseEnter={()=>handleHover(2)}>
                <FaAward className='about__icon'/>
              <h5 className='text__skills'>{idiom?'Skills':'Habilidades'}</h5>
              <li> <TiCog/> <small>{idiom?'Make desitions':'Toma de desiciones '}</small></li>
              <li> <TiCog/> <small>{idiom?'Autodidact':'Autodidacta'}</small></li>
              <li> <TiCog/> <small>{idiom?'Critical Thinking':'Pensamiento Crítico'}</small></li>
              <li> <TiCog/> <small>{idiom?'Conflict Management':'Manejo de Conflictos'}</small> </li>
            </article>


            <article className="about__card" onMouseEnter={()=>handleHover(2)}>
                <FaAward className='about__icon'/>
              <h5 className='text__skills's>{idiom?'Skills':'Habilidades'}</h5>
              <li> <TiCog/> <small>{idiom?'Stress Management':'Gestión de Estrés'}</small></li>
              <li> <TiCog/> <small>{idiom?'Lidership':'Liderazgo'}</small></li>
              <li> <TiCog/> <small>{idiom?'Data Management and analysis':'Manejo y Análisis De Datos'}</small></li>
            </article>
          </div>
          

          <p>{idiom ? 'My personal goal is to excel in all aspects of my life and give the best of my day to day. I am interested in being part of technological projects where I can have personal and professional development.' : 'Mi objetivo personal es superarme en todos los aspectos de mi vida y dar lo mejor de mi día a día. Me interesa ser parte de proyectos tecnológicos donde pueda tener desarrollo personal y profesional.'}</p>
          <p>{idiom ? 'I am a proactive person who adapts easily to different working conditions. I know how to work in a team, and I have good communication and leadership skills. I have the ability to make decisions. I tend to be persistent and consistent in achieving desired goals. I have a sense of responsibility and development of strategies for work efficiency.' : 'Soy una persona proactiva que se adapta fácilmente a diferentes condiciones de trabajo. Se trabajar en equipo, además, tengo buena comunicación y liderazgo. Tengo la capacidad de tomar decisiones. Tiendo a ser persistente y constante para alcanzar las metas deseadas. Tengo sentido de la responsabilidad y desarrollo de estrategias para eficientizar el trabajo.  '}</p>
        
          <a href="#contact" className='btn btn-primary'onMouseEnter={()=>handleHover(4)} onClick={()=>handleHover(3)}>{idiom ? 'Lets Talk' : 'Contactame'}</a>
          </div>
      </div>
    
   </section>
  )
}

export default About