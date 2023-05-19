import Form from "./components/Form";
import Table from "./components/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="login" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
