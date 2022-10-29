import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './Signup.module.scss';

const cx = classNames.bind(styles);

function Signup() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('signup-content')}>
                <div className={cx('logo')}>
                    <img src="https://img.freepik.com/premium-vector/fresh-fruit-logo_25327-200.jpg?w=2000" alt="" />
                </div>
                <div className={cx('signup-form')}>
                    <h1 className={cx('signup-form__heading')}>Signup</h1>
                    <div className={cx('signup-form__input')}>
                        <input type="text" placeholder="Full name" />
                        <input type="text" placeholder="User Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                    </div>
                    <div className={cx('auth-buttons')}>
                        <Link href="#" className={cx('signup-btn')}>
                            Sign up
                        </Link>
                    </div>
                    <div className={cx('signup-footer')}>
                        <span className={cx('question-account')}>Already have an account?</span>
                        <Link className={cx('have-account')} to={config.routes.signin} end>
                            Signin now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
