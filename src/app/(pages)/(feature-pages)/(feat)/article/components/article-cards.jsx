"use client";

import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('id-ID', options).format(date);
};

export default function ArticleCards({ data, categories }) {


  const getCategoryName = (id) => {
    const category = categories.find(category => category.id === id);
    return category ? category.category_name : "Unknown Category";
  };

  const imageUrl = `https://api.ruscarestudent.com/${data.featured_image}`;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Link
        href={{
          pathname: `/article/${data.id}`,
        }}
      >
        <div className='flex w-[970px] justify-between cursor-pointer'>
          <div className='flex flex-col gap-6 w-[610px]'>
            <div className='flex flex-row gap-2 items-center'>
              <h1 className='font-regular font-montserrat bg-primary px-[12px] py-[9px] text-white rounded-md'>
                {getCategoryName(data.category_id)}
              </h1>
              <h2 className='font-montserrat text-textPrimary'>{formatDate(data.created_at)}</h2>
            </div>
            <div>
              <div className='flex flex-col gap-3'>
                <h1 className='font-bold font-montserrat text-3xl text-textPrimary'>{data.title}</h1>
                <p className='truncate font-montserrat text-textPrimary'>{data.preview_content}</p>
              </div>
            </div>
          </div>
          <Image
            className='h-[210px] w-[300px] object-cover rounded-md'
            src={imageUrl}
            alt={data.title}
            width={300}
            height={210}
          />
        </div>
      </Link>
    </Suspense>
  );
}
