import listArticle from '@/app/lib/service/endpoint/api/list-article';
import listCategoryArticle from '@/app/lib/service/endpoint/api/list-category-article';
import React, { Suspense } from 'react';
import ArticleCards from './components/article-cards';
import ChipCategoryArticle from './components/article-chip-filter';
import Loading from './components/loading';
import SearchArticle from './components/search-article';

const ArticlePage = async () => {
    const articles = await listArticle();
    return (
        <div className="bg-white px-16 overflow-x-hidden w-screen">
            <div className="w-[970px]">
                <h1 className="font-montserrat font-bold text-4xl text-textPrimary items-end">
                    Artikel
                </h1>
                <hr className="w-full border mt-6" />
            </div>
            <div className="my-[59px] flex justify-between gap-12">
                <Suspense fallback={<Loading />}>
                <div className='flex flex-col gap-10'>
                    {articles.map((item, index) => (
                        <ArticleCards data={item} key={index} />
                    ))}
                </div>
                </Suspense>
                <div className="flex flex-col gap-6">
                    <SearchArticle />
                    {/* <div>
                        <h1 className="text-xl font-semibold mb-3 text-textPrimary">Rekomendasi Topik</h1>
                        <ChipCategoryArticle />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;
