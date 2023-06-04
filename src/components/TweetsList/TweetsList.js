import { TweetsCard } from 'components/TweetsCard/TweetsCard';
import { useSelector } from 'react-redux';
import {
  selectFollowStatus,
  selectStatusFilter,
  selectTweets,
} from 'redux/selectors';
import './TweetsList.css';
import { statusFilters } from 'redux/constants';

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

  return (
    <ul className="tweets-list">
      {visibleTweets.map(user => (
        <li className="tweets-list_item" key={user.id}>
          <TweetsCard tweet={user} />
        </li>
      ))}
    </ul>
  );
};
