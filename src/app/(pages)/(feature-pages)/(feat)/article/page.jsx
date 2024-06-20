"use client"

import { useEffect, useState } from 'react';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import listArticle from '@/app/lib/service/endpoint/api/list-article';
import listCategoryArticle from '@/app/lib/service/endpoint/api/list-category-article';
import ArticleCards from './components/article-cards';
import ChipCategoryArticle from './components/article-chip-filter';
import SearchArticle from './components/search-article';

const ArticlePage = () => {
    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            const fetchedArticles = await listArticle(category, search);
            setArticles(fetchedArticles);
            setLoading(false);
        };

        const fetchCategories = async () => {
            const fetchedCategories = await listCategoryArticle();
            setCategories(fetchedCategories);
        };

        fetchArticles();
        fetchCategories();
    }, [category, search]);

    return (
        <div className="bg-white px-16 overflow-x-hidden w-full">
            <div className="my-[59px] flex justify-between gap-12 pt-24">
                <div>
                    <div className="w-[970px]">
                        <h1 className="font-montserrat font-bold text-4xl text-textPrimary items-end">
                            Artikel
                        </h1>
                        <hr className="w-full border mt-6" />
                    </div>
                    <div className='flex flex-col gap-10 pt-8'>
                        {loading ? (
                            <div className='w-[970px]'>Loading...</div>
                        ) : articles.length === 0 ? (
                            <div className="text-xl text-gray-500 w-[970px] h-screen text-center">Article tidak ditemukan</div>
                        ) : (
                            articles.map((item, index) => (
                                <ArticleCards data={item} categories={categories} key={index} />
                            ))
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <SearchArticle />
                    <div>
                        <h1 className="text-xl font-semibold mb-3 text-textPrimary">Rekomendasi Topik</h1>
                        <ChipCategoryArticle />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;
