import { useNavigate } from 'react-router-dom';
import '../styles/Intro.css'

const Intro = () => {

  const navigate = useNavigate();

  return (
    <section className='intro-section'>
      <article className='text-center'>
        <h1 className='intro-text'>Robert Bish</h1>
        <h1 className='intro-text'>Fullstack Web Developer</h1>
        <h5 className='mt-4 py-2 px-4'>JavaScript • TypeScript • React • Next.js • Node • MongoDB</h5>
        <button className='contact-btn' onClick={() => navigate('/contactme')}>Get in Touch</button>
      </article>
    </section>
  )
}

export default Intro