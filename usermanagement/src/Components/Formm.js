import React, { useState } from 'react'

import './MyStyleSheet.css';
import { useNavigate } from 'react-router-dom';

function Formm({editData}) {
  let localData = localStorage.getItem('data')
  localData = JSON.parse(localData)
  const navigate = useNavigate();
  const [data, setData] = useState(localData ? localData : []);
  const [user, setUser] = useState(editData ? editData : {
    username: "", email: "", phone: "", password: "", gender: "", experience: "", ctc: "", location: ""
  });
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }
  
  const submitForm = (e) => {
    e.preventDefault();
    
    if (editData) {
      const updatedData = data.map((item) =>
        item.phone === editData.phone ? user : item
      );
      setData(updatedData);
      localStorage.setItem('data', JSON.stringify(updatedData));
      
    } else {
      setData([...data, user]);
      localStorage.setItem('data', JSON.stringify([...data, user]));
      navigate('/list')
    }
    console.log(editData , 'modal')
  }

  return (

    <div className='container'>
      <a href="/list">List</a>
      <h1>React Form</h1>
      <form onSubmit={submitForm} >
        <label>Username:</label>
        <input type="text" name="username" value={user?.username} onChange={handleChange} required></input><br></br>
        <label>EmailId:</label>
        <input type="mail" name="email" value={user?.email} onChange={handleChange} required></input><br></br>
        <label>Phone No:</label>
        <input type="text" name="phone" value={user?.phone} onChange={handleChange} required></input><br></br>
        <label>Password:</label>
        <input type="password" name="password" value={user?.password} onChange={handleChange} required></input><br></br>
        <label>Gender</label>
        <select name="gender" value={user?.gender} onChange={handleChange} required>
          <option value="none">None</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="Notdisclose">Not willing to disclose</option>
        </select>
        <label>Experience In Years</label>
        <select name="experience" value={user?.experience} onChange={handleChange} required>
          <option value="none">None</option>
          <option value="fresher">Fresher</option>
          <option value="0-2">0-2 Years</option>
          <option value="2-4">2-4 Years</option>
          <option value="4-7">4-7 Years</option>
          <option value="8-10">8-10 Years</option>
          <option value="10+">10+ Years</option>
          <option value="12+">12+ Years</option>
        </select><br></br>
        <label>Expected CTC(In Lakhs per Annum)</label>
        <select name="ctc" value={user?.ctc} onChange={handleChange} required>
          <option value="none">None</option>
          <option value="3-5">3-5</option>
          <option value="5-7">5-7</option>
          <option value="7-10">7-10</option>
          <option value="10-15">10-15</option>
        </select>
        <label>Preferred Location</label>
        <select name="location" value={user?.location} onChange={handleChange} required>
          <option value="none">None</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
        </select>
        <button type="submit" > {editData ? "update" : "Login"}</button>

      </form>
    </div>



  );
}

export default Formm;