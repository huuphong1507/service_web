import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import logo from '~/assets/images/logo.png';
import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <nav className={cx('nav-bar')}>
            <div className={cx('nav-bar__container')}>
                <div className={cx('nav-bar__flex')}>
                    <Link className={cx('nav-bar__logo')} href="#">
                        <img src={logo} alt="" />
                    </Link>
                    <ul className={cx('menu')}>
                        <li className={cx('menu-item')}>
                            <Link href="#" className={cx('menu-link')}>
                                HOME
                            </Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link href="#" className={cx('menu-link')}>
                                SHOP
                            </Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link href="#" className={cx('menu-link')}>
                                PAGES
                            </Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link href="#" className={cx('menu-link')}>
                                BLOG
                            </Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link href="#" className={cx('menu-link')}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                    <div className={cx('nav-bar__cart')}>
                        <div className={cx('nav-bar__icon')}>
                            <div className={cx('nav-bar__icon__heart')}>
                                <Link className={cx('nav-bar__icon__link')} href="#">
                                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                    <span>6</span>
                                </Link>
                            </div>
                            <div className={cx('nav-bar__icon__bag')}>
                                <Link className={cx('nav-bar__icon__link')} href="#">
                                    <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                                    <span>7</span>
                                </Link>
                            </div>
                        </div>
                        <div className={cx('nav-bar__price')}>
                            <p>
                                item: <strong>$150.00</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
