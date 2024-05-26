import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardProfileConsultant from './components/card-profile-consultant';
import DescConsultant from './components/desc-consultant';

// Dummy data
const consultants = [
    {
        id: 1,
        name: "John Doe",
        pronouns: "(She / Her)",
        education: "S1 Psikologi Universitas Indonesia",
        major: "PPLG",
        avatar: "/path/to/avatar1.jpg",
        experience: "10 Tahun",
        birtdate: "12 Januari 1892",
        lastEducation: "Sarjana (S1)",
        umur: "28 Tahun",
        facebook: "www.facebook.com",
        instagram: "www.instagram.com",
        twitter: "www.twitter.com",
        linkedin: "www.linkedin.com",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deserunt sed nihil voluptatum iure reprehenderit molestias omnis quas asperiores? Reprehenderit dolores eius, harum quos quidem est expedita in. Quis maiores eum laboriosam perspiciatis atque id voluptatem necessitatibus numquam fugit commodi, voluptates excepturi totam nobis similique itaque fugiat modi adipisci molestias, nihil, neque facere. Quidem, libero facilis! Id nobis nostrum expedita inventore quam, voluptas numquam, earum ipsum labore maxime officiis fuga culpa. Illum veritatis, quis quod deserunt odit ea eveniet dolor. At vero ad harum ullam ipsam. Quos beatae distinctio cum ducimus, dolorum accusantium! Enim rem doloremque harum asperiores tempore? Corrupti!",
        sertfication: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deserunt sed nihil voluptatum iure reprehenderit molestias omnis quas asperiores? Reprehenderit dolores eius, harum quos quidem est expedita in. Quis maiores eum laboriosam perspiciatis atque id voluptatem necessitatibus numquam fugit commodi, voluptates excepturi totam nobis similique itaque fugiat modi adipisci molestias, nihil, neque facere. Quidem, libero facilis! Id nobis nostrum expedita inventore quam, voluptas numquam, earum ipsum labore maxime officiis fuga culpa. Illum veritatis, quis quod deserunt odit ea eveniet dolor. At vero ad harum ullam ipsam. Quos beatae distinctio cum ducimus, dolorum accusantium! Enim rem doloremque harum asperiores tempore? Corrupti!"

    },
    {
        id: 2,
        name: "Jane Smith",
        pronouns: "(He / Him)",
        education: "S2 Psikologi Universitas Gadjah Mada",
        major: "Animasi 3D",
        avatar: "/path/to/avatar2.jpg",
        experience: "10 Tahun",
        birtdate: "12 Januari 1892",
        lastEducation: "Sarjana (S1)",
        umur: "28 Tahun",
        facebook: "www.facebook.com",
        instagram: "www.instagram.com",
        twitter: "www.twitter.com",
        linkedin: "www.linkedin.com",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deserunt sed nihil voluptatum iure reprehenderit molestias omnis quas asperiores? Reprehenderit dolores eius, harum quos quidem est expedita in. Quis maiores eum laboriosam perspiciatis atque id voluptatem necessitatibus numquam fugit commodi, voluptates excepturi totam nobis similique itaque fugiat modi adipisci molestias, nihil, neque facere. Quidem, libero facilis! Id nobis nostrum expedita inventore quam, voluptas numquam, earum ipsum labore maxime officiis fuga culpa. Illum veritatis, quis quod deserunt odit ea eveniet dolor. At vero ad harum ullam ipsam. Quos beatae distinctio cum ducimus, dolorum accusantium! Enim rem doloremque harum asperiores tempore? Corrupti!",
        sertfication: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deserunt sed nihil voluptatum iure reprehenderit molestias omnis quas asperiores? Reprehenderit dolores eius, harum quos quidem est expedita in. Quis maiores eum laboriosam perspiciatis atque id voluptatem necessitatibus numquam fugit commodi, voluptates excepturi totam nobis similique itaque fugiat modi adipisci molestias, nihil, neque facere. Quidem, libero facilis! Id nobis nostrum expedita inventore quam, voluptas numquam, earum ipsum labore maxime officiis fuga culpa. Illum veritatis, quis quod deserunt odit ea eveniet dolor. At vero ad harum ullam ipsam. Quos beatae distinctio cum ducimus, dolorum accusantium! Enim rem doloremque harum asperiores tempore? Corrupti!"

    },
    {
        id: 3,
        name: "Robert Johnson",
        pronouns: "(He / Him)",
        education: "S1 Psikologi Universitas Padjajaran",
        major: "Design Grafis",
        avatar: "/path/to/avatar3.jpg",
        experience: "10 Tahun",
        birtdate: "12 Januari 1892",
        lastEducation: "Sarjana (S1)",
        umur: "28 Tahun",
        facebook: "www.facebook.com",
        instagram: "www.instagram.com",
        twitter: "www.twitter.com",
        linkedin: "www.linkedin.com",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deserunt sed nihil voluptatum iure reprehenderit molestias omnis quas asperiores? Reprehenderit dolores eius, harum quos quidem est expedita in. Quis maiores eum laboriosam perspiciatis atque id voluptatem necessitatibus numquam fugit commodi, voluptates excepturi totam nobis similique itaque fugiat modi adipisci molestias, nihil, neque facere. Quidem, libero facilis! Id nobis nostrum expedita inventore quam, voluptas numquam, earum ipsum labore maxime officiis fuga culpa. Illum veritatis, quis quod deserunt odit ea eveniet dolor. At vero ad harum ullam ipsam. Quos beatae distinctio cum ducimus, dolorum accusantium! Enim rem doloremque harum asperiores tempore? Corrupti!",
        sertfication: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deserunt sed nihil voluptatum iure reprehenderit molestias omnis quas asperiores? Reprehenderit dolores eius, harum quos quidem est expedita in. Quis maiores eum laboriosam perspiciatis atque id voluptatem necessitatibus numquam fugit commodi, voluptates excepturi totam nobis similique itaque fugiat modi adipisci molestias, nihil, neque facere. Quidem, libero facilis! Id nobis nostrum expedita inventore quam, voluptas numquam, earum ipsum labore maxime officiis fuga culpa. Illum veritatis, quis quod deserunt odit ea eveniet dolor. At vero ad harum ullam ipsam. Quos beatae distinctio cum ducimus, dolorum accusantium! Enim rem doloremque harum asperiores tempore? Corrupti!"

    },
    {
        id: 4,
        name: "Emily Davis",
        pronouns: "(She / Her)",
        education: "S1 Psikologi Universitas Airlangga",
        major: "Animasi 2D",
        avatar: "/path/to/avatar4.jpg",
        experience: "10 Tahun",
        birtdate: "12 Januari 1892",
        lastEducation: "Sarjana (S1)",
        umur: "28 Tahun",
        facebook: "www.facebook.com",
        instagram: "www.instagram.com",
        twitter: "www.twitter.com",
        linkedin: "www.linkedin.com",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deserunt sed nihil voluptatum iure reprehenderit molestias omnis quas asperiores? Reprehenderit dolores eius, harum quos quidem est expedita in. Quis maiores eum laboriosam perspiciatis atque id voluptatem necessitatibus numquam fugit commodi, voluptates excepturi totam nobis similique itaque fugiat modi adipisci molestias, nihil, neque facere. Quidem, libero facilis! Id nobis nostrum expedita inventore quam, voluptas numquam, earum ipsum labore maxime officiis fuga culpa. Illum veritatis, quis quod deserunt odit ea eveniet dolor. At vero ad harum ullam ipsam. Quos beatae distinctio cum ducimus, dolorum accusantium! Enim rem doloremque harum asperiores tempore? Corrupti!",
        sertfication: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deserunt sed nihil voluptatum iure reprehenderit molestias omnis quas asperiores? Reprehenderit dolores eius, harum quos quidem est expedita in. Quis maiores eum laboriosam perspiciatis atque id voluptatem necessitatibus numquam fugit commodi, voluptates excepturi totam nobis similique itaque fugiat modi adipisci molestias, nihil, neque facere. Quidem, libero facilis! Id nobis nostrum expedita inventore quam, voluptas numquam, earum ipsum labore maxime officiis fuga culpa. Illum veritatis, quis quod deserunt odit ea eveniet dolor. At vero ad harum ullam ipsam. Quos beatae distinctio cum ducimus, dolorum accusantium! Enim rem doloremque harum asperiores tempore? Corrupti!"

    },
    {
        id: 5,
        name: "Michael Wilson",
        pronouns: "(He / Him)",
        education: "S1 Psikologi Universitas Brawijaya",
        major: "Teknik Grafika",
        avatar: "/path/to/avatar5.jpg",
        experience: "10 Tahun",
        birtdate: "12 Januari 1892",
        lastEducation: "Sarjana (S1)",
        umur: "28 Tahun",
        facebook: "www.facebook.com",
        instagram: "www.instagram.com",
        twitter: "www.twitter.com",
        linkedin: "www.linkedin.com",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deserunt sed nihil voluptatum iure reprehenderit molestias omnis quas asperiores? Reprehenderit dolores eius, harum quos quidem est expedita in. Quis maiores eum laboriosam perspiciatis atque id voluptatem necessitatibus numquam fugit commodi, voluptates excepturi totam nobis similique itaque fugiat modi adipisci molestias, nihil, neque facere. Quidem, libero facilis! Id nobis nostrum expedita inventore quam, voluptas numquam, earum ipsum labore maxime officiis fuga culpa. Illum veritatis, quis quod deserunt odit ea eveniet dolor. At vero ad harum ullam ipsam. Quos beatae distinctio cum ducimus, dolorum accusantium! Enim rem doloremque harum asperiores tempore? Corrupti!",
        sertfication: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deserunt sed nihil voluptatum iure reprehenderit molestias omnis quas asperiores? Reprehenderit dolores eius, harum quos quidem est expedita in. Quis maiores eum laboriosam perspiciatis atque id voluptatem necessitatibus numquam fugit commodi, voluptates excepturi totam nobis similique itaque fugiat modi adipisci molestias, nihil, neque facere. Quidem, libero facilis! Id nobis nostrum expedita inventore quam, voluptas numquam, earum ipsum labore maxime officiis fuga culpa. Illum veritatis, quis quod deserunt odit ea eveniet dolor. At vero ad harum ullam ipsam. Quos beatae distinctio cum ducimus, dolorum accusantium! Enim rem doloremque harum asperiores tempore? Corrupti!"

    }
];
export default async function ConsultantDetail({ params }) {
    const { id } = params;
    const consultant = consultants.find((consultant) => consultant.id.toString() === id);

    if (!consultant) {
        return <div>Consultant not found</div>;
    }

    const { name, pronouns, education, major, avatar, experience, birtdate, lastEducation, umur, facebook, instagram, twitter, linkedin, about, sertfication } = consultant;

    return (
        <div className='flex gap-16 items-start py-32 bg-white justify-center'>
           <CardProfileConsultant dataConsultant={consultant}/>
           <DescConsultant dataConsultant={consultant}/>
        </div>
    );
}