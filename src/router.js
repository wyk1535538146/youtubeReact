// Router.js
import React from 'react';
import Home from './home/home'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";


const RouterMap = () => {
    return <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
}




export default RouterMap;
