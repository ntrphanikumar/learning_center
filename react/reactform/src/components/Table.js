import React, { useState } from 'react';

function Table() {
  const [array, setArray] = useState([]);
  const [inputdata, setInputdata] = useState({
    name: "",
      age: "",
      gender: "",
      email: "",
      phoneno: "",
      college: ""
  });

  const data = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };
  let {name,age,gender,email,phoneno,college}=inputdata
  const addinputdata = (e) => {
    if(name===""||age===""||gender===""||email===""||phoneno===""||college===""){
        alert("complete all details")
    }
    else{
    e.preventDefault();
    setArray([...array, inputdata]);
    localStorage.setItem('details', JSON.stringify([...array, inputdata]));
    alert("Successful submit");
    setInputdata({name: "",
    age: "",
    gender: "",
    email: "",
    phoneno: "",
    college: ""
   
    });
    }
    //console.log(array);
  };
    const deleteData=(i)=>{
     let total=[...array];
     total.splice(i,1);
     setArray(total);
  }
    const updateData=(i)=>{
    let {name,age,gender,email,phoneno,college}=array[i]
    setInputdata(name,age,gender,email,phoneno,college)
   }
  return (
    <div className='container'>
        <div>
      <form >
        <label >Name:</label><br />
        <input type="text" name="name" value={inputdata.name} required maxLength={{value:30,message:'30 chars max'}} onChange={data} /><br />

        <label>Age:</label><br />
        <input type="text" name="age" value={inputdata.age} max='15' onChange={data} /><br />

        <label>Gender:</label>
        <label htmlFor='male'>Male:</label>
        <input type="radio" id="male" name="gender" value="male" checked={inputdata.gender === "male"} onChange={data} />
        <label htmlFor='female'>Female:</label>
        <input type="radio" id="female" name="gender" value="female" checked={inputdata.gender === "female"} onChange={data} /><br />

        <label>Email:</label>
        <input type="text" name="email" value={inputdata.email} required onChange={data} /><br />

        <label>Phoneno:</label>
        <input type="number" name="phoneno" value={inputdata.phoneno} required onChange={data} /><br />
        <label>College:</label>
        <input type="text" name="college" value={inputdata.college} required onChange={data} /><br />

        <button type="submit" onClick={addinputdata}>Submit</button><br></br><br></br>
        </form>
        </div>
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
                    {array.map((item,i) =>  {
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
      
    </div>
  );
}

export default Table;