import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
  </Router>
  );
}

export default App;
