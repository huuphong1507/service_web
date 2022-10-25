import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import logo from '~/assets/images/logo.png';
import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <nav className={cx('nav-bar')}>
            <div className={cx('nav-bar__container')}>
                <div className={cx('nav-bar__flex')}>
                    <NavLink
                        className={(nav) => cx('nav-bar__logo', { active: nav.isActive })}
                        to={config.routes.home}
                        end
                    >
                        <img src={logo} alt="" />
                    </NavLink>
                    <ul className={cx('menu')}>
                        <li className={cx('menu-item')}>
                            <NavLink
                                className={(nav) => cx('menu-link', { active: nav.isActive })}
                                to={config.routes.home}
                                end
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className={cx('menu-item')}>
                            <NavLink
                                className={(nav) => cx('menu-link', { active: nav.isActive })}
                                to={config.routes.shop}
                                end
                            >
                                SHOP
                            </NavLink>
                        </li>
                        <li className={cx('menu-item')}>
                            <NavLink
                                className={(nav) => cx('menu-link', { active: nav.isActive })}
                                to={config.routes.shoppingcart}
                                end
                            >
                                SHOPPING CART
                            </NavLink>
                        </li>
                        <li className={cx('menu-item')}>
                            <NavLink
                                className={(nav) => cx('menu-link', { active: nav.isActive })}
                                to={config.routes.blog}
                                end
                            >
                                BLOG
                            </NavLink>
                        </li>
                        <li className={cx('menu-item')}>
                            <NavLink
                                className={(nav) => cx('menu-link', { active: nav.isActive })}
                                to={config.routes.contact}
                                end
                            >
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                    <div className={cx('nav-bar__cart')}>
                        <div className={cx('nav-bar__icon')}>
                            <NavLink
                                className={(nav) => cx('nav-bar__icon__heart', { active: nav.isActive })}
                                to={config.routes.shoppingcart}
                                end
                            >
                                <div className={cx('nav-bar__icon__link')}>
                                    <FontAwesomeIcon className={cx('nav-bar__icon__link__icon-mini')} icon={faHeart} />
                                    <span>6</span>
                                </div>
                            </NavLink>
                            <NavLink
                                className={(nav) => cx('nav-bar__icon__bag', { active: nav.isActive })}
                                to={config.routes.shoppingcart}
                                end
                            >
                                <div className={cx('nav-bar__icon__link')}>
                                    <FontAwesomeIcon
                                        className={cx('nav-bar__icon__link__icon-mini')}
                                        icon={faBagShopping}
                                    />
                                    <span>7</span>
                                </div>
                            </NavLink>
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
