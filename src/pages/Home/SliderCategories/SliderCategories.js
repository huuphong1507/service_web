import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useRef } from 'react';
import { A11y, Controller, Navigation, Pagination, Scrollbar, Swiper as SwiperRef } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import classNames from 'classnames/bind';
import styles from './SliderCategories.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Autoplay } from 'swiper';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SliderCategories({ products }) {
    const swiperRef = useRef(SwiperRef);

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    SwiperCore.use([Autoplay]);

    return (
        <section className={cx('categories')}>
            <div className={cx('carousel-container')}>
                <div className={cx('swiper-button__left')} onClick={handlePrev}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                    className="external-buttons"
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation={false}
                    speed={800}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide className={cx('swiper-item')} key={product.productId}>
                            <img height="256" width="270" alt="img" className="image" src={product.img} />
                            <h5 className={cx('categories-item__title')}>
                                <Link className={cx('categories-item__title__item')} href="#">
                                    {product.title}
                                </Link>
                            </h5>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={cx('swiper-button__right')} onClick={handleNext}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>
        </section>
    );
}

export default SliderCategories;
