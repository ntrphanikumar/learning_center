import Form from "./components/Form";
//import {Link} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BeforePop from "./components/BeforePop";



function App() {
  return (
    
    <BrowserRouter>
     
    
     <Routes>
         <Route  path="/" element={<Form />} />
         <Route  path="/tablelist" element={<BeforePop/>} />
         <Route  path="/back" element={<Form/>} />
         <Route path="/afterpop" element={<BeforePop/>}/>
       </Routes>
     </BrowserRouter>
  );
}

export default App;