import { useLayoutEffect } from 'react';
import Nav from '../components/Nav';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Social from '../components/Social';
import Footer from '../components/Footer';
import '../styles/Home.css';

interface DesktopProps {
  handleScroll: (elementId : string) => void;
}

const DesktopHome = ({ handleScroll } : DesktopProps) => {

  useLayoutEffect(() => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
  })

  return (
    <main className='desktop-home position-relative w-100'>
      <Nav handleScroll={handleScroll}/>
      <Intro/>
      <AboutMe/>
      <Portfolio/>
      <Social/>
      <Footer/>
    </main>
  );
}

export default DesktopHome;
