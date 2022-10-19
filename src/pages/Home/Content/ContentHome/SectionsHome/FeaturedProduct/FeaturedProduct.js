import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './FeaturedProduct.module.scss';
import { faCartShopping, faHeart, faRepeat } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function FeaturedProduct() {
    return (
        <section className={cx('featured')}>
            <div className={cx('featured-container')}>
                <div className={cx('featured-title')}>
                    <h1>Featured Product</h1>
                </div>
                <div className={cx('featured-controls')}>
                    <ul className={cx('featured-menu')}>
                        <li className={cx('featured-item', 'active')}>All</li>
                        <li className={cx('featured-item')}>Oranges</li>
                        <li className={cx('featured-item')}>Fresh Meat</li>
                        <li className={cx('featured-item')}>Vegetables</li>
                        <li className={cx('featured-item')}>Fast food</li>
                    </ul>
                </div>
                <div className={cx('featured-list')}>
                    <div className={cx('featured-list__item')}>
                        <div className={cx('featured-image')}>
                            <img
                                src="https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg.webp"
                                alt=""
                            />
                            <ul className={cx('featured-image__menu')}>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faRepeat} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('featured__text')}>
                            <h6>
                                <Link className={cx('featured__text__link')} href="#">
                                    Crab Pool Security
                                </Link>
                            </h6>
                            <h5>
                                <strong>$30.00</strong>
                            </h5>
                        </div>
                    </div>
                    <div className={cx('featured-list__item')}>
                        <div className={cx('featured-image')}>
                            <img
                                src="https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg.webp"
                                alt=""
                            />
                            <ul className={cx('featured-image__menu')}>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faRepeat} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('featured__text')}>
                            <h6>
                                <Link className={cx('featured__text__link')} href="#">
                                    Crab Pool Security
                                </Link>
                            </h6>
                            <h5>
                                <strong>$30.00</strong>
                            </h5>
                        </div>
                    </div>
                    <div className={cx('featured-list__item')}>
                        <div className={cx('featured-image')}>
                            <img
                                src="https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg.webp"
                                alt=""
                            />
                            <ul className={cx('featured-image__menu')}>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faRepeat} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('featured__text')}>
                            <h6>
                                <Link className={cx('featured__text__link')} href="#">
                                    Crab Pool Security
                                </Link>
                            </h6>
                            <h5>
                                <strong>$30.00</strong>
                            </h5>
                        </div>
                    </div>
                    <div className={cx('featured-list__item')}>
                        <div className={cx('featured-image')}>
                            <img
                                src="https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg.webp"
                                alt=""
                            />
                            <ul className={cx('featured-image__menu')}>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faRepeat} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('featured__text')}>
                            <h6>
                                <Link className={cx('featured__text__link')} href="#">
                                    Crab Pool Security
                                </Link>
                            </h6>
                            <h5>
                                <strong>$30.00</strong>
                            </h5>
                        </div>
                    </div>
                    <div className={cx('featured-list__item')}>
                        <div className={cx('featured-image')}>
                            <img
                                src="https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg.webp"
                                alt=""
                            />
                            <ul className={cx('featured-image__menu')}>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faRepeat} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('featured__text')}>
                            <h6>
                                <Link className={cx('featured__text__link')} href="#">
                                    Crab Pool Security
                                </Link>
                            </h6>
                            <h5>
                                <strong>$30.00</strong>
                            </h5>
                        </div>
                    </div>
                    <div className={cx('featured-list__item')}>
                        <div className={cx('featured-image')}>
                            <img
                                src="https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg.webp"
                                alt=""
                            />
                            <ul className={cx('featured-image__menu')}>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faRepeat} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('featured__text')}>
                            <h6>
                                <Link className={cx('featured__text__link')} href="#">
                                    Crab Pool Security
                                </Link>
                            </h6>
                            <h5>
                                <strong>$30.00</strong>
                            </h5>
                        </div>
                    </div>
                    <div className={cx('featured-list__item')}>
                        <div className={cx('featured-image')}>
                            <img
                                src="https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg.webp"
                                alt=""
                            />
                            <ul className={cx('featured-image__menu')}>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faRepeat} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('featured__text')}>
                            <h6>
                                <Link className={cx('featured__text__link')} href="#">
                                    Crab Pool Security
                                </Link>
                            </h6>
                            <h5>
                                <strong>$30.00</strong>
                            </h5>
                        </div>
                    </div>
                    <div className={cx('featured-list__item')}>
                        <div className={cx('featured-image')}>
                            <img
                                src="https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg.webp"
                                alt=""
                            />
                            <ul className={cx('featured-image__menu')}>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faRepeat} />
                                    </Link>
                                </li>
                                <li className={cx('featured-image__menu-item')}>
                                    <Link href="#" className={cx('featured-image__menu-link')}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('featured__text')}>
                            <h6>
                                <Link className={cx('featured__text__link')} href="#">
                                    Crab Pool Security
                                </Link>
                            </h6>
                            <h5>
                                <strong>$30.00</strong>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProduct;
