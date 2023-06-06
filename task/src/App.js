import Div1 from "./aps"
import './App.css';
import Bor from "./bar";
import DoughnutGraph from "./donut"
import Tab from "./table"


import LineChart from './line';

function App() {
  return (
    <div className="container1" >
  <Div1/>
  <LineChart/>
  <div className="con">
  <DoughnutGraph/>
  <Bor/>
  </div > 
  <Tab/>
    </div>
  );
}

export default App;


