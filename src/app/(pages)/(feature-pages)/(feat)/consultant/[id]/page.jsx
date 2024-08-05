import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardProfileConsultant from './components/card-profile-consultant';
import DescConsultant from './components/desc-consultant';
import listConsultant from '@/app/lib/service/endpoint/api/list-consultant';

export default async function ConsultantDetail({ params }) {
    const consultants = await listConsultant();
    const { id } = params;
    const consultant = consultants.find((consultant) => consultant.id.toString() === id);

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