import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import config from '~/config';
import styles from './Signup.module.scss';

const cx = classNames.bind(styles);

function Signup() {
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
                <div className={cx('signup-content')}>
                    <div className={cx('logo')}>
                        <img
                            src="https://img.freepik.com/premium-vector/fresh-fruit-logo_25327-200.jpg?w=2000"
                            alt=""
                        />
                    </div>
                    <div className={cx('signup-form')}>
                        <h1 className={cx('signup-form__heading')}>Signup</h1>
                        <div className={cx('signup-form__input')}>
                            <input type="text" placeholder="Full name" required />
                            <input type="text" placeholder="User Name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <input type="password" placeholder="Confirm Password" required />
                        </div>
                        <div className={cx('auth-buttons')}>
                            <Link to="#" className={cx('signup-btn')}>
                                Sign up
                            </Link>
                        </div>
                        <div className={cx('signup-footer')}>
                            <span className={cx('question-account')}>Already have an account?</span>
                            <NavLink className={cx('have-account')} to={config.routes.signin} end>
                                Signin now
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Signup;
