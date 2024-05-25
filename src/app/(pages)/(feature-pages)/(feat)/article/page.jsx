import React from 'react'
import ArticleCards from './components/article-cards'
import ChipCategoryArticle from './components/article-chip-filter'
import SearchArticle from './components/search-article'

const ArticlePage = () => {
  return (
    <div>
        <div className="bg-white px-16 overflow-x-hidden w-screen">
             <div className="w-[970px]">
                 <h1 className="font-montserrat font-bold text-4xl text-textPrimary items-end ">
                     Artikel
                 </h1>
                 <hr className="w-full border mt-6"/>
             </div>
             <div className="my-[59px] flex justify-between gap-12">
                     <ArticleCards  />
                 <div className="flex flex-col gap-6 ">
                     <SearchArticle/>
                     <div>
                         <h1 className="text-xl font-semibold mb-3 text-textPrimary">Rekomendasi Topik</h1>
                         <ChipCategoryArticle/>
                     </div>
                 </div>
             </div>
         </div>
    </div>
  )
}

export default ArticlePage