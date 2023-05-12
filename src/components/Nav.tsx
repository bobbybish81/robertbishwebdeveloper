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

  const mobileScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
    menuToggle()
  }

  const scrollToAboutMe = () => {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    window.scrollTo({ top: 2300, behavior: 'smooth' });
  };

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
          <Link to='/' className='navlink' onClick={() => {
              mobileScroll('aboutme');
              }}>
              ABOUT ME
          </Link>
          <Link to='/' className='navlink' onClick={() => {
              mobileScroll('myportfolio');
              }}>
              MY PORTFOLIO
          </Link>
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
          <Link to='/' className='navlink' onClick={()=> setTimeout(scrollToAboutMe, 0)}>
            ABOUT ME
          </Link>
          <Link to='/' className='navlink' onClick={()=> setTimeout(scrollToPortfolio, 0)}>
            MY PORTFOLIO
          </Link>
          <Link to='/contactme' className='navlink'>
            CONTACT
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
