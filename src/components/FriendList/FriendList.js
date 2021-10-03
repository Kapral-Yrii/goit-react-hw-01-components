import PropTypes from 'prop-types'
export function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(el => {
                return (
                    <li className="item" key={el.id}>
                        <span className={el.isOnline === true ? "online" : "offline"}></span>
                        <img className="avatar" src={el.avatar} alt={el.name} width="48" />
                        <p className="name">{el.name}</p>
                    </li>
                )
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number,
        })
    )
}