import { useEffect, useState } from 'react';
import CategoriesWithHero from '~/components/Layout/components/CategoriesWithHero/CategoriesWithHero';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import FromBlog from './FromBlog/FromBlog';
import SliderCategories from './SliderCategories/SliderCategories';

function Home() {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState([]);
    const [blogs, setBlogs] = useState([]);

    // Call API Product, Categories
    useEffect(() => {
        fetchApiProducts();
    }, []);

    const fetchApiProducts = async () => {
        const data = await fetch('https://ogani-api-web.herokuapp.com/api/products');
        const products = await data.json();
        setProducts(products);
        setFilters(products);
    };

    // Call API Blogs
    useEffect(() => {
        fetchApiBlogs();
    }, []);

    const fetchApiBlogs = async () => {
        const dataBlogs = await fetch('https://ogani-api-web.herokuapp.com/api/blogs');
        const blogs = await dataBlogs.json();
        setBlogs(blogs);
    };

    return (
        <>
            <CategoriesWithHero />
            <SliderCategories products={products} />
            <FeaturedProduct products={products} filters={filters} setFilters={setFilters} />
            <FromBlog blogs={blogs} />
        </>
    );
}

export default Home;
