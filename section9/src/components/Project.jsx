import React from 'react'

export default function Project({ selectedProject }) {
  const { title, date, description, tasks } = selectedProject;

  return (
    <main id='project-view' className='mt-24'>
      <section className='w-full mb-4'>
        <div className='flex justify-between w-full'>
          <h1 className='text-4xl font-bold mb-4 text-zinc-800'>{title}</h1>
          <button className='font-semibold'>Delete</button>
        </div>
        <p className='text-zinc-500 mb-4'>{date}</p>
        <pre>{description}</pre>
        <hr />
      </section>

      <section>
        <h2 className='text-3xl font-bold mb-4'>Tasks</h2>
        <div className='flex justify-between w-full'>
          <form>
            <input className='bg-zinc-300 p-1 rounded-sm' />
            <button className=' ml-4 font-semibold'>Add Task</button>
          </form>
        </div>
      </section>
    </main>
  )
}
