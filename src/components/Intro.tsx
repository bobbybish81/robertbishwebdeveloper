import { Link } from 'react-router-dom';
import Text from './Text';
import '../styles/Intro.css'

const Intro = () => {

  return (
    <section className='intro-section'>
      <article className='text-center'>
        <h1 className='intro-text'>Robert Bish</h1>
        <h1 className='intro-text'>Software Developer</h1>
        <Text text={'JavaScript • TypeScript • React • Next.js • Node • SQL • MongoDB'}/>
        <Link to='/resume' target={'_blank'}>
          <button className='resume-btn'>My Resume</button>
        </Link>
      </article>
    </section>
  )
}

export default Intro