import Navbar from '../components/adminLandingPageComponent/navbar';
import '../components/adminLandingPageComponent/admincss/adminbroadcast.css';
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

export default function AdminBroadcast() {
    const token = cookie.get("TOKEN");
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [activeButton, setActiveButton] = useState('all');

    useEffect(() => {
        fetch('http://localhost:8080/api/broadcast',{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setFilteredUsers(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const [message, setMessage] = useState('');
    const [recipient, setRecipient] = useState('all');

    const handleSubmit = (event) => {
        event.preventDefault();
        const currentTime = new Date().toLocaleString();
        fetch('http://localhost:8080/api/sendbroadcast', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message,
                recipient,
                time: currentTime, // Add current time to the request body
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Broadcast sent:', data);
                setMessage('');
                setRecipient('all');
                // Fetch the updated list of messages from the server
                fetch('http://localhost:8080/api/broadcast',{
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  })
                    .then(response => response.json())
                    .then(data => {
                        setUsers(data);
                        setFilteredUsers(data);
                    })
                    .catch(error => console.error('Error fetching data:', error));
            })
            .catch(error => console.error('Error sending broadcast:', error));
    };


    const filterMessages = (type) => {
        setActiveButton(type);
        if (type === 'all') {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter(user => user.recipient === type || user.recipient === 'all');
            setFilteredUsers(filtered);
        }
    };

    return (
        <div>
            <Navbar />

            <div className="container-ss mx-auto my-2">
                <div className="broadcast text-2xl font-bold mb-2">New Broadcast</div>
                <form onSubmit={handleSubmit} className="shadow-lg p-4 rounded w-full">
                    <div className="mb-1">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="form-control form-textarea mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            id="message"
                            placeholder="Enter the message"
                            name="message"
                            rows="4"
                            cols="50"
                            required
                        ></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <select
                            value={recipient}
                            onChange={(e) => {
                                setRecipient(e.target.value);
                                filterMessages(e.target.value);
                            }}
                            className="form-select mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            id="recipient"
                            name="recipient"
                            required
                        >
                            <option value="all">All</option>
                            <option value="customers">Customers</option>
                            <option value="workers">Workers</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            </div>
            <div className="past-broadcasts my-3">
                <div className="users">
                    <button className={`all hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2 ${activeButton === 'all' ? 'active' : ''}`} onClick={() => filterMessages('all')}>All</button>
                    <button className={`customers hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2 ${activeButton === 'customers' ? 'active' : ''}`} onClick={() => filterMessages('customers')}>Customers</button>
                    <button className={`workers hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${activeButton === 'workers' ? 'active' : ''}`} onClick={() => filterMessages('workers')}>Workers</button>
                </div>
            </div>
            <div className="past-broadcasts">
                <div className="users">
                    <div className="grid grid-cols-1 gap-4">
                        {filteredUsers
                            .sort((a, b) => new Date(b.time) - new Date(a.time))
                            .map(user => (
                                <div key={user._id} className="user border p-4 bg-white">
                                    <div className="flex justify-between">
                                        <div>Message: {user.message}</div>
                                        <div>Time: {new Date(user.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}