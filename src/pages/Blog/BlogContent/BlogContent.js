import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames/bind';
import PaginationBlogs from '~/components/Layout/components/PaginationBlogs/PaginationBlogs';
import styles from './BlogContent.module.scss';
import BlogItem from './BlogItem';
import BlogSidebar from './BlogSidebar';

const cx = classNames.bind(styles);

function BlogContent({ blogs, pageCount, handlePageClick }) {
    return (
        <section className={cx('section__blog')}>
            <div className={cx('blog__container')}>
                <div className={cx('blog__container__content')}>
                    <BlogSidebar />
                    <motion.div className={cx('blog__list')}>
                        <AnimatePresence>
                            {blogs.map((blog) => (
                                <BlogItem key={blog.blogId} blog={blog} />
                            ))}
                        </AnimatePresence>
                        <PaginationBlogs pageCount={pageCount} handlePageClick={handlePageClick} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default BlogContent;
