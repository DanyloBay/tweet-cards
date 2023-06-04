import { TweetsCard } from 'components/TweetsCard/TweetsCard';
import { useSelector } from 'react-redux';
import {
  selectFollowStatus,
  selectStatusFilter,
  selectTweets,
} from 'redux/selectors';
import './TweetsList.css';
import { statusFilters } from 'redux/constants';
import { useState } from 'react';

export const TweetsList = () => {
  const tweets = useSelector(selectTweets);
  const followStatus = useSelector(selectFollowStatus);
  const statusFilter = useSelector(selectStatusFilter);

  const getVisibleTweets = (tweets, followStatus, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.follow:
        return tweets.filter(tweet => !followStatus);
      case statusFilters.followings:
        return tweets.filter(tweet => followStatus);
      default:
        return tweets;
    }
  };

  const visibleTweets = getVisibleTweets(tweets, followStatus, statusFilter);

  const [numVisibleTweets, setNumVisibleTweets] = useState(3);

  const handleLoadMoreClick = () => {
    setNumVisibleTweets(numVisibleTweets + 3);
  };

  return (
    <>
      <ul className="tweets-list">
        {visibleTweets.slice(0, numVisibleTweets).map(user => (
          <li className="tweets-list_item" key={user.id}>
            <TweetsCard tweet={user} />
          </li>
        ))}
      </ul>
      <div className="tweets-btn_item">
        {numVisibleTweets < visibleTweets.length && (
          <button className="tweets-button" onClick={handleLoadMoreClick}>
            Load More
          </button>
        )}
      </div>
    </>
  );
};
