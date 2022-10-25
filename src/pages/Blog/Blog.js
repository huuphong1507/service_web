import classNames from 'classnames/bind';
import styles from './Blog.module.scss';

import BannerBlog from '~/components/Layout/components/BannerBlog/BannerBlog';
import CategoriesWithHero from '~/components/Layout/components/CategoriesWithHero/CategoriesWithHero';

const cx = classNames.bind(styles);

function Blog() {
    return (
        <>
            <CategoriesWithHero>
                <BannerBlog />
            </CategoriesWithHero>
            <div className={cx('wrapper')}>
                <main className="content">
                    <h2>Blog</h2>
                </main>
            </div>
        </>
    );
}

export default Blog;
