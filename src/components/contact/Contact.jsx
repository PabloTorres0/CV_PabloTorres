import { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = (props) => {

  const idiom = props.idiom
  const handleHover = props.handleHover

  const form = useRef();

  const sendEmail = (e) => {
   e.preventDefault();

    emailjs.sendForm('service_b3qy98s', 'template_ofukme9', form.current, '8HmXDTpitKSv7FnHP')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert('Mensaje enviado')
      }, (error) => {
          console.log(error.text);
          alert('Error, Intentalo más tarde')
          
      });
  };
  return (
    <section id='contact'>
      <h5>{idiom ? 'Get In Touch' : 'Formas de Contacto'}</h5>
      <h2>{idiom ? 'Contact Me' : 'Contáctame'}</h2>

      <div className="container contact__container">
        <div className="contact__options">
           
            <article className="contact__option"  onMouseEnter={()=>handleHover(2)}>
              <MdOutlineEmail className='contact__option-ico'/>
              <h4>Email</h4>
              <h5>pablo.javier.torres.martinez@gmail.com</h5>
              <a href="mailto:pablo.javier.torres.martinez@gamil.com" onMouseEnter={()=>handleHover(4)} onClick={()=>handleHover(3)}>{idiom ? 'Send a message' : 'Enviar Mensaje'}</a>
            </article>
            
            <article className="contact__option" onMouseEnter={()=>handleHover(2)}>
              <RiMessengerLine   className='contact__option-ico'/>
              <h4>Messenger</h4>
              <h5>Pablo Martinez</h5>
              <a href="http://m.me/pablo.martinez.96995" onMouseEnter={()=>handleHover(4)} onClick={()=>handleHover(3)}>{idiom ? 'Send a message' : 'Enviar Mensaje'}</a>
            </article>

            <article className="contact__option" onMouseEnter={()=>handleHover(2)}>
              <BsWhatsapp className='contact__option-ico'/>
              <h4>WhatsApp</h4>
              <h5>5560075650</h5>
              <a href="https://api.whatsapp.com/send?phone=525560075650" onMouseEnter={()=>handleHover(4)} onClick={()=>handleHover(3)}>{idiom ? 'Send a message' : 'Enviar Mensaje'}</a>
            </article>

        </div>

        <form ref={form}  onSubmit={(e)=>sendEmail(e)}>
            <input type='text' name='name' placeholder={idiom ? 'Your Full Name' : 'Nombre Completo'} required/>
            <input type="email" name='email' placeholder={idiom ? 'Your Email' : 'Email'} required/>
            <textarea name="message" rows="7" placeholder={idiom ? 'Your Message' : 'Mensaje'} required></textarea>
            <button type='submit' className='btn btn-primary' onMouseEnter={()=>handleHover(4)} onClick={()=>handleHover(3)}>{idiom ? 'Send a message' : 'Enviar Mensaje'}</button>
        </form>

      </div>
    </section>
  )
}

export default Contact