import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import NavPostLog from '../components/customerviewComponent/NavPostLog';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const ConsumerChat = () => {
    const token = cookie.get("TOKEN");
    const { _id } = useParams();
    const [chat, setChat] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        const fetchData = () => {
            fetch("http://localhost:8080/api/consumer/readmessage", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    sellerid: _id,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    setChat(data.data);
                    console.log(data)
                })
                .catch(error => console.error(error));
        };

        const interval = setInterval(() => {
            fetchData();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const sendMessage = () => {
        console.log("Sending message:", messageInput);
        fetch("http://localhost:8080/api/consumer/sendmessage", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                sellerid: _id,
                message: messageInput
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.error(error));

        setMessageInput('');
    };

    return (
        <div>
            <NavPostLog />
            <div className="flex flex-col h-screen border rounded-2xl shadow-xl mx-40 my-5">
                <div className="flex flex-col flex-grow overflow-y-auto mx-5 my-10">
                    {chat && chat.map(message => (
                        <div className='flex flex-col '>
                            <div
                                key={message._id}
                                className={`my-2 mx-4 p-2 rounded-lg max-w-md ${message.sender === 'seller' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-800 self-start'}`}
                            >
                                {message.message}
                                {/* {message.time} */}
                            </div>
                            <div className={`my-2 mx-4 p-2 rounded-lg max-w-md ${message.sender === 'seller' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-800 self-start'}`}>
                                {new Date(message.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-4  flex justify-center my-20 ">
                    <textarea
                        className="w-full max-w-md p-2 resize-none border border-black"
                        value={messageInput}
                        onChange={e => setMessageInput(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 ml-2 rounded"
                        onClick={sendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
            <p className="text-sm text-gray-500">Current time: {new Date().toLocaleTimeString()}</p>
        </div>
    );
}

export default ConsumerChat;
