import s from './Profile.module.css';
import PropTypes from 'prop-types';
export default function Profile(props) {
  const { avatarUrl, username, tag, location, profileFolowers, profileViews, profileLikes } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatarUrl} alt={username} className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{profileFolowers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{profileViews}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{profileLikes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  profileFolowers: PropTypes.number.isRequired,
  profileViews: PropTypes.number.isRequired,
  profileLikes: PropTypes.number.isRequired,
};
