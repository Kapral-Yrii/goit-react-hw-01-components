import PropTypes from 'prop-types'
import style from './FriendList.module.css'

export function FriendList({ friends }) {
    return (
        <ul className={style.list}>
            {friends.map(el => {
                return (
                    <li className={style.item} key={el.id}>
                        <span className={el.isOnline === true ? style.online : style.offline}></span>
                        <img className={style.avatar} src={el.avatar} alt={el.name} width="48" />
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