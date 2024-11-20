import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Banner from './pages/PORTAL/banner';

function App() {

    return (
        <div className="App">
           <Banner/>
        </div>
    );
}

export default App;
