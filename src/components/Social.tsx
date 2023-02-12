import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Social.css';

const Social = () => {

  return (
    <section className='socialmedia-section'>
      <h1>Social</h1>
      <article className='p-5 d-flex justify-content-center align-items-center'>
        <Link
          to='https://www.facebook.com/robert.bish.9'
          target="_blank"
          rel="noreferrer">
            <FontAwesomeIcon className='social-icon' id='facebook-icon' icon={faFacebook}/>
        </Link>
        <Link
          to='https://www.instagram.com/bobbybish81'
          target="_blank"
          rel="noreferrer">
            <FontAwesomeIcon className='social-icon' id='instagram-icon' icon={faInstagram}/>
        </Link>
        <Link
          to='https://github.com/bobbybish81'
          target="_blank"
          rel="noreferrer">
            <FontAwesomeIcon className='social-icon' id='github-icon' icon={faGithub}/>
        </Link>
        <Link
          to='https://www.linkedin.com/in/robert-bish-1a6a8637'
          target="_blank"
          rel="noreferrer">
            <FontAwesomeIcon className='social-icon' id='linkedin-icon' icon={faLinkedin}/>
        </Link>
      </article>
    </section>
  );
}

export default Social;
