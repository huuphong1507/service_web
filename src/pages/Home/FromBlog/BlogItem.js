import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';
import styles from './FromBlog.module.scss';
import { faCalendar, faComment } from '@fortawesome/free-regular-svg-icons';
const dayjs = require('dayjs');

const cx = classNames.bind(styles);

function BlogItem({ blog }) {
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className={cx('blog-item')}
        >
            <div className={cx('blog-image')}>
                <img src={blog.image} alt={blog.title} />
            </div>
            <div className={cx('blog-content')}>
                <div className={cx('blog-content__icon')}>
                    <p className={cx('icon-calendar')}>
                        <FontAwesomeIcon icon={faCalendar} /> {dayjs(blog.createAt).format('MMMM D, YYYY')}
                    </p>
                    <p className={cx('icon-comment')}>
                        <FontAwesomeIcon icon={faComment} /> {blog.comments}
                    </p>
                </div>
                <h5 className={cx('blog-title')}>
                    <Link className={cx('blog-title__link')} to="#">
                        {blog.title}
                    </Link>
                </h5>
                <p className={cx('blog-text')}>{blog.content}</p>
            </div>
        </motion.div>
    );
}

export default BlogItem;
