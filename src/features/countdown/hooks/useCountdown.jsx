import { useState, useEffect } from 'react';

const calculateTimeLeft = (targetDate) => {
  const difference = targetDate - new Date().getTime();

  const addZeroToTime = (time) => {
    return `${time < 10 ? `0${time}` : time}`;
  };

  if (difference > 0) {
    return {
      days: addZeroToTime(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: addZeroToTime(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: addZeroToTime(Math.floor((difference / 1000 / 60) % 60)),
      seconds: addZeroToTime(Math.floor((difference / 1000) % 60)),
    };
  }
  return null;
};

export const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};
