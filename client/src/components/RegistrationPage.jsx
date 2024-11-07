import React from "react";
import RegisterForm from "./RegisterForm";
//import './App.css';

function RegistrationPage ({ handleChangeValues, handleClickButton }) {
    return(
        <div className="App">
            <h1 className="title">SAAYC ETWATWA PORTAL</h1>
            <br />
            <RegisterForm handleChangeValues={handleChangeValues} handleClickButton={handleClickButton} />
        </div>
    );
}

export default RegistrationPage;
