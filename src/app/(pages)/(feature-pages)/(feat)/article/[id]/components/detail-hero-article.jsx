import React from 'react';
import Image from 'next/image';

export default async function DetailHeroArticle({articleData}) {
    if (!articleData) {
        return <p>Article not found</p>;
      }
    return (
        <div className='flex flex-col gap-3 '>
            <Image className='w-full rounded-lg h-[500px] object-cover' width={1000} height={1000} src={articleData.image} alt={articleData.title} />
            <div className='w-full flex justify-between items-center'>
                <h1 className='py-2 px-3 bg-primary rounded-lg text-white'>{articleData.category}</h1>
                <h2 className=''>{articleData.updatedAt}</h2>
            </div>
        </div>
    );
}

  
  