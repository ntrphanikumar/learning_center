import { useNavigate } from 'react-router-dom'
import React,{useState} from 'react'




function Home() {
  const[name,setname]=useState("")
  const[type,settype]=useState("")
  const[loc,setloc]=useState("")
  const[con,setcon]=useState("")
  const[add,setadd]=useState("")
  const[taf,settaf]=useState(false)
 
  
  const navigate=useNavigate()
  
  

  function handledata(e){
    e.preventDefault()
    console.log({name,type,loc,con,add,taf})
    const _blogs=localStorage.getItem("blogs") && localStorage.getItem("blogs").length>0? JSON.parse(localStorage.getItem("blogs") ): []
    
    localStorage.setItem("blogs",JSON.stringify([..._blogs,{name,type,loc,con,add,taf}]))
    navigate('/add')
    

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
         <select className="form__input" name="type" onChange={(e)=>settype(e.target.value)}>
           <option>Veg</option>
           <option>Non Veg</option>
           <option>Both</option>
         </select>
      <br/>
      <span>Location:</span>
         <input className="form__input" name="loc" type="text" placeholder="Location"  onChange={(e)=>setloc(e.target.value)}></input>
       <br/>
      <span>Contact:</span>
          <input  className="form__input" name="con" type="text" placeholder="Mobile Number"  onChange={(e)=>setcon(e.target.value)}></input>
      <br/>         
      <span>Address:</span>
         <input className="form__input" name="add" type="Url" placeholder="Url"  onChange={(e)=>setadd(e.target.value)}></input>
       
       <span className="pp">The given information is shared to public.</span>  
        <br></br>
      <input type="checkbox" name="taf" onChange={(e)=>settaf(e.target.checked)}></input><span className="pp">Agree</span>
      <br/>
      <input type="submit"   className="button"></input>
      </div>
      </div> 
    </form>
    
);
}

export default Home