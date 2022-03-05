import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            {/* Insert your link here */}
            <Route path='/' element={<App/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);