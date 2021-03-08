import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';

import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

function App() {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://hu-assignment4.free.beeceptor.com/friends')
            .then((response) => response.json())
            .then((data) => setFriends(data.users))
            .finally(() => setIsLoading(false));
    }, []);
    return (
        <div className="App">
            <h1>HU v19.0 FETCH API DEMO</h1>
            {isLoading ? (
                <>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    <div>Loading...</div>
                </>
            ) : (
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {friends.map((friend, index) => {
                            return (
                                <tr key={`friend-${index}`}>
                                    <td>{index}</td>
                                    <td>{friend.name}</td>
                                    <td>{friend.amount}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            )}
        </div>
    );
}

export default App;
