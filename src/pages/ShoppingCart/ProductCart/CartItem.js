import classNames from 'classnames/bind';
import { useCart } from '~/store/Cart';
import styles from './ProductCart.module.scss';

const cx = classNames.bind(styles);

function CartItem({ product, index, handleRemoveItem }) {
    const { dispatch } = useCart();

    const handleDecrease = () => {
        dispatch({ type: 'DECREASE', payload: product.id });
    };

    const handleIndecrease = () => {
        dispatch({ type: 'INDECREASE', payload: product.id });
    };

    const handleChangeQuantity = (e) => {
        const quantity = +e.target.value;
        dispatch({
            type: 'CHANGE_QUANTITY',
            payload: {
                id: product.id,
                quantity,
            },
        });
    };

    return (
        <tr>
            <td className={cx('shopping-cart__item')}>
                <img src={product.img} alt={product.title} />
                <h5>{product.title}</h5>
            </td>
            <td className={cx('shopping-cart__price')}> {product.price} </td>
            <td className={cx('shopping-cart__quantity')}>
                <div className={cx('shopping-cart__quantity__container')}>
                    <span className={cx('minus-btn')} onClick={handleDecrease}>
                        -
                    </span>
                    <input min={1} value={product.quantity} onChange={handleChangeQuantity} />
                    <span className={cx('plus-btn')} onClick={handleIndecrease}>
                        +
                    </span>
                </div>
            </td>
            <td className={cx('shopping-cart__total')}> {(product.quantity * product.price).toFixed(2)} </td>
            <td className={cx('shopping-cart__remove')}>
                <button className={cx('remove-btn')} onClick={() => handleRemoveItem(index)}>
                    Remove
                </button>
            </td>
        </tr>
    );
}

export default CartItem;
