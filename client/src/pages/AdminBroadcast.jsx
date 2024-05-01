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
        fetch('http://localhost:8080/api/admin/broadcast/view',{
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.data)
                        setUsers(data.data);
                        setFilteredUsers(data.data);
                    })
                    .catch(error => console.error('Error fetching data:', error));
    }, []);

    const [broadcastMeassage, setBroadcastMeassage] = useState('');
    const [pointer, setpointer] = useState('all');

    const handleSubmit = (event) => {
        event.preventDefault();
        const currentTime = new Date().toLocaleString();
        fetch('http://localhost:8080/api/admin/makebroadcast', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                broadcastMeassage,
                pointer,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Broadcast sent:', data);
                setBroadcastMeassage('');
                setpointer('all');
                // Fetch the updated list of broadcastMeassages from the server
                fetch('http://localhost:8080/api/admin/broadcast/view',{
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.data)
                        setUsers(data.data);
                        setFilteredUsers(data.data);
                    })
                    .catch(error => console.error('Error fetching data:', error));
            })
            .catch(error => console.error('Error sending broadcast:', error));
    };


    const filterbroadcastMeassages = (type) => {
        setActiveButton(type);
        if (type === 'all') {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter(user => user.pointer === type || user.pointer === 'all');
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
                        <label htmlFor="broadcastMeassage" className="block text-sm font-medium text-gray-700">
                            broadcastMeassage
                        </label>
                        <textarea
                            value={broadcastMeassage}
                            onChange={(e) => setBroadcastMeassage(e.target.value)}
                            className="form-control form-textarea mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            id="broadcastMeassage"
                            placeholder="Enter the broadcastMeassage"
                            name="broadcastMeassage"
                            rows="4"
                            cols="50"
                            required
                        ></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <select
                            value={pointer}
                            onChange={(e) => {
                                setpointer(e.target.value);
                                filterbroadcastMeassages(e.target.value);
                            }}
                            className="form-select mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            id="pointer"
                            name="pointer"
                            required
                        >
                            <option value="all">All</option>
                            <option value="consumers">consumers</option>
                            <option value="sellers">sellers</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            </div>
            <div className="past-broadcasts my-3">
                <div className="users">
                    <button className={`all hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2 ${activeButton === 'all' ? 'active' : ''}`} onClick={() => filterbroadcastMeassages('all')}>All</button>
                    <button className={`customers hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2 ${activeButton === 'customers' ? 'active' : ''}`} onClick={() => filterbroadcastMeassages('consumers')}>Consumers</button>
                    <button className={`workers hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${activeButton === 'workers' ? 'active' : ''}`} onClick={() => filterbroadcastMeassages('sellers')}>Sellers</button>
                </div>
            </div>
            <div className="past-broadcasts">
                <div className="users">
                    <div className="grid grid-cols-1 gap-4">
                        {filteredUsers && filteredUsers
                            .sort((a, b) => new Date(b.time) - new Date(a.time))
                            .map(user => (
                                <div key={user._id} className="user border p-4 bg-white">
                                    <div className="flex justify-between">
                                        <div>BroadcastMeassage :{user.broadcastMeassage}</div>
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