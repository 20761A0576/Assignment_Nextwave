import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [activeChat, setActiveChat] = useState('welcome');

  const handleSelectChat = (chatId) => {
    console.log("Switching to chat:", chatId);
    setActiveChat(chatId);
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar onSelectItem={handleSelectChat} activeItem={activeChat} />
      <MainContent activeChat={activeChat} />
    </div>
  );
}

export default App;