import React, {useRef,useState} from 'react'
import Header from './Header';
import SuggestionCard from './SuggestionCard';
import ChatView from './ChatView';

const SearchIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const ImageIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
);

const VoiceIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line></svg>
);

const MainContent = ({ activeChat }) => {
    const [prompt, setPrompt] = useState("");
    const fileInputRef = useRef(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            alert(`File selected: ${file.name}`);
        }
    };

    const triggerFileSelect = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = () => {
        if (!prompt.trim()) return;
        alert(`Submitting prompt: ${prompt}`);
        // Add your logic to send the prompt to an API
        setPrompt(""); // Clear input after submission
    }
    const showWelcome = activeChat === 'welcome' || activeChat === 'Home';

    return (
        <div className='w-full h-full bg-gray-100 flex flex-col'>
            <Header />
            {showWelcome ?
                (<div>
                    <main className='flex-grow flex flex-col justify-center items-center pb-10'>
                        <div className='text-center'>
                            <div className='inline-block p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </div>
                            <h1 className='text-4xl font-bold text-gray-800'>How can I help you today?</h1>
                        </div>

                        <div className='mt-10 w-full max-w-4xl px-4'>
                            <p className='my-2'>Suugest a Search</p>
                            <div className='flex justify-center gap-4'>
                                <SuggestionCard icon={<SearchIcon className="h-6 w-6 text-blue-500"/>} title="Search Something" subtitle="give me a reference regarding a film about satanism and love of the homeland"/>
                                <SuggestionCard icon={<SearchIcon className="h-6 w-6 text-blue-500"/>} title="Search Something" subtitle="give me a text narrative a film about satanism and love of the homeland"/>
                                <SuggestionCard icon={<ImageIcon className="h-6 w-6 text-green-500"/>} title="Generate Image" subtitle="give me an illustration of five children carrying the flag and sharpened bamboos"/>
                                <SuggestionCard icon={<VoiceIcon className="h-6 w-6 text-purple-500"/>} title="Create a Voice" subtitle="give me background music for a film about satanism and love of the homeland"/>
                            </div>
                        </div>

                    </main>
                </div>) : <ChatView chatId={activeChat} />}
            <div className='w-full max-w-4xl mx-auto bg-gray-300 rounded-xl shadow-md'>
                <div className='bg-white rounded-xl shadow-md flex flex-col gap-15'>
                    <div className='relative'>
                        {/* <input type="text" placeholder='Ask me anything' className='w-full border-gray-300 rounded-xl py-4 pl-5 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-500'/>   */}
                        <input
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                            placeholder='Ask me anything'
                            className='w-full border-gray-300 rounded-xl py-4 pl-5 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <button onClick={handleSubmit} className='bg-blue-600 text-white rounded-lg p-2.5 hover:bg-blue-700'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-start gap-2 mb-1 mx-2'>
                        <button className='flex items-center gap-2 text-sm bg-white border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50'><SearchIcon className="h-4 w-4 text-gray-600"/> Search Something</button>
                        <button className='flex items-center gap-2 text-sm bg-white border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50'><ImageIcon className="h-4 w-4 text-gray-600"/> Generate Image</button>
                        <button className='flex items-center gap-2 text-sm bg-white border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50'><VoiceIcon className="h-4 w-4 text-gray-600"/> Create a Voice</button>
                        <button className='bg-white text-black p-2 rounded-4xl border border-gray-300 hover:bg-gray-50'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                        </button>
                    </div> 
                </div>
                <div className='flex justify-between text-violet-400 m-2'>
                    <div className='flex gap-1 items-center cursor-pointer' onClick={triggerFileSelect}>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                        </button>
                        <p>Upload File</p>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                            className="hidden"
                        />
                    </div>
                    <div className='text-2xl'>+</div>
                </div>
            </div>
            <footer className='px-6 pb-6'>
                {/* <div className='w-full max-w-4xl mx-auto'>
                     {/* <div className='flex justify-center gap-2 mb-3'>
                         <button className='flex items-center gap-2 text-sm bg-white border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50'><SearchIcon className="h-4 w-4 text-gray-600"/> Search Something</button>
                         <button className='flex items-center gap-2 text-sm bg-white border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50'><ImageIcon className="h-4 w-4 text-gray-600"/> Generate Image</button>
                         <button className='flex items-center gap-2 text-sm bg-white border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50'><VoiceIcon className="h-4 w-4 text-gray-600"/> Create a Voice</button>
                     </div> 
                     <div className='relative'>
                        <input type="text" placeholder='Ask me anything' className='w-full border border-gray-300 rounded-xl py-4 pl-12 pr-28 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                         <button className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                         </button>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <button className='bg-blue-600 text-white rounded-lg p-2.5 hover:bg-blue-700'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                            </button>
                        </div>
                    </div>
                </div> */}
            </footer>
        </div>
    );
};

export default MainContent
