import React, { useState, useEffect, useRef } from 'react';
import '../components/sellerhomeComponent/CSS/Chat.css';
import Navbar from '../components/sellerhomeComponent/Navbar';

const SellerChat = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Sai Kiran',
      image: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
      online: true
    },
    {
      id: 2,
      name: 'Naveen',
      image: 'https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg',
      online: false
    },
    {
      id: 3,
      name: 'Harsha',
      image: 'https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg',
      online: true
    },
    {
      id: 4,
      name: 'Akhil',
      image: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
      online: false
    },
    {
      id: 5,
      name: 'Hansika',
      image: 'https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg',
      online: true
    },
  ]);

  const [activeChat, setActiveChat] = useState(contacts[0]); // Open the first contact chat window by default
  const [searchTerm, setSearchTerm] = useState('');
  const [chats, setChats] = useState([
    {
      sender: 'Naveen',
      receiver: 'varun',
      message: 'Hi Varun',
    },
    {
      sender: 'Sai Kiran',
      receiver: 'varun',
      message: 'Hi Varun, how are you?',
    },
    {
      sender: 'varun',
      receiver: 'Sai Kiran',
      message: 'Hi Kiran, I am good. Thank you!',
    },
    {
      sender: 'Sai Kiran',
      receiver: 'varun',
      message: 'I really liked your service',
    },
    {
      sender: 'varun',
      receiver: 'Sai Kiran',
      message: 'Thanks for the complement',
    },
    {
      sender: 'Sai Kiran',
      receiver: 'varun',
      message: 'I want to recommend you to my friends',
    },
    {
      sender: 'Harsha',
      receiver: 'varun',
      message: 'I am very delighted with your work',
    },
  ]);

  const [messageInput, setMessageInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = (contact) => {
    setActiveChat(contact);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      const newChat = {
        sender: 'varun', // Assuming sender is always the user
        receiver: activeChat.name,
        message: messageInput.trim(),
      };
      setChats([...chats, newChat]);
      setMessageInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid h-screen flex">
        <div className="w-1/4  p-4 bg-purple-300">
          {/* Left side with contacts */}
          <div className="card-v mb-10">
            <div className="card-header">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search..."
                  name=""
                  className="form-input p-2 text-black w-full"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="card-body contacts_body cursor-pointer">
              <ul className="contacts">
                {filteredContacts.map(contact => (
                  <li key={contact.id} className={activeChat === contact ? 'active' : ''} onClick={() => handleContactClick(contact)}>
                    <div className="flex items-center">
                      <div className="img_cont">
                        <img
                          src={contact.image}
                          className="rounded-circle user_img"
                          alt="User"
                        />
                        <span className={`online_icon ${contact.online ? '' : 'offline'}`}></span>
                      </div>
                      <div className="user_info">
                        <span>{contact.name}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>

        {/* Right side with chat */}
        <div className="w-3/4 p-4 bg-gray-100">
          <div className="card-v min-h-[40rem]">
            {activeChat && (
              <>
                <div className="card-header msg_head">
                  <div className="flex items-center">
                    <div className="img_cont">
                      <img
                        src={activeChat.image}
                        className="rounded-circle user_img"
                        alt="User"
                      />
                      <span className={`online_icon ${activeChat.online ? '' : 'offline'}`}></span>
                    </div>
                    <div className="user_info">
                      <span>{activeChat.name}</span>
                    </div>
                    <div className="video_cam"></div>
                  </div>
                  <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
                  <div className="action_menu">
                    <ul>
                      <li><i className="fas fa-user-circle"></i> View profile</li>
                      <li><i className="fas fa-ban"></i> Block</li>
                    </ul>
                  </div>
                </div>
                <div className="card-body msg_card_body">
                  {chats.map((chat, index) => (
                    (chat.sender === 'varun' && chat.receiver === activeChat.name) || (chat.sender === activeChat.name && chat.receiver === 'varun') ?
                      <div key={index} className={`rounded-full ${chat.sender === 'varun' ? 'bg-green-400 float-right rounded-br-none' : 'float-left bg-blue-400 border-l-none rounded-bl-none'} w-1/2 m-1 px-4 py-3 `}>
                        {chat.message}
                      </div>
                      :
                      null
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                <div className="card-footer">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control type_msg"
                      placeholder="Type your message..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerChat;
