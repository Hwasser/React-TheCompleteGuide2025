import React from 'react'
import { formatter } from '../util/investment.js';

export default function ResultTable({ tableData, inputData }) {

  let totalInterest = 0;
  let investedCapital = inputData.initialInvestment;

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Totalt Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableData && tableData.map((row) => { 
          totalInterest += row.interest;
          investedCapital += row.annualInvestment;

          return (
            <tr>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr> 
          )
        })}
      </tbody>
    </table>
  )
}
