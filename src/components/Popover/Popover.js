import { Popover } from '@headlessui/react';
import classNames from 'classnames/bind';
import styles from './Popover.module.scss';

const cx = classNames.bind(styles);

function MyPopover() {
    return (
        <Popover className={cx('wrappper')}>
            <Popover.Button className={cx('btn')}>Solutions</Popover.Button>

            <Popover.Panel className={cx('container')}>
                <div className={cx('content')}>
                    <a className={cx('analytics')} href="/analytics">
                        Analytics
                    </a>
                    <a href="/engagement">Engagement</a>
                    <a href="/security">Security</a>
                    <a href="/integrations">Integrations</a>
                </div>

                <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
        </Popover>
    );
}

export default MyPopover;
