import React, {useState, useEffect} from 'react'
import './App.css'
import Axios from "axios";
import Card from "./components/card";

function App() {

    const baseUrl = "http://localhost:3001"

    const [values, setValues] = useState();
    const [games, setGames] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

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
        }).then((response) =>{
            console.log(response)
        });
    }

    useEffect(() => {
        Axios.get(`${baseUrl}/games`)
            .then((response)=>{
            setGames(response.data)
        })
        }
    )


  return (
    <div className="App">
      <div className="container">
          <h1 className="title">SAAYC ETWATWA PORTAL</h1>
<br/>
          <div className="register-box">
              <input className="register-input" type="text" name="name" placeholder="name" onChange={handleChangeValues} />
              <input className="register-input" type="text" name="surname" placeholder="surname" onChange={handleChangeValues} />
              <input className="register-input" type="text" name="age" placeholder="age" onChange={handleChangeValues} />

              <select className="register-input"  name="gender" placeholder="gender" onChange={handleChangeValues}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input className="register-input" type="text" name="contact" placeholder="contact" onChange={handleChangeValues} />

              <select className="register-input option-input" name="reason" placeholder="reason" onChange={handleChangeValues}>
                <option value="ming-coding">Ming coding</option>
                <option value="staff">Staff</option>
                <option value="clubhouse">Clubhouse</option>
                <option value="knitting">Knitting club</option>
              </select>

              <input className="register-input" type="text" name="timein" placeholder="timein" onChange={handleChangeValues} />
              <input className="register-input" type="text" name="timeout" placeholder="timeout" onChange={handleChangeValues} />
              <button type='submit' className="register-button" onClick={handleClickButton}>Sign Register</button>
          </div>
          <br/>
          <div className="cards">
              {typeof games !== 'undefined' &&
                  games.map((game) => {
                      return <Card
                          key={game.idgames}
                          id={game.idgames}
                          name={game.name}
                          surname={game.surname}
                          age={game.age}
                          gender={game.gender}
                          contact={game.contact}
                          reason={game.reason}
                          timein={game.timein}
                          timeout={game.timeout}
                      >
                      </Card>;
                  })}
          </div>
      </div>
    </div>
  )
}

export default App
