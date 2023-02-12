import Nav from '../components/Nav';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Social from '../components/Social';
import Footer from '../components/Footer';
import '../styles/Home.css';

const DesktopHome = () => {

  return (
    <main className='desktop-home position-relative w-100'>
      <Nav/>
      <Intro/>
      <AboutMe/>
      <Portfolio/>
      <Social/>
      <Footer/>
    </main>
  );
}

export default DesktopHome;
