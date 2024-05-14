import React from 'react'

const RadioButtonService = () => {
    const data = [
        {
            service: "Konseling individual"
        },
        {
            service: "Konseling kelompok"
        },
        {
            service: "Bimbingan kelompok"
        },
        {
            service: "Layanan klasikal"
        },
        {
            service: "Layanan konsultasi"
        },
        
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
                        value={item.service}
                        className='mr-2'
                    />
                    {item.service}
                </label>
            ))}
            </div>
        </div>
    )
}

export default RadioButtonService