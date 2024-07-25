import React from 'react';

const RadioButtonCategory = () => {
    const data = [
        {
            category: "Pribadi"
        },
        {
            category: "Karir"
        },
        {
            category: "Belajar"
        },
        {
            category: "Sosial"
        }
    ];

    return (
        <div>
            <h1 className='text-[18px] font-semibold pb-4 text-textPrimary'>Kategori</h1>
            <div className='flex flex-row gap-6'>
            {data.map((item, index) => (
                <label key={index} className='block text-[16px] text-textPrimary mb-2'>
                    <input
                        type="radio"
                        name="category"
                        value={item.category}
                        className='mr-2'
                    />
                    {item.category}
                </label>
            ))}
            </div>
        </div>
    )
}

export default RadioButtonCategory;