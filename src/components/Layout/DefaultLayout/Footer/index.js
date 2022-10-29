import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-container')}>
                <div className={cx('footer-top')}>
                    <div className={cx('footer-about')}>
                        <div className={cx('about-logo')}>
                            <img src="./assets/images/logo.png" alt="" />
                        </div>
                        <div className={cx('about-info')}>
                            <p>Address: 60-49 Road 11378 New York</p>
                            <p>Phone: +65 11.188.888</p>
                            <p>Email: hello@colorlib.com</p>
                        </div>
                    </div>
                    <div className={cx('footer-useful')}>
                        <div className={cx('useful-heading')}>
                            <h6>Useful Links</h6>
                        </div>
                        <div className={cx('useful-list')}>
                            <ul className={cx('menu-links')}>
                                <li className={cx('menu-links-item')}>
                                    <Link to="#" className={cx('menu-link')}>
                                        About us
                                    </Link>
                                </li>
                                <li className={cx('menu-links-item')}>
                                    <Link to="#" className={cx('menu-link')}>
                                        About us
                                    </Link>
                                </li>
                                <li className={cx('menu-links-item')}>
                                    <Link to="#" className={cx('menu-link')}>
                                        About us
                                    </Link>
                                </li>
                                <li className={cx('menu-links-item')}>
                                    <Link to="#" className={cx('menu-link')}>
                                        About us
                                    </Link>
                                </li>
                                <li className={cx('menu-links-item')}>
                                    <Link to="#" className={cx('menu-link')}>
                                        About us
                                    </Link>
                                </li>
                                <li className={cx('menu-links-item')}>
                                    <Link to="#" className={cx('menu-link')}>
                                        About us
                                    </Link>
                                </li>
                            </ul>
                            <ul className={cx('menu-links')}>
                                <li className={cx('menu-links-item')}>
                                    <Link to="#" className={cx('menu-link')}>
                                        About us
                                    </Link>
                                </li>
                                <li className={cx('menu-links-item')}>
                                    <Link to="#" className={cx('menu-link')}>
                                        About us
                                    </Link>
                                </li>
                                <li className={cx('menu-links-item')}>
                                    <Link to="#" className={cx('menu-link')}>
                                        About us
                                    </Link>
                                </li>
                                <li className={cx('menu-links-item')}>
                                    <Link to="#" className={cx('menu-link')}>
                                        About us
                                    </Link>
                                </li>
                                <li className={cx('menu-links-item')}>
                                    <Link to="#" className={cx('menu-link')}>
                                        About us
                                    </Link>
                                </li>
                                <li className={cx('menu-links-item')}>
                                    <Link to="#" className={cx('menu-link')}>
                                        About us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('footer-widget')}>
                        <h6>Join Our Newsletter Now</h6>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form className={cx('widget-form')} action="#">
                            <input type="text" placeholder="Enter your mail" />
                            <button type="submit" className={cx('subcribe-btn')}>
                                Subscribe
                            </button>
                        </form>
                        <div className={cx('footer__widget__socials')}>
                            <Link className={cx('socials__icon')} to="#">
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                            <Link className={cx('socials__icon')} to="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                            <Link className={cx('socials__icon')} to="#">
                                <FontAwesomeIcon icon={faTwitter} />
                            </Link>
                            <Link className={cx('socials__icon')} to="#">
                                <FontAwesomeIcon icon={faPinterest} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('footer-bottom')}>
                    <div className={cx('footer-bottom__copyright')}>
                        <div className={cx('footer-bottom__copyright__text')}>
                            <p>
                                Copyright ©2022 All rights reserved | This template is made with{' '}
                                <FontAwesomeIcon icon={faHeart} /> by{' '}
                                <Link className={cx('color-lib')} to="#">
                                    Colorlib
                                </Link>
                            </p>
                        </div>
                        <div className={cx('footer-bottom__copyright__logo')}>
                            <img
                                src="https://preview.colorlib.com/theme/ogani/img/xpayment-item.png.pagespeed.ic.fk3ziISga0.webp"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
