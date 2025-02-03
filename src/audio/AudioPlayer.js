import React, { useState, useRef, useEffect } from 'react';
import { Button, Slider, Typography, Space } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined, BorderOutlined } from '@ant-design/icons';
import './AudioPlayer.css'; // Import CSS for custom styles

const { Text } = Typography;

const AudioPlayer = ({ audioUrl, transcription }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const handleTimeChange = (value) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateCurrentTime);
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', updateCurrentTime);
        }
      };
    }
  }, [audioUrl]);

  useEffect(() => {
    // Reset audio on URL change
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [audioUrl]);

  // Function to check if current time is within the transcription's time range
  const isCurrentTextActive = (start, end) => {
    return currentTime >= start && currentTime <= end;
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={audioUrl}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <div className="controls">
        <Space style={{color: "#ececeb"}} size="middle">
          <Button
            icon={isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
            onClick={handlePlayPause}
            className="control-button"
          />
          <Button
            icon={<BorderOutlined />}
            onClick={handleStop}
            className="control-button"
          />
        </Space>
      </div>
      <Slider
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleTimeChange}
        className="progress-slider"
      />
      <div className="timestamp">
        <Text className="timestamp-text">
          {Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)}
          {' / '}
          {Math.floor(duration / 60)}:{('0' + Math.floor(duration % 60)).slice(-2)}
        </Text>
      </div>

      {/* Display Transcription with Highlights */}
      <div className="transcription">
        <div>
          <strong>Hebrew:</strong>
          {transcription?.hebrew?.split("[").map((entry, index) => {
            const [timeRange, ...text] = entry.split("]");
            const [start, end] = timeRange.split("-");
            const textContent = text.join("]").trim();

            return (
              <span
                key={index}
                style={{
                  backgroundColor: isCurrentTextActive(parseFloat(start), parseFloat(end)) ? '#ff0' : 'transparent',
                  fontWeight: isCurrentTextActive(parseFloat(start), parseFloat(end)) ? 'bold' : 'normal',
                }}
              >
                {textContent}{" "}
              </span>
            );
          })}
        </div>
        <div>
          <strong>English:</strong>
          {transcription?.english?.split("[").map((entry, index) => {
            const [timeRange, ...text] = entry.split("]");
            const [start, end] = timeRange.split("-");
            const textContent = text.join("]").trim();

            return (
              <span
                key={index}
                style={{
                  backgroundColor: isCurrentTextActive(parseFloat(start), parseFloat(end)) ? '#ff0' : 'transparent',
                  fontWeight: isCurrentTextActive(parseFloat(start), parseFloat(end)) ? 'bold' : 'normal',
                }}
              >
                {textContent}{" "}
              </span>
            );
          })}
        </div>
        <div>
          <strong>Phonetic:</strong>
          {transcription?.phonetic?.split("[").map((entry, index) => {
            const [timeRange, ...text] = entry.split("]");
            const [start, end] = timeRange.split("-");
            const textContent = text.join("]").trim();

            return (
              <span
                key={index}
                style={{
                  backgroundColor: isCurrentTextActive(parseFloat(start), parseFloat(end)) ? '#ff0' : 'transparent',
                  fontWeight: isCurrentTextActive(parseFloat(start), parseFloat(end)) ? 'bold' : 'normal',
                }}
              >
                {textContent}{" "}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
