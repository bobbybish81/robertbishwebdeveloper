import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';

const Portfolio = () => {

  return (
    <section className='portfolio-section' id='myportfolio'>
        <h1>My Portfolio</h1>
        <article className='portfolio-article mt-5'>
          <div className='portfolio-item'>
            <h5>Revive Repairs</h5>
            <Link 
              to='https://www.reviverepairs.com'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/reviverepairs.webp')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>A fully deployed frontend React application for a UK based surface repair business.</p>
          </div>
          <div className='portfolio-item'>
            <h5>Akysec</h5>
            <Link 
              to='https://www.akysec.com'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/akysec.webp')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>A fully deployed frontend React application for an Information Security Consultancy business built using TypeScript and Sanity CMS.</p>
          </div>
          <div className='portfolio-item'>
            <h5>RobGPT</h5>
            <Link 
              to='https://robgpt.netlify.app'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/RobGPT.webp')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>This application is a clone of the ChatGPT language model, built using React and TypeScript. </p>
          </div>
          <div className='portfolio-item'>
            <h5>Quizzie Rascal</h5>
            <Link 
              to='https://quizzierascal.netlify.app'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/quizzierascal.webp')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>Quizzie Rascal is a fully deployed quiz game that presents the user with 10 random questions with 4 possible answers that are to be answered as quickly as possible.</p>
          </div>
          <div className='portfolio-item'>
            <h5>City Finder</h5>
            <Link 
              to='https://cityfinder.netlify.app'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/cityfinder.webp')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>A game where the user has to find the city on a map when prompted to within 50km</p>
          </div>
          <div className='portfolio-item'>
            <h5>CIKC Store</h5>
            <Link 
              to='https://cikc-reloaded-store.netlify.app'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/cikcstore.webp')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>This project was a collaboration with fellow Salt graduates to create a user-friendly eCommerce MERN app (reminiscent of IKEA) where users can view over 200 products and place a mock order</p>
          </div>
          <div className='portfolio-item'>
            <h5>The Milk Store</h5>
            <Link 
              to='https://themilkstore.netlify.app/'
              target="_blank"
              rel="noreferrer">
              <img
                className='portfolio-img'
                src={require('../assets/milkstore.webp')}
                alt='porfolio-img to appear'
                />
            </Link>
            <p className='mt-3'>This exercise was to create an application using React & Typescript which retrieves and displays mock data from an api that the user can be easily navigate through and place a mock order.</p>
          </div>
        </article>
      </section>
  )
}

export default Portfolio