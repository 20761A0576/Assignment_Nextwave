import React from 'react';

const SuggestionCard = ({ icon, title, subtitle }) => (
    <div className='bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer w-60'>
        <div className='flex items-center gap-3'>
            {icon}
            <h3 className='font-semibold text-gray-800'>{title}</h3>
        </div>
        <p className='text-sm text-gray-500 mt-2'>{subtitle}</p>
    </div>
);

export default SuggestionCard;