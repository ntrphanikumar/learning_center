 import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
//import Tables from './Tables';
//import ReactDOM from 'react-dom';

function Form() {
    
  // const [array,setArray]=useState([])
  let array = JSON.parse(localStorage.getItem('details') || '[]')
  const [inputdata, setInputdata] = useState({
    name: "",
      age: "",
      gender: "",
      email: "",
      phoneno: "",
      college: ""
  });
  

  const handleChange= (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
    
  };
  
  
  const handleClick = (e) => {
    e.preventDefault();
    array=[...array,inputdata]
    localStorage.setItem('details', JSON.stringify(array));
    alert("Successful submit");
    setInputdata({name: "",
    age: "",
    gender: "",
    email: "",
    phoneno: "",
    college: ""
    });
    //console.log(array);
   window.location.href="/tablelist";
  };

  return (
    <>
    
    <div className='container'>
      <form >
        <label >Name:</label><br />
        <input type="text" name="name" value={inputdata.name} onChange={handleChange} /><br />

        <label>Age:</label><br />
        <input type="text" name="age" value={inputdata.age} onChange={handleChange} /><br />

        <label>Gender:</label>
        <label htmlFor='male'>Male:</label>
        <input type="radio" id="male" name="gender" value="male" checked={inputdata.gender === "male"} onChange={handleChange} />
        <label htmlFor='female'>Female:</label>
        <input type="radio" id="female" name="gender" value="female" checked={inputdata.gender === "female"} onChange={handleChange} /><br />

        <label>Email:</label>
        <input type="text" name="email" value={inputdata.email} onChange={handleChange} /><br />

        <label>Phoneno:</label>
        <input type="number" name="phoneno" value={inputdata.phoneno} onChange={handleChange} /><br />
        <label>College:</label>
        <input type="text" name="college" value={inputdata.college} onChange={handleChange} /><br />

        <button  onClick={handleClick}>login</button><br></br><br></br>
        </form>
        </div>
        
        </>
  )
}
export default Form;