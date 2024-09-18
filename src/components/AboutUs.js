import React from 'react';
import { Typography, Card } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import '../styles.css';
import useTitle from '../hooks/UseTitle';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  useTitle('About Us - Selichot');

  return (
    <div style={{ padding: '20px' }}>
      <Card className='title-card'>
        <Title level={2} style={{ color: '#0038B8' }}>About Us</Title>
        <Paragraph className='body-text'>
          Welcome to our Selichot learning platform.<br />
          We are dedicated to preserving and teaching the traditional Bene-Israeli form of Selichot prayers.<br />
          Our mission is to help every Jew learn and appreciate these prayers.<br /><br />
        </Paragraph>
        <Paragraph className='body-text'>
          This project was created by Educify™ An EduTech Enterprise, 2024.<br />
          This platform was built with love and care by a group of passionate individuals who wish to contribute to the community.<br /><br />
        </Paragraph>
        <Paragraph className='body-text'>
          <strong style={{ color: '#0038B8' }}>Shneur Sholi Jhirad</strong><br />
          Project Manager, Educify<br />
          <a href="https://github.com/rishn" target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px' }}>
            <GithubOutlined className='icon'/>
          </a><br /><br />
        </Paragraph>
        <Paragraph className='body-text'>
          <strong style={{ color: '#0038B8' }}>Rishaan Jacob Kuriakose</strong><br />
          Founder, SDE, Educify<br />
          <a href="https://www.linkedin.com/in/rishaanjacob/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px', marginRight: '10px' }}>
            <LinkedinOutlined className='icon' />
          </a>
          <a href="https://github.com/rishn" target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px' }}>
            <GithubOutlined className='icon'/>
          </a><br /><br />
        </Paragraph>
      </Card>
    </div>
  );
};

export default AboutUs;
