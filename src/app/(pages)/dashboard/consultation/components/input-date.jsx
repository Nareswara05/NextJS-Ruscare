"use client";

import React from 'react';
import Select from 'react-select';

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: '#F6F8FA',
        border: '1px solid #E5E5E5',
        borderRadius: '0.5rem',
        padding: '7px',
        fontSize: '16px',
        color: '#333',
        boxShadow: 'none',
        '&:hover': {
            borderColor: '#E5E5E5',
        },
        '&:focus': {
            borderColor: '#6B46C1',
            boxShadow: '0 0 0 2px rgba(107, 70, 193, 0.25)',
        },
    }),
    option: (provided, state) => ({
        ...provided,
        fontSize: '16px',
        color: state.isSelected ? '#fff' : '#333',
        backgroundColor: state.isSelected ? '#6B46C1' : '#fff',
        '&:hover': {
            backgroundColor: '#F3E8FF',
        },
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: '0.5rem',
        padding: '0',
        zIndex: 10,
    }),
    menuList: (provided) => ({
        ...provided,
        padding: '0',
    }),
};

const InputDate = ({ dateValue, timeValue, onDateChange, onTimeChange }) => {
    const data = [
        { time: "08.00 - 09.00" },
        { time: "10.00 - 11.00" },
        { time: "12.00 - 13.00" },
        { time: "14.00 - 15.00" },
    ];

    const options = data.map((item) => ({
        value: item.time,
        label: item.time,
    }));

    return (
        <div className="grid grid-cols-2 space-x-4 w-full">
            <div>
                <h1 className="text-[18px] font-semibold pb-4 text-textPrimary">Tanggal</h1>
                <input
                    type="date"
                    className="w-full p-[12px] text-[16px] bg-[#F6F8FA] border-[1px] border-[#E5E5E5] outline-none rounded-lg text-textPrimary"
                    value={dateValue}
                    onChange={onDateChange}
                />
            </div>
            <div>
                <h1 className="text-[18px] font-semibold pb-4 text-textPrimary">Waktu</h1>
                <Select
                    options={options}
                    styles={customStyles}
                    className="w-full"
                    placeholder="Pilih Waktu"
                    value={options.find(option => option.value === timeValue)}
                    onChange={onTimeChange}
                />
            </div>
        </div>
    );
};

export default InputDate;
