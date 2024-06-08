"use client"

import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import listCategoryArticle from "@/app/lib/service/endpoint/api/list-category-article";

const ChipCategoryArticle = () => {
  const [articleCategory, setArticleCategory] = useState([]);
  const [selectedChip, setSelectedChip] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await listCategoryArticle();
      setArticleCategory(categories);
    };

    fetchCategories();
  }, []);

  const handleChipClick = (index) => {
    const category = articleCategory[index];
    if (selectedChip === index) {
      setSelectedChip(null);
      router.push(`/article`);
    } else {
      setSelectedChip(index);
      router.push(`/article?category=${category.id}`);
    }
  };

  
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {articleCategory.map((article, index) => (
          <div
            key={article.id}
            className={`px-4 py-2 border font-montserrat text-base rounded-full hover:bg-primary hover:text-white text-textPrimary cursor-pointer ${index === selectedChip ? "bg-primary text-white" : "border-gray-300"
              }`}
            onClick={() => handleChipClick(index)}
          >
            {article.category_name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipCategoryArticle;
