import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './CategoriesWithHero.module.scss';

const cx = classNames.bind(styles);

function BannerDefault() {
    return (
        <div className={cx('hero__item')}>
            <div className={cx('hero__item__text')}>
                <span>FRUIT FRESH</span>
                <h2>
                    Vegetable <br />
                    100% Organic
                </h2>
                <p>Free Pickup and Delivery Available</p>
                <Link to="#" className={cx('primary-btn')}>
                    SHOP NOW
                </Link>
            </div>
        </div>
    );
}

export default BannerDefault;
