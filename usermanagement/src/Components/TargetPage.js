import React,{useEffect, useState} from 'react';
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
    }, [data]);
  
    const handleEdit = (user) =>{
        // console.log(user);
        setIsEdit(true)
        seteditData(user);
        const filteredUsers = totalUsers.filter((userDetails) => userDetails.username !== user.username);
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
              <th >Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {totalUsers.map((item, index) => (
              <tr key={index}>
                <td>{item?.username}</td>
                <td>{item?.email}</td>
                <td>{item?.password}</td>
                <td>{item?.phone}</td>
                <td onClick={()=>handleEdit(item)}>Edit</td>
              <td onClick={()=>handleDelete(item)}>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
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