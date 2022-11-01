import BannerBlog from '~/components/Layout/components/BannerBlog/BannerBlog';
import CategoriesWithHero from '~/components/Layout/components/CategoriesWithHero/CategoriesWithHero';
import BlogContent from './BlogContent/BlogContent';
import { useState, useEffect } from 'react';

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    const fetchApiBlogs = async () => {
        const dataBlogs = await fetch('https://ogani-api-web.herokuapp.com/api/blogs');
        const blogs = await dataBlogs.json();
        setBlogs(blogs);
    };

    useEffect(() => {
        fetchApiBlogs();
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(blogs.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(blogs.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, blogs]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blogs.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <CategoriesWithHero>
                <BannerBlog />
            </CategoriesWithHero>
            <BlogContent blogs={currentItems} pageCount={pageCount} handlePageClick={handlePageClick} />
        </>
    );
}

export default Blog;
