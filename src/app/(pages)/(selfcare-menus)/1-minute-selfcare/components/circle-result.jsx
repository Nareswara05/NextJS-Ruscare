import React, { useEffect, useState } from 'react';

const CircleResult = ({ text, triggerShrink }) => {
  const initialSize = 208;
  const [size, setSize] = useState(initialSize); // Initial size

  useEffect(() => {
    if (triggerShrink) {
      const interval = setInterval(() => {
        setSize((prevSize) => {
          const newSize = prevSize - 20; // decrease size by 20px
          return newSize > 0 ? newSize : 0;
        });
      }, 5000); // decrease size every 1 second

      return () => clearInterval(interval);
    }
  }, [triggerShrink]);

  const fontSize = `${(size / initialSize) * 24}px`; // scale font size based on circle size

  return (
    <div 
      className='bg-white rounded-full shadow-custom shadow-primary flex justify-center items-center p-4'
      style={{ 
        width: `${size}px`, 
        height: `${size}px`, 
        opacity: size === 0 ? 0 : 1,
        transition: 'width 1s ease, height 1s ease, opacity 1s ease'
      }}
    >
        <h1 className='text-textPrimary text-base text-center' style={{ fontSize }}>{text}</h1>
    </div>
  );
};

export default CircleResult;
