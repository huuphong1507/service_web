import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ShopContent.module.scss';
import { useMemo, useRef, useState } from 'react';
import { A11y, Controller, Navigation, Pagination, Scrollbar, Swiper as SwiperRef } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Autoplay } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faListUl } from '@fortawesome/free-solid-svg-icons';
import CardProduct from '~/pages/Home/FeaturedProduct/components/CardProduct/CardProduct';
import PaginationItems from '~/components/Layout/components/PaginationItems/PaginationItems';
import ShopSidebar from '../ShopSidebar/ShopSidebar';

const cx = classNames.bind(styles);

function ShopContent({ products, pageCount, handlePageClick }) {
    const [filtersProduct, setFiltersProduct] = useState({
        price: [0, 600],
    });
    const [showSortBy, setShowSortBy] = useState(false);

    const swiperRef = useRef(SwiperRef);

    const rangeSelector = (newValue) => {
        setFiltersProduct((prevFilter) => {
            return {
                ...prevFilter,
                price: newValue,
            };
        });
    };

    SwiperCore.use([Autoplay]);

    const hideSortby = () => {
        setShowSortBy(!showSortBy);
    };

    const handleFilterProduct = (products, filtersProduct) => {
        const filterKeys = Object.keys(filtersProduct);
        console.log(filterKeys, 'filter');
        const productsFilter = products.filter((product) => {
            // eslint-disable-next-line array-callback-return
            return filterKeys.every((key) => {
                if (key === 'price') {
                    const [min, max] = filtersProduct[key];
                    return product[key] >= min && product[key] <= max;
                }
                if (key === 'color') {
                    return product[key].includes(filtersProduct[key]);
                }
                if (key === 'size') {
                    return product[key].includes(filtersProduct[key]);
                }
            });
        });
        return productsFilter;
    };

    const productsFilters = useMemo(() => {
        return handleFilterProduct(products, filtersProduct);
    }, [products, filtersProduct]);
    return (
        <section className={cx('wrapper')}>
            <div className={cx('shop__container')}>
                <div className={cx('shop__container__content')}>
                    <ShopSidebar
                        filtersProduct={filtersProduct}
                        setFiltersProduct={setFiltersProduct}
                        rangeSelector={rangeSelector}
                    />
                    <div className={cx('shop__content')}>
                        <h1 className={cx('shop__heading')}>Sale Off</h1>
                        <div className={cx('shop__slider')}>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                                className="external-buttons"
                                spaceBetween={30}
                                slidesPerView={3}
                                navigation={false}
                                speed={800}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                effect="3D Coverflow"
                            >
                                {products.map((product) => (
                                    <SwiperSlide className={cx('swiper-item')} key={product.productId}>
                                        <div className={cx('shop__slider__image')}>
                                            <img
                                                height="256"
                                                width="270"
                                                alt="img"
                                                className="image"
                                                src={product.img}
                                            />
                                            <div className={cx('shop__slider__discount')}>-20%</div>
                                        </div>
                                        <h5 className={cx('shop-item__title')}>
                                            <Link className={cx('shop-item__title__item')} to="#">
                                                {product.title}
                                            </Link>
                                        </h5>
                                        <div className={cx('shop__slider__price')}>
                                            ${product.price}
                                            <span>$36.00</span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className={cx('shop__product')}>
                            <div className={cx('product__filter__item')}>
                                <div className={cx('filter__sort')}>
                                    <span className={cx('filter__sort__text')}>Sort By</span>
                                    <div className={cx('filter__select')} onClick={hideSortby}>
                                        <span className={cx('filter__select__text')}>Default</span>
                                        <ul
                                            style={{
                                                display: showSortBy ? 'block' : 'none',
                                            }}
                                            className={cx('list')}
                                        >
                                            <li className={cx('list__item')}>Default</li>
                                            <li className={cx('list__item')}>Default</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={cx('filter__found')}>
                                    <h6>
                                        <span>15</span>Products found
                                    </h6>
                                </div>
                                <div className={cx('filter__option')}>
                                    <span>
                                        <FontAwesomeIcon icon={faFilter} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faListUl} />
                                    </span>
                                </div>
                            </div>
                            <motion.div layout className={cx('product__items')}>
                                <AnimatePresence>
                                    {productsFilters.map((product) => (
                                        <CardProduct key={product.productId} product={product} />
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                        <PaginationItems pageCount={pageCount} handlePageClick={handlePageClick} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopContent;
