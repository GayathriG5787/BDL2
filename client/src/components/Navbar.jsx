import React from 'react';
import logo from '../assets/logo.png'; // replace with your actual logo path

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1rem 3rem',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1000,
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      }}
    >
      {/* Logo on the left */}
      <div style={{ flex: 1 }}>
        <img src={logo} alt="BDL Logo" style={{ height: '60px' }} />
      </div>

      {/* Center Navigation Links */}
      <div style={{ flex: 2, display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#services" style={linkStyle}>Services</a>
        <a href="#careers" style={linkStyle}>Careers</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#contact" style={linkStyle}>Contact Us</a>
      </div>

      {/* Right space filler (can be used later for buttons or profile) */}
      <div style={{ flex: 1 }}></div>
    </nav>
  );
};

const linkStyle = {
  color: '#111827',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
  transition: 'color 0.2s',
};

export default Navbar;
