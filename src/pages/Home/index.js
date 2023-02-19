import { useEffect, useState } from 'react';
import CategoriesWithHero from '~/components/Layout/components/CategoriesWithHero/CategoriesWithHero';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import FromBlog from './FromBlog/FromBlog';
import SliderCategories from './SliderCategories/SliderCategories';

function Home() {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState([]);
    const [blogs, setBlogs] = useState([]);

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, products]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    // Call API Product, Categories
    useEffect(() => {
        fetchApiProducts();
    }, []);

    const fetchApiProducts = async () => {
        const data = await fetch('https://json-api-web-production.up.railway.app/api/products');
        const products = await data.json();
        setProducts(products);
        setFilters(products);
    };

    // Call API Blogs
    useEffect(() => {
        fetchApiBlogs();
    }, []);

    const fetchApiBlogs = async () => {
        const dataBlogs = await fetch('https://json-api-web-production.up.railway.app/api/blogs');
        const blogs = await dataBlogs.json();
        setBlogs(blogs);
    };

    return (
        <>
            <CategoriesWithHero />
            <SliderCategories products={products} />
            <FeaturedProduct
                products={currentItems}
                filters={filters}
                setFilters={setFilters}
                pageCount={pageCount}
                handlePageClick={handlePageClick}
            />
            <FromBlog blogs={blogs} />
        </>
    );
}

export default Home;
