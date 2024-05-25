"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { articleImg } from '@/app/lib/utils/image';




export default function ArticleCards() {
  const data = [
    {
      category: "Counseling",
      createdAt: "2024-05-20",
      title: "The Importance of Mental Health Counseling",
      content: "Mental health counseling plays a crucial role in helping individuals cope with stress, anxiety, and other mental health issues. This article explores the benefits and methods of effective counseling.",
      image: {articleImg}
    },
    {
      category: "Psychology",
      createdAt: "2024-05-22",
      title: "Understanding Cognitive Behavioral Therapy (CBT)",
      content: "Cognitive Behavioral Therapy (CBT) is a popular method for treating various psychological issues. This article delves into the principles and applications of CBT.",
      image: {articleImg}
    },
    {
      category: "Counseling",
      createdAt: "2024-05-24",
      title: "Effective Communication Techniques in Counseling",
      content: "Effective communication is key in counseling. Learn about different techniques counselors use to improve their communication skills and enhance their practice.",
      image: {articleImg}
    },
    {
      category: "Psychology",
      createdAt: "2024-05-26",
      title: "The Role of Psychology in Education",
      content: "Psychology plays a significant role in the field of education, influencing teaching methods and student learning. This article examines the impact of psychological principles on educational practices.",
      image: {articleImg}
    },
    {
      category: "Counseling",
      createdAt: "2024-05-28",
      title: "How to Manage Stress Through Counseling",
      content: "Stress management is a critical aspect of mental health. Discover various strategies and techniques used in counseling to help individuals manage and reduce stress.",
      image: {articleImg}
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = data.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(data.length / articlesPerPage);

  return (
    <div className='flex flex-col gap-10'>
      {currentArticles.map((item, index) => (
        <Link
          href={{
            pathname: `/article/${index + indexOfFirstArticle}`,
          }}
          key={index + indexOfFirstArticle}
        >
          <div className='flex w-[970px] justify-between cursor-pointer'>
            <div className='flex flex-col gap-6 w-[610px]'>
              <div className='flex flex-row gap-2 items-center'>
                <h1 className='font-regular font-montserrat bg-primary px-[12px] py-[9px] text-white rounded-md'>
                  {item.category}
                </h1>
                <h2 className='font-montserrat'>{item.createdAt}</h2>
              </div>
              <div>
                <div className='flex flex-col gap-3'>
                  <h1 className='font-bold font-montserrat text-3xl text-textPrimary'>{item.title}</h1>
                  <p className='truncate font-montserrat'>{item.content}</p>
                </div>
              </div>
            </div>
            <Image
              className='h-[210px] w-[300px] object-cover rounded-md'
              src={item.image}
              alt={item.title}
              width={300}
              height={210}
            />
          </div>
        </Link>
      ))}
      <div className='flex justify-center gap-2 mt-4'>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded-md ${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-200 text-black'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
