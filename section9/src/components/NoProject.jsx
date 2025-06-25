import React from 'react'
import Image from '../assets/no-projects.png';

export default function NoProject({ onCreateProject }) {
  return (
    <>
        <section className='flex flex-col items-center'>
            <img src={Image} className='w-24 mb-4' />
            <h2 className='text-xl font-semibold mb-4'>No Project Selected</h2>
            <p className='text-zinc-700 mb-6'>Select a project or get started with anew one</p>
            <button className='bg-zinc-600 text-zinc-200 p-2 rounded-md text-lg mb-4' onClick={onCreateProject}>Create new project</button>
        </section>
    </>
  )
}
