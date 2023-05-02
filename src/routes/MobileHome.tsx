import { useLayoutEffect } from 'react';
import Nav from '../components/Nav';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Social from '../components/Social';
import Footer from '../components/Footer';
import '../styles/Home.css';

interface MobileProps {
  aboutMeRef: React.RefObject<HTMLElement>;
  portfolioRef: React.RefObject<HTMLElement>;
  handleScroll: (elementId : React.RefObject<HTMLElement>) => void;
}

const MobileHome = ({ aboutMeRef, portfolioRef, handleScroll } : MobileProps) => {

  useLayoutEffect(() => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
  })

  return (
    <main className='mobile-home position-relative w-100'>
      <Nav
        aboutMeRef={aboutMeRef}
        portfolioRef={portfolioRef}
        handleScroll={handleScroll}/>
      <Intro/>
      <AboutMe aboutMeRef={aboutMeRef}/>
      <Portfolio portfolioRef={portfolioRef}/>
      <Social/>
      <Footer/>
    </main>
  );
}

export default MobileHome;
