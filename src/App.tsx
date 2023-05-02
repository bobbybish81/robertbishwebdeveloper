import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import DesktopHome from './routes/DesktopHome';
import MobileHome from './routes/MobileHome';
import Contact from './routes/Contact';

const App = () => {

  const aboutMeRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);  

  const handleScroll = (elementRef: React.RefObject<HTMLElement>) => {
    const element = elementRef.current;
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <Routes>
      <Route path='/' element={
      <>
        <DesktopHome
          aboutMeRef={aboutMeRef}
          portfolioRef={portfolioRef}
          handleScroll={handleScroll}/>
        <MobileHome
          aboutMeRef={aboutMeRef}
          portfolioRef={portfolioRef}
          handleScroll={handleScroll}/>
      </>}></Route>
      <Route path='/contactme' element={<Contact/>}></Route>
    </Routes>
  );
}

export default App;
