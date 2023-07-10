import { Routes, Route } from 'react-router-dom';
import DesktopHome from './routes/DesktopHome';
import MobileHome from './routes/MobileHome';
import Resume from './routes/Resume';
import Contact from './routes/Contact';
import Error from './routes/Error';

const App = () => {
  
  return (
      <Routes>
        <Route path='/' element={
        <>
          <MobileHome/>
          <DesktopHome/>
        </>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
        <Route path='/contactme' element={<Contact/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
      </Routes>
  );
}

export default App;
