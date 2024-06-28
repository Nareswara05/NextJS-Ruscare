"use client"

import React, { useState } from 'react';
import AnimationText from './components/animation-text';
import CircleResult from './components/circle-result';
import InputProblems from './components/input-problems';
import ParticleComponent from './components/particle';

const Page = () => {
    const [userInput, setUserInput] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (input) => {
        setUserInput(input);
        setSubmitted(true);
    };

    return (
        <div className='overflow-y-hidden h-screen'>
            <div className='-z-10 absolute'>
                <ParticleComponent />
            </div>
            <div className={`flex flex-col ${submitted ? 'flex-col-reverse' : ''} gap-8 h-screen justify-center items-center z-50 relative`}>
                <CircleResult text={userInput} triggerShrink={submitted} />
                {submitted ? <AnimationText /> : <InputProblems onSubmit={handleSubmit} />}
            </div>
        </div>
    );
};

export default Page;
