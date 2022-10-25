import classNames from 'classnames/bind';
import styles from './Shop.module.scss';

import BannerShop from '~/components/Layout/components/BannerShop/BannerShop';
import CategoriesWithHero from '~/components/Layout/components/CategoriesWithHero/CategoriesWithHero';

const cx = classNames.bind(styles);

function Shop() {
    return (
        <>
            <CategoriesWithHero>
                <BannerShop />
            </CategoriesWithHero>
            <div className={cx('wrapper')}>
                <main className="content">
                    <h2>Shop</h2>
                </main>
            </div>
        </>
    );
}

export default Shop;
