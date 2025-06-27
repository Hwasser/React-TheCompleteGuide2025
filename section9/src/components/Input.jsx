import React, { useRef } from 'react'

export default function Input({ label, isTextarea, ...props }) {

  const inputRef = useRef();

  return (
    <p className='flex flex-col gap-1 my-4'>
        <label className='text-sm font-bold uppercase text-zinc-500'>{label}</label>
        {isTextarea ? 
            <textarea 
              className='w-full bg-zinc-200 p-1 border-b-2 rounded-sm border-zinc-300 text-zinc-700 focus:outline-none focus:border-zinc-400' 
              ref={inputRef}
              {...props} 
            /> : 
            <input 
              className='w-full bg-zinc-200 p-1 border-b-2 rounded-sm border-zinc-300 text-zinc-700 focus:outline-none focus:border-zinc-400' 
              ref={inputRef}
              {...props} 
            />
        }
    </p>
  )
}
