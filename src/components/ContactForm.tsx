import { useFormik } from 'formik';
import '../styles/Contact.css';

const ContactForm = () => {

  const onSubmit = async (values:any) => {

  }

  const formik = useFormik({
    initialValues: {
    name: '',
    email: '',
    message: '',
  },
    onSubmit,
  });

  return (
      <form 
        onSubmit={formik.handleSubmit}
        className='contact-form'>
        <h4>Get in Touch!</h4>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={formik.values.name}
          onChange={formik.handleChange}/>
        <input
          type='email'
          name='email'
          placeholder='Email*'
          value={formik.values.email}
          onChange={formik.handleChange}/>
        <input
          type='text'
          name='message'
          placeholder='Message'
          value={formik.values.message}
          onChange={formik.handleChange}/>
        <button
          className='form-btn'
          type='submit'>
          SEND
        </button>
      </form>
  );
}

export default ContactForm;