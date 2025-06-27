import { useRef } from "react";
import Tasks from "./Tasks";
import DeleteMessage from "./DeleteMessage";

export default function Project({ selectedProject, onEditTasks, onDeleteProject }) {
  const { title, dueDate, createdDate, description, startTasks } = selectedProject;

  const deleteDialog = useRef();

  function handleEditTasks(data) {
    onEditTasks(data);
  }

  function handleDeleteDialog() {
    deleteDialog.current.open();
  }

  return (
    <>
      <DeleteMessage name={title} ref={deleteDialog} onDelete={() => onDeleteProject(selectedProject.id)} />
      <section className='w-full mb-4'>
        <div className='flex justify-between w-full'>
          <h1 className='text-4xl font-bold mb-4 text-zinc-800'>{title}</h1>
          <button 
            className='font-semibold hover:text-red-500 transition duration-100'
            onClick={handleDeleteDialog}
          >Delete</button>
        </div>
        <p className='text-zinc-500 mb-4'>Created: {createdDate}</p>
        <pre className='mb-4'>{description}</pre>
        <p className='text-lg font-semibold text-zinc-600 mb-4'>Due Date: {dueDate}</p>
        <hr />
      </section>
      <Tasks startTasks={startTasks} onEditTasks={handleEditTasks} />
    </>
  )
}
