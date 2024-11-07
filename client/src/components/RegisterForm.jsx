// components/RegisterForm.jsx
import React from 'react';

const RegisterForm = ({ handleChangeValues, handleClickButton }) => {
  return (
    <div className="register-box">
      <input className="register-input" type="text" name="name" placeholder="name" onChange={handleChangeValues} />
      <input className="register-input" type="text" name="surname" placeholder="surname" onChange={handleChangeValues} />
      <input className="register-input" type="text" name="age" placeholder="age" onChange={handleChangeValues} />

      <select className="register-input option-input" name="Gender" onChange={handleChangeValues}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <input className="register-input" type="text" name="contact" placeholder="contact" onChange={handleChangeValues} />

      <select className="register-input option-input" name="reason" onChange={handleChangeValues}>
        <option value="ming-coding">Ming coding</option>
        <option value="staff">Staff</option>
        <option value="clubhouse">Clubhouse</option>
        <option value="knitting">Knitting club</option>
      </select>

      <input className="register-input" type="text" name="timein" placeholder="timein" onChange={handleChangeValues} />
      <input className="register-input" type="text" name="timeout" placeholder="timeout" onChange={handleChangeValues} />
      <button type="submit" className="register-button" onClick={handleClickButton}>Sign Register</button>
    </div>
  );
};

export default RegisterForm;
