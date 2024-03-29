import { useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const ContactForm = () => {

  const navigate = useNavigate();

  const form = useRef<HTMLFormElement>(null!);

  const sendEmail = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const service = process.env.REACT_APP_SERVICE || '';
    const template = process.env.REACT_APP_TEMPLATE || '';
    const publicKey = process.env.REACT_APP_PUBLICKEY || '';
    emailjs.sendForm(
      service,
      template,
      form.current,
      publicKey
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