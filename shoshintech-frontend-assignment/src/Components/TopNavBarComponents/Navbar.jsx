import React, { useState } from "react";
import { FaBell, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'; // Icons
import SearchBar from './SearchBar.jsx'; // Assuming SearchBar is a component

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      {/* Mobile Menu Toggle */}
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ?  <FaBars size={24} /> :<FaTimes size={24} />}
      </button>

      {/* Search Bar (always visible) */}
      <SearchBar />

      {/* Icons and user information for desktop only */}
      {!isMobile && (
        <div className="nav-right-section" style={{ display: 'flex', alignItems: 'center' }}>
          {/* User Avatar and Name */}
          <div className="user-avatar" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <img
              src="https://via.placeholder.com/40" // Replace this with the actual desktop image source
              alt="User Avatar"
              className="avatar desktop-avatar"
              style={{ borderRadius: '50%', marginRight: '10px' }}
            />
            <span className="user-name" style={{ fontWeight: 'bold', fontSize: '16px' }}>Raj Kanugala</span>
            <FaChevronDown className="dropdown-icon" style={{ marginLeft: '8px' }} />
          </div>

          {/* Notification Icon with Badge */}
          <div className="notification-icon" style={{ display: 'flex', alignItems: 'center' }}>
            <FaBell size={20} />
            <span className="badge" style={{ marginLeft: '5px', color: 'white', backgroundColor: 'red', borderRadius: '50%', padding: '2px 6px' }}>3</span>
          </div>
        </div>
      )}

      {/* Responsive Mobile Menu */}
      {isMobile && (
        <div className="mobile-menu" style={{ display: "flex" }}>
          {/* Notification Icon */}
          <div className="notification-icon">
            <FaBell size={20} />
            <span className="badge">3</span>
          </div>

          {/* User Avatar and Dropdown (Mobile View) */}
          <div className="user-avatar">
            <img
              src="https://via.placeholder.com/40" // Replace this with the actual mobile image source
              alt="User Avatar"
              className="avatar mobile-avatar"
            />
            <FaChevronDown className="dropdown-icon" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
