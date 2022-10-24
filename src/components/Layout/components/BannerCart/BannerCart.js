import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './BannerCart.module.scss';

const cx = classNames.bind(styles);

function BannerCart() {
    return (
        <div className={cx('hero__item')}>
            <div className={cx('hero-container')}>
                <div className={cx('hero__item__text')}>
                    <h2>Shopping Cart</h2>
                    <div className={cx('hero__item__options')}>
                        <Link className={cx('hero__item__options__link')} href="#">
                            Home
                        </Link>
                        <span>Shopping Cart</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerCart;
