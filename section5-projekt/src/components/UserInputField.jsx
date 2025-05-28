import React from 'react'

export default function UserInputField({ onUpdateValue, inputData, id, title }) {
  return (
    <div>
      <label>{title}</label>
      <input
        value={inputData}
        id={id}
        type="number"
        onChange={onUpdateValue}
        required
      />
    </div>
  );
}
