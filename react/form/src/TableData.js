import React, { useState ,useEffect } from 'react';
import Form from './Form';
//import jsonData from './data.json';
function TableData(){
    const[data,setData]=useState({name1:"",
    lastname:"",
    gender:"",
    email:"",
    phoneno:"",
    education:""});
    let storedInfo="";
    useEffect(()=>{
          storedInfo=localStorage.getItem('data');
          console.log(storedInfo)
        setData(storedInfo);
     },[]);
        const tablerows = storedInfo.map((details,index)=>{
        return(
            <tr key={index}>
                 
                <td>{details.name1}</td>
                <td>{details.lastname}</td>
                <td>{details.gender}</td>
                <td>{details.email}</td>
                <td>{details.phoneno}</td>
                <td>{details.education}</td>

            </tr>
        )
    });
    const addRows=(dt)=>{
        const tuser = data.length;
        data.id = tuser + 1;
      const updateUserData={...data}
       updateUserData.push('dt')
       //data.push(dt);
       setData(updateUserData);
    }
    return(
        <div>
            <table >
            <thead>
                <tr>
                    
                    <th>FirstNAme </th>
                    <th>LastName </th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone no</th>
                    <th>Education </th>
                </tr>
            </thead>
            <tbody>{tablerows}</tbody>
            </table>
            <Form func={addRows}/>
        </div>
    )

}
export default TableData;