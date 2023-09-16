import styles from './InvestmentTable.module.css'

const InvestmentTable = (props) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formatData = (data) => {
    return formatter.format(data);
  }

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
              <td>{formatData(item.savingsEndOfYear)}</td>
              <td>{formatData(item.yearlyInterest)}</td>
              <td>{formatData(item.totalInterest)}</td>
              <td>{formatData(item.investedCapital)}</td>
            </tr>
          )}
        </tbody>
      </table>
  )
}

export default InvestmentTable;