import React from 'react'

const RadioButtonService = ({value, onChange}) => {
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
            <h1 className='text-[18px] font-semibold pb-4 text-textPrimary'>Layanan</h1>
            <div className='flex flex-row gap-6'>
            {data.map((item, index) => (
                <label key={index} className='block text-[16px] text-textPrimary mb-2 cursor-pointer'>
                    <input
                        type="radio"
                        name="service"
                        value={item.service}
                        className='mr-2 '
                        required
                        onChange={onChange}
                    />
                    {item.service}
                </label>
            ))}
            </div>
        </div>
    )
}

export default RadioButtonService