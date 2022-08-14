import React, { useEffect, useState } from "react";

const URL_POST='http://localhost:8080/postAppoint';
export default function PlaceAppointment() {
  const [input,setInput]=useState({ "week" : 1});
  const [result,setResult]=useState({});
  const [totalamount,setAmount]=useState(0);
  let amount=0;
  let amountp=0;
  const handleOnChange = async(event) =>{
      const name=event.target.name;
      const value=event.target.value;
      setInput(values => ({...values, [name] : value}))

      if(name=== "np" || name==="week" || name=== "sap"){
        updateAmount(name,value); 
      }
      //console.log("Name:" + name + " Value" + value);

  }
  useEffect(() => {
    // action on update of totalamount
    // console.log("Mehod Called");
    setInput(values => ({...values, "amount" : totalamount}))
  }, [totalamount]);
  const handleOnSubmint = (event) =>
  {
    
    postData().then((data) => {
      setResult(data)
    })

    event.preventDefault();
  }

  function updateAmount( name,value){
    if(name=== "sap"){
      amount=((value === "4spw") ? (400 * input.week || 1 ) : amount);
      amount=((value === "5spw") ? (300 * input.week || 1 ): amount);
      amount=((value === "otp") ? 500 : amount);
      setInput(values => ({...values, "sapAmount" : amount}));
      amountp=((input.np === "Yes") ? 200 : 0 );
    }
    else if(value && name=== "week" ){
      amount=input.sapAmount * value;
      amountp=((input.np === "Yes") ? 200 : 0 );
    }
    else{
      amount=((input.np === "Yes" && value === "No") ? totalamount-200 :  totalamount) ;
      amountp=((value === "Yes" && name=== "np") ?  200 : 0);
    }

    setAmount(amountp+amount)


   
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
  return (
    <div className="container my-4">
      { (result.status==="success" && result.message==="Data inserted successfully") &&
        <div className="alert alert-success" role="alert">
           Appointment has been taken successfully
        </div>
      }
      { (result.status==="success" && result.message==="Data present") &&
        <div className="alert alert-warning" role="alert">
               Appointment already present with this phone number
        </div>
      }

      <form className="row g-3" onSubmit={handleOnSubmint}>
        <div className="col-md-6">
          <label htmlFor="validationDefault01" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            name="name"
            value={input.name || ""}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault02" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            name="age"
            value={input.age || ""}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefaultUsername" className="form-label">
            Address Line 1
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              name="address1"
              value={input.address1 || ""}
              onChange={handleOnChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefaultUsername" className="form-label">
            Address Line 2
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              name="address2"
              value={input.address2 || ""}
              onChange={handleOnChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault03"
            name="city"
            value={input.city || ""}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault03"
            name="state"
            value={input.state || ""}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">
            Country
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault03"
            name="country"
            value={input.country || ""}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault03"
            name="phone"
            value={input.phone || ""}
            onChange={handleOnChange}
            required
          />
        </div>
        {/*     Trainer Preference */}

        <div className="row mt-4">
          <label htmlFor="validationDefault03" className="form-label">
            <h5>Trainer Preference</h5>
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="trainer"
              value="Male"
              checked={input.trainer === "Male"}
              onChange={handleOnChange}
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male Trainer
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="trainer"
              value="Female"
              checked={input.trainer === "Female"}
              onChange={handleOnChange}
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Female Trainer
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="trainer"
              value="Any"
              checked={input.trainer === "Any"}
              onChange={handleOnChange}
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              No Preference
            </label>
          </div>
        </div>  
            {/*           Do you need Physiotherapist  */}
        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">
            Do you need Physiotherapist
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="np"
              value="Yes"
              checked={input.np === "Yes"}
              onChange={handleOnChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
             Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="np"
              value="No"
              checked={input.np === "No"}
              onChange={handleOnChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
             No
            </label>
          </div>
        </div>
            {/* Package */}
        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">
           Select a Package
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="sap"
              value="otp"
              checked={input.sap === "otp"}
              onChange={handleOnChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
             One time appointment (Rs. 500/-)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="sap"
              value="4spw"
              checked={input.sap === "4spw"}
              onChange={handleOnChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
             4 Session per week (Rs. 400/-per sesion)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="sap"
              value="5spw"
              checked={input.sap === "5spw"}
              onChange={handleOnChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              5 session per week (Rs. 300/- per sesion)
            </label>
          </div>
        </div>
        {/* Week and Amount */}

          {
           (input.sap === "5spw" || input.sap === "4spw") && 
              <div className="col-md-6 ">
              <label htmlFor="validationDefault01" className="form-label">
                Week
              </label>
              <input
                type="number"
                className="form-control"
                id="validationDefault01"
                name="week"
                value={input.week}
                onChange={handleOnChange}
                required
              />
            </div>
          }
          
       
        <div className="col-md-6">
          <label htmlFor="validationDefault02" className="form-label">
            Amount(Rs)
          </label>
          <input
            type="number"
            className="form-control"
            id="validationDefault02"
            name="amount"
            value={totalamount}
          />
        </div>


        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary float-right" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
