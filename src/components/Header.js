import React, { useState, useEffect } from 'react';
import { Layout, Button, Space } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../data/FirebaseConfig'; // Import the auth from Firebase config
import { LogoutOutlined, ArrowLeftOutlined } from '@ant-design/icons'; // Import icons
import '../styles.css';

const { Header } = Layout;

function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  useEffect(() => {
    // Prevent navigation to login page if authenticated
    if (isAuthenticated && location.pathname === '/login') {
      navigate('/');
    }
  }, [isAuthenticated, location.pathname, navigate]);

  return (
    <Header className="header">
      <div className="header-content">
        {isAuthenticated && (
          <Button 
            className="back-button" 
            type="primary" 
            icon={<ArrowLeftOutlined />} 
            onClick={handleBack}
          >
            Back
          </Button>
        )}
        {! isAuthenticated && <Space style={{width: "50px"}}> </Space>}
        Selichot: The Bene Israeli Tradition
        {isAuthenticated && (
          <Button 
            className="logout-button" 
            type="primary" 
            icon={<LogoutOutlined />} 
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
        {! isAuthenticated && <Space style={{width: "50px"}}> </Space>}
      </div>
    </Header>
  );
}

export default AppHeader;
