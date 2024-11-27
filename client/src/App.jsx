import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Banner from './pages/PORTAL/banner';
import Register from './pages/PORTAL/Register';
import './pages/PORTAL/styles.css'

function App() {

    return (

        <div className="App">
           <Banner/>
        </div>
    );
}

export default App;
