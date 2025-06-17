import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);


  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => { 
      setTimerExpired(true) 
      // dialog.current.showModal(); - tidigare lösning. Men vi har en custom open-metod istället
      // för att man inte skall vara beroende av att kalla metoder direkt i source coden
      // -> Bättre de-coupling mellan komponenter.
      dialog.current.open();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result={"lost"} />     
      <section className="challenge">
        TimerChallenge
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerStarted ? 'active' : ''}>
          {timerStarted ? 'Timer is running' : 'Timer inactive' }
        </p>
      </section>
    </>
  );
}
 