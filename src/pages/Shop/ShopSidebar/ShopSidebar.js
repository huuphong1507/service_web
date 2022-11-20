import Slider from 'rc-slider';
import classNames from 'classnames/bind';
import styles from './ShopSidebar.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);

const departments = [
    {
        id: 1,
        name: 'Fresh Meat',
    },
    {
        id: 2,
        name: 'Vegetables',
    },
    {
        id: 3,
        name: 'Fruit & Nut Gifts',
    },
    {
        id: 4,
        name: 'Fresh Berries',
    },
    {
        id: 5,
        name: 'Ocean Foods',
    },
    {
        id: 6,
        name: 'Butter & Eggs',
    },
    {
        id: 7,
        name: 'Fastfood',
    },
];

const colors = [
    {
        id: 1,
        text: 'white',
    },
    {
        id: 2,
        text: 'yellow',
    },
    {
        id: 3,
        text: 'red',
    },
    {
        id: 4,
        text: 'black',
    },
    {
        id: 5,
        text: 'blue',
    },
    {
        id: 6,
        text: 'green',
    },
];

const sizes = [
    {
        id: 1,
        popularSize: 'Large',
    },
    {
        id: 2,
        popularSize: 'Medium',
    },
    {
        id: 3,
        popularSize: 'Small',
    },
    {
        id: 4,
        popularSize: 'Tiny',
    },
];

function ShopSidebar({ filtersProduct, setFiltersProduct, rangeSelector }) {
    const [activeId, setActiveId] = useState();

    const handleHideActive = (size) => {
        setFiltersProduct((prev) => {
            return {
                ...prev,
                size: size.popularSize,
            };
        });
        setActiveId((prev) => {
            if (prev === size.id) return undefined;
            else return size.id;
        });
    };

    return (
        <div className={cx('shop__sidebar')}>
            <div className={cx('sidebar__department')}>
                <h1 className={cx('sidebar__heading')}>Department</h1>
                <ul className={cx('menu')}>
                    {departments.map((department) => (
                        <li key={department.id} className={cx('menu-item')}>
                            <Link to="#" className={cx('menu-link')}>
                                {department.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={cx('sidebar__price')}>
                <h1 className={cx('sidebar__heading')}>Price</h1>
                <div className={cx('price__wrapper')}>
                    <Slider
                        range
                        allowCross={false}
                        min={0}
                        max={600}
                        onChange={rangeSelector}
                        trackStyle={[{ backgroundColor: '#dd2222' }]}
                        defaultValue={filtersProduct.price}
                    />
                </div>
                <div className={cx('price__text')}>
                    <span className={cx('price__text__text')}>
                        $ {filtersProduct.price[0]} - $ {filtersProduct.price[1]}
                    </span>
                </div>
            </div>
            <div className={cx('sidebar__colors')}>
                <h1 className={cx('sidebar__heading')}>Colors</h1>
                <div className={cx('sidebar__colors__options')}>
                    {colors.map((color) => (
                        <div key={color.id} className={cx('colors__item')}>
                            <span className={cx(`colors__${color.text}`)}></span>
                            <span className={cx('colors__text')}>
                                {color.text.charAt(0).toUpperCase() + color.text.slice(1)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx('sidebar__size')}>
                <h1 className={cx('sidebar__heading')}>Popular Size</h1>
                <div className={cx('sidebar__size__options')}>
                    {sizes.map((size) => (
                        <div
                            key={size.id}
                            className={cx('size__item')}
                            style={{
                                backgroundColor: activeId === size.id ? '#7fad39' : '#f5f5f5',
                            }}
                        >
                            <span
                                className={cx('size__text')}
                                onClick={() => handleHideActive(size)}
                                style={{
                                    color: activeId === size.id ? '#f5f5f5' : '#6f6f6f',
                                }}
                            >
                                {size.popularSize}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ShopSidebar;
