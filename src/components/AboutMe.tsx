import '../styles/AboutMe.css';

const AboutMe = () => {

  return (
      <section className='aboutme-section' id='aboutme'>
        <h1>About Me</h1>
        <article className='aboutme-article px-5 pt-5'>
          <img className='aboutme-img' src={require('../assets/about_me.webp')} alt='profile-img to appear'/>
          <div className='about-text'>
            <h2>Robert Bish</h2>
              <p>{`</ I am a Full-Stack JavaScript Developer based in Stockholm >`}</p>
              <p>{`</  After transitioning from a data analytics career, I trained at Salt (School of Applied Technology) and now build modern web applications using React, Next.js and Node.js >`}</p>
              <p>{`</  I am seeking opportunities to contribute to high-impact web products >`}</p>
              <h2 id='skills'>Skills</h2>
              <div className='skills px-0 pt-0'>
                <img className='skills-img px-0 pt-0' src={require('../assets/skills.webp')} alt='skills-img to appear'/>
              </div>
          </div>
        </article>
      </section>
  )
}

export default AboutMe