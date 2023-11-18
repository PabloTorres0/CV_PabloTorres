import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = (props) => {
  
    const idiom = props.idiom  

  return (
   <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Me" />
        </div>
      </div>

      <div className='about__content'>
          <div className="about__cards">
            <article className="about__card">
                <FaAward className='about__icon'/>
              <h5>{idiom?'Experience':'Experiencia'}</h5>
              <small>{idiom?'2 Years working esperience':'2 Años de experiencia'}</small>
            </article>

            <article className="about__card">
                <FaAward className='about__icon'/>
              <h5>{idiom?'Clients':'Clientes'}</h5>
              <small>{idiom?'+ 200 Worldwide':'+ 200 trasnacionales'}</small>
            </article>

            <article className="about__card">
                <FaAward className='about__icon'/>
              <h5>{idiom?'Proyects':'Proyectos'}</h5>
              <small>{idiom?'80 completed poryects':'80 proyectos completados'}</small>
            </article>


            <article className="about__card">
                <FaAward className='about__icon'/>
              <h5>{idiom?'Proyects':'Proyectos'}</h5>
              <small>{idiom?'80 completed poryects':'80 proyectos completados'}</small>
            </article>
          </div>
          

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde id at illo cumque tempora voluptates omnis magnam, minima animi nam iure sit velit fugiat, natus incidunt impedit optio labore vitae?</p>
        
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
          </div>
      </div>
    
   </section>
  )
}

export default About