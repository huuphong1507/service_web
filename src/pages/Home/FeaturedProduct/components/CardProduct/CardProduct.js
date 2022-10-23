import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from '../../FeaturedProduct.module.scss';
import { faCartShopping, faHeart, faRepeat } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CardProduct({ product }) {
    return (
        <div className={cx('featured-list__item')}>
            <div className={cx('featured-image')}>
                <img src={product.img} alt={product.title} />
                <ul className={cx('featured-image__menu')}>
                    <li className={cx('featured-image__menu-item')}>
                        <Link href="#" className={cx('featured-image__menu-link')}>
                            <FontAwesomeIcon icon={faHeart} />
                        </Link>
                    </li>
                    <li className={cx('featured-image__menu-item')}>
                        <Link href="#" className={cx('featured-image__menu-link')}>
                            <FontAwesomeIcon icon={faRepeat} />
                        </Link>
                    </li>
                    <li className={cx('featured-image__menu-item')}>
                        <Link href="#" className={cx('featured-image__menu-link')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={cx('featured__text')}>
                <h6>
                    <Link className={cx('featured__text__link')} href="#">
                        {product.title}
                    </Link>
                </h6>
                <h5>
                    <strong>${product.price}</strong>
                </h5>
            </div>
        </div>
    );
}

export default CardProduct;
