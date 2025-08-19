import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import ArticleList from './components/ArticleList';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <Profile />;
      case 'articles':
        return <ArticleList />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="app-container">
      <Container fluid className="p-0">
        <Row className="g-0">
          <Col xs={sidebarCollapsed ? 1 : 3} className="position-relative">
            <Sidebar 
              collapsed={sidebarCollapsed} 
              toggleSidebar={toggleSidebar}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </Col>
          <Col xs={sidebarCollapsed ? 11 : 9}>
            <div className="p-4 position-relative">
              <div className="jolly-roger">
                <i className="bi bi-skull"></i>
              </div>
              
              <div className="straw-hat">
                <i className="bi bi-emoji-sunglasses" style={{display: 'none'}}></i>
              </div>
              
              {renderContent()}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;