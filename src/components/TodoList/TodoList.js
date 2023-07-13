import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TodoList.module.scss';
import 'tippy.js/dist/tippy.css';
import ReactPaginate from 'react-paginate';
import * as React from 'react';
import ItemTodo from './ItemTodo/ItemTodo';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function TodoList({ note, setNote }) {
    const [currentPage, setCurrentPage] = useState(0);
    const todosPerPage = 6;
    const pageCount = Math.ceil(note.length / todosPerPage);

    useEffect(() => {
        setCurrentPage(0);
    }, [note]);

    const handlePageChange = ({ selected }) => {
        if (!handlePageChange) {
            return;
        }
        setCurrentPage(selected);
    };

    const handleSwitch = (id) => {
        let uploadTodo = note.map((todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
                toast.success('Todo state update !');
            }
            return todo;
        });
        setNote(uploadTodo);
    };

    const offset = currentPage * todosPerPage;
    const currentTodos = note.slice(offset, offset + todosPerPage);

    return (
        <div className={cx('wrapper-todo')}>
            <div className={cx('container-todo-list')}>
                <span className={cx('todo-list')}>Todo List</span>
            </div>
            <div className={cx('container-value')}>
                <ul className={cx('value')}>
                    {currentTodos.map((todo, index) => (
                        <li key={index} className={cx('list')}>
                            <ItemTodo setNote={setNote} todo={todo} index={index} handleSwitch={handleSwitch} />
                        </li>
                    ))}
                </ul>
                <ReactPaginate
                    className={cx('btn-list')}
                    previousLabel={
                        <button className={cx('btn-left')}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                    }
                    nextLabel={
                        <button className={cx('btn-right')}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    }
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageChange}
                    pageClassName={cx('page-item')}
                    pageLinkClassName={cx('btn-number')}
                    previousClassName={cx('page-item')}
                    previousLinkClassName={cx('page-link')}
                    nextClassName={cx('page-item')}
                    nextLinkClassName={cx('page-link')}
                    breakLabel="..."
                    breakClassName={cx('page-item')}
                    breakLinkClassName={cx('page-link')}
                    containerClassName={cx('pagination')}
                    activeClassName={cx('active')}
                />
            </div>
        </div>
    );
}

export default TodoList;
