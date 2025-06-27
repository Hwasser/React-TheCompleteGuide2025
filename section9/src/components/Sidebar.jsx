import React from 'react'

export default function Sidebar({ projects, selectedProject, onCreateProject, onSelectProject }) {
  const selectedClass = 'p-2 text-white bg-zinc-800 hover:bg-zinc-700 transition duration-100';
  const nonSelectedClass = 'p-2 text-zinc-300 hover:bg-zinc-900 transition duration-100';

  let currentSelectedId = -1;
  if (selectedProject && selectedProject.id) {
    currentSelectedId = selectedProject.id;
  }

  return (
    <aside className='bg-black rounded-tr-xl mr-8 p-8 w-1/3 md:w-72' id='sidebar' >
        <h2 className='text-white text-2xl font-semibold mb-8'>YOUR PROJECTS</h2>
        <button 
          className='text-white text-base bg-zinc-700 p-2 rounded-md hover:bg-zinc-600 transition duration-100'
          onClick={onCreateProject}
        >
            <p className='text-zinc-400'>+ Add Project</p>
        </button>
        <ul className='mt-8'>
            { projects && projects.map((project) => 
              <li key={project.title + project.id}>
                <button className={(project.id === currentSelectedId) ? selectedClass : nonSelectedClass } onClick={() => onSelectProject(project.id)} >
                  {project.title}
                </button>
              </li>
            ) }
        </ul>
    </aside>
  )
}
