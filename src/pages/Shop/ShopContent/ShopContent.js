import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ShopContent.module.scss';
import { useMemo, useRef, useState } from 'react';
import { A11y, Controller, Navigation, Pagination, Scrollbar, Swiper as SwiperRef } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Slider from 'rc-slider';

import SwiperCore, { Autoplay } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faListUl } from '@fortawesome/free-solid-svg-icons';
import CardProduct from '~/pages/Home/FeaturedProduct/components/CardProduct/CardProduct';
import PaginationItems from '~/components/Layout/components/PaginationItems/PaginationItems';

const cx = classNames.bind(styles);

const departments = [
    {
        id: 1,
        name: 'Fresh Meat',
    },
    {
        id: 2,
        name: 'Vegetables',
    },
    {
        id: 3,
        name: 'Fruit & Nut Gifts',
    },
    {
        id: 4,
        name: 'Fresh Berries',
    },
    {
        id: 5,
        name: 'Ocean Foods',
    },
    {
        id: 6,
        name: 'Butter & Eggs',
    },
    {
        id: 7,
        name: 'Fastfood',
    },
];

function ShopContent({ products, pageCount, handlePageClick }) {
    const [filters, setFilters] = useState({
        price: [0, 600],
    });
    const [showSortBy, setShowSortBy] = useState(false);

    const swiperRef = useRef(SwiperRef);

    const rangeSelector = (newValue) => {
        setFilters((prevFilter) => {
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

    const handleFilterProduct = (products, filters) => {
        const filterKeys = Object.keys(filters);
        const productsFilter = products.filter((product) => {
            // eslint-disable-next-line array-callback-return
            return filterKeys.every((key) => {
                if (key === 'price') {
                    const [min, max] = filters[key];
                    return product[key] >= min && product[key] <= max;
                }
                if (key === 'title') {
                    return product[key].includes(filters[key]);
                }
            });
        });
        return productsFilter;
    };

    const productsFilters = useMemo(() => {
        return handleFilterProduct(products, filters);
    }, [products, filters]);
    return (
        <section className={cx('wrapper')}>
            <div className={cx('shop__container')}>
                <div className={cx('shop__container__content')}>
                    <div className={cx('shop__sidebar')}>
                        <div className={cx('sidebar__department')}>
                            <h1 className={cx('sidebar__heading')}>Department</h1>
                            <ul className={cx('menu')}>
                                {departments.map((department) => (
                                    <li key={department.id} className={cx('menu-item')}>
                                        <Link to="#" className={cx('menu-link')}>
                                            {department.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={cx('sidebar__price')}>
                            <h1 className={cx('sidebar__heading')}>Price</h1>
                            <div className={cx('price__wrapper')}>
                                <Slider
                                    range
                                    allowCross={false}
                                    min={0}
                                    max={600}
                                    onChange={rangeSelector}
                                    trackStyle={[{ backgroundColor: '#dd2222' }]}
                                    defaultValue={filters.price}
                                />
                            </div>
                            <div className={cx('price__text')}>
                                <span className={cx('price__text__text')}>
                                    $ {filters.price[0]} - $ {filters.price[1]}
                                </span>
                            </div>
                        </div>
                        <div className={cx('sidebar__colors')}>
                            <h1 className={cx('sidebar__heading')}>Colors</h1>
                            <div className={cx('sidebar__colors__options')}>
                                <div className={cx('colors__item')}>
                                    <span className={cx('colors__white')}></span>
                                    <span className={cx('colors__text', 'check-active')}>White</span>
                                </div>
                                <div className={cx('colors__item')}>
                                    <span className={cx('colors__yellow')}></span>
                                    <span className={cx('colors__text')}>Yellow</span>
                                </div>
                                <div className={cx('colors__item')}>
                                    <span className={cx('colors__red')}></span>
                                    <span className={cx('colors__text')}>Red</span>
                                </div>
                                <div className={cx('colors__item')}>
                                    <span className={cx('colors__black')}></span>
                                    <span className={cx('colors__text')}>Black</span>
                                </div>
                                <div className={cx('colors__item')}>
                                    <span className={cx('colors__blue')}></span>
                                    <span className={cx('colors__text')}>Blue</span>
                                </div>
                                <div className={cx('colors__item')}>
                                    <span className={cx('colors__green')}></span>
                                    <span className={cx('colors__text')}>Green</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('sidebar__size')}>
                            <h1 className={cx('sidebar__heading')}>Popular Size</h1>
                            <div className={cx('sidebar__size__options')}>
                                <div className={cx('size__item')}>
                                    <span className={cx('size__text', 'active')}>Large</span>
                                </div>
                                <div className={cx('size__item')}>
                                    <span className={cx('size__text')}>Medium</span>
                                </div>
                                <div className={cx('size__item')}>
                                    <span className={cx('size__text')}>Small</span>
                                </div>
                                <div className={cx('size__item')}>
                                    <span className={cx('size__text')}>Tiny</span>
                                </div>
                            </div>
                        </div>
                    </div>
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
