import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <nav className='navbar'>
        <p className='welcome-tag'>{`</ Welcome >`}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to='/' className='navlink'>
            HOME
          </Link>
          <Link to='/contactme' className='navlink'>
            CONTACT ME
          </Link>
        </div>
    </nav>
  );
}

export default Nav;
