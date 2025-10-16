import React from 'react';

const mockConversations = {
  'chat_1': [
    {
      sender: 'user',
      type: 'text',
      content: 'Hello OWO.AI, can you give me a film title about storm and love of the homeland? give me 3 option, thanks!',
    },
    {
      sender: 'ai',
      type: 'text',
      content: [
        "Of course! Here are 3 film title options combining the theme of e-form (digital/modern) and love of homeland:",
        "1. \"E-form Merdeka: Letters of Love for the Homeland\"",
        "2. \"Digital Oath: Firing Forms to Open the Nation's Heart\""
        ],
    },
    {
      sender: 'user',
      type: 'audio',
      duration: '02:40',
    }
  ],
  'new_chat': [],
};

const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
);


const UserMessage = ({ message }) => (
    <div className="flex justify-end mb-4">
        <div className="bg-blue-600 text-white rounded-lg rounded-br-none p-3 max-w-lg">
            <p>{message.content}</p>
        </div>
    </div>
);

const AiMessage = ({ message }) => (
    <div className="flex justify-start mb-4">
        <div className="bg-white rounded-lg rounded-bl-none p-4 max-w-lg shadow-sm">
            {message.content.map((line, index) => (
                <p key={index} className="mb-2 last:mb-0">{line}</p>
            ))}
            <div className="flex items-center gap-3 mt-3 text-gray-500">
                <button className="hover:text-gray-800"><CopyIcon /></button>
            </div>
        </div>
    </div>
);

const AudioMessage = ({ message }) => (
    <div className="flex justify-end mb-4">
        <div className="bg-blue-600 text-white rounded-lg rounded-br-none p-3 max-w-lg w-full flex items-center gap-3">
             <div className="text-sm">01:00</div>
             <div className="flex-grow h-8 bg-blue-500 rounded-full flex items-center">
                <div className="h-1 w-full bg-white/30 relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full"></div>
                </div>
             </div>
             <div className="text-sm">{message.duration}</div>
        </div>
    </div>
);


const ChatView = ({ chatId }) => {
    const conversation = mockConversations[chatId] || [];

    return (
        <div className='w-full max-w-4xl mx-auto h-full flex flex-col'>
            {/* Main chat area */}
            <main className='flex-grow p-6 overflow-y-auto'>
                {conversation.length === 0 ? (
                    <div className='text-center text-gray-500'>
                        <p className='text-xl font-semibold'>This is the start of your conversation.</p>
                        <p>Ask me anything to get started!</p>
                    </div>
                ) : (
                    conversation.map((message, index) => {
                        if (message.sender === 'user') {
                            return message.type === 'audio'
                                ? <AudioMessage key={index} message={message} />
                                : <UserMessage key={index} message={message} />;
                        }
                        return <AiMessage key={index} message={message} />;
                    })
                )}
            </main>
        </div>
    );
};

export default ChatView;