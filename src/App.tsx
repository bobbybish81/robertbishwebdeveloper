import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={< Home/>}></Route>
      <Route path='/contactme' element={< Contact/>}></Route>
    </Routes>
  );
}

export default App;
