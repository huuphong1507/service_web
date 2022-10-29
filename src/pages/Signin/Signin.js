import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import config from '~/config';
import styles from './Signin.module.scss';

const cx = classNames.bind(styles);

function Signin() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper')}>
                {isLoading ? (
                    <div className={cx('loader-container')}>
                        <div className={cx('spinner')}></div>
                    </div>
                ) : (
                    <div className={cx('login-content')}>
                        <div className={cx('logo')}>
                            <img
                                src="https://img.freepik.com/premium-vector/fresh-fruit-logo_25327-200.jpg?w=2000"
                                alt=""
                            />
                        </div>
                        <div className={cx('login-form')}>
                            <h1 className={cx('login-form__heading')}>Login</h1>
                            <div className={cx('login-form__input')}>
                                <input type="text" placeholder="User Name" required />
                                <input type="password" placeholder="Password" required />
                            </div>
                            <Link className={cx('forgot-password')} to="#">
                                Forgot Password?
                            </Link>
                            <div className={cx('auth-buttons')}>
                                <Link to="#" className={cx('signin-btn')}>
                                    Sign in
                                </Link>
                                <Link to="#" className={cx('signup-btn')}>
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
                )}
            </div>
        </div>
    );
}

export default Signin;
