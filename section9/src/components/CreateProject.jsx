import React, { useRef } from 'react'
import Input from './Input';

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
      <div className='w-[35rem]'>
        <menu className="flex justify-end mb-8 gap-2">
          <li>
            <button
              className="text-lg font-semibold py-1 px-4 rounded-lg hover:bg-zinc-200 transition duration-100"
              onClick={onCloseProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="text-lg font-semibold text-white bg-black py-1 px-4 rounded-md hover:bg-zinc-800 transition duration-100"
              onClick={handleAddProject}
            >
              Save
            </button>
          </li>
        </menu>

        <section className="flex flex-col gap-8">
          <form className="flex flex-col">
            <Input label="Title" ref={titleInput} />
            <Input label="Description" isTextarea={true} ref={descriptionInput} />
            <Input label="Due Date" ref={dueDateInput} type="date" />
          </form>
        </section>
      </div>
    </>
  );
}
