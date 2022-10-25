import { NavLink } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './BannerShop.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function BannerShop() {
    return (
        <div className={cx('hero__item')}>
            <div className={cx('hero-container')}>
                <div className={cx('hero__item__text')}>
                    <h2>Organi Shop</h2>
                    <div className={cx('hero__item__options')}>
                        <NavLink
                            className={(nav) => cx('hero__item__options__link', { active: nav.isActive })}
                            to={config.routes.home}
                            end
                        >
                            Home
                        </NavLink>
                        <span>Shop</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerShop;
