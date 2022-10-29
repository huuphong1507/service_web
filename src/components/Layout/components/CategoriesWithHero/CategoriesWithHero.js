import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './CategoriesWithHero.module.scss';
import { faAngleDown, faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import BannerDefault from './BannerDefault';

const cx = classNames.bind(styles);

const shouldHideDepartments = ['/shop', '/shoppingcart', '/blog', '/contact'];

function CategoriesWithHero({ children }) {
    const { pathname } = useLocation();
    const [showDepartments, setShowDepartments] = useState(shouldHideDepartments.includes(pathname) ? false : true);

    function hideDepartments() {
        setShowDepartments(!showDepartments);
    }

    return (
        <section>
            <div className={cx('hero-container')}>
                <div className={cx('hero-container__block')}>
                    <div className={cx('hero__categories__left')}>
                        <div className={cx('categories__all')} onClick={hideDepartments}>
                            <FontAwesomeIcon icon={faBars} />
                            <span>All departments</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>

                        <ul
                            style={{
                                display: showDepartments ? 'block' : 'none',
                            }}
                            className={cx('menu__categories')}
                        >
                            <li className={cx('menu-item__categories')}>
                                <Link href="#" className={cx('menu-link__categories')}>
                                    Fresh Meat
                                </Link>
                            </li>
                            <li className={cx('menu-item__categories')}>
                                <Link href="#" className={cx('menu-link__categories')}>
                                    Vegetables
                                </Link>
                            </li>
                            <li className={cx('menu-item__categories')}>
                                <Link href="#" className={cx('menu-link__categories')}>
                                    Fruit & Nut Gifts
                                </Link>
                            </li>
                            <li className={cx('menu-item__categories')}>
                                <Link href="#" className={cx('menu-link__categories')}>
                                    Fresh Berries
                                </Link>
                            </li>
                            <li className={cx('menu-item__categories')}>
                                <Link href="#" className={cx('menu-link__categories')}>
                                    Ocean Foods
                                </Link>
                            </li>
                            <li className={cx('menu-item__categories')}>
                                <Link href="#" className={cx('menu-link__categories')}>
                                    Butter & Eggs
                                </Link>
                            </li>
                            <li className={cx('menu-item__categories')}>
                                <Link href="#" className={cx('menu-link__categories')}>
                                    Butter & Eggs
                                </Link>
                            </li>
                            <li className={cx('menu-item__categories')}>
                                <Link href="#" className={cx('menu-link__categories')}>
                                    Butter & Eggs
                                </Link>
                            </li>
                            <li className={cx('menu-item__categories')}>
                                <Link href="#" className={cx('menu-link__categories')}>
                                    Butter & Eggs
                                </Link>
                            </li>
                            <li className={cx('menu-item__categories')}>
                                <Link href="#" className={cx('menu-link__categories')}>
                                    Butter & Eggs
                                </Link>
                            </li>
                            <li className={cx('menu-item__categories')}>
                                <Link href="#" className={cx('menu-link__categories')}>
                                    Butter & Eggs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('hero__categories__right')}>
                        <div className={cx('hero__search')}>
                            <div className={cx('hero__search__form')}>
                                <form className={cx('form__categories')} action="#">
                                    <div className={cx('hero__search__categories')}>
                                        All Categories
                                        <span>
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </span>
                                    </div>
                                    <input type="text" placeholder="What do you need?" />
                                    <button type="submit" className={cx('btn-search')}>
                                        SEARCH
                                    </button>
                                </form>
                            </div>
                            <div className={cx('hero__search__phone')}>
                                <div className={cx('hero__search__phone__icon')}>
                                    <FontAwesomeIcon className={cx('phone__icon')} icon={faPhone} />
                                </div>
                                <div className={cx('hero__search__phone__text')}>
                                    <h5>+65 11.188.888</h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                        {!children && <BannerDefault />}
                    </div>
                </div>
            </div>
            {!!children && <>{children}</>}
        </section>
    );
}

export default CategoriesWithHero;
