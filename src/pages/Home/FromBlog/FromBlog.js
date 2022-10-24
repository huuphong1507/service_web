import classNames from 'classnames/bind';
import styles from './FromBlog.module.scss';
import BlogItem from './BlogItem';

const cx = classNames.bind(styles);

function FromBlog({ blogs }) {
    return (
        <section className={cx('blog')}>
            <div className={cx('blog-container')}>
                <h2 className={cx('blog-heading')}>From The Blog</h2>
                <div className={cx('blog-list')}>
                    {blogs.map((blog) => (
                        <BlogItem key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FromBlog;
