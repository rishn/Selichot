import React from 'react';
import { Typography, Card } from 'antd';
import '../styles.css'
import useTitle from '../hooks/UseTitle';

const { Title, Paragraph } = Typography;

const History = () => {
  useTitle('History - Selichot');

  return (
    <div style={{ padding: '20px' }}>
      <Card className='title-card'>
        <Title level={2} style={{ color: '#0038B8' }}>History of Selichot</Title>
        <Paragraph className='body-text'>
          Selichot prayers are a compilation of songs to seek forgiveness from the Almighty for the sins we have committed throughout the year. 
          They start on the 2nd day of the last month in the Hebrew Calendar (2nd of Elul) and continue until the 9th of the first month of the Hebrew Calendar (9th of Tishrei), except on Saturdays and during the Jewish New Year.
        </Paragraph>
        <Paragraph className='body-text'>
          This section provides a deeper understanding of the traditions surrounding Selichot and their significance in Jewish culture.
        </Paragraph>
      </Card>
    </div>
  );
};

export default History;
