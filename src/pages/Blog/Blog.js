import classNames from 'classnames/bind';
import styles from './Blog.module.scss';

import BannerBlog from '~/components/Layout/components/BannerBlog/BannerBlog';
import CategoriesWithHero from '~/components/Layout/components/CategoriesWithHero/CategoriesWithHero';
import BlogContent from './BlogContent/BlogContent';

const cx = classNames.bind(styles);

function Blog() {
    return (
        <>
            <CategoriesWithHero>
                <BannerBlog />
            </CategoriesWithHero>
            <div className={cx('wrapper')}>
                <main className="content">
                    <BlogContent />
                </main>
            </div>
        </>
    );
}

export default Blog;
