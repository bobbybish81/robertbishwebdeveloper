import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='p-5 d-flex justify-content-center align-items-center bg-black'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <p
          className='text-center m-0'
          style={{color: '#D3D3D3'}}>Copyright © 2023 Robert Bish Web Developer - All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer