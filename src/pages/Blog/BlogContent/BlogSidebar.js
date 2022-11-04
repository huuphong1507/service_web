import classNames from 'classnames/bind';
import styles from './BlogContent.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function BlogSidebar({ onSubmit }) {
    const [searchValue, setSearchValue] = useState('');
    const searchRef = useRef(null);

    function handleSearchOnChange(e) {
        const value = e.target.value;
        setSearchValue(value);

        if (!onSubmit) {
            return;
        }

        if (searchRef.current) {
            clearTimeout(searchRef.current);
        }

        searchRef.current = setTimeout(() => {
            const formValues = {
                searchValue: value,
            };
            onSubmit(formValues);
        }, 300);
    }

    return (
        <div className={cx('blog__sidebar')}>
            <form className={cx('blog__sidebar__search')}>
                <input type="text" value={searchValue} onChange={handleSearchOnChange} placeholder="Search..." />
                <button type="submit">
                    <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                </button>
            </form>
            <div className={cx('blog__sidebar__item')}>
                <h2>Categories</h2>
                <ul className={cx('blog__sidebar__menu')}>
                    <li>
                        <Link className={cx('blog__sidebar__link')} to="#">
                            All
                        </Link>
                    </li>
                    <li>
                        <Link className={cx('blog__sidebar__link')} to="#">
                            Beauty (20)
                        </Link>
                    </li>
                    <li>
                        <Link className={cx('blog__sidebar__link')} to="#">
                            Food (5)
                        </Link>
                    </li>
                    <li>
                        <Link className={cx('blog__sidebar__link')} to="#">
                            Life Style (9)
                        </Link>
                    </li>
                    <li>
                        <Link className={cx('blog__sidebar__link')} to="#">
                            Travel (10)
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BlogSidebar;
