import React, { useState } from 'react';
import {Link} from 'react-router-dom';
function Table(){
    
    const storedData=localStorage.getItem('details');
    const data=JSON.parse(storedData);
    console.log(data)
    const [data1,setData]=useState("data");
    const deleteData=(i)=>{
       let total=[...data1];
       total.splice(i);
       setData(total);  
    }
    const updateData=(i)=>{
        let {name,age,gender,email,phoneno,college}=data1[i];
        setData(name,age,gender,email,phoneno,college);
    }
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
        <div>
        <table border="1" width="100%" >
            <tbody>
                <tr>
                    <td>name</td>
                    <td>age</td>
                    <td>gender</td>
                    <td>email</td>
                    <td>phoneno</td>
                    <td>college</td>
                    <td>udate</td>
                    <td>delete</td>
                </tr>
                    {data.map((item,i) =>  {
                    return(
                        
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneno}</td>
                            <td>{item.college}</td>
                            <td><button onClick={()=>updateData(i)}>Update</button></td>
                            <td><button onClick={()=>deleteData(i)}>Delete</button></td>
                        </tr>
                        
                    )
                 })}
                 </tbody>
        </table>
        </div>
        </>
    )
}
export default Table;