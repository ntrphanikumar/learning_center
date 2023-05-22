import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formm from './Components/Formm';
import TargetPage from './Components/TargetPage';


function App() {
  return (
    <BrowserRouter>


      <Routes>

       <Route path="/" element={<Formm/>  }/>
        <Route path="list"  target="_blank" element={<TargetPage />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;