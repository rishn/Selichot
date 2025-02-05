import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, CalendarOutlined, InfoCircleOutlined, BookOutlined } from '@ant-design/icons';
import '../styles.css';

function Sidebar() {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['/']}
      style={{ backgroundColor: '#0038B8' }}
      className='menu-text' // Increased font size
    >
      <Menu.Item
        key="/"
        icon={<HomeOutlined className='menu-icon' />} // Increased icon size
      >
        <Link to="/" className='menu-text'>Home</Link> {/* Increased text size */}
      </Menu.Item>
      <Menu.Item
        key="/calendar"
        icon={<CalendarOutlined className='menu-icon' />} // Increased icon size
      >
        <Link to="/calendar" className='menu-text'>Calendar</Link> {/* Increased text size */}
      </Menu.Item>
      <Menu.Item
        key="/history"
        icon={<BookOutlined className='menu-icon' />} // Increased icon size
      >
        <Link to="/history" className='menu-text'>History</Link> {/* Increased text size */}
      </Menu.Item>
      <Menu.Item
        key="/about_us"
        icon={<InfoCircleOutlined className='menu-icon' />} // Increased icon size
      >
        <Link to="/about_us" className='menu-text'>About Us</Link> {/* Increased text size */}
      </Menu.Item>
    </Menu>
  );
}

export default Sidebar;
