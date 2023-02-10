import Nav from '../components/Nav';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {

  const navigate = useNavigate();

  return (
    <main className='position-relative w-100'>
      <Nav/>
      <section className='intro-section'>
        <article className='text-center'>
          <h1 className='intro-text'>Robert Bish</h1>
          <h1 className='intro-text'>Fullstack Javascript Developer</h1>
          <h5 className='mt-4'>Get to know me!</h5>
          <button className='contact-btn' onClick={() => navigate('/')}>Contact Me</button>
        </article>
      </section>
      <section className='aboutme-section'>
        <h1>About Me</h1>
        <article className='d-flex p-5'>
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
        <article className='d-flex p-5'>
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
      <section className='portfolio-section'>
        <h1>My Portfolio</h1>
        <article className='portfolio-article my-5'>
          <div className='portfolio-item'>
            <h5>Revive Ltd: Hard Surface Repair Specialists</h5>
            <Link 
              to='https://www.reviverepairs.com'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/portfolio1.png')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>A fully deployed frontend React application for a UK repair business</p>
          </div>
          <div className='portfolio-item'>
            <h5>Blog App</h5>
            <Link 
              to='https://github.com/bobbybish81/typescript-test-tiny-blog'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/portfolio2.png')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>A exercise to create a blog using React and Typescript that connect to this api <a href='https://dummyjson/posts'>https://dummyjson/posts</a> and display the posts as a list of cards</p>
          </div>
          <div className='portfolio-item'>
            <h5>Puppy Gallery</h5>
            <Link 
              to='https://github.com/bobbybish81/typescript-lab-puppiesfullstack'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/portfolio3.png')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>A exercise to create a fullstack application for puppy lovers using React and Typescript</p>
          </div>


        </article>
      </section>
    </main>
  );
}

export default Home;
