import React, { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timeStep = 10;
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => { 
      setTimeRemaining(prev => prev - timeStep);
    }, timeStep);
  }

  // function handleStart() {
  //   setTimerStarted(true);
  //   timer.current = setTimeout(() => { 
  //     setTimerExpired(true) 
  //     // dialog.current.showModal(); - tidigare lösning. Men vi har en custom open-metod istället
  //     // för att man inte skall vara beroende av att kalla metoder direkt i source coden
  //     // -> Bättre de-coupling mellan komponenter.
  //     dialog.current.open();
  //   }, targetTime * 1000);
  // }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />     
      <section className="challenge">
        TimerChallenge
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : ''}>
          {timerIsActive ? 'Timer is running' : 'Timer inactive' }
        </p>
      </section>
    </>
  );
}
 