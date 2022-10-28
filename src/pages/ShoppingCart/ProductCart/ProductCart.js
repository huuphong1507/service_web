import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './ProductCart.module.scss';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '~/store/Cart';
import CartItem from './CartItem';
import config from '~/config';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ProductCart() {
    const [totalPrice, setTotalPrice] = useState([]);

    const { state, dispatch } = useCart();

    useEffect(() => {
        setTotalPrice(state.reduce((total, acc) => total + acc.price * acc.quantity, 0).toFixed(2));
    }, [state]);

    const handleRemoveItem = (index) => {
        dispatch({ type: 'REMOVE', index });
    };

    return (
        <section className={cx('shopping-cart')}>
            {state.length === 0 && (
                <div className={cx('shopping-cart-empty')}>
                    <h1>Cart is empty.</h1>
                    <NavLink
                        className={(nav) => cx('go-shopping-link', { active: nav.isActive })}
                        to={config.routes.home}
                        end
                    >
                        Go Shopping
                    </NavLink>
                </div>
            )}

            {state.length !== 0 && (
                <div className={cx('shopping-cart-container')}>
                    <div className={cx('shopping-cart-top')}>
                        <table>
                            <thead>
                                <tr>
                                    <th className={cx('shopping-cart__products')}>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.map((item, index) => (
                                    <CartItem
                                        key={index}
                                        product={item}
                                        index={index}
                                        handleRemoveItem={handleRemoveItem}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className={cx('shopping-cart-bottom')}>
                        <div className={cx('shopping-cart__btns')}>
                            <Link className={cx('primary-cart-btn')} href="#">
                                CONTINUE SHOPPING
                            </Link>
                            <Link className={cx('primary-cart-btn', 'cart-btn-right')} href="#">
                                <FontAwesomeIcon className={cx('cart-btn-right__icon')} icon={faSpinner} />
                                Upadate Cart
                            </Link>
                        </div>
                        <div className={cx('shopping-cart__content')}>
                            <div className={cx('shopping-cart__discount')}>
                                <h2>Discount Codes</h2>
                                <input type="text" placeholder="Enter your coupon code" />
                                <button className={cx('apply-discount-btn')}>APPLY COUPON</button>
                            </div>
                            <div className={cx('shopping-cart__checkout')}>
                                <div className={cx('shopping-cart__content__container')}>
                                    <h3>Cart Total</h3>
                                    <div className={cx('shopping-cart__subtotal')}>
                                        <h5>Total</h5>
                                        <span>
                                            <strong>{totalPrice}</strong>
                                        </span>
                                    </div>
                                    <div className={cx('checkout__proceed')}>
                                        <Link className={cx('checkout__btn')} href="#">
                                            PROCEED TO CHECKOUT
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ProductCart;
