import classNames from 'classnames/bind';
import { useEffect } from 'react';
import styles from '../../FeaturedProduct.module.scss';

const cx = classNames.bind(styles);

const categories = [
    {
        id: 1,
        name: 'All',
    },
    {
        id: 2,
        name: 'Oranges',
    },
    {
        id: 3,
        name: 'Fresh Meat',
    },
    {
        id: 4,
        name: 'Vegetables',
    },
    {
        id: 5,
        name: 'Fast Food',
    },
];

function FilterFeatured({ activeFilters, setActiveFilters }) {
    return (
        <div className={cx('featured-controls')}>
            <ul className={cx('featured-menu')}>
                {categories.map((category) => (
                    <li
                        key={category.id}
                        className={cx('featured-item', {
                            active: activeFilters === category.name,
                        })}
                        onClick={() => setActiveFilters(category.name)}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterFeatured;
