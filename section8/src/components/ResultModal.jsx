import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from 'react'

const ResultModal = forwardRef(
    function ResultModal({ targetTime, remainingTime, onReset }, ref) {

      const dialog = useRef();

      const userLost = remainingTime <= 0;
      const formattedRemainingTime = (remainingTime / 1000).toFixed(2); 
      const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

      useImperativeHandle(ref, () => {
        return {
          open() {
            dialog.current.showModal();
          }
        }
      });

      // Skapar en portal som teleportar iväg <dialog> högre upp i trädet (se 'index.html')
      return createPortal(
        <dialog ref={dialog} className='result-modal' onClose={onReset}>
            {userLost && <h2>You lost!</h2>}
            {!userLost && <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
      , document.getElementById('modal'));
    }
);
    
export default ResultModal;


