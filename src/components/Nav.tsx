import { Link } from 'react-router-dom';

const Nav = () => {
  
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className='navbar'>
        <p className='welcome-tag'>
          {`</ Welcome >`}
        </p>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='navlink' onClick={() => 
            window.scrollTo({ top: 700, behavior: 'smooth' })}>
            ABOUT ME
          </p>
          <p className='mobile-portfolio navlink' onClick={() => 
            handleScroll('myportfolio')}>
            MY PORTFOLIO
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
  );
}

export default Nav;
