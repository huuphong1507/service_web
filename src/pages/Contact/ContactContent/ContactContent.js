import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './ContactContent.module.scss';

const cx = classNames.bind(styles);

function ContactContent() {
    return (
        <section className={cx('section-contact')}>
            <div className={cx('contact__container')}>
                <div className={cx('contact__info')}>
                    <div className={cx('contact__item')}>
                        <FontAwesomeIcon className={cx('contact__icon')} icon={faPhone} />
                        <h1 className={cx('contact__heading')}>Phone</h1>
                        <span className={cx('contact__phone-number')}>+01-3-8888-6868</span>
                    </div>
                    <div className={cx('contact__item')}>
                        <FontAwesomeIcon className={cx('contact__icon')} icon={faLocationDot} />
                        <h1 className={cx('contact__heading')}>Address</h1>
                        <span className={cx('contact__location')}>60-49 Road 11378 New York</span>
                    </div>
                    <div className={cx('contact__item')}>
                        <FontAwesomeIcon className={cx('contact__icon')} icon={faClock} />
                        <h1 className={cx('contact__heading')}>Open time</h1>
                        <span className={cx('contact__clock')}>10:00 am to 23:00 pm</span>
                    </div>
                    <div className={cx('contact__item')}>
                        <FontAwesomeIcon className={cx('contact__icon')} icon={faEnvelope} />
                        <h1 className={cx('contact__heading')}>Email</h1>
                        <span className={cx('contact__email')}>pp07@colorlib.com</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactContent;
