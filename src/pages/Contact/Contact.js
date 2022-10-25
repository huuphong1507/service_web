import classNames from 'classnames/bind';
import BannerContact from '~/components/Layout/components/BannerContact/BannerContact';

import CategoriesWithHero from '~/components/Layout/components/CategoriesWithHero/CategoriesWithHero';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <>
            <CategoriesWithHero>
                <BannerContact />
            </CategoriesWithHero>
            <div className={cx('wrapper')}>
                <main className="content">
                    <h2>Contact</h2>
                </main>
            </div>
        </>
    );
}

export default Contact;
