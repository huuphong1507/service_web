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

const image = 'https://preview.colorlib.com/theme/ogani/img/categories/cat-1.jpg.webp';

function SliderCategories() {
    const images = new Array(6).fill({ url: image });

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
                    {images.map((image, index) => (
                        <SwiperSlide className={cx('swiper-item')} key={index}>
                            <img height="256" width="270" alt="img" className="image" src={image.url} />
                            <h5 className={cx('categories-item__title')}>
                                <Link className={cx('categories-item__title__item')} href="#">
                                    FRESH FRUIT
                                </Link>
                            </h5>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={cx('swiper-button__right')} onClick={handleNext}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>

            {/* <div className={cx('categories-container')}>
                <div className={cx('categories-list')}>
                    <div className={cx('categories-item')}>
                        <h5 className={cx('categories-item__title')}>
                            <Link className={cx('categories-item__title__item')} href="#">
                                FRESH FRUIT
                            </Link>
                        </h5>
                    </div>
                    <div className={cx('categories-item')}>
                        <h5 className={cx('categories-item__title')}>
                            <Link className={cx('categories-item__title__item')} href="#">
                                FRESH FRUIT
                            </Link>
                        </h5>
                    </div>
                    <div className={cx('categories-item')}>
                        <h5 className={cx('categories-item__title')}>
                            <Link className={cx('categories-item__title__item')} href="#">
                                FRESH FRUIT
                            </Link>
                        </h5>
                    </div>
                    <div className={cx('categories-item')}>
                        <h5 className={cx('categories-item__title')}>
                            <Link className={cx('categories-item__title__item')} href="#">
                                FRESH FRUIT
                            </Link>
                        </h5>
                    </div>
                    <div className={cx('categories-item')}>
                        <h5 className={cx('categories-item__title')}>
                            <Link className={cx('categories-item__title__item')} href="#">
                                FRESH FRUIT
                            </Link>
                        </h5>
                    </div>
                    <div className={cx('categories-item')}>
                        <h5 className={cx('categories-item__title')}>
                            <Link className={cx('categories-item__title__item')} href="#">
                                FRESH FRUIT
                            </Link>
                        </h5>
                    </div>
                </div>
            </div> */}
        </section>
    );
}

export default SliderCategories;
