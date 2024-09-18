import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../data/FirebaseConfig'; // Import your Firebase configuration
import Spinner from '../components/Spinner'
import '../styles.css'
import { Divider } from 'antd';

const PrivateRoute = () => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  if (authenticated === null) {
    return (
      <div className='not-found-container'>
        <Divider style={{ borderColor: 'transparent', margin: '20px 0' }} />
        <Divider style={{ borderColor: 'transparent', margin: '20px 0' }} />
        <div className='spinner-container'>
          <Spinner className='spinner'/>
        </div>
      </div>
    );
  }

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;