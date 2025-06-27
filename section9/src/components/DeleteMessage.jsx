import { createPortal } from 'react-dom';
import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const forwardDeleteMessage = forwardRef(
  function DeleteMessage({ name, onDelete }, ref) {
    const dialog = useRef();
  
    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        }
      }
    });

    function handleClose() {
      dialog.current.close();
    }

    return createPortal(
      <dialog ref={dialog} className='p-4 rounded-lg border-zinc-600'>
          <p>Are you sure you want to delete {name}?</p>
          <menu className='mt-4 flex justify-center gap-4'>
              <li><button className='bg-red-500 rounded-lg text-white font-semibold py-2 px-4 hover:bg-red-400 transition duration-100' onClick={onDelete}>Yes</button></li>
              <li><button className='rounded-lg font-semibold py-2 px-4 hover:bg-zinc-100 transition duration-100' onClick={handleClose}>No</button></li>
          </menu>
      </dialog>
    , document.getElementById('modal-root'));
  }
);

export default forwardDeleteMessage;