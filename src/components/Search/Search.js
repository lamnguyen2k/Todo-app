import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ setNote, note }) {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    const onTextInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleAdd = () => {
        if (!value) {
            toast.warning('This field is required');
            return;
        } else {
            const newNote = {
                id: Math.random(),
                title: value,
                complete: false,
            };

            setNote((prev) => {
                const newNotes = [...prev, newNote];
                return newNotes;
            });
            setValue('');
            inputRef.current.focus();
        }
        toast.success('Todo adder !');
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            const newNote = {
                id: Math.random(),
                title: value,
                complete: false,
            };

            setNote([...note, newNote]);
            setValue('');
            inputRef.current.focus();
            toast.success('Todo adder !');
        }
    };

    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('container-todo')}>
                    <span className={cx('title-todo')}>Create a new todo</span>
                </div>
                <>
                    <div className={cx('search')}>
                        <input
                            value={value}
                            ref={inputRef}
                            className={cx('search-value')}
                            placeholder="What needs to be done?"
                            onChange={onTextInputChange}
                            onKeyDown={handleEnter}
                        />
                        <button type="submit" className={cx('search-btn')} onClick={handleAdd}>
                            <FontAwesomeIcon icon={faCirclePlus} />
                            <span className={cx('btn')}> Add Todo</span>
                        </button>
                    </div>
                </>
            </div>
        </div>
    );
}

export default Search;
