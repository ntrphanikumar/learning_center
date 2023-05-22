import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

const BeforePop = () => {
  const [editdetails, setEditDetails] = useState({});
  const [data, setData] = useState(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem('details')) || [];
    return storedUserDetails;
  });

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem('details')) || [];
    if (storedUserDetails.length === 0) {
      localStorage.setItem('details', JSON.stringify(data));
    } else {
      setData(storedUserDetails);
    }
  }, [data]);

  const handleChange = (e) => {
    setEditDetails({ ...editdetails, [e.target.name]: e.target.value });
  };

  const handleClick = (e, index) => {
  e.preventDefault();
  const updatedDetails = [...data];
  updatedDetails[index] = { ...updatedDetails[index], ...editdetails };
  setData(updatedDetails);
  localStorage.setItem('details', JSON.stringify(updatedDetails));
};

  const backForm = () => {
    window.location.href = '/back';
  };

  return (
    <>
      <div>
        <table border="1" width="100%">
          <tbody>
            <tr>
              <td>name</td>
              <td>age</td>
              <td>gender</td>
              <td>email</td>
              <td>phoneno</td>
              <td>college</td>
              <td>update</td>
              <td>Delete</td>
            </tr>

            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.phoneno}</td>
                <td>{item.college}</td>
                <td>
                  <Popup trigger={<button>update</button>} position="right center" modal nested>
                    
                    <div className='popup'>
                      <label>name :</label>
                      <input type="text" name="name" defaultValue={item.name} value={editdetails.name} onChange={handleChange}></input>
                      <label>age :</label>
                      <input type="text" name="age" defaultValue={item.age} value={editdetails.age} onChange={handleChange}></input>
                      <label>gender :</label>
                      <input type="text" name="gender" defaultValue={item.gender} value={editdetails.gender} onChange={handleChange}></input>
                      <label>email :</label>
                      <input type="text" name="email" defaultValue={item.email} value={editdetails.email} onChange={handleChange}></input>
                      <label>phone no :</label>
                      <input type="text" name="phoneno" defaultValue={item.phoneno} value={editdetails.phoneno} onChange={handleChange}></input>
                      <label>college :</label>
                      <input type="text" name="college" defaultValue={item.college} value={editdetails.college} onChange={handleChange}></input>
                      <button onClick={handleClick}>save</button>
                    </div>
                    
                  </Popup>
                </td>
              </tr>
            ))}
            <button onClick={backForm}>Back</button>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BeforePop;