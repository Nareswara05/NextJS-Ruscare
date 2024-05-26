import React from 'react';
import DetailHeroArticle from './components/detail-hero-article';
import DetailMainArticle from './components/detail-main-article';

export default async function DetailPageArticle({params}) {
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
      

    const {id} = params;
    console.log(id)
    const articleDetail = data.find((articleDetail) => articleDetail.id.toString() === id);

    


    return (
        <div className=' flex flex-col gap-10 bg-white px-24 py-32'>

            <DetailHeroArticle  articleData={articleDetail}/>
            <DetailMainArticle  articleData={articleDetail}/>
        </div>
    );
}