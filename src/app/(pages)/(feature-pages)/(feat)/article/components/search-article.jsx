"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const SearchArticle = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [query] = useDebounce(searchQuery, 500);

    useEffect(() => {
        if (query) {
            router.push(`/article?search=${query}`, { scroll: false });
        } else {
            router.push(`/article`);
        }
    }, [query, router]);

    return (
        <div>
            <input
                className='w-[300px] h-10 p-3 text-sm text-textPrimary border-gray-400 border-2 rounded-full focus:outline-none focus:border-primary'
                type="text"
                placeholder='Apa yang sedang kamu cari?'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
    )
}

export default SearchArticle;
