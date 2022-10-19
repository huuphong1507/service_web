import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Topbar.module.scss';
import { faAngleDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedinIn, faPinterestP, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/Navbar';

const cx = classNames.bind(styles);

function Topbar() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('header-section')}>
                    <div className={cx('header-container')}>
                        <section className={cx('header-top__bar')}>
                            <div className={cx('header-top__bar__left')}>
                                <span className={cx('header-top__bar__left__email')}>
                                    <FontAwesomeIcon
                                        className={cx('header__icon__email')}
                                        icon={faEnvelope}
                                    ></FontAwesomeIcon>
                                    hello@colorlib.com
                                </span>
                                <span className={cx('header-top__bar__left__shipping')}>
                                    Free Shipping for all Order of $99
                                </span>
                            </div>
                            <div className={cx('header-top__bar__right')}>
                                <div className={cx('header-top__bar__right__socials')}>
                                    <Link className={cx('socials-link')} href="#">
                                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </Link>
                                    <Link className={cx('socials-link')} href="#">
                                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </Link>
                                    <Link className={cx('socials-link')} href="#">
                                        <FontAwesomeIcon
                                            icon={faLinkedinIn}
                                            className={cx('fa-brands fa-linkedin-in')}
                                        ></FontAwesomeIcon>
                                    </Link>
                                    <Link className={cx('socials-link')} href="#">
                                        <FontAwesomeIcon icon={faPinterestP}></FontAwesomeIcon>
                                    </Link>
                                </div>
                                <div className={cx('header-top__bar__right__language')}>
                                    <div className={cx('image-language')}>
                                        <img
                                            src="data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAABwAwCdASobAA4APm0skkWkIqGYBABABsSxAE6ADcGtd+FD6qAA/vV+Wp4VqyJwr3tsqzUVysGAxh5jK++StlIxrHdqkxyfiwYlcgHy6RWg//tsvaTR2IctDJnOE/5mY93zrj0P0ea+n9DmVodGk7RubcK/qHhB4yLFEzBhQuGAAA=="
                                            alt=""
                                        />
                                    </div>
                                    <span className={cx('language')}>
                                        English
                                        <FontAwesomeIcon
                                            icon={faAngleDown}
                                            className={cx('arrow-down')}
                                        ></FontAwesomeIcon>
                                    </span>
                                </div>
                                <div className={cx('header-top__bar__right__auth')}>
                                    <Link className={cx('header-top__bar__right__auth__link')} href="#">
                                        <FontAwesomeIcon
                                            className={cx('header-top__bar__right__auth__icon')}
                                            icon={faUser}
                                        ></FontAwesomeIcon>
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </header>
            <Navbar />
        </div>
    );
}

export default Topbar;
