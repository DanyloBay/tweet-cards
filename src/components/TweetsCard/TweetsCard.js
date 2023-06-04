import { Button } from 'components/Button/Button';
import './TweetsCard.css';
import backimg from '../../images/logo-card.png';
import user from '../../images/boy.png';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFollowStatus } from 'redux/follow-status-slice';

export const TweetsCard = ({ tweet }) => {
  const dispatch = useDispatch();
  const [follow, setFollow] = useState(false);

  const handleFollowClick = e => {
    e.preventDefault();
    const newFollowStatus = !follow;
    setFollow(newFollowStatus);
    dispatch(setFollowStatus({ id: tweet.id, follow: newFollowStatus }));
  };

  useEffect(() => {
    const allFollowStatus =
      JSON.parse(localStorage.getItem('followStatus')) || {};
    if (allFollowStatus[tweet.id]) {
      setFollow(allFollowStatus[tweet.id]);
    }
  }, [tweet.id]);

  useEffect(() => {
    const allFollowStatus =
      JSON.parse(localStorage.getItem('followStatus')) || {};
    allFollowStatus[tweet.id] = follow;
    localStorage.setItem('followStatus', JSON.stringify(allFollowStatus));
  }, [follow, tweet.id]);

  return (
    <div className="user-card">
      <img src={backimg} alt="CardImage" />
      <div className="user-item">
        <img className="user-image" src={user} alt="User" />
      </div>
      <div className="stat">
        <div className="stat">
          <p>{tweet.tweets} Tweets</p>
        </div>
        <div className="stat">
          <p>{tweet.followers} Followers</p>
        </div>
      </div>
      <Button onClick={handleFollowClick} follow={follow} />
    </div>
  );
};
