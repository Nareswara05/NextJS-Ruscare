import React from 'react';
import DetailHeroArticle from './components/detail-hero-article';
import DetailMainArticle from './components/detail-main-article';

export default async function DetailPageArticle({params}) {
    const id = params.id;
    console.log(id)

    


    return (
        <div className=' mx-24 flex flex-col gap-10'>

            <DetailHeroArticle  />
            <DetailMainArticle  />
        </div>
    );
}