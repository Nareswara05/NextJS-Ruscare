import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardProfileConsultant from './components/card-profile-consultant';
import DescConsultant from './components/desc-consultant';
import listConsultant from '@/app/lib/service/endpoint/api/list-consultant';
import { slugify } from '@/app/lib/utils/slugify';

export default async function ConsultantDetail({ params }) {
    const consultants = await listConsultant();
    const { slug } = params;
    const consultant = consultants.find((consultant) => slugify(consultant.name) === slug);

    if (!consultant) {
        return <div>Consultant not found</div>;
    }


    return (    
        <div className='flex gap-44 items-start pb-24 pt-44 bg-white justify-center'>
           <CardProfileConsultant dataConsultant={consultant}/>
           <DescConsultant dataConsultant={consultant}/>
        </div>
    );
}