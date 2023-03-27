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
          <h5>My Interests</h5>
            <img className='hobbies-img' src={require('../assets/hobbies.png')} alt='hobbies-img to appear'/>
            <p>{`"Personally, I love coding because it allows me to be creative and use my problem-solving skills to build something meaningful. I take great satisfaction from turning an idea into a functioning application!"`}</p>
            <p>{`"When I'm not coding I really love to watch and play sports. Football is my first love. When growing up my aspiration was to become a professional goalkeeper however that dream wasn't to be but I continue to play for a local team here in Stockholm!"`}</p>
            <p>{`"I also enjoy movies, music events and of course spending time with friends and family"`}</p>
          </div>
        </article>
        <article className='desktop-aboutme-article p-5'>
          <div className='about-text'>
            <h5>My Interests</h5>
            <p>{`"Personally, I love coding because it allows me to be creative and use my problem-solving skills to build something meaningful. I take great satisfaction from turning an idea into a functioning application!"`}</p>
            <p>{`"When I'm not coding I really love to watch and play sports. Football is my first love. When growing up my aspiration was to become a professional goalkeeper however that dream wasn't to be but I continue to play for a local team here in Stockholm!"`}</p>
            <p>{`"I also enjoy movies, music events and of course spending time with friends and family"`}</p>
          </div>
          <img className='hobbies-img' src={require('../assets/hobbies.png')} alt='hobbies-img to appear'/>
        </article>
      </section>
  )
}

export default AboutMe