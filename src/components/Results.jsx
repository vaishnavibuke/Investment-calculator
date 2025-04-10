import { calculateInvestmentResults, formatter } from "../util/investment";

function Results({ userInput }) {
  //   console.log(userInput);

  const resultsData = calculateInvestmentResults(userInput);
  //   console.log(resultsData);

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <th>YEAR</th>
        <th>CAPITAL</th>
        <th>INTEREST (YEARLY)</th>
        <th>TOTAL INTEREST</th>
        <th>INVESTMENT VALUE</th>
      </thead>
      <tbody>
        {resultsData.map((res) => {
          const totalInterest =
            res.valueEndOfYear -
            res.annualInvestment * res.year -
            initialInvestment;

          const totalAmountInvested = res.valueEndOfYear - totalInterest;

          return (
            <tr key={res.year}>
              <td>{res.year}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
              <td>{formatter.format(res.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(res.valueEndOfYear)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
