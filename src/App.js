import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppHeader from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import History from './components/History';
import AboutUs from './components/AboutUs';
import Calendar from './components/Calendar';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './routes/PrivateRoute';
import { useAuth } from './data/AuthContext';
import './styles.css';
import Spinner from './components/Spinner';
import NotFound from './routes/NotFound';
import { Divider } from 'antd';

const { Content } = Layout;

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className='not-found-container'>
        <Divider style={{ borderColor: 'transparent', margin: '20px 0' }} />
        <Divider style={{ borderColor: 'transparent', margin: '20px 0' }} />
        <div className='spinner-container'>
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        {user && <Sidebar />}
        <Layout>
          <AppHeader />
          <Content style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/history" element={<History />} />
                <Route path="/about_us" element={<AboutUs />} />
                <Route path="/calendar" element={<Calendar />} />
              </Route>
              {/* Catch-all route for invalid paths */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
