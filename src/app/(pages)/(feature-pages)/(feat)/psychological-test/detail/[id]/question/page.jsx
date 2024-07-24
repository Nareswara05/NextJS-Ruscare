import React from 'react'
import AnswerButton from './components/answer-button'
import Question from './components/question'
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from 'next/link';

const page = () => {
    return (
        <div className='py-36 px-20 bg-white'>
            <div  className='text-6xl text-textPrimary hover:text-primary w-fit'>
                <IoIosArrowRoundBack />
            </div>
            <div className='flex flex-col gap-12 pt-12'>
                <Question />
                <div className='flex gap-8'>
                    <AnswerButton name='Ya' />
                    <AnswerButton name='Tidak' />
                </div>
            </div>
        </div>
    )
}

export default page