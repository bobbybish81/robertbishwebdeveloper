import { Routes, Route } from 'react-router-dom';
import DesktopHome from './routes/DesktopHome';
import MobileHome from './routes/MobileHome';
import Contact from './routes/Contact';

const App = () => {

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <Routes>
      <Route path='/' element={
      <>
        <DesktopHome handleScroll={handleScroll}/>
        <MobileHome handleScroll={handleScroll}/>
      </>}></Route>
      <Route path='/contactme' element={<Contact/>}></Route>
    </Routes>
  );
}

export default App;
