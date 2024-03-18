import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Main from './Main.js';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
function App() {
  return (
    <div className='App'>
    <Nav></Nav>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;