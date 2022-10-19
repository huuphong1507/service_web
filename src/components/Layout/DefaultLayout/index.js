import Header from '~/components/Layout/components/Header';
import Footer from './Footer';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className="content">{children}</main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
