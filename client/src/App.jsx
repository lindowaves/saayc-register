import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import RegisterForm from './components/RegisterForm';
import DataTable from './components/Columns';

function App() {
    const baseUrl = 'http://localhost:3001';

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

    return (
        <div className="App">
            <div className="container">
                <h1 className="title">SAAYC ETWATWA PORTAL</h1>
                <br />
                <RegisterForm handleChangeValues={handleChangeValues} handleClickButton={handleClickButton} />
                <br />
                <DataTable />
            </div>
        </div>
    );
}

export default App;
