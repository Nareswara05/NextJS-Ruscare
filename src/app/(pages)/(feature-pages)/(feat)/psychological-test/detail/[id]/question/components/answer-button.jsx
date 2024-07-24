import React from 'react'

const AnswerButton = ({name}) => {
  return (
    <button
      className='w-full py-5 shadow-custom text-textPrimary text-lg font-semibold border-2 rounded-xl duration-300 transform hover:scale-105 border-transparent  hover:text-primary hover:border-primary'>
      {name}
    </button>
  )
}

export default AnswerButton