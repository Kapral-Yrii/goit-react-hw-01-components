import PropTypes from 'prop-types'
export function Statistics({ title, stats }) {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                {stats.map(el => {
                    return (
                        <li className="item" key={el.id}>
                            <span className="label">{el.label}</span>
                            <span className="percentage">{el.percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

Statistics.propType = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    )
}