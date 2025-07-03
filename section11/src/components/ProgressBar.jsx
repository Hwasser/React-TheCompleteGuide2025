import React, { useState, useEffect } from 'react'

const STEP = 10;

export default function ProgressBar({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
    // Varje gång ett tick kör i intervallet så behöver react rendera
    
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - STEP);
    }, STEP);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress value={remainingTime} max={timer} />
  )
}
