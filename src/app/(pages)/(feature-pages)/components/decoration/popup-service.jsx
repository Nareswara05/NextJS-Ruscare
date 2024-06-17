import React from 'react';

const PopupService = ({ title, description, onClose }) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-8 rounded-lg w-[600px]'>
                <h2 className='text-2xl font-bold mb-2 text-textPrimary'>{title}</h2>
                <p className='text-textPrimary'>{description}</p>
                <button onClick={onClose} className='mt-8 bg-primary text-white px-4 py-2 rounded hover:bg-purple-700'>
                    Tutup
                </button>
            </div>
        </div>
    );
};

export default PopupService;
