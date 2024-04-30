import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
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
                // console.log(data.data)
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
        <div className="flex flex-col overflow-y-auto h-full items-center">
            <h2 className="text-xl font-bold">Chat</h2>
            <div className="flex flex-col overflow-y-auto">
                {chat.map(message => (
                    <div
                        key={message._id}
                        className={`my-2 mx-4 p-2 rounded-lg max-w-md ${message.sender === 'consumer' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-800 self-start'}`}
                    >
                        {message.message}
                    </div>
                ))}
            </div>
            <div className="w-full flex items-center justify-center">
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
            <p className="text-sm text-gray-500">Current time: {new Date().toLocaleTimeString()}</p>
        </div>
    );
}

export default ConsumerChat;
