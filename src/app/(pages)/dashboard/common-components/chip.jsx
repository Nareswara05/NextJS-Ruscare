import React from 'react';

const Chip = ({ statusList = [], selectedStatus, onSelectStatus }) => {
    if (statusList.length === 0) {
        return <div>Loading statuses...</div>;
    }

    return (
        <div className="flex gap-4 mb-6">
            {statusList.map(status => (
                <button
                    key={status.id}
                    className={`py-2 px-4 rounded-lg text-white ${selectedStatus === status.id ? 'bg-primary' : 'bg-gray-400'} hover:bg-purple-600 transition-colors`}
                    onClick={() => onSelectStatus(status.id)}
                >
                    {status.status}
                </button>
            ))}
        </div>
    );
};

export default Chip;
