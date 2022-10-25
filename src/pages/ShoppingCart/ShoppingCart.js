import classNames from 'classnames/bind';
import styles from './ShoppingCart.module.scss';

import CategoriesWithHero from '~/components/Layout/components/CategoriesWithHero/CategoriesWithHero';
import BannerCart from '~/components/Layout/components/BannerCart/BannerCart';
import ProductCart from './ProductCart/ProductCart';

const cx = classNames.bind(styles);

function ShoppingCart() {
    return (
        <>
            <CategoriesWithHero>
                <BannerCart />
            </CategoriesWithHero>
            <div className={cx('wrapper')}>
                <main className="content">
                    <ProductCart />
                </main>
            </div>
        </>
    );
}

export default ShoppingCart;
