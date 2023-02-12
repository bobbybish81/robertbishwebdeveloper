import '../styles/AboutMe.css';

const AboutMe = () => {

  return (
      <section className='aboutme-section'>
        <h1>About Me</h1>
        <article className='aboutme-article px-5 pt-5'>
          <img className='aboutme-img' src={require('../assets/aboutme.png')} alt='profile-img to appear'/>
          <div className='about-text'>
            <h5>My Background</h5>
            <p>{`"I am originally from the United Kingdom but now based in Stockholm, Sweden..... and I have a passion for coding!
            I previously worked as a data analyst but I gave up that career to follow my ambition of becoming a fullstack web developer.
            I began my coding journey in January 2022 and since then I have acquired advanced knowledge of HTML, CSS, Javascript, Typescript, Node, React, Next.js and various other frameworks"`}</p>
            <br/>
            <p>{`"In December 2022 I earned a diploma having sucessfully completed the Fullstack Javascript Bootcamp at </ salt > (School of Applied Technology)"`}</p>
          </div>
        </article>
        <article className='mobile-aboutme-article px-5'>
          <div className='about-text mb-5'>
            <h5>My Hobbies</h5>
            <img className='hobbies-img' src={require('../assets/hobbies.png')} alt='hobbies-img to appear'/>
            <p>{`"When I'm not coding I really love to watch and play sports. Football is my first love. Many years before I had dreams of becoming a developer, my aspiration was to become a professional goalkeeper.
            Unfortunately that dream wasn't to be but I continue to play even today for a local team here in Stockholm."`}</p>
            <p>{`"I'm also a massive Liverpool fan and try to watch them whenever I can"`}</p>
            <p>{`"I also enjoy movies, music events (singing is a guily pleasure of mine!) and of course spending time with friends and family"`}</p>
          </div>
        </article>
        <article className='desktop-aboutme-article p-5'>
          <div className='about-text'>
            <h5>My Hobbies</h5>
            <p>{`"When I'm not coding I really love to watch and play sports. Football is my first love. Many years before I had dreams of becoming a developer, my aspiration was to become a professional goalkeeper.
            Unfortunately that dream wasn't to be but I continue to play even today for a local team here in Stockholm."`}</p>
            <p>{`"I'm also a massive Liverpool fan and try to watch them whenever I can"`}</p>
            <p>{`"I also enjoy movies, music events (singing is a guily pleasure of mine!) and of course spending time with friends and family"`}</p>
          </div>
          <img className='hobbies-img' src={require('../assets/hobbies.png')} alt='hobbies-img to appear'/>
        </article>
      </section>
  )
}

export default AboutMe