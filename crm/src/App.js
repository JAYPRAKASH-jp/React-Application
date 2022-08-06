import { useState } from "react";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [employeeData, setInputs] = useState("");

  const [empId,setData]=useState();
  return (

     

    <div className="App">
           
            <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route exact path="/" element={  <EmployeeList setData={setData}/>}/>
              <Route exact path="/employee-list" element={<EmployeeList setData={setData}/>} />
              <Route exact path="/add-employee" element={<AddEmployee EmployeeData={employeeData}/>} />
              <Route exact path="/employee-list/update" element={<AddEmployee EmployeeData={employeeData} data={empId}/>} />
            </Routes>
            </BrowserRouter>


              {/* <EmployeeList/> */}
              
    </div>
  );
}

export default App;


