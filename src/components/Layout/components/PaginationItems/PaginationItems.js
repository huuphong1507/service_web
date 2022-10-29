import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './PaginationItems.module.scss';
import ReactPaginate from 'react-paginate';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PaginationItems({ pageCount, handlePageClick }) {
    return (
        <div className={cx('pagination')}>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<FontAwesomeIcon icon={faArrowRightLong} />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={6}
                pageCount={pageCount}
                previousLabel={<FontAwesomeIcon icon={faArrowLeftLong} />}
                renderOnZeroPageCount={null}
                activeClassName={cx('current-page')}
                disabledClassName={cx('disable-page')}
            />
        </div>
    );
}

export default PaginationItems;
