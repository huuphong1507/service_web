import { useEffect, useState } from 'react';
import BannerShop from '~/components/Layout/components/BannerShop/BannerShop';
import CategoriesWithHero from '~/components/Layout/components/CategoriesWithHero/CategoriesWithHero';
import ShopContent from './ShopContent/ShopContent';

function Shop() {
    const [products, setProducts] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;

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
        const data = await fetch('https://ogani-api-web.herokuapp.com/api/products');
        const products = await data.json();
        setProducts(products);
    };

    return (
        <>
            <CategoriesWithHero>
                <BannerShop />
            </CategoriesWithHero>
            <ShopContent products={currentItems} pageCount={pageCount} handlePageClick={handlePageClick} />
        </>
    );
}

export default Shop;
