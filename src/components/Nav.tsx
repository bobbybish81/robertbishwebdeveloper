import { Link } from 'react-router-dom';

interface NavProps {
  handleScroll: (elementId : string) => void;
}

const Nav = ({ handleScroll } : NavProps) => {

  return (
    <nav className='navbar'>
        <Link to='/' className='welcome-tag'>
          {`</ Welcome >`}
        </Link>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='navlink' onClick={()=> handleScroll('aboutme') }>
            ABOUT ME
          </p>
          <p className='navlink' onClick={()=> handleScroll('portfolio') }>
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
