import React from 'react'

export default function Sidebar({ projects }) {
  return (
    <nav className='bg-black rounded-tr-xl mt-8 mr-8 p-8 h-full' id='sidebar' >
        <h2 className='text-white text-2xl font-semibold mb-8'>YOUR PROJECTS</h2>
        <button className='text-white text-base bg-zinc-700 p-2 rounded-md'>
            <p className='text-zinc-400'>+ Add Project</p>
        </button>
        <ul>
            { projects && projects.map((project) => <li>{project.title}</li>) }
        </ul>
    </nav>
  )
}
