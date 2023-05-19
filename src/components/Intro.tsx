import { Link } from 'react-router-dom';
import '../styles/Intro.css'

const Intro = () => {

  return (
    <section className='intro-section'>
      <article className='text-center'>
        <h1 className='intro-text'>Robert Bish</h1>
        <h1 className='intro-text'>Fullstack Web Developer</h1>
        <h5 className='skills mt-4 py-2 px-4'>JavaScript • TypeScript • React • Next.js • Node • MongoDB</h5>
        <Link to='/myresume' target={'_blank'}>
          <button className='resume-btn'>My Resume</button>
        </Link>
      </article>
    </section>
  )
}

export default Intro