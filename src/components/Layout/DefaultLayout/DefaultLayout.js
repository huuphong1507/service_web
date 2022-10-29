import Header from '~/components/Layout/components/Header';
import Footer from './Footer';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <div className={cx('wrapper')}>
            {isLoading ? (
                <div className={cx('loader-container')}>
                    <div className={cx('spinner')}></div>
                </div>
            ) : (
                <>
                    <Header />
                    <main className="content">{children}</main>
                    <Footer />
                </>
            )}
        </div>
    );
}

export default DefaultLayout;
