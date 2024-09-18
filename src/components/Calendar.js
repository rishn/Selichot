import React, { useState, useEffect } from 'react';
import { Calendar, Card, Typography } from 'antd';
import { toJewishDate, formatJewishDate } from 'jewish-date';
import dayjs from 'dayjs';
import '../styles.css';
import useTitle from '../hooks/UseTitle';

const { Title, Paragraph } = Typography;

const CalendarPage = () => {
  useTitle('Calendar - Selichot');

  const [selectedDate, setSelectedDate] = useState(dayjs()); // Default to today’s date
  const [selichotInfo, setSelichotInfo] = useState('');

  const formatHebrewDate = (jewishDate) => {
    const day = jewishDate.day.toString().padStart(2, '0');
    const month = jewishDate.monthName.slice(0, 3); // Get first 3 letters of Hebrew month
    const year = jewishDate.year.toString().slice(-2); // Get last 2 digits of year
    return `${day}/${month}/${year}`;
  };

  const getSelichotInfo = (date) => {
    const jewishDate = toJewishDate(date.toDate());
    const expandedHebrewDate = formatJewishDate(jewishDate);
    const hebrewMonth = jewishDate.monthName;
    const hebrewDay = jewishDate.day;
    const dayOfWeek = date.day();

    if (hebrewMonth === 'Elul' && hebrewDay > 1 && dayOfWeek !== 6) {
      return `Selichot prayers are to be performed on this date (${expandedHebrewDate}).`;
    }

    if (hebrewMonth === 'Tishri' && hebrewDay >= 3 && hebrewDay <= 9 && dayOfWeek !== 6) {
      return `Selichot prayers are to be performed on this date (${expandedHebrewDate}).`;
    }

    return `No Selichot prayers are to be performed on this date (${expandedHebrewDate}).`;
  };

  const onDateSelect = (date) => {
    setSelectedDate(date);
    const info = getSelichotInfo(date);
    setSelichotInfo(info);
  };

  const dateCellRender = (value) => {
    const jewishDate = toJewishDate(value.toDate());
    const hebrewMonth = jewishDate.monthName;
    const hebrewDay = jewishDate.day;
    const dayOfWeek = value.day();
    const formattedHebrewDate = formatHebrewDate(jewishDate);

    // Determine if the date should be considered disabled
    const isDisabled = !(
      (hebrewMonth === 'Elul' && hebrewDay > 1 && dayOfWeek !== 6) ||
      (hebrewMonth === 'Tishri' && hebrewDay >= 3 && hebrewDay <= 9 && dayOfWeek !== 6)
    );

    return (
      <div
        className="cell-content"
        style={{
          textAlign: 'center',
          padding: '5px',
          color: isDisabled ? '#bfbfbf' : '#000000', // Disabled color
          cursor: isDisabled ? 'not-allowed' : 'pointer'
        }}
      >
        <div style={{ opacity: isDisabled ? 0.5 : 1, color: "#000000" }}>
          {formattedHebrewDate}
        </div>
        {(
          (hebrewMonth === 'Elul' && hebrewDay > 1 && dayOfWeek !== 6) ||
          (hebrewMonth === 'Tishri' && hebrewDay >= 3 && hebrewDay <= 9 && dayOfWeek !== 6)
        ) && (
          <div style={{ color: '#0038B8' }}>Selichot Prayers</div>
        )}
      </div>
    );
  };

  useEffect(() => {
    const currentJewishDate = toJewishDate(dayjs().toDate());
    const defaultMonth = currentJewishDate.monthName === 'Tishri' ? 9 : 8; // 9 for Tishri, 8 for Elul
    setSelectedDate(dayjs().month(defaultMonth - 1)); // month() is zero-indexed
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Card className='title-card'>
        <Title level={2} style={{ color: '#0038B8' }}>Selichot Calendar</Title>
        <Paragraph className='body-text'>
          Schedule for Selichot prayers. Select a date to know more.
        </Paragraph>
        <Calendar
          onSelect={onDateSelect}
          fullscreen={false}
          dateCellRender={dateCellRender}
          defaultValue={selectedDate || dayjs()} // Ensures a fallback if selectedDate is null
          style={{ backgroundColor: '#ececeb', padding: '20px' }}
        />
        {selectedDate && (
          <div style={{ marginTop: '20px' }}>
            <Title level={4}>Selected Date: {selectedDate.format('MMMM Do, YYYY')}</Title>
            <Title level={4}>Hebrew Date: {formatJewishDate(toJewishDate(selectedDate.toDate()))}</Title>
            <Paragraph className='body-text'>
              {selichotInfo}
            </Paragraph>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CalendarPage;
