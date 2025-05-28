import React from 'react'

export default function UserInput({ onUpdateValue, inputData }) {
  return (
    <form id="user-input">
      <div className="input-group">
        <div>
          <label>initial investment</label>
          <input
            value={inputData.initialInvestment}
            id="initialInvestment"
            type="number"
            onChange={onUpdateValue}
          />
        </div>
        <div>
          <label>annual investment</label>
          <input
            value={inputData.annualInvestment}
            id="annualInvestment"
            type="number"
            onChange={onUpdateValue}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>expected return</label>
          <input
            value={inputData.expectedReturn}
            id="expectedReturn"
            type="number"
            onChange={onUpdateValue}
          />
        </div>
        <div>
          <label>duration</label>
          <input
            value={inputData.duration}
            id="duration"
            type="number"
            onChange={onUpdateValue}
          />
        </div>
      </div>
    </form>
  );
}
