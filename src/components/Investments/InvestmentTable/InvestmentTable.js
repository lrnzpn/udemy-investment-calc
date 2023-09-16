import styles from './InvestmentTable.module.css'

const InvestmentTable = (props) => {

  if(!props.items) {
    return <p className={styles['empty-result']}>
      No investment calculated yet.
    </p>
  }

  return (
    <table className={styles.result}>
    {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {
            props.items.map(item => <tr key={item.year}>
              <td>{item.year}</td>
              <td>${item.savingsEndOfYear.toFixed(2)}</td>
              <td>${item.yearlyInterest.toFixed(2)}</td>
              <td>${item.totalInterest.toFixed(2)}</td>
              <td>${item.investedCapital.toFixed(2)}</td>
            </tr>
          )}
        </tbody>
      </table>
  )
}

export default InvestmentTable;