import React from 'react';
import Logo from '../assets/logo.jpg'; 


const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
);
const PerformanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
);
const SharedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const LibraryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
);
const SearchIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><polyline points="9 18 15 12 9 6"></polyline></svg>
);

const Sidebar = ({ onSelectItem, activeItem }) => {

  const navItems = [
    { id: 'Home', name: 'Home', icon: <HomeIcon /> },
    { id: 'Performance', name: 'Performance', icon: <PerformanceIcon /> },
    { id: 'Shared', name: 'Shared With Me', icon: <SharedIcon /> },
    { id: 'Library', name: 'Library', icon: <LibraryIcon /> },
  ];

  const historyItems = [
    { id: 'new_chat', title: 'New Chat', time: '11:45 pm' },
    { id: 'chat_1', title: 'Exploring creative des...', time: '10:30 pm' },
  ];

  return (
    <div className='h-full w-80 bg-[#171717] text-gray-300 flex flex-col justify-between p-3 shrink-0'>
      <div>
        <div className='flex items-center gap-3 mb-4 px-2'>
          <img src={Logo} alt="Logo" className="h-8 w-8 rounded-2xl"/>
          <h1 className='text-xl font-semibold text-white'>OWO.AI</h1>
        </div>
        <hr className='border-gray-700 mb-4'/>
        <nav className='flex flex-col gap-1'>
          {navItems.map(item => (
            <a key={item.id} href="#" onClick={() => onSelectItem(item.id)} className={`flex items-center justify-between p-2 rounded-lg ${activeItem === item.id ? 'bg-gray-700 text-blue-500' : 'hover:bg-gray-800'}`}>
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.name}</span>
              </div>
              {activeItem === item.id && <ChevronRightIcon />}
            </a>
          ))}
        </nav>
        
        <div className='mt-6'>
          <div className='flex justify-between items-center px-2 mb-2'>
            <h2 className='text-lg font-semibold text-white'>History</h2>
            <button className='text-xs text-gray-400 hover:text-white'>Delete All</button>
          </div>
          <div className='relative mb-4'>
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"/>
            <input type="text" placeholder='Search...' className='w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          </div>
          <div>
            <p className='text-gray-500 text-sm font-semibold mb-2 px-2'>TODAY</p>
            {historyItems.map(item => (
              <button key={item.id} onClick={() => onSelectItem(item.id)} className={`w-full text-left p-2 rounded-lg ${activeItem === item.id ? 'bg-gray-700' : 'hover:bg-gray-800'}`}>
                <div className='flex justify-between items-center'>
                  <span className='text-sm'>{item.title}</span>
                  <ChevronRightIcon />
                </div>
                <p className='text-xs text-gray-500 mt-1'>{item.time}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-4 text-white'>
        <p className='font-bold text-lg'>Get Fufufaa 5.1 free for you!</p>
        <p className='text-sm mt-1 mb-4'>Get it free for today, enjoy upgraded features instantly.</p>
        <button className='w-full bg-white text-blue-600 font-semibold py-2 rounded-lg hover:bg-gray-200 transition-colors'>Learn More</button>
      </div>
    </div>
  );
};

export default Sidebar;