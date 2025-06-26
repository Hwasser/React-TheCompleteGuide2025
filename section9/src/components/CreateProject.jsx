import React, { useRef } from 'react'

export default function CreateProject({ onCloseProject, onAddProject }) {
  const titleInput = useRef('');
  const descriptionInput = useRef('');
  const dueDateInput = useRef('');

  function handleAddProject() {
    // Title and description need to be 3 characters or more
    if (titleInput.current.value.length < 3 && descriptionInput.current.value.length < 3) {
      return;
    }

    // Check if duedate is choosen
    if (!dueDateInput.current.value) {
      return;
    }

    // Check whether due date is before current date
    const dueDateTime = new Date().getTime(dueDateInput.current.value);
    const currentTime = new Date().getTime();
    if (dueDateTime < currentTime) {
      return;
    }    

    onAddProject(titleInput.current.value, descriptionInput.current.value, dueDateInput.current.value);
  }

  return (
    <>
      <div className='flex justify-end mb-8 gap-2'>
        <button 
          className='text-lg font-semibold py-1 px-4 hover:bg-zinc-200 transition duration-100'
          onClick={onCloseProject}
        >Cancel</button>
        <button 
          className='text-lg font-semibold text-white bg-black py-1 px-4 rounded-md hover:bg-zinc-800 transition duration-100'
          onClick={handleAddProject}
        >Save</button>
      </div>
      
      <section className='flex flex-col gap-8'>
        <form className='flex flex-col'>
          <label name="title" className='font-semibold text-zinc-700'>TITLE</label>
          <input type="text" ref={titleInput} className='bg-zinc-200 border-b-2 border-zinc-300 py-1 px-2' />
        </form>

        <form className='flex flex-col'>
          <label name="description" className='font-semibold text-zinc-700'>DESCRIPTION</label>
          <textarea ref={descriptionInput} className='bg-zinc-200 border-b-2 border-zinc-300 py-1 px-2' />
        </form>

        <form className='flex flex-col'>
          <label name="dueDate" className='font-semibold text-zinc-700'>DUE DATE</label>
          <input type="date" ref={dueDateInput} className='bg-zinc-200 border-b-2 border-zinc-300 py-1 px-2' />
        </form>
      </section>

    </>
  )
}
