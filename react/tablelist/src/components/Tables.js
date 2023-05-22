import React , {useState,useEffect} from 'react';
//import {Link} from 'react-router-dom';
function Tables(){
    
    const [data, setData] = useState([]);
    const [editingIndex, setEditingIndex] = useState(-1);
    const [updatedname, setUpdatedName] = useState('');
    const [updatedage, setUpdatedAge] = useState('');
    const [updatedgender, setUpdatedGender] = useState('');
    const [updatedemail, setUpdatedEmail] = useState('');
    const [updatedphone, setUpdatedPhone] = useState('');
    const [updatedcollege, setUpdatedCollege] = useState('');

    useEffect(() => {
      // Retrieve the user details from local storage
      const storedUserDetails = JSON.parse(localStorage.getItem('details')) || [];
      setData(storedUserDetails);
    }, []);
  
    const deleteData = (index) => {
      const updatedUserDetails = data.filter((user, i) => i !== index);
      setData(updatedUserDetails);
      localStorage.setItem('details', JSON.stringify(updatedUserDetails));
    };
    const startEditing = (index) => {
        const user = data[index];
        setEditingIndex(index);
        setUpdatedName(user.name);
        setUpdatedAge(user.age);
        setUpdatedGender(user.gender);
        setUpdatedEmail(user.email);
        setUpdatedPhone(user.phone);
        setUpdatedCollege(user.college);
      };
      const cancelEditing = () => {
        setEditingIndex(-1);
      };
      const updateRow = (index) => {
        const updatedUserDetails = [...data];
        updatedUserDetails[index] = {
          name: updatedname,
          age:updatedage,
          gender:updatedgender,
          email: updatedemail,
          phone: updatedphone,
          college:updatedcollege
        };
        setData(updatedUserDetails);
        localStorage.setItem('details', JSON.stringify(updatedUserDetails));
        setEditingIndex(-1);
      };
  
    // const updateData=(i)=>{
    //     let {name,age,gender,email,phoneno,college}=data1[i];
    //     setData(name,age,gender,email,phoneno,college);
    // }
    return(
        <>
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
                   { data.map((item,index) =>  {
                    return(
                        
                        <tr key={index}>
                            {/* <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneno}</td>
                            <td>{item.college}</td>
                            <td><button onClick={()=>deleteData(i)}>Delete</button></td> */}
                            <td>
                             {editingIndex === index ? (
                            <input type="text" value={updatedname} onChange={(e) => setUpdatedName(e.target.value)} />
                             ) : (  item.name  )}
                            </td>
                            <td>
                             {editingIndex === index ? (
                                <input type="text" value={updatedage} onChange={(e) => setUpdatedAge(e.target.value)} />
                               ) : (item.age )}
                            </td>
                            <td>
                              {editingIndex === index ? (
                             <input type="text" value={updatedgender} onChange={(e) => setUpdatedGender(e.target.value)} />
                             ) : ( item.gender)}
                             </td>
                             <td>
                              {editingIndex === index ? (
                             <input type="text" value={updatedemail} onChange={(e) => setUpdatedEmail(e.target.value)} />
                             ) : ( item.email)}
                             </td>
                            <td>
                              {editingIndex === index ? (
                             <input type="text" value={updatedphone} onChange={(e) => setUpdatedPhone(e.target.value)} />
                             ) : ( item.phone)}
                             </td>
                             <td>
                              {editingIndex === index ? (
                             <input type="text" value={updatedcollege} onChange={(e) => setUpdatedCollege(e.target.value)} />
                             ) : ( item.college)}
                             </td>
                             {editingIndex === index ? (
                              <>
                             <button onClick={() => updateRow(index)}>Save</button>
                              <button onClick={cancelEditing}>Cancel</button>
                               </>
                                 ) : (
                               <>
                               <button onClick={() => startEditing(index)}>Edit</button>
                               <button onClick={() => deleteData(index)}>Delete</button>
                                </> )}
                             </tr> 
                        
                    )
                 })}
                 </tbody>
        </table>
        </div>
        </>
    )
}
export default Tables;