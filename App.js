
import './App.css';
import React,{useState} from 'react'


function App() {
  const[name,setname]=useState("")
  const[type,settype]=useState("")
  const[loc,setloc]=useState("")
  const[con,setcon]=useState("")
  const[add,setadd]=useState("")
  const[taf,settaf]=useState(false)
  

  function handledata(e){
    e.preventDefault()
    console.warn("all data:",name,type,loc,con,add,taf)
  }
  return (
    <form onSubmit={handledata}> 

      <div className="App-header">  
      <h2 className="hea">Near me</h2>
      <div className="center" >
        
      <span>Restuarant Name:</span>
         <input className="form__input" name="name" type="text" placeholder="Restuarant name" onChange={(e)=>setname(e.target.value)}></input>
      <br/>
      <span>Type:</span>
         <select className="form__input"  onChange={(e)=>settype(e.target.value)}>
           <option>Veg</option>
           <option>Non Veg</option>
           <option>Both</option>
         </select>
      <br/>
      <span>Location:</span>
         <input className="form__input" name="name" type="text" placeholder="Location"  onChange={(e)=>setloc(e.target.value)}></input>
       <br/>
      <span>Contact:</span>
          <input  className="form__input" name="number" type="text" placeholder="Mobile Number"  onChange={(e)=>setcon(e.target.value)}></input>
      <br/>         
      <span>Address:</span>
         <input className="form__input" name="name" type="Url" placeholder="Url"  onChange={(e)=>setadd(e.target.value)}></input>
       
       <span className="pp">The given information is shared to public.</span>  
        <br></br>
      <input type="checkbox" onChange={(e)=>settaf(e.target.checked)}></input><span className="pp">Agree</span>
      <br/>
      <input type="submit" className="button"></input>
      </div>
      </div> 
    </form>
);
}

export default App;
