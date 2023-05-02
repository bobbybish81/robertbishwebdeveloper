import { Link } from 'react-router-dom';

interface NavProps {
  aboutMeRef: React.RefObject<HTMLElement>;
  portfolioRef: React.RefObject<HTMLElement>;
  handleScroll: (elementId : React.RefObject<HTMLElement>) => void;
}

const Nav = ({ aboutMeRef, portfolioRef, handleScroll } : NavProps) => {

  return (
    <nav className='navbar'>
        <Link to='/' className='welcome-tag'>
          {`</ Welcome >`}
        </Link>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='navlink' onClick={()=> {handleScroll(aboutMeRef)} }>
            ABOUT ME
          </p>
          <p className='navlink' onClick={()=> handleScroll(portfolioRef) }>
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
