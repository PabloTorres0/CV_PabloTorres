import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const KnowledgesList =[
  ['JavaScript', 'Experienced','Experimentado'],
  ['JavaS', 'Experienced','Experimentado'],
  ['HTML5', 'Intermediate', 'Intermedio'],
  ['CSS3', 'Intermediate', 'Intermedio'],
  ['React', 'Experienced','Experimentado'],
  ['Bootstrap', 'Intermediate', 'Intermedio'],
  ['AntDEsing', 'Intermediate', 'Intermedio'],
  ['Next', 'Intermediate', 'Intermedio'],
  ['Redux', 'Intermediate', 'Intermedio'],
  ['GitHub', 'Experienced', 'Intermedio'],
  ['TypeScript', 'Experienced','Experimentado'],
  ['Tailwind', 'Intermediate', 'Intermedio'],
  ['Firebase', 'Intermediate', 'Intermedio'],
  ['Firestore', 'Intermediate', 'Intermedio'],
  ['Lenguaje C', 'Experienced','Experimentado'],
  ['C++', 'Experienced','Experimentado']

]

const softwaresList = [
  ['VisualStudioCode', 'Experienced', 'Experimentado'],
  ['Python', 'Intermediate', 'Intermedio'],
  ['Sigma', 'Intermediate', 'Intermedio'],
  ['Eclipse', 'Intermediate', 'Intermedio'],
  ['NetBeans', 'Experienced', 'Experimentado'],
  ['MatLab', 'Experienced', 'Experimentado'],
  ['QtCreator', 'Experienced', 'Experimentado'],
]

const experience = (props) => {
  
  const idiom = props.idiom
  
  return (
    <section id='experience'>
      <h5>{idiom ? 'What Knowledges I Have' : 'Los Conocimientos Que Tengo'}</h5>
      <h2>{idiom ? 'Knowledges' : 'Conocimientos'}</h2>
      <div className="container experience__container">
        <div className="experience__frontend" onMouseEnter={()=>props.handleHover(2)}>
         {/* <h3>FrontEnd Developer</h3>*/}
          <div className="experience__content">
            
            { KnowledgesList.map((item)=>{

                return(<article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>{item[0]}</h4>
                <small className="text-light">{idiom ? item[1] : item[2]}</small>
                </article>)

            })
            }

          </div>
        </div>

        <div className="experience__backend" onMouseEnter={()=>props.handleHover(2)}>
          <h3>Softwares</h3>
          <div className="experience__content">
            
          { softwaresList.map((item)=>{

              return(<article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>{item[0]}</h4>
              <small className="text-light">{idiom ? item[1] : item[2]}</small>
              </article>)

            })
            }

          

          </div>
        </div>
      </div>
    </section>
  )


}

export default experience