import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, {changedName, updateName, changedSurname, updateSurname, putLike, subscribe} from "./redux/state"
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     changedName={changedName} updateName={updateName}
                     changedSurname={changedSurname} updateSurname={updateSurname}
                     putLike={putLike} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// reportWebVitals();


