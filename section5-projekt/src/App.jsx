import React, { useState } from "react"
import Logo from './assets/investment-calculator-logo.png'
import ResultTable from "./components/ResultTable"
import UserInput from "./components/UserInput"
import { calculateInvestmentResults } from './util/investment.js';

const DEFAULT_VALUE = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
}

function App() {
  const [inputData, setInputData] = useState(DEFAULT_VALUE);
  const [tableData, setTableData] = useState([]);

  function handleUpdateValue(data) {
    const value = data.target.value;
    const field = data.target.id;

    if (value < 0 || !field) return;


    setInputData(prev => {
      // Update input values
      const newValue = { ...prev };
      newValue[field] = parseInt(value);

      // Update data table
      setTableData(calculateInvestmentResults(newValue));

      return newValue;
    })
  }

  return (
    <>
      <header id="header">
        <img src={Logo} />
        <h1>Investment Calculator</h1>
      </header>
      <main>
        <UserInput onUpdateValue={handleUpdateValue} inputData={inputData} />
        <ResultTable tableData={tableData} inputData={inputData} />
      </main>
    </>
  )
}

export default App
