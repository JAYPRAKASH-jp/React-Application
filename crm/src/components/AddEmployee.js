import React, { useEffect } from "react";
import { useState } from "react";
// import ApiResp from "../Services/ApiResp";


const URL_REGISTER_EMP='http://localhost:8080/registerEmp';
const URL_SINGLE_DATA='http://localhost:8080/getEmp/';
const URL_UPDATE_DATA='http://localhost:8080/updateEmp/';

export default function AddEmployee(props) {

    const [inputs, setInputs] = useState({});
    const [result,setResult]=useState({});

    async function postData() {
      // Default options are marked with *
      const response = await fetch(URL_REGISTER_EMP, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs) // body data type must match "Content-Type" header
      });
      return await response.json(); // parses JSON response into native JavaScript objects
    }

    async function updateData() {
      // Default options are marked with *
      const response = await fetch(URL_UPDATE_DATA + props.data, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs) // body data type must match "Content-Type" header
      });
      return await response; // parses JSON response into native JavaScript objects
    }




    async function getEmpByID(){
      const response = await fetch(URL_SINGLE_DATA + props.data, {
        method: 'GET'
      });
      return await response.json();
    }

    const handleSubmit = async (event) => {
      
      if(props.data)
      {
        console.log("Update Call");
        updateData().then((data) => {
          if(data.status === 200)
          alert("Data Updated Successfully");
          console.log(data);
        }).catch(error => (console.log(error)));
        
      } else {
        postData().then((data) => {
          setResult(data)
        });
      }
      
      event.preventDefault(); 
    }
    useEffect(() => {
      getEmpByID().then((data) => {
        setInputs(data)
      });
     }, []);


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

  return (
    <>
      <div className="container my-4">
       { result.Status==="Success" &&
        <div className="alert alert-success" role="alert">
             Employee added with Username '{result.Username}' and Password '{result.Password}'
        </div>
      }
        <h1>Add New Employee Detail</h1>
        <form onSubmit={handleSubmit} className="row g-3 needs-validation my-2">
          <div className="col-md-4">
            <label htmlFor="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              name="firstname"
              value={inputs.firstname  || ""}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              name="lastname"
              value={inputs.lastname || ""}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustomUsername" className="form-label">
              Email
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                name="email"
                value={inputs.email  || ""}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">Please choose email.</div>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom03" className="form-label">
              Addres
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              name="address" 
              value={inputs.address || ""}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Please provide Address.</div>
          </div>
          <div className="col-md-3">
            <label htmlFor="validationCustom05" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom05"
              name="phone" 
              value={inputs.phone || ""}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Please provide a Valid phone.</div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" >Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
