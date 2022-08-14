import React, { useState } from "react";
const URL_POST='http://localhost:8080/postContact';
export default function ContactUs() {
  const [result,setResult]=useState({});
  const [input,setInput]=useState({});
  const handleOnChange = (event) =>{
      const name=event.target.name;
      const value=event.target.value;

      // console.log("Name:" + name + " Value" + value);

      setInput(values => ({...values, [name] : value}))
  }
  async function postData() {
    // Default options are marked with *
    const response = await fetch(URL_POST, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }
  const handleOnSubmint = (event) =>
  {
    console.log("Inputes :" + input)
    postData().then((data) => {
      setResult(data)
    });
    event.preventDefault();
  }


  return (
    <form className="container" onSubmit={handleOnSubmint}>
      { (result.status==="success" && result.message==="Data inserted successfully") &&
        <div className="alert alert-success" role="alert">
           We will contact you soon.
        </div>
      }
      <div className="mb-3 my-4">
        <label for="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          name="name"
          value={input.name || ""}
          onChange={handleOnChange}
          placeholder="Your name"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          name="email"
          value={input.email || ""}
          onChange={handleOnChange}
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          name="phone"
          value={input.phone || ""}
          onChange={handleOnChange}
          placeholder="99776655"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          name="message"
          value={input.message || ""}
          onChange={handleOnChange}
          rows="3"
        ></textarea>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="submit" className="btn btn-primary mb-3">Submit</button>
      </div>
    </form>
  );
}
