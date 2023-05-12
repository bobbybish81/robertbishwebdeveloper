import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Nav = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const menuToggle = () => {
    openMenu === true ? setOpenMenu(false) : setOpenMenu(true);
  };
  
  const menuStyles = {
    Active: {
      height: '25rem',
      borderBottom: '2px solid #fff'
    },
    Inactive: {
      height: '0',
      borderBottom: 'none'
    }
  }

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <nav className='mobile-navbar'>
        <p className='welcome-tag'>
          {openMenu ? `</ Robert Bish >` : `</ Welcome >`}
        </p>
        {openMenu ?
        <IoClose
          className='menu-closebtn' onClick={menuToggle}/> :
        <IoMenu
          className='menu-openbtn' onClick={menuToggle}/>}
      <div
        className={`mobile-menu ${openMenu ? 'active' : ''}`}
        style={openMenu ? menuStyles.Active : menuStyles.Inactive}>
          <p className='navlink' onClick={() => {
            handleScroll('aboutme');
            menuToggle();
            }}>
            ABOUT ME
          </p>
          <p className='navlink' onClick={() => {
            handleScroll('myportfolio');
            menuToggle();
            }}>
            MY PORTFOLIO
          </p>
          <Link to='/contactme' className='navlink' onClick={menuToggle}>
            CONTACT
          </Link>
          <div className='d-flex justify-content-center align-items-center mt-4'>
            <Link
              to='https://www.facebook.com/robert.bish.9'
              target="_blank"
              rel="noreferrer"
              onClick={menuToggle}>
                <FontAwesomeIcon className='nav-icon' id='facebook-nav-icon' icon={faFacebook}/>
            </Link>
            <Link
              to='https://www.instagram.com/bobbybish81'
              target="_blank"
              rel="noreferrer"
              onClick={menuToggle}>
                <FontAwesomeIcon className='nav-icon' id='instagram-nav-icon' icon={faInstagram}/>
            </Link>
            <Link
              to='https://github.com/bobbybish81'
              target="_blank"
              rel="noreferrer"
              onClick={menuToggle}>
                <FontAwesomeIcon className='nav-icon' id='github-nav-icon' icon={faGithub}/>
            </Link>
            <Link
              to='https://www.linkedin.com/in/robert-bish-1a6a8637'
              target="_blank"
              rel="noreferrer">
                <img
                src={require('../assets/linkedin_icon.webp')} alt='linkedin_logo'
                className='nav-icon' id='linkedin-nav-icon'
                onClick={menuToggle}/>
            </Link>
          </div>
        </div>
      </nav>
      <nav className='desktop-navbar'>
        <p className='welcome-tag'>
          {`</ Welcome >`}
        </p>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='navlink' onClick={() => 
            window.scrollTo({ top: 700, behavior: 'smooth' })}>
            ABOUT ME
          </p>
          <p className='desktop-portfolio navlink' onClick={() => 
            window.scrollTo({ top: 2300, behavior: 'smooth' })}>
            MY PORTFOLIO
          </p>
          <Link to='/contactme' className='navlink'>
            CONTACT
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
