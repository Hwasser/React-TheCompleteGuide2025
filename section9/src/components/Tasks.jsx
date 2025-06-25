import React, { useRef, useState } from 'react'

export default function Tasks({ startTasks, onEditTasks }) {
  const taskInput = useRef('');
  const [tasks, setTasks] = useState(startTasks ?? []);
  const [error, setError] = useState(null);

  function handleAddTask() {
    if (taskInput.current.value.length <= 3) {
      setError('a task needs to be at least 3 characters long')
      return;
    }

    if (tasks.length > 0 && tasks.includes(taskInput.current.value)) {
      setError('a task with that name already exists')
      return;
    }

    const newTaskList = (tasks.length > 0) ? [...tasks] : [];
    newTaskList.push(taskInput.current.value);

    taskInput.current.value = '';

    setTasks(newTaskList);
    setError(null);
    onEditTasks(newTaskList);
  }

  function handleRemoveTask(name) {
    const newTaskList = tasks.filter(task => task !== name);
    setTasks(newTaskList);
    setError(null);
    onEditTasks(newTaskList);
  }

  return (
    <section>
      <h2 className='text-3xl font-bold mb-4'>Tasks</h2>
      <form className='flex justify-between w-full'>
        <input ref={taskInput} className='bg-zinc-300 px-2 py-1 rounded-sm' />
        <button type='button' className='font-semibold px-2 py-1 hover:bg-zinc-200 rounded-sm transition duration-100' onClick={handleAddTask}>Add Task</button>
      </form>
      {error && <p className='text-red-500 mt-1'>({error})</p>} 
      {
        tasks.length > 0 &&
        <ul className='mt-8 list-none bg-zinc-200 rounded-sm p-2'>
          {tasks.map((task) => <li key={task} className='p-2 flex justify-between'>
            <span>{task}</span>
            <button className='font-semibold hover:text-red-500 transition duration-100' onClick={() => handleRemoveTask(task)}>Clear</button>
          </li>)}
        </ul>
      }
    </section>
  )
}
