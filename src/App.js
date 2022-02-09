import Container from './components/container/Container'
import Profile from './components/profile/Profile';
import Statistics from './components/statistic/Statistics';
import FriendList from './components/friends/FriendList';
import TransactionHistory from './components/transaction/TransactionHistory';

import user from './Data/user.json'
import data from './Data/data.json'
import friends from './Data/friends.json'
import transactions from './Data/transactions.json'


export default function App() {
    return (
        <div>
            <Container>
                <Profile
                    username={user.username}
                    tag={user.tag}
                    location={user.location}
                    avatar={user.avatar}
                    stats={user.stats}
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
