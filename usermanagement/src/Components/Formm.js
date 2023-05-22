import React, { useState } from 'react'

import './MyStyleSheet.css';
import { useNavigate } from 'react-router-dom';

function Formm(EditData) {
  let localData = localStorage.getItem('data')
  localData = JSON.parse(localData)
  const navigate = useNavigate();
    const [data, setData] = useState(localData ? localData : []);
    const [ user, setUser ] = useState( EditData ? EditData?.editData : {
      username:"", email:"", phone:"", password:"", gender:"", experience:"", ctc:"", location:""
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [ name ] : value});
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (EditData?.editData) {
         const updatedData = data.map((item) =>
      item.phone === EditData.editData.phone ? user : item
    );
    setData(updatedData);
      localStorage.setItem('data',JSON.stringify(updatedData));
        }else{
          setData([...data, user]);
          localStorage.setItem('data',JSON.stringify([...data,user]));
         navigate('/list')
        }
      
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
        <select name="gender">
          <option value={user?.gender}>Male</option>
          <option value={user?.gender}>Female</option>
          <option value={user?.gender}>Not willing to disclose</option>
        </select>
        <label>Experience In Years</label>
        <select name="experience" value={user?.experience} onChange={handleChange}>
          <option value={user?.experience}>Fresher</option>
          <option value={user?.experience}>0-2 Years</option>
          <option value={user?.experience}>2-4 Years</option>
          <option value={user?.experience}>4-7 Years</option>
          <option value={user?.experience}>8-10 Years</option>
          <option value={user?.experience}>10+ Years</option>
          <option value={user?.experience}>12+ Years</option>
        </select><br></br>
        <label>Expected CTC(In Lakhs per Annum)</label>
        <select name="ctc">
        <option value={user?.ctc}>None</option>
          <option value={user?.ctc}>3-5</option>
          <option value={user?.ctc}>5-7</option>
          <option value={user?.ctc}>7-10</option>
          <option value={user?.ctc}>10-15</option>
        </select>
        <label>Preferred Location</label>
        <select name="location">
        <option value={user?.location}>None</option>
        <option value={user?.location}>Hyderabad</option>
        <option value={user?.location}>Bangalore</option>
        <option value={user?.location}>Chennai</option>
        </select>
        <button type="submit" > {EditData?.editData ? "update" : "Login"}</button>
        
      </form>
      </div>
      
        
    
  );
}

export default Formm;