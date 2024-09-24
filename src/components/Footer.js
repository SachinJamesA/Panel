import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4">
      <div className="text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        <p className="text-sm">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | 
          <Link to="/terms" className="hover:underline"> Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
