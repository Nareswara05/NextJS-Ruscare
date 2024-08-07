import React, { useState } from 'react';

const InputProblems = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
  };

  return (
    <div className='flex flex-col gap-6 items-center'>
        <input 
          type="text" 
          value={inputValue}
          onChange={handleChange}
          className='text-textPrimary text-[16px] px-4 py-5 font-medium border-2 border-transparent rounded-lg border-textPrimary focus:outline-none focus:border-primary w-[390px] h-[50px] text-start'
          placeholder='Apa yang sedang menganggu pikiranmu?'
        />
        <button 
          onClick={handleSubmit}
          className='px-12 w-fit py-3 rounded-md bg-primary hover:bg-purple-700'
        >
            Mulai
        </button>
    </div>
  );
};

export default InputProblems;
