import React, { useState, useEffect } from 'react';
import Tables from './Tables';
import ReactDOM from 'react-dom';
//import { useHistory } from 'react-router-dom';

const BeforePop = () => {
    const [data, setData] = useState(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem('details')) || [];
    return storedUserDetails;
      });
  const [array, setArray] = useState([]);

  useEffect(() => {
    // Retrieve the user details from local storage
    const storedUserDetails = JSON.parse(localStorage.getItem('details')) || [];
    if (storedUserDetails.length === 0) {
      localStorage.setItem('details', JSON.stringify(data));
    } else {
      setData(storedUserDetails);
    }
  }, [data]);
 
    
 const openPopupWindow = () => {
    const popupWindow = window.open('', '_blank', 'width=500,height=400');
    popupWindow.document.write('<html><head><title>Table Popup</title></head><body>');
   const root=ReactDOM.createRoot(popupWindow.document.body)
   root.render(<Tables/>)
    popupWindow.document.write('</body></html>');
    popupWindow.document.close();
  };
    const backForm=()=>{
        const updatedArray = [...array, ...data];
        localStorage.setItem('details', JSON.stringify(updatedArray));
        setArray(updatedArray);
        window.location.href='/backForm'
  }

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
              <td><button onClick={openPopupWindow}>update</button></td>
              <td><button onClick={openPopupWindow}>delete</button></td>
            </tr>
          ))
          
          }
          <button onClick={backForm} >Back</button>
        </tbody>
      </table>
    </div>
    </>
  );
};
export default BeforePop;