import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = ({ collapsed, toggleSidebar, activeSection, setActiveSection }) => {
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''} position-relative`} style={{ width: collapsed ? '80px' : '280px' }}>
      <button 
        className="toggle-btn" 
        onClick={toggleSidebar}
      >
        {collapsed ? <i className="bi bi-chevron-right"></i> : <i className="bi bi-chevron-left"></i>}
      </button>
      
      {!collapsed && (
        <div className="p-4">
          <div className="sidebar-jolly-roger">
            <i className="bi bi-skull"></i>
          </div>
          <h5 className="sidebar-title">ODA SENSEI</h5>
          <Nav className="flex-column">
            <Nav.Link 
              active={activeSection === 'profile'} 
              onClick={() => setActiveSection('profile')}
              className="d-flex align-items-center"
            >
              <i className="bi bi-person-fill sidebar-icon"></i>
              Profile
            </Nav.Link>
            <Nav.Link 
              active={activeSection === 'articles'} 
              onClick={() => setActiveSection('articles')}
              className="d-flex align-items-center"
            >
              <i className="bi bi-journal-text sidebar-icon"></i>
              One Piece Arcs
            </Nav.Link>
          </Nav>
          
          <div className="text-center mt-5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Shueisha_%282003%29.svg/320px-Shueisha_%282003%29.svg.png" className="publisher-logo" alt="Shueisha" />
            <p className="text-muted mt-2">Published by Shueisha</p>
          </div>
        </div>
      )}
      
      {collapsed && (
        <div className="d-flex flex-column align-items-center mt-5 pt-4">
          <div className="sidebar-jolly-roger">
            <i className="bi bi-skull"></i>
          </div>
          <Nav className="flex-column">
            <Nav.Link 
              active={activeSection === 'profile'} 
              onClick={() => setActiveSection('profile')}
              className="p-3"
            >
              <i className="bi bi-person-fill"></i>
            </Nav.Link>
            <Nav.Link 
              active={activeSection === 'articles'} 
              onClick={() => setActiveSection('articles')}
              className="p-3"
            >
              <i className="bi bi-journal-text"></i>
            </Nav.Link>
          </Nav>
        </div>
      )}
    </div>
  );
};

export default Sidebar;