export const Table = ({
  banksList,
  onDelete
}) => {
  return (
    <div className="table__container">

      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Bank name</th>
            <th>Interest rate</th>
            <th>Maximum loan</th>
            <th>Minimum down payment</th>
            <th>Loan term</th>
          </tr>
        </thead>
        <tbody>
          {banksList.map(bank => (
            <tr key={bank.name}>
              <td>{bank.name}</td>
              <td>{`${ bank.rate } %`}</td>
              <td>{`$ ${ bank.loan }`}</td>
              <td>{`${ bank.payment } %`}</td>
              <td>{`${ bank.term } years`}</td>
              <td
                type="button"
                className="table__button"
                onClick={() => onDelete(bank.name)}
              >
                X
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}