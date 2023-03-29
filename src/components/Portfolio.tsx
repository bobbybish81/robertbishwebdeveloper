import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';

const Portfolio = () => {

  return (
    <section className='portfolio-section'>
        <h1>My Portfolio</h1>
        <article className='portfolio-article mt-5'>
          <div className='portfolio-item'>
            <h5>Revive Ltd: Hard Surface Repair Specialists</h5>
            <Link 
              to='https://www.reviverepairs.com'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/portfolio1.webp')}
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
                src={require('../assets/portfolio2.webp')}
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
                src={require('../assets/portfolio3.webp')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>A exercise to create a fullstack application for puppy lovers using React and Typescript</p>
          </div>
          <div className='portfolio-item'>
            <h5>The Milk Store</h5>
            <Link 
              to='https://github.com/bobbybish81/typescript-test-milkApp-vite'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/portfolio4.webp')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>This exercise was to create an application using React & Typescript which retrieves and displays mock data from an api that the user can be easily navigate through and place a mock order.</p>
          </div>
          <div className='portfolio-item'>
            <h5>Quizzie Rascal</h5>
            <Link 
              to='https://quizzierascal.netlify.app'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/portfolio5.webp')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>Quizzie Rascal is a fully deployed quiz game that presents the user with 10 random questions with 4 possible answers thast are to be answered as quickly as possible.</p>
          </div>
          <div className='portfolio-item'>
            <h5>Saltazon-Online</h5>
            <Link 
              to='https://saltazon-online.netlify.app'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/portfolio6.webp')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>This exercise was to create an eCommerce app (reminiscent of Amazon) where users can make a mock purchase and administrators can add, change or delete their own products.</p>
          </div>
          <div className='portfolio-item'>
            <h5>City Finder</h5>
            <Link 
              to='https://cityfinder.netlify.app'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/portfolio7.webp')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>A game where the user has to find the city on a map when prompted to within 50km</p>
          </div>
        </article>
      </section>
  )
}

export default Portfolio