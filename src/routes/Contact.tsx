import Social from '../components/Social';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';

const Contact = () => {

  return (
    <main className='contact w-100'>
      <nav className='contact-navbar'>
        <p className='welcome-tag'>{`</ Welcome >`}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to='/' className='navlink'>
            HOME
          </Link>
          <Link to='/contactme' className='navlink'>
            CONTACT ME
          </Link>
        </div>
      </nav>
      <Social/>
      <section className='mobile-contact-section'>
        <h1 className='contact-section-heading'>Contact Me</h1>
        <article className='contact-article'>
          <div>
            <h4>Questions or Comments</h4>
            <p>Send me a message or ask me a question using this form. I will do my best to get back to you soon!</p>
          </div>
          <ContactForm/>
        </article>
      </section>
      <section className='desktop-contact-section'>
      <h1 className='contact-section-heading'>Contact Me</h1>
        <article className='contact-article'>
          <ContactForm/>
          <div>
            <h4>Questions or Comments</h4>
            <p>Send me a message or ask me a question using this form. I will do my best to get back to you soon!</p>
            <br></br>
            <h5>Robert Bish Web Developer</h5>
          </div>
        </article>
      </section>
      <Footer/>
    </main>
  );
}

export default Contact;
