import PropTypes from 'prop-types';
import FriendListItem from '../friendListItem/FriendListItem';
import s from './FriendList.module.css';
function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <FriendListItem isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
