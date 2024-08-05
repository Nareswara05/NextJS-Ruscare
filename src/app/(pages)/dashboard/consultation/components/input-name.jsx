import React from 'react'

const InputName = () => {
  return (
    <div>
        <h1 className='text-[18px] font-semibold pb-4 text-textPrimary '>Nama</h1>
        <input 
        type="text" 
        className='w-full p-[12px] text-[16px] bg-[#F6F8FA] border-1 border-[E5E5E5] border outline-none rounded-lg text-textPrimary' 
        placeholder='Masukkan Nama Anda'
        />  
    </div>
  )
}

export default InputName