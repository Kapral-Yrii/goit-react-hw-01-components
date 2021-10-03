import PropTypes from 'prop-types'
export function TransactionHistory({items}) {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

          <tbody>
                {items.map(el => {
                    return (
                        <tr key={el.id}>
                            <td>{el.type}</td>
                            <td>{el.amount}</td>
                            <td>{el.currency}</td>
                        </tr>
                    )
                })}
          </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    )
}
