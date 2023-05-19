import React, { useState } from 'react';

function Table() {
  //const [array, setArray] = useState([]);
  const [inputdata, setInputdata] = useState({
    name: "",
      age: "",
      gender: "",
      email: "",
      phoneno: "",
      college: ""
  });

  const data = (e) => {
    console.log(e.target.name,e.target.value)
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };
  console.log(inputdata)
  let {name,age,gender,email,phoneno,college}=inputdata
  console.log(name,age,gender,email,phoneno,college)
  const addinputdata = (e) => {
    e.preventDefault();
    console.log(inputdata)
    //setArray([...array,inputdata])
    localStorage.setItem('details', JSON.stringify( inputdata));
    
    window.location.href='login'
    // if(name===""||age===""||gender===""||email===""||phoneno===""||college===""){
    //     alert("complete all details")
    // }
    // else{
    // // e.preventDefault();
   
    // 
    // alert("Successful submit");
    // setInputdata({name: "",
    // age: "",
    // gender: "",
    // email: "",
    // phoneno: "",
    // college: ""
   
    // });
    // }
    //console.log(array);
  };
   
  return (
    <div className='container'>
        <div>
      <form >
        <label >Name:</label><br />
        <input type="text" name="name" defaultValue={inputdata.name} required maxLength={{value:30,message:'30 chars max'}} onChange={(e)=>data(e)} /><br />

        <label>Age:</label><br />
        <input type="text" name="age" defaultValue={inputdata.age} max='15' onChange={(e)=>data(e)} /><br />

        <label>Gender:</label>
        <label htmlFor='male'>Male:</label>
        <input type="radio" id="male" name="gender" value="male" checked={inputdata.gender === "male"} onChange={(e)=>data(e)} />
        <label htmlFor='female'>Female:</label>
        <input type="radio" id="female" name="gender" value="female" checked={inputdata.gender === "female"} onChange={(e)=>data(e)} /><br />

        <label>Email:</label>
        <input type="text" name="email" defaultValue={inputdata.email} required onChange={(e)=>data(e)} /><br />

        <label>Phoneno:</label>
        <input  name="phoneno" defaultValue={inputdata.phoneno} required onChange={(e)=>data(e)} /><br />
        <label>College:</label>
        <select name="college"  onChange={(e)=>data(e)}>
            <option  value='VVIT' required>VVIT</option>
            <option   value={'VVIT'} required >IIT</option>
            <option   value={'VVIT'} required >SRM</option>
            <option  value={'VVIT'} required >VIt</option>
        </select>
        <br />

        <button  onClick={addinputdata}>Submit</button><br></br><br></br>
        </form>
    </div>
    </div>
   );
}
export default Table;