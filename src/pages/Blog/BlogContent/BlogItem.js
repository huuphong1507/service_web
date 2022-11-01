import classNames from 'classnames/bind';
import styles from './BlogContent.module.scss';
import { faCalendar, faComment } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function BlogItem({ blog }) {
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className={cx('blog__list__item')}
        >
            <div className={cx('blog__list__image')}>
                <img src={blog.image} alt={blog.title} />
            </div>
            <div className={cx('blog__list__text')}>
                <div className={cx('blog__interactive')}>
                    <div className={cx('blog__date')}>
                        <FontAwesomeIcon className={cx('date-icon')} icon={faCalendar} />
                        <span>{dayjs(blog.createAt).format('MMMM D, YYYY')}</span>
                    </div>
                    <div className={cx('blog__comment')}>
                        <FontAwesomeIcon className={cx('date-icon')} icon={faComment} />
                        <span>{blog.comments}</span>
                    </div>
                </div>
                <h2 className={cx('blog__title')}>
                    <Link className={cx('blog__title__link')} to="#">
                        {blog.title}
                    </Link>
                </h2>
                <p className={cx('blog__description')}>{blog.content}</p>
                <Link className={cx('read-more-btn')} href="#">
                    READ MORE <FontAwesomeIcon className={cx('arrow-icon')} icon={faArrowRight} />
                </Link>
            </div>
        </motion.div>
    );
}

export default BlogItem;
