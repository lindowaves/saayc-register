import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import DataTable from './components/Columns';
import RegistrationPage from './components/RegistrationPage';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

function App() {
    const baseUrl = 'http://localhost:3001';
    const navigate = useNavigate();
    const location = useLocation(); // Get current route

    const [values, setValues] = useState({});
    const [games, setGames] = useState([]);

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickButton = () => {
        Axios.post(`${baseUrl}/register`, {
            name: values.name,
            surname: values.surname,
            age: values.age,
            gender: values.gender,
            contact: values.contact,
            reason: values.reason,
            timein: values.timein,
            timeout: values.timeout,
        }).then((response) => {
            console.log(response);
        });
    };

    useEffect(() => {
        Axios.get(`${baseUrl}/games`).then((response) => {
            setGames(response.data);
        });
    }, []);

    // Check if we are on the registration page
    const isRegistrationPage = location.pathname === '/RegistrationPage';

    return (
        <div className="App">
            <div className="container">
                {/* Render this content only if not on the RegistrationPage */}
                {!isRegistrationPage && (
                    <>
                        <h1 className="title">SAAYC ETWATWA PORTAL</h1>
                        
                        <br />
                        <h3 className="title">Students / Staff</h3>
                        <br />
                        <DataTable />
                        <br />

                        <button className='actionButton' onClick={() => navigate('/RegistrationPage')}>
                            Register new user
                        </button>
                    </>
                )}

                {/* Routes for the application */}
                <Routes>
                    <Route path="/RegistrationPage" element={<RegistrationPage handleChangeValues={handleChangeValues} handleClickButton={handleClickButton} />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
