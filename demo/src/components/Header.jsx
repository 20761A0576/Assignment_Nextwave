import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-white border-b border-gray-200 rounded-xl m-2'>
            <button className='bg-white text-black font-bold border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
            
            <div className='flex items-center gap-1'>
                <h1 className='font-semibold text-gray-800'>Gibran 4.1</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-500"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            
            <div className='flex items-center gap-3'>
                 <button className='bg-white text-black p-2 rounded-lg border border-gray-300 hover:bg-gray-50'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                 </button>
                <button className='bg-white text-black px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 font-semibold text-sm'>Share</button>
                <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 bg-orange-500 rounded-full text-white font-bold flex items-center justify-center'>J</div>
                    <span className='font-semibold text-gray-800'>John Doe</span>
                </div>
            </div>
        </div>
    );
};

export default Header;