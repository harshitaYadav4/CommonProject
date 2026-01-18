import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="brand">
        <div className="logo-mark">💼</div>
        <span>Job Portal</span>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="actions">
        <button className="btn-ghost">Login</button>
        <button className="btn-primary">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;