import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Formm from "./Formm"

function TargetPage() {
  const storedData = localStorage.getItem('data');
  const data = JSON.parse(storedData);
  const [totalUsers, setTotalUsers] = useState([])
  const [isEdit, setIsEdit] = useState(false);
  const [editData, seteditData] = useState({})

  useEffect(() => {
    setTotalUsers(data);
  }, []);

  const handleEdit = (user) => {
    setIsEdit(true)
    seteditData(user);
    const filteredUsers = totalUsers.filter((userDetails) => userDetails.email !== user.email);
    setTotalUsers(filteredUsers);
  }

  const handleDelete = (user) => {
    const filteredUsers = totalUsers.filter((userDetails) => userDetails.phone !== user.phone);
    setTotalUsers(filteredUsers);
    localStorage.setItem('data', JSON.stringify(filteredUsers));
  };

  return (

    <>
      <nav>
        <ul>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
      </nav>

      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Username</th>
              <th>EmailId</th>
              <th>Password</th>
              <th>Phone No</th>
              <th>Gender</th>
              <th>Experience</th>
              <th>CTC</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {totalUsers.map((item, index) => (
              <tr key={index}>
                <td>{item?.username}</td>
                <td>{item?.email}</td>
                <td>{item?.password}</td>
                <td>{item?.phone}</td>
                <td>{item?.gender}</td>
                <td>{item?.experience}</td>
                <td>{item?.ctc}</td>
                <td>{item?.location}</td>
                <button  class="btn btn-success" onClick={() => handleEdit(item)}>Edit</button>
                <button class="btn btn-danger" onClick={() => handleDelete(item)}>Delete</button>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="http://localhost:3000/">Back</a>
      </div>
      <Popup open={isEdit} onClose={() => setIsEdit(false)}>
        <div className="popup-container">
          <div className="popup-content">
            <Formm editData={editData} setIsEdit={setIsEdit} />
          </div>
        </div>
      </Popup>
    </>
  );
}

export default TargetPage;