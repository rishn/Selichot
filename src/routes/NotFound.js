import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; 
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin, Divider } from 'antd';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate back to the previous page after a short delay
    const timer = setTimeout(() => {
      navigate(-1); // Go back to the previous page
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, [navigate]);

  return (
    <div className="not-found-container">
      <div className="spinner-container"> 
        <Flex>
          <Spin indicator={<LoadingOutlined style={{ fontSize: '100px', color: '#000', align: 'center' }} spin />} />
        </Flex>
      </div>
      
      {/* Transparent Divider */}
      <Divider style={{ borderColor: 'transparent', margin: '20px 0' }} />
      <Divider style={{ borderColor: 'transparent', margin: '20px 0' }} />
      <Divider style={{ borderColor: 'transparent', margin: '20px 0' }} />

      <div align="center">
        <h2 className='body-text'>Page Not Found</h2>
        <p className='sub-text'>Redirecting you back...</p>
      </div>
    </div>
  );
};

export default NotFound;
