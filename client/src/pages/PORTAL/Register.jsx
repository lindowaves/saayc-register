import React from "react";

const Register = () => {
  return (
    <div className="form-container">
      <form id="registerForm" method="POST">
        <h2>Daily Register</h2>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="surname" placeholder="Surname" required />
        <input type="text" name="age" placeholder="Age" required />
        <input type="text" name="contact" placeholder="Contact" required />
        <input type="text" name="gender" placeholder="Gender" required />
        <input type="text" name="timeIn" placeholder="Time In" required />
        <input type="text" name="timeOut" placeholder="Time Out" required />
        <label htmlFor="reason">Reason for Visit</label>
        <select name="reason" id="reason" required>
          <option value="" disabled selected>
            Select a reason
          </option>
          <option value="MingCoding">Ming Coding</option>
          <option value="ICTage">ICTAGE</option>
          <option value="Clubhouse">Clubhouse</option>
          <option value="Design Squad">Design Squad</option>
          <option value="Sewing">Sewing</option>
          <option value="Educational Support Programme">
            Educational Support Programme
          </option>
          <option value="Other">Other</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
