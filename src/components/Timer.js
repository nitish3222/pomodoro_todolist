import React, { useState, useEffect } from 'react';
import './Timer.css';

const PomodoroTimer = ({ timerRunning, startTimer, pauseTimer }) => {
    const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
    const [audio] = useState(new Audio('src/sound/start-sound.mp3'));
  
    useEffect(() => {
      let timer;
      if (timerRunning) {
        timer = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
      }
      return () => clearInterval(timer);
    }, [timerRunning]);
  
    useEffect(() => {
      if (timeLeft === 0) {
        // Timer is complete, implement Pomodoro Technique logic here
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    
      }
    }, [timeLeft,audio]);
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
  
    const resetTimer = () => {
      setTimeLeft(1500); // Reset to 25 minutes
      audio.pause();
      audio.currentTime = 0;
    };

    const handleStartTimer = () => {
        startTimer();
        audio.pause();
        audio.currentTime = 0;
      };
    
      const handlePauseTimer = () => {
        pauseTimer();
        audio.pause();
        audio.currentTime = 0;
      };
  
    return (
      <div className="pomodoro-timer-container">
        <h2 className="pomodoro-timer-heading">Pomodoro Timer</h2>
        <p className="timer">{formatTime(timeLeft)}</p>
        <div className="timer-controls">
          <button className="timer-button" onClick={handleStartTimer}>
            Start
          </button>
          <button className="timer-button" onClick={handlePauseTimer}>
            Pause
          </button>
          <button className="timer-button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    );
  };
  
  export default PomodoroTimer;