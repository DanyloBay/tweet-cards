import { Container } from 'components/Container/Container';
import { TweetsList } from 'components/TweetsList/TweetsList';

export const TweetsPage = () => {
  return (
    <Container title="List of Tweets">
      <TweetsList />
    </Container>
  );
};
