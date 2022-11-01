import { faCalendar, faComment } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './BlogContent.module.scss';

const cx = classNames.bind(styles);

function BlogContent() {
    return (
        <section className={cx('section__blog')}>
            <div className={cx('blog__container')}>
                <div className={cx('blog__container__content')}>
                    <div className={cx('blog__sidebar')}>
                        <div className={cx('blog__sidebar__search')}>
                            <input placeholder="Search..." />
                            <button type="submit">
                                <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                            </button>
                        </div>
                        <div className={cx('blog__sidebar__item')}>
                            <h2>Categories</h2>
                            <ul className={cx('blog__sidebar__menu')}>
                                <li>
                                    <Link className={cx('blog__sidebar__link')} to="#">
                                        All
                                    </Link>
                                </li>
                                <li>
                                    <Link className={cx('blog__sidebar__link')} to="#">
                                        Beauty (20)
                                    </Link>
                                </li>
                                <li>
                                    <Link className={cx('blog__sidebar__link')} to="#">
                                        Food (5)
                                    </Link>
                                </li>
                                <li>
                                    <Link className={cx('blog__sidebar__link')} to="#">
                                        Life Style (9)
                                    </Link>
                                </li>
                                <li>
                                    <Link className={cx('blog__sidebar__link')} to="#">
                                        Travel (10)
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('blog__list')}>
                        <div className={cx('blog__list__item')}>
                            <div className={cx('blog__list__image')}>
                                <img
                                    src="https://preview.colorlib.com/theme/ogani/img/blog/xblog-2.jpg.pagespeed.ic.Wv9OXwE7iA.webp"
                                    alt=""
                                />
                            </div>
                            <div className={cx('blog__list__text')}>
                                <div className={cx('blog__interactive')}>
                                    <div className={cx('blog__date')}>
                                        <FontAwesomeIcon className={cx('date-icon')} icon={faCalendar} />
                                        <span>May 4,2019</span>
                                    </div>
                                    <div className={cx('blog__comment')}>
                                        <FontAwesomeIcon className={cx('date-icon')} icon={faComment} />
                                        <span>6</span>
                                    </div>
                                </div>
                                <h2 className={cx('blog__title')}>
                                    <Link className={cx('blog__title__link')} to="#">
                                        6 ways to prepare breakfast for 30
                                    </Link>
                                </h2>
                                <p className={cx('blog__description')}>
                                    Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat
                                </p>
                                <Link className={cx('read-more-btn')} href="#">
                                    READ MORE <FontAwesomeIcon className={cx('arrow-icon')} icon={faArrowRight} />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('blog__list__item')}>
                            <div className={cx('blog__list__image')}>
                                <img
                                    src="https://preview.colorlib.com/theme/ogani/img/blog/xblog-2.jpg.pagespeed.ic.Wv9OXwE7iA.webp"
                                    alt=""
                                />
                            </div>
                            <div className={cx('blog__list__text')}>
                                <div className={cx('blog__interactive')}>
                                    <div className={cx('blog__date')}>
                                        <FontAwesomeIcon className={cx('date-icon')} icon={faCalendar} />
                                        <span>May 4,2019</span>
                                    </div>
                                    <div className={cx('blog__comment')}>
                                        <FontAwesomeIcon className={cx('date-icon')} icon={faComment} />
                                        <span>6</span>
                                    </div>
                                </div>
                                <h2 className={cx('blog__title')}>
                                    <Link className={cx('blog__title__link')} to="#">
                                        6 ways to prepare breakfast for 30
                                    </Link>
                                </h2>
                                <p className={cx('blog__description')}>
                                    Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat
                                </p>
                                <Link className={cx('read-more-btn')} href="#">
                                    READ MORE <FontAwesomeIcon className={cx('arrow-icon')} icon={faArrowRight} />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('blog__list__item')}>
                            <div className={cx('blog__list__image')}>
                                <img
                                    src="https://preview.colorlib.com/theme/ogani/img/blog/xblog-2.jpg.pagespeed.ic.Wv9OXwE7iA.webp"
                                    alt=""
                                />
                            </div>
                            <div className={cx('blog__list__text')}>
                                <div className={cx('blog__interactive')}>
                                    <div className={cx('blog__date')}>
                                        <FontAwesomeIcon className={cx('date-icon')} icon={faCalendar} />
                                        <span>May 4,2019</span>
                                    </div>
                                    <div className={cx('blog__comment')}>
                                        <FontAwesomeIcon className={cx('date-icon')} icon={faComment} />
                                        <span>6</span>
                                    </div>
                                </div>
                                <h2 className={cx('blog__title')}>
                                    <Link className={cx('blog__title__link')} to="#">
                                        6 ways to prepare breakfast for 30
                                    </Link>
                                </h2>
                                <p className={cx('blog__description')}>
                                    Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat
                                </p>
                                <Link className={cx('read-more-btn')} href="#">
                                    READ MORE <FontAwesomeIcon className={cx('arrow-icon')} icon={faArrowRight} />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('blog__list__item')}>
                            <div className={cx('blog__list__image')}>
                                <img
                                    src="https://preview.colorlib.com/theme/ogani/img/blog/xblog-2.jpg.pagespeed.ic.Wv9OXwE7iA.webp"
                                    alt=""
                                />
                            </div>
                            <div className={cx('blog__list__text')}>
                                <div className={cx('blog__interactive')}>
                                    <div className={cx('blog__date')}>
                                        <FontAwesomeIcon className={cx('date-icon')} icon={faCalendar} />
                                        <span>May 4,2019</span>
                                    </div>
                                    <div className={cx('blog__comment')}>
                                        <FontAwesomeIcon className={cx('date-icon')} icon={faComment} />
                                        <span>6</span>
                                    </div>
                                </div>
                                <h2 className={cx('blog__title')}>
                                    <Link className={cx('blog__title__link')} to="#">
                                        6 ways to prepare breakfast for 30
                                    </Link>
                                </h2>
                                <p className={cx('blog__description')}>
                                    Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat
                                </p>
                                <Link className={cx('read-more-btn')} href="#">
                                    READ MORE <FontAwesomeIcon className={cx('arrow-icon')} icon={faArrowRight} />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('blog__list__item')}>
                            <div className={cx('blog__list__image')}>
                                <img
                                    src="https://preview.colorlib.com/theme/ogani/img/blog/xblog-2.jpg.pagespeed.ic.Wv9OXwE7iA.webp"
                                    alt=""
                                />
                            </div>
                            <div className={cx('blog__list__text')}>
                                <div className={cx('blog__interactive')}>
                                    <div className={cx('blog__date')}>
                                        <FontAwesomeIcon className={cx('date-icon')} icon={faCalendar} />
                                        <span>May 4,2019</span>
                                    </div>
                                    <div className={cx('blog__comment')}>
                                        <FontAwesomeIcon className={cx('date-icon')} icon={faComment} />
                                        <span>6</span>
                                    </div>
                                </div>
                                <h2 className={cx('blog__title')}>
                                    <Link className={cx('blog__title__link')} to="#">
                                        6 ways to prepare breakfast for 30
                                    </Link>
                                </h2>
                                <p className={cx('blog__description')}>
                                    Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat
                                </p>
                                <Link className={cx('read-more-btn')} href="#">
                                    READ MORE <FontAwesomeIcon className={cx('arrow-icon')} icon={faArrowRight} />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('blog__list__item')}>
                            <div className={cx('blog__list__image')}>
                                <img
                                    src="https://preview.colorlib.com/theme/ogani/img/blog/xblog-2.jpg.pagespeed.ic.Wv9OXwE7iA.webp"
                                    alt=""
                                />
                            </div>
                            <div className={cx('blog__list__text')}>
                                <div className={cx('blog__interactive')}>
                                    <div className={cx('blog__date')}>
                                        <FontAwesomeIcon className={cx('date-icon')} icon={faCalendar} />
                                        <span>May 4,2019</span>
                                    </div>
                                    <div className={cx('blog__comment')}>
                                        <FontAwesomeIcon className={cx('date-icon')} icon={faComment} />
                                        <span>6</span>
                                    </div>
                                </div>
                                <h2 className={cx('blog__title')}>
                                    <Link className={cx('blog__title__link')} to="#">
                                        6 ways to prepare breakfast for 30
                                    </Link>
                                </h2>
                                <p className={cx('blog__description')}>
                                    Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat
                                </p>
                                <Link className={cx('read-more-btn')} href="#">
                                    READ MORE <FontAwesomeIcon className={cx('arrow-icon')} icon={faArrowRight} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogContent;
