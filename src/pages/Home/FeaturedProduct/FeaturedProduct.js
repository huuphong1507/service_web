import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames/bind';
import styles from './FeaturedProduct.module.scss';

import FilterFeatured from './components/FilterFeatured/FilterFeatured';
import { useEffect, useState } from 'react';
import CardProduct from './components/CardProduct/CardProduct';

const cx = classNames.bind(styles);

function FeaturedProduct({ products, filters, setFilters }) {
    const [activeFilters, setActiveFilters] = useState('All');

    useEffect(() => {
        if (activeFilters === 'All') {
            setFilters(products);
        } else {
            const productByCategoryName = products.filter((product) => {
                const filterClearSpace = activeFilters.replace(/\s+/g, '');
                return product.categories.includes(filterClearSpace.toLowerCase());
            });
            setFilters(productByCategoryName);
        }
    }, [activeFilters, products, setFilters]);

    return (
        <section className={cx('featured')}>
            <div className={cx('featured-container')}>
                <div className={cx('featured-title')}>
                    <h1>Featured Product</h1>
                </div>
                <FilterFeatured
                    products={products}
                    activeFilters={activeFilters}
                    setFilters={setFilters}
                    setActiveFilters={setActiveFilters}
                />
                <motion.div layout className={cx('featured-list')}>
                    <AnimatePresence>
                        {filters.map((product) => (
                            <CardProduct key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

export default FeaturedProduct;
