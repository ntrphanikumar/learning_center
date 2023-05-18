import React from 'react';
import {useState} from 'react';
function Form (props){
    
    const [user,setUser]=useState({
        name1:"",
        lastname:"",
        gender:"",
        email:"",
        phoneno:"",
        education:""
    })
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUser({...user,[name]:[value]})
        localStorage.setItem("user",JSON.stringify(user));
    }
   
    const handleClick=(e)=>{
        //const name=e.target.name;
        //const value=e.target.value;
        e.preventDefault();
        const val={user};
        props.func(val);
        clearData();
    }
    // const handleSubmit= (evnt) =>{
    //     evnt.preventDefault();
    //     setUser()
    //     const clearData=()=>{
    //  setUser({name1:"",lastname:"",gender:"",email:"",phoneno:"",education:""})
    //      }

        // const checkEmptyInput = !Object.values(user).every(res=>res==="")
        // if(checkEmptyInput)
        // {
        //  const newData = (data)=>([...data, user])
         
        //  const emptyInput= {name1:"",
        //  lastname:"",
        //  gender:"",
        //  email:"",
        //  phoneno:"",
        //  education:""}
        //  setUser(emptyInput)
        // }
     
    const clearData=()=>{
        setUser({name1:"",lastname:"",gender:"",email:"",phoneno:"",education:""})
     }
    return(
        <div className='form1'>
            <div className='form'>
            <label className='lb'>Name :
                <input   type="text" name="name1" value={user.name1} onChange={handleChange} ></input> </label><br></br>
            <label className='lb'>Lastname :
                <input type="text" name="lastname" value={user.lastname} onChange={handleChange}  ></input> </label><br></br>
            <label className='lb'>Gender :
                <label className='lb'>Male:</label>
                <input   type="radio" name="gender" value={user.gender} onChange={handleChange}  ></input>          
             <label className='lb'>Female:</label>
                <input   type="radio" name="gender" value={user.gender} onChange={handleChange} ></input></label><br></br>
             <label className='lb'>Email :
                <input  type="text" name="email" value={user.email} onChange={handleChange}  ></input></label><br></br>
            <label className='lb'>phone no :
                <input type="text" name="phoneno" value={user.phoneno} onChange={handleChange} ></input> </label><br></br>
            <label className='lb'>Education :
                <input  type="text" name="education" value={user.education} onChange={handleChange} ></input> <br></br>
                </label>
                <button onClick={handleClick} >Submit</button>         
        </div>
        </div>
    )
}
export default Form;