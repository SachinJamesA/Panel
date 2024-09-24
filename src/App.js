import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home'; // Import Home component

function App() {
  const [activeLink, setActiveLink] = useState("");
  return (
    <Router>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add Home route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setActiveLink={setActiveLink} />} />
        <Route path="/signup" element={<Signup setActiveLink={setActiveLink} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
