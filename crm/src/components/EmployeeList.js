import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const URL_ALL_EMP_DATA='http://localhost:8080/getAllEmp';
const URL_DELETE_DATA='http://localhost:8080/deleteEmp/';

export default function EmployeeList(props) {
  const navigate = useNavigate();


  const updatepage  = (event, param) => {
    // 👇️ navigate to /contacts
    console.log("id"+param)
    props.setData(param);
    navigate('/employee-list/update');
  };

  async function delData(param) {
    // Default options are marked with *
    const response = await fetch(URL_DELETE_DATA + param, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    });
    return await response; // parses JSON response into native JavaScript objects
  }


  const deleteData  = (event, param) => {
    console.log("id"+param)
    delData(param).then((data) => {
      if(data.status === 200)
      alert("Data Deleted Successfully");
      console.log(data);
      getAllEmp().then((data) => {
        setEmpData(data)
      });
    }).catch(error => (console.log(error)));
  };

  let count=0;
  const [empData,setEmpData]=useState([]);

  async function getAllEmp(){
        const response = await fetch(URL_ALL_EMP_DATA, {
          method: 'GET'
        });
        return await response.json();
    }

    useEffect(() => {
      getAllEmp().then((data) => {
        setEmpData(data)
      });
     }, []);



  return (
    <>
    <div className='container my-3'>
      <table className="table">
        <thead>
            <tr>
            <th scope="col">S.No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
        {empData.map((emp) =>{
           return (
                <tr key={emp.employeeid}>
                      <th scope="row">{++count}</th>
                      <td>{emp.firstname} </td>
                      <td>{emp.lastname}</td>
                      <td>{emp.email}</td>
                      <td>{emp.phone}</td>
                      <td>{emp.address}</td>
                      <td>
                      <button type="button" onClick={event => updatepage(event, `${emp.employeeid}`)} className="btn btn-warning">Update</button>
                      <button type="button" onClick={event => deleteData(event, `${emp.employeeid}`)} className="btn btn-danger mx-1">Delete</button>
                      </td>
                  </tr>
           )
        })}

        </tbody>
        </table>
    </div>
    </>
  )
}
