import Form from "./components/Form";
//import {Link} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


import BeforePop from "./components/BeforePop";


function App() {
  return (
    
        
    <BrowserRouter>
     
    
      <Routes>
        <Route  path="/" element={<Form/>} />
        <Route  path="/beforepop" element={<BeforePop/>} />
        <Route  path="/backForm" element={<Form/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
