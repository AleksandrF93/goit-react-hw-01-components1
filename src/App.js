import Container from './components/container/Container'
import Profile from './components/profile/Profile';
import Statistics from './components/statistic/Statistics';
import FriendList from './components/friends/FriendList';
import TransactionHistory from './components/transaction/TransactionHistory';

import profile from './components/profile/user.json'
import data from './components/statistic/data.json'
import friends from './components/friends/friends.json'
import transactions from './components/transaction/transactions.json'


export default function App() {
    return (
        <div>
            <Container>
                <Profile
                    avatarUrl={profile.avatar}
                    username={profile.username}
                    tag={profile.tag}
                    location={profile.location}
                    profileFolowers={profile.stats.followers}
                    profileViews={profile.stats.views}
                    profileLikes={profile.stats.likes}
                />
            </Container>
            <Container>
                <Statistics title="Upload stats" stats={data} />
            </Container>
            <Container>
                <FriendList friends={friends} />
            </Container>
            <Container>
                <TransactionHistory items={transactions} />
            </Container>
        </div>
    );
}
