import BannerBlog from '~/components/Layout/components/BannerBlog/BannerBlog';
import CategoriesWithHero from '~/components/Layout/components/CategoriesWithHero/CategoriesWithHero';
import BlogContent from './BlogContent/BlogContent';
import { useState, useEffect } from 'react';
import queryString from 'query-string';

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    const [filters, setFilters] = useState('');

    useEffect(() => {
        try {
            const fetchApiBlogs = async () => {
                const paramsString = queryString.stringify(filters);
                const dataBlogs = await fetch(`https://ogani-api-web.herokuapp.com/api/blogs?${paramsString}`);
                const blogs = await dataBlogs.json();
                setBlogs(blogs);
            };
            fetchApiBlogs();
        } catch (error) {
            console.log('Failed to error', error.message);
        }
    }, [filters]);
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(blogs.slice(itemOffset, endOffset));
        const a = Math.ceil(blogs.length / itemsPerPage);
        setPageCount(a);
    }, [itemOffset, itemsPerPage, blogs]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blogs.length;
        setItemOffset(newOffset);
    };

    function handleFiltersChange(newFilters) {
        setItemOffset(0);
        setPageCount(0);
        setFilters({
            title_like: newFilters.searchValue,
        });
    }

    return (
        <>
            <CategoriesWithHero>
                <BannerBlog />
            </CategoriesWithHero>
            <BlogContent
                blogs={currentItems}
                pageCount={pageCount}
                handlePageClick={handlePageClick}
                onSubmit={handleFiltersChange}
            />
        </>
    );
}

export default Blog;
