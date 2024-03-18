import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Main from './Main.js';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import BookingPage from './BookingPage/BookingPage';
function App() {
  return (
    <div className='App'>
    <Nav></Nav>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/booking-page' element={<BookingPage />}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;