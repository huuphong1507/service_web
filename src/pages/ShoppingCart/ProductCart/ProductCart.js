import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './ProductCart.module.scss';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProductCart() {
    return (
        <section className={cx('shopping-cart')}>
            <div className={cx('shopping-cart-container')}>
                <div className={cx('shopping-cart-top')}>
                    <table>
                        <thead>
                            <tr>
                                <th className={cx('shopping-cart__products')}>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={cx('shopping-cart__item')}>
                                    <img
                                        src="data:image/webp;base64,UklGRsAFAABXRUJQVlA4ILQFAADwGgCdASplAGQAPm0yk0ekIqGhKTpJYIANiUAa2wKqBeor4/yAdTUU2FLts/Mz0Yt543mjIqtpmIf2bnKYp7SPrzjQZF/EBN1cpqtBqvkJ1Bulv+3ZR4AWWsoLiizDbSox7BfwG1VwRpQjIeKW7qJfPlLLdnNdK8f8BxNaGE77sW/LVy/VA8b2VUWhhkS6vxUVEJtlPV/hoUkHrBsXzvReLbln32R4HyFfJVqWFm1gwNQthuge/gtJeRdiI3guciXqDCiLlnrUg/zd8boIalxq4i712Ctr26Mex5rrpCqAAAD+/7atRYAL94kaBPw7c+IBQdw8NXJhgBO4bFJv+joVe/vi3xNUdwTsa80yaDkuZ2cT2B7EHz3zrWk/Q8h4cGKB+tTM3e+HUHEH+Y8SCzqGxk1Um/VKJYQDNn7hfnCX3bTz6orXcdxGxEgFfN1Ur/8kRroNM2jwsNxOHLmzX6wByd/SOY6GT/bT/MloOvy6KweQQwQm5C28Kavzgyqffa2KQWZo9UtNwg/vb7PkP7yKU9I36bHlOPc3lWRur1RALsl5Te9gBj2AuCt83ATpvIUF2kSa2NXrzVAJU76immVd6sr7fTZ1RGK4EEHv/yfhXSPLq18DkO4lXOzADs1cZf2+PQ97pUHicuG+PWOXuj2VMRbj/ksPsMMUgWWDMMfVzdyWOIcXpiU5qcHMQyuOWZRFCbM1jkHTCJa9X8qVG/57VTiy+0z8FmeLwr8EAyXEnxmq6sai4k+GFdCLvyFEpN3Yr14Wl0215jM/JtPtvFSODNTOdUDMfDAZIIMEc6Zy/7pXnlAfAQIJToqixRpvuF8MmyvYVZpcHrdfDfT+RHvbs9uXb4G/Jplk7m0mZHFX+ELmr0q6doDWigTk4BeyxnjByvNejl2g56LD9TNosfT0FbZgalzUcLUhhTprf6kwc9r403YxlVVgpjbxfYzEkCCZ2vexZlaBe6bweknREZsXGjgHUYe+lPZwlNmxC37gKcM2ucZk1atZu+ZDHQ+xgkArt+seyTiwE3WsxpSzDksp+ogfhtTsyrTsJrWy2GZE/PD21l3MMiIedRSMtElqDrW47Mb3r70C3vTkHgvKUoKc8ygG8j5oXPcpoTUz5ZmXTTQuKrw/xSFFpXN3Nz6OrB3jlgYwT9gV/cMXLGzhihfAFly6pOGMwwzCtcR4YnatYsFjQoiz/ySg4qVTJjF5qCpKI95fHjCmdmRuR6QnrWeTeHKwG+TfJAhYvvZRv5l0H6wtBbRoEW724BjDa8vaTGjNCEQ62tbdcvYvo0+v+JYdP4uE13awjB5Uo18C8mRY/oeeUk4HMTxje71V9THLbNaRQ7SQmhdzcTaVoiWGYfcSQYqUl2j466DG7E/CinNqoXrvF2PqM+iQtO8yJvrj2tetkckH6tdZ2TDMLoe0x9GbXXy03Wjsi+Sg8tJbMbeUyCfl5VWpJ2imF49IkrVG/17ONd525elcjGtCC2DjKQEbXz0MtWX8JaCj3mo44GkAUFbCNHVZWksVTipQJXjl1Gp/Lf3feW64DW51omcpUhNAPWdj5wuZ7IHKYE/aE8jjWWCNtX0gtH0dmUUVWVbJxlbegBvEtbDt1ycGjOH7kMIEZ8B81U+f+Z7fZbuAsvHNZFKkodqAGV9/Mo+o7AYnilvYUf1wC09By3a6pF8coHLZO40Uf6b9w77fhYQ0kkk/mj+lKPi/253yRBDpVBmWq4PCsIZT/7TYJPVInezotRzE7j8aLY0XQ3RiMtT+9swvZ/ZaHU68/2uBa0JAxbHk3MDwx68hQTlL8mIdW2WpK3ntZ6nTRx+NkKNjbTmFx5Mw6Yv+cUp5WgWHV3r/guVumDscoCNw1cEiBE3p7LOabJvU6bZPQr+pvJVW5/RbSsha7QvF252VnYKN7bEAQyMi6KgdbBApUJESf7Tg1RTpU0AAAAAAAA=="
                                        alt=""
                                    />
                                    <h5>Vegetable’s Package</h5>
                                </td>
                                <td className={cx('shopping-cart__price')}> $55.00 </td>
                                <td className={cx('shopping-cart__quantity')}>
                                    <div className={cx('shopping-cart__quantity__container')}>
                                        <span className={cx('minus-btn')}>-</span>
                                        <input type="text" />
                                        <span className={cx('plus-btn')}>+</span>
                                    </div>
                                </td>
                                <td className={cx('shopping-cart__total')}> $110.00 </td>
                            </tr>
                            <tr>
                                <td className={cx('shopping-cart__item')}>
                                    <img
                                        src="data:image/webp;base64,UklGRsAFAABXRUJQVlA4ILQFAADwGgCdASplAGQAPm0yk0ekIqGhKTpJYIANiUAa2wKqBeor4/yAdTUU2FLts/Mz0Yt543mjIqtpmIf2bnKYp7SPrzjQZF/EBN1cpqtBqvkJ1Bulv+3ZR4AWWsoLiizDbSox7BfwG1VwRpQjIeKW7qJfPlLLdnNdK8f8BxNaGE77sW/LVy/VA8b2VUWhhkS6vxUVEJtlPV/hoUkHrBsXzvReLbln32R4HyFfJVqWFm1gwNQthuge/gtJeRdiI3guciXqDCiLlnrUg/zd8boIalxq4i712Ctr26Mex5rrpCqAAAD+/7atRYAL94kaBPw7c+IBQdw8NXJhgBO4bFJv+joVe/vi3xNUdwTsa80yaDkuZ2cT2B7EHz3zrWk/Q8h4cGKB+tTM3e+HUHEH+Y8SCzqGxk1Um/VKJYQDNn7hfnCX3bTz6orXcdxGxEgFfN1Ur/8kRroNM2jwsNxOHLmzX6wByd/SOY6GT/bT/MloOvy6KweQQwQm5C28Kavzgyqffa2KQWZo9UtNwg/vb7PkP7yKU9I36bHlOPc3lWRur1RALsl5Te9gBj2AuCt83ATpvIUF2kSa2NXrzVAJU76immVd6sr7fTZ1RGK4EEHv/yfhXSPLq18DkO4lXOzADs1cZf2+PQ97pUHicuG+PWOXuj2VMRbj/ksPsMMUgWWDMMfVzdyWOIcXpiU5qcHMQyuOWZRFCbM1jkHTCJa9X8qVG/57VTiy+0z8FmeLwr8EAyXEnxmq6sai4k+GFdCLvyFEpN3Yr14Wl0215jM/JtPtvFSODNTOdUDMfDAZIIMEc6Zy/7pXnlAfAQIJToqixRpvuF8MmyvYVZpcHrdfDfT+RHvbs9uXb4G/Jplk7m0mZHFX+ELmr0q6doDWigTk4BeyxnjByvNejl2g56LD9TNosfT0FbZgalzUcLUhhTprf6kwc9r403YxlVVgpjbxfYzEkCCZ2vexZlaBe6bweknREZsXGjgHUYe+lPZwlNmxC37gKcM2ucZk1atZu+ZDHQ+xgkArt+seyTiwE3WsxpSzDksp+ogfhtTsyrTsJrWy2GZE/PD21l3MMiIedRSMtElqDrW47Mb3r70C3vTkHgvKUoKc8ygG8j5oXPcpoTUz5ZmXTTQuKrw/xSFFpXN3Nz6OrB3jlgYwT9gV/cMXLGzhihfAFly6pOGMwwzCtcR4YnatYsFjQoiz/ySg4qVTJjF5qCpKI95fHjCmdmRuR6QnrWeTeHKwG+TfJAhYvvZRv5l0H6wtBbRoEW724BjDa8vaTGjNCEQ62tbdcvYvo0+v+JYdP4uE13awjB5Uo18C8mRY/oeeUk4HMTxje71V9THLbNaRQ7SQmhdzcTaVoiWGYfcSQYqUl2j466DG7E/CinNqoXrvF2PqM+iQtO8yJvrj2tetkckH6tdZ2TDMLoe0x9GbXXy03Wjsi+Sg8tJbMbeUyCfl5VWpJ2imF49IkrVG/17ONd525elcjGtCC2DjKQEbXz0MtWX8JaCj3mo44GkAUFbCNHVZWksVTipQJXjl1Gp/Lf3feW64DW51omcpUhNAPWdj5wuZ7IHKYE/aE8jjWWCNtX0gtH0dmUUVWVbJxlbegBvEtbDt1ycGjOH7kMIEZ8B81U+f+Z7fZbuAsvHNZFKkodqAGV9/Mo+o7AYnilvYUf1wC09By3a6pF8coHLZO40Uf6b9w77fhYQ0kkk/mj+lKPi/253yRBDpVBmWq4PCsIZT/7TYJPVInezotRzE7j8aLY0XQ3RiMtT+9swvZ/ZaHU68/2uBa0JAxbHk3MDwx68hQTlL8mIdW2WpK3ntZ6nTRx+NkKNjbTmFx5Mw6Yv+cUp5WgWHV3r/guVumDscoCNw1cEiBE3p7LOabJvU6bZPQr+pvJVW5/RbSsha7QvF252VnYKN7bEAQyMi6KgdbBApUJESf7Tg1RTpU0AAAAAAAA=="
                                        alt=""
                                    />
                                    <h5>Vegetable’s Package</h5>
                                </td>
                                <td className={cx('shopping-cart__price')}> $55.00 </td>
                                <td className={cx('shopping-cart__quantity')}>
                                    <div className={cx('shopping-cart__quantity__container')}>
                                        <span className={cx('minus-btn')}>-</span>
                                        <input type="text" />
                                        <span className={cx('plus-btn')}>+</span>
                                    </div>
                                </td>
                                <td className={cx('shopping-cart__total')}> $110.00 </td>
                            </tr>
                            <tr>
                                <td className={cx('shopping-cart__item')}>
                                    <img
                                        src="data:image/webp;base64,UklGRsAFAABXRUJQVlA4ILQFAADwGgCdASplAGQAPm0yk0ekIqGhKTpJYIANiUAa2wKqBeor4/yAdTUU2FLts/Mz0Yt543mjIqtpmIf2bnKYp7SPrzjQZF/EBN1cpqtBqvkJ1Bulv+3ZR4AWWsoLiizDbSox7BfwG1VwRpQjIeKW7qJfPlLLdnNdK8f8BxNaGE77sW/LVy/VA8b2VUWhhkS6vxUVEJtlPV/hoUkHrBsXzvReLbln32R4HyFfJVqWFm1gwNQthuge/gtJeRdiI3guciXqDCiLlnrUg/zd8boIalxq4i712Ctr26Mex5rrpCqAAAD+/7atRYAL94kaBPw7c+IBQdw8NXJhgBO4bFJv+joVe/vi3xNUdwTsa80yaDkuZ2cT2B7EHz3zrWk/Q8h4cGKB+tTM3e+HUHEH+Y8SCzqGxk1Um/VKJYQDNn7hfnCX3bTz6orXcdxGxEgFfN1Ur/8kRroNM2jwsNxOHLmzX6wByd/SOY6GT/bT/MloOvy6KweQQwQm5C28Kavzgyqffa2KQWZo9UtNwg/vb7PkP7yKU9I36bHlOPc3lWRur1RALsl5Te9gBj2AuCt83ATpvIUF2kSa2NXrzVAJU76immVd6sr7fTZ1RGK4EEHv/yfhXSPLq18DkO4lXOzADs1cZf2+PQ97pUHicuG+PWOXuj2VMRbj/ksPsMMUgWWDMMfVzdyWOIcXpiU5qcHMQyuOWZRFCbM1jkHTCJa9X8qVG/57VTiy+0z8FmeLwr8EAyXEnxmq6sai4k+GFdCLvyFEpN3Yr14Wl0215jM/JtPtvFSODNTOdUDMfDAZIIMEc6Zy/7pXnlAfAQIJToqixRpvuF8MmyvYVZpcHrdfDfT+RHvbs9uXb4G/Jplk7m0mZHFX+ELmr0q6doDWigTk4BeyxnjByvNejl2g56LD9TNosfT0FbZgalzUcLUhhTprf6kwc9r403YxlVVgpjbxfYzEkCCZ2vexZlaBe6bweknREZsXGjgHUYe+lPZwlNmxC37gKcM2ucZk1atZu+ZDHQ+xgkArt+seyTiwE3WsxpSzDksp+ogfhtTsyrTsJrWy2GZE/PD21l3MMiIedRSMtElqDrW47Mb3r70C3vTkHgvKUoKc8ygG8j5oXPcpoTUz5ZmXTTQuKrw/xSFFpXN3Nz6OrB3jlgYwT9gV/cMXLGzhihfAFly6pOGMwwzCtcR4YnatYsFjQoiz/ySg4qVTJjF5qCpKI95fHjCmdmRuR6QnrWeTeHKwG+TfJAhYvvZRv5l0H6wtBbRoEW724BjDa8vaTGjNCEQ62tbdcvYvo0+v+JYdP4uE13awjB5Uo18C8mRY/oeeUk4HMTxje71V9THLbNaRQ7SQmhdzcTaVoiWGYfcSQYqUl2j466DG7E/CinNqoXrvF2PqM+iQtO8yJvrj2tetkckH6tdZ2TDMLoe0x9GbXXy03Wjsi+Sg8tJbMbeUyCfl5VWpJ2imF49IkrVG/17ONd525elcjGtCC2DjKQEbXz0MtWX8JaCj3mo44GkAUFbCNHVZWksVTipQJXjl1Gp/Lf3feW64DW51omcpUhNAPWdj5wuZ7IHKYE/aE8jjWWCNtX0gtH0dmUUVWVbJxlbegBvEtbDt1ycGjOH7kMIEZ8B81U+f+Z7fZbuAsvHNZFKkodqAGV9/Mo+o7AYnilvYUf1wC09By3a6pF8coHLZO40Uf6b9w77fhYQ0kkk/mj+lKPi/253yRBDpVBmWq4PCsIZT/7TYJPVInezotRzE7j8aLY0XQ3RiMtT+9swvZ/ZaHU68/2uBa0JAxbHk3MDwx68hQTlL8mIdW2WpK3ntZ6nTRx+NkKNjbTmFx5Mw6Yv+cUp5WgWHV3r/guVumDscoCNw1cEiBE3p7LOabJvU6bZPQr+pvJVW5/RbSsha7QvF252VnYKN7bEAQyMi6KgdbBApUJESf7Tg1RTpU0AAAAAAAA=="
                                        alt=""
                                    />
                                    <h5>Vegetable’s Package</h5>
                                </td>
                                <td className={cx('shopping-cart__price')}> $55.00 </td>
                                <td className={cx('shopping-cart__quantity')}>
                                    <div className={cx('shopping-cart__quantity__container')}>
                                        <span className={cx('minus-btn')}>-</span>
                                        <input type="text" />
                                        <span className={cx('plus-btn')}>+</span>
                                    </div>
                                </td>
                                <td className={cx('shopping-cart__total')}> $110.00 </td>
                            </tr>
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
                                    <h4>Subtotal</h4>
                                    <span>
                                        <strong>$454.98</strong>
                                    </span>
                                </div>
                                <div className={cx('shopping-cart__subtotal')}>
                                    <h5>Total</h5>
                                    <span>
                                        <strong>$454.98</strong>
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
        </section>
    );
}

export default ProductCart;
