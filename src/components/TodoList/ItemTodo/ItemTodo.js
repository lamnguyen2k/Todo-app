import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ItemTodo.module.scss';

import Switch from '@mui/material/Switch';
import { toast } from 'react-toastify';

import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

const cx = classNames.bind(styles);
function ItemTodo({ setNote, todo, index, handleSwitch }) {
    const label = { inputProps: { 'aria-label': 'Switch A' } };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleDelete = (index) => {
        setNote((prev) => {
            const newNote = [...prev];
            newNote.splice(index, 1);
            return newNote;
        });

        toast.success('Todo remove !');
    };

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    return (
        <>
            <div className={!todo.complete ? cx('list-todos') : cx('success')}>
                <h3>{todo.title}</h3>
            </div>
            <div className={cx('group-action')}>
                <Switch className={cx('switch-btn')} {...label} defaultChecked onClick={() => handleSwitch(todo.id)} />

                <div>
                    <button className={cx('action-btn')} aria-describedby={id} type="button" onClick={handleClick}>
                        <Popper className={cx('box')} id={id} open={open} anchorEl={anchorEl} placement="top-start">
                            <Box>
                                <div className={cx('box-title')}>
                                    <FontAwesomeIcon className={cx('box-icon')} icon={faCircleExclamation} />
                                    <p className={cx('box-content')}>Are you sure you want to delete ?</p>
                                </div>
                                <div className={cx('box-btn')}>
                                    <button className={cx('box-btn-cancel')} onClick={handleClick}>
                                        Cancel
                                    </button>
                                    <button className={cx('box-btn-ok')} onClick={() => handleDelete(index)}>
                                        Ok
                                    </button>
                                </div>
                            </Box>
                        </Popper>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default ItemTodo;
