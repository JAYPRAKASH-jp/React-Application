import React, { useEffect, useState } from "react";

const URL_ALL_EMP_DATA='http://localhost:8080/getAllappoint';

export default function ViewAppointment() {
  
  let count=0;
  const [allAppointments,setData]=useState([{}]);
  

async function getAllData(){
  const response = await fetch(URL_ALL_EMP_DATA, {
    method: 'GET'
  });
  return await response.json();
}

useEffect(() => {
getAllData().then((data) => {
  console.log(data);
  setData(data)
});
}, []);


  return (
    <div className="container-xxl my-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">State</th>
            <th scope="col">Age</th>
            <th scope="col">Complete Address</th>
            <th scope="col">Trainer </th>
            <th scope="col">Physio required</th>
            <th scope="col">Package </th>
            <th scope="col">Total Amount</th>
          </tr>
        </thead>

        <tbody>
        {
          allAppointments.data?.map((allAppointments) => {
          return ( 
          <tr key={allAppointments["id"]}>
            <th scope="row">{++count}</th>
            <td>{allAppointments["name"]}</td>
            <td>{allAppointments["phone"]}</td>
            <td>{allAppointments["state"]}</td>
            <td>{allAppointments["age"]}</td>
            <td>{allAppointments["address1"]}</td>
            <td>{allAppointments["trainer"]}</td>
            <td>{allAppointments["np"] === 1 ? "Yes" : "No"}</td>
            <td>{allAppointments["sap"]}</td>
            <td>{allAppointments["amount"]}</td>

          </tr>
        )})}
        </tbody>
      </table>
    </div>
  );
}
