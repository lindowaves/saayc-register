import React, { useState} from "react";
import "./card.css"
import FormDialog from "./dialog/dialog";
import axios from "axios";


const Card = (props) => {
    const [open, setOpen] = React.useState(false);

    const cardOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteGame = () => {
        axios.delete(`http://localhost:3001/delete/${props.id}`);
    }

    return (
        <>
        <FormDialog open={open} setOpen={setOpen} id={props.id} name={props.name} surname={props.surname} age={props.age} gender={props.gender} contact={props.contact} reason={props.reason} timein={props.timein} timeout={props.timeout} />
        <div className="game-card">
            <div className="info">
                <h4>{props.name}</h4>
                <p>Surname: {props.surname}</p>
                <p>Age: {props.age}</p>
                <p>Gender: {props.gender}</p>
                <p>Contact: {props.contact}</p>
                <p>Reason: {props.reason}</p>
                <p>Time In: {props.timein}</p>
                <p>Time Out: {props.timeout}</p>
            </div>
        </div>
        </>
    );
};

export default Card;
