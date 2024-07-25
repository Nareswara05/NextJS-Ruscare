import React from 'react'

const InputDate = () => {
    const data = [
        {
            time: "08.00 - 09.00"
        },
        {
            time: "10.00 - 11.00"
        },
        {
            time: "12.00 - 13.00"
        },
        {
            time: "14.00 - 15.00"
        },
    ];

    return (
        <div className='grid grid-cols-2 space-x-4 w-full'>
            <div>
                <h1 className='text-[18px] font-semibold pb-4 text-textPrimary'>Tanggal</h1>
                <input
                    type="date"
                    className='w-full p-[12px] text-[16px] bg-[#F6F8FA] border-[1px] border-[#E5E5E5] outline-none rounded-lg text-textPrimary'
                />
            </div>
            <div>
                <h1 className='text-[18px] font-semibold pb-4 text-textPrimary'>Waktu</h1>
                <select
                    className='w-full p-[12px] text-[16px] bg-[#F6F8FA] border-[1px] border-[#E5E5E5] outline-none rounded-lg text-textPrimary'
                >
                    {data.map((item, index) => (
                        <option key={index} value={item.time}>
                            {item.time}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputDate
