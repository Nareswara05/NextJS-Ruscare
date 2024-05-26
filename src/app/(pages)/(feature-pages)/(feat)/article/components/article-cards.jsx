"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { articleImg } from '@/app/lib/utils/image';




export default function ArticleCards() {
    const data = [
        {
          id: 1,
          category: "Counseling",
          createdAt: "2024-05-20",
          title: "The Importance of Mental Health Counseling",
          content: "Mental health counseling plays a crucial role in helping individuals cope with stress, anxiety, and other mental health issues. This article explores the benefits and methods of effective counseling.",
          image: "",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium minima cumque enim nisi beatae soluta non quaerat ratione quam optio quos dicta alias vitae aliquid exercitationem corrupti voluptas quod possimus amet explicabo, nihil a. Repellendus rem dolorem magnam temporibus vel hic natus, adipisci reiciendis alias atque eligendi quod dignissimos in? Praesentium labore neque quia possimus nemo quam vel, sed repudiandae aliquam corporis similique, tempore, inventore a dicta amet quos. Assumenda cupiditate, officiis perspiciatis quisquam numquam illum voluptate magni minima tempora ex vitae aliquam molestias quasi sint fugiat libero est id harum omnis facere dolore necessitatibus veritatis! Unde molestiae vel impedit maiores ullam voluptate veritatis culpa, consequuntur labore explicabo in pariatur? Obcaecati laudantium incidunt nam architecto nemo doloribus, iure error quibusdam officia, possimus vel modi repellat minus sunt. Alias eius laboriosam omnis assumenda error, itaque beatae ex quibusdam nihil totam dolores quaerat non. Necessitatibus dolores doloribus animi deserunt molestiae quae delectus aliquam quas odit. Possimus quis odit totam aliquid nobis porro a ipsa accusamus, ipsum saepe minima aliquam repellendus vitae amet nihil qui? Aliquid vel ea iure labore hic saepe deleniti suscipit nostrum perferendis laborum cupiditate, cumque optio explicabo perspiciatis earum quis amet laboriosam magnam aliquam! Soluta facilis odio necessitatibus!"
        },
        {
          id: 2,
          category: "Psychology",
          createdAt: "2024-05-22",
          title: "Understanding Cognitive Behavioral Therapy (CBT)",
          content: "Cognitive Behavioral Therapy (CBT) is a popular method for treating various psychological issues. This article delves into the principles and applications of CBT.",
          image: "",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium minima cumque enim nisi beatae soluta non quaerat ratione quam optio quos dicta alias vitae aliquid exercitationem corrupti voluptas quod possimus amet explicabo, nihil a. Repellendus rem dolorem magnam temporibus vel hic natus, adipisci reiciendis alias atque eligendi quod dignissimos in? Praesentium labore neque quia possimus nemo quam vel, sed repudiandae aliquam corporis similique, tempore, inventore a dicta amet quos. Assumenda cupiditate, officiis perspiciatis quisquam numquam illum voluptate magni minima tempora ex vitae aliquam molestias quasi sint fugiat libero est id harum omnis facere dolore necessitatibus veritatis! Unde molestiae vel impedit maiores ullam voluptate veritatis culpa, consequuntur labore explicabo in pariatur? Obcaecati laudantium incidunt nam architecto nemo doloribus, iure error quibusdam officia, possimus vel modi repellat minus sunt. Alias eius laboriosam omnis assumenda error, itaque beatae ex quibusdam nihil totam dolores quaerat non. Necessitatibus dolores doloribus animi deserunt molestiae quae delectus aliquam quas odit. Possimus quis odit totam aliquid nobis porro a ipsa accusamus, ipsum saepe minima aliquam repellendus vitae amet nihil qui? Aliquid vel ea iure labore hic saepe deleniti suscipit nostrum perferendis laborum cupiditate, cumque optio explicabo perspiciatis earum quis amet laboriosam magnam aliquam! Soluta facilis odio necessitatibus!"
        },
        {
          id: 3,
          category: "Counseling",
          createdAt: "2024-05-24",
          title: "Effective Communication Techniques in Counseling",
          content: "Effective communication is key in counseling. Learn about different techniques counselors use to improve their communication skills and enhance their practice.",
          image: "",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium minima cumque enim nisi beatae soluta non quaerat ratione quam optio quos dicta alias vitae aliquid exercitationem corrupti voluptas quod possimus amet explicabo, nihil a. Repellendus rem dolorem magnam temporibus vel hic natus, adipisci reiciendis alias atque eligendi quod dignissimos in? Praesentium labore neque quia possimus nemo quam vel, sed repudiandae aliquam corporis similique, tempore, inventore a dicta amet quos. Assumenda cupiditate, officiis perspiciatis quisquam numquam illum voluptate magni minima tempora ex vitae aliquam molestias quasi sint fugiat libero est id harum omnis facere dolore necessitatibus veritatis! Unde molestiae vel impedit maiores ullam voluptate veritatis culpa, consequuntur labore explicabo in pariatur? Obcaecati laudantium incidunt nam architecto nemo doloribus, iure error quibusdam officia, possimus vel modi repellat minus sunt. Alias eius laboriosam omnis assumenda error, itaque beatae ex quibusdam nihil totam dolores quaerat non. Necessitatibus dolores doloribus animi deserunt molestiae quae delectus aliquam quas odit. Possimus quis odit totam aliquid nobis porro a ipsa accusamus, ipsum saepe minima aliquam repellendus vitae amet nihil qui? Aliquid vel ea iure labore hic saepe deleniti suscipit nostrum perferendis laborum cupiditate, cumque optio explicabo perspiciatis earum quis amet laboriosam magnam aliquam! Soluta facilis odio necessitatibus!"
        },
        {
          id: 4,
          category: "Psychology",
          createdAt: "2024-05-26",
          title: "The Role of Psychology in Education",
          content: "Psychology plays a significant role in the field of education, influencing teaching methods and student learning. This article examines the impact of psychological principles on educational practices.",
          image: "",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium minima cumque enim nisi beatae soluta non quaerat ratione quam optio quos dicta alias vitae aliquid exercitationem corrupti voluptas quod possimus amet explicabo, nihil a. Repellendus rem dolorem magnam temporibus vel hic natus, adipisci reiciendis alias atque eligendi quod dignissimos in? Praesentium labore neque quia possimus nemo quam vel, sed repudiandae aliquam corporis similique, tempore, inventore a dicta amet quos. Assumenda cupiditate, officiis perspiciatis quisquam numquam illum voluptate magni minima tempora ex vitae aliquam molestias quasi sint fugiat libero est id harum omnis facere dolore necessitatibus veritatis! Unde molestiae vel impedit maiores ullam voluptate veritatis culpa, consequuntur labore explicabo in pariatur? Obcaecati laudantium incidunt nam architecto nemo doloribus, iure error quibusdam officia, possimus vel modi repellat minus sunt. Alias eius laboriosam omnis assumenda error, itaque beatae ex quibusdam nihil totam dolores quaerat non. Necessitatibus dolores doloribus animi deserunt molestiae quae delectus aliquam quas odit. Possimus quis odit totam aliquid nobis porro a ipsa accusamus, ipsum saepe minima aliquam repellendus vitae amet nihil qui? Aliquid vel ea iure labore hic saepe deleniti suscipit nostrum perferendis laborum cupiditate, cumque optio explicabo perspiciatis earum quis amet laboriosam magnam aliquam! Soluta facilis odio necessitatibus!"
        },
        {
          id: 5,
          category: "Counseling",
          createdAt: "2024-05-28",
          title: "How to Manage Stress Through Counseling",
          content: "Stress management is a critical aspect of mental health. Discover various strategies and techniques used in counseling to help individuals manage and reduce stress.",
          image: "",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium minima cumque enim nisi beatae soluta non quaerat ratione quam optio quos dicta alias vitae aliquid exercitationem corrupti voluptas quod possimus amet explicabo, nihil a. Repellendus rem dolorem magnam temporibus vel hic natus, adipisci reiciendis alias atque eligendi quod dignissimos in? Praesentium labore neque quia possimus nemo quam vel, sed repudiandae aliquam corporis similique, tempore, inventore a dicta amet quos. Assumenda cupiditate, officiis perspiciatis quisquam numquam illum voluptate magni minima tempora ex vitae aliquam molestias quasi sint fugiat libero est id harum omnis facere dolore necessitatibus veritatis! Unde molestiae vel impedit maiores ullam voluptate veritatis culpa, consequuntur labore explicabo in pariatur? Obcaecati laudantium incidunt nam architecto nemo doloribus, iure error quibusdam officia, possimus vel modi repellat minus sunt. Alias eius laboriosam omnis assumenda error, itaque beatae ex quibusdam nihil totam dolores quaerat non. Necessitatibus dolores doloribus animi deserunt molestiae quae delectus aliquam quas odit. Possimus quis odit totam aliquid nobis porro a ipsa accusamus, ipsum saepe minima aliquam repellendus vitae amet nihil qui? Aliquid vel ea iure labore hic saepe deleniti suscipit nostrum perferendis laborum cupiditate, cumque optio explicabo perspiciatis earum quis amet laboriosam magnam aliquam! Soluta facilis odio necessitatibus!"
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
            pathname: `/article/${item.id}`,
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
