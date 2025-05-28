import React from 'react'
import UserInputField from './UserInputField';

export default function UserInput({ onUpdateValue, inputData }) {
  return (
    <form id="user-input">
      <div className="input-group">
				<UserInputField 
					onUpdateValue={onUpdateValue} 
					inputData={inputData.initialInvestment} 
					id="initialInvestment"
					title="Initial Investment" 
				/>
				<UserInputField 
					onUpdateValue={onUpdateValue} 
					inputData={inputData.annualInvestment} 
					id="annualInvestment"
					title="Annual Investment" 
				/>
      </div>
      <div className="input-group">
				<UserInputField 
					onUpdateValue={onUpdateValue} 
					inputData={inputData.expectedReturn} 
					id="expectedReturn"
					title="Expected Return" 
				/>
				<UserInputField 
					onUpdateValue={onUpdateValue} 
					inputData={inputData.duration} 
					id="duration"
					title="Duration" 
				/>
      </div>
    </form>
  );
}
