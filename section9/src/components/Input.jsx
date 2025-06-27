import React from 'react'

export default function Input({ label, isTextarea, ...props }) {
  return (
    <p>
        <label>{label}</label>
        {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  )
}
