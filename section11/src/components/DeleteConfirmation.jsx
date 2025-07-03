import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // Varje gång ett tick kör i intervallet så behöver react rendera
  // om hela komponenten. Därför plockar vi ur så mycket vi kan vid detta.
  // I Detta fal själva progress bar.

  // useEffect(() => {
    
  //   const interval = setInterval(() => {
  //     setRemainingTime(prevTime => prevTime - STEP);
  //   }, STEP);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // Bra exempel på hur useEffect förenklar användandet av timers, eftersom
  // att timern inte sätts om när den ritas om kan man sätta en variabel direkt
  // och använda return som en cleanup-funktion.
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm()
    }, TIMER);

    return () => {
      clearTimeout(timer);
    }
  }, [onConfirm]);


  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
