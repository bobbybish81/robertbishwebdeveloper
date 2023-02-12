import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='p-4 d-flex justify-content-center align-items-center bg-black'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <p
          className='text-center'
          style={{color: '#D3D3D3'}}>Copyright © 2023 Robert Bish Web Developer - All Rights Reserved</p>
        <Link 
          to='/' 
          className='text-center text-white'
          style={{textDecoration: 'none', cursor: 'pointer'}}>PRIVACY POLICY</Link>
      </div>
    </footer>
  )
}

export default Footer