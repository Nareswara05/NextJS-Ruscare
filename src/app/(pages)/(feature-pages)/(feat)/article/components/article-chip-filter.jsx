"use client"

import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import listCategoryArticle from "@/app/lib/service/endpoint/api/list-category-article";

const ChipCategoryArticle = () => {
  const [selectedChip, setSelectedChip] = useState(null);
  const [selectedChipIndex, setSelectedChipIndex] = useState("");
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await listCategoryArticle();
        setCategories(categoryData);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedChipIndex) {
      router.push(`/article?category=${selectedChipIndex}`, { scroll: false });
    } else {
      router.push(`/article`);
    }
  }, [selectedChipIndex, router]);

  const handleChipClick = (index) => {
    if (index === selectedChip) {
      setSelectedChip(null);
      setSelectedChipIndex("");
    } else {
      setSelectedChip(index);
      setSelectedChipIndex(categories[index].title);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`px-4 py-2 border font-montserrat text-base rounded-full hover:bg-primary hover:text-white text-textPrimary cursor-pointer ${
              index === selectedChip ? "bg-primary text-white" : "border-gray-300"
            }`}
            onClick={() => handleChipClick(index)}
          >
            {category.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipCategoryArticle;
