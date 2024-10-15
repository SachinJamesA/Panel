import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home'; // Import Home component
import About from './components/About';
import ProfilePage from './profile/ProfilePage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Service from './components/Service';
<<<<<<< HEAD
import Api from './components/Api';
=======
>>>>>>> 0eb925cc6ece0a321c2bb08ae6ae6050bc063638

function App() {
  const [activeLink, setActiveLink] = useState("");
  return (
    <Router>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/api" element={<Api />} />
        <Route path="/login" element={<Login setActiveLink={setActiveLink} />} />
        <Route path="/signup" element={<Signup setActiveLink={setActiveLink} />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* Profile Page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
