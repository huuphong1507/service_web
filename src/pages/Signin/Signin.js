import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import config from '~/config';
import styles from './Signin.module.scss';

const cx = classNames.bind(styles);

function Signin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-content')}>
                <div className={cx('logo')}>
                    <img src="https://img.freepik.com/premium-vector/fresh-fruit-logo_25327-200.jpg?w=2000" alt="" />
                </div>
                <div className={cx('login-form')}>
                    <h1 className={cx('login-form__heading')}>Login</h1>
                    <div className={cx('login-form__input')}>
                        <input type="text" placeholder="User Name" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <Link className={cx('forgot-password')} to="#">
                        Forgot Password?
                    </Link>
                    <div className={cx('auth-buttons')}>
                        <Link href="#" className={cx('signin-btn')}>
                            Sign in
                        </Link>
                        <Link href="#" className={cx('signup-btn')}>
                            Sign up
                        </Link>
                    </div>
                    <p className={cx('swap')}>or</p>
                    <div className={cx('login-footer')}>
                        <span>Do not have an account?</span>
                        <NavLink className={cx('register-now')} to={config.routes.signup} end>
                            Register now
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
