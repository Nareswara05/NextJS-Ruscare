import React from 'react';
import Image from 'next/image';

const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', options).format(date);
};


export default async function DetailHeroArticle({articleData, categories}) {

    const getCategoryName = (id) => {
        const category = categories.find(category => category.id === id);
        return category ? category.category_name : "Unknown Category";
    };

    if (!articleData) {
        return <p>Article not found</p>;
      }
      const imageUrl = `https://api.ruscarestudent.com/${articleData.featured_image}`;

    return (
        <div className='flex flex-col gap-3 '>
            <Image className='w-full rounded-lg h-[500px] object-cover bg-primary' width={2000} height={2000} src={imageUrl} alt={articleData.title} />
            <div className='w-full flex justify-between items-center'>
                <h1 className='py-2 px-3 bg-primary rounded-lg text-white'>{getCategoryName(articleData.category_id)}</h1>
                <h2 className='text-textPrimary font-semibold'>{formatDate(articleData.created_at)}</h2>
            </div>
        </div>
    );
}

  
  