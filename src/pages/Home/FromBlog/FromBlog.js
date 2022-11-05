import classNames from 'classnames/bind';
import styles from './FromBlog.module.scss';
import BlogItem from './BlogItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import PaginationFromBlog from '~/components/Layout/components/PaginationFromBlog/PaginationFromBlog';

const cx = classNames.bind(styles);

function FromBlog({ blogs }) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(blogs.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(blogs.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, blogs]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blogs.length;
        setItemOffset(newOffset);
    };

    return (
        <section className={cx('blog')}>
            <div className={cx('blog-container')}>
                <h2 className={cx('blog-heading')}>From The Blog</h2>
                <motion.div layout className={cx('blog-list')}>
                    <AnimatePresence>
                        {currentItems.map((blog) => (
                            <BlogItem
                                key={blog.blogId}
                                blog={blog}
                                pageCount={pageCount}
                                handlePageClick={handlePageClick}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
                <PaginationFromBlog pageCount={pageCount} handlePageClick={handlePageClick} />
            </div>
        </section>
    );
}

export default FromBlog;
