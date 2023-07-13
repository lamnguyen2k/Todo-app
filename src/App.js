import Header from './components/Header/Header';
import Search from './components/Search/Search';
import TodoList from './components/TodoList/TodoList';

import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [note, setNote] = useState(() => {
        const storageNote = JSON.parse(localStorage.getItem('note'));

        return storageNote || [];
    });

    useEffect(() => {
        // setNote((prev) => {
        //     const newNotes = [...prev];
        //     // save localStorage
        //     const jsonNote = JSON.stringify(newNotes);
        //     localStorage.setItem('note', jsonNote);
        //     return newNotes;
        // });
    }, [note]);

    return (
        <>
            <Header />

            <Search setNote={setNote} note={note} />

            <TodoList note={note} setNote={setNote} />

            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="light"
            />

            {/* <MyPopover /> */}
        </>
    );
}

export default App;
