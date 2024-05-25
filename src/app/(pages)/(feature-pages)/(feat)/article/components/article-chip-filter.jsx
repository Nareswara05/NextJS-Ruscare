"use client"

import {useEffect, useState} from "react";
import React from "react";
import {useRouter} from "next/navigation";

const ChipCategoryArticle = () => {
  const articleCategory = [
    { title: "Kesehatan Mental" },
    { title: "Teknik Terapi" },
    { title: "Psikologi Anak" },
    { title: "Psikologi Klinis" },
    { title: "Strategi Konseling" },
    { title: "Kesejahteraan Emosional" },
    { title: "Terapi Perilaku" },
    { title: "Manajemen Stres" },
    { title: "Psikologi Kognitif" },
    { title: "Terapi Keluarga" },
    { title: "Gangguan Psikologis" },
    { title: "Pengembangan Diri" },
    { title: "Mindfulness" },
    { title: "Trauma dan PTSD" },
    { title: "Terapi Kelompok" }
];

  const [selectedChip, setSelectedChip] = useState(null)
  const [selectedChipIndex, setSelectedChipIndex] = useState("")

  const router = useRouter()

  useEffect(() => {
    if (selectedChipIndex) {
      router.push(`/article?category=${selectedChipIndex}`, {scroll: false})
    } else {
      router.push(`/article`)
    }
  }, [selectedChip, router]);


  const handleChipClick = (index) => {
    setSelectedChip(index === selectedChip ? null : index);
    setSelectedChipIndex(articleCategory[index].title);
  };



  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {articleCategory.map((article, index) => (
          <div
            key={index}
            className={`px-4 py-2 border font-montserrat text-base rounded-full text-textPrimary border-textPrimary ${
              index === selectedChip ? "bg-gray-200" : "border-gray-300"
            }`}
            onClick={() => handleChipClick(index)}
          >
            {article.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipCategoryArticle;
