import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './FromBlog.module.scss';
import { faCalendar, faComment } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function FromBlog() {
    return (
        <section className={cx('blog')}>
            <div className={cx('blog-container')}>
                <h2 className={cx('blog-heading')}>From The Blog</h2>
                <div className={cx('blog-list')}>
                    <div className={cx('blog-item')}>
                        <div className={cx('blog-image')}>
                            <img
                                src="https://preview.colorlib.com/theme/ogani/img/blog/xblog-1.jpg.pagespeed.ic.b6c8D8etPg.webp"
                                alt=""
                            />
                        </div>
                        <div className={cx('blog-content')}>
                            <div className={cx('blog-content__icon')}>
                                <p className={cx('icon-calendar')}>
                                    <FontAwesomeIcon icon={faCalendar} /> May 4,2019
                                </p>
                                <p className={cx('icon-comment')}>
                                    <FontAwesomeIcon icon={faComment} /> 5
                                </p>
                            </div>
                            <h5 className={cx('blog-title')}>
                                <Link className={cx('blog-title__link')} href="#">
                                    Cooking tips make cooking simple
                                </Link>
                            </h5>
                            <p className={cx('blog-text')}>
                                Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat
                            </p>
                        </div>
                    </div>
                    <div className={cx('blog-item')}>
                        <div className={cx('blog-image')}>
                            <img
                                src="https://preview.colorlib.com/theme/ogani/img/blog/xblog-2.jpg.pagespeed.ic.Wv9OXwE7iA.webp"
                                alt=""
                            />
                        </div>
                        <div className={cx('blog-content')}>
                            <div className={cx('blog-content__icon')}>
                                <p className={cx('icon-calendar')}>
                                    <FontAwesomeIcon icon={faCalendar} /> May 4,2019
                                </p>
                                <p className={cx('icon-comment')}>
                                    <FontAwesomeIcon icon={faComment} /> 5
                                </p>
                            </div>
                            <h5 className={cx('blog-title')}>
                                <Link className={cx('blog-title__link')} href="#">
                                    6 ways to prepare breakfast for 30
                                </Link>
                            </h5>
                            <p className={cx('blog-text')}>
                                Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat
                            </p>
                        </div>
                    </div>
                    <div className={cx('blog-item')}>
                        <div className={cx('blog-image')}>
                            <img
                                src="https://preview.colorlib.com/theme/ogani/img/blog/xblog-3.jpg.pagespeed.ic.ruf-U0Iaxk.webp"
                                alt=""
                            />
                        </div>
                        <div className={cx('blog-content')}>
                            <div className={cx('blog-content__icon')}>
                                <p className={cx('icon-calendar')}>
                                    <FontAwesomeIcon icon={faCalendar} /> May 4,2019
                                </p>
                                <p className={cx('icon-comment')}>
                                    <FontAwesomeIcon icon={faComment} /> 5
                                </p>
                            </div>
                            <h5 className={cx('blog-title')}>
                                <Link className={cx('blog-title__link')} href="#">
                                    Visit the clean farm in the US
                                </Link>
                            </h5>
                            <p className={cx('blog-text')}>
                                Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FromBlog;
