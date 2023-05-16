import { useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const ContactForm = () => {

  const navigate = useNavigate();

  const form = useRef<HTMLFormElement>(null!);

  const emailjsService = process.env.EMAILJS_SERVICE || '';
  const emailjsTemplate = process.env.EMAILJS_TEMPLATE || '';
  const emailjsPublicKey = process.env.EMAILJS_PUBLICKEY || '';

  const sendEmail = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailjs.sendForm(
      emailjsService,
      emailjsTemplate,
      form.current,
      emailjsPublicKey
      ).then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    alert('Message sent to robertbishwebdeveloper.com')
    navigate('/');
  };

  useLayoutEffect(() => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
  })

  return (
      <form 
        className='contact-form'
        ref={form}
        onSubmit={sendEmail}>
        <h4>Get in Touch!</h4>
        <input
          type='text'
          name='user_name'
          placeholder='Enter Name'/>
        <input
          type='email'
          name='user_email'
          placeholder='Enter Email Address'/>
        <textarea name='message' placeholder='Add Message...'/>
        <button
          className='form-btn'
          type='submit'>
          SEND
        </button>
      </form>
  );
}

export default ContactForm;