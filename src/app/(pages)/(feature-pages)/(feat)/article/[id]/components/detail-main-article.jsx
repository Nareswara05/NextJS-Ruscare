import React from 'react';


export default async function DetailMainArticle({articleData}) {
    if (!articleData) {
        return <p>Article not found</p>;
      }

    return (
        <div className='flex flex-col gap-12'>
            <h1 className='font-montserrat text-textPri mary text-4xl tracking-wide w-full font-bold '>{articleData.title}</h1>
            <hr className='w-full border-2' />
            <p className='font-montserrat'>{articleData.content}</p>
        </div>
    );
}