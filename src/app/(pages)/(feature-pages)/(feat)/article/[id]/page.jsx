import listArticle from '@/app/lib/service/endpoint/api/list-article';
import React from 'react';
import DetailHeroArticle from './components/detail-hero-article';
import DetailMainArticle from './components/detail-main-article';

export default async function DetailPageArticle({params}) {
    const articles = await listArticle();
      

    const {id} = params;
    console.log(id)
    const articleDetail = articles.find((articleDetail) => articleDetail.id.toString() === id);

    


    return (
        <div className=' flex flex-col gap-10 bg-white px-24 py-32'>

            <DetailHeroArticle  articleData={articleDetail}/>
            <DetailMainArticle  articleData={articleDetail}/>
        </div>
    );
}