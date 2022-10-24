import classNames from 'classnames/bind';
import styles from './ShoppingCart.module.scss';

import CategoriesWithHero from '~/components/Layout/components/CategoriesWithHero/CategoriesWithHero';
import BannerCart from '~/components/Layout/components/BannerCart/BannerCart';

const cx = classNames.bind(styles);

function ShoppingCart() {
    return (
        <>
            <CategoriesWithHero>
                <BannerCart />
            </CategoriesWithHero>
            <div className={cx('wrapper')}>
                <main className="content">
                    <h1>Hello</h1>
                </main>
            </div>
        </>
    );
}

export default ShoppingCart;
