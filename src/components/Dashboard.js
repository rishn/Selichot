import React, { useState, useEffect } from 'react';
import { DatePicker, Divider, Typography } from 'antd';
import { toJewishDate, formatJewishDate } from 'jewish-date';
import AudioPlayer from '../audio/AudioPlayer';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../data/FirebaseConfig';
import '../styles.css';
import useTitle from '../hooks/UseTitle';
import dayjs from 'dayjs';
import selichotImage from '../assets/Selichot2.png'; // Import the image

const { Title, Paragraph } = Typography;

function Dashboard() {
  useTitle('Selichot');

  const [content, setContent] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [todayContent, setTodayContent] = useState('');
  const [todayAudioUrl, setTodayAudioUrl] = useState('');
  const [todayHebrewDate, setTodayHebrewDate] = useState('');

  const [playingAudio, setPlayingAudio] = useState('');
  const [defaultPickerMonth, setDefaultPickerMonth] = useState(dayjs());

  const getAudioFileName = (hebrewMonth, dayOfWeek, hebrewDay) => {
    const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri'];

    if (hebrewMonth === 'Elul' && hebrewDay > 1 && dayOfWeek !== 6) {
      return `elul_${weekDays[dayOfWeek]}.mp3`;
    }

    if (hebrewMonth === 'Tishri' && hebrewDay >= 3 && hebrewDay <= 9 && dayOfWeek !== 6) {
      return `tishri_${weekDays[dayOfWeek]}.mp3`;
    }

    return null;
  };

  const loadAudio = (fileName, setUrlCallback) => {
    if (!fileName) {
      setUrlCallback('');
      return;
    }

    const audioRef = ref(storage, `files/${fileName}`);
    getDownloadURL(audioRef)
      .then((url) => {
        setUrlCallback(url);
      })
      .catch((error) => {
        console.error("Error getting audio URL: ", error);
        setUrlCallback('');
      });
  };

  const handleDateChange = (date) => {
    if (date) {
      const jewishDate = toJewishDate(date.toDate());
      const formattedHebrewDate = formatJewishDate(jewishDate);
      const hebrewMonth = jewishDate.monthName;
      const hebrewDay = jewishDate.day;
      const dayOfWeek = date.day();

      if ((hebrewMonth === 'Elul' && hebrewDay > 1 && dayOfWeek !== 6) || 
          (hebrewMonth === 'Tishri' && hebrewDay >= 3 && hebrewDay <= 9 && dayOfWeek !== 6)) {
        const fileName = getAudioFileName(hebrewMonth, dayOfWeek, hebrewDay);
        if (fileName) {
          loadAudio(fileName, (url) => {
            setAudioUrl(url);
            setPlayingAudio(url); // Set the current playing audio URL
          });
          setContent(`Selichot prayers for ${date.format('DD MMMM YYYY')} (${formattedHebrewDate})`);
        } else {
          setContent(`No Selichot prayers available for ${date.format('DD MMMM YYYY')} (${formattedHebrewDate})`);
          setAudioUrl('');
        }
      } else {
        setContent(`No Selichot prayers available for ${date.format('DD MMMM YYYY')} (${formattedHebrewDate}).`);
        setAudioUrl('');
      }
    } else {
      setContent('');
      setAudioUrl('');
    }
  };

  useEffect(() => {
    const today = dayjs();
    const jewishDate = toJewishDate(today.toDate());
    const formattedHebrewDate = formatJewishDate(jewishDate);
    const hebrewMonth = jewishDate.monthName;
    const hebrewDay = jewishDate.day;
    const dayOfWeek = today.day();

    setTodayHebrewDate(formattedHebrewDate);

    if ((hebrewMonth === 'Elul' && hebrewDay > 1 && dayOfWeek !== 6) ||
        (hebrewMonth === 'Tishri' && hebrewDay >= 3 && hebrewDay <= 9 && dayOfWeek !== 6)) {
      const fileName = getAudioFileName(hebrewMonth, dayOfWeek, hebrewDay);
      if (fileName) {
        loadAudio(fileName, (url) => {
          setTodayAudioUrl(url);
          setPlayingAudio(url); // Set the current playing audio URL
        });
        setTodayContent(`Selichot prayers for today: ${today.format('DD MMMM YYYY')} (${formattedHebrewDate})`);
      } else {
        setTodayContent(`No Selichot prayers available for today: ${today.format('DD MMMM YYYY')} (${formattedHebrewDate})`);
        setTodayAudioUrl('');
      }
    } else {
      setTodayContent(`No Selichot prayers available for today: ${today.format('DD MMMM YYYY')} (${formattedHebrewDate}).`);
      setTodayAudioUrl('');
    }

    // Set default picker month
    if (hebrewMonth === 'Tishri') {
      setDefaultPickerMonth(today); // Current month if it's Tishri
    } else {
      // Default to Elul month if not Tishri
      setDefaultPickerMonth(dayjs().month(7)); // 7 for Elul (0-based index)
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      {/* Content Section */}
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <Title level={2} style={{ color: '#0038B8' }}>Selichot</Title>
        <p className='body-text'>
          Selichot prayers are a series of hymns aimed at seeking forgiveness from the Almighty for the sins committed throughout the year.<br/>
          They are traditionally recited early in the morning and must be completed before sunrise.<br/>
          The practice begins on the 2nd of Elul, the final month of the Hebrew calendar, and continues until the 9th of Tishri, the first month of the Hebrew calendar.<br/>
          However, if the 2nd of Elul falls on a Saturday, the observance starts on the 3rd of Elul.<br/>
          Selichot is not recited on Saturday mornings or during the Jewish New Year, which includes the 1st and 2nd of Tishri.<br/>
        </p>
        <p className='body-text'>
          Our goal is to offer every Jewish individual the opportunity to learn the Selichot prayers through this website, following the traditional Bene-Israeli practice.<br/>
          Feel free to click on any date in the calendar below to listen to the corresponding Selichot prayers for that day.<br/>
          We wish you a meaningful learning experience!<br/>
        </p>

        {/* Display today's date, Hebrew date, and audio */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: "#0038B8" }}>{todayContent}</h3>
          {todayAudioUrl && (
            <AudioPlayer 
              audioUrl={todayAudioUrl} 
              onPlay={() => setPlayingAudio(todayAudioUrl)} 
              playingAudio={playingAudio}
            />
          )}
        </div>

        {/* Transparent Divider */}
        <Divider style={{ borderColor: 'transparent', margin: '20px 0' }} />

        {/* Align "Select Date:" and DatePicker on the same line */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <p className='sub-text' style={{ marginRight: '10px' }}>Select Date:</p>
          <DatePicker 
            className='sub-text' 
            onChange={handleDateChange} 
            defaultPickerMonth={defaultPickerMonth} // Use defaultValue instead of defaultPickerValue
          />
        </div>

        {content && (
          <div style={{ marginTop: '20px' }}>
            <h3>{content}</h3>
            {audioUrl && (
              <AudioPlayer 
                audioUrl={audioUrl} 
                onPlay={() => setPlayingAudio(audioUrl)} 
                playingAudio={playingAudio}
              />
            )}
          </div>
        )}
      </div>

      {/* Image Section */}
      <div style={{ flex: '0 0 500px', textAlign: 'center' }}>
        <img src={selichotImage} alt="Selichot" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
      </div>
    </div>
  );
}

export default Dashboard;
