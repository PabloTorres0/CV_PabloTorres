import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id='about'>
    <h5>Get to Know</h5>
    <h1>About Me</h1>

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
              <h5>Experience</h5>
              <small>2 Years working esperience</small>
            </article>

            <article className="about__card">
                <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>+ 200 Worldwide</small>
            </article>

            <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
              <h5>Proyects</h5>
              <small>+ 80 completed proyects</small>
            </article>
          </div>
          

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde id at illo cumque tempora voluptates omnis magnam, minima animi nam iure sit velit fugiat, natus incidunt impedit optio labore vitae?</p>
        
          <a href="#contact" className='btn btn_primary'>Lets Talk</a>
          </div>
      </div>
    
   </section>
  )
}

export default About