import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal= forwardRef(function Modal({children}, ref) {
  const dialog = useRef();
  
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  })

  return createPortal(
    <dialog ref={dialog} className='backdrop:bg-zinc-400/50 rounded-lg p-4'>
      {children}
      <form method="dialog" className='mt-4 text-right'>
        <button className='bg-zinc-300 p-2 rounded-lg font-semibold hover:bg-zinc-200 transition duration-100'>Close</button>
      </form>
    </dialog>
    , document.getElementById('modal-root')
  );
  
});


export default Modal;