import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                Add Todo
                <div className={cx('content')}>To add a todo, just fill the form below and click in add todo.</div>
            </div>
        </div>
    );
}

export default Header;
