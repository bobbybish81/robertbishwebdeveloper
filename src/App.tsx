import { Routes, Route } from 'react-router-dom';
import DesktopHome from './routes/DesktopHome';
import MobileHome from './routes/MobileHome';
import Contact from './routes/Contact';

const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={
      <>
        <MobileHome/>
        <DesktopHome/>
      </>}></Route>
      <Route path='/contactme' element={<Contact/>}></Route>
    </Routes>
  );
}

export default App;
