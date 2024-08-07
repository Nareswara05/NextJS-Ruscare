import React from 'react';

export default async function DetailMainArticle({ articleData }) {
    if (!articleData) {
        return <p>Article not found</p>;
    }

    // Function to split content into paragraphs every 5 sentences
    const createParagraphs = (content) => {
        const sentences = content.match(/[^\.!\?]+[\.!\?]+/g) || [];
        const paragraphs = [];
        for (let i = 0; i < sentences.length; i += 10) {
            paragraphs.push(sentences.slice(i, i + 10).join(' '));
        }
        return paragraphs;
    };

    const paragraphs = createParagraphs(articleData.article_content);

    return (
        <div className='flex flex-col gap-12'>
            <h1 className='font-montserrat text-textPrimary text-4xl tracking-wide w-full font-bold'>
                {articleData.title}
            </h1>
            <hr className='w-full border-2' />
            {paragraphs.map((paragraph, index) => (
                <p key={index} className='font-montserrat text-textPrimary text-lg text-justify'>
                    {paragraph}
                </p>
            ))}
        </div>
    );
}
